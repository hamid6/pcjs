---
layout: page
title: "TI-42 Programmable Calculator (with Original ROM and Diagnostics)"
permalink: /devices/ti42/machine/diags/
machines:
  - id: ti42
    type: ti42
    name: TI-42 Programmable Calculator
    uncompiled: true
    config: |
      {
        "ti42": {
          "class": "Machine",
          "type": "TI42",
          "name": "TI-42 Emulator",
          "version": 1.10,
          "bindings": {
            "clear": "clearTI42",
            "print": "printTI42"
          }
        },
        "chip": {
          "class": "Chip",
          "type": "TMS-1502",
          "input": "buttons",
          "output": "display",
          "bindings": {
            "2nd": "ind2ndTI42"
          }
        },
        "clock": {
          "class": "Time",
          "cyclesPerSecond": 650000,
          "bindings": {
            "run": "runTI42",
            "speed": "speedTI42",
            "step": "stepTI42"
          },
          "overrides": ["cyclesPerSecond","yieldsPerSecond","yieldsPerUpdate"]
        },
        "display": {
          "class": "LED",
          "type": 3,
          "cols": 12,
          "rows": 1,
          "color": "red",
          "bindings": {
            "container": "displayTI42"
          },
          "overrides": ["color","backgroundColor"]
        },
        "buttons": {
          "class": "Input",
          "location": [56, 322, 358, 462, 0.34, 0.5, 465, 832, 322, 182, 74, 36],
          "map": [
            ["2nd",  "cpt",  "lnx",  "sq",   "clr"],
            ["n",    "pcti", "pmt",  "pv",   "fv"],
            ["pct",  "rcp",  "dbd",  "xchg", "sigma"],
            ["rst",  "rs",   "(",    ")",    "/"],
            ["sto",  "7",    "8",    "9",    "*"],
            ["rcl",  "4",    "5",    "6",    "-"],
            ["sum",  "1",    "2",    "3",    "+"],
            ["\\b",  "0",    ".",    "+/-",  "=|\\r"]
          ],
          "bindings": {
            "surface": "imageTI42",
            "power": "powerTI42",
            "reset": "resetTI42"
          }
        },
        "rom": {
          "class": "ROM",
          "wordSize": 13,
          "valueSize": 16,
          "valueTotal": 2048,
          "littleEndian": true,
          "file": "tmc1502le.bin",
          "reference": "",
          "chipID": "TMC1502",
          "revision": "0",
          "bindings": {
          	"array": "romArrayTI42",
          	"cellDesc": "romCellTI42"
          },
          "overrides": ["colorROM","backgroundColorROM"],
          "values": [
            4685,2279,3308,2241,3585,3584,2079,1879,3590,1806,7143,5967,7143,5986,7143,3194,
            7886,6217,6257,6249,7045,6654,3308,6667,3194,6240,5533,5182,3194,7905,3877,6881,
            6145,6243,6271,6159,7034,3194,7999,6189,3194,7179,5869,7143,4057,5493,1822,5112,
            6905,6184,6298,6205,3194,8001,6877,3587,3879,6750,5415,5422,6309,3194,6586,3248,
            6188,6236,6312,6181,3194,8002,2087,6871,7142,5731,7143,5493,1887,2119,3098,7956,
            6933,6731,6332,6953,3096,6834,3096,6842,3194,3304,7871,6871,3194,7181,5464,7143,
            543,6030,7145,3194,3241,6247,3240,3244,7144,3194,3112,7885,5492,3110,6906,5724,
            7143,3194,7513,3246,7300,6269,5869,5389,5461,5869,1863,5384,5422,3633,6337,3194,
            7615,3246,7301,6292,3184,5411,1829,6340,5415,5395,3186,7286,1991,5407,5731,3588,
            1807,5865,5638,5452,1991,5507,3649,3590,1823,7143,3194,7534,3246,6309,5861,5846,
            5413,1829,7226,5422,5738,3665,5470,6337,3194,7669,3246,6330,3184,5411,1829,6370,
            5861,3186,7350,1863,5424,6336,5731,1863,5415,5738,3681,6337,3194,7515,3246,7341,
            3697,3590,3185,7143,3186,6377,5461,5389,5411,3242,6349,1879,5738,3633,3590,3589,
            5869,3588,5413,1829,6361,5415,5455,5462,6365,5455,5132,5643,5731,5869,1863,5384,
            5732,6269,5861,5846,5392,3186,6336,5422,6330,5415,1829,7419,1863,5413,1829,7419,
            5639,1991,5407,5392,5644,5395,1991,5407,5462,5732,6408,5413,1863,5415,5643,5429,
            1991,5458,1999,5458,1991,1807,5731,5639,3649,3089,3590,5398,3186,7617,5861,5846,
            5389,1823,5387,5428,5738,1991,5426,5639,1863,5384,1991,5644,3588,1999,3242,6435,
            5461,5732,1879,5409,5732,5382,1814,3588,2007,5461,5732,1863,5407,5738,1991,1863,
            5382,5422,3588,1991,5384,5422,3588,1999,5428,5644,5405,5731,5643,3242,6464,5638,
            5384,1879,5422,1863,5405,5644,3590,3254,613,7506,3158,6412,1376,1376,7506,1389,
            1381,7436,3186,7664,5452,3590,5398,5409,6292,3184,5638,5862,5846,5392,1991,5424,
            5639,3186,7143,5409,1879,5738,1991,1863,5411,5639,5126,1807,5126,6338,5126,1879,
            5643,3697,3590,1807,5862,5846,5392,1991,5424,5639,3186,7551,3184,5126,6516,5126,
            1879,5643,1991,5415,5392,5644,6338,5389,5448,5449,5507,5350,5387,1935,5432,5434,
            6126,5738,6131,5643,5432,5434,5462,5345,5435,1991,5505,1863,3589,5639,3588,1999,
            5462,5738,5432,5448,5449,5452,3588,5418,5432,5507,3588,5435,3088,5443,5418,5432,
            1815,3186,7606,3184,5126,6535,1863,5126,5643,6338,3112,3096,3318,6861,6882,1793,
            5389,1793,5387,3601,3588,3585,3588,5373,3601,3584,5359,3617,3584,5359,5407,5359,
            5409,5359,5411,5359,5413,5359,5415,5359,3649,5358,3665,5358,3681,5358,3697,5358,
            3601,3589,1991,5382,1863,3585,3584,5643,5422,1991,5384,1879,5644,3588,3184,6471,
            5384,5967,5638,5452,6338,5126,5862,1879,5126,5422,1863,5413,5644,6337,3194,6665,
            3585,3584,1793,3590,2272,3594,3310,6657,7032,3296,3308,5533,2121,3194,6672,3324,
            5182,3194,7905,3877,7709,3118,6722,3122,2561,3108,3116,6685,3104,3118,7734,2055,
            3594,3584,1863,1815,1991,3298,7742,3310,6704,3326,3325,6153,3302,6152,3588,6153,
            3129,3326,3325,6717,5733,6718,3300,3117,3112,2055,3594,3589,6690,5644,3302,7929,
            3590,6906,3106,6881,3110,3114,7905,3872,3872,2605,6685,3194,6740,401,257,3594,
            3588,3590,2208,6735,257,329,473,3594,3588,3194,7847,257,3592,3253,1793,5315,
            1097,3473,3877,7786,3218,7820,3216,1127,1120,6796,3841,549,6767,3218,6794,719,
            647,2144,749,941,1247,3895,3122,6769,3182,6792,3174,6792,1453,1445,6796,3126,
            7820,5484,3156,73,2145,7817,5599,6788,616,552,2055,1087,813,877,5182,2121,
            3593,808,872,3873,7786,3873,7844,3873,6812,3118,7780,6823,3118,6823,5484,3167,
            2145,7820,5599,6816,2080,3118,7769,3879,3329,2193,5510,7154,3130,7559,5643,5452,
            5422,6949,3112,3194,6863,3098,6840,3296,3300,6850,3108,3194,6863,3098,7874,3308,
            3585,3588,3236,3244,5497,5500,5738,3649,5501,5639,3601,3590,6978,3193,3116,3238,
            7906,3236,3250,6908,3249,3585,6899,3250,7243,3238,6908,3252,6889,5493,3236,3872,
            6905,1815,3252,7143,5733,3250,8167,2079,5112,4065,6908,4057,3594,2081,2085,2561,
            7922,2079,1815,3588,7144,3877,7952,3873,2277,3588,287,7143,5493,2151,3877,2085,
            6914,2119,2149,7948,2141,6901,3318,6922,3314,7905,4064,3594,287,3841,3105,6899,
            1887,1806,3162,6933,3128,2120,7963,2120,7908,5641,6885,2079,3250,6943,3601,3588,
            1999,1806,3182,7852,5865,5466,1999,2247,6885,3665,5474,3589,5738,3649,5475,5464,
            3681,5475,3589,3617,5474,5464,3633,5475,3589,5462,3588,5682,3697,5475,7032,5497,
            7143,3232,5497,5464,5470,5738,3633,3246,8010,3681,5470,5643,1991,5415,3234,6993,
            5638,5723,3234,7181,3238,7143,3298,8050,5469,5732,3302,8167,3590,5497,5738,5500,
            5639,3310,7143,3306,8043,3585,5466,5643,5469,5422,7143,1991,5469,3585,3589,5738,
            5644,7143,5986,5469,5732,3246,3245,7882,1815,7143,3194,7038,3260,7145,3258,3259,
            8167,3591,3591,8065,7145,3194,8080,1927,5120,2561,3590,1815,3258,8169,7032,5135,
            3592,3253,5120,3126,8079,1793,2593,8090,544,7062,6056,1991,3593,5141,3877,7075,
            2600,1497,7089,3118,7086,3117,3943,3192,3848,3134,7086,3126,7086,3841,5110,1535,
            1512,5124,1528,1823,5315,3593,616,616,872,872,2377,6056,872,872,3592,5692,
            3196,5182,3194,7122,3107,3127,2597,8080,3111,2597,8079,3123,3127,2597,7764,3107,
            3111,3123,3118,7129,3193,3126,7129,3872,2081,3877,8158,3194,7134,3116,2759,3593,
            5120,5143,5135,2597,7764,7056,3091,2193,5533,5182,3194,8174,3877,7774,3225,6056,
            711,1815,2561,2265,1504,3586,2080,3587,3097,3290,7164,3096,1927,3587,0,0,
            3665,3584,2631,3587,3847,3587,5493,1822,5112,3588,287,3587,1865,103,3587,5120,
            2592,3126,6427,2561,6427,3293,6168,3292,2639,639,3401,5168,2145,7205,5124,1399,
            296,3424,1288,7210,6172,3294,6190,2591,3429,6174,3588,591,2687,3587,2759,6187,
            2632,2561,2569,2593,3133,3913,5124,3594,6409,3252,2561,3257,3261,799,3193,3258,
            3262,7300,3593,975,3592,3591,3591,7237,3401,3545,2592,7373,5311,3591,3591,6218,
            2623,5319,3591,3591,6218,3198,7265,3194,6241,3127,3111,3107,2597,3107,3111,3127,
            7300,3130,6244,3125,5589,1535,3114,6261,3126,7276,3122,7285,2080,3873,3118,6269,
            3126,7285,3841,2605,3193,2085,6332,3126,3130,3877,7356,3195,6210,2080,3118,7283,
            3872,3872,3872,6269,967,3593,3254,7227,3401,3545,3262,7322,3591,3591,6298,3194,
            7322,2623,3122,7322,3126,6298,3110,6298,3106,7340,5120,2592,3590,3126,6305,3122,
            7225,5168,2145,7334,296,6306,3877,7340,3118,3117,6316,3192,1823,5589,1535,2080,
            3118,2081,6332,3122,7352,3130,7354,6332,3126,6332,2080,3873,3261,3592,3587,3254,
            6346,3122,6343,841,3592,865,7370,3593,863,3592,3591,3591,3587,3424,6220,3552,
            3286,6220,3545,5315,3593,1376,3591,3591,7248,2592,3126,6358,2561,1359,3455,1901,
            6358,1865,103,96,96,6756,1879,1793,6120,6106,6115,6135,6106,6762,3589,1879,
            5422,1991,5382,1879,5644,3588,5380,5738,3601,3589,1879,5644,3588,5380,5462,3588,
            5384,1879,5738,6991,3585,6409,3617,6409,3633,3589,3587,3617,6414,3633,3588,3587,
            1863,5411,6762,1863,5413,6756,5413,1829,6428,5415,3091,3590,3587,1991,6433,3633,
            6440,3649,6440,3665,6440,3681,6440,3697,3584,3587,1865,103,96,584,1806,6756,
            5413,6762,5415,6453,5413,1863,5411,6756,3192,6459,1927,2007,5682,5809,1887,5643,
            3194,3193,6348,1863,5382,5644,3588,6408,1927,2007,5682,5809,5708,5708,6859,1863,
            5409,5738,1863,5407,6756,5409,5132,6668,1991,6748,1863,3589,6496,3601,1863,3584,
            1806,3587,1991,5470,3194,6503,3128,5641,3590,1823,3585,3587,2121,2144,1896,79,
            3895,3122,7533,3587,5507,3871,3594,455,6409,3617,3246,7549,3665,1991,5471,5415,
            6756,5507,5507,5716,5716,6859,1127,1120,79,3447,101,7574,3166,7569,3154,6545,
            3088,3158,7579,616,552,6536,616,3592,5708,101,7574,3592,6859,5835,3585,5470,
            2009,1865,3156,5599,3090,6567,3431,2119,1351,1389,1381,7653,2081,5597,5597,3118,
            6574,1028,6596,5598,711,544,1252,6586,749,6582,741,6597,545,967,1815,5706,
            804,6558,799,6597,5598,2149,6603,1061,6603,1125,7620,3286,7667,552,616,3094,
            6619,1120,3282,6614,3091,2567,3587,3130,3090,6620,3252,1121,3587,2081,557,1901,
            3152,3164,3587,5708,557,3094,7651,1317,7663,5715,2081,6631,2049,6631,5598,2081,
            6638,3284,6577,813,1377,7647,1312,6738,3094,769,7678,801,3093,7684,1313,7683,
            613,3343,6649,39,3252,6859,5132,3128,1806,3130,6668,3091,1423,3129,3158,7717,
            3094,1299,7722,1445,6664,3090,6686,3154,7712,525,7688,521,1887,6859,3154,7705,
            520,6684,557,5707,6684,3094,6664,1299,7688,1445,613,7701,1028,557,6704,544,
            5708,6668,5132,783,3329,1353,3129,549,6723,1351,2121,1281,1377,8106,6039,6716,
            808,1376,3092,37,7744,1294,1356,7082,544,7082,513,39,3094,6646,1313,1317,
            6738,3093,3587,621,3094,7670,1313,6738,1319,3092,3587,3128,1887,6757,5683,2527,
            1343,3154,6859,5132,3128,3130,6762,549,7680,3095,1935,583,3338,3089,3154,6769,
            3088,3217,3346,3222,7832,1288,7672,513,5711,1425,1353,677,7708,3130,7840,534,
            941,1057,6794,557,549,6803,535,1367,5702,6684,850,6785,941,877,167,5708,
            804,7708,6785,101,6784,872,5716,6785,1293,6812,3095,1294,1289,6775,905,544,
            909,6814,877,37,6826,552,549,6816,5716,6816,905,840,840,905,7708,5704,
            6684,1814,841,3169,3094,7883,941,5716,3094,7878,872,613,7870,3168,5825,552,
            6839,533,7770,529,864,6849,5708,936,3094,7883,5825,3129,6865,37,6868,552,
            5716,549,6861,1793,1927,6735,5389,5638,1806,1999,5409,5732,3242,6879,5644,3633,
            3589,1991,1879,1815,3587,5407,5389,5461,3633,549,8026,5835,3232,3121,3122,8016,
            5592,1991,5638,3094,6908,1441,1424,1453,1445,7932,5835,6984,1823,1927,1287,3447,
            1325,1287,3575,1281,3088,549,7673,5689,841,3122,6926,103,549,7774,798,769,
            2063,2081,8107,2081,8118,2081,8126,2081,8132,2081,8136,39,6034,798,3122,6955,
            797,7984,793,911,790,6034,790,848,6944,791,856,903,6034,790,786,6953,
            2144,3182,6926,3178,6926,3122,7774,6045,777,5684,841,1901,3557,8001,3423,1901,
            1383,3222,6980,3152,1822,6044,5738,5644,3234,3233,8012,3587,1806,3589,5733,3120,
            6043,5809,3328,3170,7672,3545,2265,1359,2552,6919,3154,7005,5625,613,6987,5591,
            5682,6859,5592,1793,677,7883,5132,1441,8049,1441,8045,1312,7015,3222,7024,1312,
            621,3217,2121,1287,2424,1281,1425,7047,877,813,7046,897,897,776,901,7035,
            777,786,7043,165,7032,936,877,869,7036,5684,3351,2383,1343,6684,3253,3237,
            813,7065,2063,7061,813,2081,7060,1287,816,813,3587,1863,1793,6122,6120,808,
            6122,6115,6100,6115,808,6096,6120,808,808,808,3587,6114,6120,6124,808,6124,
            6104,6096,6100,808,6117,6941,6095,6115,808,6119,808,6100,6115,7106,6094,6115,
            6056,6119,6120,6941,6093,6115,6055,6941,6092,6115,808,6941,6096,6096,6096,6096,
            808,1317,816,3587,808,800,800,7131,808,7126,808,800,800,800,800,800,
            800,3587,6096,808,7132,808,7133,6120,808,7134,808,7135,808,7136,6138,808,
            6106,6135,7148,6138,808,6120,7153,6055,6055,7079,1863,1793,7144,0,0,0
          ]
        }
      }
styles:
  ti42:
    position: relative;
    display: inline-block;
    float: left;
    margin-right: 32px;
  displayTI42:
    position: absolute;
    left: 15%;
    top: 8%;
    width: 70%;
    height: 4%;
  .indTI42:
    font-size: 11px;
    font-family: Monaco,"Lucida Console",monospace;
    color: red;
  ind2ndTI42:
    position: absolute;
    left: 15%;
    top: 13%;
    width: 7%;
    height: 2%;
    opacity: 0;
  powerTI42:
    position: absolute;
    left: 69%;
    top: 22%;
    width: 16%;
    height: 4%;
    opacity: 0;
  .diagsTI42:
    float: left;
  printTI42:
    font-family: Monaco,"Lucida Console",monospace;
  romArrayTI42:
    display: inline-block;
    max-width: 512px;
  romCellTI42:
    font-family: Monaco,"Lucida Console",monospace;
  .regRow:
    padding-left: 1em;
    font-family: Monaco,"Lucida Console",monospace;
  .regLabel:
    padding-left: 1em;
  .regDigit:
    border: 1px solid;
---

TI-42 "MBA" Programmable Calculator (with Original ROM and Diagnostics)
-----------------------------------------------------------------------

The TI-42 configuration below is identical to our [Original](../) configuration, except that
it includes diagnostics.

If any errors occur during operation, the Diagnostics window should display the last instruction decoded.
The window also accepts a few debugging commands.  Use '?' for help.

{% include machine.html id="ti42" config="json" %}

<div id="ti42">
  <img id="imageTI42" src="/devices/ti42/images/TI-42.png" alt="TI-42 Calculator"/>
  <div id="displayTI42"></div>
  <div id="ind2ndTI42" class="indTI42">2nd</div>
  <button id="powerTI42">Power</button>
</div>
<div class="diagsTI42">
  <div>
    <p>Diagnostics</p>
    <textarea id="printTI42" cols="78" rows="16"></textarea>
  </div>
  <button id="runTI42">Run</button>
  <button id="stepTI42">Step</button><span id="speedTI42">Stopped</span>
  <button id="resetTI42">Reset</button>
  <button id="clearTI42">Clear</button>
  <p>ROM Activity</p>
  <div id="romArrayTI42"></div>
  <p id="romCellTI42">[No ROM address selected]</p>
  <p>Operational Registers</p>
  <div>
  	<div class="regRow">
  	  <span class="regLabel">A</span>
  	  <span class="regDigit" id="regA-15">0</span>
  	  <span class="regDigit" id="regA-14">0</span>
  	  <span class="regDigit" id="regA-13">0</span>
  	  <span class="regDigit" id="regA-12">0</span>
  	  <span class="regDigit" id="regA-11">0</span>
  	  <span class="regDigit" id="regA-10">0</span>
  	  <span class="regDigit" id="regA-09">0</span>
  	  <span class="regDigit" id="regA-08">0</span>
  	  <span class="regDigit" id="regA-07">0</span>
  	  <span class="regDigit" id="regA-06">0</span>
  	  <span class="regDigit" id="regA-05">0</span>
  	  <span class="regDigit" id="regA-04">0</span>
  	  <span class="regDigit" id="regA-03">0</span>
  	  <span class="regDigit" id="regA-02">0</span>
  	  <span class="regDigit" id="regA-01">0</span>
  	  <span class="regDigit" id="regA-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">B</span>
  	  <span class="regDigit" id="regB-15">0</span>
  	  <span class="regDigit" id="regB-14">0</span>
  	  <span class="regDigit" id="regB-13">0</span>
  	  <span class="regDigit" id="regB-12">0</span>
  	  <span class="regDigit" id="regB-11">0</span>
  	  <span class="regDigit" id="regB-10">0</span>
  	  <span class="regDigit" id="regB-09">0</span>
  	  <span class="regDigit" id="regB-08">0</span>
  	  <span class="regDigit" id="regB-07">0</span>
  	  <span class="regDigit" id="regB-06">0</span>
  	  <span class="regDigit" id="regB-05">0</span>
  	  <span class="regDigit" id="regB-04">0</span>
  	  <span class="regDigit" id="regB-03">0</span>
  	  <span class="regDigit" id="regB-02">0</span>
  	  <span class="regDigit" id="regB-01">0</span>
  	  <span class="regDigit" id="regB-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">C</span>
  	  <span class="regDigit" id="regC-15">0</span>
  	  <span class="regDigit" id="regC-14">0</span>
  	  <span class="regDigit" id="regC-13">0</span>
  	  <span class="regDigit" id="regC-12">0</span>
  	  <span class="regDigit" id="regC-11">0</span>
  	  <span class="regDigit" id="regC-10">0</span>
  	  <span class="regDigit" id="regC-09">0</span>
  	  <span class="regDigit" id="regC-08">0</span>
  	  <span class="regDigit" id="regC-07">0</span>
  	  <span class="regDigit" id="regC-06">0</span>
  	  <span class="regDigit" id="regC-05">0</span>
  	  <span class="regDigit" id="regC-04">0</span>
  	  <span class="regDigit" id="regC-03">0</span>
  	  <span class="regDigit" id="regC-02">0</span>
  	  <span class="regDigit" id="regC-01">0</span>
  	  <span class="regDigit" id="regC-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">D</span>
  	  <span class="regDigit" id="regD-15">0</span>
  	  <span class="regDigit" id="regD-14">0</span>
  	  <span class="regDigit" id="regD-13">0</span>
  	  <span class="regDigit" id="regD-12">0</span>
  	  <span class="regDigit" id="regD-11">0</span>
  	  <span class="regDigit" id="regD-10">0</span>
  	  <span class="regDigit" id="regD-09">0</span>
  	  <span class="regDigit" id="regD-08">0</span>
  	  <span class="regDigit" id="regD-07">0</span>
  	  <span class="regDigit" id="regD-06">0</span>
  	  <span class="regDigit" id="regD-05">0</span>
  	  <span class="regDigit" id="regD-04">0</span>
  	  <span class="regDigit" id="regD-03">0</span>
  	  <span class="regDigit" id="regD-02">0</span>
  	  <span class="regDigit" id="regD-01">0</span>
  	  <span class="regDigit" id="regD-00">0</span>
  	</div>
  </div>
  <p>Storage Registers</p>
  <div>
  	<div class="regRow">
  	  <span class="regLabel">X0</span>
  	  <span class="regDigit" id="regX0-15">0</span>
  	  <span class="regDigit" id="regX0-14">0</span>
  	  <span class="regDigit" id="regX0-13">0</span>
  	  <span class="regDigit" id="regX0-12">0</span>
  	  <span class="regDigit" id="regX0-11">0</span>
  	  <span class="regDigit" id="regX0-10">0</span>
  	  <span class="regDigit" id="regX0-09">0</span>
  	  <span class="regDigit" id="regX0-08">0</span>
  	  <span class="regDigit" id="regX0-07">0</span>
  	  <span class="regDigit" id="regX0-06">0</span>
  	  <span class="regDigit" id="regX0-05">0</span>
  	  <span class="regDigit" id="regX0-04">0</span>
  	  <span class="regDigit" id="regX0-03">0</span>
  	  <span class="regDigit" id="regX0-02">0</span>
  	  <span class="regDigit" id="regX0-01">0</span>
  	  <span class="regDigit" id="regX0-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X1</span>
  	  <span class="regDigit" id="regX1-15">0</span>
  	  <span class="regDigit" id="regX1-14">0</span>
  	  <span class="regDigit" id="regX1-13">0</span>
  	  <span class="regDigit" id="regX1-12">0</span>
  	  <span class="regDigit" id="regX1-11">0</span>
  	  <span class="regDigit" id="regX1-10">0</span>
  	  <span class="regDigit" id="regX1-09">0</span>
  	  <span class="regDigit" id="regX1-08">0</span>
  	  <span class="regDigit" id="regX1-07">0</span>
  	  <span class="regDigit" id="regX1-06">0</span>
  	  <span class="regDigit" id="regX1-05">0</span>
  	  <span class="regDigit" id="regX1-04">0</span>
  	  <span class="regDigit" id="regX1-03">0</span>
  	  <span class="regDigit" id="regX1-02">0</span>
  	  <span class="regDigit" id="regX1-01">0</span>
  	  <span class="regDigit" id="regX1-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X2</span>
  	  <span class="regDigit" id="regX2-15">0</span>
  	  <span class="regDigit" id="regX2-14">0</span>
  	  <span class="regDigit" id="regX2-13">0</span>
  	  <span class="regDigit" id="regX2-12">0</span>
  	  <span class="regDigit" id="regX2-11">0</span>
  	  <span class="regDigit" id="regX2-10">0</span>
  	  <span class="regDigit" id="regX2-09">0</span>
  	  <span class="regDigit" id="regX2-08">0</span>
  	  <span class="regDigit" id="regX2-07">0</span>
  	  <span class="regDigit" id="regX2-06">0</span>
  	  <span class="regDigit" id="regX2-05">0</span>
  	  <span class="regDigit" id="regX2-04">0</span>
  	  <span class="regDigit" id="regX2-03">0</span>
  	  <span class="regDigit" id="regX2-02">0</span>
  	  <span class="regDigit" id="regX2-01">0</span>
  	  <span class="regDigit" id="regX2-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X3</span>
  	  <span class="regDigit" id="regX3-15">0</span>
  	  <span class="regDigit" id="regX3-14">0</span>
  	  <span class="regDigit" id="regX3-13">0</span>
  	  <span class="regDigit" id="regX3-12">0</span>
  	  <span class="regDigit" id="regX3-11">0</span>
  	  <span class="regDigit" id="regX3-10">0</span>
  	  <span class="regDigit" id="regX3-09">0</span>
  	  <span class="regDigit" id="regX3-08">0</span>
  	  <span class="regDigit" id="regX3-07">0</span>
  	  <span class="regDigit" id="regX3-06">0</span>
  	  <span class="regDigit" id="regX3-05">0</span>
  	  <span class="regDigit" id="regX3-04">0</span>
  	  <span class="regDigit" id="regX3-03">0</span>
  	  <span class="regDigit" id="regX3-02">0</span>
  	  <span class="regDigit" id="regX3-01">0</span>
  	  <span class="regDigit" id="regX3-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X4</span>
  	  <span class="regDigit" id="regX4-15">0</span>
  	  <span class="regDigit" id="regX4-14">0</span>
  	  <span class="regDigit" id="regX4-13">0</span>
  	  <span class="regDigit" id="regX4-12">0</span>
  	  <span class="regDigit" id="regX4-11">0</span>
  	  <span class="regDigit" id="regX4-10">0</span>
  	  <span class="regDigit" id="regX4-09">0</span>
  	  <span class="regDigit" id="regX4-08">0</span>
  	  <span class="regDigit" id="regX4-07">0</span>
  	  <span class="regDigit" id="regX4-06">0</span>
  	  <span class="regDigit" id="regX4-05">0</span>
  	  <span class="regDigit" id="regX4-04">0</span>
  	  <span class="regDigit" id="regX4-03">0</span>
  	  <span class="regDigit" id="regX4-02">0</span>
  	  <span class="regDigit" id="regX4-01">0</span>
  	  <span class="regDigit" id="regX4-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X5</span>
  	  <span class="regDigit" id="regX5-15">0</span>
  	  <span class="regDigit" id="regX5-14">0</span>
  	  <span class="regDigit" id="regX5-13">0</span>
  	  <span class="regDigit" id="regX5-12">0</span>
  	  <span class="regDigit" id="regX5-11">0</span>
  	  <span class="regDigit" id="regX5-10">0</span>
  	  <span class="regDigit" id="regX5-09">0</span>
  	  <span class="regDigit" id="regX5-08">0</span>
  	  <span class="regDigit" id="regX5-07">0</span>
  	  <span class="regDigit" id="regX5-06">0</span>
  	  <span class="regDigit" id="regX5-05">0</span>
  	  <span class="regDigit" id="regX5-04">0</span>
  	  <span class="regDigit" id="regX5-03">0</span>
  	  <span class="regDigit" id="regX5-02">0</span>
  	  <span class="regDigit" id="regX5-01">0</span>
  	  <span class="regDigit" id="regX5-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X6</span>
  	  <span class="regDigit" id="regX6-15">0</span>
  	  <span class="regDigit" id="regX6-14">0</span>
  	  <span class="regDigit" id="regX6-13">0</span>
  	  <span class="regDigit" id="regX6-12">0</span>
  	  <span class="regDigit" id="regX6-11">0</span>
  	  <span class="regDigit" id="regX6-10">0</span>
  	  <span class="regDigit" id="regX6-09">0</span>
  	  <span class="regDigit" id="regX6-08">0</span>
  	  <span class="regDigit" id="regX6-07">0</span>
  	  <span class="regDigit" id="regX6-06">0</span>
  	  <span class="regDigit" id="regX6-05">0</span>
  	  <span class="regDigit" id="regX6-04">0</span>
  	  <span class="regDigit" id="regX6-03">0</span>
  	  <span class="regDigit" id="regX6-02">0</span>
  	  <span class="regDigit" id="regX6-01">0</span>
  	  <span class="regDigit" id="regX6-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X7</span>
  	  <span class="regDigit" id="regX7-15">0</span>
  	  <span class="regDigit" id="regX7-14">0</span>
  	  <span class="regDigit" id="regX7-13">0</span>
  	  <span class="regDigit" id="regX7-12">0</span>
  	  <span class="regDigit" id="regX7-11">0</span>
  	  <span class="regDigit" id="regX7-10">0</span>
  	  <span class="regDigit" id="regX7-09">0</span>
  	  <span class="regDigit" id="regX7-08">0</span>
  	  <span class="regDigit" id="regX7-07">0</span>
  	  <span class="regDigit" id="regX7-06">0</span>
  	  <span class="regDigit" id="regX7-05">0</span>
  	  <span class="regDigit" id="regX7-04">0</span>
  	  <span class="regDigit" id="regX7-03">0</span>
  	  <span class="regDigit" id="regX7-02">0</span>
  	  <span class="regDigit" id="regX7-01">0</span>
  	  <span class="regDigit" id="regX7-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y0</span>
  	  <span class="regDigit" id="regY0-15">0</span>
  	  <span class="regDigit" id="regY0-14">0</span>
  	  <span class="regDigit" id="regY0-13">0</span>
  	  <span class="regDigit" id="regY0-12">0</span>
  	  <span class="regDigit" id="regY0-11">0</span>
  	  <span class="regDigit" id="regY0-10">0</span>
  	  <span class="regDigit" id="regY0-09">0</span>
  	  <span class="regDigit" id="regY0-08">0</span>
  	  <span class="regDigit" id="regY0-07">0</span>
  	  <span class="regDigit" id="regY0-06">0</span>
  	  <span class="regDigit" id="regY0-05">0</span>
  	  <span class="regDigit" id="regY0-04">0</span>
  	  <span class="regDigit" id="regY0-03">0</span>
  	  <span class="regDigit" id="regY0-02">0</span>
  	  <span class="regDigit" id="regY0-01">0</span>
  	  <span class="regDigit" id="regY0-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y1</span>
  	  <span class="regDigit" id="regY1-15">0</span>
  	  <span class="regDigit" id="regY1-14">0</span>
  	  <span class="regDigit" id="regY1-13">0</span>
  	  <span class="regDigit" id="regY1-12">0</span>
  	  <span class="regDigit" id="regY1-11">0</span>
  	  <span class="regDigit" id="regY1-10">0</span>
  	  <span class="regDigit" id="regY1-09">0</span>
  	  <span class="regDigit" id="regY1-08">0</span>
  	  <span class="regDigit" id="regY1-07">0</span>
  	  <span class="regDigit" id="regY1-06">0</span>
  	  <span class="regDigit" id="regY1-05">0</span>
  	  <span class="regDigit" id="regY1-04">0</span>
  	  <span class="regDigit" id="regY1-03">0</span>
  	  <span class="regDigit" id="regY1-02">0</span>
  	  <span class="regDigit" id="regY1-01">0</span>
  	  <span class="regDigit" id="regY1-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y2</span>
  	  <span class="regDigit" id="regY2-15">0</span>
  	  <span class="regDigit" id="regY2-14">0</span>
  	  <span class="regDigit" id="regY2-13">0</span>
  	  <span class="regDigit" id="regY2-12">0</span>
  	  <span class="regDigit" id="regY2-11">0</span>
  	  <span class="regDigit" id="regY2-10">0</span>
  	  <span class="regDigit" id="regY2-09">0</span>
  	  <span class="regDigit" id="regY2-08">0</span>
  	  <span class="regDigit" id="regY2-07">0</span>
  	  <span class="regDigit" id="regY2-06">0</span>
  	  <span class="regDigit" id="regY2-05">0</span>
  	  <span class="regDigit" id="regY2-04">0</span>
  	  <span class="regDigit" id="regY2-03">0</span>
  	  <span class="regDigit" id="regY2-02">0</span>
  	  <span class="regDigit" id="regY2-01">0</span>
  	  <span class="regDigit" id="regY2-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y3</span>
  	  <span class="regDigit" id="regY3-15">0</span>
  	  <span class="regDigit" id="regY3-14">0</span>
  	  <span class="regDigit" id="regY3-13">0</span>
  	  <span class="regDigit" id="regY3-12">0</span>
  	  <span class="regDigit" id="regY3-11">0</span>
  	  <span class="regDigit" id="regY3-10">0</span>
  	  <span class="regDigit" id="regY3-09">0</span>
  	  <span class="regDigit" id="regY3-08">0</span>
  	  <span class="regDigit" id="regY3-07">0</span>
  	  <span class="regDigit" id="regY3-06">0</span>
  	  <span class="regDigit" id="regY3-05">0</span>
  	  <span class="regDigit" id="regY3-04">0</span>
  	  <span class="regDigit" id="regY3-03">0</span>
  	  <span class="regDigit" id="regY3-02">0</span>
  	  <span class="regDigit" id="regY3-01">0</span>
  	  <span class="regDigit" id="regY3-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y4</span>
  	  <span class="regDigit" id="regY4-15">0</span>
  	  <span class="regDigit" id="regY4-14">0</span>
  	  <span class="regDigit" id="regY4-13">0</span>
  	  <span class="regDigit" id="regY4-12">0</span>
  	  <span class="regDigit" id="regY4-11">0</span>
  	  <span class="regDigit" id="regY4-10">0</span>
  	  <span class="regDigit" id="regY4-09">0</span>
  	  <span class="regDigit" id="regY4-08">0</span>
  	  <span class="regDigit" id="regY4-07">0</span>
  	  <span class="regDigit" id="regY4-06">0</span>
  	  <span class="regDigit" id="regY4-05">0</span>
  	  <span class="regDigit" id="regY4-04">0</span>
  	  <span class="regDigit" id="regY4-03">0</span>
  	  <span class="regDigit" id="regY4-02">0</span>
  	  <span class="regDigit" id="regY4-01">0</span>
  	  <span class="regDigit" id="regY4-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y5</span>
  	  <span class="regDigit" id="regY5-15">0</span>
  	  <span class="regDigit" id="regY5-14">0</span>
  	  <span class="regDigit" id="regY5-13">0</span>
  	  <span class="regDigit" id="regY5-12">0</span>
  	  <span class="regDigit" id="regY5-11">0</span>
  	  <span class="regDigit" id="regY5-10">0</span>
  	  <span class="regDigit" id="regY5-09">0</span>
  	  <span class="regDigit" id="regY5-08">0</span>
  	  <span class="regDigit" id="regY5-07">0</span>
  	  <span class="regDigit" id="regY5-06">0</span>
  	  <span class="regDigit" id="regY5-05">0</span>
  	  <span class="regDigit" id="regY5-04">0</span>
  	  <span class="regDigit" id="regY5-03">0</span>
  	  <span class="regDigit" id="regY5-02">0</span>
  	  <span class="regDigit" id="regY5-01">0</span>
  	  <span class="regDigit" id="regY5-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y6</span>
  	  <span class="regDigit" id="regY6-15">0</span>
  	  <span class="regDigit" id="regY6-14">0</span>
  	  <span class="regDigit" id="regY6-13">0</span>
  	  <span class="regDigit" id="regY6-12">0</span>
  	  <span class="regDigit" id="regY6-11">0</span>
  	  <span class="regDigit" id="regY6-10">0</span>
  	  <span class="regDigit" id="regY6-09">0</span>
  	  <span class="regDigit" id="regY6-08">0</span>
  	  <span class="regDigit" id="regY6-07">0</span>
  	  <span class="regDigit" id="regY6-06">0</span>
  	  <span class="regDigit" id="regY6-05">0</span>
  	  <span class="regDigit" id="regY6-04">0</span>
  	  <span class="regDigit" id="regY6-03">0</span>
  	  <span class="regDigit" id="regY6-02">0</span>
  	  <span class="regDigit" id="regY6-01">0</span>
  	  <span class="regDigit" id="regY6-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y7</span>
  	  <span class="regDigit" id="regY7-15">0</span>
  	  <span class="regDigit" id="regY7-14">0</span>
  	  <span class="regDigit" id="regY7-13">0</span>
  	  <span class="regDigit" id="regY7-12">0</span>
  	  <span class="regDigit" id="regY7-11">0</span>
  	  <span class="regDigit" id="regY7-10">0</span>
  	  <span class="regDigit" id="regY7-09">0</span>
  	  <span class="regDigit" id="regY7-08">0</span>
  	  <span class="regDigit" id="regY7-07">0</span>
  	  <span class="regDigit" id="regY7-06">0</span>
  	  <span class="regDigit" id="regY7-05">0</span>
  	  <span class="regDigit" id="regY7-04">0</span>
  	  <span class="regDigit" id="regY7-03">0</span>
  	  <span class="regDigit" id="regY7-02">0</span>
  	  <span class="regDigit" id="regY7-01">0</span>
  	  <span class="regDigit" id="regY7-00">0</span>
  	</div>
  </div>
</div>