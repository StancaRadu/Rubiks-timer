var qg=Object.defineProperty;var $g=(i,t,e)=>t in i?qg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ot=(i,t,e)=>($g(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();async function cp(){let i=ao.charts[0].chart,t=ao.tables[0],e=ao.charts[0],n=await ll.get();t.body.replaceChildren(),i.data.datasets[0].data=[],i.data.datasets[1].data=[],i.data.datasets[2].data=[],i.data.datasets[3].data=[],i.data.labels=[],i.data.size=0;for(const s in n)e.addTime(n[s],!1),t.addTime(n[s],e.chart);i.update()}function Kg(i){i=i.sort().slice(1,-1);let t=0;for(const e in i){let n=i[e];t+=n}return t/=i.length,t}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function To(i){return i+.5|0}const Ai=(i,t,e)=>Math.max(Math.min(i,e),t);function Hr(i){return Ai(To(i*2.55),0,255)}function Ii(i){return Ai(To(i*255),0,255)}function li(i){return Ai(To(i/2.55)/100,0,1)}function Kh(i){return Ai(To(i*100),0,100)}const Mn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},_c=[..."0123456789ABCDEF"],Zg=i=>_c[i&15],Jg=i=>_c[(i&240)>>4]+_c[i&15],Uo=i=>(i&240)>>4===(i&15),Qg=i=>Uo(i.r)&&Uo(i.g)&&Uo(i.b)&&Uo(i.a);function t_(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&Mn[i[1]]*17,g:255&Mn[i[2]]*17,b:255&Mn[i[3]]*17,a:t===5?Mn[i[4]]*17:255}:(t===7||t===9)&&(e={r:Mn[i[1]]<<4|Mn[i[2]],g:Mn[i[3]]<<4|Mn[i[4]],b:Mn[i[5]]<<4|Mn[i[6]],a:t===9?Mn[i[7]]<<4|Mn[i[8]]:255})),e}const e_=(i,t)=>i<255?t(i):"";function n_(i){var t=Qg(i)?Zg:Jg;return i?"#"+t(i.r)+t(i.g)+t(i.b)+e_(i.a,t):void 0}const i_=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hp(i,t,e){const n=t*Math.min(e,1-e),s=(r,o=(r+i/30)%12)=>e-n*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function s_(i,t,e){const n=(s,r=(s+i/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function r_(i,t,e){const n=hp(i,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)n[s]*=1-t-e,n[s]+=t;return n}function o_(i,t,e,n,s){return i===s?(t-e)/n+(t<e?6:0):t===s?(e-i)/n+2:(i-t)/n+4}function sh(i){const e=i.r/255,n=i.g/255,s=i.b/255,r=Math.max(e,n,s),o=Math.min(e,n,s),a=(r+o)/2;let l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=o_(e,n,s,h,r),l=l*60+.5),[l|0,c||0,a]}function rh(i,t,e,n){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,n)).map(Ii)}function oh(i,t,e){return rh(hp,i,t,e)}function a_(i,t,e){return rh(r_,i,t,e)}function l_(i,t,e){return rh(s_,i,t,e)}function up(i){return(i%360+360)%360}function c_(i){const t=i_.exec(i);let e=255,n;if(!t)return;t[5]!==n&&(e=t[6]?Hr(+t[5]):Ii(+t[5]));const s=up(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?n=a_(s,r,o):t[1]==="hsv"?n=l_(s,r,o):n=oh(s,r,o),{r:n[0],g:n[1],b:n[2],a:e}}function h_(i,t){var e=sh(i);e[0]=up(e[0]+t),e=oh(e),i.r=e[0],i.g=e[1],i.b=e[2]}function u_(i){if(!i)return;const t=sh(i),e=t[0],n=Kh(t[1]),s=Kh(t[2]);return i.a<255?`hsla(${e}, ${n}%, ${s}%, ${li(i.a)})`:`hsl(${e}, ${n}%, ${s}%)`}const Zh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Jh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function d_(){const i={},t=Object.keys(Jh),e=Object.keys(Zh);let n,s,r,o,a;for(n=0;n<t.length;n++){for(o=a=t[n],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Zh[r]);r=parseInt(Jh[o],16),i[a]=[r>>16&255,r>>8&255,r&255]}return i}let Fo;function f_(i){Fo||(Fo=d_(),Fo.transparent=[0,0,0,0]);const t=Fo[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const p_=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function m_(i){const t=p_.exec(i);let e=255,n,s,r;if(t){if(t[7]!==n){const o=+t[7];e=t[8]?Hr(o):Ai(o*255,0,255)}return n=+t[1],s=+t[3],r=+t[5],n=255&(t[2]?Hr(n):Ai(n,0,255)),s=255&(t[4]?Hr(s):Ai(s,0,255)),r=255&(t[6]?Hr(r):Ai(r,0,255)),{r:n,g:s,b:r,a:e}}}function g_(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${li(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const bl=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,Us=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function __(i,t,e){const n=Us(li(i.r)),s=Us(li(i.g)),r=Us(li(i.b));return{r:Ii(bl(n+e*(Us(li(t.r))-n))),g:Ii(bl(s+e*(Us(li(t.g))-s))),b:Ii(bl(r+e*(Us(li(t.b))-r))),a:i.a+e*(t.a-i.a)}}function No(i,t,e){if(i){let n=sh(i);n[t]=Math.max(0,Math.min(n[t]+n[t]*e,t===0?360:1)),n=oh(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function dp(i,t){return i&&Object.assign(t||{},i)}function Qh(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=Ii(i[3]))):(t=dp(i,{r:0,g:0,b:0,a:1}),t.a=Ii(t.a)),t}function x_(i){return i.charAt(0)==="r"?m_(i):c_(i)}let fp=class xc{constructor(t){if(t instanceof xc)return t;const e=typeof t;let n;e==="object"?n=Qh(t):e==="string"&&(n=t_(t)||f_(t)||x_(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=dp(this._rgb);return t&&(t.a=li(t.a)),t}set rgb(t){this._rgb=Qh(t)}rgbString(){return this._valid?g_(this._rgb):void 0}hexString(){return this._valid?n_(this._rgb):void 0}hslString(){return this._valid?u_(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*s.r+.5,n.g=255&c*n.g+r*s.g+.5,n.b=255&c*n.b+r*s.b+.5,n.a=o*n.a+(1-o)*s.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=__(this._rgb,t._rgb,e)),this}clone(){return new xc(this.rgb)}alpha(t){return this._rgb.a=Ii(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=To(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return No(this._rgb,2,t),this}darken(t){return No(this._rgb,2,-t),this}saturate(t){return No(this._rgb,1,t),this}desaturate(t){return No(this._rgb,1,-t),this}rotate(t){return h_(this._rgb,t),this}};/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Jn(){}const v_=(()=>{let i=0;return()=>i++})();function qt(i){return i===null||typeof i>"u"}function ae(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Xt(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function me(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function fn(i,t){return me(i)?i:t}function Ut(i,t){return typeof i>"u"?t:i}const b_=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,pp=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function ie(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function Jt(i,t,e,n){let s,r,o;if(ae(i))if(r=i.length,n)for(s=r-1;s>=0;s--)t.call(e,i[s],s);else for(s=0;s<r;s++)t.call(e,i[s],s);else if(Xt(i))for(o=Object.keys(i),r=o.length,s=0;s<r;s++)t.call(e,i[o[s]],o[s])}function La(i,t){let e,n,s,r;if(!i||!t||i.length!==t.length)return!1;for(e=0,n=i.length;e<n;++e)if(s=i[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Da(i){if(ae(i))return i.map(Da);if(Xt(i)){const t=Object.create(null),e=Object.keys(i),n=e.length;let s=0;for(;s<n;++s)t[e[s]]=Da(i[e[s]]);return t}return i}function mp(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function M_(i,t,e,n){if(!mp(i))return;const s=t[i],r=e[i];Xt(s)&&Xt(r)?lo(s,r,n):t[i]=Da(r)}function lo(i,t,e){const n=ae(t)?t:[t],s=n.length;if(!Xt(i))return i;e=e||{};const r=e.merger||M_;let o;for(let a=0;a<s;++a){if(o=n[a],!Xt(o))continue;const l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],i,o,e)}return i}function Zr(i,t){return lo(i,t,{merger:y_})}function y_(i,t,e){if(!mp(i))return;const n=t[i],s=e[i];Xt(n)&&Xt(s)?Zr(n,s):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Da(s))}const tu={"":i=>i,x:i=>i.x,y:i=>i.y};function S_(i){const t=i.split("."),e=[];let n="";for(const s of t)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(e.push(n),n="");return e}function E_(i){const t=S_(i);return e=>{for(const n of t){if(n==="")break;e=e&&e[n]}return e}}function zi(i,t){return(tu[t]||(tu[t]=E_(t)))(i)}function ah(i){return i.charAt(0).toUpperCase()+i.slice(1)}const co=i=>typeof i<"u",Hi=i=>typeof i=="function",eu=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function T_(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const ce=Math.PI,le=2*ce,A_=le+ce,Oa=Number.POSITIVE_INFINITY,w_=ce/180,Me=ce/2,Zi=ce/4,nu=ce*2/3,wi=Math.log10,jn=Math.sign;function Jr(i,t,e){return Math.abs(i-t)<e}function iu(i){const t=Math.round(i);i=Jr(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(wi(i))),n=i/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function R_(i){const t=[],e=Math.sqrt(i);let n;for(n=1;n<e;n++)i%n===0&&(t.push(n),t.push(i/n));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function mr(i){return!isNaN(parseFloat(i))&&isFinite(i)}function C_(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function gp(i,t,e){let n,s,r;for(n=0,s=i.length;n<s;n++)r=i[n][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function In(i){return i*(ce/180)}function lh(i){return i*(180/ce)}function su(i){if(!me(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function _p(i,t){const e=t.x-i.x,n=t.y-i.y,s=Math.sqrt(e*e+n*n);let r=Math.atan2(n,e);return r<-.5*ce&&(r+=le),{angle:r,distance:s}}function vc(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function P_(i,t){return(i-t+A_)%le-ce}function pn(i){return(i%le+le)%le}function ho(i,t,e,n){const s=pn(i),r=pn(t),o=pn(e),a=pn(r-s),l=pn(o-s),c=pn(s-r),h=pn(s-o);return s===r||s===o||n&&r===o||a>l&&c<h}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function L_(i){return Le(i,-32768,32767)}function di(i,t,e,n=1e-6){return i>=Math.min(t,e)-n&&i<=Math.max(t,e)+n}function ch(i,t,e){e=e||(o=>i[o]<t);let n=i.length-1,s=0,r;for(;n-s>1;)r=s+n>>1,e(r)?s=r:n=r;return{lo:s,hi:n}}const fi=(i,t,e,n)=>ch(i,e,n?s=>{const r=i[s][t];return r<e||r===e&&i[s+1][t]===e}:s=>i[s][t]<e),D_=(i,t,e)=>ch(i,e,n=>i[n][t]>=e);function O_(i,t,e){let n=0,s=i.length;for(;n<s&&i[n]<t;)n++;for(;s>n&&i[s-1]>e;)s--;return n>0||s<i.length?i.slice(n,s):i}const xp=["push","pop","shift","splice","unshift"];function I_(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),xp.forEach(e=>{const n="_onData"+ah(e),s=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...r)}),o}})})}function ru(i,t){const e=i._chartjs;if(!e)return;const n=e.listeners,s=n.indexOf(t);s!==-1&&n.splice(s,1),!(n.length>0)&&(xp.forEach(r=>{delete i[r]}),delete i._chartjs)}function vp(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const bp=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function Mp(i,t){let e=[],n=!1;return function(...s){e=s,n||(n=!0,bp.call(window,()=>{n=!1,i.apply(t,e)}))}}function U_(i,t){let e;return function(...n){return t?(clearTimeout(e),e=setTimeout(i,t,n)):i.apply(this,n),t}}const hh=i=>i==="start"?"left":i==="end"?"right":"center",ze=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,F_=(i,t,e,n)=>i===(n?"left":"right")?e:i==="center"?(t+e)/2:t;function yp(i,t,e){const n=t.length;let s=0,r=n;if(i._sorted){const{iScale:o,_parsed:a}=i,l=o.axis,{min:c,max:h,minDefined:u,maxDefined:d}=o.getUserBounds();u&&(s=Le(Math.min(fi(a,l,c).lo,e?n:fi(t,l,o.getPixelForValue(c)).lo),0,n-1)),d?r=Le(Math.max(fi(a,o.axis,h,!0).hi+1,e?0:fi(t,l,o.getPixelForValue(h),!0).hi+1),s,n)-s:r=n-s}return{start:s,count:r}}function Sp(i){const{xScale:t,yScale:e,_scaleRanges:n}=i,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!n)return i._scaleRanges=s,!0;const r=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==e.min||n.ymax!==e.max;return Object.assign(n,s),r}const ko=i=>i===0||i===1,ou=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*le/e)),au=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*le/e)+1,Qr={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Me)+1,easeOutSine:i=>Math.sin(i*Me),easeInOutSine:i=>-.5*(Math.cos(ce*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>ko(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>ko(i)?i:ou(i,.075,.3),easeOutElastic:i=>ko(i)?i:au(i,.075,.3),easeInOutElastic(i){return ko(i)?i:i<.5?.5*ou(i*2,.1125,.45):.5+.5*au(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-Qr.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Qr.easeInBounce(i*2)*.5:Qr.easeOutBounce(i*2-1)*.5+.5};function uh(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function lu(i){return uh(i)?i:new fp(i)}function Ml(i){return uh(i)?i:new fp(i).saturate(.5).darken(.1).hexString()}const N_=["x","y","borderWidth","radius","tension"],k_=["color","borderColor","backgroundColor"];function B_(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:k_},numbers:{type:"number",properties:N_}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function z_(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const cu=new Map;function H_(i,t){t=t||{};const e=i+JSON.stringify(t);let n=cu.get(e);return n||(n=new Intl.NumberFormat(i,t),cu.set(e,n)),n}function Ao(i,t,e){return H_(t,e).format(i)}const Ep={values(i){return ae(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const n=this.chart.options.locale;let s,r=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=V_(i,e)}const o=wi(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Ao(i,n,l)},logarithmic(i,t,e){if(i===0)return"0";const n=e[t].significand||i/Math.pow(10,Math.floor(wi(i)));return[1,2,3,5,10,15].includes(n)||t>.8*e.length?Ep.numeric.call(this,i,t,e):""}};function V_(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var il={formatters:Ep};function G_(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:il.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const As=Object.create(null),bc=Object.create(null);function to(i,t){if(!t)return i;const e=t.split(".");for(let n=0,s=e.length;n<s;++n){const r=e[n];i=i[r]||(i[r]=Object.create(null))}return i}function yl(i,t,e){return typeof t=="string"?lo(to(i,t),e):lo(to(i,""),t)}class W_{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,s)=>Ml(s.backgroundColor),this.hoverBorderColor=(n,s)=>Ml(s.borderColor),this.hoverColor=(n,s)=>Ml(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return yl(this,t,e)}get(t){return to(this,t)}describe(t,e){return yl(bc,t,e)}override(t,e){return yl(As,t,e)}route(t,e,n,s){const r=to(this,t),o=to(this,n),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=o[s];return Xt(l)?Object.assign({},c,l):Ut(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var ge=new W_({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[B_,z_,G_]);function X_(i){return!i||qt(i.size)||qt(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Ia(i,t,e,n,s){let r=t[s];return r||(r=t[s]=i.measureText(s).width,e.push(s)),r>n&&(n=r),n}function Y_(i,t,e,n){n=n||{};let s=n.data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(s=n.data={},r=n.garbageCollect=[],n.font=t),i.save(),i.font=t;let o=0;const a=e.length;let l,c,h,u,d;for(l=0;l<a;l++)if(u=e[l],u!=null&&!ae(u))o=Ia(i,s,r,o,u);else if(ae(u))for(c=0,h=u.length;c<h;c++)d=u[c],d!=null&&!ae(d)&&(o=Ia(i,s,r,o,d));i.restore();const f=r.length/2;if(f>e.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function Ji(i,t,e){const n=i.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*n)/n+s}function hu(i,t){t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore()}function Mc(i,t,e,n){Tp(i,t,e,n,null)}function Tp(i,t,e,n,s){let r,o,a,l,c,h,u,d;const f=t.pointStyle,_=t.rotation,g=t.radius;let p=(_||0)*w_;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){i.save(),i.translate(e,n),i.rotate(p),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(g)||g<=0)){switch(i.beginPath(),f){default:s?i.ellipse(e,n,s/2,g,0,0,le):i.arc(e,n,g,0,le),i.closePath();break;case"triangle":h=s?s/2:g,i.moveTo(e+Math.sin(p)*h,n-Math.cos(p)*g),p+=nu,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*g),p+=nu,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*g),i.closePath();break;case"rectRounded":c=g*.516,l=g-c,o=Math.cos(p+Zi)*l,u=Math.cos(p+Zi)*(s?s/2-c:l),a=Math.sin(p+Zi)*l,d=Math.sin(p+Zi)*(s?s/2-c:l),i.arc(e-u,n-a,c,p-ce,p-Me),i.arc(e+d,n-o,c,p-Me,p),i.arc(e+u,n+a,c,p,p+Me),i.arc(e-d,n+o,c,p+Me,p+ce),i.closePath();break;case"rect":if(!_){l=Math.SQRT1_2*g,h=s?s/2:l,i.rect(e-h,n-l,2*h,2*l);break}p+=Zi;case"rectRot":u=Math.cos(p)*(s?s/2:g),o=Math.cos(p)*g,a=Math.sin(p)*g,d=Math.sin(p)*(s?s/2:g),i.moveTo(e-u,n-a),i.lineTo(e+d,n-o),i.lineTo(e+u,n+a),i.lineTo(e-d,n+o),i.closePath();break;case"crossRot":p+=Zi;case"cross":u=Math.cos(p)*(s?s/2:g),o=Math.cos(p)*g,a=Math.sin(p)*g,d=Math.sin(p)*(s?s/2:g),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"star":u=Math.cos(p)*(s?s/2:g),o=Math.cos(p)*g,a=Math.sin(p)*g,d=Math.sin(p)*(s?s/2:g),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o),p+=Zi,u=Math.cos(p)*(s?s/2:g),o=Math.cos(p)*g,a=Math.sin(p)*g,d=Math.sin(p)*(s?s/2:g),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"line":o=s?s/2:Math.cos(p)*g,a=Math.sin(p)*g,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a);break;case"dash":i.moveTo(e,n),i.lineTo(e+Math.cos(p)*(s?s/2:g),n+Math.sin(p)*g);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function pi(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function sl(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function rl(i){i.restore()}function j_(i,t,e,n,s){if(!t)return i.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;i.lineTo(r,t.y),i.lineTo(r,e.y)}else s==="after"!=!!n?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function q_(i,t,e,n){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?e.cp2x:e.cp1x,n?e.cp2y:e.cp1y,e.x,e.y)}function $_(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),qt(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function K_(i,t,e,n,s){if(s.strikethrough||s.underline){const r=i.measureText(n),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(o,h),i.lineTo(a,h),i.stroke()}}function Z_(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function ws(i,t,e,n,s,r={}){const o=ae(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(i.save(),i.font=s.string,$_(i,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&Z_(i,r.backdrop),a&&(r.strokeColor&&(i.strokeStyle=r.strokeColor),qt(r.strokeWidth)||(i.lineWidth=r.strokeWidth),i.strokeText(c,e,n,r.maxWidth)),i.fillText(c,e,n,r.maxWidth),K_(i,e,n,c,r),n+=Number(s.lineHeight);i.restore()}function uo(i,t){const{x:e,y:n,w:s,h:r,radius:o}=t;i.arc(e+o.topLeft,n+o.topLeft,o.topLeft,1.5*ce,ce,!0),i.lineTo(e,n+r-o.bottomLeft),i.arc(e+o.bottomLeft,n+r-o.bottomLeft,o.bottomLeft,ce,Me,!0),i.lineTo(e+s-o.bottomRight,n+r),i.arc(e+s-o.bottomRight,n+r-o.bottomRight,o.bottomRight,Me,0,!0),i.lineTo(e+s,n+o.topRight),i.arc(e+s-o.topRight,n+o.topRight,o.topRight,0,-Me,!0),i.lineTo(e+o.topLeft,n)}const J_=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Q_=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function t0(i,t){const e=(""+i).match(J_);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const e0=i=>+i||0;function dh(i,t){const e={},n=Xt(t),s=n?Object.keys(t):t,r=Xt(i)?n?o=>Ut(i[o],i[t[o]]):o=>i[o]:()=>i;for(const o of s)e[o]=e0(r(o));return e}function Ap(i){return dh(i,{top:"y",right:"x",bottom:"y",left:"x"})}function gs(i){return dh(i,["topLeft","topRight","bottomLeft","bottomRight"])}function Ye(i){const t=Ap(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Te(i,t){i=i||{},t=t||ge.font;let e=Ut(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let n=Ut(i.style,t.style);n&&!(""+n).match(Q_)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const s={family:Ut(i.family,t.family),lineHeight:t0(Ut(i.lineHeight,t.lineHeight),e),size:e,style:n,weight:Ut(i.weight,t.weight),string:""};return s.string=X_(s),s}function Vr(i,t,e,n){let s=!0,r,o,a;for(r=0,o=i.length;r<o;++r)if(a=i[r],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),s=!1),e!==void 0&&ae(a)&&(a=a[e%a.length],s=!1),a!==void 0))return n&&!s&&(n.cacheable=!1),a}function n0(i,t,e){const{min:n,max:s}=i,r=pp(t,(s-n)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(n,-Math.abs(r)),max:o(s,r)}}function ji(i,t){return Object.assign(Object.create(i),t)}function fh(i,t=[""],e,n,s=()=>i[0]){const r=e||i;typeof n>"u"&&(n=Pp("_fallback",i));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:r,_fallback:n,_getTarget:s,override:a=>fh([a,...i],t,r,n)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return Rp(a,l,()=>h0(l,t,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return du(a).includes(l)},ownKeys(a){return du(a)},set(a,l,c){const h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function gr(i,t,e,n){const s={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:wp(i,n),setContext:r=>gr(i,r,e,n),override:r=>gr(i.override(r),t,e,n)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete i[o],!0},get(r,o,a){return Rp(r,o,()=>s0(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(r,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(r,o,a){return i[o]=a,delete r[o],!0}})}function wp(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:n=t.indexable,_allKeys:s=t.allKeys}=i;return{allKeys:s,scriptable:e,indexable:n,isScriptable:Hi(e)?e:()=>e,isIndexable:Hi(n)?n:()=>n}}const i0=(i,t)=>i?i+ah(t):t,ph=(i,t)=>Xt(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Rp(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t))return i[t];const n=e();return i[t]=n,n}function s0(i,t,e){const{_proxy:n,_context:s,_subProxy:r,_descriptors:o}=i;let a=n[t];return Hi(a)&&o.isScriptable(t)&&(a=r0(t,a,i,e)),ae(a)&&a.length&&(a=o0(t,a,i,o.isIndexable)),ph(t,a)&&(a=gr(a,s,r&&r[t],o)),a}function r0(i,t,e,n){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=t(r,o||n);return a.delete(i),ph(i,l)&&(l=mh(s._scopes,s,i,l)),l}function o0(i,t,e,n){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&n(i))return t[r.index%t.length];if(Xt(t[0])){const l=t,c=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const u=mh(c,s,i,h);t.push(gr(u,r,o&&o[i],a))}}return t}function Cp(i,t,e){return Hi(i)?i(t,e):i}const a0=(i,t)=>i===!0?t:typeof i=="string"?zi(t,i):void 0;function l0(i,t,e,n,s){for(const r of t){const o=a0(e,r);if(o){i.add(o);const a=Cp(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==n)return a}else if(o===!1&&typeof n<"u"&&e!==n)return null}return!1}function mh(i,t,e,n){const s=t._rootScopes,r=Cp(t._fallback,e,n),o=[...i,...s],a=new Set;a.add(n);let l=uu(a,o,e,r||e,n);return l===null||typeof r<"u"&&r!==e&&(l=uu(a,o,r,l,n),l===null)?!1:fh(Array.from(a),[""],s,r,()=>c0(t,e,n))}function uu(i,t,e,n,s){for(;e;)e=l0(i,t,e,n,s);return e}function c0(i,t,e){const n=i._getTarget();t in n||(n[t]={});const s=n[t];return ae(s)&&Xt(e)?e:s||{}}function h0(i,t,e,n){let s;for(const r of t)if(s=Pp(i0(r,i),e),typeof s<"u")return ph(i,s)?mh(e,n,i,s):s}function Pp(i,t){for(const e of t){if(!e)continue;const n=e[i];if(typeof n<"u")return n}}function du(i){let t=i._keys;return t||(t=i._keys=u0(i._scopes)),t}function u0(i){const t=new Set;for(const e of i)for(const n of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(n);return Array.from(t)}function Lp(i,t,e,n){const{iScale:s}=i,{key:r="r"}=this._parsing,o=new Array(n);let a,l,c,h;for(a=0,l=n;a<l;++a)c=a+e,h=t[c],o[a]={r:s.parse(zi(h,r),c)};return o}const d0=Number.EPSILON||1e-14,_r=(i,t)=>t<i.length&&!i[t].skip&&i[t],Dp=i=>i==="x"?"y":"x";function f0(i,t,e,n){const s=i.skip?t:i,r=t,o=e.skip?t:e,a=vc(r,s),l=vc(o,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const u=n*c,d=n*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function p0(i,t,e){const n=i.length;let s,r,o,a,l,c=_r(i,0);for(let h=0;h<n-1;++h)if(l=c,c=_r(i,h+1),!(!l||!c)){if(Jr(t[h],0,d0)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function m0(i,t,e="x"){const n=Dp(e),s=i.length;let r,o,a,l=_r(i,0);for(let c=0;c<s;++c){if(o=a,a=l,l=_r(i,c+1),!a)continue;const h=a[e],u=a[n];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${n}`]=u-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${n}`]=u+r*t[c])}}function g0(i,t="x"){const e=Dp(t),n=i.length,s=Array(n).fill(0),r=Array(n);let o,a,l,c=_r(i,0);for(o=0;o<n;++o)if(a=l,l=c,c=_r(i,o+1),!!l){if(c){const h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?jn(s[o-1])!==jn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}p0(i,s,r),m0(i,r,t)}function Bo(i,t,e){return Math.max(Math.min(i,e),t)}function _0(i,t){let e,n,s,r,o,a=pi(i[0],t);for(e=0,n=i.length;e<n;++e)o=r,r=a,a=e<n-1&&pi(i[e+1],t),r&&(s=i[e],o&&(s.cp1x=Bo(s.cp1x,t.left,t.right),s.cp1y=Bo(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Bo(s.cp2x,t.left,t.right),s.cp2y=Bo(s.cp2y,t.top,t.bottom)))}function x0(i,t,e,n,s){let r,o,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")g0(i,s);else{let c=n?i[i.length-1]:i[0];for(r=0,o=i.length;r<o;++r)a=i[r],l=f0(c,a,i[Math.min(r+1,o-(n?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&_0(i,e)}function Op(){return typeof window<"u"&&typeof document<"u"}function gh(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ua(i,t,e){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*t.parentNode[e])):n=i,n}const ol=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function v0(i,t){return ol(i).getPropertyValue(t)}const b0=["top","right","bottom","left"];function _s(i,t,e){const n={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=b0[s];n[r]=parseFloat(i[t+"-"+r+e])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const M0=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function y0(i,t){const e=i.touches,n=e&&e.length?e[0]:i,{offsetX:s,offsetY:r}=n;let o=!1,a,l;if(M0(s,r,i.target))a=s,l=r;else{const c=t.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function as(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:n}=t,s=ol(e),r=s.boxSizing==="border-box",o=_s(s,"padding"),a=_s(s,"border","width"),{x:l,y:c,box:h}=y0(i,e),u=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:f,height:_}=t;return r&&(f-=o.width+a.width,_-=o.height+a.height),{x:Math.round((l-u)/f*e.width/n),y:Math.round((c-d)/_*e.height/n)}}function S0(i,t,e){let n,s;if(t===void 0||e===void 0){const r=gh(i);if(!r)t=i.clientWidth,e=i.clientHeight;else{const o=r.getBoundingClientRect(),a=ol(r),l=_s(a,"border","width"),c=_s(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,n=Ua(a.maxWidth,r,"clientWidth"),s=Ua(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:n||Oa,maxHeight:s||Oa}}const zo=i=>Math.round(i*10)/10;function E0(i,t,e,n){const s=ol(i),r=_s(s,"margin"),o=Ua(s.maxWidth,i,"clientWidth")||Oa,a=Ua(s.maxHeight,i,"clientHeight")||Oa,l=S0(i,t,e);let{width:c,height:h}=l;if(s.boxSizing==="content-box"){const d=_s(s,"border","width"),f=_s(s,"padding");c-=f.width+d.width,h-=f.height+d.height}return c=Math.max(0,c-r.width),h=Math.max(0,n?c/n:h-r.height),c=zo(Math.min(c,o,l.maxWidth)),h=zo(Math.min(h,a,l.maxHeight)),c&&!h&&(h=zo(c/2)),(t!==void 0||e!==void 0)&&n&&l.height&&h>l.height&&(h=l.height,c=zo(Math.floor(h*n))),{width:c,height:h}}function fu(i,t,e){const n=t||1,s=Math.floor(i.height*n),r=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const o=i.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==s||o.width!==r?(i.currentDevicePixelRatio=n,o.height=s,o.width=r,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const T0=function(){let i=!1;try{const t={get passive(){return i=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return i}();function pu(i,t){const e=v0(i,t),n=e&&e.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function ls(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function A0(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:n==="middle"?e<.5?i.y:t.y:n==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function w0(i,t,e,n){const s={x:i.cp2x,y:i.cp2y},r={x:t.cp1x,y:t.cp1y},o=ls(i,s,e),a=ls(s,r,e),l=ls(r,t,e),c=ls(o,a,e),h=ls(a,l,e);return ls(c,h,e)}const R0=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,n){return e-n},leftForLtr(e,n){return e-n}}},C0=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function ar(i,t,e){return i?R0(t,e):C0()}function Ip(i,t){let e,n;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,n=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=n)}function Up(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function Fp(i){return i==="angle"?{between:ho,compare:P_,normalize:pn}:{between:di,compare:(t,e)=>t-e,normalize:t=>t}}function mu({start:i,end:t,count:e,loop:n,style:s}){return{start:i%e,end:t%e,loop:n&&(t-i+1)%e===0,style:s}}function P0(i,t,e){const{property:n,start:s,end:r}=e,{between:o,normalize:a}=Fp(n),l=t.length;let{start:c,end:h,loop:u}=i,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&o(a(t[c%l][n]),s,r);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:i.style}}function Np(i,t,e){if(!e)return[i];const{property:n,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=Fp(n),{start:h,end:u,loop:d,style:f}=P0(i,t,e),_=[];let g=!1,p=null,m,v,x;const b=()=>l(s,x,m)&&a(s,x)!==0,S=()=>a(r,m)===0||l(r,x,m),E=()=>g||b(),y=()=>!g||S();for(let P=h,D=h;P<=u;++P)v=t[P%o],!v.skip&&(m=c(v[n]),m!==x&&(g=l(m,s,r),p===null&&E()&&(p=a(m,s)===0?P:D),p!==null&&y()&&(_.push(mu({start:p,end:P,loop:d,count:o,style:f})),p=null),D=P,x=m));return p!==null&&_.push(mu({start:p,end:u,loop:d,count:o,style:f})),_}function kp(i,t){const e=[],n=i.segments;for(let s=0;s<n.length;s++){const r=Np(n[s],i.points,t);r.length&&e.push(...r)}return e}function L0(i,t,e,n){let s=0,r=t-1;if(e&&!n)for(;s<t&&!i[s].skip;)s++;for(;s<t&&i[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&i[r%t].skip;)r--;return r%=t,{start:s,end:r}}function D0(i,t,e,n){const s=i.length,r=[];let o=t,a=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%s];c.skip||c.stop?a.skip||(n=!1,r.push({start:t%s,end:(l-1)%s,loop:n}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:n}),r}function O0(i,t){const e=i.points,n=i.options.spanGaps,s=e.length;if(!s)return[];const r=!!i._loop,{start:o,end:a}=L0(e,s,r,n);if(n===!0)return gu(i,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+s:a,c=!!i._fullLoop&&o===0&&a===s-1;return gu(i,D0(e,o,l,c),e,t)}function gu(i,t,e,n){return!n||!n.setContext||!e?t:I0(i,t,e,n)}function I0(i,t,e,n){const s=i._chart.getContext(),r=_u(i.options),{_datasetIndex:o,options:{spanGaps:a}}=i,l=e.length,c=[];let h=r,u=t[0].start,d=u;function f(_,g,p,m){const v=a?-1:1;if(_!==g){for(_+=l;e[_%l].skip;)_-=v;for(;e[g%l].skip;)g+=v;_%l!==g%l&&(c.push({start:_%l,end:g%l,loop:p,style:m}),h=m,u=g%l)}}for(const _ of t){u=a?u:_.start;let g=e[u%l],p;for(d=u+1;d<=_.end;d++){const m=e[d%l];p=_u(n.setContext(ji(s,{type:"segment",p0:g,p1:m,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),U0(p,h)&&f(u,d-1,_.loop,h),g=m,h=p}u<d-1&&f(u,d-1,_.loop,h)}return c}function _u(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function U0(i,t){if(!t)return!1;const e=[],n=function(s,r){return uh(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(i,n)!==JSON.stringify(t,n)}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class F0{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=bp.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;const r=n.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,n,t,"progress")),r.length||(n.running=!1,this._notify(s,n,t,"complete"),n.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let s=n.length-1;for(;s>=0;--s)n[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var si=new F0;const xu="transparent",N0={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const n=lu(i||xu),s=n.valid&&lu(t||xu);return s&&s.valid?s.mix(n,e).hexString():t},number(i,t,e){return i+(t-i)*e}};let k0=class{constructor(t,e,n,s){const r=e[n];s=Vr([t.to,s,r,t.from]);const o=Vr([t.from,r,s]);this._active=!0,this._fn=t.fn||N0[t.type||typeof o],this._easing=Qr[t.easing]||Qr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Vr([t.to,e,s,t.from]),this._from=Vr([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<n),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][e]()}};class Bp{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Xt(t))return;const e=Object.keys(ge.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!Xt(r))return;const o={};for(const a of e)o[a]=r[a];(ae(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!n.has(a))&&n.set(a,o)})})}_animateOptions(t,e){const n=e.options,s=z0(t,n);if(!s)return[];const r=this._createAnimations(s,n);return n.$shared&&B0(t.options.$animations,n).then(()=>{t.options=n},()=>{}),r}_createAnimations(t,e){const n=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[c];let u=r[c];const d=n.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}r[c]=u=new k0(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const n=this._createAnimations(t,e);if(n.length)return si.add(this._chart,n),!0}}function B0(i,t){const e=[],n=Object.keys(t);for(let s=0;s<n.length;s++){const r=i[n[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function z0(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function vu(i,t){const e=i&&i.options||{},n=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:n?r:s,end:n?s:r}}function H0(i,t,e){if(e===!1)return!1;const n=vu(i,e),s=vu(t,e);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function V0(i){let t,e,n,s;return Xt(i)?(t=i.top,e=i.right,n=i.bottom,s=i.left):t=e=n=s=i,{top:t,right:e,bottom:n,left:s,disabled:i===!1}}function zp(i,t){const e=[],n=i._getSortedDatasetMetas(t);let s,r;for(s=0,r=n.length;s<r;++s)e.push(n[s].index);return e}function bu(i,t,e,n={}){const s=i.keys,r=n.mode==="single";let o,a,l,c;if(t!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(n.all)continue;break}c=i.values[l],me(c)&&(r||t===0||jn(t)===jn(c))&&(t+=c)}return t}}function G0(i){const t=Object.keys(i),e=new Array(t.length);let n,s,r;for(n=0,s=t.length;n<s;++n)r=t[n],e[n]={x:r,y:i[r]};return e}function Mu(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function W0(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function X0(i){const{min:t,max:e,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function Y0(i,t,e){const n=i[t]||(i[t]={});return n[e]||(n[e]={})}function yu(i,t,e,n){for(const s of t.getMatchingVisibleMetas(n).reverse()){const r=i[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Su(i,t){const{chart:e,_cachedMeta:n}=i,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=n,l=r.axis,c=o.axis,h=W0(r,o,n),u=t.length;let d;for(let f=0;f<u;++f){const _=t[f],{[l]:g,[c]:p}=_,m=_._stacks||(_._stacks={});d=m[c]=Y0(s,h,g),d[a]=p,d._top=yu(d,o,!0,n.type),d._bottom=yu(d,o,!1,n.type);const v=d._visualValues||(d._visualValues={});v[a]=p}}function Sl(i,t){const e=i.scales;return Object.keys(e).filter(n=>e[n].axis===t).shift()}function j0(i,t){return ji(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function q0(i,t,e){return ji(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Pr(i,t){const e=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){t=t||i._parsed;for(const s of t){const r=s._stacks;if(!r||r[n]===void 0||r[n][e]===void 0)return;delete r[n][e],r[n]._visualValues!==void 0&&r[n]._visualValues[e]!==void 0&&delete r[n]._visualValues[e]}}}const El=i=>i==="reset"||i==="none",Eu=(i,t)=>t?i:Object.assign({},i),$0=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:zp(e,!0),values:null};class Un{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Mu(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Pr(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),s=(u,d,f,_)=>u==="x"?d:u==="r"?_:f,r=e.xAxisID=Ut(n.xAxisID,Sl(t,"x")),o=e.yAxisID=Ut(n.yAxisID,Sl(t,"y")),a=e.rAxisID=Ut(n.rAxisID,Sl(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ru(this._data,this),t._stacked&&Pr(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(Xt(e))this._data=G0(e);else if(n!==e){if(n){ru(n,this);const s=this._cachedMeta;Pr(s),s._parsed=[]}e&&Object.isExtensible(e)&&I_(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=Mu(e.vScale,e),e.stack!==n.stack&&(s=!0,Pr(e),e.stack=n.stack),this._resyncElements(t),(s||r!==e._stacked)&&Su(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:s}=this,{iScale:r,_stacked:o}=n,a=r.axis;let l=t===0&&e===s.length?!0:n._sorted,c=t>0&&n._parsed[t-1],h,u,d;if(this._parsing===!1)n._parsed=s,n._sorted=!0,d=s;else{ae(s[t])?d=this.parseArrayData(n,s,t,e):Xt(s[t])?d=this.parseObjectData(n,s,t,e):d=this.parsePrimitiveData(n,s,t,e);const f=()=>u[a]===null||c&&u[a]<c[a];for(h=0;h<e;++h)n._parsed[h+t]=u=d[h],l&&(f()&&(l=!1),c=u);n._sorted=l}o&&Su(this,d)}parsePrimitiveData(t,e,n,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,u=new Array(s);let d,f,_;for(d=0,f=s;d<f;++d)_=d+n,u[d]={[a]:h||r.parse(c[_],_),[l]:o.parse(e[_],_)};return u}parseArrayData(t,e,n,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,c,h,u;for(l=0,c=s;l<c;++l)h=l+n,u=e[h],a[l]={x:r.parse(u[0],h),y:o.parse(u[1],h)};return a}parseObjectData(t,e,n,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let h,u,d,f;for(h=0,u=s;h<u;++h)d=h+n,f=e[d],c[h]={x:r.parse(zi(f,a),d),y:o.parse(zi(f,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:zp(s,!0),values:e._stacks[t.axis]._visualValues};return bu(a,o,r.index,{mode:n})}updateRangeFromParsed(t,e,n,s){const r=n[e.axis];let o=r===null?NaN:r;const a=s&&n._stacks[e.axis];s&&a&&(s.values=a,o=bu(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const n=this._cachedMeta,s=n._parsed,r=n._sorted&&t===n.iScale,o=s.length,a=this._getOtherScale(t),l=$0(e,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=X0(a);let d,f;function _(){f=s[d];const g=f[a.axis];return!me(f[t.axis])||h>g||u<g}for(d=0;d<o&&!(!_()&&(this.updateRangeFromParsed(c,t,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!_()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],me(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:n?""+n.getLabelForValue(r[n.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=V0(Ut(this.options.clip,H0(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,s=n.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let h;for(n.dataset&&n.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const u=s[h];u.hidden||(u.active&&c?o.push(u):u.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const n=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=q0(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=j0(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=n,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&co(n);if(a)return Eu(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),h),f=Object.keys(ge.elements[t]),_=()=>this.getContext(n,s,e),g=c.resolveNamedOptions(d,f,_,u);return g.$shared&&(g.$shared=l,r[o]=Object.freeze(Eu(g,l))),g}_resolveAnimations(t,e,n){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,u=h.datasetAnimationScopeKeys(this._type,e),d=h.getOptionScopes(this.getDataset(),u);l=h.createResolver(d,this.getContext(t,n,e))}const c=new Bp(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||El(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const n=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(n),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,n),{sharedOptions:r,includeOptions:o}}updateElement(t,e,n,s){El(s)?Object.assign(t,n):this._resolveAnimations(e,s).update(t,n)}updateSharedOptions(t,e,n){t&&!El(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,n,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=n.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,n=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=o;a--)c[a]=c[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),n&&this.updateElements(r,t,e,"reset")}updateElements(t,e,n,s){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const s=n._parsed.splice(t,e);n._stacked&&Pr(n,s)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,s]=t;this[e](n,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ot(Un,"defaults",{}),ot(Un,"datasetElementType",null),ot(Un,"dataElementType",null);function K0(i,t){if(!i._cache.$bar){const e=i.getMatchingVisibleMetas(t);let n=[];for(let s=0,r=e.length;s<r;s++)n=n.concat(e[s].controller.getAllParsedValues(i));i._cache.$bar=vp(n.sort((s,r)=>s-r))}return i._cache.$bar}function Z0(i){const t=i.iScale,e=K0(t,i.type);let n=t._length,s,r,o,a;const l=()=>{o===32767||o===-32768||(co(a)&&(n=Math.min(n,Math.abs(o-a)||n)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),l();return n}function J0(i,t,e,n){const s=e.barThickness;let r,o;return qt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*n,o=1),{chunk:r/n,ratio:o,start:t.pixels[i]-r/2}}function Q0(i,t,e,n){const s=t.pixels,r=s[i];let o=i>0?s[i-1]:null,a=i<s.length-1?s[i+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const c=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/n,ratio:e.barPercentage,start:c}}function tx(i,t,e,n){const s=e.parse(i[0],n),r=e.parse(i[1],n),o=Math.min(s,r),a=Math.max(s,r);let l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:s,end:r,min:o,max:a}}function Hp(i,t,e,n){return ae(i)?tx(i,t,e,n):t[e.axis]=e.parse(i,n),t}function Tu(i,t,e,n){const s=i.iScale,r=i.vScale,o=s.getLabels(),a=s===r,l=[];let c,h,u,d;for(c=e,h=e+n;c<h;++c)d=t[c],u={},u[s.axis]=a||s.parse(o[c],c),l.push(Hp(d,u,r,c));return l}function Tl(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function ex(i,t,e){return i!==0?jn(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function nx(i){let t,e,n,s,r;return i.horizontal?(t=i.base>i.x,e="left",n="right"):(t=i.base<i.y,e="bottom",n="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:n,reverse:t,top:s,bottom:r}}function ix(i,t,e,n){let s=t.borderSkipped;const r={};if(!s){i.borderSkipped=r;return}if(s===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:c,bottom:h}=nx(i);s==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===n?s=c:(e._bottom||0)===n?s=h:(r[Au(h,o,a,l)]=!0,s=c)),r[Au(s,o,a,l)]=!0,i.borderSkipped=r}function Au(i,t,e,n){return n?(i=sx(i,t,e),i=wu(i,e,t)):i=wu(i,t,e),i}function sx(i,t,e){return i===t?e:i===e?t:i}function wu(i,t,e){return i==="start"?t:i==="end"?e:i}function rx(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}class xa extends Un{parsePrimitiveData(t,e,n,s){return Tu(t,e,n,s)}parseArrayData(t,e,n,s){return Tu(t,e,n,s)}parseObjectData(t,e,n,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=r.axis==="x"?a:l,h=o.axis==="x"?a:l,u=[];let d,f,_,g;for(d=n,f=n+s;d<f;++d)g=e[d],_={},_[r.axis]=r.parse(zi(g,c),d),u.push(Hp(zi(g,h),_,o,d));return u}updateRangeFromParsed(t,e,n,s){super.updateRangeFromParsed(t,e,n,s);const r=n._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:n,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=Tl(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+n.getLabelForValue(r[n.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,n,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(e,s);for(let f=e;f<e+n;f++){const _=this.getParsed(f),g=r||qt(_[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,h),m=(_._stacks||{})[a.axis],v={horizontal:c,base:g.base,enableBorderRadius:!m||Tl(_._custom)||o===m._top||o===m._bottom,x:c?g.head:p.center,y:c?p.center:g.head,height:c?p.size:Math.abs(g.size),width:c?Math.abs(g.size):p.size};d&&(v.options=u||this.resolveDataElementOptions(f,t[f].active?"active":s));const x=v.options||t[f].options;ix(v,x,m,o),rx(v,x,h.ratio),this.updateElement(t[f],f,v,s)}}_getStacks(t,e){const{iScale:n}=this._cachedMeta,s=n.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),r=n.options.stacked,o=[],a=l=>{const c=l.controller.getParsed(e),h=c&&c[l.vScale.axis];if(qt(h)||isNaN(h))return!0};for(const l of s)if(!(e!==void 0&&a(l))&&((r===!1||o.indexOf(l.stack)===-1||r===void 0&&l.stack===void 0)&&o.push(l.stack),l.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,n){const s=this._getStacks(t,n),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,n=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(n.getPixelForValue(this.getParsed(r)[n.axis],r));const a=t.barThickness;return{min:a||Z0(e),pixels:s,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:n,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),c=l._custom,h=Tl(c);let u=l[e.axis],d=0,f=n?this.applyStack(e,l,n):u,_,g;f!==u&&(d=f-u,f=u),h&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&jn(u)!==jn(c.barEnd)&&(d=0),d+=u);const p=!qt(r)&&!h?r:d;let m=e.getPixelForValue(p);if(this.chart.getDataVisibility(t)?_=e.getPixelForValue(d+f):_=m,g=_-m,Math.abs(g)<o){g=ex(g,e,a)*o,u===a&&(m-=g/2);const v=e.getPixelForDecimal(0),x=e.getPixelForDecimal(1),b=Math.min(v,x),S=Math.max(v,x);m=Math.max(Math.min(m,S),b),_=m+g,n&&!h&&(l._stacks[e.axis]._visualValues[s]=e.getValueForPixel(_)-e.getValueForPixel(m))}if(m===e.getPixelForValue(a)){const v=jn(g)*e.getLineWidthForValue(a)/2;m+=v,g-=v}return{size:g,base:m,head:_,center:_+g/2}}_calculateBarIndexPixels(t,e){const n=e.scale,s=this.options,r=s.skipNull,o=Ut(s.maxBarThickness,1/0);let a,l;if(e.grouped){const c=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?Q0(t,e,s,c):J0(t,e,s,c),u=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0);a=h.start+h.chunk*u+h.chunk/2,l=Math.min(o,h.chunk*h.ratio)}else a=n.getPixelForValue(this.getParsed(t)[n.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,n=t.data,s=n.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&n[r].draw(this._ctx)}}ot(xa,"id","bar"),ot(xa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),ot(xa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class va extends Un{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,n,s){const r=super.parsePrimitiveData(t,e,n,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+n).radius;return r}parseArrayData(t,e,n,s){const r=super.parseArrayData(t,e,n,s);for(let o=0;o<r.length;o++){const a=e[n+o];r[o]._custom=Ut(a[2],this.resolveDataElementOptions(o+n).radius)}return r}parseObjectData(t,e,n,s){const r=super.parseObjectData(t,e,n,s);for(let o=0;o<r.length;o++){const a=e[n+o];r[o]._custom=Ut(a&&a.r&&+a.r,this.resolveDataElementOptions(o+n).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y),c=o._custom;return{label:n[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,n,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,s),h=o.axis,u=a.axis;for(let d=e;d<e+n;d++){const f=t[d],_=!r&&this.getParsed(d),g={},p=g[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(_[h]),m=g[u]=r?a.getBasePixel():a.getPixelForValue(_[u]);g.skip=isNaN(p)||isNaN(m),c&&(g.options=l||this.resolveDataElementOptions(d,f.active?"active":s),r&&(g.options.radius=0)),this.updateElement(f,d,g,s)}}resolveDataElementOptions(t,e){const n=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Ut(n&&n._custom,r),s}}ot(va,"id","bubble"),ot(va,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),ot(va,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function ox(i,t,e){let n=1,s=1,r=0,o=0;if(t<le){const a=i,l=a+t,c=Math.cos(a),h=Math.sin(a),u=Math.cos(l),d=Math.sin(l),f=(x,b,S)=>ho(x,a,l,!0)?1:Math.max(b,b*e,S,S*e),_=(x,b,S)=>ho(x,a,l,!0)?-1:Math.min(b,b*e,S,S*e),g=f(0,c,u),p=f(Me,h,d),m=_(ce,c,u),v=_(ce+Me,h,d);n=(g-m)/2,s=(p-v)/2,r=-(g+m)/2,o=-(p+v)/2}return{ratioX:n,ratioY:s,offsetX:r,offsetY:o}}class fs extends Un{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const n=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=n;else{let r=l=>+n[l];if(Xt(n[t])){const{key:l="value"}=this._parsing;r=c=>+zi(n[c],l)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return In(this.options.rotation-90)}_getCircumference(){return In(this.options.circumference)}_getRotationExtents(){let t=le,e=-le;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const s=this.chart.getDatasetMeta(n).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:n}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(n.width,n.height)-o)/2,0),l=Math.min(b_(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:u}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:_,offsetY:g}=ox(u,h,l),p=(n.width-o)/d,m=(n.height-o)/f,v=Math.max(Math.min(p,m)/2,0),x=pp(this.options.radius,v),b=Math.max(x*l,0),S=(x-b)/this._getVisibleDatasetWeightTotal();this.offsetX=_*x,this.offsetY=g*x,s.total=this.calculateTotal(),this.outerRadius=x-S*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-S*c,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const n=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/le)}updateElements(t,e,n,s){const r=s==="reset",o=this.chart,a=o.chartArea,c=o.options.animation,h=(a.left+a.right)/2,u=(a.top+a.bottom)/2,d=r&&c.animateScale,f=d?0:this.innerRadius,_=d?0:this.outerRadius,{sharedOptions:g,includeOptions:p}=this._getSharedOptions(e,s);let m=this._getRotation(),v;for(v=0;v<e;++v)m+=this._circumference(v,r);for(v=e;v<e+n;++v){const x=this._circumference(v,r),b=t[v],S={x:h+this.offsetX,y:u+this.offsetY,startAngle:m,endAngle:m+x,circumference:x,outerRadius:_,innerRadius:f};p&&(S.options=g||this.resolveDataElementOptions(v,b.active?"active":s)),m+=x,this.updateElement(b,v,S,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let n=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(n+=Math.abs(r))}return n}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?le*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,s=n.data.labels||[],r=Ao(e._parsed[t],n.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const n=this.chart;let s,r,o,a,l;if(!t){for(s=0,r=n.data.datasets.length;s<r;++s)if(n.isDatasetVisible(s)){o=n.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)l=a.resolveDataElementOptions(s),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let n=0,s=t.length;n<s;++n){const r=this.resolveDataElementOptions(n);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(Ut(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}ot(fs,"id","doughnut"),ot(fs,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),ot(fs,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),ot(fs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:s,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}}});class ba extends Un{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=yp(e,s,o);this._drawStart=a,this._drawCount=l,Sp(e)&&(a=0,l=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,n,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=o.axis,f=a.axis,{spanGaps:_,segment:g}=this.options,p=mr(_)?_:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||s==="none",v=e+n,x=t.length;let b=e>0&&this.getParsed(e-1);for(let S=0;S<x;++S){const E=t[S],y=m?E:{};if(S<e||S>=v){y.skip=!0;continue}const P=this.getParsed(S),D=qt(P[f]),M=y[d]=o.getPixelForValue(P[d],S),A=y[f]=r||D?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,P,l):P[f],S);y.skip=isNaN(M)||isNaN(A)||D,y.stop=S>0&&Math.abs(P[d]-b[d])>p,g&&(y.parsed=P,y.raw=c.data[S]),u&&(y.options=h||this.resolveDataElementOptions(S,E.active?"active":s)),m||this.updateElement(E,S,y,s),b=P}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return n;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}ot(ba,"id","line"),ot(ba,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ot(ba,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class eo extends Un{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,s=n.data.labels||[],r=Ao(e._parsed[t].r,n.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,n,s){return Lp.bind(this)(t,e,n,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((n,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,n=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(n.cutoutPercentage?r/100*n.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,n,s){const r=s==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,u=c.yCenter,d=c.getIndexAngle(0)-.5*ce;let f=d,_;const g=360/this.countVisibleElements();for(_=0;_<e;++_)f+=this._computeAngle(_,s,g);for(_=e;_<e+n;_++){const p=t[_];let m=f,v=f+this._computeAngle(_,s,g),x=o.getDataVisibility(_)?c.getDistanceFromCenterForValue(this.getParsed(_).r):0;f=v,r&&(l.animateScale&&(x=0),l.animateRotate&&(m=v=d));const b={x:h,y:u,innerRadius:0,outerRadius:x,startAngle:m,endAngle:v,options:this.resolveDataElementOptions(_,p.active?"active":s)};this.updateElement(p,_,b,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((n,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?In(this.resolveDataElementOptions(t,e).angle||n):0}}ot(eo,"id","polarArea"),ot(eo,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),ot(eo,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:s,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class yc extends fs{}ot(yc,"id","pie"),ot(yc,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ma extends Un{getLabelAndValue(t){const e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,s){return Lp.bind(this)(t,e,n,s)}update(t){const e=this._cachedMeta,n=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(n.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(n,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,n,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+n;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":s),h=r.getPointPositionForValue(a,this.getParsed(a).r),u=o?r.xCenter:h.x,d=o?r.yCenter:h.y,f={x:u,y:d,angle:h.angle,skip:isNaN(u)||isNaN(d),options:c};this.updateElement(l,a,f,s)}}}ot(Ma,"id","radar"),ot(Ma,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),ot(Ma,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ya extends Un{getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:n[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:n=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=yp(e,n,s);if(this._drawStart=r,this._drawCount=o,Sp(e)&&(r=0,o=n.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=n;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(n,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,n,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),u=this.getSharedOptions(h),d=this.includeOptions(s,u),f=o.axis,_=a.axis,{spanGaps:g,segment:p}=this.options,m=mr(g)?g:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||r||s==="none";let x=e>0&&this.getParsed(e-1);for(let b=e;b<e+n;++b){const S=t[b],E=this.getParsed(b),y=v?S:{},P=qt(E[_]),D=y[f]=o.getPixelForValue(E[f],b),M=y[_]=r||P?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,E,l):E[_],b);y.skip=isNaN(D)||isNaN(M)||P,y.stop=b>0&&Math.abs(E[f]-x[f])>m,p&&(y.parsed=E,y.raw=c.data[b]),d&&(y.options=u||this.resolveDataElementOptions(b,S.active?"active":s)),v||this.updateElement(S,b,y,s),x=E}this.updateSharedOptions(u,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const n=t.dataset,s=n.options&&n.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}ot(ya,"id","scatter"),ot(ya,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),ot(ya,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var ax=Object.freeze({__proto__:null,BarController:xa,BubbleController:va,DoughnutController:fs,LineController:ba,PieController:yc,PolarAreaController:eo,RadarController:Ma,ScatterController:ya});function Qi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class _h{constructor(t){ot(this,"options");this.options=t||{}}static override(t){Object.assign(_h.prototype,t)}init(){}formats(){return Qi()}parse(){return Qi()}format(){return Qi()}add(){return Qi()}diff(){return Qi()}startOf(){return Qi()}endOf(){return Qi()}}var lx={_date:_h};function cx(i,t,e,n){const{controller:s,data:r,_sorted:o}=i,a=s._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?D_:fi;if(n){if(s._sharedOptions){const c=r[0],h=typeof c.getRange=="function"&&c.getRange(t);if(h){const u=l(r,t,e-h),d=l(r,t,e+h);return{lo:u.lo,hi:d.hi}}}}else return l(r,t,e)}return{lo:0,hi:r.length-1}}function wo(i,t,e,n,s){const r=i.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:u,hi:d}=cx(r[a],t,o,s);for(let f=u;f<=d;++f){const _=h[f];_.skip||n(_,c,f)}}}function hx(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(n,s){const r=t?Math.abs(n.x-s.x):0,o=e?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Al(i,t,e,n,s){const r=[];return!s&&!i.isPointInArea(t)||wo(i,e,t,function(a,l,c){!s&&!pi(a,i.chartArea,0)||a.inRange(t.x,t.y,n)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function ux(i,t,e,n){let s=[];function r(o,a,l){const{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],n),{angle:u}=_p(o,{x:t.x,y:t.y});ho(u,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return wo(i,e,t,r),s}function dx(i,t,e,n,s,r){let o=[];const a=hx(e);let l=Number.POSITIVE_INFINITY;function c(h,u,d){const f=h.inRange(t.x,t.y,s);if(n&&!f)return;const _=h.getCenterPoint(s);if(!(!!r||i.isPointInArea(_))&&!f)return;const p=a(t,_);p<l?(o=[{element:h,datasetIndex:u,index:d}],l=p):p===l&&o.push({element:h,datasetIndex:u,index:d})}return wo(i,e,t,c),o}function wl(i,t,e,n,s,r){return!r&&!i.isPointInArea(t)?[]:e==="r"&&!n?ux(i,t,e,s):dx(i,t,e,n,s,r)}function Ru(i,t,e,n,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return wo(i,e,t,(l,c,h)=>{l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),n&&!a?[]:r}var fx={evaluateInteractionItems:wo,modes:{index(i,t,e,n){const s=as(t,i),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Al(i,s,r,n,o):wl(i,s,r,!1,n,o),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,n){const s=as(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Al(i,s,r,n,o):wl(i,s,r,!1,n,o);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,n){const s=as(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return Al(i,s,r,n,o)},nearest(i,t,e,n){const s=as(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return wl(i,s,r,e.intersect,n,o)},x(i,t,e,n){const s=as(t,i);return Ru(i,s,"x",e.intersect,n)},y(i,t,e,n){const s=as(t,i);return Ru(i,s,"y",e.intersect,n)}}};const Vp=["left","top","right","bottom"];function Lr(i,t){return i.filter(e=>e.pos===t)}function Cu(i,t){return i.filter(e=>Vp.indexOf(e.pos)===-1&&e.box.axis===t)}function Dr(i,t){return i.sort((e,n)=>{const s=t?n:e,r=t?e:n;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function px(i){const t=[];let e,n,s,r,o,a;for(e=0,n=(i||[]).length;e<n;++e)s=i[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function mx(i){const t={};for(const e of i){const{stack:n,pos:s,stackWeight:r}=e;if(!n||!Vp.includes(s))continue;const o=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function gx(i,t){const e=mx(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=i.length;r<o;++r){a=i[r];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*n:l&&t.availableWidth,a.height=s):(a.width=n,a.height=h?h*s:l&&t.availableHeight)}return e}function _x(i){const t=px(i),e=Dr(t.filter(c=>c.box.fullSize),!0),n=Dr(Lr(t,"left"),!0),s=Dr(Lr(t,"right")),r=Dr(Lr(t,"top"),!0),o=Dr(Lr(t,"bottom")),a=Cu(t,"x"),l=Cu(t,"y");return{fullSize:e,leftAndTop:n.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Lr(t,"chartArea"),vertical:n.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function Pu(i,t,e,n){return Math.max(i[e],t[e])+Math.max(i[n],t[n])}function Gp(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function xx(i,t,e,n){const{pos:s,box:r}=e,o=i.maxPadding;if(!Xt(s)){e.size&&(i[s]-=e.size);const u=n[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?r.height:r.width),e.size=u.size/u.count,i[s]+=e.size}r.getPadding&&Gp(o,r.getPadding());const a=Math.max(0,t.outerWidth-Pu(o,i,"left","right")),l=Math.max(0,t.outerHeight-Pu(o,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function vx(i){const t=i.maxPadding;function e(n){const s=Math.max(t[n]-i[n],0);return i[n]+=s,s}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function bx(i,t){const e=t.maxPadding;function n(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return n(i?["left","right"]:["top","bottom"])}function Gr(i,t,e,n){const s=[];let r,o,a,l,c,h;for(r=0,o=i.length,c=0;r<o;++r){a=i[r],l=a.box,l.update(a.width||t.w,a.height||t.h,bx(a.horizontal,t));const{same:u,other:d}=xx(t,e,a,n);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&Gr(s,t,e,n)||h}function Ho(i,t,e,n,s){i.top=e,i.left=t,i.right=t+n,i.bottom=e+s,i.width=n,i.height=s}function Lu(i,t,e,n){const s=e.padding;let{x:r,y:o}=t;for(const a of i){const l=a.box,c=n[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const u=t.w*h,d=c.size||l.height;co(c.start)&&(o=c.start),l.fullSize?Ho(l,s.left,o,e.outerWidth-s.right-s.left,d):Ho(l,t.left+c.placed,o,u,d),c.start=o,c.placed+=u,o=l.bottom}else{const u=t.h*h,d=c.size||l.width;co(c.start)&&(r=c.start),l.fullSize?Ho(l,r,s.top,d,e.outerHeight-s.bottom-s.top):Ho(l,r,t.top+c.placed,d,u),c.start=r,c.placed+=u,r=l.right}}t.x=r,t.y=o}var Ge={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,n){if(!i)return;const s=Ye(i.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=_x(i.boxes),l=a.vertical,c=a.horizontal;Jt(i.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const h=l.reduce((g,p)=>p.box.options&&p.box.options.display===!1?g:g+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},s);Gp(d,Ye(n));const f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),_=gx(l.concat(c),u);Gr(a.fullSize,f,u,_),Gr(l,f,u,_),Gr(c,f,u,_)&&Gr(l,f,u,_),vx(f),Lu(a.leftAndTop,f,u,_),f.x+=f.w,f.y+=f.h,Lu(a.rightAndBottom,f,u,_),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Jt(a.chartArea,g=>{const p=g.box;Object.assign(p,i.chartArea),p.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Wp{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,s){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):n)}}isAttached(t){return!0}updateConfig(t){}}class Mx extends Wp{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Sa="$chartjs",yx={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Du=i=>i===null||i==="";function Sx(i,t){const e=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[Sa]={initial:{height:n,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Du(s)){const r=pu(i,"width");r!==void 0&&(i.width=r)}if(Du(n))if(i.style.height==="")i.height=i.width/(t||2);else{const r=pu(i,"height");r!==void 0&&(i.height=r)}return i}const Xp=T0?{passive:!0}:!1;function Ex(i,t,e){i.addEventListener(t,e,Xp)}function Tx(i,t,e){i.canvas.removeEventListener(t,e,Xp)}function Ax(i,t){const e=yx[i.type]||i.type,{x:n,y:s}=as(i,t);return{type:e,chart:t,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function Fa(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function wx(i,t,e){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fa(a.addedNodes,n),o=o&&!Fa(a.removedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function Rx(i,t,e){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fa(a.removedNodes,n),o=o&&!Fa(a.addedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const fo=new Map;let Ou=0;function Yp(){const i=window.devicePixelRatio;i!==Ou&&(Ou=i,fo.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function Cx(i,t){fo.size||window.addEventListener("resize",Yp),fo.set(i,t)}function Px(i){fo.delete(i),fo.size||window.removeEventListener("resize",Yp)}function Lx(i,t,e){const n=i.canvas,s=n&&gh(n);if(!s)return;const r=Mp((a,l)=>{const c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),Cx(i,r),o}function Rl(i,t,e){e&&e.disconnect(),t==="resize"&&Px(i)}function Dx(i,t,e){const n=i.canvas,s=Mp(r=>{i.ctx!==null&&e(Ax(r,i))},i);return Ex(n,t,s),s}class Ox extends Wp{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(Sx(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[Sa])return!1;const n=e[Sa].initial;["height","width"].forEach(r=>{const o=n[r];qt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=n.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[Sa],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:wx,detach:Rx,resize:Lx}[e]||Dx;s[e]=o(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),s=n[e];if(!s)return;({attach:Rl,detach:Rl,resize:Rl}[e]||Tx)(t,e,s),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,s){return E0(t,e,n,s)}isAttached(t){const e=gh(t);return!!(e&&e.isConnected)}}function Ix(i){return!Op()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Mx:Ox}class Fn{constructor(){ot(this,"x");ot(this,"y");ot(this,"active",!1);ot(this,"options");ot(this,"$animations")}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return mr(this.x)&&mr(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const s={};return t.forEach(r=>{s[r]=n[r]&&n[r].active()?n[r]._to:this[r]}),s}}ot(Fn,"defaults",{}),ot(Fn,"defaultRoutes");function Ux(i,t){const e=i.options.ticks,n=Fx(i),s=Math.min(e.maxTicksLimit||n,n),r=e.major.enabled?kx(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Bx(t,c,r,o/s),c;const h=Nx(r,t,s);if(o>0){let u,d;const f=o>1?Math.round((l-a)/(o-1)):null;for(Vo(t,c,h,qt(f)?0:a-f,a),u=0,d=o-1;u<d;u++)Vo(t,c,h,r[u],r[u+1]);return Vo(t,c,h,l,qt(f)?t.length:l+f),c}return Vo(t,c,h),c}function Fx(i){const t=i.options.offset,e=i._tickSize(),n=i._length/e+(t?0:1),s=i._maxLength/e;return Math.floor(Math.min(n,s))}function Nx(i,t,e){const n=zx(i),s=t.length/e;if(!n)return Math.max(s,1);const r=R_(n);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function kx(i){const t=[];let e,n;for(e=0,n=i.length;e<n;e++)i[e].major&&t.push(e);return t}function Bx(i,t,e,n){let s=0,r=e[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===r&&(t.push(i[o]),s++,r=e[s*n])}function Vo(i,t,e,n,s){const r=Ut(n,0),o=Math.min(Ut(s,i.length),i.length);let a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-n,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(i[c]),a++,h=Math.round(r+a*e))}function zx(i){const t=i.length;let e,n;if(t<2)return!1;for(n=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==n)return!1;return n}const Hx=i=>i==="left"?"right":i==="right"?"left":i,Iu=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,Uu=(i,t)=>Math.min(t||i,i);function Fu(i,t){const e=[],n=i.length/t,s=i.length;let r=0;for(;r<s;r+=n)e.push(i[Math.floor(r)]);return e}function Vx(i,t,e){const n=i.ticks.length,s=Math.min(t,n-1),r=i._startPixel,o=i._endPixel,a=1e-6;let l=i.getPixelForTick(s),c;if(!(e&&(n===1?c=Math.max(l-r,o-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function Gx(i,t){Jt(i,e=>{const n=e.gc,s=n.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[n[r]];n.splice(0,s)}})}function Or(i){return i.drawTicks?i.tickLength:0}function Nu(i,t){if(!i.display)return 0;const e=Te(i.font,t),n=Ye(i.padding);return(ae(i.text)?i.text.length:1)*e.lineHeight+n.height}function Wx(i,t){return ji(i,{scale:t,type:"scale"})}function Xx(i,t,e){return ji(i,{tick:e,index:t,type:"tick"})}function Yx(i,t,e){let n=hh(i);return(e&&t!=="right"||!e&&t==="right")&&(n=Hx(n)),n}function jx(i,t,e,n){const{top:s,left:r,bottom:o,right:a,chart:l}=i,{chartArea:c,scales:h}=l;let u=0,d,f,_;const g=o-s,p=a-r;if(i.isHorizontal()){if(f=ze(n,r,a),Xt(e)){const m=Object.keys(e)[0],v=e[m];_=h[m].getPixelForValue(v)+g-t}else e==="center"?_=(c.bottom+c.top)/2+g-t:_=Iu(i,e,t);d=a-r}else{if(Xt(e)){const m=Object.keys(e)[0],v=e[m];f=h[m].getPixelForValue(v)-p+t}else e==="center"?f=(c.left+c.right)/2-p+t:f=Iu(i,e,t);_=ze(n,o,s),u=e==="left"?-Me:Me}return{titleX:f,titleY:_,maxWidth:d,rotation:u}}class Ls extends Fn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:s}=this;return t=fn(t,Number.POSITIVE_INFINITY),e=fn(e,Number.NEGATIVE_INFINITY),n=fn(n,Number.POSITIVE_INFINITY),s=fn(s,Number.NEGATIVE_INFINITY),{min:fn(t,n),max:fn(e,s),minDefined:me(t),maxDefined:me(e)}}getMinMax(t){let{min:e,max:n,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:n};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(n=Math.max(n,o.max));return e=r&&e>n?n:e,n=s&&e>n?e:n,{min:fn(e,fn(n,e)),max:fn(n,fn(e,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ie(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=n0(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Fu(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Ux(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,n;this.isHorizontal()?(e=this.left,n=this.right):(e=this.top,n=this.bottom,t=!t),this._startPixel=e,this._endPixel=n,this._reversePixels=t,this._length=n-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ie(this.options.afterUpdate,[this])}beforeSetDimensions(){ie(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ie(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ie(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ie(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,s,r;for(n=0,s=t.length;n<s;n++)r=t[n],r.label=ie(e.callback,[r.value,n,t],this)}afterTickToLabelConversion(){ie(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ie(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=Uu(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||n<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=Le(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/n:f/(n-1),u+6>a&&(a=f/(n-(t.offset?.5:1)),l=this.maxHeight-Or(t.grid)-e.padding-Nu(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),o=lh(Math.min(Math.asin(Le((h.highest.height+6)/a,-1,1)),Math.asin(Le(l/c,-1,1))-Math.asin(Le(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ie(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ie(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Nu(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Or(r)+l):(t.height=this.maxHeight,t.width=Or(r)+l),n.display&&this.ticks.length){const{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=n.padding*2,_=In(this.labelRotation),g=Math.cos(_),p=Math.sin(_);if(a){const m=n.mirror?0:p*u.width+g*d.height;t.height=Math.min(this.maxHeight,t.height+m+f)}else{const m=n.mirror?0:g*u.width+p*d.height;t.width=Math.min(this.maxWidth,t.width+m+f)}this._calculatePadding(c,h,p,g)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*t.width,f=n*e.height):(d=n*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?d=t.width:r!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;r==="start"?(h=0,u=t.height):r==="end"&&(h=e.height,u=0),this.paddingTop=h+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ie(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,n;for(e=0,n=t.length;e<n;e++)qt(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=Fu(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/Uu(e,n));let c=0,h=0,u,d,f,_,g,p,m,v,x,b,S;for(u=0;u<e;u+=l){if(_=t[u].label,g=this._resolveTickFontOptions(u),s.font=p=g.string,m=r[p]=r[p]||{data:{},gc:[]},v=g.lineHeight,x=b=0,!qt(_)&&!ae(_))x=Ia(s,m.data,m.gc,x,_),b=v;else if(ae(_))for(d=0,f=_.length;d<f;++d)S=_[d],!qt(S)&&!ae(S)&&(x=Ia(s,m.data,m.gc,x,S),b+=v);o.push(x),a.push(b),c=Math.max(x,c),h=Math.max(b,h)}Gx(r,e);const E=o.indexOf(c),y=a.indexOf(h),P=D=>({width:o[D]||0,height:a[D]||0});return{first:P(0),last:P(e-1),widest:P(E),highest:P(y),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return L_(this._alignToPixels?Ji(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=Xx(this.getContext(),t,n))}return this.$context||(this.$context=Wx(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=In(this.labelRotation),n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),d=Or(r),f=[],_=a.setContext(this.getContext()),g=_.display?_.width:0,p=g/2,m=function(I){return Ji(n,I,g)};let v,x,b,S,E,y,P,D,M,A,F,X;if(o==="top")v=m(this.bottom),y=this.bottom-d,D=v-p,A=m(t.top)+p,X=t.bottom;else if(o==="bottom")v=m(this.top),A=t.top,X=m(t.bottom)-p,y=v+p,D=this.top+d;else if(o==="left")v=m(this.right),E=this.right-d,P=v-p,M=m(t.left)+p,F=t.right;else if(o==="right")v=m(this.left),M=t.left,F=m(t.right)-p,E=v+p,P=this.left+d;else if(e==="x"){if(o==="center")v=m((t.top+t.bottom)/2+.5);else if(Xt(o)){const I=Object.keys(o)[0],V=o[I];v=m(this.chart.scales[I].getPixelForValue(V))}A=t.top,X=t.bottom,y=v+p,D=y+d}else if(e==="y"){if(o==="center")v=m((t.left+t.right)/2);else if(Xt(o)){const I=Object.keys(o)[0],V=o[I];v=m(this.chart.scales[I].getPixelForValue(V))}E=v-p,P=E-d,M=t.left,F=t.right}const O=Ut(s.ticks.maxTicksLimit,u),U=Math.max(1,Math.ceil(u/O));for(x=0;x<u;x+=U){const I=this.getContext(x),V=r.setContext(I),Y=a.setContext(I),q=V.lineWidth,$=V.color,Z=Y.dash||[],st=Y.dashOffset,_t=V.tickWidth,H=V.tickColor,K=V.tickBorderDash||[],ht=V.tickBorderDashOffset;b=Vx(this,x,l),b!==void 0&&(S=Ji(n,b,q),c?E=P=M=F=S:y=D=A=X=S,f.push({tx1:E,ty1:y,tx2:P,ty2:D,x1:M,y1:A,x2:F,y2:X,width:q,color:$,borderDash:Z,borderDashOffset:st,tickWidth:_t,tickColor:H,tickBorderDash:K,tickBorderDashOffset:ht}))}return this._ticksLength=u,this._borderValue=v,f}_computeLabelItems(t){const e=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=r,d=Or(n.grid),f=d+h,_=u?-h:f,g=-In(this.labelRotation),p=[];let m,v,x,b,S,E,y,P,D,M,A,F,X="middle";if(s==="top")E=this.bottom-_,y=this._getXAxisLabelAlignment();else if(s==="bottom")E=this.top+_,y=this._getXAxisLabelAlignment();else if(s==="left"){const U=this._getYAxisLabelAlignment(d);y=U.textAlign,S=U.x}else if(s==="right"){const U=this._getYAxisLabelAlignment(d);y=U.textAlign,S=U.x}else if(e==="x"){if(s==="center")E=(t.top+t.bottom)/2+f;else if(Xt(s)){const U=Object.keys(s)[0],I=s[U];E=this.chart.scales[U].getPixelForValue(I)+f}y=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")S=(t.left+t.right)/2-f;else if(Xt(s)){const U=Object.keys(s)[0],I=s[U];S=this.chart.scales[U].getPixelForValue(I)}y=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?X="top":l==="end"&&(X="bottom"));const O=this._getLabelSizes();for(m=0,v=a.length;m<v;++m){x=a[m],b=x.label;const U=r.setContext(this.getContext(m));P=this.getPixelForTick(m)+r.labelOffset,D=this._resolveTickFontOptions(m),M=D.lineHeight,A=ae(b)?b.length:1;const I=A/2,V=U.color,Y=U.textStrokeColor,q=U.textStrokeWidth;let $=y;o?(S=P,y==="inner"&&(m===v-1?$=this.options.reverse?"left":"right":m===0?$=this.options.reverse?"right":"left":$="center"),s==="top"?c==="near"||g!==0?F=-A*M+M/2:c==="center"?F=-O.highest.height/2-I*M+M:F=-O.highest.height+M/2:c==="near"||g!==0?F=M/2:c==="center"?F=O.highest.height/2-I*M:F=O.highest.height-A*M,u&&(F*=-1),g!==0&&!U.showLabelBackdrop&&(S+=M/2*Math.sin(g))):(E=P,F=(1-A)*M/2);let Z;if(U.showLabelBackdrop){const st=Ye(U.backdropPadding),_t=O.heights[m],H=O.widths[m];let K=F-st.top,ht=0-st.left;switch(X){case"middle":K-=_t/2;break;case"bottom":K-=_t;break}switch(y){case"center":ht-=H/2;break;case"right":ht-=H;break}Z={left:ht,top:K,width:H+st.width,height:_t+st.height,color:U.backdropColor}}p.push({label:b,font:D,textOffset:F,options:{rotation:g,color:V,strokeColor:Y,strokeWidth:q,textAlign:$,textBaseline:X,translation:[S,E],backdrop:Z}})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-In(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,h;return e==="left"?s?(h=this.right+r,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,h)=>{!h.width||!h.color||(n.save(),n.lineWidth=h.width,n.strokeStyle=h.color,n.setLineDash(h.borderDash||[]),n.lineDashOffset=h.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:n,grid:s}}=this,r=n.setContext(this.getContext()),o=n.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,u,d;this.isHorizontal()?(c=Ji(t,this.left,o)-o/2,h=Ji(t,this.right,a)+a/2,u=d=l):(u=Ji(t,this.top,o)-o/2,d=Ji(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,s=this._computeLabelArea();s&&sl(n,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,c=o.label,h=o.textOffset;ws(n,c,0,h,l,a)}s&&rl(n)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:s}}=this;if(!n.display)return;const r=Te(n.font),o=Ye(n.padding),a=n.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||Xt(e)?(l+=o.bottom,ae(n.text)&&(l+=r.lineHeight*(n.text.length-1))):l+=o.top;const{titleX:c,titleY:h,maxWidth:u,rotation:d}=jx(this,l,e,a);ws(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:d,textAlign:Yx(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=Ut(t.grid&&t.grid.z,-1),s=Ut(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ls.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:n,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[n]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Te(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Go{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;Kx(e)&&(n=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,qx(t,o,n),this.override&&ge.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,s=this.scope;n in e&&delete e[n],s&&n in ge[s]&&(delete ge[s][n],this.override&&delete As[n])}}function qx(i,t,e){const n=lo(Object.create(null),[e?ge.get(e):{},ge.get(t),i.defaults]);ge.set(t,n),i.defaultRoutes&&$x(t,i.defaultRoutes),i.descriptors&&ge.describe(t,i.descriptors)}function $x(i,t){Object.keys(t).forEach(e=>{const n=e.split("."),s=n.pop(),r=[i].concat(n).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");ge.route(r,s,l,a)})}function Kx(i){return"id"in i&&"defaults"in i}class Zx{constructor(){this.controllers=new Go(Un,"datasets",!0),this.elements=new Go(Fn,"elements"),this.plugins=new Go(Object,"plugins"),this.scales=new Go(Ls,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach(s=>{const r=n||this._getRegistryForType(s);n||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):Jt(s,o=>{const a=n||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,n){const s=ah(t);ie(n["before"+s],[],n),e[t](n),ie(n["after"+s],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return s}}var kn=new Zx;class Jx{constructor(){this._init=[]}notify(t,e,n,s){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,n);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,n,s){s=s||{};for(const r of t){const o=r.plugin,a=o[n],l=[e,s,r.options];if(ie(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){qt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,s=Ut(n.options&&n.options.plugins,{}),r=Qx(n);return s===!1&&!e?[]:ev(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,n),t,"stop"),this._notify(s(n,e),t,"start")}}function Qx(i){const t={},e=[],n=Object.keys(kn.plugins.items);for(let r=0;r<n.length;r++)e.push(kn.getPlugin(n[r]));const s=i.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function tv(i,t){return!t&&i===!1?null:i===!0?{}:i}function ev(i,{plugins:t,localIds:e},n,s){const r=[],o=i.getContext();for(const a of t){const l=a.id,c=tv(n[l],s);c!==null&&r.push({plugin:a,options:nv(i.config,{plugin:a,local:e[l]},c,o)})}return r}function nv(i,{plugin:t,local:e},n,s){const r=i.pluginScopeKeys(t),o=i.getOptionScopes(n,r);return e&&t.defaults&&o.push(t.defaults),i.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Sc(i,t){const e=ge.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function iv(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function sv(i,t){return i===t?"_index_":"_value_"}function ku(i){if(i==="x"||i==="y"||i==="r")return i}function rv(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Ec(i,...t){if(ku(i))return i;for(const e of t){const n=e.axis||rv(e.position)||i.length>1&&ku(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Bu(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function ov(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(e.length)return Bu(i,"x",e[0])||Bu(i,"y",e[0])}return{}}function av(i,t){const e=As[i.type]||{scales:{}},n=t.scales||{},s=Sc(i.type,t),r=Object.create(null);return Object.keys(n).forEach(o=>{const a=n[o];if(!Xt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Ec(o,a,ov(o,i),ge.scales[a.type]),c=sv(l,s),h=e.scales||{};r[o]=Zr(Object.create(null),[{axis:l},a,h[l],h[c]])}),i.data.datasets.forEach(o=>{const a=o.type||i.type,l=o.indexAxis||Sc(a,t),h=(As[a]||{}).scales||{};Object.keys(h).forEach(u=>{const d=iv(u,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),Zr(r[f],[{axis:d},n[f],h[u]])})}),Object.keys(r).forEach(o=>{const a=r[o];Zr(a,[ge.scales[a.type],ge.scale])}),r}function jp(i){const t=i.options||(i.options={});t.plugins=Ut(t.plugins,{}),t.scales=av(i,t)}function qp(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function lv(i){return i=i||{},i.data=qp(i.data),jp(i),i}const zu=new Map,$p=new Set;function Wo(i,t){let e=zu.get(i);return e||(e=t(),zu.set(i,e),$p.add(e)),e}const Ir=(i,t,e)=>{const n=zi(t,e);n!==void 0&&i.add(n)};class cv{constructor(t){this._config=lv(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=qp(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),jp(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Wo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Wo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Wo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,n=this.type;return Wo(`${n}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const n=this._scopeCache;let s=n.get(t);return(!s||e)&&(s=new Map,n.set(t,s)),s}getOptionScopes(t,e,n){const{options:s,type:r}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>Ir(l,t,u))),h.forEach(u=>Ir(l,s,u)),h.forEach(u=>Ir(l,As[r]||{},u)),h.forEach(u=>Ir(l,ge,u)),h.forEach(u=>Ir(l,bc,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),$p.has(e)&&o.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,As[e]||{},ge.datasets[e]||{},{type:e},ge,bc]}resolveNamedOptions(t,e,n,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Hu(this._resolverCache,t,s);let l=o;if(uv(o,e)){r.$shared=!1,n=Hi(n)?n():n;const c=this.createResolver(t,n,a);l=gr(o,n,c)}for(const c of e)r[c]=l[c];return r}createResolver(t,e,n=[""],s){const{resolver:r}=Hu(this._resolverCache,t,n);return Xt(e)?gr(r,e,void 0,s):r}}function Hu(i,t,e){let n=i.get(t);n||(n=new Map,i.set(t,n));const s=e.join();let r=n.get(s);return r||(r={resolver:fh(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,r)),r}const hv=i=>Xt(i)&&Object.getOwnPropertyNames(i).reduce((t,e)=>t||Hi(i[e]),!1);function uv(i,t){const{isScriptable:e,isIndexable:n}=wp(i);for(const s of t){const r=e(s),o=n(s),a=(o||r)&&i[s];if(r&&(Hi(a)||hv(a))||o&&ae(a))return!0}return!1}var dv="4.4.0";const fv=["top","bottom","left","right","chartArea"];function Vu(i,t){return i==="top"||i==="bottom"||fv.indexOf(i)===-1&&t==="x"}function Gu(i,t){return function(e,n){return e[i]===n[i]?e[t]-n[t]:e[i]-n[i]}}function Wu(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ie(e&&e.onComplete,[i],t)}function pv(i){const t=i.chart,e=t.options.animation;ie(e&&e.onProgress,[i],t)}function Kp(i){return Op()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Ea={},Xu=i=>{const t=Kp(i);return Object.values(Ea).filter(e=>e.canvas===t).pop()};function mv(i,t,e){const n=Object.keys(i);for(const s of n){const r=+s;if(r>=t){const o=i[s];delete i[s],(e>0||r>t)&&(i[r+e]=o)}}}function gv(i,t,e,n){return!e||i.type==="mouseout"?null:n?t:i}function Xo(i,t,e){return i.options.clip?i[e]:t[e]}function _v(i,t){const{xScale:e,yScale:n}=i;return e&&n?{left:Xo(e,t,"left"),right:Xo(e,t,"right"),top:Xo(n,t,"top"),bottom:Xo(n,t,"bottom")}:t}class ci{static register(...t){kn.add(...t),Yu()}static unregister(...t){kn.remove(...t),Yu()}constructor(t,e){const n=this.config=new cv(e),s=Kp(t),r=Xu(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Ix(s)),this.platform.updateConfig(n);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=v_(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Jx,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=U_(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],Ea[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}si.listen(this,"complete",Wu),si.listen(this,"progress",pv),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:s,_aspectRatio:r}=this;return qt(t)?e&&r?r:s?n/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return kn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():fu(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return hu(this.canvas,this.ctx),this}stop(){return si.stop(this),this}resize(t,e){si.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,s=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,fu(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ie(n.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};Jt(e,(n,s)=>{n.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,s=Object.keys(n).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Ec(o,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),Jt(r,o=>{const a=o.options,l=a.id,c=Ec(l,a),h=Ut(a.type,o.dtype);(a.position===void 0||Vu(a.position,c)!==Vu(o.dposition))&&(a.position=o.dposition),s[l]=!0;let u=null;if(l in n&&n[l].type===h)u=n[l];else{const d=kn.getScale(h);u=new d({id:l,type:h,ctx:this.ctx,chart:this}),n[u.id]=u}u.init(a,t)}),Jt(s,(o,a)=>{o||delete n[a]}),Jt(n,o=>{Ge.configure(this,o,o.options),Ge.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort((s,r)=>s.index-r.index),n>e){for(let s=e;s<n;++s)this._destroyDatasetMeta(s);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(Gu("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((n,s)=>{e.filter(r=>r===n._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,s;for(this._removeUnreferencedMetasets(),n=0,s=e.length;n<s;n++){const r=e[n];let o=this.getDatasetMeta(n);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=a,o.indexAxis=r.indexAxis||Sc(a,this.options),o.order=r.order||0,o.index=n,o.label=""+r.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const l=kn.getController(a),{datasetElementType:c,dataElementType:h}=ge.datasets[a];Object.assign(l,{dataElementType:kn.getElement(h),datasetElementType:c&&kn.getElement(c)}),o.controller=new l(this,n),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Jt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:u}=this.getDatasetMeta(c),d=!s&&r.indexOf(u)===-1;u.buildOrUpdateElements(d),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),s||Jt(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Gu("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Jt(this.scales,t=>{Ge.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!eu(e,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:s,count:r}of e){const o=n==="_removeElements"?-r:r;mv(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=n(0);for(let r=1;r<e;r++)if(!eu(s,n(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ge.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],Jt(this.boxes,s=>{n&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,n=this.data.datasets.length;e<n;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,Hi(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),s={meta:n,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(n.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(si.has(this)?this.attached&&!si.running(this)&&si.start(this):(this.draw(),Wu({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:s}=this._resizeBeforeDraw;this._resize(n,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n=t._clip,s=!n.disabled,r=_v(t,this.chartArea),o={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&sl(e,{left:n.left===!1?0:r.left-n.left,right:n.right===!1?this.width:r.right+n.right,top:n.top===!1?0:r.top-n.top,bottom:n.bottom===!1?this.height:r.bottom+n.bottom}),t.controller.draw(),s&&rl(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return pi(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,s){const r=fx.modes[e];return typeof r=="function"?r(this,t,n,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let s=n.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(s)),s}getContext(){return this.$context||(this.$context=ji(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const s=n?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);co(e)?(r.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(r,{visible:n}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),si.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),hu(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ea[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Jt(this.options.events,r=>n(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),n("resize",r),n("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),n("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Jt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},Jt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const s=n?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!La(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,n){const s=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(u=>h.datasetIndex===u.datasetIndex&&h.index===u.index)),o=r(e,t),a=n?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,s)===!1)return;const r=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,s),(r||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,n,o),l=T_(t),c=gv(t,this._lastEvent,n,l);n&&(this._lastEvent=null,ie(r.onHover,[t,a,this],this),l&&ie(r.onClick,[t,a,this],this));const h=!La(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,n,s){if(t.type==="mouseout")return[];if(!n)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}ot(ci,"defaults",ge),ot(ci,"instances",Ea),ot(ci,"overrides",As),ot(ci,"registry",kn),ot(ci,"version",dv),ot(ci,"getChart",Xu);function Yu(){return Jt(ci.instances,i=>i._plugins.invalidate())}function xv(i,t,e){const{startAngle:n,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:l}=t;let c=s/a;i.beginPath(),i.arc(r,o,a,n-c,e+c),l>s?(c=s/l,i.arc(r,o,l,e+c,n-c,!0)):i.arc(r,o,s,e+Me,n-Me),i.closePath(),i.clip()}function vv(i){return dh(i,["outerStart","outerEnd","innerStart","innerEnd"])}function bv(i,t,e,n){const s=vv(i.options.borderRadius),r=(e-t)/2,o=Math.min(r,n*t/2),a=l=>{const c=(e-Math.min(r,l))*n/2;return Le(l,0,Math.min(r,c))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Le(s.innerStart,0,o),innerEnd:Le(s.innerEnd,0,o)}}function Fs(i,t,e,n){return{x:e+i*Math.cos(t),y:n+i*Math.sin(t)}}function Na(i,t,e,n,s,r){const{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,u=Math.max(t.outerRadius+n+e-c,0),d=h>0?h+n+e+c:0;let f=0;const _=s-l;if(n){const U=h>0?h-n:0,I=u>0?u-n:0,V=(U+I)/2,Y=V!==0?_*V/(V+n):_;f=(_-Y)/2}const g=Math.max(.001,_*u-e/ce)/u,p=(_-g)/2,m=l+p+f,v=s-p-f,{outerStart:x,outerEnd:b,innerStart:S,innerEnd:E}=bv(t,d,u,v-m),y=u-x,P=u-b,D=m+x/y,M=v-b/P,A=d+S,F=d+E,X=m+S/A,O=v-E/F;if(i.beginPath(),r){const U=(D+M)/2;if(i.arc(o,a,u,D,U),i.arc(o,a,u,U,M),b>0){const q=Fs(P,M,o,a);i.arc(q.x,q.y,b,M,v+Me)}const I=Fs(F,v,o,a);if(i.lineTo(I.x,I.y),E>0){const q=Fs(F,O,o,a);i.arc(q.x,q.y,E,v+Me,O+Math.PI)}const V=(v-E/d+(m+S/d))/2;if(i.arc(o,a,d,v-E/d,V,!0),i.arc(o,a,d,V,m+S/d,!0),S>0){const q=Fs(A,X,o,a);i.arc(q.x,q.y,S,X+Math.PI,m-Me)}const Y=Fs(y,m,o,a);if(i.lineTo(Y.x,Y.y),x>0){const q=Fs(y,D,o,a);i.arc(q.x,q.y,x,m-Me,D)}}else{i.moveTo(o,a);const U=Math.cos(D)*u+o,I=Math.sin(D)*u+a;i.lineTo(U,I);const V=Math.cos(M)*u+o,Y=Math.sin(M)*u+a;i.lineTo(V,Y)}i.closePath()}function Mv(i,t,e,n,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){Na(i,t,e,n,l,s);for(let c=0;c<r;++c)i.fill();isNaN(a)||(l=o+(a%le||le))}return Na(i,t,e,n,l,s),i.fill(),l}function yv(i,t,e,n,s){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:u,borderDashOffset:d}=l,f=l.borderAlign==="inner";if(!c)return;i.setLineDash(u||[]),i.lineDashOffset=d,f?(i.lineWidth=c*2,i.lineJoin=h||"round"):(i.lineWidth=c,i.lineJoin=h||"bevel");let _=t.endAngle;if(r){Na(i,t,e,n,_,s);for(let g=0;g<r;++g)i.stroke();isNaN(a)||(_=o+(a%le||le))}f&&xv(i,t,_),r||(Na(i,t,e,n,_,s),i.stroke())}class Wr extends Fn{constructor(e){super();ot(this,"circumference");ot(this,"endAngle");ot(this,"fullCircles");ot(this,"innerRadius");ot(this,"outerRadius");ot(this,"pixelMargin");ot(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,n,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=_p(r,{x:e,y:n}),{startAngle:l,endAngle:c,innerRadius:h,outerRadius:u,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),f=(this.options.spacing+this.options.borderWidth)/2,g=Ut(d,c-l)>=le||ho(o,l,c),p=di(a,h+f,u+f);return g&&p}getCenterPoint(e){const{x:n,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:h}=this.options,u=(r+o)/2,d=(a+l+h+c)/2;return{x:n+Math.cos(u)*d,y:s+Math.sin(u)*d}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:n,circumference:s}=this,r=(n.offset||0)/4,o=(n.spacing||0)/2,a=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=s>le?Math.floor(s/le):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const c=1-Math.sin(Math.min(ce,s||0)),h=r*c;e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,Mv(e,this,h,o,a),yv(e,this,h,o,a),e.restore()}}ot(Wr,"id","arc"),ot(Wr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),ot(Wr,"defaultRoutes",{backgroundColor:"backgroundColor"}),ot(Wr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Zp(i,t,e=t){i.lineCap=Ut(e.borderCapStyle,t.borderCapStyle),i.setLineDash(Ut(e.borderDash,t.borderDash)),i.lineDashOffset=Ut(e.borderDashOffset,t.borderDashOffset),i.lineJoin=Ut(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=Ut(e.borderWidth,t.borderWidth),i.strokeStyle=Ut(e.borderColor,t.borderColor)}function Sv(i,t,e){i.lineTo(e.x,e.y)}function Ev(i){return i.stepped?j_:i.tension||i.cubicInterpolationMode==="monotone"?q_:Sv}function Jp(i,t,e={}){const n=i.length,{start:s=0,end:r=n-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:n,start:l,loop:t.loop,ilen:c<l&&!h?n+c-l:c-l}}function Tv(i,t,e,n){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=Jp(s,e,n),h=Ev(r);let{move:u=!0,reverse:d}=n||{},f,_,g;for(f=0;f<=c;++f)_=s[(a+(d?c-f:f))%o],!_.skip&&(u?(i.moveTo(_.x,_.y),u=!1):h(i,g,_,d,r.stepped),g=_);return l&&(_=s[(a+(d?c:0))%o],h(i,g,_,d,r.stepped)),!!l}function Av(i,t,e,n){const s=t.points,{count:r,start:o,ilen:a}=Jp(s,e,n),{move:l=!0,reverse:c}=n||{};let h=0,u=0,d,f,_,g,p,m;const v=b=>(o+(c?a-b:b))%r,x=()=>{g!==p&&(i.lineTo(h,p),i.lineTo(h,g),i.lineTo(h,m))};for(l&&(f=s[v(0)],i.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[v(d)],f.skip)continue;const b=f.x,S=f.y,E=b|0;E===_?(S<g?g=S:S>p&&(p=S),h=(u*h+b)/++u):(x(),i.lineTo(b,S),_=E,u=0,g=p=S),m=S}x()}function Tc(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Av:Tv}function wv(i){return i.stepped?A0:i.tension||i.cubicInterpolationMode==="monotone"?w0:ls}function Rv(i,t,e,n){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,n)&&s.closePath()),Zp(i,t.options),i.stroke(s)}function Cv(i,t,e,n){const{segments:s,options:r}=t,o=Tc(t);for(const a of s)Zp(i,r,a.style),i.beginPath(),o(i,t,a,{start:e,end:e+n-1})&&i.closePath(),i.stroke()}const Pv=typeof Path2D=="function";function Lv(i,t,e,n){Pv&&!t.options.segment?Rv(i,t,e,n):Cv(i,t,e,n)}class Ri extends Fn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const s=n.spanGaps?this._loop:this._fullLoop;x0(this._points,n,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=O0(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,s=t[e],r=this.points,o=kp(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],l=wv(n);let c,h;for(c=0,h=o.length;c<h;++c){const{start:u,end:d}=o[c],f=r[u],_=r[d];if(f===_){a.push(f);continue}const g=Math.abs((s-f[e])/(_[e]-f[e])),p=l(f,_,g,n.stepped);p[e]=t[e],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,e,n){return Tc(this)(t,this,e,n)}path(t,e,n){const s=this.segments,r=Tc(this);let o=this._loop;e=e||0,n=n||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+n-1});return!!o}draw(t,e,n,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),Lv(t,this,n,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ot(Ri,"id","line"),ot(Ri,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ot(Ri,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ot(Ri,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function ju(i,t,e,n){const s=i.options,{[e]:r}=i.getProps([e],n);return Math.abs(t-r)<s.radius+s.hitRadius}class Ta extends Fn{constructor(e){super();ot(this,"parsed");ot(this,"skip");ot(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,n,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(n-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,n){return ju(this,e,"x",n)}inYRange(e,n){return ju(this,e,"y",n)}getCenterPoint(e){const{x:n,y:s}=this.getProps(["x","y"],e);return{x:n,y:s}}size(e){e=e||this.options||{};let n=e.radius||0;n=Math.max(n,n&&e.hoverRadius||0);const s=n&&e.borderWidth||0;return(n+s)*2}draw(e,n){const s=this.options;this.skip||s.radius<.1||!pi(this,n,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Mc(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}ot(Ta,"id","point"),ot(Ta,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ot(Ta,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Qp(i,t){const{x:e,y:n,base:s,width:r,height:o}=i.getProps(["x","y","base","width","height"],t);let a,l,c,h,u;return i.horizontal?(u=o/2,a=Math.min(e,s),l=Math.max(e,s),c=n-u,h=n+u):(u=r/2,a=e-u,l=e+u,c=Math.min(n,s),h=Math.max(n,s)),{left:a,top:c,right:l,bottom:h}}function Ci(i,t,e,n){return i?0:Le(t,e,n)}function Dv(i,t,e){const n=i.options.borderWidth,s=i.borderSkipped,r=Ap(n);return{t:Ci(s.top,r.top,0,e),r:Ci(s.right,r.right,0,t),b:Ci(s.bottom,r.bottom,0,e),l:Ci(s.left,r.left,0,t)}}function Ov(i,t,e){const{enableBorderRadius:n}=i.getProps(["enableBorderRadius"]),s=i.options.borderRadius,r=gs(s),o=Math.min(t,e),a=i.borderSkipped,l=n||Xt(s);return{topLeft:Ci(!l||a.top||a.left,r.topLeft,0,o),topRight:Ci(!l||a.top||a.right,r.topRight,0,o),bottomLeft:Ci(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Ci(!l||a.bottom||a.right,r.bottomRight,0,o)}}function Iv(i){const t=Qp(i),e=t.right-t.left,n=t.bottom-t.top,s=Dv(i,e/2,n/2),r=Ov(i,e/2,n/2);return{outer:{x:t.left,y:t.top,w:e,h:n,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:n-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function Cl(i,t,e,n){const s=t===null,r=e===null,a=i&&!(s&&r)&&Qp(i,n);return a&&(s||di(t,a.left,a.right))&&(r||di(e,a.top,a.bottom))}function Uv(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function Fv(i,t){i.rect(t.x,t.y,t.w,t.h)}function Pl(i,t,e={}){const n=i.x!==e.x?-t:0,s=i.y!==e.y?-t:0,r=(i.x+i.w!==e.x+e.w?t:0)-n,o=(i.y+i.h!==e.y+e.h?t:0)-s;return{x:i.x+n,y:i.y+s,w:i.w+r,h:i.h+o,radius:i.radius}}class Aa extends Fn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:n,backgroundColor:s}}=this,{inner:r,outer:o}=Iv(this),a=Uv(o.radius)?uo:Fv;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Pl(o,e,r)),t.clip(),a(t,Pl(r,-e,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),a(t,Pl(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,n){return Cl(this,t,e,n)}inXRange(t,e){return Cl(this,t,null,e)}inYRange(t,e){return Cl(this,null,t,e)}getCenterPoint(t){const{x:e,y:n,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?n:(n+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}ot(Aa,"id","bar"),ot(Aa,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),ot(Aa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Nv=Object.freeze({__proto__:null,ArcElement:Wr,BarElement:Aa,LineElement:Ri,PointElement:Ta});const Ac=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],qu=Ac.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function tm(i){return Ac[i%Ac.length]}function em(i){return qu[i%qu.length]}function kv(i,t){return i.borderColor=tm(t),i.backgroundColor=em(t),++t}function Bv(i,t){return i.backgroundColor=i.data.map(()=>tm(t++)),t}function zv(i,t){return i.backgroundColor=i.data.map(()=>em(t++)),t}function Hv(i){let t=0;return(e,n)=>{const s=i.getDatasetMeta(n).controller;s instanceof fs?t=Bv(e,t):s instanceof eo?t=zv(e,t):s&&(t=kv(e,t))}}function $u(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function Vv(i){return i&&(i.borderColor||i.backgroundColor)}var Gv={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;const{data:{datasets:n},options:s}=i.config,{elements:r}=s;if(!e.forceOverride&&($u(n)||Vv(s)||r&&$u(r)))return;const o=Hv(i);n.forEach(o)}};function Wv(i,t,e,n,s){const r=s.samples||n;if(r>=e)return i.slice(t,t+e);const o=[],a=(e-2)/(r-2);let l=0;const c=t+e-1;let h=t,u,d,f,_,g;for(o[l++]=i[h],u=0;u<r-2;u++){let p=0,m=0,v;const x=Math.floor((u+1)*a)+1+t,b=Math.min(Math.floor((u+2)*a)+1,e)+t,S=b-x;for(v=x;v<b;v++)p+=i[v].x,m+=i[v].y;p/=S,m/=S;const E=Math.floor(u*a)+1+t,y=Math.min(Math.floor((u+1)*a)+1,e)+t,{x:P,y:D}=i[h];for(f=_=-1,v=E;v<y;v++)_=.5*Math.abs((P-p)*(i[v].y-D)-(P-i[v].x)*(m-D)),_>f&&(f=_,d=i[v],g=v);o[l++]=d,h=g}return o[l++]=i[c],o}function Xv(i,t,e,n){let s=0,r=0,o,a,l,c,h,u,d,f,_,g;const p=[],m=t+e-1,v=i[t].x,b=i[m].x-v;for(o=t;o<t+e;++o){a=i[o],l=(a.x-v)/b*n,c=a.y;const S=l|0;if(S===h)c<_?(_=c,u=o):c>g&&(g=c,d=o),s=(r*s+a.x)/++r;else{const E=o-1;if(!qt(u)&&!qt(d)){const y=Math.min(u,d),P=Math.max(u,d);y!==f&&y!==E&&p.push({...i[y],x:s}),P!==f&&P!==E&&p.push({...i[P],x:s})}o>0&&E!==f&&p.push(i[E]),p.push(a),h=S,r=0,_=g=c,u=d=f=o}}return p}function nm(i){if(i._decimated){const t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Ku(i){i.data.datasets.forEach(t=>{nm(t)})}function Yv(i,t){const e=t.length;let n=0,s;const{iScale:r}=i,{min:o,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(n=Le(fi(t,r.axis,o).lo,0,e-1)),c?s=Le(fi(t,r.axis,a).hi+1,n,e)-n:s=e-n,{start:n,count:s}}var jv={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){Ku(i);return}const n=i.width;i.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,l=i.getDatasetMeta(r),c=o||s.data;if(Vr([a,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=i.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||i.options.parsing)return;let{start:u,count:d}=Yv(l,c);const f=e.threshold||4*n;if(d<=f){nm(s);return}qt(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(g){this._data=g}}));let _;switch(e.algorithm){case"lttb":_=Wv(c,u,d,n,e);break;case"min-max":_=Xv(c,u,d,n);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=_})},destroy(i){Ku(i)}};function qv(i,t,e){const n=i.segments,s=i.points,r=t.points,o=[];for(const a of n){let{start:l,end:c}=a;c=xh(l,c,s);const h=wc(e,s[l],s[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[c]});continue}const u=kp(t,h);for(const d of u){const f=wc(e,r[d.start],r[d.end],d.loop),_=Np(a,s,f);for(const g of _)o.push({source:g,target:d,start:{[e]:Zu(h,f,"start",Math.max)},end:{[e]:Zu(h,f,"end",Math.min)}})}}return o}function wc(i,t,e,n){if(n)return;let s=t[i],r=e[i];return i==="angle"&&(s=pn(s),r=pn(r)),{property:i,start:s,end:r}}function $v(i,t){const{x:e=null,y:n=null}=i||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=xh(o,a,s);const l=s[o],c=s[a];n!==null?(r.push({x:l.x,y:n}),r.push({x:c.x,y:n})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:c.y}))}),r}function xh(i,t,e){for(;t>i;t--){const n=e[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function Zu(i,t,e,n){return i&&t?n(i[e],t[e]):i?i[e]:t?t[e]:0}function im(i,t){let e=[],n=!1;return ae(i)?(n=!0,e=i):e=$v(i,t),e.length?new Ri({points:e,options:{tension:0},_loop:n,_fullLoop:n}):null}function Ju(i){return i&&i.fill!==!1}function Kv(i,t,e){let s=i[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!me(s))return s;if(o=i[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function Zv(i,t,e){const n=eb(i);if(Xt(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return me(s)&&Math.floor(s)===s?Jv(n[0],t,s,e):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function Jv(i,t,e,n){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=n?!1:e}function Qv(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:Xt(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function tb(i,t,e){let n;return i==="start"?n=e:i==="end"?n=t.options.reverse?t.min:t.max:Xt(i)?n=i.value:n=t.getBaseValue(),n}function eb(i){const t=i.options,e=t.fill;let n=Ut(e&&e.target,e);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function nb(i){const{scale:t,index:e,line:n}=i,s=[],r=n.segments,o=n.points,a=ib(t,e);a.push(im({x:null,y:t.bottom},n));for(let l=0;l<r.length;l++){const c=r[l];for(let h=c.start;h<=c.end;h++)sb(s,o[h],a)}return new Ri({points:s,options:{}})}function ib(i,t){const e=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){const r=n[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function sb(i,t,e){const n=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:l}=rb(r,t,"x");if(!(!l||o&&a)){if(o)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function rb(i,t,e){const n=i.interpolate(t,e);if(!n)return{};const s=n[e],r=i.segments,o=i.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const h=r[c],u=o[h.start][e],d=o[h.end][e];if(di(s,u,d)){a=s===u,l=s===d;break}}return{first:a,last:l,point:n}}class sm{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:le},t.arc(s,r,o,e.end,e.start,!0),!n.bounds}interpolate(t){const{x:e,y:n,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:n+Math.sin(r)*s,angle:r}}}function ob(i){const{chart:t,fill:e,line:n}=i;if(me(e))return ab(t,e);if(e==="stack")return nb(i);if(e==="shape")return!0;const s=lb(i);return s instanceof sm?s:im(s,n)}function ab(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function lb(i){return(i.scale||{}).getPointPositionForValue?hb(i):cb(i)}function cb(i){const{scale:t={},fill:e}=i,n=Qv(e,t);if(me(n)){const s=t.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function hb(i){const{scale:t,fill:e}=i,n=t.options,s=t.getLabels().length,r=n.reverse?t.max:t.min,o=tb(e,t,r),a=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,r);return new sm({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function Ll(i,t,e){const n=ob(t),{line:s,scale:r,axis:o}=t,a=s.options,l=a.fill,c=a.backgroundColor,{above:h=c,below:u=c}=l||{};n&&s.points.length&&(sl(i,e),ub(i,{line:s,target:n,above:h,below:u,area:e,scale:r,axis:o}),rl(i))}function ub(i,t){const{line:e,target:n,above:s,below:r,area:o,scale:a}=t,l=e._loop?"angle":t.axis;i.save(),l==="x"&&r!==s&&(Qu(i,n,o.top),td(i,{line:e,target:n,color:s,scale:a,property:l}),i.restore(),i.save(),Qu(i,n,o.bottom)),td(i,{line:e,target:n,color:r,scale:a,property:l}),i.restore()}function Qu(i,t,e){const{segments:n,points:s}=t;let r=!0,o=!1;i.beginPath();for(const a of n){const{start:l,end:c}=a,h=s[l],u=s[xh(l,c,s)];r?(i.moveTo(h.x,h.y),r=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),o=!!t.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(u.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function td(i,t){const{line:e,target:n,property:s,color:r,scale:o}=t,a=qv(e,n,s);for(const{source:l,target:c,start:h,end:u}of a){const{style:{backgroundColor:d=r}={}}=l,f=n!==!0;i.save(),i.fillStyle=d,fb(i,o,f&&wc(s,h,u)),i.beginPath();const _=!!e.pathSegment(i,l);let g;if(f){_?i.closePath():ed(i,n,u,s);const p=!!n.pathSegment(i,c,{move:_,reverse:!0});g=_&&p,g||ed(i,n,h,s)}i.closePath(),i.fill(g?"evenodd":"nonzero"),i.restore()}}function fb(i,t,e){const{top:n,bottom:s}=t.chart.chartArea,{property:r,start:o,end:a}=e||{};r==="x"&&(i.beginPath(),i.rect(o,n,a-o,s-n),i.clip())}function ed(i,t,e,n){const s=t.interpolate(e,n);s&&i.lineTo(s.x,s.y)}var pb={id:"filler",afterDatasetsUpdate(i,t,e){const n=(i.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<n;++o)r=i.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof Ri&&(l={visible:i.isDatasetVisible(o),index:o,fill:Zv(a,o,n),chart:i,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<n;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=Kv(s,o,e.propagate))},beforeDraw(i,t,e){const n=e.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),r=i.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),n&&a.fill&&Ll(i.ctx,a,r))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){const r=n[s].$filler;Ju(r)&&Ll(i.ctx,r,i.chartArea)}},beforeDatasetDraw(i,t,e){const n=t.meta.$filler;!Ju(n)||e.drawTime!=="beforeDatasetDraw"||Ll(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const nd=(i,t)=>{let{boxHeight:e=t,boxWidth:n=t}=i;return i.usePointStyle&&(e=Math.min(e,t),n=i.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:e,itemHeight:Math.max(t,e)}},mb=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class id extends Fn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ie(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(n=>t.filter(n,this.chart.data))),t.sort&&(e=e.sort((n,s)=>t.sort(n,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,s=Te(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=nd(n,r);let c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a;let u=t;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((_,g)=>{const p=n+e/2+r.measureText(_.text).width;(g===0||c[c.length-1]+p+2*a>o)&&(u+=h,c[c.length-(g>0?0:1)]=0,f+=h,d++),l[g]={left:0,top:f,row:d,width:p,height:s},c[c.length-1]+=p+a}),u}_fitCols(t,e,n,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t;let u=a,d=0,f=0,_=0,g=0;return this.legendItems.forEach((p,m)=>{const{itemWidth:v,itemHeight:x}=gb(n,e,r,p,s);m>0&&f+x+2*a>h&&(u+=d+a,c.push({width:d,height:f}),_+=d+a,g++,d=f=0),l[m]={left:_,top:f,col:g,width:v,height:x},d=Math.max(d,v),f+=x+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:s},rtl:r}}=this,o=ar(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=ze(n,this.left+s,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=ze(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=ze(n,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=ze(n,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;sl(t,this),this._draw(),rl(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:s}=this,{align:r,labels:o}=t,a=ge.color,l=ar(t.rtl,this.left,this.width),c=Te(o.font),{padding:h}=o,u=c.size,d=u/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:_,boxHeight:g,itemHeight:p}=nd(o,u),m=function(E,y,P){if(isNaN(_)||_<=0||isNaN(g)||g<0)return;s.save();const D=Ut(P.lineWidth,1);if(s.fillStyle=Ut(P.fillStyle,a),s.lineCap=Ut(P.lineCap,"butt"),s.lineDashOffset=Ut(P.lineDashOffset,0),s.lineJoin=Ut(P.lineJoin,"miter"),s.lineWidth=D,s.strokeStyle=Ut(P.strokeStyle,a),s.setLineDash(Ut(P.lineDash,[])),o.usePointStyle){const M={radius:g*Math.SQRT2/2,pointStyle:P.pointStyle,rotation:P.rotation,borderWidth:D},A=l.xPlus(E,_/2),F=y+d;Tp(s,M,A,F,o.pointStyleWidth&&_)}else{const M=y+Math.max((u-g)/2,0),A=l.leftForLtr(E,_),F=gs(P.borderRadius);s.beginPath(),Object.values(F).some(X=>X!==0)?uo(s,{x:A,y:M,w:_,h:g,radius:F}):s.rect(A,M,_,g),s.fill(),D!==0&&s.stroke()}s.restore()},v=function(E,y,P){ws(s,P.text,E,y+p/2,c,{strikethrough:P.hidden,textAlign:l.textAlign(P.textAlign)})},x=this.isHorizontal(),b=this._computeTitleHeight();x?f={x:ze(r,this.left+h,this.right-n[0]),y:this.top+h+b,line:0}:f={x:this.left+h,y:ze(r,this.top+b+h,this.bottom-e[0].height),line:0},Ip(this.ctx,t.textDirection);const S=p+h;this.legendItems.forEach((E,y)=>{s.strokeStyle=E.fontColor,s.fillStyle=E.fontColor;const P=s.measureText(E.text).width,D=l.textAlign(E.textAlign||(E.textAlign=o.textAlign)),M=_+d+P;let A=f.x,F=f.y;l.setWidth(this.width),x?y>0&&A+M+h>this.right&&(F=f.y+=S,f.line++,A=f.x=ze(r,this.left+h,this.right-n[f.line])):y>0&&F+S>this.bottom&&(A=f.x=A+e[f.line].width+h,f.line++,F=f.y=ze(r,this.top+b+h,this.bottom-e[f.line].height));const X=l.x(A);if(m(X,F,E),A=F_(D,A+_+d,x?A+M:this.right,t.rtl),v(l.x(A),F,E),x)f.x+=M+h;else if(typeof E.text!="string"){const O=c.lineHeight;f.y+=rm(E,O)+h}else f.y+=S}),Up(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=Te(e.font),s=Ye(e.padding);if(!e.display)return;const r=ar(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=n.size/2,c=s.top+l;let h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=ze(t.align,u,this.right-d);else{const _=this.columnSizes.reduce((g,p)=>Math.max(g,p.height),0);h=c+ze(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const f=ze(a,u,u+d);o.textAlign=r.textAlign(hh(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,ws(o,e.text,f,h,n)}_computeTitleHeight(){const t=this.options.title,e=Te(t.font),n=Ye(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,s,r;if(di(t,this.left,this.right)&&di(e,this.top,this.bottom)){for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],di(t,s.left,s.left+s.width)&&di(e,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(t){const e=this.options;if(!vb(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=mb(s,n);s&&!r&&ie(e.onLeave,[t,s,this],this),this._hoveredItem=n,n&&!r&&ie(e.onHover,[t,n,this],this)}else n&&ie(e.onClick,[t,n,this],this)}}function gb(i,t,e,n,s){const r=_b(n,i,t,e),o=xb(s,n,t.lineHeight);return{itemWidth:r,itemHeight:o}}function _b(i,t,e,n){let s=i.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+n.measureText(s).width}function xb(i,t,e){let n=i;return typeof t.text!="string"&&(n=rm(t,e)),n}function rm(i,t){const e=i.text?i.text.length:0;return t*e}function vb(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var bb={id:"legend",_element:id,start(i,t,e){const n=i.legend=new id({ctx:i.ctx,options:e,chart:i});Ge.configure(i,n,e),Ge.addBox(i,n)},stop(i){Ge.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const n=i.legend;Ge.configure(i,n,e),n.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const n=t.datasetIndex,s=e.chart;s.isDatasetVisible(n)?(s.hide(n),t.hidden=!0):(s.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:n,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=Ye(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class vh extends Fn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=ae(n.text)?n.text.length:1;this._padding=Ye(n.padding);const r=s*Te(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:n,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,h,u;return this.isHorizontal()?(h=ze(a,n,r),u=e+t,c=r-n):(o.position==="left"?(h=n+t,u=ze(a,s,e),l=ce*-.5):(h=r-t,u=ze(a,e,s),l=ce*.5),c=s-e),{titleX:h,titleY:u,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const n=Te(e.font),r=n.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);ws(t,e.text,0,0,n,{color:e.color,maxWidth:l,rotation:c,textAlign:hh(e.align),textBaseline:"middle",translation:[o,a]})}}function Mb(i,t){const e=new vh({ctx:i.ctx,options:t,chart:i});Ge.configure(i,e,t),Ge.addBox(i,e),i.titleBlock=e}var yb={id:"title",_element:vh,start(i,t,e){Mb(i,e)},stop(i){const t=i.titleBlock;Ge.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){const n=i.titleBlock;Ge.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Yo=new WeakMap;var Sb={id:"subtitle",start(i,t,e){const n=new vh({ctx:i.ctx,options:e,chart:i});Ge.configure(i,n,e),Ge.addBox(i,n),Yo.set(i,n)},stop(i){Ge.removeBox(i,Yo.get(i)),Yo.delete(i)},beforeUpdate(i,t,e){const n=Yo.get(i);Ge.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Xr={average(i){if(!i.length)return!1;let t,e,n=0,s=0,r=0;for(t=0,e=i.length;t<e;++t){const o=i[t].element;if(o&&o.hasValue()){const a=o.tooltipPosition();n+=a.x,s+=a.y,++r}}return{x:n/r,y:s/r}},nearest(i,t){if(!i.length)return!1;let e=t.x,n=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=i.length;r<o;++r){const l=i[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=vc(t,c);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,n=l.y}return{x:e,y:n}}};function Nn(i,t){return t&&(ae(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function ri(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Eb(i,t){const{element:e,datasetIndex:n,index:s}=t,r=i.getDatasetMeta(n).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:i,label:o,parsed:r.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:n,element:e}}function sd(i,t){const e=i.chart.ctx,{body:n,footer:s,title:r}=i,{boxWidth:o,boxHeight:a}=t,l=Te(t.bodyFont),c=Te(t.titleFont),h=Te(t.footerFont),u=r.length,d=s.length,f=n.length,_=Ye(t.padding);let g=_.height,p=0,m=n.reduce((b,S)=>b+S.before.length+S.lines.length+S.after.length,0);if(m+=i.beforeBody.length+i.afterBody.length,u&&(g+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),m){const b=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;g+=f*b+(m-f)*l.lineHeight+(m-1)*t.bodySpacing}d&&(g+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let v=0;const x=function(b){p=Math.max(p,e.measureText(b).width+v)};return e.save(),e.font=c.string,Jt(i.title,x),e.font=l.string,Jt(i.beforeBody.concat(i.afterBody),x),v=t.displayColors?o+2+t.boxPadding:0,Jt(n,b=>{Jt(b.before,x),Jt(b.lines,x),Jt(b.after,x)}),v=0,e.font=h.string,Jt(i.footer,x),e.restore(),p+=_.width,{width:p,height:g}}function Tb(i,t){const{y:e,height:n}=t;return e<n/2?"top":e>i.height-n/2?"bottom":"center"}function Ab(i,t,e,n){const{x:s,width:r}=n,o=e.caretSize+e.caretPadding;if(i==="left"&&s+r+o>t.width||i==="right"&&s-r-o<0)return!0}function wb(i,t,e,n){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=i;let c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),Ab(c,i,t,e)&&(c="center"),c}function rd(i,t,e){const n=e.yAlign||t.yAlign||Tb(i,e);return{xAlign:e.xAlign||t.xAlign||wb(i,t,e,n),yAlign:n}}function Rb(i,t){let{x:e,width:n}=i;return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function Cb(i,t,e){let{y:n,height:s}=i;return t==="top"?n+=e:t==="bottom"?n-=s+e:n-=s/2,n}function od(i,t,e,n){const{caretSize:s,caretPadding:r,cornerRadius:o}=i,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=gs(o);let _=Rb(t,a);const g=Cb(t,l,c);return l==="center"?a==="left"?_+=c:a==="right"&&(_-=c):a==="left"?_-=Math.max(h,d)+s:a==="right"&&(_+=Math.max(u,f)+s),{x:Le(_,0,n.width-t.width),y:Le(g,0,n.height-t.height)}}function jo(i,t,e){const n=Ye(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-n.right:i.x+n.left}function ad(i){return Nn([],ri(i))}function Pb(i,t,e){return ji(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function ld(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const om={beforeTitle:Jn,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,n=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return e[t.dataIndex]}return""},afterTitle:Jn,beforeBody:Jn,beforeLabel:Jn,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return qt(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Jn,afterBody:Jn,beforeFooter:Jn,footer:Jn,afterFooter:Jn};function Je(i,t,e,n){const s=i[t].call(e,n);return typeof s>"u"?om[t].call(e,n):s}class Rc extends Fn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),s=n.enabled&&e.options.animation&&n.animations,r=new Bp(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=Pb(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:n}=e,s=Je(n,"beforeTitle",this,t),r=Je(n,"title",this,t),o=Je(n,"afterTitle",this,t);let a=[];return a=Nn(a,ri(s)),a=Nn(a,ri(r)),a=Nn(a,ri(o)),a}getBeforeBody(t,e){return ad(Je(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:n}=e,s=[];return Jt(t,r=>{const o={before:[],lines:[],after:[]},a=ld(n,r);Nn(o.before,ri(Je(a,"beforeLabel",this,r))),Nn(o.lines,Je(a,"label",this,r)),Nn(o.after,ri(Je(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return ad(Je(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:n}=e,s=Je(n,"beforeFooter",this,t),r=Je(n,"footer",this,t),o=Je(n,"afterFooter",this,t);let a=[];return a=Nn(a,ri(s)),a=Nn(a,ri(r)),a=Nn(a,ri(o)),a}_createItems(t){const e=this._active,n=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(Eb(this.chart,e[l]));return t.filter&&(a=a.filter((h,u,d)=>t.filter(h,u,d,n))),t.itemSort&&(a=a.sort((h,u)=>t.itemSort(h,u,n))),Jt(a,h=>{const u=ld(t.callbacks,h);s.push(Je(u,"labelColor",this,h)),r.push(Je(u,"labelPointStyle",this,h)),o.push(Je(u,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const n=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Xr[n.position].call(this,s,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const l=this._size=sd(this,n),c=Object.assign({},a,l),h=rd(this.chart,n,c),u=od(n,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,s){const r=this.getCaretPosition(t,n,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,n){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:u}=gs(a),{x:d,y:f}=t,{width:_,height:g}=e;let p,m,v,x,b,S;return r==="center"?(b=f+g/2,s==="left"?(p=d,m=p-o,x=b+o,S=b-o):(p=d+_,m=p+o,x=b-o,S=b+o),v=p):(s==="left"?m=d+Math.max(l,h)+o:s==="right"?m=d+_-Math.max(c,u)-o:m=this.caretX,r==="top"?(x=f,b=x-o,p=m-o,v=m+o):(x=f+g,b=x+o,p=m+o,v=m-o),S=x),{x1:p,x2:m,x3:v,y1:x,y2:b,y3:S}}drawTitle(t,e,n){const s=this.title,r=s.length;let o,a,l;if(r){const c=ar(n.rtl,this.x,this.width);for(t.x=jo(this,n.titleAlign,n),e.textAlign=c.textAlign(n.titleAlign),e.textBaseline="middle",o=Te(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,s,r){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=r,h=Te(r.bodyFont),u=jo(this,"left",r),d=s.x(u),f=l<h.lineHeight?(h.lineHeight-l)/2:0,_=e.y+f;if(r.usePointStyle){const g={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},p=s.leftForLtr(d,c)+c/2,m=_+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Mc(t,g,p,m),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Mc(t,g,p,m)}else{t.lineWidth=Xt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(d,c),p=s.leftForLtr(s.xPlus(d,1),c-2),m=gs(o.borderRadius);Object.values(m).some(v=>v!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,uo(t,{x:g,y:_,w:c,h:l,radius:m}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),uo(t,{x:p,y:_+1,w:c-2,h:l-2,radius:m}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(g,_,c,l),t.strokeRect(g,_,c,l),t.fillStyle=o.backgroundColor,t.fillRect(p,_+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=n,u=Te(n.bodyFont);let d=u.lineHeight,f=0;const _=ar(n.rtl,this.x,this.width),g=function(P){e.fillText(P,_.x(t.x+f),t.y+d/2),t.y+=d+r},p=_.textAlign(o);let m,v,x,b,S,E,y;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=jo(this,p,n),e.fillStyle=n.bodyColor,Jt(this.beforeBody,g),f=a&&p!=="right"?o==="center"?c/2+h:c+2+h:0,b=0,E=s.length;b<E;++b){for(m=s[b],v=this.labelTextColors[b],e.fillStyle=v,Jt(m.before,g),x=m.lines,a&&x.length&&(this._drawColorBox(e,t,b,_,n),d=Math.max(u.lineHeight,l)),S=0,y=x.length;S<y;++S)g(x[S]),d=u.lineHeight;Jt(m.after,g)}f=0,d=u.lineHeight,Jt(this.afterBody,g),t.y-=r}drawFooter(t,e,n){const s=this.footer,r=s.length;let o,a;if(r){const l=ar(n.rtl,this.x,this.width);for(t.x=jo(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=l.textAlign(n.footerAlign),e.textBaseline="middle",o=Te(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:h}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:_}=gs(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,l),o==="top"&&this.drawCaret(t,e,n,s),e.lineTo(a+c-d,l),e.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(t,e,n,s),e.lineTo(a+c,l+h-_),e.quadraticCurveTo(a+c,l+h,a+c-_,l+h),o==="bottom"&&this.drawCaret(t,e,n,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),o==="center"&&r==="left"&&this.drawCaret(t,e,n,s),e.lineTo(a,l+u),e.quadraticCurveTo(a,l,a+u,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,s=n&&n.x,r=n&&n.y;if(s||r){const o=Xr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=sd(this,t),l=Object.assign({},o,this._size),c=rd(e,t,l),h=od(t,l,c,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=Ye(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=n,this.drawBackground(r,t,s,e),Ip(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),Up(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!La(n,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,n),a=this._positionChanged(o,t),l=e||!La(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,n,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e;const o=this.chart.getElementsAtEventForMode(t,r.mode,r,n);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:n,caretY:s,options:r}=this,o=Xr[r.position].call(this,t,e);return o!==!1&&(n!==o.x||s!==o.y)}}ot(Rc,"positioners",Xr);var Lb={id:"tooltip",_element:Rc,positioners:Xr,afterInit(i,t,e){e&&(i.tooltip=new Rc({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:om},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Db=Object.freeze({__proto__:null,Colors:Gv,Decimation:jv,Filler:pb,Legend:bb,SubTitle:Sb,Title:yb,Tooltip:Lb});const Ob=(i,t,e,n)=>(typeof t=="string"?(e=i.push(t)-1,n.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Ib(i,t,e,n){const s=i.indexOf(t);if(s===-1)return Ob(i,t,e,n);const r=i.lastIndexOf(t);return s!==r?e:s}const Ub=(i,t)=>i===null?null:Le(Math.round(i),0,t);function cd(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class Cc extends Ls{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const n=this.getLabels();for(const{index:s,label:r}of e)n[s]===r&&n.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(qt(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:Ib(n,t,Ut(e,t),this._addedLabels),Ub(e,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),e||(s=this.getLabels().length-1)),this.min=n,this.max=s}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return cd.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}ot(Cc,"id","category"),ot(Cc,"defaults",{ticks:{callback:cd}});function Fb(i,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=i,f=r||1,_=h-1,{min:g,max:p}=t,m=!qt(o),v=!qt(a),x=!qt(c),b=(p-g)/(u+1);let S=iu((p-g)/_/f)*f,E,y,P,D;if(S<1e-14&&!m&&!v)return[{value:g},{value:p}];D=Math.ceil(p/S)-Math.floor(g/S),D>_&&(S=iu(D*S/_/f)*f),qt(l)||(E=Math.pow(10,l),S=Math.ceil(S*E)/E),s==="ticks"?(y=Math.floor(g/S)*S,P=Math.ceil(p/S)*S):(y=g,P=p),m&&v&&r&&C_((a-o)/r,S/1e3)?(D=Math.round(Math.min((a-o)/S,h)),S=(a-o)/D,y=o,P=a):x?(y=m?o:y,P=v?a:P,D=c-1,S=(P-y)/D):(D=(P-y)/S,Jr(D,Math.round(D),S/1e3)?D=Math.round(D):D=Math.ceil(D));const M=Math.max(su(S),su(y));E=Math.pow(10,qt(l)?M:l),y=Math.round(y*E)/E,P=Math.round(P*E)/E;let A=0;for(m&&(d&&y!==o?(e.push({value:o}),y<o&&A++,Jr(Math.round((y+A*S)*E)/E,o,hd(o,b,i))&&A++):y<o&&A++);A<D;++A){const F=Math.round((y+A*S)*E)/E;if(v&&F>a)break;e.push({value:F})}return v&&d&&P!==a?e.length&&Jr(e[e.length-1].value,a,hd(a,b,i))?e[e.length-1].value=a:e.push({value:a}):(!v||P===a)&&e.push({value:P}),e}function hd(i,t,{horizontal:e,minRotation:n}){const s=In(n),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+i).length;return Math.min(t/r,o)}class ka extends Ls{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return qt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=e?s:l,a=l=>r=n?r:l;if(t){const l=jn(s),c=jn(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:n}=t,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const s={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=Fb(s,r);return t.bounds==="ticks"&&gp(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const s=(n-e)/Math.max(t.length-1,1)/2;e-=s,n+=s}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return Ao(t,this.chart.options.locale,this.options.ticks.format)}}class Pc extends ka{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=me(t)?t:0,this.max=me(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=In(this.options.ticks.minRotation),s=(t?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}ot(Pc,"id","linear"),ot(Pc,"defaults",{ticks:{callback:il.formatters.numeric}});const po=i=>Math.floor(wi(i)),ts=(i,t)=>Math.pow(10,po(i)+t);function ud(i){return i/Math.pow(10,po(i))===1}function dd(i,t,e){const n=Math.pow(10,e),s=Math.floor(i/n);return Math.ceil(t/n)-s}function Nb(i,t){const e=t-i;let n=po(e);for(;dd(i,t,n)>10;)n++;for(;dd(i,t,n)<10;)n--;return Math.min(n,po(i))}function kb(i,{min:t,max:e}){t=fn(i.min,t);const n=[],s=po(t);let r=Nb(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10;let u=Math.floor((c-h)/Math.pow(10,r)),d=fn(i.min,Math.round((l+h+u*Math.pow(10,r))*o)/o);for(;d<e;)n.push({value:d,major:ud(d),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(r++,u=2,o=r>=0?1:o),d=Math.round((l+h+u*Math.pow(10,r))*o)/o;const f=fn(i.max,d);return n.push({value:f,major:ud(f),significand:u}),n}class Lc extends Ls{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const n=ka.prototype.parse.apply(this,[t,e]);if(n===0){this._zero=!0;return}return me(n)&&n>0?n:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=me(t)?Math.max(0,t):null,this.max=me(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!me(this._userMin)&&(this.min=t===ts(this.min,0)?ts(this.min,-1):ts(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let n=this.min,s=this.max;const r=a=>n=t?n:a,o=a=>s=e?s:a;n===s&&(n<=0?(r(1),o(10)):(r(ts(n,-1)),o(ts(s,1)))),n<=0&&r(ts(s,-1)),s<=0&&o(ts(n,1)),this.min=n,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},n=kb(e,this);return t.bounds==="ticks"&&gp(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":Ao(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=wi(t),this._valueRange=wi(this.max)-wi(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(wi(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}ot(Lc,"id","logarithmic"),ot(Lc,"defaults",{ticks:{callback:il.formatters.logarithmic,major:{enabled:!0}}});function Dc(i){const t=i.ticks;if(t.display&&i.display){const e=Ye(t.backdropPadding);return Ut(t.font&&t.font.size,ge.font.size)+e.height}return 0}function Bb(i,t,e){return e=ae(e)?e:[e],{w:Y_(i,t.string,e),h:e.length*t.lineHeight}}function fd(i,t,e,n,s){return i===n||i===s?{start:t-e/2,end:t+e/2}:i<n||i>s?{start:t-e,end:t}:{start:t,end:t+e}}function zb(i){const t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),n=[],s=[],r=i._pointLabels.length,o=i.options.pointLabels,a=o.centerPointLabels?ce/r:0;for(let l=0;l<r;l++){const c=o.setContext(i.getPointLabelContext(l));s[l]=c.padding;const h=i.getPointPosition(l,i.drawingArea+s[l],a),u=Te(c.font),d=Bb(i.ctx,u,i._pointLabels[l]);n[l]=d;const f=pn(i.getIndexAngle(l)+a),_=Math.round(lh(f)),g=fd(_,h.x,d.w,0,180),p=fd(_,h.y,d.h,90,270);Hb(e,t,f,g,p)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=Wb(i,n,s)}function Hb(i,t,e,n,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,l=0;n.start<t.l?(a=(t.l-n.start)/r,i.l=Math.min(i.l,t.l-a)):n.end>t.r&&(a=(n.end-t.r)/r,i.r=Math.max(i.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/o,i.t=Math.min(i.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/o,i.b=Math.max(i.b,t.b+l))}function Vb(i,t,e){const n=i.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,l=i.getPointPosition(t,n+s+o,r),c=Math.round(lh(pn(l.angle+Me))),h=jb(l.y,a.h,c),u=Xb(c),d=Yb(l.x,a.w,u);return{visible:!0,x:l.x,y:h,textAlign:u,left:d,top:h,right:d+a.w,bottom:h+a.h}}function Gb(i,t){if(!t)return!0;const{left:e,top:n,right:s,bottom:r}=i;return!(pi({x:e,y:n},t)||pi({x:e,y:r},t)||pi({x:s,y:n},t)||pi({x:s,y:r},t))}function Wb(i,t,e){const n=[],s=i._pointLabels.length,r=i.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Dc(r)/2,additionalAngle:o?ce/s:0};let c;for(let h=0;h<s;h++){l.padding=e[h],l.size=t[h];const u=Vb(i,h,l);n.push(u),a==="auto"&&(u.visible=Gb(u,c),u.visible&&(c=u))}return n}function Xb(i){return i===0||i===180?"center":i<180?"left":"right"}function Yb(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function jb(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function qb(i,t,e){const{left:n,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!qt(a)){const l=gs(t.borderRadius),c=Ye(t.backdropPadding);i.fillStyle=a;const h=n-c.left,u=s-c.top,d=r-n+c.width,f=o-s+c.height;Object.values(l).some(_=>_!==0)?(i.beginPath(),uo(i,{x:h,y:u,w:d,h:f,radius:l}),i.fill()):i.fillRect(h,u,d,f)}}function $b(i,t){const{ctx:e,options:{pointLabels:n}}=i;for(let s=t-1;s>=0;s--){const r=i._pointLabelItems[s];if(!r.visible)continue;const o=n.setContext(i.getPointLabelContext(s));qb(e,o,r);const a=Te(o.font),{x:l,y:c,textAlign:h}=r;ws(e,i._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function am(i,t,e,n){const{ctx:s}=i;if(e)s.arc(i.xCenter,i.yCenter,t,0,le);else{let r=i.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<n;o++)r=i.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function Kb(i,t,e,n,s){const r=i.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!n||!a||!l||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),am(i,e,o,n),r.closePath(),r.stroke(),r.restore())}function Zb(i,t,e){return ji(i,{label:e,index:t,type:"pointLabel"})}class Yr extends ka{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ye(Dc(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=me(t)&&!isNaN(t)?t:0,this.max=me(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Dc(this.options))}generateTickLabels(t){ka.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,n)=>{const s=ie(this.options.pointLabels.callback,[e,n],this);return s||s===0?s:""}).filter((e,n)=>this.chart.getDataVisibility(n))}fit(){const t=this.options;t.display&&t.pointLabels.display?zb(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,s))}getIndexAngle(t){const e=le/(this._pointLabels.length||1),n=this.options.startAngle||0;return pn(t*e+In(n))}getDistanceFromCenterForValue(t){if(qt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(qt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const n=e[t];return Zb(this.getContext(),t,n)}}getPointPosition(t,e,n=0){const s=this.getIndexAngle(t)-Me+n;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:n,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),am(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:n,grid:s,border:r}=e,o=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&$b(this,o),s.display&&this.ticks.forEach((h,u)=>{if(u!==0){l=this.getDistanceFromCenterForValue(h.value);const d=this.getContext(u),f=s.setContext(d),_=r.setContext(d);Kb(this,f,l,o,_)}}),n.display){for(t.save(),a=o-1;a>=0;a--){const h=n.setContext(this.getPointLabelContext(a)),{color:u,lineWidth:d}=h;!d||!u||(t.lineWidth=d,t.strokeStyle=u,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!e.reverse)return;const c=n.setContext(this.getContext(l)),h=Te(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const u=Ye(c.backdropPadding);t.fillRect(-o/2-u.left,-r-h.size/2-u.top,o+u.width,h.size+u.height)}ws(t,a.label,0,-r,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}ot(Yr,"id","radialLinear"),ot(Yr,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:il.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),ot(Yr,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ot(Yr,"descriptors",{angleLines:{_fallback:"grid"}});const al={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},tn=Object.keys(al);function pd(i,t){return i-t}function md(i,t){if(qt(t))return null;const e=i._adapter,{parser:n,round:s,isoWeekday:r}=i._parseOpts;let o=t;return typeof n=="function"&&(o=n(o)),me(o)||(o=typeof n=="string"?e.parse(o,n):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(mr(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function gd(i,t,e,n){const s=tn.length;for(let r=tn.indexOf(i);r<s-1;++r){const o=al[tn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=n)return tn[r]}return tn[s-1]}function Jb(i,t,e,n,s){for(let r=tn.length-1;r>=tn.indexOf(e);r--){const o=tn[r];if(al[o].common&&i._adapter.diff(s,n,o)>=t-1)return o}return tn[e?tn.indexOf(e):0]}function Qb(i){for(let t=tn.indexOf(i)+1,e=tn.length;t<e;++t)if(al[tn[t]].common)return tn[t]}function _d(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:n,hi:s}=ch(e,t),r=e[n]>=t?e[n]:e[s];i[r]=!0}}function tM(i,t,e,n){const s=i._adapter,r=+s.startOf(t[0].value,n),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,n))l=e[a],l>=0&&(t[l].major=!0);return t}function xd(i,t,e){const n=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,n.push({value:a,major:!1});return r===0||!e?n:tM(i,n,s,e)}class mo extends Ls{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const n=t.time||(t.time={}),s=this._adapter=new lx._date(t.adapters.date);s.init(e),Zr(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:md(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=me(s)&&!isNaN(s)?s:+e.startOf(Date.now(),n),r=me(r)&&!isNaN(r)?r:+e.endOf(Date.now(),n)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,s=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=O_(s,r,o);return this._unit=e.unit||(n.autoSkip?gd(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):Jb(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:Qb(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),xd(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,n=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?n=r:n=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Le(e,0,o),n=Le(n,0,o),this._offsets={start:e,end:n,factor:1/(e+1+n)}}_generate(){const t=this._adapter,e=this.min,n=this.max,s=this.options,r=s.time,o=r.unit||gd(r.minUnit,e,n,this._getLabelCapacity(e)),a=Ut(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=mr(l)||l===!0,h={};let u=e,d,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":o),t.diff(n,e,o)>1e5*a)throw new Error(e+" and "+n+" are too far apart with stepSize of "+a+" "+o);const _=s.ticks.source==="data"&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+t.add(d,a,o),f++)_d(h,d,_);return(d===n||s.bounds==="ticks"||f===1)&&_d(h,d,_),Object.keys(h).sort(pd).map(g=>+g)}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,n,s){const r=this.options,o=r.ticks.callback;if(o)return ie(o,[t,e,n],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],u=c&&a[c],d=n[e],f=c&&u&&d&&d.major;return this._adapter.format(t,s||(f?u:h))}generateTickLabels(t){let e,n,s;for(e=0,n=t.length;e<n;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,s=In(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*r+a*o,h:n*o+a*r}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,s=n[e.unit]||n.millisecond,r=this._tickFormatFunction(t,0,xd(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,n;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,n=s.length;e<n;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const s=this.getLabels();for(e=0,n=s.length;e<n;++e)t.push(md(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return vp(t.sort(pd))}}ot(mo,"id","time"),ot(mo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function qo(i,t,e){let n=0,s=i.length-1,r,o,a,l;e?(t>=i[n].pos&&t<=i[s].pos&&({lo:n,hi:s}=fi(i,"pos",t)),{pos:r,time:a}=i[n],{pos:o,time:l}=i[s]):(t>=i[n].time&&t<=i[s].time&&({lo:n,hi:s}=fi(i,"time",t)),{time:r,pos:a}=i[n],{time:o,pos:l}=i[s]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class Oc extends mo{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=qo(e,this.min),this._tableRange=qo(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,s=[],r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=n&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(e)||n.length===1)&&n.push(e),n.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return e.length&&n.length?t=this.normalize(e.concat(n)):t=e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(qo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return qo(this._table,n*this._tableRange+this._minPos,!0)}}ot(Oc,"id","timeseries"),ot(Oc,"defaults",mo.defaults);var eM=Object.freeze({__proto__:null,CategoryScale:Cc,LinearScale:Pc,LogarithmicScale:Lc,RadialLinearScale:Yr,TimeScale:mo,TimeSeriesScale:Oc});const nM=[ax,Nv,Db,eM];ci.register(...nM);const el=class el{constructor(t){el.charts.push(this);let e=document.getElementById("myChart");this.chart=new ci(e,{type:"line",data:{labels:[],size:0,datasets:[{label:"Solves",data:[],tension:.1},{label:"Ao5",data:[],tension:.1},{label:"Ao12",data:[],tension:.1},{label:"Ao50",data:[],tension:.1}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"black"}}},scales:{x:{clip:!0,ticks:{color:"black"}},y:{ticks:{color:"black"}}}}})}addTime(t,e=!0){this.chart.data.size+=1,this.chart.data.labels.push(this.chart.data.size),this.chart.data.datasets[0].data.push({y:t.seconds,x:this.chart.data.size}),this.chart.data.size>4&&this.addAverage(this.chart.data.datasets[0].data.slice(-5)),this.chart.data.size>11&&this.addAverage(this.chart.data.datasets[0].data.slice(-12)),this.chart.data.size>49&&this.addAverage(this.chart.data.datasets[0].data.slice(-50)),e&&this.chart.update()}addAverage(t){let e=[];for(const s in t)e.push(t[s].y);let n=Kg(e);e.length==5?this.chart.data.datasets[1].data.push({y:n,x:this.chart.data.size}):e.length==12?this.chart.data.datasets[2].data.push({y:n,x:this.chart.data.size}):e.length==50&&this.chart.data.datasets[3].data.push({y:n,x:this.chart.data.size})}};ot(el,"charts",[]);let Ba=el;class vd{constructor(){}static button(t){const e=document.createElement("c-button"),n=document.createElement("button-graphic"),s=document.createElement("line"),r=document.createElement("line");switch(n.appendChild(s),n.appendChild(r),t){case"expand":n.classList.add("expand-graphic"),s.classList.add("expand-graphic-line"),s.classList.add("diagonal-incline"),r.classList.add("expand-graphic-line"),r.classList.add("diagonal-decline");break;case"delete":n.classList.add("delete-graphic"),s.classList.add("delete-graphic-line"),s.classList.add("diagonal-incline"),r.classList.add("delete-graphic-line"),r.classList.add("diagonal-decline");break}return e.appendChild(n),e}}const nl=class nl{constructor(t,e,n){ao.hi=":)",this.location=t,this.heads=e,this.buttons=n,this.createHeader(),nl.tables.push(this)}createHeader(){const t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("div");this.buttons&&(t.style.gridTemplateColumns=`3rem repeat(${this.heads.length+1}, minmax(0, 1fr))`),e.innerHTML="No.",t.classList.add("table-header"),e.classList.add("table-head"),n.classList.add("table-body"),t.appendChild(e),this.heads.forEach(s=>{const r=document.createElement("div");r.classList.add("table-head"),r.innerHTML=s,t.appendChild(r)}),document.getElementById(this.location).appendChild(t),document.getElementById(this.location).appendChild(n),this.body=n}addTime(t){let e=ao.charts[0].chart;e.data.size>49?(t["avg.50"]=e.data.datasets[3].data.slice(-1)[0].y.toFixed(3),t["avg.12"]=e.data.datasets[2].data.slice(-1)[0].y.toFixed(3),t["avg.5"]=e.data.datasets[1].data.slice(-1)[0].y.toFixed(3)):e.data.size>11?(t["avg.12"]=e.data.datasets[2].data.slice(-1)[0].y.toFixed(3),t["avg.5"]=e.data.datasets[1].data.slice(-1)[0].y.toFixed(3)):e.data.size>4&&(t["avg.5"]=e.data.datasets[1].data.slice(-1)[0].y.toFixed(3));const n=document.createElement("div"),s=document.createElement("div"),r=document.getElementById(this.location).getElementsByClassName("table-body")[0],o=document.createElement("div");this.buttons&&(o.style.gridTemplateColumns=`3rem repeat(${this.heads.length+1}, minmax(0, 1fr))`),s.innerHTML=r.childNodes.length+1,o.classList.add("table-row"),s.classList.add("table-cell"),n.classList.add("table-cell"),n.classList.add("padding-2"),o.appendChild(s),this.heads.forEach(l=>{const c=document.createElement("div");c.classList.add("table-cell"),c.classList.add(l.toLowerCase()),o.appendChild(c),l.toLowerCase()in t&&(c.innerHTML=t[l.toLowerCase()])});let a=vd.button("delete");a.params=t,a.addEventListener("click",function(){ll.delete(t.timeOfSolving)}),n.appendChild(a),a=vd.button("expand"),n.appendChild(a),o.appendChild(n),r.insertBefore(o,r.firstChild)}};ot(nl,"tables",[]);let za=nl;class lm{constructor(){this.db}static open(){return new Promise((t,e)=>{const n=window.indexedDB.open("database",1);n.onerror=s=>{console.log(s),e()},n.onsuccess=()=>{this.db=n.result,t()},n.onupgradeneeded=()=>{this.db=n.result,db.createObjectStore("solves",{keyPath:"timeOfSolving"}).createIndex("time",["seconds"],{unique:!1}),t()}})}static getConnectionToStore(t){const e=this.db.transaction([t],"readwrite");return e.oncomplete=s=>{},e.onerror=s=>{console.log("--error: "+s)},e.objectStore(t)}static add(t,e){const n=this.getConnectionToStore("solves");let s={timeOfSolving:Date.now(),scramble:t,seconds:e,puzzle:"3x3",session:"main",penalty:0,dnf:!1,comments:""};const r=n.put(s);r.onsuccess=()=>{[].concat(Ba.charts,za.tables).forEach(a=>{a.addTime(s)})},r.onerror=o=>{console.log("--error: "+o)}}static get(t="timeOfSolve",e=NaN){return new Promise((n,s)=>{const r=this.getConnectionToStore("solves");let o;t=="timeOfSolve"?o=r.getAll():console.log("wrong index!"),o.onsuccess=()=>{n(o.result)},o.onerror=a=>{console.log(a)}})}static delete(t){let n=this.getConnectionToStore("solves").delete(t);n.onsuccess=()=>{cp()},n.onerror=s=>{console.log(s)}}}ot(lm,"toUpdate",[]);const ll=lm;let iM="hsl(100, 90%, 50%)",sM="hsl(65, 90%, 50%)";class rM{constructor(t="timer-div"){this.div=document.getElementById(t),this.wait_to_start=.8,this.sTime=0,this.nTime=0,this.time=0,this.held=0,this.waited=!1,this.ready=!0,this.counting=!1,this.interval,document.addEventListener("keyup",e=>{this.div.classList.contains("hidden")||(e.code=="Space"&&!this.counting&&this.ready&&this.waited?(this.ready=!1,this.instructions.innerHTML="Press space",this.start()):this.ready||(cube.displayScramble(!0),this.ready=!0,this.instructions.innerHTML="Hold space"),e.code=="Space"&&(this.held=0,this.instructions.style.color="black"))}),document.addEventListener("keydown",e=>{console.log("keydown"),!this.div.classList.contains("hidden")&&(e.code=="Space"&&!this.counting&&(e.preventDefault(),this.instructions.style.color=sM,this.held||(this.held=new Date().getSeconds()),this.wait_to_start-(new Date().getSeconds()-this.held+new Date().getMilliseconds()/1e3)<=0?(this.instructions.innerHTML="Release",this.instructions.style.color=iM,this.waited=!0):this.waited=!1),this.counting&&e.code=="Space"&&(e.preventDefault(),this.stop(),this.waited=!1))}),this.place(this)}place(t){this.timer=document.createElement("p"),this.minutes=document.createElement("span"),this.seconds=document.createElement("span"),this.miliseconds=document.createElement("span"),this.instructions=document.createElement("span"),this.timer.classList.add("timer"),this.minutes.classList.add("minutes"),this.seconds.classList.add("seconds"),this.miliseconds.classList.add("miliseconds"),this.instructions.id="instructions-span",this.instructions.innerHTML="Hold Space",this.seconds.innerHTML="00",this.miliseconds.innerHTML="00",this.timer.appendChild(this.minutes),this.timer.appendChild(this.seconds),this.timer.appendChild(this.miliseconds),this.div.appendChild(this.timer),this.div.appendChild(this.instructions)}start(){this.counting||(this.sTime=0,this.nTime=0,this.time=0,this.ready=!1,this.counting=!0,this.sTime=new Date().getTime(),this.interval=setInterval(this.count,10,this))}display(t,e=0){e||(e=((t.nTime-t.sTime)/1e3).toFixed(2).toString().split("."));let n=Math.floor(e[0]/60),s=e[0]%60,r=parseInt(e[1]),o=n>0?`${n}:`:"",a=s>9?`${s}`:`0${s}`,l=r>9?`${r}`:`0${r}`;this.minutes.innerHTML=o,this.seconds.innerHTML=a,this.miliseconds.innerHTML=l,parseFloat(`${e[0]}.${e[1]}`)}count(t){t.nTime=new Date().getTime(),t.time=t.nTime-t.sTime,t.display(t)}stop(){this.counting&&(this.counting=!1,clearInterval(this.interval),this.log(this.time/1e3))}log(t){ll.add("sd",t)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="161",Ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oM=0,bd=1,aM=2,cm=1,lM=2,oi=3,Vi=0,en=1,Vn=2,Ui=0,lr=1,Md=2,yd=3,Sd=4,cM=5,us=100,hM=101,uM=102,Ed=103,Td=104,dM=200,fM=201,pM=202,mM=203,Ic=204,Uc=205,gM=206,_M=207,xM=208,vM=209,bM=210,MM=211,yM=212,SM=213,EM=214,TM=0,AM=1,wM=2,Ha=3,RM=4,CM=5,PM=6,LM=7,hm=0,DM=1,OM=2,Fi=0,IM=1,UM=2,FM=3,NM=4,kM=5,BM=6,um=300,xr=301,vr=302,Fc=303,Nc=304,cl=306,kc=1e3,Dn=1001,Bc=1002,Ke=1003,Ad=1004,Ur=1005,Qe=1006,Dl=1007,ps=1008,Ni=1009,zM=1010,HM=1011,Mh=1012,dm=1013,Pi=1014,ui=1015,go=1016,fm=1017,pm=1018,xs=1020,VM=1021,On=1023,GM=1024,WM=1025,vs=1026,br=1027,XM=1028,mm=1029,YM=1030,gm=1031,_m=1033,Ol=33776,Il=33777,Ul=33778,Fl=33779,wd=35840,Rd=35841,Cd=35842,Pd=35843,xm=36196,Ld=37492,Dd=37496,Od=37808,Id=37809,Ud=37810,Fd=37811,Nd=37812,kd=37813,Bd=37814,zd=37815,Hd=37816,Vd=37817,Gd=37818,Wd=37819,Xd=37820,Yd=37821,Nl=36492,jd=36494,qd=36495,jM=36283,$d=36284,Kd=36285,Zd=36286,vm=3e3,bs=3001,qM=3200,$M=3201,KM=0,ZM=1,Tn="",Ie="srgb",gi="srgb-linear",yh="display-p3",hl="display-p3-linear",Va="linear",oe="srgb",Ga="rec709",Wa="p3",Bs=7680,Jd=519,JM=512,QM=513,ty=514,bm=515,ey=516,ny=517,iy=518,sy=519,Qd=35044,tf="300 es",zc=1035,mi=2e3,Xa=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ef=1234567;const no=Math.PI/180,_o=180/Math.PI;function wr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function Sh(i,t){return(i%t+t)%t}function ry(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function oy(i,t,e){return i!==t?(e-i)/(t-i):0}function io(i,t,e){return(1-e)*i+e*t}function ay(i,t,e,n){return io(i,t,1-Math.exp(-e*n))}function ly(i,t=1){return t-Math.abs(Sh(i,t*2)-t)}function cy(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hy(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function uy(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dy(i,t){return i+Math.random()*(t-i)}function fy(i){return i*(.5-Math.random())}function py(i){i!==void 0&&(ef=i);let t=ef+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function my(i){return i*no}function gy(i){return i*_o}function Hc(i){return(i&i-1)===0&&i!==0}function _y(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ya(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xy(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vy={DEG2RAD:no,RAD2DEG:_o,generateUUID:wr,clamp:He,euclideanModulo:Sh,mapLinear:ry,inverseLerp:oy,lerp:io,damp:ay,pingpong:ly,smoothstep:cy,smootherstep:hy,randInt:uy,randFloat:dy,randFloatSpread:fy,seededRandom:py,degToRad:my,radToDeg:gy,isPowerOfTwo:Hc,ceilPowerOfTwo:_y,floorPowerOfTwo:Ya,setQuaternionFromProperEuler:xy,normalize:qe,denormalize:nr};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=s[0],p=s[3],m=s[6],v=s[1],x=s[4],b=s[7],S=s[2],E=s[5],y=s[8];return r[0]=o*g+a*v+l*S,r[3]=o*p+a*x+l*E,r[6]=o*m+a*b+l*y,r[1]=c*g+h*v+u*S,r[4]=c*p+h*x+u*E,r[7]=c*m+h*b+u*y,r[2]=d*g+f*v+_*S,r[5]=d*p+f*x+_*E,r[8]=d*m+f*b+_*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=e*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new Gt;function Mm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function by(){const i=ja("canvas");return i.style.display="block",i}const nf={};function cr(i){i in nf||(nf[i]=!0,console.warn(i))}const sf=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rf=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$o={[gi]:{transfer:Va,primaries:Ga,toReference:i=>i,fromReference:i=>i},[Ie]:{transfer:oe,primaries:Ga,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hl]:{transfer:Va,primaries:Wa,toReference:i=>i.applyMatrix3(rf),fromReference:i=>i.applyMatrix3(sf)},[yh]:{transfer:oe,primaries:Wa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(rf),fromReference:i=>i.applyMatrix3(sf).convertLinearToSRGB()}},My=new Set([gi,hl]),te={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!My.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=$o[t].toReference,s=$o[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return $o[i].primaries},getTransfer:function(i){return i===Tn?Va:$o[i].transfer}};function hr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zs;class ym{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zs===void 0&&(zs=ja("canvas")),zs.width=t.width,zs.height=t.height;const n=zs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hr(e[n]/255)*255):e[n]=hr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yy=0;class Sm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=wr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zl(s[o].image)):r.push(zl(s[o]))}else r=zl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ym.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sy=0;class nn extends Ds{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Dn,s=Dn,r=Qe,o=ps,a=On,l=Ni,c=nn.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=wr(),this.name="",this.source=new Sm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bs?Ie:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==um)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kc:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kc:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?bs:vm}set encoding(t){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===bs?Ie:Tn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=um;nn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,b=(f+1)/2,S=(m+1)/2,E=(h+d)/4,y=(u+g)/4,P=(_+p)/4;return x>b&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=y/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=P/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=y/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ey extends Ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bs?Ie:Tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends Ey{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Em extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ty extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let p=1-a;const m=l*d+c*f+h*_+u*g,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,m*v);p=Math.sin(p*E)/S,a=Math.sin(a*E)/S}const b=a*v;if(l=l*p+d*b,c=c*p+f*b,h=h*p+_*b,u=u*p+g*b,p===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(of.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(of.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hl.copy(this).projectOnVector(t),this.sub(Hl)}reflect(t){return this.sub(Hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hl=new B,of=new Gi;class Ro{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Zo.subVectors(this.max,Fr),Hs.subVectors(t.a,Fr),Vs.subVectors(t.b,Fr),Gs.subVectors(t.c,Fr),vi.subVectors(Vs,Hs),bi.subVectors(Gs,Vs),es.subVectors(Hs,Gs);let e=[0,-vi.z,vi.y,0,-bi.z,bi.y,0,-es.z,es.y,vi.z,0,-vi.x,bi.z,0,-bi.x,es.z,0,-es.x,-vi.y,vi.x,0,-bi.y,bi.x,0,-es.y,es.x,0];return!Vl(e,Hs,Vs,Gs,Zo)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,Hs,Vs,Gs,Zo))?!1:(Jo.crossVectors(vi,bi),e=[Jo.x,Jo.y,Jo.z],Vl(e,Hs,Vs,Gs,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new B,new B,new B,new B,new B,new B,new B,new B],Cn=new B,Ko=new Ro,Hs=new B,Vs=new B,Gs=new B,vi=new B,bi=new B,es=new B,Fr=new B,Zo=new B,Jo=new B,ns=new B;function Vl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ns.fromArray(i,r);const a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ay=new Ro,Nr=new B,Gl=new B;class Eh{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ay.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Gl)),this.expandByPoint(Nr.copy(t.center).sub(Gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new B,Wl=new B,Qo=new B,Mi=new B,Xl=new B,ta=new B,Yl=new B;class Tm{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wl.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Wl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=Mi.dot(this.direction),l=-Mi.dot(Qo),c=Mi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wl).addScaledVector(Qo,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){Xl.subVectors(e,t),ta.subVectors(n,t),Yl.crossVectors(Xl,ta);let o=this.direction.dot(Yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const l=a*this.direction.dot(ta.crossVectors(Mi,ta));if(l<0)return null;const c=a*this.direction.dot(Xl.cross(Mi));if(c<0||l+c>o)return null;const h=-a*Mi.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,_,g,p){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,_,g,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ws.setFromMatrixColumn(t,0).length(),r=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wy,t,Ry)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),yi.crossVectors(n,un),yi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),yi.crossVectors(n,un)),yi.normalize(),ea.crossVectors(un,yi),s[0]=yi.x,s[4]=ea.x,s[8]=un.x,s[1]=yi.y,s[5]=ea.y,s[9]=un.y,s[2]=yi.z,s[6]=ea.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],v=n[3],x=n[7],b=n[11],S=n[15],E=s[0],y=s[4],P=s[8],D=s[12],M=s[1],A=s[5],F=s[9],X=s[13],O=s[2],U=s[6],I=s[10],V=s[14],Y=s[3],q=s[7],$=s[11],Z=s[15];return r[0]=o*E+a*M+l*O+c*Y,r[4]=o*y+a*A+l*U+c*q,r[8]=o*P+a*F+l*I+c*$,r[12]=o*D+a*X+l*V+c*Z,r[1]=h*E+u*M+d*O+f*Y,r[5]=h*y+u*A+d*U+f*q,r[9]=h*P+u*F+d*I+f*$,r[13]=h*D+u*X+d*V+f*Z,r[2]=_*E+g*M+p*O+m*Y,r[6]=_*y+g*A+p*U+m*q,r[10]=_*P+g*F+p*I+m*$,r[14]=_*D+g*X+p*V+m*Z,r[3]=v*E+x*M+b*O+S*Y,r[7]=v*y+x*A+b*U+S*q,r[11]=v*P+x*F+b*I+S*$,r[15]=v*D+x*X+b*V+S*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+g*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],v=u*p*c-g*d*c+g*l*f-a*p*f-u*l*m+a*d*m,x=_*d*c-h*p*c-_*l*f+o*p*f+h*l*m-o*d*m,b=h*g*c-_*u*c+_*a*f-o*g*f-h*a*m+o*u*m,S=_*u*l-h*g*l-_*a*d+o*g*d+h*a*p-o*u*p,E=e*v+n*x+s*b+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/E;return t[0]=v*y,t[1]=(g*d*r-u*p*r-g*s*f+n*p*f+u*s*m-n*d*m)*y,t[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*m+n*l*m)*y,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*y,t[4]=x*y,t[5]=(h*p*r-_*d*r+_*s*f-e*p*f-h*s*m+e*d*m)*y,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*y,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*y,t[8]=b*y,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*m-e*u*m)*y,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*m+e*a*m)*y,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*y,t[12]=S*y,t[13]=(h*g*s-_*u*s+_*n*d-e*g*d-h*n*p+e*u*p)*y,t[14]=(_*a*s-o*g*s-_*n*l+e*g*l+o*n*p-e*a*p)*y,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*y,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,g=o*h,p=o*u,m=a*u,v=l*c,x=l*h,b=l*u,S=n.x,E=n.y,y=n.z;return s[0]=(1-(g+m))*S,s[1]=(f+b)*S,s[2]=(_-x)*S,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(_+x)*y,s[9]=(p-v)*y,s[10]=(1-(d+g))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ws.set(s[0],s[1],s[2]).length();const o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,_;if(a===mi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xa)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let _,g;if(a===mi)_=(o+r)*u,g=-2*u;else if(a===Xa)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ws=new B,Pn=new Fe,wy=new B(0,0,0),Ry=new B(1,1,1),yi=new B,ea=new B,un=new B,af=new Fe,lf=new Gi;class Co{constructor(t=0,e=0,n=0,s=Co.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(af,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lf.setFromEuler(this),this.setFromQuaternion(lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Co.DEFAULT_ORDER="XYZ";class Am{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cy=0;const cf=new B,Xs=new Gi,ei=new Fe,na=new B,kr=new B,Py=new B,Ly=new Gi,hf=new B(1,0,0),uf=new B(0,1,0),df=new B(0,0,1),Dy={type:"added"},Oy={type:"removed"};class sn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const t=new B,e=new Co,n=new Gi,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Gt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(hf,t)}rotateY(t){return this.rotateOnAxis(uf,t)}rotateZ(t){return this.rotateOnAxis(df,t)}translateOnAxis(t,e){return cf.copy(t).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hf,t)}translateY(t){return this.translateOnAxis(uf,t)}translateZ(t){return this.translateOnAxis(df,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(kr,na,this.up):ei.lookAt(na,kr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(ei),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oy)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,Py),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Ly,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}sn.DEFAULT_UP=new B(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new B,ni=new B,jl=new B,ii=new B,Ys=new B,js=new B,ff=new B,ql=new B,$l=new B,Kl=new B;class Gn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ni.subVectors(n,e),jl.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ni),l=Ln.dot(jl),c=ni.dot(ni),h=ni.dot(jl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ni.subVectors(t,e),Ln.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ys.subVectors(s,n),js.subVectors(r,n),ql.subVectors(t,n);const l=Ys.dot(ql),c=js.dot(ql);if(l<=0&&c<=0)return e.copy(n);$l.subVectors(t,s);const h=Ys.dot($l),u=js.dot($l);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ys,o);Kl.subVectors(t,r);const f=Ys.dot(Kl),_=js.dot(Kl);if(_>=0&&f<=_)return e.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(js,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return ff.subVectors(r,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(ff,a);const m=1/(p+g+d);return o=g*m,a=d*m,e.copy(n).addScaledVector(Ys,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Sh(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zl(o,r,t+1/3),this.g=Zl(o,r,t),this.b=Zl(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=wm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=Bl(t.r),this.g=Bl(t.g),this.b=Bl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return te.fromWorkingColorSpace(Be.copy(this),t),Math.round(He(Be.r*255,0,255))*65536+Math.round(He(Be.g*255,0,255))*256+Math.round(He(Be.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ie){te.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(ia);const n=io(Si.h,ia.h,e),s=io(Si.s,ia.s,e),r=io(Si.l,ia.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Qt;Qt.NAMES=wm;let Iy=0;class ul extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=lr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Uc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Th extends ul{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new B,sa=new kt;class qn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return cr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qd&&(t.usage=this.usage),t}}class Rm extends qn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cm extends qn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ms extends qn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uy=0;const yn=new Fe,Jl=new sn,qs=new B,dn=new Ro,Br=new Ro,Ce=new B;class Os extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mm(t)?Cm:Rm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ms(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(dn.min,Br.min),dn.expandByPoint(Ce),Ce.addVectors(dn.max,Br.max),dn.expandByPoint(Ce)):(dn.expandByPoint(Br.min),dn.expandByPoint(Br.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(t,c),Ce.add(qs)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<a;M++)c[M]=new B,h[M]=new B;const u=new B,d=new B,f=new B,_=new kt,g=new kt,p=new kt,m=new B,v=new B;function x(M,A,F){u.fromArray(s,M*3),d.fromArray(s,A*3),f.fromArray(s,F*3),_.fromArray(o,M*2),g.fromArray(o,A*2),p.fromArray(o,F*2),d.sub(u),f.sub(u),g.sub(_),p.sub(_);const X=1/(g.x*p.y-p.x*g.y);isFinite(X)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(X),v.copy(f).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(X),c[M].add(m),c[A].add(m),c[F].add(m),h[M].add(v),h[A].add(v),h[F].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let M=0,A=b.length;M<A;++M){const F=b[M],X=F.start,O=F.count;for(let U=X,I=X+O;U<I;U+=3)x(n[U+0],n[U+1],n[U+2])}const S=new B,E=new B,y=new B,P=new B;function D(M){y.fromArray(r,M*3),P.copy(y);const A=c[M];S.copy(A),S.sub(y.multiplyScalar(y.dot(A))).normalize(),E.crossVectors(P,A);const X=E.dot(h[M])<0?-1:1;l[M*4]=S.x,l[M*4+1]=S.y,l[M*4+2]=S.z,l[M*4+3]=X}for(let M=0,A=b.length;M<A;++M){const F=b[M],X=F.start,O=F.count;for(let U=X,I=X+O;U<I;U+=3)D(n[U+0]),D(n[U+1]),D(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new qn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Os,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pf=new Fe,is=new Tm,ra=new Eh,mf=new B,$s=new B,Ks=new B,Zs=new B,Ql=new B,oa=new B,aa=new kt,la=new kt,ca=new kt,gf=new B,_f=new B,xf=new B,ha=new B,ua=new B;class Xn extends sn{constructor(t=new Os,e=new Th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ql.fromBufferAttribute(u,t),o?oa.addScaledVector(Ql,h):oa.addScaledVector(Ql.sub(e),h))}e.add(oa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(ra.containsPoint(is.origin)===!1&&(is.intersectSphere(ra,mf)===null||is.origin.distanceToSquared(mf)>(t.far-t.near)**2))&&(pf.copy(r).invert(),is.copy(t.ray).applyMatrix4(pf),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,S=x;b<S;b+=3){const E=a.getX(b),y=a.getX(b+1),P=a.getX(b+2);s=da(this,m,t,n,c,h,u,E,y,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);s=da(this,o,t,n,c,h,u,v,x,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,S=x;b<S;b+=3){const E=b,y=b+1,P=b+2;s=da(this,m,t,n,c,h,u,E,y,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=p,x=p+1,b=p+2;s=da(this,o,t,n,c,h,u,v,x,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Fy(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;ua.copy(a),ua.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$s),i.getVertexPosition(l,Ks),i.getVertexPosition(c,Zs);const h=Fy(i,t,e,n,$s,Ks,Zs,ha);if(h){s&&(aa.fromBufferAttribute(s,a),la.fromBufferAttribute(s,l),ca.fromBufferAttribute(s,c),h.uv=Gn.getInterpolation(ha,$s,Ks,Zs,aa,la,ca,new kt)),r&&(aa.fromBufferAttribute(r,a),la.fromBufferAttribute(r,l),ca.fromBufferAttribute(r,c),h.uv1=Gn.getInterpolation(ha,$s,Ks,Zs,aa,la,ca,new kt),h.uv2=h.uv1),o&&(gf.fromBufferAttribute(o,a),_f.fromBufferAttribute(o,l),xf.fromBufferAttribute(o,c),h.normal=Gn.getInterpolation(ha,$s,Ks,Zs,gf,_f,xf,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new B,materialIndex:0};Gn.getNormal($s,Ks,Zs,u.normal),h.face=u}return h}class Po extends Os{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ms(c,3)),this.setAttribute("normal",new Ms(h,3)),this.setAttribute("uv",new Ms(u,2));function _(g,p,m,v,x,b,S,E,y,P,D){const M=b/y,A=S/P,F=b/2,X=S/2,O=E/2,U=y+1,I=P+1;let V=0,Y=0;const q=new B;for(let $=0;$<I;$++){const Z=$*A-X;for(let st=0;st<U;st++){const _t=st*M-F;q[g]=_t*v,q[p]=Z*x,q[m]=O,c.push(q.x,q.y,q.z),q[g]=0,q[p]=0,q[m]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(st/y),u.push(1-$/P),V+=1}}for(let $=0;$<P;$++)for(let Z=0;Z<y;Z++){const st=d+Z+U*$,_t=d+Z+U*($+1),H=d+(Z+1)+U*($+1),K=d+(Z+1)+U*$;l.push(st,_t,K),l.push(_t,H,K),Y+=6}a.addGroup(f,Y,D),f+=Y,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Mr(i[e]);for(const s in n)t[s]=n[s]}return t}function Ny(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pm(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}const ky={clone:Mr,merge:$e};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ul{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Ny(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lm extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new B,vf=new kt,bf=new kt;class En extends Lm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,vf,bf),e.subVectors(bf,vf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=-90,Qs=1;class Hy extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Js,Qs,t,e);s.layers=this.layers,this.add(s);const r=new En(Js,Qs,t,e);r.layers=this.layers,this.add(r);const o=new En(Js,Qs,t,e);o.layers=this.layers,this.add(o);const a=new En(Js,Qs,t,e);a.layers=this.layers,this.add(a);const l=new En(Js,Qs,t,e);l.layers=this.layers,this.add(l);const c=new En(Js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Dm extends nn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vy extends Rs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===bs?Ie:Tn),this.texture=new Dm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Po(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Ui});r.uniforms.tEquirect.value=e;const o=new Xn(s,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=Qe),new Hy(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const tc=new B,Gy=new B,Wy=new Gt;class Ti{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=tc.subVectors(n,e).cross(Gy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wy.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Eh,fa=new B;class Om{constructor(t=new Ti,e=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],g=s[10],p=s[11],m=s[12],v=s[13],x=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,p-f,b-m).normalize(),n[1].setComponents(l+r,d+c,p+f,b+m).normalize(),n[2].setComponents(l+o,d+h,p+_,b+v).normalize(),n[3].setComponents(l-o,d-h,p-_,b-v).normalize(),n[4].setComponents(l-a,d-u,p-g,b-x).normalize(),e===mi)n[5].setComponents(l+a,d+u,p+g,b+x).normalize();else if(e===Xa)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Im(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xy(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,f=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];e?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Lo extends Os{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const v=m*d-o;for(let x=0;x<c;x++){const b=x*u-r;_.push(b,-v,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+c*m,b=v+c*(m+1),S=v+1+c*(m+1),E=v+1+c*m;f.push(x,b,E),f.push(b,S,E)}this.setIndex(f),this.setAttribute("position",new Ms(_,3)),this.setAttribute("normal",new Ms(g,3)),this.setAttribute("uv",new Ms(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_S=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ES=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$S=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,aE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ME=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,QE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Yy,alphahash_pars_fragment:jy,alphamap_fragment:qy,alphamap_pars_fragment:$y,alphatest_fragment:Ky,alphatest_pars_fragment:Zy,aomap_fragment:Jy,aomap_pars_fragment:Qy,batching_pars_vertex:tS,batching_vertex:eS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:sS,iridescence_fragment:rS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:cS,clipping_planes_vertex:hS,color_fragment:uS,color_pars_fragment:dS,color_pars_vertex:fS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:_S,displacementmap_pars_vertex:xS,displacementmap_vertex:vS,emissivemap_fragment:bS,emissivemap_pars_fragment:MS,colorspace_fragment:yS,colorspace_pars_fragment:SS,envmap_fragment:ES,envmap_common_pars_fragment:TS,envmap_pars_fragment:AS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:BS,envmap_vertex:RS,fog_vertex:CS,fog_pars_vertex:PS,fog_fragment:LS,fog_pars_fragment:DS,gradientmap_pars_fragment:OS,lightmap_fragment:IS,lightmap_pars_fragment:US,lights_lambert_fragment:FS,lights_lambert_pars_fragment:NS,lights_pars_begin:kS,lights_toon_fragment:zS,lights_toon_pars_fragment:HS,lights_phong_fragment:VS,lights_phong_pars_fragment:GS,lights_physical_fragment:WS,lights_physical_pars_fragment:XS,lights_fragment_begin:YS,lights_fragment_maps:jS,lights_fragment_end:qS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:JS,map_fragment:QS,map_pars_fragment:tE,map_particle_fragment:eE,map_particle_pars_fragment:nE,metalnessmap_fragment:iE,metalnessmap_pars_fragment:sE,morphcolor_vertex:rE,morphnormal_vertex:oE,morphtarget_pars_vertex:aE,morphtarget_vertex:lE,normal_fragment_begin:cE,normal_fragment_maps:hE,normal_pars_fragment:uE,normal_pars_vertex:dE,normal_vertex:fE,normalmap_pars_fragment:pE,clearcoat_normal_fragment_begin:mE,clearcoat_normal_fragment_maps:gE,clearcoat_pars_fragment:_E,iridescence_pars_fragment:xE,opaque_fragment:vE,packing:bE,premultiplied_alpha_fragment:ME,project_vertex:yE,dithering_fragment:SE,dithering_pars_fragment:EE,roughnessmap_fragment:TE,roughnessmap_pars_fragment:AE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:RE,shadowmap_vertex:CE,shadowmask_pars_fragment:PE,skinbase_vertex:LE,skinning_pars_vertex:DE,skinning_vertex:OE,skinnormal_vertex:IE,specularmap_fragment:UE,specularmap_pars_fragment:FE,tonemapping_fragment:NE,tonemapping_pars_fragment:kE,transmission_fragment:BE,transmission_pars_fragment:zE,uv_pars_fragment:HE,uv_pars_vertex:VE,uv_vertex:GE,worldpos_vertex:WE,background_vert:XE,background_frag:YE,backgroundCube_vert:jE,backgroundCube_frag:qE,cube_vert:$E,cube_frag:KE,depth_vert:ZE,depth_frag:JE,distanceRGBA_vert:QE,distanceRGBA_frag:tT,equirect_vert:eT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:sT,meshbasic_vert:rT,meshbasic_frag:oT,meshlambert_vert:aT,meshlambert_frag:lT,meshmatcap_vert:cT,meshmatcap_frag:hT,meshnormal_vert:uT,meshnormal_frag:dT,meshphong_vert:fT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:_T,meshtoon_frag:xT,points_vert:vT,points_frag:bT,shadow_vert:MT,shadow_frag:yT,sprite_vert:ST,sprite_frag:ET},at={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Hn={basic:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:$e([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:$e([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:$e([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:$e([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:$e([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:$e([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:$e([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:$e([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:$e([at.common,at.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:$e([at.lights,at.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Hn.physical={uniforms:$e([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const pa={r:0,b:0,g:0};function TT(i,t,e,n,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===cl)?(h===void 0&&(h=new Xn(new Po(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Mr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=te.getTransfer(x.colorSpace)!==oe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xn(new Lo(2,2),new Wi({name:"BackgroundMaterial",uniforms:Mr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(pa,Pm(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function AT(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(O,U,I,V,Y){let q=!1;if(o){const $=g(V,I,U);c!==$&&(c=$,f(c.object)),q=m(O,V,I,Y),q&&v(O,V,I,Y)}else{const $=U.wireframe===!0;(c.geometry!==V.id||c.program!==I.id||c.wireframe!==$)&&(c.geometry=V.id,c.program=I.id,c.wireframe=$,q=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,P(O,U,I,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,U,I){const V=I.wireframe===!0;let Y=a[O.id];Y===void 0&&(Y={},a[O.id]=Y);let q=Y[U.id];q===void 0&&(q={},Y[U.id]=q);let $=q[V];return $===void 0&&($=p(d()),q[V]=$),$}function p(O){const U=[],I=[],V=[];for(let Y=0;Y<s;Y++)U[Y]=0,I[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:V,object:O,attributes:{},index:null}}function m(O,U,I,V){const Y=c.attributes,q=U.attributes;let $=0;const Z=I.getAttributes();for(const st in Z)if(Z[st].location>=0){const H=Y[st];let K=q[st];if(K===void 0&&(st==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),st==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;$++}return c.attributesNum!==$||c.index!==V}function v(O,U,I,V){const Y={},q=U.attributes;let $=0;const Z=I.getAttributes();for(const st in Z)if(Z[st].location>=0){let H=q[st];H===void 0&&(st==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),st==="instanceColor"&&O.instanceColor&&(H=O.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),Y[st]=K,$++}c.attributes=Y,c.attributesNum=$,c.index=V}function x(){const O=c.newAttributes;for(let U=0,I=O.length;U<I;U++)O[U]=0}function b(O){S(O,0)}function S(O,U){const I=c.newAttributes,V=c.enabledAttributes,Y=c.attributeDivisors;I[O]=1,V[O]===0&&(i.enableVertexAttribArray(O),V[O]=1),Y[O]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,U),Y[O]=U)}function E(){const O=c.newAttributes,U=c.enabledAttributes;for(let I=0,V=U.length;I<V;I++)U[I]!==O[I]&&(i.disableVertexAttribArray(I),U[I]=0)}function y(O,U,I,V,Y,q,$){$===!0?i.vertexAttribIPointer(O,U,I,Y,q):i.vertexAttribPointer(O,U,I,V,Y,q)}function P(O,U,I,V){if(n.isWebGL2===!1&&(O.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const Y=V.attributes,q=I.getAttributes(),$=U.defaultAttributeValues;for(const Z in q){const st=q[Z];if(st.location>=0){let _t=Y[Z];if(_t===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(_t=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(_t=O.instanceColor)),_t!==void 0){const H=_t.normalized,K=_t.itemSize,ht=e.get(_t);if(ht===void 0)continue;const Et=ht.buffer,At=ht.type,pt=ht.bytesPerElement,jt=n.isWebGL2===!0&&(At===i.INT||At===i.UNSIGNED_INT||_t.gpuType===dm);if(_t.isInterleavedBufferAttribute){const Lt=_t.data,k=Lt.stride,Ee=_t.offset;if(Lt.isInstancedInterleavedBuffer){for(let yt=0;yt<st.locationSize;yt++)S(st.location+yt,Lt.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let yt=0;yt<st.locationSize;yt++)b(st.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let yt=0;yt<st.locationSize;yt++)y(st.location+yt,K/st.locationSize,At,H,k*pt,(Ee+K/st.locationSize*yt)*pt,jt)}else{if(_t.isInstancedBufferAttribute){for(let Lt=0;Lt<st.locationSize;Lt++)S(st.location+Lt,_t.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Lt=0;Lt<st.locationSize;Lt++)b(st.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Lt=0;Lt<st.locationSize;Lt++)y(st.location+Lt,K/st.locationSize,At,H,K*pt,K/st.locationSize*Lt*pt,jt)}}else if($!==void 0){const H=$[Z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(st.location,H);break;case 3:i.vertexAttrib3fv(st.location,H);break;case 4:i.vertexAttrib4fv(st.location,H);break;default:i.vertexAttrib1fv(st.location,H)}}}}E()}function D(){F();for(const O in a){const U=a[O];for(const I in U){const V=U[I];for(const Y in V)_(V[Y].object),delete V[Y];delete U[I]}delete a[O]}}function M(O){if(a[O.id]===void 0)return;const U=a[O.id];for(const I in U){const V=U[I];for(const Y in V)_(V[Y].object),delete V[Y];delete U[I]}delete a[O.id]}function A(O){for(const U in a){const I=a[U];if(I[O.id]===void 0)continue;const V=I[O.id];for(const Y in V)_(V[Y].object),delete V[Y];delete I[O.id]}}function F(){X(),h=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:X,dispose:D,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:b,disableUnusedAttributes:E}}function wT(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,_;if(s)f=i,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function RT(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=o||t.has("OES_texture_float"),S=x&&b,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:E}}function CT(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ti,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,x=v*4;let b=m.clippingState||null;l.value=b,b=h(_,d,x,f);for(let S=0;S!==x;++S)b[S]=e[S];m.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,b=f;x!==g;++x,b+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function PT(i){let t=new WeakMap;function e(o,a){return a===Fc?o.mapping=xr:a===Nc&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fc||a===Nc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vy(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class LT extends Lm{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,Mf=[.125,.215,.35,.446,.526,.582],ds=20,ec=new LT,yf=new Qt;let nc=null,ic=0,sc=0;const cs=(1+Math.sqrt(5))/2,tr=1/cs,Sf=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,cs,tr),new B(0,cs,-tr),new B(tr,0,cs),new B(-tr,0,cs),new B(cs,tr,0),new B(-cs,tr,0)];class Ef{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nc,ic,sc),t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:go,format:On,colorSpace:gi,depthBuffer:!1},s=Tf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DT(r)),this._blurMaterial=OT(r,t,e)}return s}_compileMaterial(t){const e=new Xn(this._lodPlanes[0],t);this._renderer.compile(e,ec)}_sceneToCubeUV(t,e,n,s){const a=new En(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yf),h.toneMapping=Fi,h.autoClear=!1;const f=new Th({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new Xn(new Po,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(yf),g=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;ma(s,v*x,m>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xr||t.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ma(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ec)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sf[(s-1)%Sf.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xn(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ds-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):ds;p>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ds}`);const m=[];let v=0;for(let y=0;y<ds;++y){const P=y/g,D=Math.exp(-P*P/2);m.push(D),y===0?v+=D:y<p&&(v+=2*D)}for(let y=0;y<m.length;y++)m[y]=m[y]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const b=this._sizeLods[s],S=3*b*(s>x-ir?s-x+ir:0),E=4*(this._cubeSize-b);ma(e,S,E,3*b,2*b),l.setRenderTarget(e),l.render(u,ec)}}function DT(i){const t=[],e=[],n=[];let s=i;const r=i-ir+1+Mf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ir?l=Mf[o-i+ir-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,p=2,m=1,v=new Float32Array(g*_*f),x=new Float32Array(p*_*f),b=new Float32Array(m*_*f);for(let E=0;E<f;E++){const y=E%3*2/3-1,P=E>2?0:-1,D=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];v.set(D,g*_*E),x.set(d,p*_*E);const M=[E,E,E,E,E,E];b.set(M,m*_*E)}const S=new Os;S.setAttribute("position",new qn(v,g)),S.setAttribute("uv",new qn(x,p)),S.setAttribute("faceIndex",new qn(b,m)),t.push(S),s>ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tf(i,t,e){const n=new Rs(i,t,e);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function OT(i,t,e){const n=new Float32Array(ds),s=new B(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Af(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function wf(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IT(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fc||l===Nc,h=l===xr||l===vr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ef(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ef(i));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function UT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function FT(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,b=v.length;x<b;x+=3){const S=v[x+0],E=v[x+1],y=v[x+2];d.push(S,E,E,y,y,S)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const S=x+0,E=x+1,y=x+2;d.push(S,E,E,y,y,S)}}else return;const p=new(Mm(d)?Cm:Rm)(d,1);p.version=g;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function NT(i,t,e,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,_){i.drawElements(r,_,a,f*l),e.update(_,r,1)}function u(f,_,g){if(g===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,_,a,f*l,g),e.update(_,r,g)}function d(f,_,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(f[m]/l,_[m]);else{p.multiDrawElementsWEBGL(r,_,0,a,f,0,g);let m=0;for(let v=0;v<g;v++)m+=_[v];e.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function kT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function BT(i,t){return i[0]-t[0]}function zT(i,t){return Math.abs(t[1])-Math.abs(i[1])}function HT(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new Ue,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let U=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var f=U;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let D=0;x===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let M=h.attributes.position.count*D,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const F=new Float32Array(M*A*4*g),X=new Em(F,M,A,g);X.type=ui,X.needsUpdate=!0;const O=D*4;for(let I=0;I<g;I++){const V=E[I],Y=y[I],q=P[I],$=M*A*4*I;for(let Z=0;Z<V.count;Z++){const st=Z*O;x===!0&&(o.fromBufferAttribute(V,Z),F[$+st+0]=o.x,F[$+st+1]=o.y,F[$+st+2]=o.z,F[$+st+3]=0),b===!0&&(o.fromBufferAttribute(Y,Z),F[$+st+4]=o.x,F[$+st+5]=o.y,F[$+st+6]=o.z,F[$+st+7]=0),S===!0&&(o.fromBufferAttribute(q,Z),F[$+st+8]=o.x,F[$+st+9]=o.y,F[$+st+10]=o.z,F[$+st+11]=q.itemSize===4?o.w:1)}}p={count:g,texture:X,size:new kt(M,A)},r.set(h,p),h.addEventListener("dispose",U)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const v=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];n[h.id]=g}for(let b=0;b<_;b++){const S=g[b];S[0]=b,S[1]=d[b]}g.sort(zT);for(let b=0;b<8;b++)b<_&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(BT);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let v=0;for(let b=0;b<8;b++){const S=a[b],E=S[0],y=S[1];E!==Number.MAX_SAFE_INTEGER&&y?(p&&h.getAttribute("morphTarget"+b)!==p[E]&&h.setAttribute("morphTarget"+b,p[E]),m&&h.getAttribute("morphNormal"+b)!==m[E]&&h.setAttribute("morphNormal"+b,m[E]),s[b]=y,v+=y):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function VT(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Um extends nn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:vs,h!==vs&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Pi),n===void 0&&h===br&&(n=xs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fm=new nn,Nm=new Um(1,1);Nm.compareFunction=bm;const km=new Em,Bm=new Ty,zm=new Dm,Rf=[],Cf=[],Pf=new Float32Array(16),Lf=new Float32Array(9),Df=new Float32Array(4);function Rr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Rf[s];if(r===void 0&&(r=new Float32Array(s),Rf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function dl(i,t){let e=Cf[t];e===void 0&&(e=new Int32Array(t),Cf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function GT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function WT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function XT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function YT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function jT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),we(e,n)}}function qT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Lf.set(n),i.uniformMatrix3fv(this.addr,!1,Lf),we(e,n)}}function $T(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Pf.set(n),i.uniformMatrix4fv(this.addr,!1,Pf),we(e,n)}}function KT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ZT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function JT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function QT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function tA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function eA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function nA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function iA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function sA(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Nm:Fm;e.setTexture2D(t||r,s)}function rA(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bm,s)}function oA(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zm,s)}function aA(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||km,s)}function lA(i){switch(i){case 5126:return GT;case 35664:return WT;case 35665:return XT;case 35666:return YT;case 35674:return jT;case 35675:return qT;case 35676:return $T;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return JT;case 35669:case 35673:return QT;case 5125:return tA;case 36294:return eA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return aA}}function cA(i,t){i.uniform1fv(this.addr,t)}function hA(i,t){const e=Rr(t,this.size,2);i.uniform2fv(this.addr,e)}function uA(i,t){const e=Rr(t,this.size,3);i.uniform3fv(this.addr,e)}function dA(i,t){const e=Rr(t,this.size,4);i.uniform4fv(this.addr,e)}function fA(i,t){const e=Rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pA(i,t){const e=Rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mA(i,t){const e=Rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gA(i,t){i.uniform1iv(this.addr,t)}function _A(i,t){i.uniform2iv(this.addr,t)}function xA(i,t){i.uniform3iv(this.addr,t)}function vA(i,t){i.uniform4iv(this.addr,t)}function bA(i,t){i.uniform1uiv(this.addr,t)}function MA(i,t){i.uniform2uiv(this.addr,t)}function yA(i,t){i.uniform3uiv(this.addr,t)}function SA(i,t){i.uniform4uiv(this.addr,t)}function EA(i,t,e){const n=this.cache,s=t.length,r=dl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fm,r[o])}function TA(i,t,e){const n=this.cache,s=t.length,r=dl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bm,r[o])}function AA(i,t,e){const n=this.cache,s=t.length,r=dl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zm,r[o])}function wA(i,t,e){const n=this.cache,s=t.length,r=dl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||km,r[o])}function RA(i){switch(i){case 5126:return cA;case 35664:return hA;case 35665:return uA;case 35666:return dA;case 35674:return fA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return xA;case 35669:case 35673:return vA;case 5125:return bA;case 36294:return MA;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return wA}}class CA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lA(e.type)}}class PA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=RA(e.type)}}class LA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function Of(i,t){i.seq.push(t),i.map[t.id]=t}function DA(i,t,e){const n=i.name,s=n.length;for(rc.lastIndex=0;;){const r=rc.exec(n),o=rc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Of(e,c===void 0?new CA(a,i,t):new PA(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new LA(a),Of(e,u)),e=u}}}class wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);DA(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function If(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const OA=37297;let IA=0;function UA(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function FA(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Wa&&e===Ga?n="LinearDisplayP3ToLinearSRGB":t===Ga&&e===Wa&&(n="LinearSRGBToLinearDisplayP3"),i){case gi:case hl:return[n,"LinearTransferOETF"];case Ie:case yh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Uf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+UA(i.getShaderSource(t),o)}else return s}function NA(i,t){const e=FA(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kA(i,t){let e;switch(t){case IM:e="Linear";break;case UM:e="Reinhard";break;case FM:e="OptimizedCineon";break;case NM:e="ACESFilmic";break;case BM:e="AgX";break;case kM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function BA(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function zA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function HA(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function VA(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function sr(i){return i!==""}function Ff(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(i){return i.replace(GA,XA)}const WA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XA(i,t){let e=Bt[t];if(e===void 0){const n=WA.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}const YA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(i){return i.replace(YA,jA)}function jA(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qA(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lM?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function $A(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case vr:t="ENVMAP_TYPE_CUBE";break;case cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KA(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function ZA(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hm:t="ENVMAP_BLENDING_MULTIPLY";break;case DM:t="ENVMAP_BLENDING_MIX";break;case OM:t="ENVMAP_BLENDING_ADD";break}return t}function JA(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function QA(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qA(e),c=$A(e),h=KA(e),u=ZA(e),d=JA(e),f=e.isWebGL2?"":BA(e),_=zA(e),g=HA(r),p=s.createProgram();let m,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),v.length>0&&(v+=`
`)):(m=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),v=[f,Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Fi?kA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,NA("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=Vc(o),o=Ff(o,e),o=Nf(o,e),a=Vc(a),a=Ff(a,e),a=Nf(a,e),o=kf(o),a=kf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+m+o,S=x+v+a,E=If(s,s.VERTEX_SHADER,b),y=If(s,s.FRAGMENT_SHADER,S);s.attachShader(p,E),s.attachShader(p,y),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function P(F){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(p).trim(),O=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(y).trim();let I=!0,V=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,E,y);else{const Y=Uf(s,E,"vertex"),q=Uf(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+Y+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(O===""||U==="")&&(V=!1);V&&(F.diagnostics={runnable:I,programLog:X,vertexShader:{log:O,prefix:m},fragmentShader:{log:U,prefix:v}})}s.deleteShader(E),s.deleteShader(y),D=new wa(s,p),M=VA(s,p)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,OA)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=IA++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=y,this}let tw=0;class ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nw(t),e.set(t,n)),n}}class nw{constructor(t){this.id=tw++,this.code=t,this.usedTimes=0}}function iw(i,t,e,n,s,r,o){const a=new Am,l=new ew,c=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,A,F,X,O){const U=X.fog,I=O.geometry,V=M.isMeshStandardMaterial?X.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),q=Y&&Y.mapping===cl?Y.image.height:null,$=g[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,st=Z!==void 0?Z.length:0;let _t=0;I.morphAttributes.position!==void 0&&(_t=1),I.morphAttributes.normal!==void 0&&(_t=2),I.morphAttributes.color!==void 0&&(_t=3);let H,K,ht,Et;if($){const Wt=Hn[$];H=Wt.vertexShader,K=Wt.fragmentShader}else H=M.vertexShader,K=M.fragmentShader,l.update(M),ht=l.getVertexShaderID(M),Et=l.getFragmentShaderID(M);const At=i.getRenderTarget(),pt=O.isInstancedMesh===!0,jt=O.isBatchedMesh===!0,Lt=!!M.map,k=!!M.matcap,Ee=!!Y,yt=!!M.aoMap,Rt=!!M.lightMap,xt=!!M.bumpMap,re=!!M.normalMap,Dt=!!M.displacementMap,R=!!M.emissiveMap,T=!!M.metalnessMap,z=!!M.roughnessMap,it=M.anisotropy>0,J=M.clearcoat>0,et=M.iridescence>0,mt=M.sheen>0,lt=M.transmission>0,ft=it&&!!M.anisotropyMap,Tt=J&&!!M.clearcoatMap,Ot=J&&!!M.clearcoatNormalMap,Q=J&&!!M.clearcoatRoughnessMap,Zt=et&&!!M.iridescenceMap,zt=et&&!!M.iridescenceThicknessMap,Ct=mt&&!!M.sheenColorMap,bt=mt&&!!M.sheenRoughnessMap,ut=!!M.specularMap,Ft=!!M.specularColorMap,L=!!M.specularIntensityMap,rt=lt&&!!M.transmissionMap,ct=lt&&!!M.thicknessMap,Mt=!!M.gradientMap,C=!!M.alphaMap,nt=M.alphaTest>0,tt=!!M.alphaHash,gt=!!M.extensions;let St=Fi;M.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(St=i.toneMapping);const $t={isWebGL2:u,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:K,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:Et,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:jt,instancing:pt,instancingColor:pt&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:gi,alphaToCoverage:!!M.alphaToCoverage,map:Lt,matcap:k,envMap:Ee,envMapMode:Ee&&Y.mapping,envMapCubeUVHeight:q,aoMap:yt,lightMap:Rt,bumpMap:xt,normalMap:re,displacementMap:f&&Dt,emissiveMap:R,normalMapObjectSpace:re&&M.normalMapType===ZM,normalMapTangentSpace:re&&M.normalMapType===KM,metalnessMap:T,roughnessMap:z,anisotropy:it,anisotropyMap:ft,clearcoat:J,clearcoatMap:Tt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Q,iridescence:et,iridescenceMap:Zt,iridescenceThicknessMap:zt,sheen:mt,sheenColorMap:Ct,sheenRoughnessMap:bt,specularMap:ut,specularColorMap:Ft,specularIntensityMap:L,transmission:lt,transmissionMap:rt,thicknessMap:ct,gradientMap:Mt,opaque:M.transparent===!1&&M.blending===lr&&M.alphaToCoverage===!1,alphaMap:C,alphaTest:nt,alphaHash:tt,combine:M.combine,mapUv:Lt&&p(M.map.channel),aoMapUv:yt&&p(M.aoMap.channel),lightMapUv:Rt&&p(M.lightMap.channel),bumpMapUv:xt&&p(M.bumpMap.channel),normalMapUv:re&&p(M.normalMap.channel),displacementMapUv:Dt&&p(M.displacementMap.channel),emissiveMapUv:R&&p(M.emissiveMap.channel),metalnessMapUv:T&&p(M.metalnessMap.channel),roughnessMapUv:z&&p(M.roughnessMap.channel),anisotropyMapUv:ft&&p(M.anisotropyMap.channel),clearcoatMapUv:Tt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(M.sheenRoughnessMap.channel),specularMapUv:ut&&p(M.specularMap.channel),specularColorMapUv:Ft&&p(M.specularColorMap.channel),specularIntensityMapUv:L&&p(M.specularIntensityMap.channel),transmissionMapUv:rt&&p(M.transmissionMap.channel),thicknessMapUv:ct&&p(M.thicknessMap.channel),alphaMapUv:C&&p(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(re||it),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(Lt||C),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:_t,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:gt&&M.extensions.derivatives===!0,extensionFragDepth:gt&&M.extensions.fragDepth===!0,extensionDrawBuffers:gt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:gt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function v(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)A.push(F),A.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(x(A,M),b(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function b(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),M.push(a.mask)}function S(M){const A=g[M.type];let F;if(A){const X=Hn[A];F=ky.clone(X.uniforms)}else F=M.uniforms;return F}function E(M,A){let F;for(let X=0,O=h.length;X<O;X++){const U=h[X];if(U.cacheKey===A){F=U,++F.usedTimes;break}}return F===void 0&&(F=new QA(i,A,M,r),h.push(F)),F}function y(M){if(--M.usedTimes===0){const A=h.indexOf(M);h[A]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:S,acquireProgram:E,releaseProgram:y,releaseShaderCache:P,programs:h,dispose:D}}function sw(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function rw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,_,g,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function a(u,d,f,_,g,p){const m=o(u,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,_,g,p){const m=o(u,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||rw),n.length>1&&n.sort(d||zf),s.length>1&&s.sort(d||zf)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ow(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hf,i.set(n,[o])):s>=r.length?(o=new Hf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function aw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Qt};break;case"SpotLight":e={position:new B,direction:new B,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function lw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cw=0;function hw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function uw(i,t){const e=new aw,n=lw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new B);const r=new B,o=new Fe,a=new Fe;function l(h,u){let d=0,f=0,_=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let g=0,p=0,m=0,v=0,x=0,b=0,S=0,E=0,y=0,P=0,D=0;h.sort(hw);const M=u===!0?Math.PI:1;for(let F=0,X=h.length;F<X;F++){const O=h[F],U=O.color,I=O.intensity,V=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=U.r*I*M,f+=U.g*I*M,_+=U.b*I*M;else if(O.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(O.sh.coefficients[q],I);D++}else if(O.isDirectionalLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const $=O.shadow,Z=n.get(O);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.directionalShadow[g]=Z,s.directionalShadowMap[g]=Y,s.directionalShadowMatrix[g]=O.shadow.matrix,b++}s.directional[g]=q,g++}else if(O.isSpotLight){const q=e.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(U).multiplyScalar(I*M),q.distance=V,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,s.spot[m]=q;const $=O.shadow;if(O.map&&(s.spotLightMap[y]=O.map,y++,$.updateMatrices(O),O.castShadow&&P++),s.spotLightMatrix[m]=$.matrix,O.castShadow){const Z=n.get(O);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.spotShadow[m]=Z,s.spotShadowMap[m]=Y,E++}m++}else if(O.isRectAreaLight){const q=e.get(O);q.color.copy(U).multiplyScalar(I),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),s.rectArea[v]=q,v++}else if(O.isPointLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*M),q.distance=O.distance,q.decay=O.decay,O.castShadow){const $=O.shadow,Z=n.get(O);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,s.pointShadow[p]=Z,s.pointShadowMap[p]=Y,s.pointShadowMatrix[p]=O.shadow.matrix,S++}s.point[p]=q,p++}else if(O.isHemisphereLight){const q=e.get(O);q.skyColor.copy(O.color).multiplyScalar(I*M),q.groundColor.copy(O.groundColor).multiplyScalar(I*M),s.hemi[x]=q,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==g||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==v||A.hemiLength!==x||A.numDirectionalShadows!==b||A.numPointShadows!==S||A.numSpotShadows!==E||A.numSpotMaps!==y||A.numLightProbes!==D)&&(s.directional.length=g,s.spot.length=m,s.rectArea.length=v,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=E+y-P,s.spotLightMap.length=y,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=D,A.directionalLength=g,A.pointLength=p,A.spotLength=m,A.rectAreaLength=v,A.hemiLength=x,A.numDirectionalShadows=b,A.numPointShadows=S,A.numSpotShadows=E,A.numSpotMaps=y,A.numLightProbes=D,s.version=cw++)}function c(h,u){let d=0,f=0,_=0,g=0,p=0;const m=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const b=h[v];if(b.isDirectionalLight){const S=s.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(b.isSpotLight){const S=s.spot[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(b.isRectAreaLight){const S=s.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(b.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=s.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=s.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function Vf(i,t){const e=new uw(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dw(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Vf(i,t),e.set(r,[l])):o>=a.length?(l=new Vf(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class fw extends ul{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pw extends ul{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _w(i,t,e){let n=new Om;const s=new kt,r=new kt,o=new Ue,a=new fw({depthPacking:$M}),l=new pw,c={},h=e.maxTextureSize,u={[Vi]:en,[en]:Vi,[Vn]:Vn},d=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:mw,fragmentShader:gw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Os;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cm;let m=this.type;this.render=function(E,y,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const D=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ui),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=m!==oi&&this.type===oi,O=m===oi&&this.type!==oi;for(let U=0,I=E.length;U<I;U++){const V=E[U],Y=V.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const q=Y.getFrameExtents();if(s.multiply(q),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||O===!0){const Z=this.type!==oi?{minFilter:Ke,magFilter:Ke}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rs(s.x,s.y,Z),Y.map.texture.name=V.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const $=Y.getViewportCount();for(let Z=0;Z<$;Z++){const st=Y.getViewport(Z);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),F.viewport(o),Y.updateMatrices(V,Z),n=Y.getFrustum(),b(y,P,Y.camera,V,this.type)}Y.isPointLightShadow!==!0&&this.type===oi&&v(Y,P),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,M,A)};function v(E,y){const P=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rs(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(y,null,P,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(y,null,P,f,g,null)}function x(E,y,P,D){let M=null;const A=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const F=M.uuid,X=y.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let U=O[X];U===void 0&&(U=M.clone(),O[X]=U,y.addEventListener("dispose",S)),M=U}if(M.visible=y.visible,M.wireframe=y.wireframe,D===oi?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:u[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=P}return M}function b(E,y,P,D,M){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===oi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const X=t.update(E),O=E.material;if(Array.isArray(O)){const U=X.groups;for(let I=0,V=U.length;I<V;I++){const Y=U[I],q=O[Y.materialIndex];if(q&&q.visible){const $=x(E,q,D,M);E.onBeforeShadow(i,E,y,P,X,$,Y),i.renderBufferDirect(P,null,X,$,E,Y),E.onAfterShadow(i,E,y,P,X,$,Y)}}}else if(O.visible){const U=x(E,O,D,M);E.onBeforeShadow(i,E,y,P,X,U,null),i.renderBufferDirect(P,null,X,U,E,null),E.onAfterShadow(i,E,y,P,X,U,null)}}const F=E.children;for(let X=0,O=F.length;X<O;X++)b(F[X],y,P,D,M)}function S(E){E.target.removeEventListener("dispose",S);for(const P in c){const D=c[P],M=E.target.uuid;M in D&&(D[M].dispose(),delete D[M])}}}function xw(i,t,e){const n=e.isWebGL2;function s(){let C=!1;const nt=new Ue;let tt=null;const gt=new Ue(0,0,0,0);return{setMask:function(St){tt!==St&&!C&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){C=St},setClear:function(St,$t,Wt,ee,Oe){Oe===!0&&(St*=ee,$t*=ee,Wt*=ee),nt.set(St,$t,Wt,ee),gt.equals(nt)===!1&&(i.clearColor(St,$t,Wt,ee),gt.copy(nt))},reset:function(){C=!1,tt=null,gt.set(-1,0,0,0)}}}function r(){let C=!1,nt=null,tt=null,gt=null;return{setTest:function(St){St?pt(i.DEPTH_TEST):jt(i.DEPTH_TEST)},setMask:function(St){nt!==St&&!C&&(i.depthMask(St),nt=St)},setFunc:function(St){if(tt!==St){switch(St){case TM:i.depthFunc(i.NEVER);break;case AM:i.depthFunc(i.ALWAYS);break;case wM:i.depthFunc(i.LESS);break;case Ha:i.depthFunc(i.LEQUAL);break;case RM:i.depthFunc(i.EQUAL);break;case CM:i.depthFunc(i.GEQUAL);break;case PM:i.depthFunc(i.GREATER);break;case LM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=St}},setLocked:function(St){C=St},setClear:function(St){gt!==St&&(i.clearDepth(St),gt=St)},reset:function(){C=!1,nt=null,tt=null,gt=null}}}function o(){let C=!1,nt=null,tt=null,gt=null,St=null,$t=null,Wt=null,ee=null,Oe=null;return{setTest:function(Kt){C||(Kt?pt(i.STENCIL_TEST):jt(i.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!C&&(i.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,xe,je){(tt!==Kt||gt!==xe||St!==je)&&(i.stencilFunc(Kt,xe,je),tt=Kt,gt=xe,St=je)},setOp:function(Kt,xe,je){($t!==Kt||Wt!==xe||ee!==je)&&(i.stencilOp(Kt,xe,je),$t=Kt,Wt=xe,ee=je)},setLocked:function(Kt){C=Kt},setClear:function(Kt){Oe!==Kt&&(i.clearStencil(Kt),Oe=Kt)},reset:function(){C=!1,nt=null,tt=null,gt=null,St=null,$t=null,Wt=null,ee=null,Oe=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},_=new WeakMap,g=[],p=null,m=!1,v=null,x=null,b=null,S=null,E=null,y=null,P=null,D=new Qt(0,0,0),M=0,A=!1,F=null,X=null,O=null,U=null,I=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=q>=2);let Z=null,st={};const _t=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),K=new Ue().fromArray(_t),ht=new Ue().fromArray(H);function Et(C,nt,tt,gt){const St=new Uint8Array(4),$t=i.createTexture();i.bindTexture(C,$t),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<tt;Wt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(nt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(nt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return $t}const At={};At[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(i.DEPTH_TEST),l.setFunc(Ha),Dt(!1),R(bd),pt(i.CULL_FACE),xt(Ui);function pt(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function jt(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function Lt(C,nt){return f[C]!==nt?(i.bindFramebuffer(C,nt),f[C]=nt,n&&(C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt)),!0):!1}function k(C,nt){let tt=g,gt=!1;if(C)if(tt=_.get(nt),tt===void 0&&(tt=[],_.set(nt,tt)),C.isWebGLMultipleRenderTargets){const St=C.texture;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,Wt=St.length;$t<Wt;$t++)tt[$t]=i.COLOR_ATTACHMENT0+$t;tt.length=St.length,gt=!0}}else tt[0]!==i.COLOR_ATTACHMENT0&&(tt[0]=i.COLOR_ATTACHMENT0,gt=!0);else tt[0]!==i.BACK&&(tt[0]=i.BACK,gt=!0);gt&&(e.isWebGL2?i.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function Ee(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const yt={[us]:i.FUNC_ADD,[hM]:i.FUNC_SUBTRACT,[uM]:i.FUNC_REVERSE_SUBTRACT};if(n)yt[Ed]=i.MIN,yt[Td]=i.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(yt[Ed]=C.MIN_EXT,yt[Td]=C.MAX_EXT)}const Rt={[dM]:i.ZERO,[fM]:i.ONE,[pM]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[bM]:i.SRC_ALPHA_SATURATE,[xM]:i.DST_COLOR,[gM]:i.DST_ALPHA,[mM]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[vM]:i.ONE_MINUS_DST_COLOR,[_M]:i.ONE_MINUS_DST_ALPHA,[MM]:i.CONSTANT_COLOR,[yM]:i.ONE_MINUS_CONSTANT_COLOR,[SM]:i.CONSTANT_ALPHA,[EM]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(C,nt,tt,gt,St,$t,Wt,ee,Oe,Kt){if(C===Ui){m===!0&&(jt(i.BLEND),m=!1);return}if(m===!1&&(pt(i.BLEND),m=!0),C!==cM){if(C!==v||Kt!==A){if((x!==us||E!==us)&&(i.blendEquation(i.FUNC_ADD),x=us,E=us),Kt)switch(C){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Md:i.blendFunc(i.ONE,i.ONE);break;case yd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Md:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,S=null,y=null,P=null,D.set(0,0,0),M=0,v=C,A=Kt}return}St=St||nt,$t=$t||tt,Wt=Wt||gt,(nt!==x||St!==E)&&(i.blendEquationSeparate(yt[nt],yt[St]),x=nt,E=St),(tt!==b||gt!==S||$t!==y||Wt!==P)&&(i.blendFuncSeparate(Rt[tt],Rt[gt],Rt[$t],Rt[Wt]),b=tt,S=gt,y=$t,P=Wt),(ee.equals(D)===!1||Oe!==M)&&(i.blendColor(ee.r,ee.g,ee.b,Oe),D.copy(ee),M=Oe),v=C,A=!1}function re(C,nt){C.side===Vn?jt(i.CULL_FACE):pt(i.CULL_FACE);let tt=C.side===en;nt&&(tt=!tt),Dt(tt),C.blending===lr&&C.transparent===!1?xt(Ui):xt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const gt=C.stencilWrite;c.setTest(gt),gt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):jt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(C){F!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),F=C)}function R(C){C!==oM?(pt(i.CULL_FACE),C!==X&&(C===bd?i.cullFace(i.BACK):C===aM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):jt(i.CULL_FACE),X=C}function T(C){C!==O&&(Y&&i.lineWidth(C),O=C)}function z(C,nt,tt){C?(pt(i.POLYGON_OFFSET_FILL),(U!==nt||I!==tt)&&(i.polygonOffset(nt,tt),U=nt,I=tt)):jt(i.POLYGON_OFFSET_FILL)}function it(C){C?pt(i.SCISSOR_TEST):jt(i.SCISSOR_TEST)}function J(C){C===void 0&&(C=i.TEXTURE0+V-1),Z!==C&&(i.activeTexture(C),Z=C)}function et(C,nt,tt){tt===void 0&&(Z===null?tt=i.TEXTURE0+V-1:tt=Z);let gt=st[tt];gt===void 0&&(gt={type:void 0,texture:void 0},st[tt]=gt),(gt.type!==C||gt.texture!==nt)&&(Z!==tt&&(i.activeTexture(tt),Z=tt),i.bindTexture(C,nt||At[C]),gt.type=C,gt.texture=nt)}function mt(){const C=st[Z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ft(C){K.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function L(C){ht.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ht.copy(C))}function rt(C,nt){let tt=u.get(nt);tt===void 0&&(tt=new WeakMap,u.set(nt,tt));let gt=tt.get(C);gt===void 0&&(gt=i.getUniformBlockIndex(nt,C.name),tt.set(C,gt))}function ct(C,nt){const gt=u.get(nt).get(C);h.get(nt)!==gt&&(i.uniformBlockBinding(nt,gt,C.__bindingPointIndex),h.set(nt,gt))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,st={},f={},_=new WeakMap,g=[],p=null,m=!1,v=null,x=null,b=null,S=null,E=null,y=null,P=null,D=new Qt(0,0,0),M=0,A=!1,F=null,X=null,O=null,U=null,I=null,K.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pt,disable:jt,bindFramebuffer:Lt,drawBuffers:k,useProgram:Ee,setBlending:xt,setMaterial:re,setFlipSided:Dt,setCullFace:R,setLineWidth:T,setPolygonOffset:z,setScissorTest:it,activeTexture:J,bindTexture:et,unbindTexture:mt,compressedTexImage2D:lt,compressedTexImage3D:ft,texImage2D:bt,texImage3D:ut,updateUBOMapping:rt,uniformBlockBinding:ct,texStorage2D:zt,texStorage3D:Ct,texSubImage2D:Tt,texSubImage3D:Ot,compressedTexSubImage2D:Q,compressedTexSubImage3D:Zt,scissor:Ft,viewport:L,reset:Mt}}function vw(i,t,e,n,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return f?new OffscreenCanvas(R,T):ja("canvas")}function g(R,T,z,it){let J=1;if((R.width>it||R.height>it)&&(J=it/Math.max(R.width,R.height)),J<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const et=T?Ya:Math.floor,mt=et(J*R.width),lt=et(J*R.height);u===void 0&&(u=_(mt,lt));const ft=z?_(mt,lt):u;return ft.width=mt,ft.height=lt,ft.getContext("2d").drawImage(R,0,0,mt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+mt+"x"+lt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Hc(R.width)&&Hc(R.height)}function m(R){return a?!1:R.wrapS!==Dn||R.wrapT!==Dn||R.minFilter!==Ke&&R.minFilter!==Qe}function v(R,T){return R.generateMipmaps&&T&&R.minFilter!==Ke&&R.minFilter!==Qe}function x(R){i.generateMipmap(R)}function b(R,T,z,it,J=!1){if(a===!1)return T;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=T;if(T===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8)),T===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),T===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8)),T===i.RGBA){const mt=J?Va:te.getTransfer(it);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=mt===oe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(R,T,z){return v(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==Qe?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function E(R){return R===Ke||R===Ad||R===Ur?i.NEAREST:i.LINEAR}function y(R){const T=R.target;T.removeEventListener("dispose",y),D(T),T.isVideoTexture&&h.delete(T)}function P(R){const T=R.target;T.removeEventListener("dispose",P),A(T)}function D(R){const T=n.get(R);if(T.__webglInit===void 0)return;const z=R.source,it=d.get(z);if(it){const J=it[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(R),Object.keys(it).length===0&&d.delete(z)}n.remove(R)}function M(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const z=R.source,it=d.get(z);delete it[T.__cacheKey],o.memory.textures--}function A(R){const T=R.texture,z=n.get(R),it=n.get(T);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(z.__webglFramebuffer[J]))for(let et=0;et<z.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(z.__webglFramebuffer[J][et]);else i.deleteFramebuffer(z.__webglFramebuffer[J]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[J])}else{if(Array.isArray(z.__webglFramebuffer))for(let J=0;J<z.__webglFramebuffer.length;J++)i.deleteFramebuffer(z.__webglFramebuffer[J]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let J=0;J<z.__webglColorRenderbuffer.length;J++)z.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[J]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,et=T.length;J<et;J++){const mt=n.get(T[J]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(T[J])}n.remove(T),n.remove(R)}let F=0;function X(){F=0}function O(){const R=F;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function U(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function I(R,T){const z=n.get(R);if(R.isVideoTexture&&re(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const it=R.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,R,T);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+T)}function V(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+T)}function Y(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,T);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+T)}function q(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ht(z,R,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+T)}const $={[kc]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Bc]:i.MIRRORED_REPEAT},Z={[Ke]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Dl]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},st={[JM]:i.NEVER,[sy]:i.ALWAYS,[QM]:i.LESS,[bm]:i.LEQUAL,[ty]:i.EQUAL,[iy]:i.GEQUAL,[ey]:i.GREATER,[ny]:i.NOTEQUAL};function _t(R,T,z){if(T.type===ui&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Qe||T.magFilter===Dl||T.magFilter===Ur||T.magFilter===ps||T.minFilter===Qe||T.minFilter===Dl||T.minFilter===Ur||T.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),z?(i.texParameteri(R,i.TEXTURE_WRAP_S,$[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[T.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==Dn||T.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,E(T.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Ke&&T.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,st[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ke||T.minFilter!==Ur&&T.minFilter!==ps||T.type===ui&&t.has("OES_texture_float_linear")===!1||a===!1&&T.type===go&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(R,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function H(R,T){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",y));const it=T.source;let J=d.get(it);J===void 0&&(J={},d.set(it,J));const et=U(T);if(et!==R.__cacheKey){J[et]===void 0&&(J[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[et].usedTimes++;const mt=J[R.__cacheKey];mt!==void 0&&(J[R.__cacheKey].usedTimes--,mt.usedTimes===0&&M(T)),R.__cacheKey=et,R.__webglTexture=J[et].texture}return z}function K(R,T,z){let it=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=i.TEXTURE_3D);const J=H(R,T),et=T.source;e.bindTexture(it,R.__webglTexture,i.TEXTURE0+z);const mt=n.get(et);if(et.version!==mt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const lt=te.getPrimaries(te.workingColorSpace),ft=T.colorSpace===Tn?null:te.getPrimaries(T.colorSpace),Tt=T.colorSpace===Tn||lt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ot=m(T)&&p(T.image)===!1;let Q=g(T.image,Ot,!1,s.maxTextureSize);Q=Dt(T,Q);const Zt=p(Q)||a,zt=r.convert(T.format,T.colorSpace);let Ct=r.convert(T.type),bt=b(T.internalFormat,zt,Ct,T.colorSpace,T.isVideoTexture);_t(it,T,Zt);let ut;const Ft=T.mipmaps,L=a&&T.isVideoTexture!==!0&&bt!==xm,rt=mt.__version===void 0||J===!0,ct=et.dataReady,Mt=S(T,Q,Zt);if(T.isDepthTexture)bt=i.DEPTH_COMPONENT,a?T.type===ui?bt=i.DEPTH_COMPONENT32F:T.type===Pi?bt=i.DEPTH_COMPONENT24:T.type===xs?bt=i.DEPTH24_STENCIL8:bt=i.DEPTH_COMPONENT16:T.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===vs&&bt===i.DEPTH_COMPONENT&&T.type!==Mh&&T.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Pi,Ct=r.convert(T.type)),T.format===br&&bt===i.DEPTH_COMPONENT&&(bt=i.DEPTH_STENCIL,T.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=xs,Ct=r.convert(T.type))),rt&&(L?e.texStorage2D(i.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,zt,Ct,null));else if(T.isDataTexture)if(Ft.length>0&&Zt){L&&rt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Ft[0].width,Ft[0].height);for(let C=0,nt=Ft.length;C<nt;C++)ut=Ft[C],L?ct&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,ut.width,ut.height,zt,Ct,ut.data):e.texImage2D(i.TEXTURE_2D,C,bt,ut.width,ut.height,0,zt,Ct,ut.data);T.generateMipmaps=!1}else L?(rt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Q.width,Q.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,zt,Ct,Q.data)):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,zt,Ct,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){L&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,Ft[0].width,Ft[0].height,Q.depth);for(let C=0,nt=Ft.length;C<nt;C++)ut=Ft[C],T.format!==On?zt!==null?L?ct&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ut.width,ut.height,Q.depth,zt,ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,bt,ut.width,ut.height,Q.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ut.width,ut.height,Q.depth,zt,Ct,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,C,bt,ut.width,ut.height,Q.depth,0,zt,Ct,ut.data)}else{L&&rt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Ft[0].width,Ft[0].height);for(let C=0,nt=Ft.length;C<nt;C++)ut=Ft[C],T.format!==On?zt!==null?L?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,ut.width,ut.height,zt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,C,bt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ct&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,ut.width,ut.height,zt,Ct,ut.data):e.texImage2D(i.TEXTURE_2D,C,bt,ut.width,ut.height,0,zt,Ct,ut.data)}else if(T.isDataArrayTexture)L?(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,Q.width,Q.height,Q.depth),ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,zt,Ct,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,zt,Ct,Q.data);else if(T.isData3DTexture)L?(rt&&e.texStorage3D(i.TEXTURE_3D,Mt,bt,Q.width,Q.height,Q.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,zt,Ct,Q.data)):e.texImage3D(i.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,zt,Ct,Q.data);else if(T.isFramebufferTexture){if(rt)if(L)e.texStorage2D(i.TEXTURE_2D,Mt,bt,Q.width,Q.height);else{let C=Q.width,nt=Q.height;for(let tt=0;tt<Mt;tt++)e.texImage2D(i.TEXTURE_2D,tt,bt,C,nt,0,zt,Ct,null),C>>=1,nt>>=1}}else if(Ft.length>0&&Zt){L&&rt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Ft[0].width,Ft[0].height);for(let C=0,nt=Ft.length;C<nt;C++)ut=Ft[C],L?ct&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,zt,Ct,ut):e.texImage2D(i.TEXTURE_2D,C,bt,zt,Ct,ut);T.generateMipmaps=!1}else L?(rt&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Q.width,Q.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Ct,Q)):e.texImage2D(i.TEXTURE_2D,0,bt,zt,Ct,Q);v(T,Zt)&&x(it),mt.__version=et.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ht(R,T,z){if(T.image.length!==6)return;const it=H(R,T),J=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const et=n.get(J);if(J.version!==et.__version||it===!0){e.activeTexture(i.TEXTURE0+z);const mt=te.getPrimaries(te.workingColorSpace),lt=T.colorSpace===Tn?null:te.getPrimaries(T.colorSpace),ft=T.colorSpace===Tn||mt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Tt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ot=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let C=0;C<6;C++)!Tt&&!Ot?Q[C]=g(T.image[C],!1,!0,s.maxCubemapSize):Q[C]=Ot?T.image[C].image:T.image[C],Q[C]=Dt(T,Q[C]);const Zt=Q[0],zt=p(Zt)||a,Ct=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),ut=b(T.internalFormat,Ct,bt,T.colorSpace),Ft=a&&T.isVideoTexture!==!0,L=et.__version===void 0||it===!0,rt=J.dataReady;let ct=S(T,Zt,zt);_t(i.TEXTURE_CUBE_MAP,T,zt);let Mt;if(Tt){Ft&&L&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ut,Zt.width,Zt.height);for(let C=0;C<6;C++){Mt=Q[C].mipmaps;for(let nt=0;nt<Mt.length;nt++){const tt=Mt[nt];T.format!==On?Ct!==null?Ft?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,0,0,tt.width,tt.height,Ct,tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,ut,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,0,0,tt.width,tt.height,Ct,bt,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,ut,tt.width,tt.height,0,Ct,bt,tt.data)}}}else{Mt=T.mipmaps,Ft&&L&&(Mt.length>0&&ct++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ut,Q[0].width,Q[0].height));for(let C=0;C<6;C++)if(Ot){Ft?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Q[C].width,Q[C].height,Ct,bt,Q[C].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ut,Q[C].width,Q[C].height,0,Ct,bt,Q[C].data);for(let nt=0;nt<Mt.length;nt++){const gt=Mt[nt].image[C].image;Ft?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,0,0,gt.width,gt.height,Ct,bt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,ut,gt.width,gt.height,0,Ct,bt,gt.data)}}else{Ft?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Ct,bt,Q[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ut,Ct,bt,Q[C]);for(let nt=0;nt<Mt.length;nt++){const tt=Mt[nt];Ft?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,0,0,Ct,bt,tt.image[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,ut,Ct,bt,tt.image[C])}}}v(T,zt)&&x(i.TEXTURE_CUBE_MAP),et.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Et(R,T,z,it,J,et){const mt=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),ft=b(z.internalFormat,mt,lt,z.colorSpace);if(!n.get(T).__hasExternalTextures){const Ot=Math.max(1,T.width>>et),Q=Math.max(1,T.height>>et);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,et,ft,Ot,Q,T.depth,0,mt,lt,null):e.texImage2D(J,et,ft,Ot,Q,0,mt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),xt(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,J,n.get(z).__webglTexture,0,Rt(T)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,J,n.get(z).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(R,T,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let it=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||xt(T)){const J=T.depthTexture;J&&J.isDepthTexture&&(J.type===ui?it=i.DEPTH_COMPONENT32F:J.type===Pi&&(it=i.DEPTH_COMPONENT24));const et=Rt(T);xt(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,it,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,it,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const it=Rt(T);z&&xt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,T.width,T.height):xt(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const it=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0;J<it.length;J++){const et=it[J],mt=r.convert(et.format,et.colorSpace),lt=r.convert(et.type),ft=b(et.internalFormat,mt,lt,et.colorSpace),Tt=Rt(T);z&&xt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ft,T.width,T.height):xt(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ft,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);const it=n.get(T.depthTexture).__webglTexture,J=Rt(T);if(T.depthTexture.format===vs)xt(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(T.depthTexture.format===br)xt(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function jt(R){const T=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");pt(T.__webglFramebuffer,R)}else if(z){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]=i.createRenderbuffer(),At(T.__webglDepthbuffer[it],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),At(T.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,T,z){const it=n.get(R);T!==void 0&&Et(it.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&jt(R)}function k(R){const T=R.texture,z=n.get(R),it=n.get(T);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=T.version,o.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,et=R.isWebGLMultipleRenderTargets===!0,mt=p(R)||a;if(J){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let ft=0;ft<T.mipmaps.length;ft++)z.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else z.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)z.__webglFramebuffer[lt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(et)if(s.drawBuffers){const lt=R.texture;for(let ft=0,Tt=lt.length;ft<Tt;ft++){const Ot=n.get(lt[ft]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xt(R)===!1){const lt=et?T:[T];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<lt.length;ft++){const Tt=lt[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const Ot=r.convert(Tt.format,Tt.colorSpace),Q=r.convert(Tt.type),Zt=b(Tt.internalFormat,Ot,Q,Tt.colorSpace,R.isXRRenderTarget===!0),zt=Rt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Zt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),At(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),_t(i.TEXTURE_CUBE_MAP,T,mt);for(let lt=0;lt<6;lt++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Et(z.__webglFramebuffer[lt][ft],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else Et(z.__webglFramebuffer[lt],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);v(T,mt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const lt=R.texture;for(let ft=0,Tt=lt.length;ft<Tt;ft++){const Ot=lt[ft],Q=n.get(Ot);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),_t(i.TEXTURE_2D,Ot,mt),Et(z.__webglFramebuffer,R,Ot,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),v(Ot,mt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,it.__webglTexture),_t(lt,T,mt),a&&T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Et(z.__webglFramebuffer[ft],R,T,i.COLOR_ATTACHMENT0,lt,ft);else Et(z.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,lt,0);v(T,mt)&&x(lt),e.unbindTexture()}R.depthBuffer&&jt(R)}function Ee(R){const T=p(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let it=0,J=z.length;it<J;it++){const et=z[it];if(v(et,T)){const mt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(et).__webglTexture;e.bindTexture(mt,lt),x(mt),e.unbindTexture()}}}function yt(R){if(a&&R.samples>0&&xt(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,it=R.height;let J=i.COLOR_BUFFER_BIT;const et=[],mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(R),ft=R.isWebGLMultipleRenderTargets===!0;if(ft)for(let Tt=0;Tt<T.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){et.push(i.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&et.push(mt);const Ot=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Ot===!1&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ft&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]),Ot===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[mt])),ft){const Q=n.get(T[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,it,0,0,z,it,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Tt=0;Tt<T.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]);const Ot=n.get(T[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Rt(R){return Math.min(s.maxSamples,R.samples)}function xt(R){const T=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(R){const T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function Dt(R,T){const z=R.colorSpace,it=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===zc||z!==gi&&z!==Tn&&(te.getTransfer(z)===oe?a===!1?t.has("EXT_sRGB")===!0&&it===On?(R.format=zc,R.minFilter=Qe,R.generateMipmaps=!1):T=ym.sRGBToLinear(T):(it!==On||J!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}this.allocateTextureUnit=O,this.resetTextureUnits=X,this.setTexture2D=I,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Lt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=xt}function bw(i,t,e){const n=e.isWebGL2;function s(r,o=Tn){let a;const l=te.getTransfer(o);if(r===Ni)return i.UNSIGNED_BYTE;if(r===fm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===pm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===zM)return i.BYTE;if(r===HM)return i.SHORT;if(r===Mh)return i.UNSIGNED_SHORT;if(r===dm)return i.INT;if(r===Pi)return i.UNSIGNED_INT;if(r===ui)return i.FLOAT;if(r===go)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===VM)return i.ALPHA;if(r===On)return i.RGBA;if(r===GM)return i.LUMINANCE;if(r===WM)return i.LUMINANCE_ALPHA;if(r===vs)return i.DEPTH_COMPONENT;if(r===br)return i.DEPTH_STENCIL;if(r===zc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===XM)return i.RED;if(r===mm)return i.RED_INTEGER;if(r===YM)return i.RG;if(r===gm)return i.RG_INTEGER;if(r===_m)return i.RGBA_INTEGER;if(r===Ol||r===Il||r===Ul||r===Fl)if(l===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===Rd||r===Cd||r===Pd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ld||r===Dd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ld)return l===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Dd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Od||r===Id||r===Ud||r===Fd||r===Nd||r===kd||r===Bd||r===zd||r===Hd||r===Vd||r===Gd||r===Wd||r===Xd||r===Yd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Od)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ud)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yd)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===jd||r===qd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Nl)return l===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jM||r===$d||r===Kd||r===Zd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Nl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$d)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Mw extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jr extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yw={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new Wi({extensions:{fragDepth:!0},vertexShader:Sw,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new Lo(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Aw extends Ds{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new Tw,p=e.getContextAttributes();let m=null,v=null;const x=[],b=[],S=new kt;let E=null;const y=new En;y.layers.enable(1),y.viewport=new Ue;const P=new En;P.layers.enable(2),P.viewport=new Ue;const D=[y,P],M=new Mw;M.layers.enable(1),M.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=x[H];return K===void 0&&(K=new oc,x[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=x[H];return K===void 0&&(K=new oc,x[H]=K),K.getGripSpace()},this.getHand=function(H){let K=x[H];return K===void 0&&(K=new oc,x[H]=K),K.getHandSpace()};function X(H){const K=b.indexOf(H.inputSource);if(K===-1)return;const ht=x[K];ht!==void 0&&(ht.update(H.inputSource,H.frame,c||o),ht.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",U);for(let H=0;H<x.length;H++){const K=b[H];K!==null&&(b[H]=null,x[H].disconnect(K))}A=null,F=null,g.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,v=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",O),s.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Rs(f.framebufferWidth,f.framebufferHeight,{format:On,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ht=null,Et=null;p.depth&&(Et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?br:vs,ht=p.stencil?xs:Pi);const At={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Rs(d.textureWidth,d.textureHeight,{format:On,type:Ni,depthTexture:new Um(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const pt=t.properties.get(v);pt.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(H){for(let K=0;K<H.removed.length;K++){const ht=H.removed[K],Et=b.indexOf(ht);Et>=0&&(b[Et]=null,x[Et].disconnect(ht))}for(let K=0;K<H.added.length;K++){const ht=H.added[K];let Et=b.indexOf(ht);if(Et===-1){for(let pt=0;pt<x.length;pt++)if(pt>=b.length){b.push(ht),Et=pt;break}else if(b[pt]===null){b[pt]=ht,Et=pt;break}if(Et===-1)break}const At=x[Et];At&&At.connect(ht)}}const I=new B,V=new B;function Y(H,K,ht){I.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(ht.matrixWorld);const Et=I.distanceTo(V),At=K.projectionMatrix.elements,pt=ht.projectionMatrix.elements,jt=At[14]/(At[10]-1),Lt=At[14]/(At[10]+1),k=(At[9]+1)/At[5],Ee=(At[9]-1)/At[5],yt=(At[8]-1)/At[0],Rt=(pt[8]+1)/pt[0],xt=jt*yt,re=jt*Rt,Dt=Et/(-yt+Rt),R=Dt*-yt;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(R),H.translateZ(Dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const T=jt+Dt,z=Lt+Dt,it=xt-R,J=re+(Et-R),et=k*Lt/z*T,mt=Ee*Lt/z*T;H.projectionMatrix.makePerspective(it,J,et,mt,T,z),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;g.texture!==null&&(H.near=g.depthNear,H.far=g.depthFar),M.near=P.near=y.near=H.near,M.far=P.far=y.far=H.far,(A!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,F=M.far,y.near=A,y.far=F,P.near=A,P.far=F,y.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const K=H.parent,ht=M.cameras;q(M,K);for(let Et=0;Et<ht.length;Et++)q(ht[Et],K);ht.length===2?Y(M,y,P):M.projectionMatrix.copy(y.projectionMatrix),$(H,M,K)};function $(H,K,ht){ht===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(ht.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=_o*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null};let Z=null;function st(H,K){if(h=K.getViewerPose(c||o),_=K,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Et=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,Et=!0);for(let pt=0;pt<ht.length;pt++){const jt=ht[pt];let Lt=null;if(f!==null)Lt=f.getViewport(jt);else{const Ee=u.getViewSubImage(d,jt);Lt=Ee.viewport,pt===0&&(t.setRenderTargetTextures(v,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(v))}let k=D[pt];k===void 0&&(k=new En,k.layers.enable(pt),k.viewport=new Ue,D[pt]=k),k.matrix.fromArray(jt.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(jt.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(M.matrix.copy(k.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Et===!0&&M.cameras.push(k)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const pt=u.getDepthInformation(ht[0]);pt&&pt.isValid&&pt.texture&&g.init(t,pt,s.renderState)}}for(let ht=0;ht<x.length;ht++){const Et=b[ht],At=x[ht];Et!==null&&At!==void 0&&At.update(Et,K,c||o)}g.render(t,M),Z&&Z(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const _t=new Im;_t.setAnimationLoop(st),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}}function ww(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Pm(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rw(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function c(v,x){let b=s[v.id];b===void 0&&(_(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",p));const S=x.program;n.updateUBOMapping(v,S);const E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){const x=u();v.__bindingPointIndex=x;const b=i.createBuffer(),S=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],b=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,y=b.length;E<y;E++){const P=Array.isArray(b[E])?b[E]:[b[E]];for(let D=0,M=P.length;D<M;D++){const A=P[D];if(f(A,E,D,S)===!0){const F=A.__offset,X=Array.isArray(A.value)?A.value:[A.value];let O=0;for(let U=0;U<X.length;U++){const I=X[U],V=g(I);typeof I=="number"||typeof I=="boolean"?(A.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,F+O,A.__data)):I.isMatrix3?(A.__data[0]=I.elements[0],A.__data[1]=I.elements[1],A.__data[2]=I.elements[2],A.__data[3]=0,A.__data[4]=I.elements[3],A.__data[5]=I.elements[4],A.__data[6]=I.elements[5],A.__data[7]=0,A.__data[8]=I.elements[6],A.__data[9]=I.elements[7],A.__data[10]=I.elements[8],A.__data[11]=0):(I.toArray(A.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,b,S){const E=v.value,y=x+"_"+b;if(S[y]===void 0)return typeof E=="number"||typeof E=="boolean"?S[y]=E:S[y]=E.clone(),!0;{const P=S[y];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return S[y]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(v){const x=v.uniforms;let b=0;const S=16;for(let y=0,P=x.length;y<P;y++){const D=Array.isArray(x[y])?x[y]:[x[y]];for(let M=0,A=D.length;M<A;M++){const F=D[M],X=Array.isArray(F.value)?F.value:[F.value];for(let O=0,U=X.length;O<U;O++){const I=X[O],V=g(I),Y=b%S;Y!==0&&S-Y<V.boundary&&(b+=S-Y),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=V.storage}}}const E=b%S;return E>0&&(b+=S-E),v.__size=b,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Hm{constructor(t={}){const{canvas:e=by(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;const x=this;let b=!1,S=0,E=0,y=null,P=-1,D=null;const M=new Ue,A=new Ue;let F=null;const X=new Qt(0);let O=0,U=e.width,I=e.height,V=1,Y=null,q=null;const $=new Ue(0,0,U,I),Z=new Ue(0,0,U,I);let st=!1;const _t=new Om;let H=!1,K=!1,ht=null;const Et=new Fe,At=new kt,pt=new B,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return y===null?V:1}let k=n;function Ee(w,N){for(let W=0;W<w.length;W++){const j=w[W],G=e.getContext(j,N);if(G!==null)return G}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bh}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",nt,!1),k===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),k=Ee(N,w),k===null)throw Ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let yt,Rt,xt,re,Dt,R,T,z,it,J,et,mt,lt,ft,Tt,Ot,Q,Zt,zt,Ct,bt,ut,Ft,L;function rt(){yt=new UT(k),Rt=new RT(k,yt,t),yt.init(Rt),ut=new bw(k,yt,Rt),xt=new xw(k,yt,Rt),re=new kT(k),Dt=new sw,R=new vw(k,yt,xt,Dt,Rt,ut,re),T=new PT(x),z=new IT(x),it=new Xy(k,Rt),Ft=new AT(k,yt,it,Rt),J=new FT(k,it,re,Ft),et=new VT(k,J,it,re),zt=new HT(k,Rt,R),Ot=new CT(Dt),mt=new iw(x,T,z,yt,Rt,Ft,Ot),lt=new ww(x,Dt),ft=new ow,Tt=new dw(yt,Rt),Zt=new TT(x,T,z,xt,et,d,l),Q=new _w(x,et,Rt),L=new Rw(k,re,Rt,xt),Ct=new wT(k,yt,re,Rt),bt=new NT(k,yt,re,Rt),re.programs=mt.programs,x.capabilities=Rt,x.extensions=yt,x.properties=Dt,x.renderLists=ft,x.shadowMap=Q,x.state=xt,x.info=re}rt();const ct=new Aw(x,k);this.xr=ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=yt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=yt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(U,I,!1))},this.getSize=function(w){return w.set(U,I)},this.setSize=function(w,N,W=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,I=N,e.width=Math.floor(w*V),e.height=Math.floor(N*V),W===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(U*V,I*V).floor()},this.setDrawingBufferSize=function(w,N,W){U=w,I=N,V=W,e.width=Math.floor(w*W),e.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,N,W,j){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,N,W,j),xt.viewport(M.copy($).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,N,W,j){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,N,W,j),xt.scissor(A.copy(Z).multiplyScalar(V).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){xt.setScissorTest(st=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(w=!0,N=!0,W=!0){let j=0;if(w){let G=!1;if(y!==null){const dt=y.texture.format;G=dt===_m||dt===gm||dt===mm}if(G){const dt=y.texture.type,vt=dt===Ni||dt===Pi||dt===Mh||dt===xs||dt===fm||dt===pm,wt=Zt.getClearColor(),Pt=Zt.getClearAlpha(),Ht=wt.r,It=wt.g,Nt=wt.b;vt?(f[0]=Ht,f[1]=It,f[2]=Nt,f[3]=Pt,k.clearBufferuiv(k.COLOR,0,f)):(_[0]=Ht,_[1]=It,_[2]=Nt,_[3]=Pt,k.clearBufferiv(k.COLOR,0,_))}else j|=k.COLOR_BUFFER_BIT}N&&(j|=k.DEPTH_BUFFER_BIT),W&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),ft.dispose(),Tt.dispose(),Dt.dispose(),T.dispose(),z.dispose(),et.dispose(),Ft.dispose(),L.dispose(),mt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Oe),ct.removeEventListener("sessionend",Kt),ht&&(ht.dispose(),ht=null),xe.stop()};function Mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=re.autoReset,N=Q.enabled,W=Q.autoUpdate,j=Q.needsUpdate,G=Q.type;rt(),re.autoReset=w,Q.enabled=N,Q.autoUpdate=W,Q.needsUpdate=j,Q.type=G}function nt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function tt(w){const N=w.target;N.removeEventListener("dispose",tt),gt(N)}function gt(w){St(w),Dt.remove(w)}function St(w){const N=Dt.get(w).programs;N!==void 0&&(N.forEach(function(W){mt.releaseProgram(W)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,j,G,dt){N===null&&(N=jt);const vt=G.isMesh&&G.matrixWorld.determinant()<0,wt=Wg(w,N,W,j,G);xt.setMaterial(j,vt);let Pt=W.index,Ht=1;if(j.wireframe===!0){if(Pt=J.getWireframeAttribute(W),Pt===void 0)return;Ht=2}const It=W.drawRange,Nt=W.attributes.position;let ve=It.start*Ht,hn=(It.start+It.count)*Ht;dt!==null&&(ve=Math.max(ve,dt.start*Ht),hn=Math.min(hn,(dt.start+dt.count)*Ht)),Pt!==null?(ve=Math.max(ve,0),hn=Math.min(hn,Pt.count)):Nt!=null&&(ve=Math.max(ve,0),hn=Math.min(hn,Nt.count));const Re=hn-ve;if(Re<0||Re===1/0)return;Ft.setup(G,j,wt,W,Pt);let Zn,ue=Ct;if(Pt!==null&&(Zn=it.get(Pt),ue=bt,ue.setIndex(Zn)),G.isMesh)j.wireframe===!0?(xt.setLineWidth(j.wireframeLinewidth*Lt()),ue.setMode(k.LINES)):ue.setMode(k.TRIANGLES);else if(G.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),xt.setLineWidth(Vt*Lt()),G.isLineSegments?ue.setMode(k.LINES):G.isLineLoop?ue.setMode(k.LINE_LOOP):ue.setMode(k.LINE_STRIP)}else G.isPoints?ue.setMode(k.POINTS):G.isSprite&&ue.setMode(k.TRIANGLES);if(G.isBatchedMesh)ue.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ue.renderInstances(ve,Re,G.count);else if(W.isInstancedBufferGeometry){const Vt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gl=Math.min(W.instanceCount,Vt);ue.renderInstances(ve,Re,gl)}else ue.render(ve,Re)};function $t(w,N,W){w.transparent===!0&&w.side===Vn&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Io(w,N,W),w.side=Vi,w.needsUpdate=!0,Io(w,N,W),w.side=Vn):Io(w,N,W)}this.compile=function(w,N,W=null){W===null&&(W=w),p=Tt.get(W),p.init(),v.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==W&&w.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(x._useLegacyLights);const j=new Set;return w.traverse(function(G){const dt=G.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){const wt=dt[vt];$t(wt,W,G),j.add(wt)}else $t(dt,W,G),j.add(dt)}),v.pop(),p=null,j},this.compileAsync=function(w,N,W=null){const j=this.compile(w,N,W);return new Promise(G=>{function dt(){if(j.forEach(function(vt){Dt.get(vt).currentProgram.isReady()&&j.delete(vt)}),j.size===0){G(w);return}setTimeout(dt,10)}yt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Wt=null;function ee(w){Wt&&Wt(w)}function Oe(){xe.stop()}function Kt(){xe.start()}const xe=new Im;xe.setAnimationLoop(ee),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(w){Wt=w,ct.setAnimationLoop(w),w===null?xe.stop():xe.start()},ct.addEventListener("sessionstart",Oe),ct.addEventListener("sessionend",Kt),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(N),N=ct.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,y),p=Tt.get(w,v.length),p.init(),v.push(p),Et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_t.setFromProjectionMatrix(Et),K=this.localClippingEnabled,H=Ot.init(this.clippingPlanes,K),g=ft.get(w,m.length),g.init(),m.push(g),je(w,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Y,q),this.info.render.frame++,H===!0&&Ot.beginShadows();const W=p.state.shadowsArray;if(Q.render(W,w,N),H===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&Zt.render(g,w),p.setupLights(x._useLegacyLights),N.isArrayCamera){const j=N.cameras;for(let G=0,dt=j.length;G<dt;G++){const vt=j[G];Wh(g,w,vt,vt.viewport)}}else Wh(g,w,N);y!==null&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(x,w,N),Ft.resetDefaultState(),P=-1,D=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function je(w,N,W,j){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_t.intersectsSprite(w)){j&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const vt=et.update(w),wt=w.material;wt.visible&&g.push(w,vt,wt,W,pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_t.intersectsObject(w))){const vt=et.update(w),wt=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),pt.copy(vt.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(wt)){const Pt=vt.groups;for(let Ht=0,It=Pt.length;Ht<It;Ht++){const Nt=Pt[Ht],ve=wt[Nt.materialIndex];ve&&ve.visible&&g.push(w,vt,ve,W,pt.z,Nt)}}else wt.visible&&g.push(w,vt,wt,W,pt.z,null)}}const dt=w.children;for(let vt=0,wt=dt.length;vt<wt;vt++)je(dt[vt],N,W,j)}function Wh(w,N,W,j){const G=w.opaque,dt=w.transmissive,vt=w.transparent;p.setupLightsView(W),H===!0&&Ot.setGlobalState(x.clippingPlanes,W),dt.length>0&&Gg(G,dt,N,W),j&&xt.viewport(M.copy(j)),G.length>0&&Oo(G,N,W),dt.length>0&&Oo(dt,N,W),vt.length>0&&Oo(vt,N,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Gg(w,N,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const dt=Rt.isWebGL2;ht===null&&(ht=new Rs(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?go:Ni,minFilter:ps,samples:dt?4:0})),x.getDrawingBufferSize(At),dt?ht.setSize(At.x,At.y):ht.setSize(Ya(At.x),Ya(At.y));const vt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(X),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();const wt=x.toneMapping;x.toneMapping=Fi,Oo(w,W,j),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht);let Pt=!1;for(let Ht=0,It=N.length;Ht<It;Ht++){const Nt=N[Ht],ve=Nt.object,hn=Nt.geometry,Re=Nt.material,Zn=Nt.group;if(Re.side===Vn&&ve.layers.test(j.layers)){const ue=Re.side;Re.side=en,Re.needsUpdate=!0,Xh(ve,W,j,hn,Re,Zn),Re.side=ue,Re.needsUpdate=!0,Pt=!0}}Pt===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht)),x.setRenderTarget(vt),x.setClearColor(X,O),x.toneMapping=wt}function Oo(w,N,W){const j=N.isScene===!0?N.overrideMaterial:null;for(let G=0,dt=w.length;G<dt;G++){const vt=w[G],wt=vt.object,Pt=vt.geometry,Ht=j===null?vt.material:j,It=vt.group;wt.layers.test(W.layers)&&Xh(wt,N,W,Pt,Ht,It)}}function Xh(w,N,W,j,G,dt){w.onBeforeRender(x,N,W,j,G,dt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(x,N,W,j,w,dt),G.transparent===!0&&G.side===Vn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,x.renderBufferDirect(W,N,j,G,w,dt),G.side=Vi,G.needsUpdate=!0,x.renderBufferDirect(W,N,j,G,w,dt),G.side=Vn):x.renderBufferDirect(W,N,j,G,w,dt),w.onAfterRender(x,N,W,j,G,dt)}function Io(w,N,W){N.isScene!==!0&&(N=jt);const j=Dt.get(w),G=p.state.lights,dt=p.state.shadowsArray,vt=G.state.version,wt=mt.getParameters(w,G.state,dt,N,W),Pt=mt.getProgramCacheKey(wt);let Ht=j.programs;j.environment=w.isMeshStandardMaterial?N.environment:null,j.fog=N.fog,j.envMap=(w.isMeshStandardMaterial?z:T).get(w.envMap||j.environment),Ht===void 0&&(w.addEventListener("dispose",tt),Ht=new Map,j.programs=Ht);let It=Ht.get(Pt);if(It!==void 0){if(j.currentProgram===It&&j.lightsStateVersion===vt)return jh(w,wt),It}else wt.uniforms=mt.getUniforms(w),w.onBuild(W,wt,x),w.onBeforeCompile(wt,x),It=mt.acquireProgram(wt,Pt),Ht.set(Pt,It),j.uniforms=wt.uniforms;const Nt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=Ot.uniform),jh(w,wt),j.needsLights=Yg(w),j.lightsStateVersion=vt,j.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMap.value=G.state.directionalShadowMap,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotShadowMap.value=G.state.spotShadowMap,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMap.value=G.state.pointShadowMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=It,j.uniformsList=null,It}function Yh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=wa.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function jh(w,N){const W=Dt.get(w);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Wg(w,N,W,j,G){N.isScene!==!0&&(N=jt),R.resetTextureUnits();const dt=N.fog,vt=j.isMeshStandardMaterial?N.environment:null,wt=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:gi,Pt=(j.isMeshStandardMaterial?z:T).get(j.envMap||vt),Ht=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,It=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!W.morphAttributes.position,ve=!!W.morphAttributes.normal,hn=!!W.morphAttributes.color;let Re=Fi;j.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Re=x.toneMapping);const Zn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=Zn!==void 0?Zn.length:0,Vt=Dt.get(j),gl=p.state.lights;if(H===!0&&(K===!0||w!==D)){const bn=w===D&&j.id===P;Ot.setState(j,w,bn)}let pe=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==gl.state.version||Vt.outputColorSpace!==wt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||Vt.envMap!==Pt||j.fog===!0&&Vt.fog!==dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ot.numPlanes||Vt.numIntersection!==Ot.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==It||Vt.morphTargets!==Nt||Vt.morphNormals!==ve||Vt.morphColors!==hn||Vt.toneMapping!==Re||Rt.isWebGL2===!0&&Vt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Vt.__version=j.version);let $i=Vt.currentProgram;pe===!0&&($i=Io(j,N,G));let qh=!1,Cr=!1,_l=!1;const Ne=$i.getUniforms(),Ki=Vt.uniforms;if(xt.useProgram($i.program)&&(qh=!0,Cr=!0,_l=!0),j.id!==P&&(P=j.id,Cr=!0),qh||D!==w){Ne.setValue(k,"projectionMatrix",w.projectionMatrix),Ne.setValue(k,"viewMatrix",w.matrixWorldInverse);const bn=Ne.map.cameraPosition;bn!==void 0&&bn.setValue(k,pt.setFromMatrixPosition(w.matrixWorld)),Rt.logarithmicDepthBuffer&&Ne.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ne.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Cr=!0,_l=!0)}if(G.isSkinnedMesh){Ne.setOptional(k,G,"bindMatrix"),Ne.setOptional(k,G,"bindMatrixInverse");const bn=G.skeleton;bn&&(Rt.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ne.setValue(k,"boneTexture",bn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ne.setOptional(k,G,"batchingTexture"),Ne.setValue(k,"batchingTexture",G._matricesTexture,R));const xl=W.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0&&Rt.isWebGL2===!0)&&zt.update(G,W,$i),(Cr||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,Ne.setValue(k,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ki.envMap.value=Pt,Ki.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Cr&&(Ne.setValue(k,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Xg(Ki,_l),dt&&j.fog===!0&&lt.refreshFogUniforms(Ki,dt),lt.refreshMaterialUniforms(Ki,j,V,I,ht),wa.upload(k,Yh(Vt),Ki,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(wa.upload(k,Yh(Vt),Ki,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ne.setValue(k,"center",G.center),Ne.setValue(k,"modelViewMatrix",G.modelViewMatrix),Ne.setValue(k,"normalMatrix",G.normalMatrix),Ne.setValue(k,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const bn=j.uniformsGroups;for(let vl=0,jg=bn.length;vl<jg;vl++)if(Rt.isWebGL2){const $h=bn[vl];L.update($h,$i),L.bind($h,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Xg(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Yg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,N,W){Dt.get(w.texture).__webglTexture=N,Dt.get(w.depthTexture).__webglTexture=W;const j=Dt.get(w);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){const W=Dt.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,W=0){y=w,S=N,E=W;let j=!0,G=null,dt=!1,vt=!1;if(w){const Pt=Dt.get(w);Pt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Pt.__webglFramebuffer===void 0?R.setupRenderTarget(w):Pt.__hasExternalTextures&&R.rebindTextures(w,Dt.get(w.texture).__webglTexture,Dt.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(vt=!0);const It=Dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[N])?G=It[N][W]:G=It[N],dt=!0):Rt.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?G=Dt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[W]:G=It,M.copy(w.viewport),A.copy(w.scissor),F=w.scissorTest}else M.copy($).multiplyScalar(V).floor(),A.copy(Z).multiplyScalar(V).floor(),F=st;if(xt.bindFramebuffer(k.FRAMEBUFFER,G)&&Rt.drawBuffers&&j&&xt.drawBuffers(w,G),xt.viewport(M),xt.scissor(A),xt.setScissorTest(F),dt){const Pt=Dt.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,W)}else if(vt){const Pt=Dt.get(w.texture),Ht=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,W||0,Ht)}P=-1},this.readRenderTargetPixels=function(w,N,W,j,G,dt,vt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){xt.bindFramebuffer(k.FRAMEBUFFER,wt);try{const Pt=w.texture,Ht=Pt.format,It=Pt.type;if(Ht!==On&&ut.convert(Ht)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=It===go&&(yt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(It!==Ni&&ut.convert(It)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===ui&&(Rt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-j&&W>=0&&W<=w.height-G&&k.readPixels(N,W,j,G,ut.convert(Ht),ut.convert(It),dt)}finally{const Pt=y!==null?Dt.get(y).__webglFramebuffer:null;xt.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(w,N,W=0){const j=Math.pow(2,-W),G=Math.floor(N.image.width*j),dt=Math.floor(N.image.height*j);R.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,w.x,w.y,G,dt),xt.unbindTexture()},this.copyTextureToTexture=function(w,N,W,j=0){const G=N.image.width,dt=N.image.height,vt=ut.convert(W.format),wt=ut.convert(W.type);R.setTexture2D(W,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,w.x,w.y,G,dt,vt,wt,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,vt,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,w.x,w.y,vt,wt,N.image),j===0&&W.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,W,j,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=w.max.x-w.min.x+1,vt=w.max.y-w.min.y+1,wt=w.max.z-w.min.z+1,Pt=ut.convert(j.format),Ht=ut.convert(j.type);let It;if(j.isData3DTexture)R.setTexture3D(j,0),It=k.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),It=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Nt=k.getParameter(k.UNPACK_ROW_LENGTH),ve=k.getParameter(k.UNPACK_IMAGE_HEIGHT),hn=k.getParameter(k.UNPACK_SKIP_PIXELS),Re=k.getParameter(k.UNPACK_SKIP_ROWS),Zn=k.getParameter(k.UNPACK_SKIP_IMAGES),ue=W.isCompressedTexture?W.mipmaps[G]:W.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ue.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?k.texSubImage3D(It,G,N.x,N.y,N.z,dt,vt,wt,Pt,Ht,ue.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(It,G,N.x,N.y,N.z,dt,vt,wt,Pt,ue.data)):k.texSubImage3D(It,G,N.x,N.y,N.z,dt,vt,wt,Pt,Ht,ue),k.pixelStorei(k.UNPACK_ROW_LENGTH,Nt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ve),k.pixelStorei(k.UNPACK_SKIP_PIXELS,hn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Re),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zn),G===0&&j.generateMipmaps&&k.generateMipmap(It),xt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){S=0,E=0,y=null,xt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===yh?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===hl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?bs:vm}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===bs?Ie:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Cw extends Hm{}Cw.prototype.isWebGL1Renderer=!0;class Pw extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Lw extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Dw extends Lw{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(He(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);function ai(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Vm(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yr={duration:.5,overwrite:!1,delay:0},wh,We,he,An=1e8,se=1/An,Gc=Math.PI*2,Ow=Gc/4,Iw=0,Gm=Math.sqrt,Uw=Math.cos,Fw=Math.sin,De=function(t){return typeof t=="string"},_e=function(t){return typeof t=="function"},_i=function(t){return typeof t=="number"},Rh=function(t){return typeof t>"u"},Kn=function(t){return typeof t=="object"},rn=function(t){return t!==!1},Ch=function(){return typeof window<"u"},ga=function(t){return _e(t)||De(t)},Wm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xe=Array.isArray,Wc=/(?:-?\.?\d|\.)+/gi,Xm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ac=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ym=/[+-]=-?[.\d]+/,jm=/[^,'"\[\]\s]+/gi,Nw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,zn,Xc,Ph,vn={},qa={},qm,$m=function(t){return(qa=Cs(t,vn))&&cn},Lh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xo=function(t,e){return!e&&console.warn(t)},Km=function(t,e){return t&&(vn[t]=e)&&qa&&(qa[t]=e)||vn},vo=function(){return 0},kw={suppressEvents:!0,isStart:!0,kill:!1},Ra={suppressEvents:!0,kill:!1},Bw={suppressEvents:!0},Dh={},ki=[],Yc={},Zm,mn={},lc={},Wf=30,Ca=[],Oh="",Ih=function(t){var e=t[0],n,s;if(Kn(e)||_e(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(s=Ca.length;s--&&!Ca[s].targetTest(e););n=Ca[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Mg(t[s],n)))||t.splice(s,1);return t},ys=function(t){return t._gsap||Ih(wn(t))[0]._gsap},Jm=function(t,e,n){return(n=t[e])&&_e(n)?t[e]():Rh(n)&&t.getAttribute&&t.getAttribute(e)||n},on=function(t,e){return(t=t.split(",")).forEach(e)||t},be=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},ur=function(t,e){var n=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+s:n==="-"?t-s:n==="*"?t*s:t/s},zw=function(t,e){for(var n=e.length,s=0;t.indexOf(e[s])<0&&++s<n;);return s<n},$a=function(){var t=ki.length,e=ki.slice(0),n,s;for(Yc={},ki.length=0,n=0;n<t;n++)s=e[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Qm=function(t,e,n,s){ki.length&&!We&&$a(),t.render(e,n,s||We&&e<0&&(t._initted||t._startAt)),ki.length&&!We&&$a()},tg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(jm).length<2?e:De(t)?t.trim():t},eg=function(t){return t},Rn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Hw=function(t){return function(e,n){for(var s in n)s in e||s==="duration"&&t||s==="ease"||(e[s]=n[s])}},Cs=function(t,e){for(var n in e)t[n]=e[n];return t},Xf=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Kn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Ka=function(t,e){var n={},s;for(s in t)s in e||(n[s]=t[s]);return n},so=function(t){var e=t.parent||de,n=t.keyframes?Hw(Xe(t.keyframes)):Rn;if(rn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Vw=function(t,e){for(var n=t.length,s=n===e.length;s&&n--&&t[n]===e[n];);return n<0},ng=function(t,e,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var o=t[s],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[s]=e,e._prev=o,e.parent=e._dp=t,e},fl=function(t,e,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},Xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ss=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Gw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},jc=function(t,e,n,s){return t._startAt&&(We?t._startAt.revert(Ra):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},Ww=function i(t){return!t||t._ts&&i(t.parent)},Yf=function(t){return t._repeat?Sr(t._tTime,t=t.duration()+t._rDelay)*t:0},Sr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Za=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},pl=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||se)||0))},ml=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),pl(t),n._dirty||Ss(n,t)),t},ig=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Za(t.rawTime(),e),(!e._dur||Do(0,e.totalDuration(),n)-e._tTime>se)&&e.render(n,!0)),Ss(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-se}},Wn=function(t,e,n,s){return e.parent&&Xi(e),e._start=Pe((_i(n)?n:n||t!==de?Sn(t,n,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ng(t,e,"_first","_last",t._sort?"_start":0),qc(e)||(t._recent=e),s||ig(t,e),t._ts<0&&ml(t,t._tTime),t},sg=function(t,e){return(vn.ScrollTrigger||Lh("scrollTrigger",e))&&vn.ScrollTrigger.create(e,t)},rg=function(t,e,n,s,r){if(Fh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!We&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zm!==gn.frame)return ki.push(t),t._lazy=[r,s],1},Xw=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},qc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Yw=function(t,e,n,s){var r=t.ratio,o=e<0||!e&&(!t._start&&Xw(t)&&!(!t._initted&&qc(t))||(t._ts<0||t._dp._ts<0)&&!qc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Do(0,t._tDur,e),h=Sr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Sr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||We||s||t._zTime===se||!e&&t._zTime){if(!t._initted&&rg(t,e,s,n,l))return;for(u=t._zTime,t._zTime=e||(n?se:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&jc(t,e,n,!0),t._onUpdate&&!n&&_n(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&_n(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xi(t,1),!n&&!We&&(_n(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},jw=function(t,e,n){var s;if(n>e)for(s=t._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},Er=function(t,e,n,s){var r=t._repeat,o=Pe(e)||0,a=t._tTime/t._tDur;return a&&!s&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Pe(o*(r+1)+t._rDelay*r):o,a>0&&!s&&ml(t,t._tTime=t._tDur*a),t.parent&&pl(t),n||Ss(t.parent,t),t},jf=function(t){return t instanceof Ze?Ss(t):Er(t,t._dur)},qw={_start:0,endTime:vo,totalDuration:vo},Sn=function i(t,e,n){var s=t.labels,r=t._recent||qw,o=t.duration()>=An?r.endTime(!1):t._dur,a,l,c;return De(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in s||(s[e]=o),s[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Xe(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ro=function(t,e,n){var s=_i(e[1]),r=(s?2:1)+(t<2?0:1),o=e[r],a,l;if(s&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=rn(l.vars.inherit)&&l.parent;o.immediateRender=rn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Se(e[0],o,e[r+1])},qi=function(t,e){return t||t===0?e(t):e},Do=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!De(t)||!(e=Nw.exec(t))?"":e[1]},$w=function(t,e,n){return qi(n,function(s){return Do(t,e,s)})},$c=[].slice,og=function(t,e){return t&&Kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Kn(t[0]))&&!t.nodeType&&t!==zn},Kw=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(s){var r;return De(s)&&!e||og(s,1)?(r=n).push.apply(r,wn(s)):n.push(s)})||n},wn=function(t,e,n){return he&&!e&&he.selector?he.selector(t):De(t)&&!n&&(Xc||!Tr())?$c.call((e||Ph).querySelectorAll(t),0):Xe(t)?Kw(t,n):og(t)?$c.call(t,0):t?[t]:[]},Kc=function(t){return t=wn(t)[0]||xo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return wn(e,n.querySelectorAll?n:n===t?xo("Invalid scope")||Ph.createElement("div"):t)}},ag=function(t){return t.sort(function(){return .5-Math.random()})},lg=function(t){if(_e(t))return t;var e=Kn(t)?t:{each:t},n=Es(e.ease),s=e.from||0,r=parseFloat(e.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=e.axis,h=s,u=s;return De(s)?h=u={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(h=s[0],u=s[1]),function(d,f,_){var g=(_||e).length,p=o[g],m,v,x,b,S,E,y,P,D;if(!p){if(D=e.grid==="auto"?0:(e.grid||[1,An])[1],!D){for(y=-An;y<(y=_[D++].getBoundingClientRect().left)&&D<g;);D<g&&D--}for(p=o[g]=[],m=l?Math.min(D,g)*h-.5:s%D,v=D===An?0:l?g*u/D-.5:s/D|0,y=0,P=An,E=0;E<g;E++)x=E%D-m,b=v-(E/D|0),p[E]=S=c?Math.abs(c==="y"?b:x):Gm(x*x+b*b),S>y&&(y=S),S<P&&(P=S);s==="random"&&ag(p),p.max=y-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(D>g?g-1:c?c==="y"?g/D:D:Math.max(D,g/D))||0)*(s==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Ve(e.amount||e.each)||0,n=n&&g<0?xg(n):n}return g=(p[d]-p.min)/p.max||0,Pe(p.b+(n?n(g):g)*p.v)+p.u}},Zc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var s=Pe(Math.round(parseFloat(n)/t)*t*e);return(s-s%1)/e+(_i(n)?0:Ve(n))}},cg=function(t,e){var n=Xe(t),s,r;return!n&&Kn(t)&&(s=n=t.radius||An,t.values?(t=wn(t.values),(r=!_i(t[0]))&&(s*=s)):t=Zc(t.increment)),qi(e,n?_e(t)?function(o){return r=t(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=An,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!s||c<=s?t[h]:o,r||h===o||_i(o)?h:h+Ve(o)}:Zc(t))},hg=function(t,e,n,s){return qi(Xe(t)?!e:n===!0?!!(n=0):!s,function(){return Xe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*s)/s})},Zw=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(s){return e.reduce(function(r,o){return o(r)},s)}},Jw=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},Qw=function(t,e,n){return dg(t,e,0,1,n)},ug=function(t,e,n){return qi(n,function(s){return t[~~e(s)]})},t1=function i(t,e,n){var s=e-t;return Xe(t)?ug(t,i(0,t.length),e):qi(n,function(r){return(s+(r-t)%s)%s+t})},e1=function i(t,e,n){var s=e-t,r=s*2;return Xe(t)?ug(t,i(0,t.length-1),e):qi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>s?r-o:o)})},bo=function(t){for(var e=0,n="",s,r,o,a;~(s=t.indexOf("random(",e));)o=t.indexOf(")",s),a=t.charAt(s+7)==="[",r=t.substr(s+7,o-s-7).match(a?jm:Wc),n+=t.substr(e,s-e)+hg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},dg=function(t,e,n,s,r){var o=e-t,a=s-n;return qi(r,function(l){return n+((l-t)/o*a||0)})},n1=function i(t,e,n,s){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=De(t),a={},l,c,h,u,d;if(n===!0&&(s=1)&&(n=null),o)t={p:t},e={p:e};else if(Xe(t)&&!Xe(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(i(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else s||(t=Cs(Xe(t)?[]:{},t));if(!h){for(l in e)Uh.call(a,t,l,"get",e[l]);r=function(_){return Bh(_,a)||(o?t.p:t)}}}return qi(n,r)},qf=function(t,e,n){var s=t.labels,r=An,o,a,l;for(o in s)a=s[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},_n=function(t,e,n){var s=t.vars,r=s[e],o=he,a=t._ctx,l,c,h;if(r)return l=s[e+"Params"],c=s.callbackScope||t,n&&ki.length&&$a(),a&&(he=a),h=l?r.apply(c,l):r.call(c),he=o,h},qr=function(t){return Xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!We),t.progress()<1&&_n(t,"onInterrupt"),t},or,fg=[],pg=function(t){if(t)if(t=!t.name&&t.default||t,Ch()||t.headless){var e=t.name,n=_e(t),s=e&&!n&&t.init?function(){this._props=[]}:t,r={init:vo,render:Bh,add:Uh,kill:x1,modifier:_1,rawVars:0},o={targetTest:0,get:0,getSetter:kh,aliases:{},register:0};if(Tr(),t!==s){if(mn[e])return;Rn(s,Rn(Ka(t,r),o)),Cs(s.prototype,Cs(r,Ka(t,o))),mn[s.prop=e]=s,t.targetTest&&(Ca.push(s),Dh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Km(e,s),t.register&&t.register(cn,s,an)}else fg.push(t)},ne=255,$r={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},cc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},mg=function(t,e,n){var s=t?_i(t)?[t>>16,t>>8&ne,t&ne]:0:$r.black,r,o,a,l,c,h,u,d,f,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$r[t])s=$r[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ne,s&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(Wc),!e)l=+s[0]%360/360,c=+s[1]/100,h=+s[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,s.length>3&&(s[3]*=1),s[0]=cc(l+1/3,r,o),s[1]=cc(l,r,o),s[2]=cc(l-1/3,r,o);else if(~t.indexOf("="))return s=t.match(Xm),n&&s.length<4&&(s[3]=1),s}else s=t.match(Wc)||$r.transparent;s=s.map(Number)}return e&&!_&&(r=s[0]/ne,o=s[1]/ne,a=s[2]/ne,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},gg=function(t){var e=[],n=[],s=-1;return t.split(Bi).forEach(function(r){var o=r.match(rr)||[];e.push.apply(e,o),n.push(s+=o.length+1)}),e.c=n,e},$f=function(t,e,n){var s="",r=(t+s).match(Bi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=mg(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=gg(t),l=n.c,l.join(s)!==h.c.join(s)))for(c=t.replace(Bi,"1").split(rr),u=c.length-1;a<u;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Bi),u=c.length-1;a<u;a++)s+=c[a]+r[a];return s+c[u]},Bi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $r)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),i1=/hsl[a]?\(/,_g=function(t){var e=t.join(" "),n;if(Bi.lastIndex=0,Bi.test(e))return n=i1.test(e),t[1]=$f(t[1],n),t[0]=$f(t[0],n,gg(t[1])),!0},Mo,gn=function(){var i=Date.now,t=500,e=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,_=function g(p){var m=i()-s,v=p===!0,x,b,S,E;if((m>t||m<0)&&(n+=m-e),s+=m,S=s-n,x=S-o,(x>0||v)&&(E=++u.frame,d=S-u.time*1e3,u.time=S=S/1e3,o+=x+(x>=r?4:r-x),b=1),v||(l=c(g)),b)for(f=0;f<a.length;f++)a[f](S,d,E,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){qm&&(!Xc&&Ch()&&(zn=Xc=window,Ph=zn.document||{},vn.gsap=cn,(zn.gsapVersions||(zn.gsapVersions=[])).push(cn.version),$m(qa||zn.GreenSockGlobals||!zn.gsap&&zn||{}),fg.forEach(pg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Mo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Mo=0,c=vo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),o=u.time*1e3+r},add:function(p,m,v){var x=m?function(b,S,E,y){p(b,S,E,y),u.remove(x)}:p;return u.remove(p),a[v?"unshift":"push"](x),Tr(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),Tr=function(){return!Mo&&gn.wake()},Yt={},s1=/^[\d.\-M][\d.\-,\s]/,r1=/["']/g,o1=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[s]=isNaN(c)?c.replace(r1,"").trim():+c,s=l.substr(a+1).trim();return e},a1=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<n?t.indexOf(")",n+1):n)},l1=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[o1(e[1])]:a1(t).split(",").map(tg)):Yt._CE&&s1.test(t)?Yt._CE("",t):n},xg=function(t){return function(e){return 1-t(1-e)}},vg=function i(t,e){for(var n=t._first,s;n;)n instanceof Ze?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=e)),n=n._next},Es=function(t,e){return t&&(_e(t)?t:Yt[t]||l1(t))||e},Is=function(t,e,n,s){n===void 0&&(n=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:s},o;return on(t,function(a){Yt[a]=vn[a]=r,Yt[o=a.toLowerCase()]=n;for(var l in r)Yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[a+"."+l]=r[l]}),r},bg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},hc=function i(t,e,n){var s=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Gc*(Math.asin(1/s)||0),a=function(h){return h===1?1:s*Math.pow(2,-10*h)*Fw((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:bg(a);return r=Gc/r,l.config=function(c,h){return i(t,c,h)},l},uc=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},s=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:bg(n);return s.config=function(r){return i(t,r)},s};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Is(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Is("Elastic",hc("in"),hc("out"),hc());(function(i,t){var e=1/t,n=2*e,s=2.5*e,r=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<s?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Is("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Is("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Is("Circ",function(i){return-(Gm(1-i*i)-1)});Is("Sine",function(i){return i===1?1:-Uw(i*Ow)+1});Is("Back",uc("in"),uc("out"),uc());Yt.SteppedEase=Yt.steps=vn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,s=t+(e?0:1),r=e?1:0,o=1-se;return function(a){return((s*Do(0,o,a)|0)+r)*n}}};yr.ease=Yt["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Oh+=i+","+i+"Params,"});var Mg=function(t,e){this.id=Iw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Jm,this.set=e?e.getSetter:kh},yo=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Er(this,+e.duration,1,1),this.data=e.data,he&&(this._ctx=he,he.data.push(this)),Mo||gn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,s){if(Tr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ml(this,n),!r._dp||r.parent||ig(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qm(this,n,s)),this},t.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yf(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},t.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yf(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?Sr(this._tTime,r)+1:1},t.timeScale=function(n,s){if(!arguments.length)return this._rts===-se?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Za(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-se?0:this._rts,this.totalTime(Do(-Math.abs(this._delay),this._tDur,r),s!==!1),pl(this),Gw(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==se&&(this._tTime-=se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Wn(s,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Za(s.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Bw);var s=We;return We=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),We=s,this},t.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,jf(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,s){return this.totalTime(Sn(this,n),rn(s))},t.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,rn(s))},t.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},t.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-se,this},t.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-se)},t.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},t.then=function(n){var s=this;return new Promise(function(r){var o=_e(n)?n:eg,a=function(){var c=s.then;s.then=null,_e(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=c),r(o),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},t.kill=function(){qr(this)},i}();Rn(yo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-se,_prom:0,_ps:!1,_rts:1});var Ze=function(i){Vm(t,i);function t(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=rn(n.sortChildren),de&&Wn(n.parent||de,ai(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&sg(ai(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,o){return ro(0,arguments,this),this},e.from=function(s,r,o){return ro(1,arguments,this),this},e.fromTo=function(s,r,o,a){return ro(2,arguments,this),this},e.set=function(s,r,o){return r.duration=0,r.parent=this,so(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Se(s,r,Sn(this,o),1),this},e.call=function(s,r,o){return Wn(this,Se.delayedCall(0,s,r),o)},e.staggerTo=function(s,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Se(s,o,Sn(this,l)),this},e.staggerFrom=function(s,r,o,a,l,c,h){return o.runBackwards=1,so(o).immediateRender=rn(o.immediateRender),this.staggerTo(s,r,o,a,l,c,h)},e.staggerFromTo=function(s,r,o,a,l,c,h,u){return a.startAt=o,so(a).immediateRender=rn(a.immediateRender),this.staggerTo(s,r,a,l,c,h,u)},e.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=s<=0?0:Pe(s),u=this._zTime<0!=s<0&&(this._initted||!c),d,f,_,g,p,m,v,x,b,S,E,y;if(this!==de&&h>l&&s>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,s+=this._time-a),d=h,b=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(p*100+s,r,o);if(d=Pe(h%p),h===l?(g=this._repeat,d=c):(g=~~(h/p),g&&g===h/p&&(d=c,g--),d>c&&(d=c)),S=Sr(this._tTime,p),!a&&this._tTime&&S!==g&&this._tTime-S*p-this._dur<=0&&(S=g),E&&g&1&&(d=c-d,y=1),g!==S&&!this._lock){var P=E&&S&1,D=P===(E&&g&1);if(g<S&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(y?0:Pe(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,D&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;vg(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=jw(this,Pe(a),Pe(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&d&&!r&&!g&&(_n(this,"onStart"),this._tTime!==h))return this;if(d>=a&&s>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(s,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=-se);break}}f=_}else{f=this._last;for(var M=s<0?s:d;f;){if(_=f._prev,(f._act||M<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(s,r,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,r,o||We&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=M?-se:se);break}}f=_}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-se)._zTime=d>=a?1:-1,this._ts))return this._start=b,pl(this),this.render(s,r,o);this._onUpdate&&!r&&_n(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Xi(this,1),!r&&!(s<0&&!a)&&(h||a||!l)&&(_n(this,h===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var o=this;if(_i(r)||(r=Sn(this,r,s)),!(s instanceof yo)){if(Xe(s))return s.forEach(function(a){return o.add(a,r)}),this;if(De(s))return this.addLabel(s,r);if(_e(s))s=Se.delayedCall(0,s);else return this}return this!==s?Wn(this,s,r):this},e.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-An);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Se?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},e.remove=function(s){return De(s)?this.removeLabel(s):_e(s)?this.killTweensOf(s):(fl(this,s),s===this._recent&&(this._recent=this._last),Ss(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(gn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=Sn(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,o){var a=Se.delayedCall(0,r||vo,o);return a.data="isPause",this._hasPause=1,Wn(this,a,Sn(this,s))},e.removePause=function(s){var r=this._first;for(s=Sn(this,s);r;)r._start===s&&r.data==="isPause"&&Xi(r),r=r._next},e.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)Li!==a[l]&&a[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var o=[],a=wn(s),l=this._first,c=_i(r),h;l;)l instanceof Se?zw(l._targets,a)&&(c?(!Li||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(s,r){r=r||{};var o=this,a=Sn(o,s),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Se.to(o,Rn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||se,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Er(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(s,r,o){return this.tweenTo(r,Rn({startAt:{time:Sn(this,s)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),qf(this,Sn(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),qf(this,Sn(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+se)},e.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return Ss(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ss(this)},e.totalDuration=function(s){var r=0,o=this,a=o._last,l=An,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Er(o,o===de&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(s){if(de._ts&&(Qm(de,Za(s,de)),Zm=gn.frame),gn.frame>=Wf){Wf+=xn.autoSleep||120;var r=de._first;if((!r||!r._ts)&&xn.autoSleep&&gn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||gn.sleep()}}},t}(yo);Rn(Ze.prototype,{_lock:0,_hasPause:0,_forcing:0});var c1=function(t,e,n,s,r,o,a){var l=new an(this._pt,t,e,0,1,wg,null,r),c=0,h=0,u,d,f,_,g,p,m,v;for(l.b=n,l.e=s,n+="",s+="",(m=~s.indexOf("random("))&&(s=bo(s)),o&&(v=[n,s],o(v,t,e),n=v[0],s=v[1]),d=n.match(ac)||[];u=ac.exec(s);)_=u[0],g=s.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?ur(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=ac.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(Ym.test(s)||m)&&(l.e=0),this._pt=l,l},Uh=function(t,e,n,s,r,o,a,l,c,h){_e(s)&&(s=s(r||0,t,o));var u=t[e],d=n!=="get"?n:_e(u)?c?t[e.indexOf("set")||!_e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=_e(u)?c?p1:Tg:Nh,_;if(De(s)&&(~s.indexOf("random(")&&(s=bo(s)),s.charAt(1)==="="&&(_=ur(d,s)+(Ve(d)||0),(_||_===0)&&(s=_))),!h||d!==s||Jc)return!isNaN(d*s)&&s!==""?(_=new an(this._pt,t,e,+d||0,s-(d||0),typeof u=="boolean"?g1:Ag,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Lh(e,s),c1.call(this,t,e,d,s,f,l||xn.stringFilter,c))},h1=function(t,e,n,s,r){if(_e(t)&&(t=oo(t,r,e,n,s)),!Kn(t)||t.style&&t.nodeType||Xe(t)||Wm(t))return De(t)?oo(t,r,e,n,s):t;var o={},a;for(a in t)o[a]=oo(t[a],r,e,n,s);return o},yg=function(t,e,n,s,r,o){var a,l,c,h;if(mn[t]&&(a=new mn[t]).init(r,a.rawVars?e[t]:h1(e[t],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new an(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==or))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Li,Jc,Fh=function i(t,e,n){var s=t.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,h=s.runBackwards,u=s.yoyoEase,d=s.keyframes,f=s.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!wh,b=t.timeline,S,E,y,P,D,M,A,F,X,O,U,I,V;if(b&&(!d||!r)&&(r="none"),t._ease=Es(r,yr.ease),t._yEase=u?xg(Es(u===!0?r:u,yr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!b&&!!s.runBackwards,!b||d&&!s.stagger){if(F=p[0]?ys(p[0]).harness:0,I=F&&s[F.prop],S=Ka(s,Dh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Ra:kw),g._lazy=0),o){if(Xi(t._startAt=Se.set(p,Rn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&rn(l),startAt:null,delay:0,onUpdate:c&&function(){return _n(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We||!a&&!f)&&t._startAt.revert(Ra),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),y=Rn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&rn(l),immediateRender:a,stagger:0,parent:m},S),I&&(y[F.prop]=I),Xi(t._startAt=Se.set(p,y)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We?t._startAt.revert(Ra):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,se,se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&rn(l)||l&&!_,E=0;E<p.length;E++){if(D=p[E],A=D._gsap||Ih(p)[E]._gsap,t._ptLookup[E]=O={},Yc[A.id]&&ki.length&&$a(),U=v===p?E:v.indexOf(D),F&&(X=new F).init(D,I||S,t,U,v)!==!1&&(t._pt=P=new an(t._pt,D,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(Y){O[Y]=P}),X.priority&&(M=1)),!F||I)for(y in S)mn[y]&&(X=yg(y,S,t,U,D,v))?X.priority&&(M=1):O[y]=P=Uh.call(t,D,y,"get",S[y],U,v,0,s.stringFilter);t._op&&t._op[E]&&t.kill(D,t._op[E]),x&&t._pt&&(Li=t,de.killTweensOf(D,O,t.globalTime(e)),V=!t.parent,Li=0),t._pt&&l&&(Yc[A.id]=1)}M&&Rg(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&b.render(An,!0,!0)},u1=function(t,e,n,s,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Jc=1,t.vars[e]="+=0",Fh(t,a),Jc=0,l?xo(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(s||s===0)&&!r?s:h.s+(s||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=be(n)+Ve(u.e)),u.b&&(u.b=h.s+Ve(u.b))},d1=function(t,e){var n=t[0]?ys(t[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return e;r=Cs({},e);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},f1=function(t,e,n,s){var r=e.ease||s||"power1.inOut",o,a;if(Xe(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},oo=function(t,e,n,s,r){return _e(t)?t.call(e,n,s,r):De(t)&&~t.indexOf("random(")?bo(t):t},Sg=Oh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Eg={};on(Sg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Eg[i]=1});var Se=function(i){Vm(t,i);function t(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:so(s))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,v=s.parent||de,x=(Xe(n)||Wm(n)?_i(n[0]):"length"in s)?[n]:wn(n),b,S,E,y,P,D,M,A;if(a._targets=x.length?Ih(x):xo("GSAP target "+n+" not found. https://gsap.com",!xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||ga(c)||ga(h)){if(s=a.vars,b=a.timeline=new Ze({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),b.kill(),b.parent=b._dp=ai(a),b._start=0,d||ga(c)||ga(h)){if(y=x.length,M=d&&lg(d),Kn(d))for(P in d)~Sg.indexOf(P)&&(A||(A={}),A[P]=d[P]);for(S=0;S<y;S++)E=Ka(s,Eg),E.stagger=0,m&&(E.yoyoEase=m),A&&Cs(E,A),D=x[S],E.duration=+oo(c,ai(a),S,D,x),E.delay=(+oo(h,ai(a),S,D,x)||0)-a._delay,!d&&y===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),b.to(D,E,M?M(S,D,x):0),b._ease=Yt.none;b.duration()?c=h=0:a.timeline=0}else if(_){so(Rn(b.vars.defaults,{ease:"none"})),b._ease=Es(_.ease||s.ease||"none");var F=0,X,O,U;if(Xe(_))_.forEach(function(I){return b.to(x,I,">")}),b.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||f1(P,_[P],E,_.easeEach);for(P in E)for(X=E[P].sort(function(I,V){return I.t-V.t}),F=0,S=0;S<X.length;S++)O=X[S],U={ease:O.e,duration:(O.t-(S?X[S-1].t:0))/100*c},U[P]=O.v,b.to(x,U,F),F+=U.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!wh&&(Li=ai(a),de.killTweensOf(x),Li=0),Wn(v,ai(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(u||!c&&!_&&a._start===Pe(v._time)&&rn(u)&&Ww(ai(a))&&v.data!=="nested")&&(a._tTime=-se,a.render(Math.max(0,-h)||0)),p&&sg(ai(a),p),a}var e=t.prototype;return e.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,h=s<0,u=s>l-se&&!h?l:s<se?0:s,d,f,_,g,p,m,v,x,b;if(!c)Yw(this,s,r,o);else if(u!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+s,r,o);if(d=Pe(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===Pe(u/g)&&(d=c,_--),d>c&&(d=c)),m=this._yoyo&&_&1,m&&(b=this._yEase,d=c-d),p=Sr(this._tTime,g),d===a&&!o&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(x&&this._yEase&&vg(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Pe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(rg(this,h?s:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(b||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!a&&!r&&!_&&(_n(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(s<0?s:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(h&&jc(this,s,r,o),_n(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&_n(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&jc(this,s,!0,!0),(s||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!r&&!(h&&!a)&&(u||a||m)&&(_n(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,o,a,l){Mo||gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Fh(this,c),h=this._ease(c/this._dur),u1(this,s,r,o,a,h,c,l)?this.resetTo(s,r,o,a,1):(ml(this,0),this.parent||ng(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Li&&Li.vars.overwrite!==!0)._first||qr(this),this.parent&&o!==this.timeline.totalDuration()&&Er(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?wn(s):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,p,m;if((!r||r==="all")&&Vw(a,l))return r==="all"&&(this._pt=0),qr(this);for(u=this._op=this._op||[],r!=="all"&&(De(r)&&(g={},on(r,function(v){return g[v]=1}),r=g),r=d1(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],r==="all"?(u[m]=r,_=d,f={}):(f=u[m]=u[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&fl(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&qr(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return ro(1,arguments)},t.delayedCall=function(s,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(s,r,o){return ro(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,o){return de.killTweensOf(s,r,o)},t}(yo);Rn(Se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(i){Se[i]=function(){var t=new Ze,e=$c.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Nh=function(t,e,n){return t[e]=n},Tg=function(t,e,n){return t[e](n)},p1=function(t,e,n,s){return t[e](s.fp,n)},m1=function(t,e,n){return t.setAttribute(e,n)},kh=function(t,e){return _e(t[e])?Tg:Rh(t[e])&&t.setAttribute?m1:Nh},Ag=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},g1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wg=function(t,e){var n=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+s,n=n._next;s+=e.c}e.set(e.t,e.p,s,e)},Bh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_1=function(t,e,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(t,e,n),r=o},x1=function(t){for(var e=this._pt,n,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?fl(this,e,"_pt"):e.dep||(n=1),e=s;return!n},v1=function(t,e,n,s){s.mSet(t,e,s.m.call(s.tween,n,s.mt),s)},Rg=function(t){for(var e=t._pt,n,s,r,o;e;){for(n=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:o)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:o=e,e=n}t._pt=r},an=function(){function i(e,n,s,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||Ag,this.d=l||this,this.set=c||Nh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=v1,this.m=n,this.mt=r,this.tween=s},i}();on(Oh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Dh[i]=1});vn.TweenMax=vn.TweenLite=Se;vn.TimelineLite=vn.TimelineMax=Ze;de=new Ze({sortChildren:!1,defaults:yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xn.stringFilter=_g;var Ts=[],Pa={},b1=[],Kf=0,M1=0,dc=function(t){return(Pa[t]||b1).map(function(e){return e()})},Qc=function(){var t=Date.now(),e=[];t-Kf>2&&(dc("matchMediaInit"),Ts.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=zn.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),dc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Kf=t,dc("matchMedia"))},Cg=function(){function i(e,n){this.selector=n&&Kc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=M1++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,s,r){_e(n)&&(r=s,s=n,n=_e);var o=this,a=function(){var c=he,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Kc(r)),he=o,u=s.apply(o,arguments),_e(u)&&o._r.push(u),he=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===_e?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var s=he;he=null,n(this),he=s},t.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Se&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,s){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ze?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Se)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=Ts.length;o--;)Ts[o].id===this.id&&Ts.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),y1=function(){function i(e){this.contexts=[],this.scope=e,he&&he.data.push(this)}var t=i.prototype;return t.add=function(n,s,r){Kn(n)||(n={matches:n});var o=new Cg(0,r||this.scope),a=o.conditions={},l,c,h;he&&!o.selector&&(o.selector=he.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?h=1:(l=zn.matchMedia(n[c]),l&&(Ts.indexOf(o)<0&&Ts.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Qc):l.addEventListener("change",Qc)));return h&&s(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),Ja={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(s){return pg(s)})},timeline:function(t){return new Ze(t)},getTweensOf:function(t,e){return de.getTweensOf(t,e)},getProperty:function(t,e,n,s){De(t)&&(t=wn(t)[0]);var r=ys(t||{}).get,o=n?eg:tg;return n==="native"&&(n=""),t&&(e?o((mn[e]&&mn[e].get||r)(t,e,n,s)):function(a,l,c){return o((mn[a]&&mn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=wn(t),t.length>1){var s=t.map(function(h){return cn.quickSetter(h,e,n)}),r=s.length;return function(h){for(var u=r;u--;)s[u](h)}}t=t[0]||{};var o=mn[e],a=ys(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;or._pt=0,u.init(t,n?h+n:h,or,0,[t]),u.render(1,u),or._pt&&Bh(1,or)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var s,r=cn.to(t,Cs((s={},s[e]="+=0.1",s.paused=!0,s),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return de.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Es(t.ease,yr.ease)),Xf(yr,t||{})},config:function(t){return Xf(xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,s=t.plugins,r=t.defaults,o=t.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!mn[a]&&!vn[a]&&xo(e+" effect requires "+a+" plugin.")}),lc[e]=function(a,l,c){return n(wn(a),Rn(l||{},r),c)},o&&(Ze.prototype[e]=function(a,l,c){return this.add(lc[e](a,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=Es(e)},parseEase:function(t,e){return arguments.length?Es(t,e):Yt},getById:function(t){return de.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ze(t),s,r;for(n.smoothChildTiming=rn(t.smoothChildTiming),de.remove(n),n._dp=0,n._time=n._tTime=de._time,s=de._first;s;)r=s._next,(e||!(!s._dur&&s instanceof Se&&s.vars.onComplete===s._targets[0]))&&Wn(n,s,s._start-s._delay),s=r;return Wn(de,n,0),n},context:function(t,e){return t?new Cg(t,e):he},matchMedia:function(t){return new y1(t)},matchMediaRefresh:function(){return Ts.forEach(function(t){var e=t.conditions,n,s;for(s in e)e[s]&&(e[s]=!1,n=1);n&&t.revert()})||Qc()},addEventListener:function(t,e){var n=Pa[t]||(Pa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pa[t],s=n&&n.indexOf(e);s>=0&&n.splice(s,1)},utils:{wrap:t1,wrapYoyo:e1,distribute:lg,random:hg,snap:cg,normalize:Qw,getUnit:Ve,clamp:$w,splitColor:mg,toArray:wn,selector:Kc,mapRange:dg,pipe:Zw,unitize:Jw,interpolate:n1,shuffle:ag},install:$m,effects:lc,ticker:gn,updateRoot:Ze.updateRoot,plugins:mn,globalTimeline:de,core:{PropTween:an,globals:Km,Tween:Se,Timeline:Ze,Animation:yo,getCache:ys,_removeLinkedListItem:fl,reverting:function(){return We},context:function(t){return t&&he&&(he.data.push(t),t._ctx=he),he},suppressOverwrites:function(t){return wh=t}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ja[i]=Se[i]});gn.add(Ze.updateRoot);or=Ja.to({},{duration:0});var S1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},E1=function(t,e){var n=t._targets,s,r,o;for(s in e)for(r=n.length;r--;)o=t._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=S1(o,s)),o&&o.modifier&&o.modifier(e[s],t,n[r],s))},fc=function(t,e){return{name:t,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(De(r)&&(l={},on(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}E1(a,r)}}}},cn=Ja.registerPlugin({name:"attr",init:function(t,e,n,s,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)We?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},fc("roundProps",Zc),fc("modifiers"),fc("snap",cg))||Ja;Se.version=Ze.version=cn.version="3.12.5";qm=1;Ch()&&Tr();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zf,Di,dr,zh,ms,Jf,Hh,T1=function(){return typeof window<"u"},xi={},hs=180/Math.PI,fr=Math.PI/180,er=Math.atan2,Qf=1e8,Vh=/([A-Z])/g,A1=/(left|right|width|margin|padding|x)/i,w1=/[\s,\(]\S/,Yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},th=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},R1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},C1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},P1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Pg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Lg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},L1=function(t,e,n){return t.style[e]=n},D1=function(t,e,n){return t.style.setProperty(e,n)},O1=function(t,e,n){return t._gsap[e]=n},I1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},U1=function(t,e,n,s,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},F1=function(t,e,n,s,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},fe="transform",ln=fe+"Origin",N1=function i(t,e){var n=this,s=this.target,r=s.style,o=s._gsap;if(t in xi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Yn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=hi(s,a)}):this.tfm[t]=o.x?o[t]:hi(s,t),t===ln&&(this.tfm.zOrigin=o.zOrigin);else return Yn.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(fe)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ln,e,"")),t=fe}(r||e)&&this.props.push(t,e,r[t])},Dg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},k1=function(){var t=this.props,e=this.target,n=e.style,s=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Vh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Hh(),(!r||!r.isStart)&&!n[fe]&&(Dg(n),s.zOrigin&&n[ln]&&(n[ln]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Og=function(t,e){var n={target:t,props:[],revert:k1,save:N1};return t._gsap||cn.core.getCache(t),e&&e.split(",").forEach(function(s){return n.save(s)}),n},Ig,eh=function(t,e){var n=Di.createElementNS?Di.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Di.createElement(t);return n&&n.style?n:Di.createElement(t)},$n=function i(t,e,n){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(Vh,"-$1").toLowerCase())||s.getPropertyValue(e)||!n&&i(t,Ar(e)||e,1)||""},tp="O,Moz,ms,Ms,Webkit".split(","),Ar=function(t,e,n){var s=e||ms,r=s.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(tp[o]+t in r););return o<0?null:(o===3?"ms":o>=0?tp[o]:"")+t},nh=function(){T1()&&window.document&&(Zf=window,Di=Zf.document,dr=Di.documentElement,ms=eh("div")||{style:{}},eh("div"),fe=Ar(fe),ln=fe+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ig=!!Ar("perspective"),Hh=cn.core.reverting,zh=1)},pc=function i(t){var e=eh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,r=this.style.cssText,o;if(dr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),dr.removeChild(e),this.style.cssText=r,o},ep=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ug=function(t){var e;try{e=t.getBBox()}catch{e=pc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===pc||(e=pc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ep(t,["x","cx","x1"])||0,y:+ep(t,["y","cy","y1"])||0,width:0,height:0}:e},Fg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ug(t))},Ps=function(t,e){if(e){var n=t.style,s;e in xi&&e!==ln&&(e=fe),n.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(s==="--"?e:e.replace(Vh,"-$1").toLowerCase())):n.removeAttribute(e)}},Oi=function(t,e,n,s,r,o){var a=new an(t._pt,e,n,0,1,o?Lg:Pg);return t._pt=a,a.b=s,a.e=r,t._props.push(n),a},np={deg:1,rad:1,turn:1},B1={grid:1,flex:1},Yi=function i(t,e,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ms.style,l=A1.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=s==="px",f=s==="%",_,g,p,m;if(s===o||!r||np[s]||np[o])return r;if(o!=="px"&&!d&&(r=i(t,e,n,"px")),m=t.getCTM&&Fg(t),(f||o==="%")&&(xi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],be(f?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(d?o:s),g=~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Di||!g.appendChild)&&(g=Di.body),p=g._gsap,p&&f&&p.width&&l&&p.time===gn.time&&!p.uncache)return be(r/p.width*u);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+s,_=t[h],v?t.style[e]=v:Ps(t,e)}else(f||o==="%")&&!B1[$n(g,"display")]&&(a.position=$n(t,"position")),g===t&&(a.position="static"),g.appendChild(ms),_=ms[h],g.removeChild(ms),a.position="absolute";return l&&f&&(p=ys(g),p.time=gn.time,p.width=g[h]),be(d?_*r/u:_&&r?u/_*r:0)},hi=function(t,e,n,s){var r;return zh||nh(),e in Yn&&e!=="transform"&&(e=Yn[e],~e.indexOf(",")&&(e=e.split(",")[0])),xi[e]&&e!=="transform"?(r=Eo(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:tl($n(t,ln))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Qa[e]&&Qa[e](t,e,n)||$n(t,e)||Jm(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Yi(t,e,r,n)+n:r},z1=function(t,e,n,s){if(!n||n==="none"){var r=Ar(e,t,1),o=r&&$n(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=$n(t,"borderTopColor"))}var a=new an(this._pt,t.style,e,0,1,wg),l=0,c=0,h,u,d,f,_,g,p,m,v,x,b,S;if(a.b=n,a.e=s,n+="",s+="",s==="auto"&&(g=t.style[e],t.style[e]=s,s=$n(t,e)||s,g?t.style[e]=g:Ps(t,e)),h=[n,s],_g(h),n=h[0],s=h[1],d=n.match(rr)||[],S=s.match(rr)||[],S.length){for(;u=rr.exec(s);)p=u[0],v=s.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,b=g.substr((f+"").length),p.charAt(1)==="="&&(p=ur(f,p)+b),m=parseFloat(p),x=p.substr((m+"").length),l=rr.lastIndex-x.length,x||(x=x||xn.units[e]||b,l===s.length&&(s+=x,a.e+=x)),b!==x&&(f=Yi(t,e,g,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=e==="display"&&s==="none"?Lg:Pg;return Ym.test(s)&&(a.e=0),this._pt=a,a},ip={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},H1=function(t){var e=t.split(" "),n=e[0],s=e[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(t=n,n=s,s=t),e[0]=ip[n]||n,e[1]=ip[s]||s,e.join(" ")},V1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,s=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],xi[a]&&(l=1,a=a==="transformOrigin"?ln:fe),Ps(n,a);l&&(Ps(n,fe),o&&(o.svg&&n.removeAttribute("transform"),Eo(n,1),o.uncache=1,Dg(s)))}},Qa={clearProps:function(t,e,n,s,r){if(r.data!=="isFromStart"){var o=t._pt=new an(t._pt,e,n,0,0,V1);return o.u=s,o.pr=-10,o.tween=r,t._props.push(n),1}}},So=[1,0,0,1,0,0],Ng={},kg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sp=function(t){var e=$n(t,fe);return kg(e)?So:e.substr(7).match(Xm).map(be)},Gh=function(t,e){var n=t._gsap||ys(t),s=t.style,r=sp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?So:r):(r===So&&!t.offsetParent&&t!==dr&&!n.svg&&(l=s.display,s.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,dr.appendChild(t)),r=sp(t),l?s.display=l:Ps(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):dr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ih=function(t,e,n,s,r,o){var a=t._gsap,l=r||Gh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],v=l[5],x=e.split(" "),b=parseFloat(x[0])||0,S=parseFloat(x[1])||0,E,y,P,D;n?l!==So&&(y=f*p-_*g)&&(P=b*(p/y)+S*(-g/y)+(g*v-p*m)/y,D=b*(-_/y)+S*(f/y)-(f*v-_*m)/y,b=P,S=D):(E=Ug(t),b=E.x+(~x[0].indexOf("%")?b/100*E.width:b),S=E.y+(~(x[1]||x[0]).indexOf("%")?S/100*E.height:S)),s||s!==!1&&a.smooth?(m=b-c,v=S-h,a.xOffset=u+(m*f+v*g)-m,a.yOffset=d+(m*_+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=S,a.smooth=!!s,a.origin=e,a.originIsAbsolute=!!n,t.style[ln]="0px 0px",o&&(Oi(o,a,"xOrigin",c,b),Oi(o,a,"yOrigin",h,S),Oi(o,a,"xOffset",u,a.xOffset),Oi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+S)},Eo=function(t,e){var n=t._gsap||new Mg(t);if("x"in n&&!e&&!n.uncache)return n;var s=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=$n(t,ln)||"0",h,u,d,f,_,g,p,m,v,x,b,S,E,y,P,D,M,A,F,X,O,U,I,V,Y,q,$,Z,st,_t,H,K;return h=u=d=g=p=m=v=x=b=0,f=_=1,n.svg=!!(t.getCTM&&Fg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),s.scale=s.rotate=s.translate="none"),y=Gh(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),ih(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,y)),S=n.xOrigin||0,E=n.yOrigin||0,y!==So&&(A=y[0],F=y[1],X=y[2],O=y[3],h=U=y[4],u=I=y[5],y.length===6?(f=Math.sqrt(A*A+F*F),_=Math.sqrt(O*O+X*X),g=A||F?er(F,A)*hs:0,v=X||O?er(X,O)*hs+g:0,v&&(_*=Math.abs(Math.cos(v*fr))),n.svg&&(h-=S-(S*A+E*X),u-=E-(S*F+E*O))):(K=y[6],_t=y[7],$=y[8],Z=y[9],st=y[10],H=y[11],h=y[12],u=y[13],d=y[14],P=er(K,st),p=P*hs,P&&(D=Math.cos(-P),M=Math.sin(-P),V=U*D+$*M,Y=I*D+Z*M,q=K*D+st*M,$=U*-M+$*D,Z=I*-M+Z*D,st=K*-M+st*D,H=_t*-M+H*D,U=V,I=Y,K=q),P=er(-X,st),m=P*hs,P&&(D=Math.cos(-P),M=Math.sin(-P),V=A*D-$*M,Y=F*D-Z*M,q=X*D-st*M,H=O*M+H*D,A=V,F=Y,X=q),P=er(F,A),g=P*hs,P&&(D=Math.cos(P),M=Math.sin(P),V=A*D+F*M,Y=U*D+I*M,F=F*D-A*M,I=I*D-U*M,A=V,U=Y),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=be(Math.sqrt(A*A+F*F+X*X)),_=be(Math.sqrt(I*I+K*K)),P=er(U,I),v=Math.abs(P)>2e-4?P*hs:0,b=H?1/(H<0?-H:H):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!kg($n(t,fe)),V&&t.setAttribute("transform",V))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=be(f),n.scaleY=be(_),n.rotation=be(g)+a,n.rotationX=be(p)+a,n.rotationY=be(m)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(s[ln]=tl(c)),n.xOffset=n.yOffset=0,n.force3D=xn.force3D,n.renderTransform=n.svg?W1:Ig?Bg:G1,n.uncache=0,n},tl=function(t){return(t=t.split(" "))[0]+" "+t[1]},mc=function(t,e,n){var s=Ve(e);return be(parseFloat(e)+parseFloat(Yi(t,"x",n+"px",s)))+s},G1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Bg(t,e)},rs="0deg",zr="0px",os=") ",Bg=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,x=n.zOrigin,b="",S=m==="auto"&&t&&t!==1||m===!0;if(x&&(u!==rs||h!==rs)){var E=parseFloat(h)*fr,y=Math.sin(E),P=Math.cos(E),D;E=parseFloat(u)*fr,D=Math.cos(E),o=mc(v,o,y*D*-x),a=mc(v,a,-Math.sin(E)*-x),l=mc(v,l,P*D*-x+x)}p!==zr&&(b+="perspective("+p+os),(s||r)&&(b+="translate("+s+"%, "+r+"%) "),(S||o!==zr||a!==zr||l!==zr)&&(b+=l!==zr||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+os),c!==rs&&(b+="rotate("+c+os),h!==rs&&(b+="rotateY("+h+os),u!==rs&&(b+="rotateX("+u+os),(d!==rs||f!==rs)&&(b+="skew("+d+", "+f+os),(_!==1||g!==1)&&(b+="scale("+_+", "+g+os),v.style[fe]=b||"translate(0, 0)"},W1=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,x=parseFloat(o),b=parseFloat(a),S,E,y,P,D;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=fr,c*=fr,S=Math.cos(l)*u,E=Math.sin(l)*u,y=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=fr,D=Math.tan(c-h),D=Math.sqrt(1+D*D),y*=D,P*=D,h&&(D=Math.tan(h),D=Math.sqrt(1+D*D),S*=D,E*=D)),S=be(S),E=be(E),y=be(y),P=be(P)):(S=u,P=d,E=y=0),(x&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(x=Yi(f,"x",o,"px"),b=Yi(f,"y",a,"px")),(_||g||p||m)&&(x=be(x+_-(_*S+g*y)+p),b=be(b+g-(_*E+g*P)+m)),(s||r)&&(D=f.getBBox(),x=be(x+s/100*D.width),b=be(b+r/100*D.height)),D="matrix("+S+","+E+","+y+","+P+","+x+","+b+")",f.setAttribute("transform",D),v&&(f.style[fe]=D)},X1=function(t,e,n,s,r){var o=360,a=De(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?hs:1),c=l-s,h=s+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Qf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Qf)%o-~~(c/o)*o)),t._pt=d=new an(t._pt,e,n,s,c,R1),d.e=h,d.u="deg",t._props.push(n),d},rp=function(t,e){for(var n in e)t[n]=e[n];return t},Y1=function(t,e,n){var s=rp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[fe]=e,a=Eo(n,1),Ps(n,fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[fe],o[fe]=e,a=Eo(n,1),o[fe]=c);for(l in xi)c=s[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=Ve(c),_=Ve(h),u=f!==_?Yi(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new an(t._pt,a,l,u,d-u,th),t._pt.u=_||0,t._props.push(l));rp(a,s)};on("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",s="Bottom",r="Left",o=(t<3?[e,n,s,r]:[e+r,e+n,s+n,s+r]).map(function(a){return t<2?i+a:"border"+a+i});Qa[t>1?"border"+i:i]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return hi(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var zg={name:"css",register:nh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,s,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,p,m,v,x,b,S,E,y,P;zh||nh(),this.styles=this.styles||Og(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(mn[g]&&yg(g,e,n,s,t,r)))){if(f=typeof h,_=Qa[g],f==="function"&&(h=h.call(n,s,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=bo(h)),_)_(this,t,g,h,n)&&(y=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Bi.lastIndex=0,Bi.test(c)||(p=Ve(c),m=Ve(h)),m?p!==m&&(c=Yi(t,g,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,s,r,0,0,g),o.push(g),P.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,t,r):l[g],De(c)&&~c.indexOf("random(")&&(c=bo(c)),Ve(c+"")||c==="auto"||(c+=xn.units[g]||Ve(hi(t,g))||""),(c+"").charAt(1)==="="&&(c=hi(t,g))):c=hi(t,g),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in Yn&&(g==="autoAlpha"&&(d===1&&hi(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,a.visibility),Oi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Yn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in xi,x){if(this.styles.save(g),b||(S=t._gsap,S.renderTransform&&!e.parseTransform||Eo(t,e.parseTransform),E=e.smoothOrigin!==!1&&S.smooth,b=this._pt=new an(this._pt,a,fe,0,1,S.renderTransform,S,0,-1),b.dep=1),g==="scale")this._pt=new an(this._pt,S,"scaleY",S.scaleY,(v?ur(S.scaleY,v+u):u)-S.scaleY||0,th),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(ln,0,a[ln]),h=H1(h),S.svg?ih(t,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==S.zOrigin&&Oi(this,S,"zOrigin",S.zOrigin,m),Oi(this,a,g,tl(c),tl(h)));continue}else if(g==="svgOrigin"){ih(t,h,1,E,0,this);continue}else if(g in Ng){X1(this,S,g,d,v?ur(d,v+h):h);continue}else if(g==="smoothOrigin"){Oi(this,S,"smooth",S.smooth,h);continue}else if(g==="force3D"){S[g]=h;continue}else if(g==="transform"){Y1(this,h,t);continue}}else g in a||(g=Ar(g)||g);if(x||(u||u===0)&&(d||d===0)&&!w1.test(h)&&g in a)p=(c+"").substr((d+"").length),u||(u=0),m=Ve(h)||(g in xn.units?xn.units[g]:p),p!==m&&(d=Yi(t,g,c,m)),this._pt=new an(this._pt,x?S:a,g,d,(v?ur(d,v+u):u)-d,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?P1:th),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=C1);else if(g in a)z1.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,s,r);else if(g!=="parseTransform"){Lh(g,h);continue}x||(g in a?P.push(g,0,a[g]):P.push(g,1,c||t[g])),o.push(g)}}y&&Rg(this)},render:function(t,e){if(e.tween._time||!Hh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:hi,aliases:Yn,getSetter:function(t,e,n){var s=Yn[e];return s&&s.indexOf(",")<0&&(e=s),e in xi&&e!==ln&&(t._gsap.x||hi(t,"x"))?n&&Jf===n?e==="scale"?I1:O1:(Jf=n||{})&&(e==="scale"?U1:F1):t.style&&!Rh(t.style[e])?L1:~e.indexOf("-")?D1:kh(t,e)},core:{_removeProperty:Ps,_getMatrix:Gh}};cn.utils.checkPrefix=Ar;cn.core.getStyleSaver=Og;(function(i,t,e,n){var s=on(i+","+t+","+e,function(r){xi[r]=1});on(t,function(r){xn.units[r]="deg",Ng[r]=1}),Yn[s[13]]=i+","+t,on(n,function(r){var o=r.split(":");Yn[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){xn.units[i]="px"});cn.registerPlugin(zg);var Hg=cn.registerPlugin(zg)||cn;Hg.core.Tween;const op={type:"change"},gc={type:"start"},ap={type:"end"},_a=new Tm,lp=new Ti,j1=Math.cos(70*vy.DEG2RAD);class q1 extends Ds{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Tt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(op),n.update(),r=s.NONE},this.update=function(){const L=new B,rt=new Gi().setFromUnitVectors(t.up,new B(0,1,0)),ct=rt.clone().invert(),Mt=new B,C=new Gi,nt=new B,tt=2*Math.PI;return function(St=null){const $t=n.object.position;L.copy($t).sub(n.target),L.applyQuaternion(rt),a.setFromVector3(L),n.autoRotate&&r===s.NONE&&F(M(St)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Wt=n.minAzimuthAngle,ee=n.maxAzimuthAngle;isFinite(Wt)&&isFinite(ee)&&(Wt<-Math.PI?Wt+=tt:Wt>Math.PI&&(Wt-=tt),ee<-Math.PI?ee+=tt:ee>Math.PI&&(ee-=tt),Wt<=ee?a.theta=Math.max(Wt,Math.min(ee,a.theta)):a.theta=a.theta>(Wt+ee)/2?Math.max(Wt,a.theta):Math.min(ee,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(ct),$t.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Oe=!1;if(n.zoomToCursor&&E){let Kt=null;if(n.object.isPerspectiveCamera){const xe=L.length();Kt=$(xe*c);const je=xe-Kt;n.object.position.addScaledVector(b,je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const xe=new B(S.x,S.y,0);xe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Oe=!0;const je=new B(S.x,S.y,0);je.unproject(n.object),n.object.position.sub(je).add(xe),n.object.updateMatrixWorld(),Kt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Kt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Kt).add(n.object.position):(_a.origin.copy(n.object.position),_a.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_a.direction))<j1?t.lookAt(n.target):(lp.setFromNormalAndCoplanarPoint(n.object.up,n.target),_a.intersectPlane(lp,n.target))))}else n.object.isOrthographicCamera&&(Oe=c!==1,Oe&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,E=!1,Oe||Mt.distanceToSquared(n.object.position)>o||8*(1-C.dot(n.object.quaternion))>o||nt.distanceToSquared(n.target)>0?(n.dispatchEvent(op),Mt.copy(n.object.position),C.copy(n.object.quaternion),nt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Zt),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Gf,l=new Gf;let c=1;const h=new B,u=new kt,d=new kt,f=new kt,_=new kt,g=new kt,p=new kt,m=new kt,v=new kt,x=new kt,b=new B,S=new kt;let E=!1;const y=[],P={};let D=!1;function M(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function A(L){const rt=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*rt)}function F(L){l.theta-=L}function X(L){l.phi-=L}const O=function(){const L=new B;return function(ct,Mt){L.setFromMatrixColumn(Mt,0),L.multiplyScalar(-ct),h.add(L)}}(),U=function(){const L=new B;return function(ct,Mt){n.screenSpacePanning===!0?L.setFromMatrixColumn(Mt,1):(L.setFromMatrixColumn(Mt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ct),h.add(L)}}(),I=function(){const L=new B;return function(ct,Mt){const C=n.domElement;if(n.object.isPerspectiveCamera){const nt=n.object.position;L.copy(nt).sub(n.target);let tt=L.length();tt*=Math.tan(n.object.fov/2*Math.PI/180),O(2*ct*tt/C.clientHeight,n.object.matrix),U(2*Mt*tt/C.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(ct*(n.object.right-n.object.left)/n.object.zoom/C.clientWidth,n.object.matrix),U(Mt*(n.object.top-n.object.bottom)/n.object.zoom/C.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L,rt){if(!n.zoomToCursor)return;E=!0;const ct=n.domElement.getBoundingClientRect(),Mt=L-ct.left,C=rt-ct.top,nt=ct.width,tt=ct.height;S.x=Mt/nt*2-1,S.y=-(C/tt)*2+1,b.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function Z(L){u.set(L.clientX,L.clientY)}function st(L){q(L.clientX,L.clientX),m.set(L.clientX,L.clientY)}function _t(L){_.set(L.clientX,L.clientY)}function H(L){d.set(L.clientX,L.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;F(2*Math.PI*f.x/rt.clientHeight),X(2*Math.PI*f.y/rt.clientHeight),u.copy(d),n.update()}function K(L){v.set(L.clientX,L.clientY),x.subVectors(v,m),x.y>0?V(A(x.y)):x.y<0&&Y(A(x.y)),m.copy(v),n.update()}function ht(L){g.set(L.clientX,L.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),I(p.x,p.y),_.copy(g),n.update()}function Et(L){q(L.clientX,L.clientY),L.deltaY<0?Y(A(L.deltaY)):L.deltaY>0&&V(A(L.deltaY)),n.update()}function At(L){let rt=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),rt=!0;break}rt&&(L.preventDefault(),n.update())}function pt(L){if(y.length===1)u.set(L.pageX,L.pageY);else{const rt=ut(L),ct=.5*(L.pageX+rt.x),Mt=.5*(L.pageY+rt.y);u.set(ct,Mt)}}function jt(L){if(y.length===1)_.set(L.pageX,L.pageY);else{const rt=ut(L),ct=.5*(L.pageX+rt.x),Mt=.5*(L.pageY+rt.y);_.set(ct,Mt)}}function Lt(L){const rt=ut(L),ct=L.pageX-rt.x,Mt=L.pageY-rt.y,C=Math.sqrt(ct*ct+Mt*Mt);m.set(0,C)}function k(L){n.enableZoom&&Lt(L),n.enablePan&&jt(L)}function Ee(L){n.enableZoom&&Lt(L),n.enableRotate&&pt(L)}function yt(L){if(y.length==1)d.set(L.pageX,L.pageY);else{const ct=ut(L),Mt=.5*(L.pageX+ct.x),C=.5*(L.pageY+ct.y);d.set(Mt,C)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;F(2*Math.PI*f.x/rt.clientHeight),X(2*Math.PI*f.y/rt.clientHeight),u.copy(d)}function Rt(L){if(y.length===1)g.set(L.pageX,L.pageY);else{const rt=ut(L),ct=.5*(L.pageX+rt.x),Mt=.5*(L.pageY+rt.y);g.set(ct,Mt)}p.subVectors(g,_).multiplyScalar(n.panSpeed),I(p.x,p.y),_.copy(g)}function xt(L){const rt=ut(L),ct=L.pageX-rt.x,Mt=L.pageY-rt.y,C=Math.sqrt(ct*ct+Mt*Mt);v.set(0,C),x.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),V(x.y),m.copy(v);const nt=(L.pageX+rt.x)*.5,tt=(L.pageY+rt.y)*.5;q(nt,tt)}function re(L){n.enableZoom&&xt(L),n.enablePan&&Rt(L)}function Dt(L){n.enableZoom&&xt(L),n.enableRotate&&yt(L)}function R(L){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",z)),zt(L),L.pointerType==="touch"?Ot(L):it(L))}function T(L){n.enabled!==!1&&(L.pointerType==="touch"?Q(L):J(L))}function z(L){switch(Ct(L),y.length){case 0:n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",z),n.dispatchEvent(ap),r=s.NONE;break;case 1:const rt=y[0],ct=P[rt];Ot({pointerId:rt,pageX:ct.x,pageY:ct.y});break}}function it(L){let rt;switch(L.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case Ns.DOLLY:if(n.enableZoom===!1)return;st(L),r=s.DOLLY;break;case Ns.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;_t(L),r=s.PAN}else{if(n.enableRotate===!1)return;Z(L),r=s.ROTATE}break;case Ns.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Z(L),r=s.ROTATE}else{if(n.enablePan===!1)return;_t(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(gc)}function J(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;H(L);break;case s.DOLLY:if(n.enableZoom===!1)return;K(L);break;case s.PAN:if(n.enablePan===!1)return;ht(L);break}}function et(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(gc),Et(mt(L)),n.dispatchEvent(ap))}function mt(L){const rt=L.deltaMode,ct={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(rt){case 1:ct.deltaY*=16;break;case 2:ct.deltaY*=100;break}return L.ctrlKey&&!D&&(ct.deltaY*=10),ct}function lt(L){L.key==="Control"&&(D=!0,n.domElement.getRootNode().addEventListener("keyup",ft,{passive:!0,capture:!0}))}function ft(L){L.key==="Control"&&(D=!1,n.domElement.getRootNode().removeEventListener("keyup",ft,{passive:!0,capture:!0}))}function Tt(L){n.enabled===!1||n.enablePan===!1||At(L)}function Ot(L){switch(bt(L),y.length){case 1:switch(n.touches.ONE){case ks.ROTATE:if(n.enableRotate===!1)return;pt(L),r=s.TOUCH_ROTATE;break;case ks.PAN:if(n.enablePan===!1)return;jt(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ks.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(L),r=s.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(gc)}function Q(L){switch(bt(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Rt(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(L),n.update();break;default:r=s.NONE}}function Zt(L){n.enabled!==!1&&L.preventDefault()}function zt(L){y.push(L.pointerId)}function Ct(L){delete P[L.pointerId];for(let rt=0;rt<y.length;rt++)if(y[rt]==L.pointerId){y.splice(rt,1);return}}function bt(L){let rt=P[L.pointerId];rt===void 0&&(rt=new kt,P[L.pointerId]=rt),rt.set(L.pageX,L.pageY)}function ut(L){const rt=L.pointerId===y[0]?y[1]:y[0];return P[rt]}n.domElement.addEventListener("contextmenu",Zt),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",et,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",lt,{passive:!0,capture:!0}),this.update()}}const Bn=class Bn{static move_decoder(t){let e=t[0],n=/\d/.test(t)?parseInt(t.replace(/\D/g,"")):1,s=t.includes("'")?-1:1;if(e in Bn.moves)return{side:e,times:n,prime:s}}constructor(t,e){this.id=Bn.ammount,Bn.ammount++,this.scramble_position=e,this.scramble,this.pieces={FUL:null,FUM:null,FUR:null,FML:null,FMM:null,FMR:null,FDL:null,FDM:null,FDR:null,BUL:null,BUM:null,BUR:null,BML:null,BMM:null,BMR:null,BDL:null,BDM:null,BDR:null,UUL:null,UUM:null,UUR:null,UML:null,UMM:null,UMR:null,UDL:null,UDM:null,UDR:null,DUL:null,DUM:null,DUR:null,DML:null,DMM:null,DMR:null,DDL:null,DDM:null,DDR:null,RUL:null,RUM:null,RUR:null,RML:null,RMM:null,RMR:null,RDL:null,RDM:null,RDR:null,LUL:null,LUM:null,LUR:null,LML:null,LMM:null,LMR:null,LDL:null,LDM:null,LDR:null},this.type=t,this.location}move(t){let e=t[0];/\d/.test(t)&&parseInt(t.replace(/\D/g,"")),t.includes("'"),e in Bn.moves}updatePieces(t){t=Bn.move_decoder(t);let e=t.side,n=t.prime;const s=Object.assign({},this.pieces);console.log(s),Bn.moves[e].pairs.forEach(r=>{n==-1&&(this.pieces[r[0]]=s[r[1]]),n==1&&(this.pieces[r[1]]=s[r[0]])})}generateScramble(t=20){let e=[["R","L"],["U","D"],["F","B"]],n=[],s=0,r,o;for(;n.length<t;){let a=Math.floor(Math.random()*2);a=a?"2":"";let l=Math.floor(Math.random()*2);l=l&&!a?"'":"";let c=3,h=3;for(;![0,1,2].includes(c);)c=Math.floor(Math.random()*3);for(;![0,1].includes(h);)h=Math.floor(Math.random()*2);if(c==r&&h==o)continue;if(c==r){if(s++,s>1)continue}else s=0;r=c,o=h;let u=e[c][h]+a+l;n.push(u)}return this.scramble=n,n}displayScramble(t){let e=this.scramble;t&&(e=this.generateScramble());let n="";e.forEach(s=>{n+=s+" "}),n=n.slice(0,-1),document.getElementById(this.scramble_position).innerHTML=n}};ot(Bn,"ammount",0),ot(Bn,"moves",{R:{pieces:["FDR","FMR","FUR","UDR","UMR","UUR","BUL","BML","BDL","DDR","DMR","DUR","RUR","RUM","RUL","RMR","RMM","RML","RDR","RDM","RDL"],pairs:[["UDR","FDR"],["BUL","UDR"],["DDR","BUL"],["FDR","DDR"],["UUR","FUR"],["BDL","UUR"],["DUR","BDL"],["FUR","DUR"],["UMR","FMR"],["BML","UMR"],["DMR","BML"],["FMR","DMR"],["RDL","RDR"],["RDR","RUR"],["RUR","RUL"],["RUL","RDL"],["RML","RUM"],["RUM","RMR"],["RMR","RDM"],["RDM","RML"]],axes:{x:-1,y:0,z:0}},D:{pieces:["FDR","FDM","FDL","LDR","LDM","LDL","BDR","BDM","BDL","RDR","RDM","RDL","DUR","DUM","DUL","DMR","DMM","DML","DDR","DDM","DDL"],pairs:[["FDL","LDL"],["LDL","BDL"],["BDL","RDL"],["RDL","FDL"],["FDR","LDR"],["LDR","BDR"],["BDR","RDR"],["RDR","FDR"],["FDM","LDM"],["LDM","BDM"],["BDM","RDM"],["RDM","FDM"],["DDL","DUL"],["DUL","DUR"],["DUR","DDR"],["DDR","DDL"],["DUM","DMR"],["DMR","DDM"],["DDM","DML"],["DML","DUM"]],axes:{x:0,y:-1,z:0}}});let pr=Bn,$1="hsl(100, 90%, 50%)",Vg="hsl(0, 0%, 100%)",K1="hsl(225, 90%, 50%)",Z1="hsl(65, 90%, 50%)",J1="hsl(0, 90%, 50%)",Q1="hsl(30, 90%, 50%)";class tR{constructor(t){this.parent=document.getElementById(t),this.canvas=document.createElement("canvas"),this.canvas.classList.add("bg"),this.parent.appendChild(this.canvas),this.scene=new Pw,this.light=new Dw(Vg),this.camera=new En(50),this.renderer=new Hm({canvas:this.canvas,alpha:!0}),this.controls=new q1(this.camera,this.canvas),this.defaults(),this.addResizer(this,this.parent),this.animate(this)}cameraPosition(t){for(const e in t)switch(e){case"x":this.camera.position.x=t[e];break;case"y":this.camera.position.y=t[e];break;case"z":this.camera.position.z=t[e];break}}defaults(){this.renderer.setPixelRatio(window.devicePixelRatio),this.scene.add(this.light),this.scene.add(this.camera),this.cameraPosition({x:2,y:3,z:8}),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.enableZoom=!1}animate(t){requestAnimationFrame(()=>{t.animate(t)}),!t.parent.classList.contains("hidden")&&(t.controls.update(),t.renderer.render(t.scene,t.camera))}addResizer(t,e){new ResizeObserver(s=>{let r={width:e.clientWidth,height:e.clientHeight};t.renderer.setSize(r.width,r.height),t.camera.aspect=r.width/r.height,t.camera.updateProjectionMatrix()}).observe(e)}}class eR extends pr{constructor(t,e){super("3d",t),this.canvas=new tR(e),this.moving=!1,this.addKeyInputs(this),this.create3dPieces()}create3dPieces(){let t=-.5*Math.PI;const e={F:{color:$1,axis:"z",ud:[1,0,-1],lr:[-1,0,1]},B:{color:K1,axis:"z",ud:[1,0,-1],lr:[1,0,-1]},U:{color:Z1,axis:"y",ud:[-1,0,1],lr:[-1,0,1]},D:{color:Vg,axis:"y",ud:[1,0,-1],lr:[-1,0,1]},L:{color:J1,axis:"x",ud:[1,0,-1],lr:[-1,0,1]},R:{color:Q1,axis:"x",ud:[1,0,-1],lr:[1,0,-1]}},n=["U","M","D"],s=["L","M","R"];for(const r in e){const o=e[r];for(let a=0;a<3;a++)for(let l=0;l<3;l++){const c=r+n[a]+s[l],h=new Lo(1,1),u=new Th({color:o.color,side:Vn}),d=new Xn(h,u);switch(o.axis){case"x":d.position.x=r=="R"?1.5:-1.5,d.position.y=o.ud[a],d.position.z=o.lr[l],d.rotation.y=t;break;case"y":d.position.x=o.lr[l],d.position.y=r=="U"?1.5:-1.5,d.position.z=o.ud[a],d.rotation.x=t;break;case"z":d.position.x=o.lr[l],d.position.y=o.ud[a],d.position.z=r=="F"?1.5:-1.5;break}this.pieces[c]=d,this.canvas.scene.add(d)}}}move(t){if(this.moving)return;this.moving=!0;let e=pr.move_decoder(t),n=.5*Math.PI,s=e.side,r=e.times,o=e.prime;e=pr.moves[s];let a=new jr;e.pieces.forEach(l=>{a.add(this.pieces[l])}),this.canvas.scene.add(a);for(let l=0;l<r;l++)Hg.to(a.rotation,{x:e.axes.x*n*o,y:e.axes.y*n*o,z:e.axes.z*n*o,onComplete:this.updateMatrix,onCompleteParams:[a,this,t],duration:.3})}updateMatrix(t,e,n){t.children.forEach(r=>{let o=new B,a=new Co,l=new Gi;r.getWorldPosition(o),r.getWorldQuaternion(l),a.setFromQuaternion(l),r.position.x=o.x,r.position.y=o.y,r.position.z=o.z,r.rotation.x=a.x,r.rotation.y=a.y,r.rotation.z=a.z});let s=t.children.length;for(let r=1;r<s+1;r++)e.canvas.scene.add(t.children[s-r]);e.updatePieces(n),e.moving=!1}addKeyInputs(t){document.addEventListener("keyup",e=>{this.canvas.parent.classList.contains("hidden")||(e.code=="KeyM"&&t.move("R"),e.code=="KeyU"&&t.move("R'"),e.code=="KeyS"&&t.move("D"),e.code=="KeyG"&&console.log(t.generateScramble()))})}}let Kr=Object;window.onload=async function(){await ll.open(),await new Promise(e=>{setTimeout(()=>{console.log(2),e()},1e3)}),document.getElementById("website-loading").style.opacity="0",Kr.timers=[new rM],Kr.charts=[new Ba],Kr.tables=[new za("history-div",["Seconds","Avg.5","Avg.12","Avg.50"],["delete","expand"])];let i=new eR("scramble","td-tab");Kr.cubes=[i],new pr("2d","scramble").displayScramble(!0),cp()};const ao=Kr;
