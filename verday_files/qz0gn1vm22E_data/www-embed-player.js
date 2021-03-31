(function(){var l;function aa(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
for(var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,fa=["String",
"prototype","startsWith"],ga=0;ga<fa.length-1;ga++){var ha=fa[ga];ha in ea||(ea[ha]={});ea=ea[ha]}
var ia=fa[fa.length-1],ja=ea[ia],ka=ja?ja:function(a,b){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");c=this+"";a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};
ka!=ja&&null!=ka&&da(ea,ia,{configurable:!0,writable:!0,value:ka});var n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function la(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function ma(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function oa(a){return"array"==ma(a)}
function pa(a){var b=ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function qa(a){return"function"==ma(a)}
function ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function sa(a){return a[ta]||(a[ta]=++ua)}
var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}
function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=va:v=wa;return v.apply(null,arguments)}
function w(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var xa=document,A=window;var ya=(new Date).getTime();function za(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Aa(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;x=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,E,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),E=1518500249):(m=d^f^h,E=1859775393):60>c?(m=d&f|h&(d|f),E=2400959708):(m=d^f^h,E=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+E+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,x+=64;for(;d<c;)if(f[m++]=a[d++],x++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,x+=64}
function d(){var a=[],d=8*x;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,x;a();return{reset:a,update:c,digest:d,Fa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ba=window,Ca=document,Da=Ba.location;function Ea(){}
var Fa=/\[native code\]/;function B(a,b,c){return a[b]=a[b]||c}
function Ga(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ha(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function C(){var a;if((a=Object.create)&&Fa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ia=B(Ba,"gapi",{});function Ja(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Ja.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Ka(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function D(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(D,Error);D.prototype.name="CustomError";function La(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Ma(a){a=String(a);if(La(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Na(a){return eval("("+a+")")}
function Oa(a){var b=[];Pa(new Qa,a,b);return b.join("")}
function Qa(){}
function Pa(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(oa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pa(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ra(d,c),c.push(":"),Pa(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ra(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Sa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ta=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ra(a,b){b.push('"',a.replace(Ta,function(a){var b=Sa[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Sa[a]=b);return b}),'"')}
;function Ua(a,b){this.width=a;this.height=b}
l=Ua.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Va(a){var b=Wa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Xa(){var a=G,b;for(b in a)return!1;return!0}
function Ya(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Za(a){var b={},c;for(c in a)b[c]=a[c];return b}
var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function bb(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function cb(a){cb[" "](a);return a}
cb[" "]=t;function db(a,b){var c=eb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function fb(){}
;var gb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function hb(a,b){return a<b?-1:a>b?1:0}
function ib(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var jb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a}();var kb={};function lb(a){return kb[a]||(kb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function mb(a,b){return a?a.dataset?a.dataset[lb(b)]:a.getAttribute("data-"+b):null}
function nb(a){a&&(a.dataset?a.dataset[lb("loaded")]="true":a.setAttribute("data-loaded","true"))}
;var ob={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pb(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in ob||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
pb.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pb.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pb.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},rb="Microsoft Internet Explorer"==navigator.appName;
function sb(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;function tb(a,b,c,d){this.f=a;this.i=b;this.g=c;this.b=d}
var ub=1;function vb(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.g&&(b.veCounter=a.g));void 0!==a.b&&(b.dataElement=vb(a.b));return b}
;var wb=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function xb(){if(!wb)return null;var a=wb();return"open"in a?a:null}
function yb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function zb(a){this.topic=a}
zb.prototype.toString=function(){return this.topic};var H=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function I(){this.f=this.f;this.F=this.F}
I.prototype.f=!1;I.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function Ab(a,b){a.f?p(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(p(void 0)?v(b,void 0):b))}
I.prototype.o=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function Bb(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Cb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];pa(d)?Cb.apply(null,d):Bb(d)}}
;var J;a:{var Db=n.navigator;if(Db){var Eb=Db.userAgent;if(Eb){J=Eb;break a}}J=""}function K(a){return-1!=J.indexOf(a)}
;function Fb(a){this.b=a||{cookie:""}}
l=Fb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=gb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=gb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Gb=new Fb("undefined"==typeof document?null:document);Gb.f=3950;function Hb(a){this.b=a}
Hb.prototype.set=function(a,b){p(b)?this.b.set(a,Oa(b)):this.b.remove(a)};
Hb.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Ma(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hb.prototype.remove=function(a){this.b.remove(a)};var Ib=!1,Jb="";function Kb(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Ib=!0,a.description)){Jb=Kb(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Ib=!0;Jb="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Ib=!(!a||!a.enabledPlugin))){Jb=Kb(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Ib=!0;Jb=Kb(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Ib=!0;Jb="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Ib=!0,Jb=Kb(b.GetVariable("$version"))}catch(c){}})();
var Lb=Ib,Mb=Jb;function Nb(a,b){var c=Ob();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()}
;var Pb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Pb,void 0);function L(a){sb(Pb,arguments)}
function M(a,b){return a in Pb?Pb[a]:b}
;function Qb(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Za(Rb);this.assets=a.assets||{};this.attrs=a.attrs||Za(Sb);this.params=a.params||Za(Tb);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Rb={enablejsapi:1},Sb={},Tb={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Ub(a){a instanceof Qb||(a=new Qb(a));return a}
function Vb(a){var b=new Qb,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ma(d)?Za(d):d}return b}
;var Wb={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Xb(a,b){this.version=a;this.args=b}
;var N;N=B(Ba,"___jsl",C());B(N,"I",0);B(N,"hel",10);function Yb(){var a=Da.href,b;if(N.dpo)b=N.h;else{b=N.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Zb(a){var b=B(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function $b(a){return B(B(N,"H",C()),a,C())}
;var ac=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},O=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},bc=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function cc(a,b){var c;a:{c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function dc(a,b){var c=ac(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function ec(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fc(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gc(){this.f=this.b=null}
var ic=new Ja(function(){return new hc},function(a){a.reset()},100);
gc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function hc(){this.next=this.scope=this.b=null}
hc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
hc.prototype.reset=function(){this.next=this.scope=this.b=null};function jc(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function lc(a){this.b=a}
z(lc,Hb);function mc(a){this.data=a}
function nc(a){return!p(a)||a instanceof mc?a:new mc(a)}
lc.prototype.set=function(a,b){lc.A.set.call(this,a,nc(b))};
lc.prototype.f=function(a){a=lc.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
lc.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function P(a){return a.match(oc)}
function pc(a){return a?decodeURI(a):a}
function qc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function rc(a,b,c){if(oa(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function sc(a,b){for(var c in b)rc(c,b[c],a);return a}
;function Q(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=M("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),L("ERRORS",c))}
function tc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
;function R(a){return M("EXPERIMENT_FLAGS",{})[a]}
;var uc=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",uc,void 0);function vc(a){sb(uc,arguments)}
;function wc(a){a={client:{hl:a.Na,gl:a.Ma,clientName:a.La,clientVersion:a.innertubeContextClientVersion}};M("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});return a}
function xc(){return{apiaryHost:M("APIARY_HOST",void 0),Da:M("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!M("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:M("GAPI_HINT_PARAMS",void 0),innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),La:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Na:M("INNERTUBE_CONTEXT_HL",void 0),Ma:M("INNERTUBE_CONTEXT_GL",void 0),nb:M("XHR_APIARY_HOST",
void 0),Oa:M("INNERTUBE_HOST_OVERRIDE",void 0)}}
function yc(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function zc(a,b){Xb.call(this,1,arguments)}
z(zc,Xb);var Ac=new zb("timing-sent");function Bc(a){I.call(this);this.g=a;this.g.subscribe("command",this.xa,this);this.i={};this.j=!1}
z(Bc,I);l=Bc.prototype;l.start=function(){this.j||this.f||(this.j=!0,Cc(this.g,"RECEIVING"))};
l.xa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.i))){var d=v(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&Dc(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Ec(a,b||{}),c=this.b[a].apply(this.b,c),(c=Fc(a,c))&&this.j&&!this.f&&Cc(this.g,a,c))}}};
l.eb=function(a,b){this.j&&!this.f&&Cc(this.g,a,this.ia(a,b))};
l.ia=function(a,b){if(null!=b)return{value:b}};
function Dc(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.o=function(){var a=this.g;a.f||Gc(a.b,"command",this.xa,this);this.g=null;for(var b in this.i)Dc(this,b);Bc.A.o.call(this)};function Hc(a,b,c){var d=[],e=[];if(1==(oa(c)?2:1))return e=[b,a],O(d,function(a){e.push(a)}),Ic(e.join(" "));
var f=[],g=[];O(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];O(d,function(a){e.push(a)});
a=Ic(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ic(a){var b=Aa();b.update(a);return b.Fa().toLowerCase()}
;var Jc=B(N,"perf",C());B(Jc,"g",C());var Kc=B(Jc,"i",C());B(Jc,"r",[]);C();C();function Lc(a,b,c){b&&0<b.length&&(b=Mc(b),c&&0<c.length&&(b+="___"+Mc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=B(Kc,"_p",C()),B(b,c,C())[a]=(new Date).getTime(),b=Jc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Mc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function Nc(){this.b="";this.f=Oc}
Nc.prototype.la=!0;Nc.prototype.ka=function(){return this.b};
var Oc={};function Pc(){return(K("Chrome")||K("CriOS"))&&!K("Edge")}
;function Qc(a){this.b=a}
z(Qc,lc);Qc.prototype.set=function(a,b,c){if(b=nc(b)){if(c){if(c<y()){Qc.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}Qc.A.set.call(this,a,b)};
Qc.prototype.f=function(a,b){var c=Qc.A.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)Qc.prototype.remove.call(this,a);else return c}};function Rc(){var a=Sc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{cb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;function Tc(a,b){this.events=[];this.f=b||n;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.b);this.b=null!=c?c:Math.random()<a}
function Ob(){var a=n.performance;return a&&a.now?a.now():y()}
Tc.prototype.g=function(a){var b=this.f.performance;a&&b&&b.clearMarks&&(b.clearMarks("goog_"+a.uniqueId+"_start"),b.clearMarks("goog_"+a.uniqueId+"_end"))};
Tc.prototype.start=function(a,b){if(!this.b)return null;var c=new Nb(a,b),d=this.f.performance;d&&d.mark&&d.mark("goog_"+c.uniqueId+"_start");return c};
Tc.prototype.end=function(a){if(this.b){a.duration=Ob()-a.value;var b=this.f.performance;b&&b.mark&&b.mark("goog_"+a.uniqueId+"_end");this.b&&this.events.push(a)}};function Uc(){this.b=M("ALT_PREF_COOKIE_NAME","PREF");var a=Gb.get(""+this.b,void 0);if(a)for(var a=unescape(a).split("&"),b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(S[d]=c.toString())}}
la(Uc);var S=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",S,void 0);function Vc(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Wc(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Xc(a){a=void 0!==S[a]?S[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Uc.prototype.get=function(a,b){Wc(a);Vc(a);var c=void 0!==S[a]?S[a].toString():null;return null!=c?c:b?b:""};
Uc.prototype.set=function(a,b){Wc(a);Vc(a);if(null==b)throw Error("ExpectedNotNull");S[a]=b.toString()};
Uc.prototype.remove=function(a){Wc(a);Vc(a);delete S[a]};
Uc.prototype.clear=function(){S={}};function T(a,b){qa(a)&&(a=tc(a));return window.setTimeout(a,b)}
;function Yc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?oa(b[f])?fc(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Zc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Yc(d[1]||""),e;for(e in b)d[e]=b[e];return qc(sc([a],d))+c}
function $c(a){a=sc([],a);a[0]="";return a.join("")}
;var ad=y().toString();function bd(){var a=[],b=za(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Fb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Fb(document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(n.location.href);return d&&b&&c?[c,Hc(za(d),b,a||null)].join(" "):null}return null}
;var cd=C(),dd=[];function U(a){throw Error("Bad hint"+(a?": "+a:""));}
dd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=B(N,b,[]).concat(c):B(N,b,c)}if(b=a.u)a=B(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ed=/^(\/[a-zA-Z0-9_\-]+)+$/,fd=[/\/amp\//,/\/amp$/,/^\/amp$/],gd=/^[a-zA-Z0-9\-_\.,!]+$/,hd=/^gapi\.loaded_[0-9]+$/,id=/^[a-zA-Z0-9,._-]+$/;function jd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=cd[f],h=null;g?h=g(e,b,c,d):U("no hint processor for: "+f);h||U("failed to generate load url");b=h;c=b.match(kd);(d=b.match(ld))&&1===d.length&&md.test(b)&&c&&1===c.length||U("failed sanity: "+a);return h}
function nd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=od(a);hd.test(c)||U("invalid_callback");b=pd(b);d=d&&d.length?pd(d):null;return[encodeURIComponent(a.Za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.qa?"/am="+e(a.qa):"",a.ya?"/rs="+e(a.ya):"",a.Ba?"/t="+e(a.Ba):"","/cb=",e(c)].join("")}
function od(a){"/"!==a.charAt(0)&&U("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))U("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");ed.test(b)||U("invalid_prefix");c=0;for(d=fd.length;c<d;++c)fd[c].test(b)&&U("invalid_prefix");c=qd(a,
"k",!0);d=qd(a,"am");e=qd(a,"rs");a=qd(a,"t");return{Za:b,version:c,qa:d,ya:e,Ba:a}}
function pd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");id.test(e)&&b.push(e)}return b.join(",")}
function qd(a,b,c){a=a[b];!a&&c&&U("missing: "+b);if(a){if(gd.test(a))return a;U("invalid: "+b)}return null}
var md=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ld=/\/cb=/g,kd=/\/\//g;function rd(){var a=Yb();if(!a)throw Error("Bad hint");return a}
cd.m=function(a,b,c,d){(a=a[0])||U("missing_hint");return"https://apis.google.com"+nd(a,b,c,d)};
var sd=decodeURI("%73cript"),td=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ud(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Ga.call(b,e)&&c.push(e)}return c}
function vd(){var a=N.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(td)?a:N.nonce=null;var b=B(N,"us",[]);if(!b||!b.length)return N.nonce=null;for(var c=Ca.getElementsByTagName(sd),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(td))return N.nonce=a}}return null}
function wd(a){if("loading"!=Ca.readyState)xd(a);else{var b=vd(),c="";null!==b&&(c=' nonce="'+b+'"');Ca.write("<"+sd+' src="'+encodeURI(a)+'"'+c+"></"+sd+">")}}
function xd(a){var b=Ca.createElement(sd);b.setAttribute("src",a);a=vd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Ca.getElementsByTagName(sd)[0])?a.parentNode.insertBefore(b,a):(Ca.head||Ca.body||Ca.documentElement).appendChild(b)}
function yd(a,b){var c=b&&b._c;if(c)for(var d=0;d<dd.length;d++){var e=dd[d][0],f=dd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function zd(a,b,c){Ad(function(){var c;c=b===Yb()?B(Ia,"_",C()):C();c=B($b(b),"_",c);a(c)},c)}
function Bd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);yd(a,c);var d=a?a.split(":"):[],e=c.h||rd(),f=B(N,"ah",C());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,m=g.length&&g[g.length-1]||null,x=m;m&&m.hint==k||(x={hint:k,features:[]},g.push(x));x.features.push(h)}var E=g.length;if(1<E){var Z=c.callback;Z&&(c.callback=function(){0==--E&&Z()})}for(;d=g.shift();)Cd(d.features,c,d.hint)}else Cd(d||[],c,e)}
function Cd(a,b,c){function d(a,b){if(E)return 0;Ba.clearTimeout(x);Z.push.apply(Z,F);var d=((Ia||{}).config||{}).update;d?d(f):f&&B(N,"cu",[]).push(f);if(b){Lc("me0",a,na);try{zd(b,c,m)}finally{Lc("me1",a,na)}}return 1}
a=Ha(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,m=void 0;"function"==typeof k&&(m=k);var x=null,E=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=B($b(c),"r",[]).sort(),Z=B($b(c),"L",[]).sort(),na=[].concat(k);0<g&&(x=Ba.setTimeout(function(){E=!0;h()},g));
var F=ud(a,Z);if(F.length){var F=ud(a,k),ba=B(N,"CP",[]),ca=ba.length;ba[ca]=function(a){function b(){var a=ba[ca+1];a&&a()}
function c(b){ba[ca]=null;d(F,a)&&Zb(function(){e&&e();b()})}
if(!a)return 0;Lc("ml1",F,na);0<ca&&ba[ca-1]?ba[ca]=function(){c(b)}:c(b)};
if(F.length){var kc="loaded_"+N.I++;Ia[kc]=function(a){ba[ca](a);Ia[kc]=null};
a=jd(c,F,"gapi."+kc,k);k.push.apply(k,F);Lc("ml0",F,na);b.sync||Ba.___gapisync?wd(a):xd(a)}else ba[ca](Ea)}else d(F)&&e&&e()}
function Ad(a,b){if(N.hee&&0<N.hel)try{return a()}catch(c){b&&b(c),N.hel--,Bd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ia.load=function(a,b){return Ad(function(){return Bd(a,b)})};function Dd(a){n.setTimeout(function(){throw a;},0)}
var Ed;
function Fd(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.sa;c.sa=null;a()}};
return function(a){d.next={sa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Gd(){this.b="";this.f=Hd}
Gd.prototype.la=!0;Gd.prototype.ka=function(){return this.b};
function Id(a){return a instanceof Gd&&a.constructor===Gd&&a.f===Hd?a.b:"type_error:SafeUrl"}
var Jd=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Kd(a){if(a instanceof Gd)return a;a=a.la?a.ka():String(a);Jd.test(a)||(a="about:invalid#zClosurez");return Ld(a)}
var Hd={};function Ld(a){var b=new Gd;b.b=a;return b}
Ld("about:blank");var Md="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Nd(){}
Nd.prototype.next=function(){throw Md;};
Nd.prototype.ca=function(){return this};
function Od(a){if(a instanceof Nd)return a;if("function"==typeof a.ca)return a.ca(!1);if(pa(a)){var b=0,c=new Nd;c.next=function(){for(;;){if(b>=a.length)throw Md;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Pd(a,b){if(pa(a))try{O(a,b,void 0)}catch(c){if(c!==Md)throw c;}else{a=Od(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Md)throw c;}}}
function Qd(a){if(pa(a))return ec(a);a=Od(a);var b=[];Pd(a,function(a){b.push(a)});
return b}
;function Rd(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Rd.prototype.equals=function(a){return a instanceof Rd&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Rd.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Rd.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Rd.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};var Sd=K("Opera"),V=K("Trident")||K("MSIE"),Td=K("Edge"),Ud=K("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Vd=-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"),Wd=K("Macintosh"),Xd=K("Windows"),Yd=K("Android"),Zd=jc(),$d=K("iPad"),ae=K("iPod");function be(){var a=n.document;return a?a.documentMode:void 0}
var ce;a:{var de="",ee=function(){var a=J;if(Ud)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Td)return/Edge\/([\d\.]+)/.exec(a);if(V)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Vd)return/WebKit\/(\S+)/.exec(a);if(Sd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ee&&(de=ee?ee[1]:"");if(V){var fe=be();if(null!=fe&&fe>parseFloat(de)){ce=String(fe);break a}}ce=de}var ge=ce,eb={};
function W(a){return db(a,function(){for(var b=0,c=gb(String(ge)).split("."),d=gb(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=hb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||hb(0==g[2].length,0==h[2].length)||hb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var he;var ie=n.document;he=ie&&V?be()||("CSS1Compat"==ie.compatMode?parseInt(ge,10):5):void 0;function je(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
;function ke(a,b){le||me();ne||(le(),ne=!0);var c=oe,d=ic.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var le;function me(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);le=function(){a.then(pe)}}else le=function(){var a=pe;
!qa(n.setImmediate)||n.Window&&n.Window.prototype&&!K("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Ed||(Ed=Fd()),Ed(a)):n.setImmediate(a)}}
var ne=!1,oe=new gc;function pe(){for(var a;a=oe.remove();){try{a.b.call(a.scope)}catch(b){Dd(b)}Ka(ic,a)}ne=!1}
;!Ud&&!V||V&&9<=Number(he)||Ud&&W("1.9.1");V&&W("9");V&&W("9");!Vd||W("528");Ud&&W("1.9b")||V&&W("8")||Sd&&W("9.5")||Vd&&W("528");Ud&&!W("8")||V&&W("9");function qe(){this.b=""}
qe.prototype.la=!0;qe.prototype.ka=function(){return this.b};
function re(a){var b=new qe;b.b=a;return b}
re("<!DOCTYPE html>");re("");re("<br>");function se(a){this.b=a}
z(se,Qc);function te(){}
z(te,fb);te.prototype.clear=function(){var a=Qd(this.ca(!0)),b=this;O(a,function(a){b.remove(a)})};(function(){var a;return Xd?(a=/Windows NT ([0-9.]+)/,(a=a.exec(J))?a[1]:"0"):Wd?(a=/10[_.][0-9_.]+/,(a=a.exec(J))?a[0].replace(/_/g,"."):"10"):Yd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(J))?a[1]:""):Zd||$d||ae?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(J))?a[1].replace(/_/g,"."):""):""})();var ue=K("Firefox"),ve=jc()||K("iPod"),we=K("iPad"),xe=K("Android")&&!(Pc()||K("Firefox")||K("Opera")||K("Silk")),ye=Pc(),ze=K("Safari")&&!(Pc()||K("Coast")||K("Opera")||K("Edge")||K("Silk")||K("Android"))&&!(jc()||K("iPad")||K("iPod"));function Ae(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,k,m;if(rb)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(x){g=null}else k=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=k.appendChild(m);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(x){h=""}k&&m&&k.removeChild(m);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
la(Ae);function Be(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var Ce;var De=J,De=De.toLowerCase();if(-1!=De.indexOf("android")){var Ee=De.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Ee)Ce=Number(Ee[1]);else{var Fe={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Ge=[],He=0,Ie;for(Ie in Fe)Ge[He++]=Ie;var Je=De.match("("+Ge.join("|")+")");Ce=Je?Fe[Je[0]]:0}}else Ce=void 0;function Ke(a,b){var c;c=b instanceof Gd?b:Kd(b);a.href=Id(c)}
;function Le(a){Me();var b=new Nc;b.b=a;return b}
var Me=t;function X(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=t)try{var c=this;a.call(b,function(a){Ne(c,2,a)},function(a){Ne(c,3,a)})}catch(d){Ne(this,3,d)}}
function Oe(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Oe.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Pe=new Ja(function(){return new Oe},function(a){a.reset()},100);
function Qe(a,b,c){var d=Pe.get();d.g=a;d.f=b;d.context=c;return d}
function Re(a){if(a instanceof X)return a;var b=new X(t);Ne(b,2,a);return b}
function Se(a){return new X(function(b,c){c(a)})}
X.prototype.then=function(a,b,c){return Te(this,qa(a)?a:null,qa(b)?b:null,c)};
bb(X);X.prototype.cancel=function(a){0==this.b&&ke(function(){var b=new Ue(a);Ve(this,b)},this)};
function Ve(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ve(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):We(c),Xe(c,e,3,b)))}a.g=null}else Ne(a,3,b)}
function Ye(a,b){a.f||2!=a.b&&3!=a.b||Ze(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Te(a,b,c,d){var e=Qe(null,null,null);e.b=new X(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Ue?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Ye(a,e);return e.b}
X.prototype.C=function(a){this.b=0;Ne(this,2,a)};
X.prototype.F=function(a){this.b=0;Ne(this,3,a)};
function Ne(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,g=a.F;if(e instanceof X)Ye(e,Qe(f||t,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(ra(e))try{var k=e.then;if(qa(k)){$e(e,k,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.w=c,a.b=b,a.g=null,Ze(a),3!=b||c instanceof Ue||af(a,c))}}
function $e(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ze(a){a.l||(a.l=!0,ke(a.B,a))}
function We(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
X.prototype.B=function(){for(var a;a=We(this);)Xe(this,a,this.b,this.w);this.l=!1};
function Xe(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,bf(b,c,d);else try{b.i?b.g.call(b.context):bf(b,c,d)}catch(e){cf.call(null,e)}Ka(Pe,b)}
function bf(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function af(a,b){a.j=!0;ke(function(){a.j&&cf.call(null,b)})}
var cf=Dd;function Ue(a){D.call(this,a)}
z(Ue,D);Ue.prototype.name="cancel";function Y(a){I.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
z(Y,I);l=Y.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function Gc(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=cc(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
l.K=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=t):(c&&dc(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.V=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];df(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.K(c)}}return 0!=e}return!1};
function df(a,b,c){ke(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(O(b,this.K,this),delete this.g[a])}else this.b.length=0,this.g={}};
l.o=function(){Y.A.o.call(this);this.clear();this.i.length=0};function ef(a){this.b=a}
z(ef,te);l=ef.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ca=function(a){var b=0,c=this.b,d=new Nd;d.next=function(){if(b>=c.length)throw Md;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function ff(a){return(a=a.exec(J))?a[1]:""}
(function(){if(ue)return ff(/Firefox\/([0-9.]+)/);if(V||Td||Sd)return ge;if(ye)return jc()||K("iPad")||K("iPod")?ff(/CriOS\/([0-9.]+)/):ff(/Chrome\/([0-9.]+)/);if(ze&&!(jc()||K("iPad")||K("iPod")))return ff(/Version\/([0-9.]+)/);if(ve||we){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(J);if(a)return a[1]+"."+a[2]}else if(xe)return(a=ff(/Android\s+([0-9.]+)/))?a:ff(/Version\/([0-9.]+)/);return""})();function gf(a,b,c,d){I.call(this);this.g=b||null;this.B="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.H=!!a;this.w=v(this.C,this);window.addEventListener("message",this.w)}
aa(gf,I);
gf.prototype.C=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&u(a.data)){var b;try{b=Ma(a.data)}catch(c){return}if(!(null==b||this.H&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:Q(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.j&&(this.l&&!(0<=ac(this.l,b.func))||this.j(b.func,
b.args))}}};
gf.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Oa(a);c.postMessage(d,this.B)}catch(e){Q(e,"WARNING")}}};
gf.prototype.o=function(){window.removeEventListener("message",this.w);I.prototype.o.call(this)};var hf;var jf=J,kf=jf.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!kf||2>kf.length)hf=void 0;else{var lf=jf.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);hf=lf&&6==lf.length?Number(lf[5].replace("_",".")):0}0<=hf&&0<=J.search("Safari")&&J.search("Version");function mf(a){var b=document;return u(a)?b.getElementById(a):a}
function nf(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function of(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function pf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function qf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(qf,ef);function rf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(rf,ef);function sf(a){this.b=a||xc();tf||(tf=uf(this.b))}
function uf(a){return(new X(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=qa(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||ab(d,{_c:{jsl:{h:M("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||M("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Yc(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&ab(d,{_c:{jsl:{h:h}}})}Bd("client",d)}catch(k){Q(k)}})).then(function(){})}
sf.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Da;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=M("SESSION_INDEX");a("googleapis.config/sessionIndex",b);r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
sf.prototype.f=function(){return{context:wc(this.b)}};
sf.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=T(function(){e||(e=!0,c.O&&c.O())},c.timeout));
vf(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.J&&c.J(a);else if(c.onError)c.onError()})};
function vf(a,b,c,d){var e={path:yc(a.b.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":M("VISITOR_DATA")},method:"POST",body:Oa(c)},f=v(a.i,a);tf.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
var tf=null;function wf(){I.call(this);this.b=new Y;Ab(this,w(Bb,this.b))}
z(wf,I);wf.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
wf.prototype.K=function(a){return this.f?!1:this.b.K(a)};
wf.prototype.l=function(a,b){this.f||this.b.V.apply(this.b,arguments)};var xf=r("ytPubsubPubsubInstance")||r("yt.pubsub.instance_")||new Y;Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.K;Y.prototype.publish=Y.prototype.V;Y.prototype.clear=Y.prototype.clear;q("yt.pubsub.instance_",xf,void 0);q("ytPubsubPubsubInstance",xf,void 0);var yf=r("ytPubsubPubsubSubscribedKeys")||r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",yf,void 0);q("ytPubsubPubsubSubscribedKeys",yf,void 0);
var zf=r("ytPubsubPubsubTopicToKeys")||r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",zf,void 0);q("ytPubsubPubsubTopicToKeys",zf,void 0);var Af=r("ytPubsubPubsubIsSynchronous")||r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Af,void 0);q("ytPubsubPubsubIsSynchronous",Af,void 0);function Bf(){return r("ytPubsubPubsubInstance")||r("yt.pubsub.instance_")}
function Cf(a){zf[a]&&(a=zf[a],O(a,function(a){yf[a]&&delete yf[a]}),a.length=0)}
function Df(a){var b=Bf();if(b)if(b.clear(a),a)Cf(a);else for(var c in zf)Cf(c)}
function Ef(a,b){var c=Bf();c&&c.publish.apply(c,arguments)}
function Ff(a,b){var c=Bf();if(c){var d=c.subscribe(a,function(){var c=arguments,f;f=function(){yf[d]&&b.apply(window,c)};
try{Af[a]?f():T(f,0)}catch(g){Q(g)}},void 0);
yf[d]=!0;zf[a]||(zf[a]=[]);zf[a].push(d);return d}return 0}
function Gf(a){var b=Bf();b&&("number"==typeof a?a=[a]:u(a)&&(a=[parseInt(a,10)]),O(a,function(a){b.unsubscribeByKey(a);delete yf[a]}))}
;var Hf=r("ytPubsub2Pubsub2Instance")||new Y;Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.K;Y.prototype.publish=Y.prototype.V;Y.prototype.clear=Y.prototype.clear;q("ytPubsub2Pubsub2Instance",Hf,void 0);var If=r("ytPubsub2Pubsub2SubscribedKeys")||{};q("ytPubsub2Pubsub2SubscribedKeys",If,void 0);var Jf=r("ytPubsub2Pubsub2TopicToKeys")||{};q("ytPubsub2Pubsub2TopicToKeys",Jf,void 0);var Kf=r("ytPubsub2Pubsub2IsAsync")||{};q("ytPubsub2Pubsub2IsAsync",Kf,void 0);
q("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Lf(a){var b=r("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,Ac.toString(),Ac,a)}
;function Mf(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Nf=0,Of=r("yt.dom.dom.getNextId")||function(){return++Nf};
q("yt.dom.dom.getNextId",Of,void 0);function Pf(a,b,c){gf.call(this,a,b,c||M("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.b=this.j=null}
aa(Pf,gf);var Qf={log_event:"events",log_interaction:"interactions"},Rf={},Sf={},Tf=0,G=r("yt.logging.transport.logPayloadsQueue_")||{};q("yt.logging.transport.logPayloadsQueue_",G,void 0);var Uf=r("yt.logging.transport.tokensToCttTargetIds_")||{};q("yt.logging.transport.tokensToCttTargetIds_",Uf,void 0);
function Vf(a,b){Sf[a.endpoint]=b;var c;if(a.da){c=a.da;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Uf[a.da.token]=d;c=Wf(a.endpoint,a.da.token)}else c=Wf(a.endpoint);c.push(a.va);d=Number(R("web_logging_max_batch")||0)||20;c.length>=d?Xf():Yf()}
function Xf(){window.clearTimeout(Tf);if(!Xa()){for(var a in G){var b=Rf[a];if(!b){var c=Sf[a];if(!c)continue;b=new c;Rf[a]=b}var c=void 0,d=a,e=Qf[d];for(c in G[d]){var f=b.f();f[e]=Wf(d,c);f.requestTimeMs=Math.round(qb());var g=Uf[c];if(g)a:{var h,k=f,m=c;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;k.credentialTransferTokenTargetId=g;k.context=k.context||{};k.context.user=k.context.user||{};k.context.user.credentialTransferTokens=[{token:m,scope:h}]}delete Uf[c];b.g(d,
f,{})}delete G[a]}Xa()||Yf()}}
function Yf(){window.clearTimeout(Tf);Tf=T(Xf,M("LOGGING_BATCH_TIMEOUT",1E4))}
function Wf(a,b){b||(b="");G[a]=G[a]||{};G[a][b]=G[a][b]||[];return G[a][b]}
;var Zf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,$f=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ag(a,b){var c=bg(a),d=document.getElementById(c),e=d&&mb(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Ff(c,b),g=""+sa(b);cg[g]=e}f||(d=dg(a,c,function(){mb(d,"loaded")||(nb(d),Ef(c),T(w(Df,c),0))}))}}
function dg(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function eg(a,b){if(a&&b){var c=""+sa(b);(c=cg[c])&&Gf(c)}}
function bg(a){var b=document.createElement("a");Ke(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ib(a)}
var cg={};function fg(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Zf,""),c=c.replace($f,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ag(a,b)}
;var gg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function hg(a){if(window.spf){var b=a.match(gg);spf.style.load(a,b?b[1]:"",void 0)}else ig(a)}
function ig(a){var b=jg(a),c=document.getElementById(b),d=c&&mb(c,"loaded");d||c&&!d||(c=kg(a,b,function(){mb(c,"loaded")||(nb(c),Ef(b),T(w(Df,b),0))}))}
function kg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Le(a);d.rel="stylesheet";d.href=a instanceof Nc&&a.constructor===Nc&&a.f===Oc?a.b:"type_error:TrustedResourceUrl";(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function jg(a){var b=document.createElement("a");Ke(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ib(a)}
;function lg(){if(!mg&&!ng||!window.JSON)return null;var a;try{a=mg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=ng.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var ng,og=new qf;ng=og.isAvailable()?new se(og):null;var mg,pg=new rf;mg=pg.isAvailable()?new se(pg):null;function qg(a,b,c){wf.call(this);this.g=a;this.i=b;this.j=c}
z(qg,wf);function Cc(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(Oa(a),d.i))}}
qg.prototype.o=function(){this.i=this.g=null;qg.A.o.call(this)};var rg=!!window.google_async_iframe_id,Sc=rg&&window.parent||window;var sg=null;function tg(){var a=M("BG_I",null),b=M("BG_IU",null),c=M("BG_P",void 0);b?fg(b,function(){sg=new botguard.bg(c)}):a&&(eval(a),sg=new botguard.bg(c))}
function ug(){return null!=sg}
function vg(){return sg?sg.invoke():null}
;var wg=[],xg=!1;function yg(){function a(){xg=!0;"google_ad_status"in window?L("DCLKSTAT",1):L("DCLKSTAT",2)}
fg("//static.doubleclick.net/instream/ad_status.js",a);wg.push(je(function(){xg||"google_ad_status"in window||(eg("//static.doubleclick.net/instream/ad_status.js",a),L("DCLKSTAT",3))},1))}
function zg(){return parseInt(M("DCLKSTAT",0),10)}
;var Wa=r("ytEventsEventsListeners")||{};q("ytEventsEventsListeners",Wa,void 0);var Ag=r("ytEventsEventsCounter")||{count:0};q("ytEventsEventsCounter",Ag,void 0);function Bg(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Va(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Cg(a,b,c){var d;d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Bg(a,b,c,d);if(e)return e;var e=++Ag.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new pb(d);if(!pf(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new pb(b);
b.currentTarget=a;return c.call(a,b)};
g=tc(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Wa[e]=[a,b,c,g,d];return e}
function Dg(a){a&&("string"==typeof a&&(a=[a]),O(a,function(a){if(a in Wa){var b=Wa[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Wa[a]}}))}
;var Eg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function Fg(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=P(a)[1]||null,e=pc(P(a)[3]||null);d&&e?(d=c,c=P(a),d=P(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?pc(P(c)[3]||null)==e&&(Number(P(c)[4]||null)||null)==(Number(P(a)[4]||null)||null):!0;for(var f in Eg){if((e=d=M(Eg[f]))&&!(e=c)){var g=a,e=f,h=M("CORS_HEADER_WHITELIST")||{};e=(g=pc(P(g)[3]||null))?(h=h[g])?0<=ac(h,e):!1:!0}e&&(b[f]=d)}return b}
function Gg(a,b){var c=M("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.rb&&(!pc(P(a)[3]||null)||b.withCredentials||pc(P(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.D&&b.D[c])}
function Hg(a,b){var c=b.format||"JSON";b.Ka&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=M("XSRF_FIELD_NAME",void 0),e=M("XSRF_TOKEN",void 0),f=b.kb;f&&(f[d]&&delete f[d],a=Zc(a,f||{}));var g=b.postBody||"",f=b.D;Gg(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Yc(g),ab(d,f),g=b.wa&&"JSON"==b.wa?JSON.stringify(d):$c(d));var h=!1,k,m=Ig(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=yb(a),e=null;if(d||400<=a.status&&
500>a.status)e=Jg(c,a,b.qb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.J&&b.J.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Qa&&b.Qa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(k=T(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.O.call(b.context||n,m))},b.timeout))}
function Jg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Na(a));break;case "XML":if(b=(b=b.responseXML)?Kg(b):null)d={},O(b.getElementsByTagName("*"),function(a){d[a.tagName]=Lg(a)})}c&&Mg(d);
return d}
function Mg(a){if(ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=re(a[b]);a[c]=d}else Mg(a[b])}}
function Kg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Lg(a){var b="";O(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ng(a,b){b.method="POST";b.D||(b.D={});Hg(a,b)}
function Ig(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&tc(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=xb();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=Fg(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var Og=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Pg=['audio/mp4; codecs="mp4a.40.2"'];function Qg(){var a=!!M("WIDGET_ID_ENFORCE"),a=this.f=new Pf(a),b=v(this.ab,this);a.j=b;a.l=null;this.f.channel="widget";if(a=M("WIDGET_ID"))this.f.sessionId=a;this.i=[];this.l=!1;this.j={}}
l=Qg.prototype;l.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,Rg(this,c)),this.j[c]=!0)}else this.Aa(a,b)};
l.Aa=function(){};
function Rg(a,b){return v(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.Ga=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");O(this.i,this.za,this);this.i=[]};
l.ja=function(){return null};
function Sg(a,b){a.sendMessage("infoDelivery",b)}
l.za=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};var Tg;if(rg&&!Rc()){var Ug="."+xa.domain;try{for(;2<Ug.split(".").length&&!Rc();)xa.domain=Ug=Ug.substr(Ug.indexOf(".")+1),Sc=window.parent}catch(a){}Rc()||(Sc=window)}Tg=Sc;var Vg=new Tc(1,Tg);function Wg(){Tg.b||(O(Vg.events,Vg.g,Vg),Vg.events.length=0,Vg.b=!1)}
if("complete"==Tg.document.readyState)Wg();else if(Vg.b){var Xg=function(){Wg()};
Tg.addEventListener?Tg.addEventListener("load",Xg,jb?void 0:!1):Tg.attachEvent&&Tg.attachEvent("onload",Xg)};function Yg(a,b,c,d,e){c={name:c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Zg)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,k=!1;try{g=a.lineNumber||a.line||"Not available"}catch(E){g="Not available",k=!0}try{h=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||f}catch(E){h=
"Not available",k=!0}a=!k&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!($g[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){h=a.fileName;b={kb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},D:{url:M("PAGE_NAME",window.location.href),
file:h},method:"POST"};e&&(b.D.stack=e);for(var m in c)b.D["client."+m]=c[m];if(m=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var x in m)b.D[x]=m[x];Hg("/error_204",b);$g[a.message]=!0;Zg++}}}
var $g={},Zg=0;function ah(a){this.b=a||xc()}
ah.prototype.f=function(){return{context:wc(this.b)}};
ah.prototype.g=function(a,b,c){M("VISITOR_DATA")||Q(Error("Missing VISITOR_DATA when sending innertube request."));var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":M("VISITOR_DATA","")},D:b,wa:"JSON",O:c.O,J:function(a,b){c.J&&c.J(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=bd();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=M("SESSION_INDEX",0));e=this.b.nb;e.startsWith("http")||(e="//"+e);R("youtubei_for_web")&&(e="");var f=this.b.Oa;f&&(e=f);Ng(""+e+yc(this.b.innertubeApiVersion,a,b)+"?alt=json&key="+this.b.innertubeApiKey,d)};var bh={},ch=0;function dh(a,b){a&&(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Ig(a,b):eh(a,b))}
function eh(a,b){var c=new Image,d=""+ch++;bh[d]=c;c.onload=c.onerror=function(){b&&bh[d]&&b();delete bh[d]};
c.src=a}
;function fh(){var a=Za(gh);return new X(function(b,c){a.J=function(a){yb(a)?b(a):c(new hh("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new hh("Unknown request error","net.unknown"))};
a.O=function(){c(new hh("Request timed out","net.timeout"))};
Hg("//googleads.g.doubleclick.net/pagead/id",a)})}
function hh(a,b){D.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
aa(hh,D);function ih(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function jh(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return kh(a)}
function kh(a,b,c){if(ra(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function lh(a,b,c,d){if(ra(a)&&!oa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function mh(a){var b=a.video_id||a.videoId;if(u(b)){var c=lg()||{},d=lg()||{};p(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=ng;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function nh(){if(null==r("_lact",window)){var a=parseInt(M("LACT"),10),a=isFinite(a)?y()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&oh();Cg(document,"keydown",oh);Cg(document,"keyup",oh);Cg(document,"mousedown",oh);Cg(document,"mouseup",oh);Ff("page-mouse",oh);Ff("page-scroll",oh);Ff("page-resize",oh)}}
function oh(){null==r("_lact",window)&&(nh(),r("_lact",window));var a=y();q("_lact",a,window);Ef("USER_ACTIVE")}
function ph(){var a=r("_lact",window);return null==a?-1:Math.max(y()-a,0)}
;function qh(a,b,c){I.call(this);this.b=a;this.i=c;this.j=Cg(window,"message",v(this.l,this));this.g=new qg(this,a,b);Ab(this,w(Bb,this.g))}
z(qh,I);qh.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Ma(a)}catch(d){return}a.command&&(b=this.g,b.f||b.l("command",a.command,a.data))}};
qh.prototype.o=function(){Dg(this.j);this.b=null;qh.A.o.call(this)};function rh(a){D.call(this,a.message||a.description||a.name);this.Pa=a instanceof sh;this.b=a instanceof Ue}
z(rh,D);rh.prototype.name="BiscottiError";function sh(){D.call(this,"Biscotti ID is missing from server")}
z(sh,D);sh.prototype.name="BiscottiMissingError";function th(a,b){this.f=a;this.b=b}
th.prototype.then=function(a,b,c){try{if(p(this.f))return a?Re(a.call(c,this.f)):Re(this.f);if(p(this.b)){if(!b)return Se(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Se(this.b):Re(d)}throw Error("Invalid Result_ state");}catch(e){return Se(e)}};
bb(th);var gh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},uh=null;function vh(){if(!uh){var a=v(wh,n,2),b=fh().then(xh);uh=Te(b,null,a,void 0)}return uh}
function xh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new sh;a=JSON.parse(a.substr(4)).id;yh(a);uh=new th(a);zh(18E5,2);return a}
function wh(a,b){var c=new rh(b);yh("");uh=new th(void 0,c);0<a&&zh(12E4,a-1);throw c;}
function zh(a,b){T(function(){var a=v(wh,n,b),a=fh().then(xh,a);Te(a,null,t,void 0)},a)}
function yh(a){q("yt.ads.biscotti.lastId_",a,void 0)}
;function Ah(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||qb());f[a]=b;R("web_gel_lact")&&(f.context={lastActivityMs:ph()});Vf({endpoint:"log_event",va:f,da:e},c)}
;function Bh(a,b,c,d){Ch(a,{attachChild:{csn:b,parentVisualElement:vb(c),visualElements:[vb(d)]}},void 0)}
function Dh(a,b,c){c=bc(c,function(a){return vb(a)});
Ch(a,{visibilityUpdate:{csn:b,visualElements:c}})}
function Ch(a,b,c){b.eventTimeMs=Math.round(qb());b.lactMs=ph();c&&(b.clientData=Eh(c));Vf({endpoint:"log_interaction",va:b},a)}
function Eh(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=bc(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Fh(a,b){Bc.call(this,b);this.b=a;this.start()}
z(Fh,Bc);Fh.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Fh.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Ec(a,b){switch(a){case "loadVideoById":return b=kh(b),mh(b),[b];case "cueVideoById":return b=kh(b),mh(b),[b];case "loadVideoByPlayerVars":return mh(b),[b];case "cueVideoByPlayerVars":return mh(b),[b];case "loadPlaylist":return b=lh(b),mh(b),[b];case "cuePlaylist":return b=lh(b),mh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Fc(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Fh.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Fh.A.ia.call(this,a,b)};
Fh.prototype.o=function(){Fh.A.o.call(this);delete this.b};function Gh(a){Qg.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Wa,this));this.addEventListener("onVideoProgress",v(this.ib,this));this.addEventListener("onVolumeChange",v(this.jb,this));this.addEventListener("onApiChange",v(this.cb,this));this.addEventListener("onPlaybackQualityChange",v(this.fb,this));this.addEventListener("onPlaybackRateChange",v(this.gb,this));this.addEventListener("onStateChange",v(this.hb,this))}
z(Gh,Qg);l=Gh.prototype;l.Aa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&ih(a)){var c;c=b;if(ra(c[0])&&!oa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=kh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=jh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=lh.apply(window,c)}c=d}mh(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);ih(a)&&Sg(this,this.ja())}};
l.Wa=function(){var a=v(this.Ga,this);this.f.b=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ja=function(){if(!this.b)return null;var a=this.b.getApiInterface();dc(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
l.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Sg(this,a)};
l.fb=function(a){Sg(this,{playbackQuality:a})};
l.gb=function(a){Sg(this,{playbackRate:a})};
l.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jb=function(){Sg(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Sg(this,a)};
l.dispose=function(){Gh.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Hh(){return R("enable_youtubei_innertube")?ah:sf}
;var Ih=r("yt.logging.latency.usageStats_")||{};q("yt.logging.latency.usageStats_",Ih,void 0);var Jh=0;function Kh(a){Ih[a]=Ih[a]||{count:0};var b=Ih[a];b.count++;b.time=qb();Jh||(Jh=je(Lh,0));return 10<b.count?(11==b.count&&Yg(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function Lh(){var a=qb(),b;for(b in Ih)6E4<a-Ih[b].time&&delete Ih[b];Jh=0}
;function Mh(){var a=M("ROOT_VE_TYPE",void 0);return a?new tb(void 0,a,void 0):null}
function Nh(){var a=M("client-screen-nonce",void 0);a||(a=M("EVENT_ID",void 0));return a}
;function Oh(a){I.call(this);this.b=[];this.g=a||this}
z(Oh,I);function Ph(a,b,c,d){d=tc(v(d,a.g));d={target:b,name:c,ra:d};b.addEventListener(c,d.ra,void 0);a.b.push(d)}
function Qh(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ra)}}
Oh.prototype.o=function(){Qh(this);Oh.A.o.call(this)};var Rh={vc:!0},Sh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},Th="ap c cver ei yt_fss yt_li".split(" "),Uh=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Vh=v(H.clearResourceTimings||H.webkitClearResourceTimings||H.mozClearResourceTimings||H.msClearResourceTimings||H.oClearResourceTimings||
t,H);
function Wh(a){if("_"!=a[0]){var b=a;H.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),H.mark(b))}var b=Xh(),c=qb();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;Yh()["tick_"+a]=void 0;qb();R("csi_on_gel")?(b=Zh(),"_start"==a?Kh("baseline_"+b)||Ah("latencyActionBaselined",{clientActionNonce:b},ah,void 0):Kh("tick_"+a+"_"+b)||Ah("latencyActionTicked",{tickName:a,clientActionNonce:b},ah,void 0),a=!0):a=!1;if(a=!a)a=!r("yt.timing.pingSent_");if(a&&(b=M("TIMING_ACTION",void 0),a=Xh(),r("yt.timing.ready_")&&
b&&a._start&&$h())){b=!0;c=M("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&ai()}}
function bi(){var a=ci().info.yt_lt="hot_bg";Yh().info_yt_lt=a;if(R("csi_on_gel"))if("yt_lt"in Sh){var b={},c=Sh.yt_lt;0<=ac(Uh,c)&&(a=!!a);b[c]=a;a=Zh();c=Object.keys(b).join("");Kh("info_"+c+"_"+a)||(b.clientActionNonce=a,Ah("latencyActionInfo",b,ah))}else 0<=ac(Th,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function $h(){var a=Xh();if(a.aft)return a.aft;for(var b=M("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ai(){if(!R("csi_on_gel")){var a=Xh(),b=ci().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&oa(a[d])){var e=d.slice(1);if(e in Rh){var f=bc(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))di(f,e),ei(),Vh(),fi(!1,void 0),M("TIMING_ACTION")&&L("PREVIOUS_ACTION",M("TIMING_ACTION")),L("TIMING_ACTION","")}else{var g=M("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:M("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+r("ytplayer.config.assets.js");(k=H.getEntriesByName?H.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=$h();gi()&&"youtube"==g&&(bi(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=qb();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);di(f,e,void 0);Lf(new zc(b.aft+(h||0),void 0))}}}
function di(a,b,c){if(R("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||dh(a,void 0)}catch(f){dh(a,void 0)}else dh(a);fi(!0,c)}
function Zh(){var a=ci().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=y();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(ad)for(c=1,d=0;d<ad.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^ad.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");ci().nonce=a}return a}
function Xh(){return ci().tick}
function Yh(){var a=ci();"gel"in a||(a.gel={});return a.gel}
function ci(){return r("ytcsi.data_")||ei()}
function ei(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function fi(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function gi(){var a=Xh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==ci().info.yt_pvis}
;function hi(a,b){I.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.Z=this.S=null;this.U=new Y;Ab(this,w(Bb,this.U));this.j={};this.L=this.aa=this.i=this.ha=this.b=null;this.W=!1;this.M=this.B=this.H=this.R=null;this.ba={};this.Ca=["onReady"];this.X=new Oh(this);Ab(this,w(Bb,this.X));this.fa=null;this.oa=NaN;this.Y={};ii(this);this.G("onDetailedError",v(this.Ta,this));this.G("onTabOrderChange",v(this.Ea,this));this.G("onTabAnnounce",v(this.pa,this));this.G("WATCH_LATER_VIDEO_ADDED",v(this.Ua,
this));this.G("WATCH_LATER_VIDEO_REMOVED",v(this.Va,this));ue||(this.G("onMouseWheelCapture",v(this.Ra,this)),this.G("onMouseWheelRelease",v(this.Sa,this)));this.G("onAdAnnounce",v(this.pa,this));this.N=new Oh(this);Ab(this,w(Bb,this.N));this.ga=!1;this.ea=null}
z(hi,I);var ji=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=hi.prototype;l.na=function(a,b){this.f||(ki(this,a),li(this,b),this.C&&mi(this))};
function ki(a,b){a.ha=b;a.b=Vb(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.aa||(a.aa=ni(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=Mf(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=Mf(Number(c)||c)}
l.Ha=function(){return this.ha};
function mi(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function oi(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Be(Ae.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function pi(a,b){if((!b||(5!=(Wb[b.errorCode]||5)?0:-1!=ji.indexOf(b.errorCode)))&&oi(a)){var c=qi(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Ub(c));d.args.autoplay=1;d.args.html5_unavailable="1";ki(a,d);li(a,"flash")}}
function li(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&oi(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Ce)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Og:Pg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=ri(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?oi(a)?"flash":"unsupported":"html5"}("flash"==b?a.lb:a.mb).call(a)}}
function ri(a){var b=!0,c=qi(a);c&&a.b&&(a=a.b,b=mb(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.mb=function(){if(!this.W){var a=ri(this);if(a&&"html5"==si(this))this.L="html5",this.C||this.P();else if(ti(this),this.L="html5",a&&this.H)this.l.appendChild(this.H),this.P();else{this.b.loaded=!0;var b=!1;this.R=v(function(){b=!0;var a=this.l,d=Vb(this.b);r("yt.player.Application.create")(a,d);this.P()},this);
this.W=!0;a?this.R():(fg(this.b.assets.js,this.R),hg(this.b.assets.css),ui(this)&&!b&&q("yt.player.Application.create",null,void 0))}}};
l.lb=function(){var a=Vb(this.b);if(!this.B){var b=qi(this);b&&(this.B=document.createElement("SPAN"),this.B.tabIndex=0,Ph(this.X,this.B,"focus",this.ta),this.M=document.createElement("SPAN"),this.M.tabIndex=0,Ph(this.X,this.M,"focus",this.ta),b.parentNode&&b.parentNode.insertBefore(this.B,b),b.parentNode&&b.parentNode.insertBefore(this.M,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==si(this))this.L="flash",this.C||this.P();else{ti(this);this.L=
"flash";this.b.loaded=!0;var b=Ae.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Be(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=u(b)?mf(b):b,d=Za(a.attrs);d.tabindex=0;var e=Za(a.params);e.flashvars=$c(a.args);if(rb){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var k in e)a.setAttribute(k,e[k])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.P()}};
l.ta=function(){qi(this).focus()};
function qi(a){var b=mf(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
l.P=function(){if(!this.f){var a=qi(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.W=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))pi(this);else{ii(this);this.C=!0;a=qi(this);a.addEventListener&&(this.S=vi(this,a,"addEventListener"));a.removeEventListener&&(this.Z=vi(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=vi(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);mi(this);this.aa&&this.aa(this.g);this.U.V("onReady",this.g)}else this.oa=T(v(this.P,this),50)}};
function vi(a,b,c){var d=b[c];return function(){try{return a.fa=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.fa=e,Q(e,"WARNING"))}}}
function ii(a){a.C=!1;if(a.Z)for(var b in a.j)a.Z(b,a.j[b]);for(var c in a.Y)window.clearTimeout(parseInt(c,10));a.Y={};a.S=null;a.Z=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.G,a);a.g.removeEventListener=v(a.bb,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ia,a);a.g.getPlayerType=v(a.Ja,a);a.g.getCurrentVideoConfig=v(a.Ha,a);a.g.loadNewVideoConfig=v(a.na,a);a.g.isReady=v(a.ob,a)}
l.ob=function(){return this.C};
l.G=function(a,b){if(!this.f){var c=ni(this,b);if(c){if(!(0<=ac(this.Ca,a)||this.j[a])){var d=wi(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&T(w(c,this.g),0)}}};
l.bb=function(a,b){if(!this.f){var c=ni(this,b);c&&Gc(this.U,a,c)}};
function ni(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ba[b]=c}return c?c:null}
function wi(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;n[c]=function(c){var d=T(function(){if(!a.f){a.U.V(b,c);var e=a.Y,g=String(d);g in e&&delete e[g]}},0);
Ya(a.Y,String(d))};
return c}
l.Ea=function(a){a=a?of:nf;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.B||b==this.M||(b.focus(),b!=document.activeElement));)b=a(b)};
l.pa=function(a){Ef("a11y-announce",a)};
l.Ta=function(a){pi(this,a)};
l.Ua=function(a){Ef("WATCH_LATER_VIDEO_ADDED",a)};
l.Va=function(a){Ef("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ra=function(){if(!this.ga){if(ye){var a=document,b=a.scrollingElement?a.scrollingElement:Vd||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.ea=V&&W("10")&&a.pageYOffset!=b.scrollTop?new Rd(b.scrollLeft,b.scrollTop):new Rd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Ph(this.N,window,"scroll",this.Ya);Ph(this.N,this.l,"touchmove",this.Xa)}else Ph(this.N,this.l,"mousewheel",this.ua),Ph(this.N,this.l,"wheel",this.ua);this.ga=!0}};
l.Sa=function(){Qh(this.N);this.ga=!1};
l.ua=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Ya=function(){window.scrollTo(this.ea.b,this.ea.f)};
l.Xa=function(a){a.preventDefault()};
l.Ja=function(){return this.L||si(this)};
l.Ia=function(){return this.fa};
function si(a){return(a=qi(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function ti(a){Wh("dcp");a.cancel();ii(a);a.L=null;a.b&&(a.b.loaded=!1);var b=qi(a);"html5"==si(a)?ri(a)||!ui(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Qh(a.X);a.B=null;a.M=null}
l.cancel=function(){this.R&&eg(this.b.assets.js,this.R);window.clearTimeout(this.oa);this.W=!1};
l.o=function(){ti(this);if(this.H&&this.b)try{this.H.destroy()}catch(b){Q(b)}this.ba=null;for(var a in this.j)n[this.j[a]]=null;this.ha=this.b=this.g=null;delete this.l;delete this.w;hi.A.o.call(this)};
function ui(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;function xi(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=M("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=M("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=pc(P(window.location.href)[3]||null);f&&e.push(f);f=pc(P(d)[3]||null);if(0<=ac(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),Ke(e,d),d=e.href),d){var f=P(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Nh();d="ST-"+ib(d).toString(36);e=b?$c(b):"";Gb.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new tb(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h,k,m;h=void 0===h?{}:h;k=void 0===k?"":k;m=void 0===m?window:m;c=m.location;a=qc(sc([a],h))+k;a=a instanceof Gd?a:Kd(a);c.href=Id(a)}return!0}
;function yi(a){a.Pa&&zi("")}
function Ai(a){!a||r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_")||q("yt.ads.biscotti.getId_",vh,void 0);try{var b;try{var c=r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_");b=c?c():vh()}catch(d){b=Se(d)}b.then(zi,yi);T(Ai,18E5)}catch(d){Q(d)}}
var Bi=0;
function zi(a){var b;a:{try{b=window.top.location.href}catch(F){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:ya,flash:Mb||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=A.history.length}catch(F){c=0}b.u_his=c;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=A.screen.colorDepth);A.navigator&&
A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=Lb?"flash":"image";if(R("enable_server_side_search_pyv")||R("enable_server_side_mweb_search_pyv")){var d,e;a=window;try{e=a.screenX;var f=a.screenY}catch(F){}try{var g=a.outerWidth,h=a.outerHeight}catch(F){}try{var k=a.innerWidth,m=a.innerHeight}catch(F){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,g,h,k,m];f=window.top||A;try{var x;if(f.document&&!f.document.body)x=new Ua(-1,-1);else{var E=(f||window).document,Z="CSS1Compat"==E.compatMode?E.documentElement:E.body;x=(new Ua(Z.clientWidth,Z.clientHeight)).round()}d=x}catch(F){d=new Ua(-12245933,-12245933)}x=0;window.SVGElement&&document.createElementNS&&(x|=1);d={bc:x,bih:d.height,biw:d.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[xa.webkitVisibilityState||xa.mozVisibilityState||xa.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};
for(var na in d)b[na]=d[na]}b.bsq=Bi++;Ng("//www.youtube.com/ad_data_204",{Ka:!1,D:b})}
;var Ci={},Di="player_uid_"+(1E9*Math.random()>>>0);function Ei(a,b){a=u(a)?mf(a):a;b=Ub(b);var c=Di+"_"+sa(a),d=Ci[c];if(d)return d.na(b),d.g;d=new hi(a,c);Ci[c]=d;Ef("player-added",d.g);Ab(d,w(Fi,d));T(function(){d.na(b)},0);
return d.g}
function Fi(a){Ci[a.T]=null}
function Gi(a){a=mf(a);if(!a)return null;var b=Di+"_"+sa(a),c=Ci[b];c||(c=new hi(a,b),Ci[b]=c);return c.g}
;var Hi=r("yt.abuse.botguardInitialized")||ug;q("yt.abuse.botguardInitialized",Hi,void 0);var Ii=r("yt.abuse.invokeBotguard")||vg;q("yt.abuse.invokeBotguard",Ii,void 0);var Ji=r("yt.abuse.dclkstatus.checkDclkStatus")||zg;q("yt.abuse.dclkstatus.checkDclkStatus",Ji,void 0);var Ki=r("yt.player.exports.navigate")||xi;q("yt.player.exports.navigate",Ki,void 0);var Li=r("yt.player.embed")||Ei;q("yt.player.embed",Li,void 0);var Mi=r("yt.player.getPlayerByElement")||Gi;q("yt.player.getPlayerByElement",Mi,void 0);
var Ni=r("yt.util.activity.init")||nh;q("yt.util.activity.init",Ni,void 0);var Oi=r("yt.util.activity.getTimeSinceActive")||ph;q("yt.util.activity.getTimeSinceActive",Oi,void 0);var Pi=r("yt.util.activity.setTimestamp")||oh;q("yt.util.activity.setTimestamp",Pi,void 0);var Qi=null,Ri=null,Si=null,Ti={};function Ui(a){Ah(a.payload_name,a.payload,R("enable_youtubei_innertube")?ah:sf,void 0,void 0)}
function Vi(a){var b=a.id;a=a.ve_type;var c=ub++;a=new tb(void 0,a,c,void 0);Ti[b]=a;b=Nh();c=Mh();b&&c&&Bh(Hh(),b,c,a)}
function Wi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(L("client-screen-nonce",b),L("ROOT_VE_TYPE",a),a=Mh()))for(var c in Ti){var d=b,e=a,f=Ti[c];Bh(Hh(),d,e,f)}}
function Xi(a){Ti[a.id]=new tb(a.tracking_params)}
function Yi(a){var b=Nh();a=Ti[a.id];if(b&&a){var c=Hh();Ch(c,{click:{csn:b,visualElement:vb(a)}},void 0)}}
function Zi(a){a=a.ids;var b=Nh();if(b){for(var c=[],d=0;d<a.length;d++){var e=Ti[a[d]];e&&c.push(e)}c.length&&Dh(Hh(),b,c)}}
function $i(){var a=Qi;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",L,void 0);q("yt.config.set",L,void 0);q("yt.setMsg",vc,void 0);q("yt.msgs.set",vc,void 0);q("yt.logging.errors.log",Yg,void 0);
q("writeEmbed",function(){var a=M("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Ai(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=M("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);M("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&mh(a.args);Qi=a=Ei("player",a);a.addEventListener("onScreenChanged",Wi);a.addEventListener("onLogClientVeCreated",Vi);a.addEventListener("onLogServerVeCreated",Xi);a.addEventListener("onLogToGel",
Ui);a.addEventListener("onLogVeClicked",Yi);a.addEventListener("onLogVesShown",Zi);a.addEventListener("onReady",$i);b=M("POST_MESSAGE_ID","player");M("ENABLE_JS_API")?Si=new Gh(a):M("ENABLE_POST_API")&&u(b)&&u(c)&&(Ri=new qh(window.parent,b,c),Si=new Fh(a,Ri.g));M("BG_P")&&(M("BG_I")||M("BG_IU"))&&tg();yg()},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){dh(a+"mac_204?action_fcts=1");return!0},void 0);
var aj=tc(function(){Wh("ol");var a=Uc.getInstance(),b=1<window.devicePixelRatio;if(!!((Xc("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Xc(c)||0,d=b?d|67108864:d&-67108865;0==d?delete S[c]:S[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in S)b.push(e+"="+escape(S[e]));Gb.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),bj=tc(function(){var a=Qi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();M("PL_ATT")&&(sg=null);for(var a=0,b=wg.length;a<b;a++){var c=wg[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}wg.length=0;a=bg("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Df(a),b.parentNode.removeChild(b);xg=!1;L("DCLKSTAT",0);Cb(Si,Ri);if(a=Qi)a.removeEventListener("onScreenChanged",Wi),a.removeEventListener("onLogClientVeCreated",Vi),a.removeEventListener("onLogServerVeCreated",
Xi),a.removeEventListener("onLogToGel",Ui),a.removeEventListener("onLogVeClicked",Yi),a.removeEventListener("onLogVesShown",Zi),a.removeEventListener("onReady",$i),a.destroy();Ti={}});
window.addEventListener?(window.addEventListener("load",aj),window.addEventListener("unload",bj)):window.attachEvent&&(window.attachEvent("onload",aj),window.attachEvent("onunload",bj));}).call(this);
