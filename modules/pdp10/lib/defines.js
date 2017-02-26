/**
 * @fileoverview PDP10-specific compile-time definitions.
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © Jeff Parsons 2012-2017
 *
 * This file is part of PCjs, a computer emulation software project at <http://pcjs.org/>.
 *
 * PCjs is free software: you can redistribute it and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * PCjs is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with PCjs.  If not,
 * see <http://www.gnu.org/licenses/gpl.html>.
 *
 * You are required to include the above copyright notice in every modified copy of this work
 * and to display that copyright notice when the software starts running; see COPYRIGHT in
 * <http://pcjs.org/modules/shared/lib/defines.js>.
 *
 * Some PCjs files also attempt to load external resource files, such as character-image files,
 * ROM files, and disk image files. Those external resource files are not considered part of PCjs
 * for purposes of the GNU General Public License, and the author does not claim any copyright
 * as to their contents.
 */

"use strict";

/**
 * @define {string}
 */
var APPCLASS = "pdp10";         // this @define is the default application class (eg, "pcx86", "c1pjs")

/**
 * APPNAME is used more for display purposes than anything else now.  APPCLASS is what matters in terms
 * of folder and file names, CSS styles, etc.
 *
 * @define {string}
 */
var APPNAME = "PDPjs";          // this @define is the default application name (eg, "PCx86", "C1Pjs")

/**
 * WARNING: DEBUGGER needs to accurately reflect whether or not the Debugger component is (or will be) loaded.
 * In the compiled case, we rely on the Closure Compiler to override DEBUGGER as appropriate.  When it's *false*,
 * nearly all of debugger.js will be conditionally removed by the compiler, reducing it to little more than a
 * "type skeleton", which also solves some type-related warnings we would otherwise have if we tried to remove
 * debugger.js from the compilation process altogether.
 *
 * However, when we're in "development mode" and running uncompiled code in debugger-less configurations,
 * I would like to skip loading debugger.js altogether.  When doing that, we must ALSO arrange for an additional file
 * (nodebugger.js) to be loaded immediately after this file, which *explicitly* overrides DEBUGGER with *false*.
 *
 * @define {boolean}
 */
var DEBUGGER = true;            // this @define is overridden by the Closure Compiler to remove Debugger-related support

/*
 * Combine all the shared globals and machine-specific globals into one machine-specific global object,
 * which all machine components should start using; eg: "if (PDP10.DEBUG) ..." instead of "if (DEBUG) ...".
 */
var PDP10 = {
    APPCLASS:   APPCLASS,
    APPNAME:    APPNAME,
    APPVERSION: APPVERSION,     // shared
    COMPILED:   COMPILED,       // shared
    CSSCLASS:   CSSCLASS,       // shared
    DEBUG:      DEBUG,          // shared
    DEBUGGER:   DEBUGGER,
    MAXDEBUG:   MAXDEBUG,       // shared
    PRIVATE:    PRIVATE,        // shared
    SITEHOST:   SITEHOST,       // shared
    XMLVERSION: XMLVERSION,     // shared

    /*
     * CPU model numbers (supported)
     */
    MODEL_KA10: 1001,

    /*
     * This constant is used to mark points in the code where the physical address being returned
     * is invalid and should not be used.
     *
     * In a 32-bit CPU, -1 (ie, 0xffffffff) could actually be a valid address, so consider changing
     * ADDR_INVALID to NaN or null (which is also why all ADDR_INVALID tests should use strict equality
     * operators).
     *
     * The main reason I'm NOT using NaN or null now is my concern that, by mixing non-numbers
     * (specifically, values outside the range of signed 32-bit integers), performance may suffer.
     *
     * WARNING: Like many of the properties defined here, ADDR_INVALID is a common constant, which the
     * Closure Compiler will happily inline (with or without @const annotations; in fact, I've yet to
     * see a @const annotation EVER improve automatic inlining).  However, if you don't make ABSOLUTELY
     * certain that this file is included BEFORE the first reference to any of these properties, that
     * automatic inlining will no longer occur.
     */
    ADDR_INVALID:   -1,
    ADDR_LIMIT:     Math.pow(2, 18),
    ADDR_MASK:      Math.pow(2, 18) - 1,
    DATA_INVALID:   -1,
    DATA_LIMIT:     Math.pow(2, 36),
    RHWORD_MASK:    0o777777,

    /*
     * PDP-10 opcodes are 36-bit values, most of which use the following layout:
     *
     *                          1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3
     *      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
     *      O O O O O O O M M A A A A I X X X X Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y
     *
     * or using modern bit-numbering:
     *
     *      3 3 3 3 3 3 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1
     *      5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
     *      O O O O O O O M M A A A A I X X X X Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y
     *
     * where OOOOOOOMM represents the operation, and MM (if used) represents the mode:
     *
     *      Mode        Suffix      Source  Destination
     *      ----        ------      -----   -----------
     *  0:  BASIC       None        E       AC
     *  1:  IMMEDIATE   I           0,E     AC
     *  2:  MEMORY      M           AC      E
     *  3:  SELF        S           E       E (and AC if A is non-zero)
     *
     * Input-output instructions look like:
     *
     *      3 3 3 3 3 3 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1
     *      5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
     *      1 1 1 D D D D D D D O O O I X X X X Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y
     *
     * Bits 0-22 (I,X,Y) contain what we call a "reference address" (R), which is used to calculate the
     * "effective address" (E).  To determine E from R, we must extract I, X, and Y from R, set E to Y,
     * then add [X] to E if X is non-zero.  If I is zero, then we're done; otherwise, we must set R to [E]
     * and repeat the process.
     */
    OPCODE: {
        OPMASK:     0o77700,            // operation mask
        OPMODE:     0o77400,            // operation with mode
        OPCOMP:     0o77000,            // operation with compare
        OPTEST:     0o71100,            // operation with test
        OPIO:       0o70034,            // input-output operation
        OPUUO:      0o70000,            // unimplemented user operation (UUO) mask
        OPSHIFT:    Math.pow(2, 21),    // operation shift
        IOSHIFT:    Math.pow(2, 26),    // input-output device code shift
        IOMASK:     0o177,              // input-output device code mask (after shift)
        ACSHIFT:    Math.pow(2, 23),    // used to isolate the high 13 bits, with A starting at bit 0
        A_SHIFT:    23,                 // A shift
        A_MASK:     0o17,               // A mask (after shift)
        I_BIT:      0o20000000,         // indirect bit
        X_SHIFT:    18,                 // X shift
        X_MASK:     0o17,               // X mask (after shift)
        Y_MASK:     0o777777,           // Y mask
        HALT:       0o5304              // operation code for HALT
    },

    /*
     * Internal operation state flags
     */
    OPFLAG: {
        IRQ_DELAY:  0x0001,             // incremented until it becomes IRQ
        IRQ:        0x0002,             // time to call checkInterrupts()
        IRQ_MASK:   0x0003,
        DEBUGGER:   0x0004,             // set if the Debugger wants to perform checks
        WAIT:       0x0008,             // WAIT operation in progress
        PRESERVE:   0x000F,             // OPFLAG bits to preserve prior to the next instruction
    }
};

/*
 * Combine all the shared globals and machine-specific globals into one machine-specific global object,
 * which all machine components should start using; eg: "if (PDP10.DEBUGGER)" instead of "if (DEBUGGER)".
 */
PDP10.APPCLASS          = APPCLASS;
PDP10.APPNAME           = APPNAME;
PDP10.DEBUGGER          = DEBUGGER;

if (NODE) {
    global.APPCLASS     = APPCLASS;
    global.APPNAME      = APPNAME;
    global.DEBUGGER     = DEBUGGER;
    global.PDP10        = PDP10;
    module.exports      = PDP10;
}