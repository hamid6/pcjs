(function(){/*
 http://pcjs.org/modules/devices/device.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/input.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/led.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/rom.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/time.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/tms1500.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/machine.js (C) Jeff Parsons 2012-2017
*/
var p,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ya:!0},ea={};try{ea.__proto__=da;ca=ea.ya;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ia(){ia=function(){};u.Symbol||(u.Symbol=ja)}var ja=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function ka(){ia();var a=u.Symbol.iterator;a||(a=u.Symbol.iterator=u.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});ka=function(){}}function la(a){var b=0;return ma(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function ma(a){ka();a={next:a};a[u.Symbol.iterator]=function(){return this};return a}function na(a){ka();var b=a[Symbol.iterator];return b?b.call(a):la(a)}function oa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function w(a,b){if(b){var c=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ha(c,a,{configurable:!0,writable:!0,value:b})}}w("Number.parseInt",function(a){return a||parseInt});
w("Math.trunc",function(a){return a?a:function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b}});w("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});w("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});var pa="Machine";
function x(a,b,c,d){this.M=d||{};this.J=a;this.na=b;this.version=c||0;this.O={};y[this.J]||(y[this.J]=[]);y[this.J].push(this);qa(this,this.M);ra(this,this.M);sa(this,this.M.bindings);this.ga=""}var ta;
x.prototype.fa=function(a,b){var c=this;switch(a){case ua:b.onclick=function(){var a=va(c);a&&(a.value="")};break;case wa:b.value="",b.addEventListener("keypress",function(a){a=a||window.event;var d=a.which||a.keyCode;if(d){var f=b.value;b.setSelectionRange(f.length,f.length);a.stopPropagation();13==d&&(a.preventDefault(),f=b.value+="\n",b.blur(),b.focus(),xa(c,f))}})}};
function sa(a,b){var c=Array.isArray(b),d;for(d in b){var e=b[d];c&&(d=e);var f=document.getElementById(e);f?(a.O[d]=f,a.fa(d,f)):c||z(a,"unable to find device ID: "+e)}}
function ra(a,b){if(b.overrides){var c,d=ta;if(!d){d={};if(window){c||(c=window.location.search.substr(1));for(var e,f=/\+/g,h=/([^&=]+)=?([^&]*)/g;e=h.exec(c);)d[decodeURIComponent(e[1].replace(f," ")).trim()]=decodeURIComponent(e[2].replace(f," ")).trim()}ta=d}c=d;for(var g in c)0<=b.overrides.indexOf(g)&&(e=c[g],e.match(/^[+-]?[0-9.]+$/)?d=Number.parseInt(e,10):"true"==e?d=!0:"false"==e?d=!1:(d=e,e='"'+e+'"'),b[g]=d,z(a,"overriding "+a.na+" property '"+g+"' with "+e))}}
function qa(a,b){if(a.version){var c="",d=ya(a,a.J);if(d.version!=a.version){c="Machine";var e=d.version}else b.version&&b.version>a.version&&(c="Config",e=b.version);c&&(b="Error: "+a.ca("%s Device version (%3.2f) incompatible with %s version (%3.2f)",b.Ea,a.version,c,e)+"\n\nClearing your browser's cache may resolve the issue.",(c=za)&&0>Aa.indexOf(c)&&(alert(b),Aa.push(c)),z(a,b))}}
function xa(a,b){var c=Ba(a);if(c){var d=b.slice(b.lastIndexOf("\n",b.length-2)+1,-1)||a.ga;a.ga="";d=d.trim();b=d.split(" ");switch(b[0]){case "c":(c=b[1])?(z(a,"set category '"+c+"'"),Ca(a,c)):(c=Ca(a))?z(a,"cleared category '"+c+"'"):z(a,"no category set");break;case "?":var e="";Da.forEach(function(a){e+="\n"+a});e&&z(a,"default commands:"+e);default:for(b.unshift(d),d=0;d<c.length&&!c[d](b,a);d++);}}}
function va(a){var b=wa,c=a.O[b];if(void 0===c){var d=y[a.J],e;for(e in d)if(c=d[e].O[b])break;c||(c=null);a.O[b]=c}return c}function ya(a,b){if(a=y[a.J])for(var c in a)if(a[c].na==b){var d=a[c];break}return d}function A(a,b){if(a=y[a.J])for(var c in a)if(a[c].M["class"]==b){var d=a[c];break}return d}function Ba(a){var b=Ea;return B[a.J]&&B[a.J][b]}function Fa(a){var b=Ga;return a.M.bindings&&a.M.bindings[b]}function Ha(a){if(a=a.O[Ia])var b=a.textContent;return b}
function C(a,b,c){a=+a||0;a<b&&(a=b);a>c&&(a=c);return a}function D(a,b,c){a=a.M[b];void 0===a?a=c:(b=typeof c,typeof a!=b&&("boolean"==b?a=!!a:"number"==typeof c&&(a=+a)));return a}function Ja(a){if(void 0===Ka){var b=!1;if(window)try{window.localStorage.setItem(E,E),b=window.localStorage.getItem(E)==E,window.localStorage.removeItem(E)}catch(c){z(a,c.message),b=!1}Ka=b}return!!Ka}
function La(a){if(window){var b=window.navigator.userAgent;return"iOS"==a&&!!b.match(/(iPod|iPhone|iPad)/)&&!!b.match(/AppleWebKit/)||"MSIE"==a&&!!b.match(/(MSIE|Trident)/)||0<=b.indexOf(a)}return!1}function Ma(a,b){if(F&&0<=F.indexOf(Na))G+=b;else{if(a=va(a))a.value+=b,8192<a.value.length&&(a.value=a.value.substr(a.value.length-4096)),a.scrollTop=a.scrollHeight;a||(a=b.lastIndexOf("\n"),0<=a&&(console.log(G+b.substr(0,a)),G="",b=b.substr(a+1)),G+=b)}}function z(a,b){Ma(a,b+"\n")}
x.prototype.ia=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];Ma(this,this.ca.apply(this,[].concat([a],c instanceof Array?c:oa(na(c)))))};function H(a,b,c){if(a=a.O[b])a.textContent=c}function Ca(a,b){b=void 0===b?"":b;var c=F,d=!b&&F&&0<=F.indexOf(Na);F=b;d&&(b=G,G="",Ma(a,b));return c}
x.prototype.ca=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d="";var e=a.split(/%([-+ 0#]?)([0-9]*)(\.?)([0-9]*)([hlL]?)([A-Za-z%])/),f=0,h;for(h=0;h<e.length-7;h+=7){d+=e[h];var g=c[f++],n=e[h+1],k=+e[h+2]||0,q=+e[h+4]||0,l=e[h+6],m=null;switch(l){case "d":g=Math.trunc(g);case "f":l=Math.trunc(g)+"";q&&(k-=q+1);l.length<k&&("0"==n?(0>g&&k--,l=("0000000000"+Math.abs(g)).slice(-k),0>g&&(l="-"+l)):l=("          "+l).slice(-k));q&&(g=Math.trunc((g-Math.trunc(g))*Math.pow(10,
q)),l+="."+("0000000000"+Math.abs(g)).slice(-q));d+=l;break;case "c":g=String.fromCharCode(g);case "s":for(;g.length<k;)g="-"==n?g+" ":" "+g;d+=g;break;case "X":m=I;case "x":m||(m=Oa);l="";do l=m[g&15]+l,g>>>=4;while(0<--k||g);d+=l;break;default:d+="(unrecognized printf conversion %"+l+")"}}return d+=e[h]};var ua="clear",wa="print",Na="buffer",Da=["c\tset category"],Ea="command",Aa=[],za="version",Ka=void 0,E="PCjs.localStorage",B={},y={},F="",G="",Oa="0123456789abcdef",I="0123456789ABCDEF";
function Pa(a,b,c){x.call(this,a,b,Qa,c);this.time=A(this,J);this.N=this.L=this.f=this.K=null;this.la=D(this,"drag",!1);this.V=D(this,"scroll",!1);this.h=!1;if(a=this.O[Ra]){b=this.M.location;this.oa=b[0];this.pa=b[1];this.g=b[2];this.s=b[3];this.v=b[4]||1;this.H=b[5]||1;this.ha=b[6]||a.naturalWidth||this.g;this.ka=b[7]||a.naturalHeight||this.s;this.Z=b[8]||0;this.$=b[9]||0;this.da=b[10]||0;this.ja=b[11]||0;(this.b=this.M.map)?(this.w=this.b.length,this.l=this.b[0].length):(this.l=this.v,this.w=this.H,
this.v=this.H=0);this.aa=D(this,"hexagonal",!1);this.a=D(this,"buttonDelay",0);this.S=this.g/(this.l+this.l*this.v)|0;this.T=this.s/(this.w+this.w*this.H)|0;this.ba=this.S*this.v|0;this.U=this.T*this.H|0;this.m=this.I=-1;Sa(this,a);Ta(this,a);if(this.time){var d=this;this.a&&(this.Y=Ua(this.time,"timerInputRelease",function(){0>d.m&&0>d.I&&K(d,-1,-1)}));this.b&&(this.a&&(this.ma=Ua(this.time,"timerKeyRelease",function(){Va(d)})),this.j=0,this.u=[],Wa(this))}this.R=this.X=-1}}r(Pa,x);
Pa.prototype.fa=function(a,b){var c=this;switch(a){case Xa:b.onclick=function(){c.f&&c.f()};break;case Ya:b.onclick=function(){c.L&&c.L()}}x.prototype.fa.call(this,a,b)};function Za(a,b){a.N=b}function $a(a){a.a?L(a.time,a.ma,a.a):Va(a)}
function Wa(a){var b=document;b.addEventListener("keydown",function(b){b=b||window.event;if(document.activeElement==a.O[Xa]){var c=ab[b.which||b.keyCode];c&&bb(a,c)&&b.preventDefault()}});b.addEventListener("keypress",function(b){b=b||window.event;var c=String.fromCharCode(b.which||b.charCode);c&&bb(a,c)&&b.preventDefault()})}
function Sa(a,b){b.addEventListener("mousedown",function(c){if(!a.h){var d=a.O[Xa];if(d){var e=window.scrollX,f=window.scrollY;d.focus();window.scrollTo(e,f)}c.button||M(a,b,cb,c)}});b.addEventListener("mousemove",function(c){a.h||M(a,b,db,c)});b.addEventListener("mouseup",function(c){a.h||c.button||M(a,b,N,c)});b.addEventListener("mouseout",function(c){a.h||(0>a.m?M(a,b,db,c):M(a,b,N,c))})}
function Ta(a,b){b.addEventListener("touchstart",function(c){a.V&&(a.h=!0);M(a,b,cb,c)});b.addEventListener("touchmove",function(c){M(a,b,db,c)});b.addEventListener("touchend",function(c){M(a,b,N,c)})}function bb(a,b){for(var c=0;c<a.b.length;c++)for(var d=a.b[c],e=0;e<d.length;e++)if(0<=d[e].split("|").indexOf(b))return a.j?16>a.u.length&&a.u.push(b):(a.j=1,K(a,e,c),$a(a)),!0;a.ia("unrecognized key '%s' (0x%02x)\n",b,b.charCodeAt(0));return!1}
function Va(a){1==a.j?(a.j++,K(a,-1,-1),$a(a)):(a.j=0,a.u.length&&bb(a,a.u.shift()))}
function M(a,b,c,d){var e=-1,f=-1,h=!1,g;if(c<N){d=d||window.event;if(d.targetTouches&&d.targetTouches.length){var n=d.targetTouches[0].pageX;var k=d.targetTouches[0].pageY;h=1<d.targetTouches.length}else n=d.pageX,k=d.pageY;var q=g=0;var l=b;do isNaN(l.offsetLeft)||(g+=l.offsetLeft,q+=l.offsetTop);while(l=l.offsetParent);n=a.ha/b.offsetWidth*(n-g)|0;k=a.ka/b.offsetHeight*(k-q)|0;b=n-a.oa;var m=k-a.pa;q=g=!1;l=n>=a.Z&&n<a.Z+a.da&&k>=a.$&&k<a.$+a.ja;if(0<=b&&b<a.g&&0<=m+a.U||l)if(h||a.V||d.preventDefault(),
0<=b&&b<a.g&&0<=m&&m<a.s){q=!0;d=a.g/a.l|0;var v=a.s/a.w|0,t=b/d|0,R=m/v|0;!a.aa||R&1||(b-=d>>1,t=b/d|0,t==a.l-1&&(b=-1));v=R*v+(a.U>>1);b-=t*d+(a.ba>>1);m-=v;0<=b&&b<a.S&&0<=m&&m<a.T&&(e=t,f=R,g=!0)}}if(!h)if(c==cb)a.m=n,a.I=k,q?(K(a,e,f),g&&a.a&&L(a.time,a.Y,a.a,!0)):l&&a.f&&a.f();else if(c==db)0<=a.m&&0<=a.I&&a.la?K(a,e,f):a.N&&a.N(e,f);else if(c==N){if(c=a.a)c=a.time,e=a.Y,c=c.a&&0<e&&e<=c.b.length?0<=c.b[e-1].W:!1;c||K(a,-1,-1);a.m=a.I=-1}else z(a,"unrecognized action: "+c)}
function K(a,b,c){if(b!=a.R||c!=a.X)a.R=b,a.X=c,a.K&&a.K(b,c)}var cb=1,db=2,N=3,Xa="power",Ya="reset",Ra="surface",ab={8:"\b"},Qa=1.11;
function eb(a,b,c){x.call(this,a,b,fb,c);a=this.O[gb];if(!a)throw Error("LED binding for '"+gb+"' missing: '"+this.M.O[gb]+"'");b=document.createElement("canvas");if(!b||!b.getContext)throw a.innerHTML="LED device requires HTML5 canvas support",Error("LED device requires HTML5 canvas support");this.ha=a;this.type=C(D(this,"type",hb),ib,jb);this.f=kb[this.type][0];this.j=kb[this.type][1];this.width=D(this,"width",this.f);this.height=D(this,"height",this.j);this.g=D(this,"cols",1);this.w=this.g+D(this,
"colsExtra",0);this.S=D(this,"rows",1);this.K=this.S+D(this,"rowsExtra",0);this.U=this.width*this.g;this.N=this.height*this.S;this.s=O("black",0);this.h=lb(this.M.color)||this.s;this.Z=O(this.h,1,.25);this.Y=O(this.h,1,2);this.m=lb(this.M.backgroundColor);this.$=D(this,"fixed",!1);this.$||(b.style.width="100%",b.style.height="auto");this.X=D(this,"hexagonal",!1);this.aa=D(this,"highlight",!0);this.L=D(this,"persistent",this.type<jb);b.setAttribute("width",this.U.toString());b.setAttribute("height",
this.N.toString());b.style.backgroundColor=this.s;a.appendChild(b);this.V=b.getContext("2d");if(this.l=document.createElement("canvas"))this.l.width=this.T=this.f*this.g,this.l.height=this.v=this.j*this.S,this.a=this.l.getContext("2d");this.ba=(this.K+1)*this.w*4;this.b=Array(this.ba);this.da=this.g<this.w?4*(this.w-this.g):0;this.H=this.I=!1;this.u=0;this.R=-1;var d=this;(this.time=A(this,J))&&mb(this.time,function(){P(d)})}r(eb,x);
function nb(a){for(var b=a.b,c=0;c<b.length;c+=4){var d=a,e=b,f=c;e[f]=d.type<jb?ob:" ";e[f+1]=d.h==d.s?null:d.h;e[f+2]=0;e[f+3]=Q}a.H=a.I=!0;P(a,!0)}function pb(a){a.m?(a.a.fillStyle=a.m,a.a.fillRect(0,0,a.T,a.v)):a.a.clearRect(0,0,a.T,a.v)}
function P(a,b){b=void 0===b?!1:b;if(a.H||b){if(a.type<jb){var c=0;if(!a.L||b)pb(a);else if(a.u){c=a.g-a.u;var d=a.f*c;a.a.drawImage(a.l,a.f*a.u,0,d,a.v,0,0,d,a.v)}for(var e=d=0;e<a.K;e++){for(var f=0;f<a.g;f++){var h=a.b[d],g=a.b[d+1]||a.s,n=a.aa&&d==a.R;if(a.b[d+3]&Q||n||b){if(f>=c)a:{var k=a,q=h;h=g;var l=f;g=e;var m=n;l=void 0===l?0:l;g=void 0===g?0:g;m=void 0===m?!1:m;var v=0;if(k.X&&!(g&1)&&(v=k.f>>1,l==k.g-1))break a;if(h&&h!=k.h){m=m?O(h,1,2):h;var t=O(h,1,.25)}else m=m?k.Y:k.h,t=k.Z;h=!1;
q=q?m:t;m==k.s&&(q=k.m,h=!0);m=l*k.f+v;t=g*k.j;k.L&&(l=l*k.f+v,g*=k.j,k.m?(k.a.fillStyle=k.m,k.a.fillRect(l,g,k.f,k.j)):k.a.clearRect(l,g,k.f,k.j));k.a.fillStyle=q;g=qb[k.type];3==g.length?(k.a.beginPath(),k.a.arc(m+g[0],t+g[1],g[2],0,2*Math.PI),h?(k.a.globalCompositeOperation="destination-out",k.a.fill(),k.a.globalCompositeOperation="source-over"):k.a.fill()):k.a.fillRect(m+g[0],t+g[1],g[2],g[3])}a.b[d+3]=n?a.b[d+3]|Q:a.b[d+3]&~Q}d+=4}d+=a.da}a.u=0}else{b="";for(c=0;c<a.b.length;c+=4)b+=a.b[c]||
" ",a.b[c+3]&rb&&(b+=".");pb(a);for(e=d=c=0;c<b.length;c++){g=b[c];"."==g&&d&&d--;f=a;n=d;k=e;n=void 0===n?0:n;k=void 0===k?0:k;if(g=sb[g])for(h=0;h<g.length;h++)if(l=f,v=tb[g[h]]){q=(void 0===n?0:n)*l.f;m=(void 0===k?0:k)*l.j;l.a.fillStyle=l.h;l.a.beginPath();if(3==v.length)l.a.arc(q+v[0],m+v[1],v[2],0,2*Math.PI);else for(t=0;t<v.length;t+=2)t?l.a.lineTo(q+v[t],m+v[t+1]):l.a.moveTo(q+v[t],m+v[t+1]);l.a.closePath();l.a.fill()}if(++d==a.g&&(d=0,++e==a.K))break}}a.V.globalCompositeOperation=a.m&&a.h!=
a.s?"source-over":"copy";a.V.drawImage(a.l,0,0,a.T,a.v,0,0,a.U,a.N);a.H=!1;a.R=-1}else a.L||a.I||nb(a);a.I=!1}function lb(a){return(a=a||void 0)&&ub[a]||a}
function O(a,b,c){b=void 0===b?1:b;c=void 0===c?1:c;if(a){var d=[];a=ub[a]||a;var e=a;var f=16;var h=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);h||(f=10,h=e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*(\d+|)\)$/i));if(h){for(e=1;e<h.length;e++)d[e-1]=Number.parseInt(h[e],f);d.length=e-1;f=!0}else f=!1;if(f){a="rgba(";for(f=0;3>f;f++)h=Math.round(d[f]*c),h=0>h?0:255<h?255:h,a+=h+",";a+=(f<d.length?d[f]:b)+")"}}return a}
function vb(a,b,c,d,e){var f=!1;e=(void 0===e?0:e)&wb;b=4*(c*a.w+b);if(b<=a.b.length-4){if(a.b[b]!==d||(a.b[b+3]&wb)!==e)a.b[b]=d,a.b[b+3]=a.b[b+3]&~wb|e|Q,a.H=f=!0;a.R=b;a.I=!0;a.u=0}return f}
var ib=0,hb=1,jb=3,gb="container",ub={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",
slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ob=0,wb=129,rb=1,Q=128,xb={},qb=(xb[ib]=[4,4,4],xb[hb]=[16,16,14],xb[2]=[2,2,28,28],xb),kb=[[8,8],[32,32],[32,32],[96,128]],tb={A:[30,8,79,8,67,19,37,19],B:[83,10,77,52,67,46,70,22],C:[77,59,71,100,61,89,64,64],
D:[28,91,58,91,69,104,15,104],E:[18,59,28,64,25,88,12,100],F:[24,10,34,21,31,47,18,52],G:[24,56,34,50,60,50,71,56,61,61,33,61],P:[80,102,8]},sb={" ":[],0:"ABCDEF".split(""),1:["B","C"],2:["A","B","D","E","G"],3:["A","B","C","D","G"],4:["B","C","F","G"],5:["A","C","D","F","G"],6:"ACDEFG".split(""),7:["A","B","C"],8:"ABCDEFG".split(""),9:"ABCDFG".split(""),"-":["G"],E:["A","D","E","F","G"],".":["P"]},fb=1.11;
function yb(a,b,c){x.call(this,a,b,zb,c);this.data=c.values;this.h=this.data.length-1;if(this.O[Ga]){var d=this;c=Math.log2(this.data.length)/2;this.f=Math.pow(2,Math.ceil(c));this.g=Math.pow(2,Math.floor(c));this.a=new eb(a,b+"LEDs",{"class":"LED",bindings:{container:Fa(this)},type:hb,cols:this.f,rows:this.g,color:D(this,"colorROM","green"),backgroundColor:D(this,"backgroundColorROM","black"),persistent:!0}),nb(this.a);this.j=new Pa(a,b+"Input",{"class":"Input",location:[0,0,this.a.U,this.a.N,this.f,
this.g],bindings:{surface:Fa(this)}});this.l=Ha(this);Za(this.j,function(a,b){if(d.b){var c=d.l;0<=a&&0<=b&&(a=b*d.f+a,c=Ab(d.b,d.data[a],a));H(d,Ia,c)}})}}r(yb,x);function Bb(a,b,c){a.a&&!c&&vb(a.a,b%a.f,b/a.f|0,1,Q);return a.data[b]}function Cb(a,b){(b=b.shift())&&a.a&&a.a.b.length==b.length&&(a.a.b=b,P(a.a,!0))}function Db(a,b){a.a&&b.push(a.a.b)}var Ga="array",Ia="cellDesc",zb=1.11;
function S(a,b,c){x.call(this,a,b,Eb,c);this.da=D(this,"cyclesMinimum",1E5);this.oa=D(this,"cyclesMaximum",3E6);this.S=C(D(this,"cyclesPerSecond",65E4),this.da,this.oa);this.L=C(D(this,"yieldsPerSecond",Fb),30,120);this.pa=C(D(this,"yieldsPerUpdate",Gb),1,this.L);this.aa=(this.j=D(this,"clockByFrame",120>=this.S))||D(this,"requestAnimationFrame",!0);this.ka=this.la=this.V=1;this.ba=this.S/1E4/100;this.h=this.v=this.ba*this.V;this.w=0;this.Y=Math.round(1E3/this.L);this.Z=[];this.X=[];this.b=[];this.$=
[];this.a=this.H=this.s=!1;this.I=this.g=0;this.sa=this.Ca.bind(this);this.ra=this.ja.bind(this);this.ha=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.setTimeout).bind(window);if(this.j)this.K=this.ma=0;else{var d=this;Ua(this,"timerYield",function(){d.H=!0;var a=d.w,b=Hb(d);b>=d.L?d.w++:d.w+=Math.ceil(d.L/b);d.w>=d.pa&&a<d.pa&&T(d);d.w>=d.L&&(d.w=0)},this.Y)}this.T=this.R=this.m=0;Ib(this)||Jb(this,this.ka)}r(S,x);function mb(a,b){a.Z.push(b)}
S.prototype.fa=function(a,b){var c=this;switch(a){case Kb:b.onclick=function(){c.a?U(c):c.start()};break;case Lb:b.onclick=function(){Mb(c)};break;case Nb:b.addEventListener("mousedown",function(){c.s=!0}),b.addEventListener("mouseup",function(){Ib(c);c.s=!1}),b.addEventListener("mousemove",function(){c.s&&Ib(c)}),b.addEventListener("change",function(){c.s=!0;Ib(c);c.s=!1})}x.prototype.fa.call(this,a,b)};
function Ua(a,b,c,d){d=void 0===d?-1:d;var e=a.b.length+1;a.b.push({id:b,za:c,qa:d,W:-1});0<=d&&L(a,e,d);return e}S.prototype.ja=function(){if(this.j){if(!this.a)return;Ob(this);try{this.H=!1;do Pb(this,V(this,Qb(this,Rb(this))));while(this.a&&!this.H)}catch(b){z(this,b.message);U(this);return}Sb(this)}for(var a=0;a<this.Z.length;a++)this.Z[a]();this.a&&this.aa&&this.ha(this.ra)};function Tb(a){var b=a.h/a.ba;if(!b||b>a.V)b=a.V;a.Ba=a.S/a.L*b;a.la=b}
function Qb(a,b){a.R=a.m=b;if(!a.X.length)return a.m=0,a.R;for(var c=0;0<a.m;)c<a.X.length?b=a.X[c++](b)||1:c=b=0,a.m-=b;return a.R-a.m}function Ub(a,b){var c=Date.now();b()&&(a.N+=Date.now()-c)}function V(a,b){b=void 0===b?a.R-a.m:b;a.j&&(a.K-=b,1>a.K&&(a.H=!0));a.R=a.m=0;a.U+=b;a.T+=b;a.a||(a.T=0);return b}function Hb(a,b){return Math.ceil(a.S*a.la/1E3*(void 0===b?1E3:b))}
function Rb(a){var b=a.K+=a.ma;if(1>b)b=0;else{b|=0;for(var c=a.b.length;0<c;c--){var d=a.b[c-1];!(0>d.W)&&b>d.W&&(b=d.W)}}return b}function Vb(a){1<=a?a=a.toFixed(2)+"Mhz":(a=Math.round(1E6*a),a=999>=a?a+"Hz":Math.ceil(a/1E3)+"Khz");return a}function Mb(a,b){a.a?z(a,"already running"):a.g?U(a):Wb(a,b)}
S.prototype.Ca=function(){this.I=0;if(this.a){Ob(this);try{this.H=!1;do{for(var a=Hb(this,this.Y),b=this.b.length;0<b;b--){var c=this.b[b-1];!(0>c.W)&&a>c.W&&(a=c.W)}Pb(this,V(this,Qb(this,a)))}while(this.a&&!this.H)}catch(d){z(this,d.message);U(this);return}this.a&&(this.I=setTimeout(this.sa,Sb(this)),this.aa||this.ja())}};function Ib(a){var b=a.O[Nb];return b?(Jb(a,Math.floor((b.value-b.min)/(b.max-b.min)*(a.oa-a.da)+a.da)/a.S),!0):!1}
function Jb(a,b){void 0!==b&&(!a.s&&0<a.h&&a.h<.9*a.v&&(b=a.ka),a.V=b,b=a.ba*a.V,a.v!=b&&(a.v=b,H(a,Xb,Vb(a.v))),a.h=a.v);a.j&&(a.ma=1E6*a.h/60+1e-8,a.K=0);a.T=0;a.f=a.l=0;Tb(a);for(b=a.b.length;0<b;b--){var c=a.b[b-1];0<=c.qa&&L(a,b,c.qa,!0)}}function L(a,b,c,d){0<b&&b<=a.b.length&&(b=a.b[b-1],d||0>b.W)&&(c=Hb(a,c),a.a&&(c+=V(a)),b.W=c)}function Ob(a){Tb(a);a.U=0;a.N=0;a.u=Date.now();a.f||(a.f=a.u);if(a.l){var b=a.u-a.l;b>a.Y&&(a.f+=b,a.f>a.u&&(a.f=a.u))}}
function Sb(a){a.l=Date.now();a.N&&(a.f+=a.N,a.u+=a.N);var b=a.Y;a.U&&(b=Math.round(b*a.U/a.Ba));b-=a.l-a.u;var c=a.l-a.f;c&&(a.h=a.T/(10*c)/100);0>b?(-1E3>b&&(a.f-=b),b=0):a.h<a.v&&(b=0);a.l+=b;F&&0<=F.indexOf("time")&&a.ia("after running %d cycles, resting for %dms\n",a.U,b);return b}S.prototype.start=function(){if(this.a||this.g)return!1;this.I&&(clearTimeout(this.I),this.I=0);this.a=!0;this.f=this.l=0;T(this,!0);this.j||(this.I=setTimeout(this.sa,0));this.aa&&this.ha(this.ra);return!0};
function Wb(a,b){b=void 0===b?1:b;a.a||(b&&!a.g&&(a.g=b),a.g&&(b=a.j?Rb(a)||1:1,a.g--,Pb(a,V(a,Qb(a,b))),T(a),a.g&&setTimeout(function(){Wb(a,0)},0)))}function U(a){return a.g?(a.g=0,T(a,!0),!0):a.a?(a.a=!1,V(a),T(a,!0),!0):!1}function T(a,b){b&&(a.a?(z(a,"starting ("+Vb(a.v)+" target by "+(a.j?"frame":"timer")+")"),b=!1):z(a,"stopping"));H(a,Kb,a.a?"Halt":"Run");H(a,Lb,a.g?"Stop":"Step");a.s||H(a,Xb,a.a&&a.h?Vb(a.h):"Stopped");for(var c=0;c<a.$.length;c++)a.$[c](b)}
function Pb(a,b){if(1<=b)for(var c=a.b.length;0<c;c--){var d=a.b[c-1];0>d.W||(d.W-=b,0>=d.W&&(d.W=-1,d.za(),0<=d.qa&&L(a,c,d.qa)))}}var Kb="run",Xb="speed",Lb="step",Nb="throttle",Fb=120,Gb=60,Eb=1.11;function W(a,b,c){x.call(this,a.J,b,a.version);this.b=a;this.name=b;this.c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];if(!c){b=[];c="reg"+this.name;b.push(c);a.Y[c]=[this,-1];for(var d=0;d<this.c.length;d++)c=this.ca("reg%s-%02d",this.name,d),b.push(c),a.Y[c]=[this,d];sa(a,b)}}r(W,x);p=W.prototype;
p.add=function(a,b,c,d){for(var e=0,f=c[0],h=c[1];f<=h;f++)this.c[f]=a.c[f]+b.c[f]+e,e=0,this.c[f]>=d&&(this.c[f]-=d,e=1);e&&(this.b.l=!0);X(this,c)};p.get=function(){return this.c};function Yb(a,b,c){c=void 0===c?[0,15]:c;for(var d=0;d<a.c.length;d++)a.c[d]=0;d=c[0];for(c=c[1];d<=c;d++)a.c[d]=b&15,b>>>=4;return a}p.move=function(a,b){for(var c=b[0],d=b[1];c<=d;c++)this.c[c]=a.c[c];X(a,b)};p.set=function(a){if(a&&a.length==this.c.length)for(var b=0;b<this.c.length;b++)this.c[b]=a[b]};
p.store=function(a){for(var b=0,c=this.c.length;b<c;b++)this.c[b]=a.c[b]};p.sub=function(a,b,c,d){for(var e=0,f=c[0],h=c[1];f<=h;f++)this.c[f]=a.c[f]-b.c[f]-e,e=0,0>this.c[f]&&(this.c[f]+=d,e=1);e&&(this.b.l=!0);X(this,c)};p.toString=function(a){a=void 0===a?!1:a;var b=this.na+"\x3d";a&&3>b.length&&(b+=" ");for(var c=this.c.length-1;0<=c;c--)b=a?b+I[this.c[c]]:b+(Oa[this.c[c]]+(c%4?"":" "));return b};function X(a,b){a.b.j=a.c[b[0]];b[0]<b[1]&&(a.b.j|=a.c[b[0]+1]<<4)}
function Zb(a,b,c){x.call(this,a,b,$b,c);this.type=Number.parseInt(D(this,"type","1501").slice(-4),10);this.Y={};this.a=Array(4);for(a=0;4>a;a++)this.a[a]=new W(this,String.fromCharCode(65+a));this.H=this.a[0];this.L=this.a[1];this.aa=this.a[2];this.ba=this.a[3];this.u=Array(8);for(a=0;8>a;a++)this.u[a]=new W(this,"X"+a);this.I=Array(8);for(a=0;8>a;a++)this.I[a]=new W(this,"Y"+a);this.Z=new W(this,"Supp",!0);this.R=new W(this,"Temp",!0);this.s=10;this.l=!1;this.N=this.b=this.j=this.m=0;this.h=[-1,
-1,-1];this.v=0;this.$=ya(this,this.M.input);this.$.K=this.va.bind(this);a=this.$;b=this.wa.bind(this);a.f=this.ea.bind(this);a.L=b;this.g=ya(this,this.M.output);if(this.f=A(this,ac))this.f.b=this;(this.time=A(this,J))&&this.f&&(this.time.X.push(this.Aa.bind(this)),this.time.$.push(this.xa.bind(this)));this.V=this.X=this.K=void 0;this.U=this.S=-1;this.w={};this.T=bc;a=this.Da.bind(this);b=Ea;B[this.J]||(B[this.J]={});B[this.J][b]||(B[this.J][b]=[]);B[this.J][b].push(a)}r(Zb,x);
function cc(a,b){a.w[b]&&(a.w[b]=!1,z(a,"break on "+dc[b]),U(a.time))}function ec(a){a.g&&nb(a.g);if(a.f){var b=a.f;b.a&&nb(b.a)}fc(a,!1)}p=Zb.prototype;p.Aa=function(a){a=void 0===a?0:a;for(this.v=0;this.v<=a;){if(this.U==this.b){this.U=-1;z(this,"break");U(this.time);break}var b=Bb(this.f,this.b),c=this.b;this.b=c+1&this.f.h;if(void 0==b||!gc(this,b,c)){this.b=c;z(this,"unimplemented opcode");U(this.time);break}this.v+=hc}if(0>=a){var d=this;Ub(this.time,function(){var a=d.f;a.a&&P(a.a);z(d,d.toString())})}return this.v};
function gc(a,b,c){if(b&4096)return b&2048?!!(b&1024)==a.l&&(a.b=c&1024|b&1023):(a.push(a.b),a.b=b&2047),a.l=!1,!0;var d;c=b&ic;switch(c){case jc:case kc:case lc:case mc:case nc:case oc:case pc:case qc:case rc:case sc:case tc:case uc:c=vc[c];var e=(b&wc)>>xc;var f=(b&yc)>>zc;var h=(b&Ac)>>Bc;var g=(d=b&Cc)?Dc:Ec;switch(f){case 0:case 1:case 2:case 3:var n=a.a[f];break;case 4:n=Yb(a.R,1,c);break;case 5:g=d?Fc:Gc;break;case 6:n=Yb(a.R,a.j&15,c);break;case 7:n=Yb(a.R,a.j&255,c)}switch(h){case 0:var k=
a.a[e];break;case 1:k=4>f?a.a[f]:void 0;break;case 2:k=5>f?a.Z:5==f?a.a[e]:void 0;break;case 3:if(d)a.a[e].move(n,c);else{a=a.H;e=n;b=c[0];for(n=c[1];b<=n;b++)k=a.c[b],a.c[b]=e.c[b],e.c[b]=k;X(e,c)}return!0}if(!k)break;b=b>=qc?16:a.s;switch(g){case Ec:k.add(a.a[e],n,c,b);break;case Dc:k.sub(a.a[e],n,c,b);break;case Gc:b=k;a=a.a[e];e=c[1];for(n=c[0];e>n;e--)b.c[e]=a.c[e-1];b.c[e]=0;X(b,c);break;case Fc:b=k;a=a.a[e];e=c[0];for(n=c[1];e<n;e++)b.c[e]=a.c[e+1];b.c[e]=0;X(b,c)}return!0;case Hc:e=(b&Ic)>>
Jc;c=(b&Kc)>>Lc;n=1<<((b&Mc)>>Nc);if(!c)break;c+=12;switch(b&Oc){case Pc:a.a[e].c[c]|=n;break;case Qc:a.a[e].c[c]&=~n;break;case Rc:a.a[e].c[c]&n&&(a.l=!0);break;case Sc:a.a[e].c[c]^=n}return!0;case Tc:switch(b&Uc){case Vc:a.H.store(a.I[a.m]);break;case Wc:a.m=b>>4&7;break;case Xc:a.b=a.j;break;case Yc:a.l=!1;c=a.h[0];e=0;for(b=a.h.length-1;e<b;)a.h[e]=a.h[++e];a.h[e]=-1;a.b=c;break;case Zc:a.u[a.m].store(a.H);break;case $c:a.H.store(a.u[a.m]);break;case ad:a.I[a.m].store(a.H);break;case bd:cc(a,
"o");if(a.g){c=0;for(e=11;0<=e;c++,e--)b=void 0,a.L.c[e]&8?b=" ":a.L.c[e]&1?b="-":b=I[a.H.c[e]],vb(a.g,c,0,b,a.L.c[e]&2?rb:0)&&cc(a,"om");fc(a)}a.v+=31*hc;a.N&&(a.j=a.N,a.l=!0,cc(a,"i"));break;case cd:a.s=10;break;case dd:a.s=16;break;case ed:a.m=a.j&7;break;default:return!1}return!0}return!1}
function Ab(a,b,c,d){var e="???",f="";if(b&4096)b&2048?(e="BR",e=b&1024?e+"C":e+"NC",f=c&1024|b&1023):(e="CALL",f=b&2047),f=a.ca("0x%04x",f);else if(0<=b){var h=b&ic;switch(h){case jc:case kc:case lc:case mc:case nc:case oc:case pc:case qc:case rc:case sc:case tc:case uc:f="";e=vc[h];for(h=0;16>h;h++)h%4||(f=" "+f),f=(e?h>=e[0]&&h<=e[1]?"F":"0":"?")+f;h=(b&wc)>>xc;var g=(b&yc)>>zc,n=(b&Ac)>>Bc,k=b&Cc;e="LOAD";var q="?",l="?";var m=k?5==g?"\x3e\x3e":"-":5==g?"\x3c\x3c":"+";switch(n){case 0:q=Y[h];
break;case 1:4>g&&(q=Y[g]);break;case 2:6>g&&(q="NUL");break;case 3:k?(e="MOVE",q=Y[h],l=Y[g]):(e="XCHG",h||(q="A"),4>g&&(l=Y[g])),g=-1}switch(g){case 0:case 1:case 2:case 3:l=Y[h]+m+Y[g];break;case 4:case 5:l=Y[h]+m+"1";break;case 6:l=Y[h]+m+"R5L";break;case 7:l=Y[h]+m+"R5"}f=q+","+l+","+f;break;case Hc:switch(b&Oc){case Pc:e="SET";break;case Qc:e="CLR";break;case Rc:e="TST";break;case Sc:e="NOT"}f=a.a[(b&Ic)>>Jc].name;h=(b&Kc)>>Lc;f+="["+(h?h+12:"?")+":"+((b&Mc)>>Nc)+"]";break;case Tc:switch(b&
Uc){case Vc:e="STORE";f="A,Y[RAB]";break;case Wc:e="STORE";f="RAB,"+((b&112)>>4);break;case Xc:e="BR";f="R5";break;case Yc:e="RET";break;case Zc:e="STORE";f="X[RAB],A";break;case $c:e="STORE";f="A,X[RAB]";break;case ad:e="STORE";f="Y[RAB],A";break;case bd:e="DISP";break;case cd:e="BCDS";break;case dd:e="BCDR";break;case ed:e="STORE",f="RAB,R5L"}}}return a.ca((void 0===d?0:d)?"%03X %04X\n":"0x%04x: 0x%04x  %-8s%s\n",c,b,e,f)}
function fd(a,b){if(b){var c=b.stateChip||b[0];if(c&&c.length){var d=c.shift();if((d|0)!==($b|0))a.ia("Saved state version mismatch: %3.2f\n",d);else{try{a.a.forEach(function(a){return a.set(c.shift())}),a.u.forEach(function(a){return a.set(c.shift())}),a.I.forEach(function(a){return a.set(c.shift())}),a.Z.set(c.shift()),a.R.set(c.shift()),a.s=c.shift(),a.l=c.shift(),a.m=c.shift(),a.j=c.shift(),a.b=c.shift(),a.h=c.shift(),a.N=c.shift()}catch(e){z(a,"Chip state error: "+e.message);return}(b=b.stateROM||
b[1])&&a.f&&Cb(a.f,b)}}else z(a,"Invalid saved state")}}
p.Da=function(a,b){var c="",d=a[1],e=Number.parseInt(a[2],16);isNaN(e)&&(e=-1);var f=Number.parseInt(a[3],10)||8;this.T=bc;switch(d[0]){case "b":a=d.substr(1);if("l"==a){for(a in dc)b=dc[a],c+="break on "+b+" (b"+a+"): "+(this.w[a]||!1)+"\n";break}(b=dc[a])?(this.w[a]=!this.w[a],c="break on "+b+" (b"+a+"): "+this.w[a]):a&&(c="unrecognized break option '"+a+"'");break;case "g":this.time.start()?this.U=e:c="already started";break;case "h":U(this.time)||(c="already stopped");break;case "t":"c"==d[1]&&
(this.T=gd);f=Number.parseInt(a[2],10)||1;Mb(this.time,f);b&&(b.ga=a[0]);break;case "r":"c"==d[1]&&(this.T=gd);hd(this,d.substr(1),e);c+=this.toString(d[1]);b&&(b.ga=a[0]);break;case "u":for(e=0<=e?e:0<=this.S?this.S:this.b;f--;){d=this.f&&Bb(this.f,e,!0);if(void 0==d)break;c+=Ab(this,d,e++)}this.S=e;b&&(b.ga=a[0]);break;case "?":c="additional commands:";id.forEach(function(a){c+="\n"+a});break;default:a[0]&&(c="unrecognized command '"+a[0]+"' (try '?')")}c&&z(this,c.trim());return!0};
p.va=function(a,b){var c=0;0<=a&&0<=b&&(c=b|a+1<<4);this.N=c};p.ta=function(){var a=null;if(Ja(this)){var b;if(window)try{(b=window.localStorage.getItem(this.J))&&(a=JSON.parse(b))}catch(c){z(this,c.message)}}fd(this,a)};p.ea=function(a){void 0==a&&(a=!this.time.a)&&(this.b=0);a?this.time.start():(U(this.time),ec(this))};p.wa=function(){z(this,"reset");this.b=0;ec(this);this.time.a||this.status()};
p.ua=function(){var a=jd(this);if(Ja(this)){a=JSON.stringify(a);try{window.localStorage.setItem(this.J,a)}catch(b){z(this,b.message)}}};p.push=function(a){for(var b=this.h.length-1;0<b;)this.h[b]=this.h[--b];this.h[0]=a};
function jd(a){var b=[[],[]],c=b[0],d=b[1];c.push($b);a.a.forEach(function(a){return c.push(a.get())});a.u.forEach(function(a){return c.push(a.get())});a.I.forEach(function(a){return c.push(a.get())});c.push(a.Z.get());c.push(a.R.get());c.push(a.s);c.push(a.l);c.push(a.m);c.push(a.j);c.push(a.b);c.push(a.h);c.push(a.N);a.f&&Db(a.f,d);return b}function hd(a,b,c){if(b&&!(0>c))switch(b){case "pc":a.b=c;break;default:z(a,"unrecognized register: "+b)}}p.status=function(){z(this,this.toString())};
p.toString=function(a,b){var c=this;a=void 0===a?"":a;b=void 0===b?null:b;var d="";if(this.T){this.f&&(d+=Ab(this,Bb(this.f,this.b,!0),this.b,!0));d+="  ";b=0;for(a=this.a.length;b<a;b++)d+=this.a[b].toString()+" ";d+="\n ";d+=" COND\x3d"+(this.l?1:0);d+=" BASE\x3d"+this.s;d+=" R5\x3d"+this.ca("%02X",this.j);d+=" RAB\x3d"+this.m+" ST\x3d";this.h.forEach(function(a){d+=c.ca("%03X ",0>a?0:a&4095)});return d.trim()}if(b){var e=0;for(a=b.length>>1;e<a;e++)d+=b[e].toString(!0)+"  "+b[e+a].toString(!0)+
"\n";return d}d+=this.toString(a,this.a);0<=a.indexOf("a")&&(d+=this.toString(a,this.u),d+=this.toString(a,this.I));d+="COND\x3d"+(this.l?1:0);d+=" BASE\x3d"+this.s;d+=" R5\x3d"+this.ca("0x%02x",this.j);d+=" RAB\x3d"+this.m+" ";this.h.forEach(function(a,b){d+=c.ca("ST%d\x3d0x%04x ",b,a&65535)});this.f&&(d+="\n"+Ab(this,Bb(this.f,this.b,!0),this.b));this.S=this.b;return d.trim()};
function fc(a,b){b=void 0===b?!0:b;var c,d=b&&(a.type==kd?!!(a.aa.c[14]&8):!!(a.L.c[15]&4));if(a.V!==d){if(c=a.O["2nd"])c.style.opacity=d?"1":"0",void 0===a.V&&a.g&&(c.style.color=a.g.color);a.V=d}d=b&&(a.type==kd?!!(a.L.c[15]&4):!!(a.ba.c[15]&8));if(a.X!==d){if(c=a.O.INV)c.style.opacity=d?"1":"0",void 0===a.X&&a.g&&(c.style.color=a.g.color);a.X=d}c=a.type==kd?a.u[4].c[15]>>2:a.aa.c[15];b=b?c?1==c?ld:md:nd:od;if(a.K!==b){if(c=a.O.Deg)c.style.opacity=b==nd?"1":"0",void 0===a.K&&a.g&&(c.style.color=
a.g.color);if(c=a.O.Rad)c.style.opacity=b==ld?"1":"0",void 0===a.K&&a.g&&(c.style.color=a.g.color);if(c=a.O.Grad)c.style.opacity=b==md?"1":"0",void 0===a.K&&a.g&&(c.style.color=a.g.color);a.K=b}}p.xa=function(a){for(var b in this.O){var c=this.Y[b];if(c){var d=c[0];c=c[1];H(this,b,0>c?d.toString():I[d.c[c]])}}if(a||!this.time.a)a=this.f,a.a&&P(a.a),z(this,this.toString())};
var ic=3840,jc=0,kc=256,lc=512,mc=768,nc=1024,oc=1280,pc=1792,qc=2048,rc=2304,sc=2560,Hc=3072,tc=3328,Tc=3584,uc=3840,wc=192,xc=6,yc=56,zc=3,Ac=6,Bc=1,Cc=1,Oc=3,Pc=0,Qc=1,Rc=2,Sc=3,Ic=192,Jc=6,Kc=48,Lc=4,Mc=12,Nc=2,Uc=15,Vc=0,Wc=1,Xc=2,Yc=3,Zc=4,$c=5,ad=6,bd=7,cd=8,dd=9,ed=10,Z={},vc=(Z[jc]=[12,12],Z[kc]=[0,15],Z[lc]=[2,12],Z[mc]=[0,12],Z[nc]=[2,2],Z[oc]=[0,1],Z[pc]=[0,13],Z[qc]=[14,14],Z[rc]=[13,15],Z[sc]=[14,15],Z[tc]=[13,13],Z[uc]=[15,15],Z),hc=128,Ec=0,Dc=1,Gc=2,Fc=3,kd=1501,od=0,nd=1,ld=2,md=
3,dc={i:"input",o:"output",om:"output modification"},bc=0,gd=1,Y="A B C D 1 ? R5L R5".split(" "),id="b[c]\t\tbreak on condition c;bl\t\tlist break conditions;g [addr]\trun (to addr);h\t\thalt;r[a]\t\tdump (all) registers;t [n]\t\tstep (n instructions);u [addr] [n]\tdisassemble (at addr)".split(";"),$b=1.11;pa="TMS1500";
function pd(a,b){x.call(this,a,a,qd);try{this.M=JSON.parse(b);var c=this.M[a];qa(this,c);ra(this,c);sa(this,c.bindings);this.a=!1!==c.autoPower;this.b=!1!==c.autoRestore}catch(h){c=h.message;var d=c.match(/position ([0-9]+)/);d&&(c+=" ('"+b.substr(+d[1],40).replace(/\s+/g," ")+"...')");z(this,"machine '"+a+"' initialization error: "+c)}var e=this,f=null;window.addEventListener("load",function(){for(var a,b,c,d,q=0;q<rd.length;q++)for(a in e.M)try{var l=e.M[a],m="";b=l["class"];if(b==rd[q]){switch(b){case sd:d=
c=new Zb(e.J,a,l);break;case td:c=new Pa(e.J,a,l);break;case ud:c=new eb(e.J,a,l);break;case ac:c=new yb(e.J,a,l);c.M.revision&&(m="revision "+c.M.revision);break;case J:c=new S(e.J,a,l);break;case vd:e.ia("PCjs %s v%3.2f\n",l.name,qd);z(e,wd);z(e,xd);continue;default:z(e,"unrecognized device class: "+b);continue}z(e,b+" device initialized"+(m?" ("+m+")":""))}}catch(R){z(e,"error initializing "+b+" device '"+a+"':\n"+R.message);m=void 0;var v=a,t=y[e.J];if(t)for(m in t)if(t[m].na==v){t.splice(m,1);
break}}if(f=d)f.ta&&e.b&&f.ta(),f.ea&&e.a&&f.ea(!0)});window.addEventListener((La("iOS")?"pagehide":La("Opera")?"unload":void 0)||"beforeunload",function(){f&&(f.ua&&f.ua(),f.ea&&f.ea(!1))})}r(pd,x);var sd="Chip",td="Input",ud="LED",vd="Machine",ac="ROM",J="Time",rd=[vd,J,ud,td,ac,sd],wd="Copyright \u00a9 2012-2017 Jeff Parsons \x3cJeff@pcjs.org\x3e",xd="License: GPL version 3 or later \x3chttp://gnu.org/licenses/gpl.html\x3e",qd=1.11;window[pa]=pd;})()
//# sourceMappingURL=ti57.js.map
