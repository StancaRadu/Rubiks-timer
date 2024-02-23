var Qd=Object.defineProperty;var tf=(i,t,e)=>t in i?Qd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var rt=(i,t,e)=>(tf(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();async function mu(){let i=Hs.charts[0].chart,t=Hs.charts[0],e=await tr.get();Hs.tables.forEach(n=>{n.body.replaceChildren(n.body.firstChild),n.rows=[];for(const s in e)n.addTime(e[s])}),i.data.datasets[0].data=[],i.data.datasets[1].data=[],i.data.datasets[2].data=[],i.data.datasets[3].data=[],i.data.labels=[],i.data.size=0;for(const n in e)t.addTime(e[n],!1);i.update()}function gu(i,t=!1){let e=i.length,n=Math.floor(Math.ceil(Hs.exclude_from_avg*e/100/2)),s=0,r=[];return i.forEach(a=>{t?r.push(a):r.push(a.seconds)}),r.sort(),r=r.slice(n,e-n),r.forEach(a=>{s+=a}),(s/r.length).toFixed(3)}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Zs(i){return i+.5|0}const Vn=(i,t,e)=>Math.max(Math.min(i,e),t);function As(i){return Vn(Zs(i*2.55),0,255)}function jn(i){return Vn(Zs(i*255),0,255)}function wn(i){return Vn(Zs(i/2.55)/100,0,1)}function bl(i){return Vn(Zs(i*100),0,100)}const $e={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},va=[..."0123456789ABCDEF"],ef=i=>va[i&15],nf=i=>va[(i&240)>>4]+va[i&15],ar=i=>(i&240)>>4===(i&15),sf=i=>ar(i.r)&&ar(i.g)&&ar(i.b)&&ar(i.a);function rf(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&$e[i[1]]*17,g:255&$e[i[2]]*17,b:255&$e[i[3]]*17,a:t===5?$e[i[4]]*17:255}:(t===7||t===9)&&(e={r:$e[i[1]]<<4|$e[i[2]],g:$e[i[3]]<<4|$e[i[4]],b:$e[i[5]]<<4|$e[i[6]],a:t===9?$e[i[7]]<<4|$e[i[8]]:255})),e}const of=(i,t)=>i<255?t(i):"";function af(i){var t=sf(i)?ef:nf;return i?"#"+t(i.r)+t(i.g)+t(i.b)+of(i.a,t):void 0}const lf=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function _u(i,t,e){const n=t*Math.min(e,1-e),s=(r,o=(r+i/30)%12)=>e-n*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function cf(i,t,e){const n=(s,r=(s+i/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function hf(i,t,e){const n=_u(i,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)n[s]*=1-t-e,n[s]+=t;return n}function uf(i,t,e,n,s){return i===s?(t-e)/n+(t<e?6:0):t===s?(e-i)/n+2:(i-t)/n+4}function Xa(i){const e=i.r/255,n=i.g/255,s=i.b/255,r=Math.max(e,n,s),o=Math.min(e,n,s),a=(r+o)/2;let l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=uf(e,n,s,h,r),l=l*60+.5),[l|0,c||0,a]}function Ya(i,t,e,n){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,n)).map(jn)}function ja(i,t,e){return Ya(_u,i,t,e)}function df(i,t,e){return Ya(hf,i,t,e)}function ff(i,t,e){return Ya(cf,i,t,e)}function xu(i){return(i%360+360)%360}function pf(i){const t=lf.exec(i);let e=255,n;if(!t)return;t[5]!==n&&(e=t[6]?As(+t[5]):jn(+t[5]));const s=xu(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?n=df(s,r,o):t[1]==="hsv"?n=ff(s,r,o):n=ja(s,r,o),{r:n[0],g:n[1],b:n[2],a:e}}function mf(i,t){var e=Xa(i);e[0]=xu(e[0]+t),e=ja(e),i.r=e[0],i.g=e[1],i.b=e[2]}function gf(i){if(!i)return;const t=Xa(i),e=t[0],n=bl(t[1]),s=bl(t[2]);return i.a<255?`hsla(${e}, ${n}%, ${s}%, ${wn(i.a)})`:`hsl(${e}, ${n}%, ${s}%)`}const Ml={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},yl={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function _f(){const i={},t=Object.keys(yl),e=Object.keys(Ml);let n,s,r,o,a;for(n=0;n<t.length;n++){for(o=a=t[n],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Ml[r]);r=parseInt(yl[o],16),i[a]=[r>>16&255,r>>8&255,r&255]}return i}let lr;function xf(i){lr||(lr=_f(),lr.transparent=[0,0,0,0]);const t=lr[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const vf=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function bf(i){const t=vf.exec(i);let e=255,n,s,r;if(t){if(t[7]!==n){const o=+t[7];e=t[8]?As(o):Vn(o*255,0,255)}return n=+t[1],s=+t[3],r=+t[5],n=255&(t[2]?As(n):Vn(n,0,255)),s=255&(t[4]?As(s):Vn(s,0,255)),r=255&(t[6]?As(r):Vn(r,0,255)),{r:n,g:s,b:r,a:e}}}function Mf(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${wn(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Lo=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,Di=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function yf(i,t,e){const n=Di(wn(i.r)),s=Di(wn(i.g)),r=Di(wn(i.b));return{r:jn(Lo(n+e*(Di(wn(t.r))-n))),g:jn(Lo(s+e*(Di(wn(t.g))-s))),b:jn(Lo(r+e*(Di(wn(t.b))-r))),a:i.a+e*(t.a-i.a)}}function cr(i,t,e){if(i){let n=Xa(i);n[t]=Math.max(0,Math.min(n[t]+n[t]*e,t===0?360:1)),n=ja(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function vu(i,t){return i&&Object.assign(t||{},i)}function Sl(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=jn(i[3]))):(t=vu(i,{r:0,g:0,b:0,a:1}),t.a=jn(t.a)),t}function Sf(i){return i.charAt(0)==="r"?bf(i):pf(i)}let bu=class ba{constructor(t){if(t instanceof ba)return t;const e=typeof t;let n;e==="object"?n=Sl(t):e==="string"&&(n=rf(t)||xf(t)||Sf(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=vu(this._rgb);return t&&(t.a=wn(t.a)),t}set rgb(t){this._rgb=Sl(t)}rgbString(){return this._valid?Mf(this._rgb):void 0}hexString(){return this._valid?af(this._rgb):void 0}hslString(){return this._valid?gf(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*s.r+.5,n.g=255&c*n.g+r*s.g+.5,n.b=255&c*n.b+r*s.b+.5,n.a=o*n.a+(1-o)*s.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=yf(this._rgb,t._rgb,e)),this}clone(){return new ba(this.rgb)}alpha(t){return this._rgb.a=jn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Zs(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return cr(this._rgb,2,t),this}darken(t){return cr(this._rgb,2,-t),this}saturate(t){return cr(this._rgb,1,t),this}desaturate(t){return cr(this._rgb,1,-t),this}rotate(t){return mf(this._rgb,t),this}};/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function xn(){}const Ef=(()=>{let i=0;return()=>i++})();function jt(i){return i===null||typeof i>"u"}function se(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Xt(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function ce(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function Ye(i,t){return ce(i)?i:t}function Ut(i,t){return typeof i>"u"?t:i}const Tf=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,Mu=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function ee(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function Zt(i,t,e,n){let s,r,o;if(se(i))if(r=i.length,n)for(s=r-1;s>=0;s--)t.call(e,i[s],s);else for(s=0;s<r;s++)t.call(e,i[s],s);else if(Xt(i))for(o=Object.keys(i),r=o.length,s=0;s<r;s++)t.call(e,i[o[s]],o[s])}function Qr(i,t){let e,n,s,r;if(!i||!t||i.length!==t.length)return!1;for(e=0,n=i.length;e<n;++e)if(s=i[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function to(i){if(se(i))return i.map(to);if(Xt(i)){const t=Object.create(null),e=Object.keys(i),n=e.length;let s=0;for(;s<n;++s)t[e[s]]=to(i[e[s]]);return t}return i}function yu(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Af(i,t,e,n){if(!yu(i))return;const s=t[i],r=e[i];Xt(s)&&Xt(r)?Vs(s,r,n):t[i]=to(r)}function Vs(i,t,e){const n=se(t)?t:[t],s=n.length;if(!Xt(i))return i;e=e||{};const r=e.merger||Af;let o;for(let a=0;a<s;++a){if(o=n[a],!Xt(o))continue;const l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],i,o,e)}return i}function Is(i,t){return Vs(i,t,{merger:wf})}function wf(i,t,e){if(!yu(i))return;const n=t[i],s=e[i];Xt(n)&&Xt(s)?Is(n,s):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=to(s))}const El={"":i=>i,x:i=>i.x,y:i=>i.y};function Rf(i){const t=i.split("."),e=[];let n="";for(const s of t)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(e.push(n),n="");return e}function Cf(i){const t=Rf(i);return e=>{for(const n of t){if(n==="")break;e=e&&e[n]}return e}}function Zn(i,t){return(El[t]||(El[t]=Cf(t)))(i)}function qa(i){return i.charAt(0).toUpperCase()+i.slice(1)}const Gs=i=>typeof i<"u",Jn=i=>typeof i=="function",Tl=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function Pf(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const oe=Math.PI,re=2*oe,Lf=re+oe,eo=Number.POSITIVE_INFINITY,Df=oe/180,fe=oe/2,ri=oe/4,Al=oe*2/3,Gn=Math.log10,mn=Math.sign;function Os(i,t,e){return Math.abs(i-t)<e}function wl(i){const t=Math.round(i);i=Os(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(Gn(i))),n=i/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function If(i){const t=[],e=Math.sqrt(i);let n;for(n=1;n<e;n++)i%n===0&&(t.push(n),t.push(i/n));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function os(i){return!isNaN(parseFloat(i))&&isFinite(i)}function Of(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function Su(i,t,e){let n,s,r;for(n=0,s=i.length;n<s;n++)r=i[n][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function rn(i){return i*(oe/180)}function $a(i){return i*(180/oe)}function Rl(i){if(!ce(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function Eu(i,t){const e=t.x-i.x,n=t.y-i.y,s=Math.sqrt(e*e+n*n);let r=Math.atan2(n,e);return r<-.5*oe&&(r+=re),{angle:r,distance:s}}function Ma(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function Uf(i,t){return(i-t+Lf)%re-oe}function je(i){return(i%re+re)%re}function Ws(i,t,e,n){const s=je(i),r=je(t),o=je(e),a=je(r-s),l=je(o-s),c=je(s-r),h=je(s-o);return s===r||s===o||n&&r===o||a>l&&c<h}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Nf(i){return Me(i,-32768,32767)}function Pn(i,t,e,n=1e-6){return i>=Math.min(t,e)-n&&i<=Math.max(t,e)+n}function Ka(i,t,e){e=e||(o=>i[o]<t);let n=i.length-1,s=0,r;for(;n-s>1;)r=s+n>>1,e(r)?s=r:n=r;return{lo:s,hi:n}}const Ln=(i,t,e,n)=>Ka(i,e,n?s=>{const r=i[s][t];return r<e||r===e&&i[s+1][t]===e}:s=>i[s][t]<e),Ff=(i,t,e)=>Ka(i,e,n=>i[n][t]>=e);function kf(i,t,e){let n=0,s=i.length;for(;n<s&&i[n]<t;)n++;for(;s>n&&i[s-1]>e;)s--;return n>0||s<i.length?i.slice(n,s):i}const Tu=["push","pop","shift","splice","unshift"];function Bf(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Tu.forEach(e=>{const n="_onData"+qa(e),s=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...r)}),o}})})}function Cl(i,t){const e=i._chartjs;if(!e)return;const n=e.listeners,s=n.indexOf(t);s!==-1&&n.splice(s,1),!(n.length>0)&&(Tu.forEach(r=>{delete i[r]}),delete i._chartjs)}function Au(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const wu=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function Ru(i,t){let e=[],n=!1;return function(...s){e=s,n||(n=!0,wu.call(window,()=>{n=!1,i.apply(t,e)}))}}function zf(i,t){let e;return function(...n){return t?(clearTimeout(e),e=setTimeout(i,t,n)):i.apply(this,n),t}}const Za=i=>i==="start"?"left":i==="end"?"right":"center",Ce=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,Hf=(i,t,e,n)=>i===(n?"left":"right")?e:i==="center"?(t+e)/2:t;function Cu(i,t,e){const n=t.length;let s=0,r=n;if(i._sorted){const{iScale:o,_parsed:a}=i,l=o.axis,{min:c,max:h,minDefined:u,maxDefined:d}=o.getUserBounds();u&&(s=Me(Math.min(Ln(a,l,c).lo,e?n:Ln(t,l,o.getPixelForValue(c)).lo),0,n-1)),d?r=Me(Math.max(Ln(a,o.axis,h,!0).hi+1,e?0:Ln(t,l,o.getPixelForValue(h),!0).hi+1),s,n)-s:r=n-s}return{start:s,count:r}}function Pu(i){const{xScale:t,yScale:e,_scaleRanges:n}=i,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!n)return i._scaleRanges=s,!0;const r=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==e.min||n.ymax!==e.max;return Object.assign(n,s),r}const hr=i=>i===0||i===1,Pl=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*re/e)),Ll=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*re/e)+1,Us={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*fe)+1,easeOutSine:i=>Math.sin(i*fe),easeInOutSine:i=>-.5*(Math.cos(oe*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>hr(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>hr(i)?i:Pl(i,.075,.3),easeOutElastic:i=>hr(i)?i:Ll(i,.075,.3),easeInOutElastic(i){return hr(i)?i:i<.5?.5*Pl(i*2,.1125,.45):.5+.5*Ll(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-Us.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Us.easeInBounce(i*2)*.5:Us.easeOutBounce(i*2-1)*.5+.5};function Ja(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Dl(i){return Ja(i)?i:new bu(i)}function Do(i){return Ja(i)?i:new bu(i).saturate(.5).darken(.1).hexString()}const Vf=["x","y","borderWidth","radius","tension"],Gf=["color","borderColor","backgroundColor"];function Wf(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:Gf},numbers:{type:"number",properties:Vf}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Xf(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Il=new Map;function Yf(i,t){t=t||{};const e=i+JSON.stringify(t);let n=Il.get(e);return n||(n=new Intl.NumberFormat(i,t),Il.set(e,n)),n}function Js(i,t,e){return Yf(t,e).format(i)}const Lu={values(i){return se(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const n=this.chart.options.locale;let s,r=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=jf(i,e)}const o=Gn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Js(i,n,l)},logarithmic(i,t,e){if(i===0)return"0";const n=e[t].significand||i/Math.pow(10,Math.floor(Gn(i)));return[1,2,3,5,10,15].includes(n)||t>.8*e.length?Lu.numeric.call(this,i,t,e):""}};function jf(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var xo={formatters:Lu};function qf(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:xo.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Ai=Object.create(null),ya=Object.create(null);function Ns(i,t){if(!t)return i;const e=t.split(".");for(let n=0,s=e.length;n<s;++n){const r=e[n];i=i[r]||(i[r]=Object.create(null))}return i}function Io(i,t,e){return typeof t=="string"?Vs(Ns(i,t),e):Vs(Ns(i,""),t)}class $f{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,s)=>Do(s.backgroundColor),this.hoverBorderColor=(n,s)=>Do(s.borderColor),this.hoverColor=(n,s)=>Do(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Io(this,t,e)}get(t){return Ns(this,t)}describe(t,e){return Io(ya,t,e)}override(t,e){return Io(Ai,t,e)}route(t,e,n,s){const r=Ns(this,t),o=Ns(this,n),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=o[s];return Xt(l)?Object.assign({},c,l):Ut(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var he=new $f({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Wf,Xf,qf]);function Kf(i){return!i||jt(i.size)||jt(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function no(i,t,e,n,s){let r=t[s];return r||(r=t[s]=i.measureText(s).width,e.push(s)),r>n&&(n=r),n}function Zf(i,t,e,n){n=n||{};let s=n.data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(s=n.data={},r=n.garbageCollect=[],n.font=t),i.save(),i.font=t;let o=0;const a=e.length;let l,c,h,u,d;for(l=0;l<a;l++)if(u=e[l],u!=null&&!se(u))o=no(i,s,r,o,u);else if(se(u))for(c=0,h=u.length;c<h;c++)d=u[c],d!=null&&!se(d)&&(o=no(i,s,r,o,d));i.restore();const f=r.length/2;if(f>e.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function oi(i,t,e){const n=i.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*n)/n+s}function Ol(i,t){t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore()}function Sa(i,t,e,n){Du(i,t,e,n,null)}function Du(i,t,e,n,s){let r,o,a,l,c,h,u,d;const f=t.pointStyle,g=t.rotation,_=t.radius;let p=(g||0)*Df;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){i.save(),i.translate(e,n),i.rotate(p),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(_)||_<=0)){switch(i.beginPath(),f){default:s?i.ellipse(e,n,s/2,_,0,0,re):i.arc(e,n,_,0,re),i.closePath();break;case"triangle":h=s?s/2:_,i.moveTo(e+Math.sin(p)*h,n-Math.cos(p)*_),p+=Al,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*_),p+=Al,i.lineTo(e+Math.sin(p)*h,n-Math.cos(p)*_),i.closePath();break;case"rectRounded":c=_*.516,l=_-c,o=Math.cos(p+ri)*l,u=Math.cos(p+ri)*(s?s/2-c:l),a=Math.sin(p+ri)*l,d=Math.sin(p+ri)*(s?s/2-c:l),i.arc(e-u,n-a,c,p-oe,p-fe),i.arc(e+d,n-o,c,p-fe,p),i.arc(e+u,n+a,c,p,p+fe),i.arc(e-d,n+o,c,p+fe,p+oe),i.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*_,h=s?s/2:l,i.rect(e-h,n-l,2*h,2*l);break}p+=ri;case"rectRot":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+d,n-o),i.lineTo(e+u,n+a),i.lineTo(e-d,n+o),i.closePath();break;case"crossRot":p+=ri;case"cross":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"star":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o),p+=ri,u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),i.moveTo(e-u,n-a),i.lineTo(e+u,n+a),i.moveTo(e+d,n-o),i.lineTo(e-d,n+o);break;case"line":o=s?s/2:Math.cos(p)*_,a=Math.sin(p)*_,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a);break;case"dash":i.moveTo(e,n),i.lineTo(e+Math.cos(p)*(s?s/2:_),n+Math.sin(p)*_);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function Dn(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function vo(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function bo(i){i.restore()}function Jf(i,t,e,n,s){if(!t)return i.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;i.lineTo(r,t.y),i.lineTo(r,e.y)}else s==="after"!=!!n?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function Qf(i,t,e,n){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?e.cp2x:e.cp1x,n?e.cp2y:e.cp1y,e.x,e.y)}function tp(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),jt(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function ep(i,t,e,n,s){if(s.strikethrough||s.underline){const r=i.measureText(n),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(o,h),i.lineTo(a,h),i.stroke()}}function np(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function wi(i,t,e,n,s,r={}){const o=se(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(i.save(),i.font=s.string,tp(i,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&np(i,r.backdrop),a&&(r.strokeColor&&(i.strokeStyle=r.strokeColor),jt(r.strokeWidth)||(i.lineWidth=r.strokeWidth),i.strokeText(c,e,n,r.maxWidth)),i.fillText(c,e,n,r.maxWidth),ep(i,e,n,c,r),n+=Number(s.lineHeight);i.restore()}function Xs(i,t){const{x:e,y:n,w:s,h:r,radius:o}=t;i.arc(e+o.topLeft,n+o.topLeft,o.topLeft,1.5*oe,oe,!0),i.lineTo(e,n+r-o.bottomLeft),i.arc(e+o.bottomLeft,n+r-o.bottomLeft,o.bottomLeft,oe,fe,!0),i.lineTo(e+s-o.bottomRight,n+r),i.arc(e+s-o.bottomRight,n+r-o.bottomRight,o.bottomRight,fe,0,!0),i.lineTo(e+s,n+o.topRight),i.arc(e+s-o.topRight,n+o.topRight,o.topRight,0,-fe,!0),i.lineTo(e+o.topLeft,n)}const ip=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,sp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function rp(i,t){const e=(""+i).match(ip);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const op=i=>+i||0;function Qa(i,t){const e={},n=Xt(t),s=n?Object.keys(t):t,r=Xt(i)?n?o=>Ut(i[o],i[t[o]]):o=>i[o]:()=>i;for(const o of s)e[o]=op(r(o));return e}function Iu(i){return Qa(i,{top:"y",right:"x",bottom:"y",left:"x"})}function bi(i){return Qa(i,["topLeft","topRight","bottomLeft","bottomRight"])}function De(i){const t=Iu(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ge(i,t){i=i||{},t=t||he.font;let e=Ut(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let n=Ut(i.style,t.style);n&&!(""+n).match(sp)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const s={family:Ut(i.family,t.family),lineHeight:rp(Ut(i.lineHeight,t.lineHeight),e),size:e,style:n,weight:Ut(i.weight,t.weight),string:""};return s.string=Kf(s),s}function ws(i,t,e,n){let s=!0,r,o,a;for(r=0,o=i.length;r<o;++r)if(a=i[r],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),s=!1),e!==void 0&&se(a)&&(a=a[e%a.length],s=!1),a!==void 0))return n&&!s&&(n.cacheable=!1),a}function ap(i,t,e){const{min:n,max:s}=i,r=Mu(t,(s-n)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(n,-Math.abs(r)),max:o(s,r)}}function ni(i,t){return Object.assign(Object.create(i),t)}function tl(i,t=[""],e,n,s=()=>i[0]){const r=e||i;typeof n>"u"&&(n=Fu("_fallback",i));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:r,_fallback:n,_getTarget:s,override:a=>tl([a,...i],t,r,n)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return Uu(a,l,()=>mp(l,t,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return Nl(a).includes(l)},ownKeys(a){return Nl(a)},set(a,l,c){const h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function as(i,t,e,n){const s={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:Ou(i,n),setContext:r=>as(i,r,e,n),override:r=>as(i.override(r),t,e,n)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete i[o],!0},get(r,o,a){return Uu(r,o,()=>cp(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(r,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(r,o,a){return i[o]=a,delete r[o],!0}})}function Ou(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:n=t.indexable,_allKeys:s=t.allKeys}=i;return{allKeys:s,scriptable:e,indexable:n,isScriptable:Jn(e)?e:()=>e,isIndexable:Jn(n)?n:()=>n}}const lp=(i,t)=>i?i+qa(t):t,el=(i,t)=>Xt(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Uu(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t))return i[t];const n=e();return i[t]=n,n}function cp(i,t,e){const{_proxy:n,_context:s,_subProxy:r,_descriptors:o}=i;let a=n[t];return Jn(a)&&o.isScriptable(t)&&(a=hp(t,a,i,e)),se(a)&&a.length&&(a=up(t,a,i,o.isIndexable)),el(t,a)&&(a=as(a,s,r&&r[t],o)),a}function hp(i,t,e,n){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=t(r,o||n);return a.delete(i),el(i,l)&&(l=nl(s._scopes,s,i,l)),l}function up(i,t,e,n){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&n(i))return t[r.index%t.length];if(Xt(t[0])){const l=t,c=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const u=nl(c,s,i,h);t.push(as(u,r,o&&o[i],a))}}return t}function Nu(i,t,e){return Jn(i)?i(t,e):i}const dp=(i,t)=>i===!0?t:typeof i=="string"?Zn(t,i):void 0;function fp(i,t,e,n,s){for(const r of t){const o=dp(e,r);if(o){i.add(o);const a=Nu(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==n)return a}else if(o===!1&&typeof n<"u"&&e!==n)return null}return!1}function nl(i,t,e,n){const s=t._rootScopes,r=Nu(t._fallback,e,n),o=[...i,...s],a=new Set;a.add(n);let l=Ul(a,o,e,r||e,n);return l===null||typeof r<"u"&&r!==e&&(l=Ul(a,o,r,l,n),l===null)?!1:tl(Array.from(a),[""],s,r,()=>pp(t,e,n))}function Ul(i,t,e,n,s){for(;e;)e=fp(i,t,e,n,s);return e}function pp(i,t,e){const n=i._getTarget();t in n||(n[t]={});const s=n[t];return se(s)&&Xt(e)?e:s||{}}function mp(i,t,e,n){let s;for(const r of t)if(s=Fu(lp(r,i),e),typeof s<"u")return el(i,s)?nl(e,n,i,s):s}function Fu(i,t){for(const e of t){if(!e)continue;const n=e[i];if(typeof n<"u")return n}}function Nl(i){let t=i._keys;return t||(t=i._keys=gp(i._scopes)),t}function gp(i){const t=new Set;for(const e of i)for(const n of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(n);return Array.from(t)}function ku(i,t,e,n){const{iScale:s}=i,{key:r="r"}=this._parsing,o=new Array(n);let a,l,c,h;for(a=0,l=n;a<l;++a)c=a+e,h=t[c],o[a]={r:s.parse(Zn(h,r),c)};return o}const _p=Number.EPSILON||1e-14,ls=(i,t)=>t<i.length&&!i[t].skip&&i[t],Bu=i=>i==="x"?"y":"x";function xp(i,t,e,n){const s=i.skip?t:i,r=t,o=e.skip?t:e,a=Ma(r,s),l=Ma(o,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const u=n*c,d=n*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function vp(i,t,e){const n=i.length;let s,r,o,a,l,c=ls(i,0);for(let h=0;h<n-1;++h)if(l=c,c=ls(i,h+1),!(!l||!c)){if(Os(t[h],0,_p)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function bp(i,t,e="x"){const n=Bu(e),s=i.length;let r,o,a,l=ls(i,0);for(let c=0;c<s;++c){if(o=a,a=l,l=ls(i,c+1),!a)continue;const h=a[e],u=a[n];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${n}`]=u-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${n}`]=u+r*t[c])}}function Mp(i,t="x"){const e=Bu(t),n=i.length,s=Array(n).fill(0),r=Array(n);let o,a,l,c=ls(i,0);for(o=0;o<n;++o)if(a=l,l=c,c=ls(i,o+1),!!l){if(c){const h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?mn(s[o-1])!==mn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}vp(i,s,r),bp(i,r,t)}function ur(i,t,e){return Math.max(Math.min(i,e),t)}function yp(i,t){let e,n,s,r,o,a=Dn(i[0],t);for(e=0,n=i.length;e<n;++e)o=r,r=a,a=e<n-1&&Dn(i[e+1],t),r&&(s=i[e],o&&(s.cp1x=ur(s.cp1x,t.left,t.right),s.cp1y=ur(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=ur(s.cp2x,t.left,t.right),s.cp2y=ur(s.cp2y,t.top,t.bottom)))}function Sp(i,t,e,n,s){let r,o,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Mp(i,s);else{let c=n?i[i.length-1]:i[0];for(r=0,o=i.length;r<o;++r)a=i[r],l=xp(c,a,i[Math.min(r+1,o-(n?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&yp(i,e)}function zu(){return typeof window<"u"&&typeof document<"u"}function il(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function io(i,t,e){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*t.parentNode[e])):n=i,n}const Mo=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function Ep(i,t){return Mo(i).getPropertyValue(t)}const Tp=["top","right","bottom","left"];function Mi(i,t,e){const n={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=Tp[s];n[r]=parseFloat(i[t+"-"+r+e])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const Ap=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function wp(i,t){const e=i.touches,n=e&&e.length?e[0]:i,{offsetX:s,offsetY:r}=n;let o=!1,a,l;if(Ap(s,r,i.target))a=s,l=r;else{const c=t.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function fi(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:n}=t,s=Mo(e),r=s.boxSizing==="border-box",o=Mi(s,"padding"),a=Mi(s,"border","width"),{x:l,y:c,box:h}=wp(i,e),u=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:f,height:g}=t;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-u)/f*e.width/n),y:Math.round((c-d)/g*e.height/n)}}function Rp(i,t,e){let n,s;if(t===void 0||e===void 0){const r=il(i);if(!r)t=i.clientWidth,e=i.clientHeight;else{const o=r.getBoundingClientRect(),a=Mo(r),l=Mi(a,"border","width"),c=Mi(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,n=io(a.maxWidth,r,"clientWidth"),s=io(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:n||eo,maxHeight:s||eo}}const dr=i=>Math.round(i*10)/10;function Cp(i,t,e,n){const s=Mo(i),r=Mi(s,"margin"),o=io(s.maxWidth,i,"clientWidth")||eo,a=io(s.maxHeight,i,"clientHeight")||eo,l=Rp(i,t,e);let{width:c,height:h}=l;if(s.boxSizing==="content-box"){const d=Mi(s,"border","width"),f=Mi(s,"padding");c-=f.width+d.width,h-=f.height+d.height}return c=Math.max(0,c-r.width),h=Math.max(0,n?c/n:h-r.height),c=dr(Math.min(c,o,l.maxWidth)),h=dr(Math.min(h,a,l.maxHeight)),c&&!h&&(h=dr(c/2)),(t!==void 0||e!==void 0)&&n&&l.height&&h>l.height&&(h=l.height,c=dr(Math.floor(h*n))),{width:c,height:h}}function Fl(i,t,e){const n=t||1,s=Math.floor(i.height*n),r=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const o=i.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==s||o.width!==r?(i.currentDevicePixelRatio=n,o.height=s,o.width=r,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const Pp=function(){let i=!1;try{const t={get passive(){return i=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return i}();function kl(i,t){const e=Ep(i,t),n=e&&e.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function pi(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function Lp(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:n==="middle"?e<.5?i.y:t.y:n==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function Dp(i,t,e,n){const s={x:i.cp2x,y:i.cp2y},r={x:t.cp1x,y:t.cp1y},o=pi(i,s,e),a=pi(s,r,e),l=pi(r,t,e),c=pi(o,a,e),h=pi(a,l,e);return pi(c,h,e)}const Ip=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,n){return e-n},leftForLtr(e,n){return e-n}}},Op=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function es(i,t,e){return i?Ip(t,e):Op()}function Hu(i,t){let e,n;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,n=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=n)}function Vu(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function Gu(i){return i==="angle"?{between:Ws,compare:Uf,normalize:je}:{between:Pn,compare:(t,e)=>t-e,normalize:t=>t}}function Bl({start:i,end:t,count:e,loop:n,style:s}){return{start:i%e,end:t%e,loop:n&&(t-i+1)%e===0,style:s}}function Up(i,t,e){const{property:n,start:s,end:r}=e,{between:o,normalize:a}=Gu(n),l=t.length;let{start:c,end:h,loop:u}=i,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&o(a(t[c%l][n]),s,r);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:i.style}}function Wu(i,t,e){if(!e)return[i];const{property:n,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=Gu(n),{start:h,end:u,loop:d,style:f}=Up(i,t,e),g=[];let _=!1,p=null,m,b,v;const y=()=>l(s,v,m)&&a(s,v)!==0,A=()=>a(r,m)===0||l(r,v,m),R=()=>_||y(),S=()=>!_||A();for(let D=h,W=h;D<=u;++D)b=t[D%o],!b.skip&&(m=c(b[n]),m!==v&&(_=l(m,s,r),p===null&&R()&&(p=a(m,s)===0?D:W),p!==null&&S()&&(g.push(Bl({start:p,end:D,loop:d,count:o,style:f})),p=null),W=D,v=m));return p!==null&&g.push(Bl({start:p,end:u,loop:d,count:o,style:f})),g}function Xu(i,t){const e=[],n=i.segments;for(let s=0;s<n.length;s++){const r=Wu(n[s],i.points,t);r.length&&e.push(...r)}return e}function Np(i,t,e,n){let s=0,r=t-1;if(e&&!n)for(;s<t&&!i[s].skip;)s++;for(;s<t&&i[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&i[r%t].skip;)r--;return r%=t,{start:s,end:r}}function Fp(i,t,e,n){const s=i.length,r=[];let o=t,a=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%s];c.skip||c.stop?a.skip||(n=!1,r.push({start:t%s,end:(l-1)%s,loop:n}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:n}),r}function kp(i,t){const e=i.points,n=i.options.spanGaps,s=e.length;if(!s)return[];const r=!!i._loop,{start:o,end:a}=Np(e,s,r,n);if(n===!0)return zl(i,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+s:a,c=!!i._fullLoop&&o===0&&a===s-1;return zl(i,Fp(e,o,l,c),e,t)}function zl(i,t,e,n){return!n||!n.setContext||!e?t:Bp(i,t,e,n)}function Bp(i,t,e,n){const s=i._chart.getContext(),r=Hl(i.options),{_datasetIndex:o,options:{spanGaps:a}}=i,l=e.length,c=[];let h=r,u=t[0].start,d=u;function f(g,_,p,m){const b=a?-1:1;if(g!==_){for(g+=l;e[g%l].skip;)g-=b;for(;e[_%l].skip;)_+=b;g%l!==_%l&&(c.push({start:g%l,end:_%l,loop:p,style:m}),h=m,u=_%l)}}for(const g of t){u=a?u:g.start;let _=e[u%l],p;for(d=u+1;d<=g.end;d++){const m=e[d%l];p=Hl(n.setContext(ni(s,{type:"segment",p0:_,p1:m,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),zp(p,h)&&f(u,d-1,g.loop,h),_=m,h=p}u<d-1&&f(u,d-1,g.loop,h)}return c}function Hl(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function zp(i,t){if(!t)return!1;const e=[],n=function(s,r){return Ja(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(i,n)!==JSON.stringify(t,n)}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Hp{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=wu.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;const r=n.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,n,t,"progress")),r.length||(n.running=!1,this._notify(s,n,t,"complete"),n.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let s=n.length-1;for(;s>=0;--s)n[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var En=new Hp;const Vl="transparent",Vp={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const n=Dl(i||Vl),s=n.valid&&Dl(t||Vl);return s&&s.valid?s.mix(n,e).hexString():t},number(i,t,e){return i+(t-i)*e}};class Gp{constructor(t,e,n,s){const r=e[n];s=ws([t.to,s,r,t.from]);const o=ws([t.from,r,s]);this._active=!0,this._fn=t.fn||Vp[t.type||typeof o],this._easing=Us[t.easing]||Us.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=ws([t.to,e,s,t.from]),this._from=ws([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<n),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][e]()}}class Yu{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Xt(t))return;const e=Object.keys(he.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!Xt(r))return;const o={};for(const a of e)o[a]=r[a];(se(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!n.has(a))&&n.set(a,o)})})}_animateOptions(t,e){const n=e.options,s=Xp(t,n);if(!s)return[];const r=this._createAnimations(s,n);return n.$shared&&Wp(t.options.$animations,n).then(()=>{t.options=n},()=>{}),r}_createAnimations(t,e){const n=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[c];let u=r[c];const d=n.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}r[c]=u=new Gp(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const n=this._createAnimations(t,e);if(n.length)return En.add(this._chart,n),!0}}function Wp(i,t){const e=[],n=Object.keys(t);for(let s=0;s<n.length;s++){const r=i[n[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function Xp(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Gl(i,t){const e=i&&i.options||{},n=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:n?r:s,end:n?s:r}}function Yp(i,t,e){if(e===!1)return!1;const n=Gl(i,e),s=Gl(t,e);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function jp(i){let t,e,n,s;return Xt(i)?(t=i.top,e=i.right,n=i.bottom,s=i.left):t=e=n=s=i,{top:t,right:e,bottom:n,left:s,disabled:i===!1}}function ju(i,t){const e=[],n=i._getSortedDatasetMetas(t);let s,r;for(s=0,r=n.length;s<r;++s)e.push(n[s].index);return e}function Wl(i,t,e,n={}){const s=i.keys,r=n.mode==="single";let o,a,l,c;if(t!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(n.all)continue;break}c=i.values[l],ce(c)&&(r||t===0||mn(t)===mn(c))&&(t+=c)}return t}}function qp(i){const t=Object.keys(i),e=new Array(t.length);let n,s,r;for(n=0,s=t.length;n<s;++n)r=t[n],e[n]={x:r,y:i[r]};return e}function Xl(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function $p(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function Kp(i){const{min:t,max:e,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function Zp(i,t,e){const n=i[t]||(i[t]={});return n[e]||(n[e]={})}function Yl(i,t,e,n){for(const s of t.getMatchingVisibleMetas(n).reverse()){const r=i[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function jl(i,t){const{chart:e,_cachedMeta:n}=i,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=n,l=r.axis,c=o.axis,h=$p(r,o,n),u=t.length;let d;for(let f=0;f<u;++f){const g=t[f],{[l]:_,[c]:p}=g,m=g._stacks||(g._stacks={});d=m[c]=Zp(s,h,_),d[a]=p,d._top=Yl(d,o,!0,n.type),d._bottom=Yl(d,o,!1,n.type);const b=d._visualValues||(d._visualValues={});b[a]=p}}function Oo(i,t){const e=i.scales;return Object.keys(e).filter(n=>e[n].axis===t).shift()}function Jp(i,t){return ni(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Qp(i,t,e){return ni(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function gs(i,t){const e=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){t=t||i._parsed;for(const s of t){const r=s._stacks;if(!r||r[n]===void 0||r[n][e]===void 0)return;delete r[n][e],r[n]._visualValues!==void 0&&r[n]._visualValues[e]!==void 0&&delete r[n]._visualValues[e]}}}const Uo=i=>i==="reset"||i==="none",ql=(i,t)=>t?i:Object.assign({},i),tm=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:ju(e,!0),values:null};class on{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Xl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&gs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),s=(u,d,f,g)=>u==="x"?d:u==="r"?g:f,r=e.xAxisID=Ut(n.xAxisID,Oo(t,"x")),o=e.yAxisID=Ut(n.yAxisID,Oo(t,"y")),a=e.rAxisID=Ut(n.rAxisID,Oo(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Cl(this._data,this),t._stacked&&gs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(Xt(e))this._data=qp(e);else if(n!==e){if(n){Cl(n,this);const s=this._cachedMeta;gs(s),s._parsed=[]}e&&Object.isExtensible(e)&&Bf(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=Xl(e.vScale,e),e.stack!==n.stack&&(s=!0,gs(e),e.stack=n.stack),this._resyncElements(t),(s||r!==e._stacked)&&jl(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:s}=this,{iScale:r,_stacked:o}=n,a=r.axis;let l=t===0&&e===s.length?!0:n._sorted,c=t>0&&n._parsed[t-1],h,u,d;if(this._parsing===!1)n._parsed=s,n._sorted=!0,d=s;else{se(s[t])?d=this.parseArrayData(n,s,t,e):Xt(s[t])?d=this.parseObjectData(n,s,t,e):d=this.parsePrimitiveData(n,s,t,e);const f=()=>u[a]===null||c&&u[a]<c[a];for(h=0;h<e;++h)n._parsed[h+t]=u=d[h],l&&(f()&&(l=!1),c=u);n._sorted=l}o&&jl(this,d)}parsePrimitiveData(t,e,n,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,u=new Array(s);let d,f,g;for(d=0,f=s;d<f;++d)g=d+n,u[d]={[a]:h||r.parse(c[g],g),[l]:o.parse(e[g],g)};return u}parseArrayData(t,e,n,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,c,h,u;for(l=0,c=s;l<c;++l)h=l+n,u=e[h],a[l]={x:r.parse(u[0],h),y:o.parse(u[1],h)};return a}parseObjectData(t,e,n,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let h,u,d,f;for(h=0,u=s;h<u;++h)d=h+n,f=e[d],c[h]={x:r.parse(Zn(f,a),d),y:o.parse(Zn(f,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:ju(s,!0),values:e._stacks[t.axis]._visualValues};return Wl(a,o,r.index,{mode:n})}updateRangeFromParsed(t,e,n,s){const r=n[e.axis];let o=r===null?NaN:r;const a=s&&n._stacks[e.axis];s&&a&&(s.values=a,o=Wl(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const n=this._cachedMeta,s=n._parsed,r=n._sorted&&t===n.iScale,o=s.length,a=this._getOtherScale(t),l=tm(e,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=Kp(a);let d,f;function g(){f=s[d];const _=f[a.axis];return!ce(f[t.axis])||h>_||u<_}for(d=0;d<o&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],ce(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:n?""+n.getLabelForValue(r[n.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=jp(Ut(this.options.clip,Yp(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,s=n.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let h;for(n.dataset&&n.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const u=s[h];u.hidden||(u.active&&c?o.push(u):u.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const n=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=Qp(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=Jp(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=n,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&Gs(n);if(a)return ql(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),h),f=Object.keys(he.elements[t]),g=()=>this.getContext(n,s,e),_=c.resolveNamedOptions(d,f,g,u);return _.$shared&&(_.$shared=l,r[o]=Object.freeze(ql(_,l))),_}_resolveAnimations(t,e,n){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,u=h.datasetAnimationScopeKeys(this._type,e),d=h.getOptionScopes(this.getDataset(),u);l=h.createResolver(d,this.getContext(t,n,e))}const c=new Yu(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Uo(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const n=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(n),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,n),{sharedOptions:r,includeOptions:o}}updateElement(t,e,n,s){Uo(s)?Object.assign(t,n):this._resolveAnimations(e,s).update(t,n)}updateSharedOptions(t,e,n){t&&!Uo(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,n,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=n.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,n=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=o;a--)c[a]=c[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),n&&this.updateElements(r,t,e,"reset")}updateElements(t,e,n,s){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const s=n._parsed.splice(t,e);n._stacked&&gs(n,s)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,s]=t;this[e](n,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}rt(on,"defaults",{}),rt(on,"datasetElementType",null),rt(on,"dataElementType",null);function em(i,t){if(!i._cache.$bar){const e=i.getMatchingVisibleMetas(t);let n=[];for(let s=0,r=e.length;s<r;s++)n=n.concat(e[s].controller.getAllParsedValues(i));i._cache.$bar=Au(n.sort((s,r)=>s-r))}return i._cache.$bar}function nm(i){const t=i.iScale,e=em(t,i.type);let n=t._length,s,r,o,a;const l=()=>{o===32767||o===-32768||(Gs(a)&&(n=Math.min(n,Math.abs(o-a)||n)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),l();return n}function im(i,t,e,n){const s=e.barThickness;let r,o;return jt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*n,o=1),{chunk:r/n,ratio:o,start:t.pixels[i]-r/2}}function sm(i,t,e,n){const s=t.pixels,r=s[i];let o=i>0?s[i-1]:null,a=i<s.length-1?s[i+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const c=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/n,ratio:e.barPercentage,start:c}}function rm(i,t,e,n){const s=e.parse(i[0],n),r=e.parse(i[1],n),o=Math.min(s,r),a=Math.max(s,r);let l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:s,end:r,min:o,max:a}}function qu(i,t,e,n){return se(i)?rm(i,t,e,n):t[e.axis]=e.parse(i,n),t}function $l(i,t,e,n){const s=i.iScale,r=i.vScale,o=s.getLabels(),a=s===r,l=[];let c,h,u,d;for(c=e,h=e+n;c<h;++c)d=t[c],u={},u[s.axis]=a||s.parse(o[c],c),l.push(qu(d,u,r,c));return l}function No(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function om(i,t,e){return i!==0?mn(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function am(i){let t,e,n,s,r;return i.horizontal?(t=i.base>i.x,e="left",n="right"):(t=i.base<i.y,e="bottom",n="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:n,reverse:t,top:s,bottom:r}}function lm(i,t,e,n){let s=t.borderSkipped;const r={};if(!s){i.borderSkipped=r;return}if(s===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:c,bottom:h}=am(i);s==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===n?s=c:(e._bottom||0)===n?s=h:(r[Kl(h,o,a,l)]=!0,s=c)),r[Kl(s,o,a,l)]=!0,i.borderSkipped=r}function Kl(i,t,e,n){return n?(i=cm(i,t,e),i=Zl(i,e,t)):i=Zl(i,t,e),i}function cm(i,t,e){return i===t?e:i===e?t:i}function Zl(i,t,e){return i==="start"?t:i==="end"?e:i}function hm(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}class Gr extends on{parsePrimitiveData(t,e,n,s){return $l(t,e,n,s)}parseArrayData(t,e,n,s){return $l(t,e,n,s)}parseObjectData(t,e,n,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=r.axis==="x"?a:l,h=o.axis==="x"?a:l,u=[];let d,f,g,_;for(d=n,f=n+s;d<f;++d)_=e[d],g={},g[r.axis]=r.parse(Zn(_,c),d),u.push(qu(Zn(_,h),g,o,d));return u}updateRangeFromParsed(t,e,n,s){super.updateRangeFromParsed(t,e,n,s);const r=n._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:n,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=No(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+n.getLabelForValue(r[n.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,n,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(e,s);for(let f=e;f<e+n;f++){const g=this.getParsed(f),_=r||jt(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,h),m=(g._stacks||{})[a.axis],b={horizontal:c,base:_.base,enableBorderRadius:!m||No(g._custom)||o===m._top||o===m._bottom,x:c?_.head:p.center,y:c?p.center:_.head,height:c?p.size:Math.abs(_.size),width:c?Math.abs(_.size):p.size};d&&(b.options=u||this.resolveDataElementOptions(f,t[f].active?"active":s));const v=b.options||t[f].options;lm(b,v,m,o),hm(b,v,h.ratio),this.updateElement(t[f],f,b,s)}}_getStacks(t,e){const{iScale:n}=this._cachedMeta,s=n.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),r=n.options.stacked,o=[],a=l=>{const c=l.controller.getParsed(e),h=c&&c[l.vScale.axis];if(jt(h)||isNaN(h))return!0};for(const l of s)if(!(e!==void 0&&a(l))&&((r===!1||o.indexOf(l.stack)===-1||r===void 0&&l.stack===void 0)&&o.push(l.stack),l.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,n){const s=this._getStacks(t,n),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,n=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(n.getPixelForValue(this.getParsed(r)[n.axis],r));const a=t.barThickness;return{min:a||nm(e),pixels:s,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:n,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),c=l._custom,h=No(c);let u=l[e.axis],d=0,f=n?this.applyStack(e,l,n):u,g,_;f!==u&&(d=f-u,f=u),h&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&mn(u)!==mn(c.barEnd)&&(d=0),d+=u);const p=!jt(r)&&!h?r:d;let m=e.getPixelForValue(p);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(d+f):g=m,_=g-m,Math.abs(_)<o){_=om(_,e,a)*o,u===a&&(m-=_/2);const b=e.getPixelForDecimal(0),v=e.getPixelForDecimal(1),y=Math.min(b,v),A=Math.max(b,v);m=Math.max(Math.min(m,A),y),g=m+_,n&&!h&&(l._stacks[e.axis]._visualValues[s]=e.getValueForPixel(g)-e.getValueForPixel(m))}if(m===e.getPixelForValue(a)){const b=mn(_)*e.getLineWidthForValue(a)/2;m+=b,_-=b}return{size:_,base:m,head:g,center:g+_/2}}_calculateBarIndexPixels(t,e){const n=e.scale,s=this.options,r=s.skipNull,o=Ut(s.maxBarThickness,1/0);let a,l;if(e.grouped){const c=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?sm(t,e,s,c):im(t,e,s,c),u=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0);a=h.start+h.chunk*u+h.chunk/2,l=Math.min(o,h.chunk*h.ratio)}else a=n.getPixelForValue(this.getParsed(t)[n.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,n=t.data,s=n.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&n[r].draw(this._ctx)}}rt(Gr,"id","bar"),rt(Gr,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),rt(Gr,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Wr extends on{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,n,s){const r=super.parsePrimitiveData(t,e,n,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+n).radius;return r}parseArrayData(t,e,n,s){const r=super.parseArrayData(t,e,n,s);for(let o=0;o<r.length;o++){const a=e[n+o];r[o]._custom=Ut(a[2],this.resolveDataElementOptions(o+n).radius)}return r}parseObjectData(t,e,n,s){const r=super.parseObjectData(t,e,n,s);for(let o=0;o<r.length;o++){const a=e[n+o];r[o]._custom=Ut(a&&a.r&&+a.r,this.resolveDataElementOptions(o+n).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y),c=o._custom;return{label:n[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,n,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,s),h=o.axis,u=a.axis;for(let d=e;d<e+n;d++){const f=t[d],g=!r&&this.getParsed(d),_={},p=_[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(g[h]),m=_[u]=r?a.getBasePixel():a.getPixelForValue(g[u]);_.skip=isNaN(p)||isNaN(m),c&&(_.options=l||this.resolveDataElementOptions(d,f.active?"active":s),r&&(_.options.radius=0)),this.updateElement(f,d,_,s)}}resolveDataElementOptions(t,e){const n=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Ut(n&&n._custom,r),s}}rt(Wr,"id","bubble"),rt(Wr,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),rt(Wr,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function um(i,t,e){let n=1,s=1,r=0,o=0;if(t<re){const a=i,l=a+t,c=Math.cos(a),h=Math.sin(a),u=Math.cos(l),d=Math.sin(l),f=(v,y,A)=>Ws(v,a,l,!0)?1:Math.max(y,y*e,A,A*e),g=(v,y,A)=>Ws(v,a,l,!0)?-1:Math.min(y,y*e,A,A*e),_=f(0,c,u),p=f(fe,h,d),m=g(oe,c,u),b=g(oe+fe,h,d);n=(_-m)/2,s=(p-b)/2,r=-(_+m)/2,o=-(p+b)/2}return{ratioX:n,ratioY:s,offsetX:r,offsetY:o}}class xi extends on{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const n=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=n;else{let r=l=>+n[l];if(Xt(n[t])){const{key:l="value"}=this._parsing;r=c=>+Zn(n[c],l)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return rn(this.options.rotation-90)}_getCircumference(){return rn(this.options.circumference)}_getRotationExtents(){let t=re,e=-re;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const s=this.chart.getDatasetMeta(n).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:n}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(n.width,n.height)-o)/2,0),l=Math.min(Tf(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:u}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:g,offsetY:_}=um(u,h,l),p=(n.width-o)/d,m=(n.height-o)/f,b=Math.max(Math.min(p,m)/2,0),v=Mu(this.options.radius,b),y=Math.max(v*l,0),A=(v-y)/this._getVisibleDatasetWeightTotal();this.offsetX=g*v,this.offsetY=_*v,s.total=this.calculateTotal(),this.outerRadius=v-A*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-A*c,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const n=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/re)}updateElements(t,e,n,s){const r=s==="reset",o=this.chart,a=o.chartArea,c=o.options.animation,h=(a.left+a.right)/2,u=(a.top+a.bottom)/2,d=r&&c.animateScale,f=d?0:this.innerRadius,g=d?0:this.outerRadius,{sharedOptions:_,includeOptions:p}=this._getSharedOptions(e,s);let m=this._getRotation(),b;for(b=0;b<e;++b)m+=this._circumference(b,r);for(b=e;b<e+n;++b){const v=this._circumference(b,r),y=t[b],A={x:h+this.offsetX,y:u+this.offsetY,startAngle:m,endAngle:m+v,circumference:v,outerRadius:g,innerRadius:f};p&&(A.options=_||this.resolveDataElementOptions(b,y.active?"active":s)),m+=v,this.updateElement(y,b,A,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let n=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(n+=Math.abs(r))}return n}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?re*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,s=n.data.labels||[],r=Js(e._parsed[t],n.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const n=this.chart;let s,r,o,a,l;if(!t){for(s=0,r=n.data.datasets.length;s<r;++s)if(n.isDatasetVisible(s)){o=n.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)l=a.resolveDataElementOptions(s),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let n=0,s=t.length;n<s;++n){const r=this.resolveDataElementOptions(n);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(Ut(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}rt(xi,"id","doughnut"),rt(xi,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),rt(xi,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),rt(xi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:s,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}}});class Xr extends on{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=Cu(e,s,o);this._drawStart=a,this._drawCount=l,Pu(e)&&(a=0,l=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,n,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=o.axis,f=a.axis,{spanGaps:g,segment:_}=this.options,p=os(g)?g:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||s==="none",b=e+n,v=t.length;let y=e>0&&this.getParsed(e-1);for(let A=0;A<v;++A){const R=t[A],S=m?R:{};if(A<e||A>=b){S.skip=!0;continue}const D=this.getParsed(A),W=jt(D[f]),x=S[d]=o.getPixelForValue(D[d],A),w=S[f]=r||W?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,D,l):D[f],A);S.skip=isNaN(x)||isNaN(w)||W,S.stop=A>0&&Math.abs(D[d]-y[d])>p,_&&(S.parsed=D,S.raw=c.data[A]),u&&(S.options=h||this.resolveDataElementOptions(A,R.active?"active":s)),m||this.updateElement(R,A,S,s),y=D}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return n;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}rt(Xr,"id","line"),rt(Xr,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),rt(Xr,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Fs extends on{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,s=n.data.labels||[],r=Js(e._parsed[t].r,n.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,n,s){return ku.bind(this)(t,e,n,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((n,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,n=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(n.cutoutPercentage?r/100*n.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,n,s){const r=s==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,u=c.yCenter,d=c.getIndexAngle(0)-.5*oe;let f=d,g;const _=360/this.countVisibleElements();for(g=0;g<e;++g)f+=this._computeAngle(g,s,_);for(g=e;g<e+n;g++){const p=t[g];let m=f,b=f+this._computeAngle(g,s,_),v=o.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;f=b,r&&(l.animateScale&&(v=0),l.animateRotate&&(m=b=d));const y={x:h,y:u,innerRadius:0,outerRadius:v,startAngle:m,endAngle:b,options:this.resolveDataElementOptions(g,p.active?"active":s)};this.updateElement(p,g,y,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((n,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?rn(this.resolveDataElementOptions(t,e).angle||n):0}}rt(Fs,"id","polarArea"),rt(Fs,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),rt(Fs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:s,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Ea extends xi{}rt(Ea,"id","pie"),rt(Ea,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Yr extends on{getLabelAndValue(t){const e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,s){return ku.bind(this)(t,e,n,s)}update(t){const e=this._cachedMeta,n=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(n.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(n,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,n,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+n;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":s),h=r.getPointPositionForValue(a,this.getParsed(a).r),u=o?r.xCenter:h.x,d=o?r.yCenter:h.y,f={x:u,y:d,angle:h.angle,skip:isNaN(u)||isNaN(d),options:c};this.updateElement(l,a,f,s)}}}rt(Yr,"id","radar"),rt(Yr,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),rt(Yr,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class jr extends on{getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:n[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:n=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=Cu(e,n,s);if(this._drawStart=r,this._drawCount=o,Pu(e)&&(r=0,o=n.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=n;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(n,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,n,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),u=this.getSharedOptions(h),d=this.includeOptions(s,u),f=o.axis,g=a.axis,{spanGaps:_,segment:p}=this.options,m=os(_)?_:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||r||s==="none";let v=e>0&&this.getParsed(e-1);for(let y=e;y<e+n;++y){const A=t[y],R=this.getParsed(y),S=b?A:{},D=jt(R[g]),W=S[f]=o.getPixelForValue(R[f],y),x=S[g]=r||D?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,R,l):R[g],y);S.skip=isNaN(W)||isNaN(x)||D,S.stop=y>0&&Math.abs(R[f]-v[f])>m,p&&(S.parsed=R,S.raw=c.data[y]),d&&(S.options=u||this.resolveDataElementOptions(y,A.active?"active":s)),b||this.updateElement(A,y,S,s),v=R}this.updateSharedOptions(u,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const n=t.dataset,s=n.options&&n.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}rt(jr,"id","scatter"),rt(jr,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),rt(jr,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var dm=Object.freeze({__proto__:null,BarController:Gr,BubbleController:Wr,DoughnutController:xi,LineController:Xr,PieController:Ea,PolarAreaController:Fs,RadarController:Yr,ScatterController:jr});function ai(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class sl{constructor(t){rt(this,"options");this.options=t||{}}static override(t){Object.assign(sl.prototype,t)}init(){}formats(){return ai()}parse(){return ai()}format(){return ai()}add(){return ai()}diff(){return ai()}startOf(){return ai()}endOf(){return ai()}}var fm={_date:sl};function pm(i,t,e,n){const{controller:s,data:r,_sorted:o}=i,a=s._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?Ff:Ln;if(n){if(s._sharedOptions){const c=r[0],h=typeof c.getRange=="function"&&c.getRange(t);if(h){const u=l(r,t,e-h),d=l(r,t,e+h);return{lo:u.lo,hi:d.hi}}}}else return l(r,t,e)}return{lo:0,hi:r.length-1}}function Qs(i,t,e,n,s){const r=i.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:u,hi:d}=pm(r[a],t,o,s);for(let f=u;f<=d;++f){const g=h[f];g.skip||n(g,c,f)}}}function mm(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(n,s){const r=t?Math.abs(n.x-s.x):0,o=e?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Fo(i,t,e,n,s){const r=[];return!s&&!i.isPointInArea(t)||Qs(i,e,t,function(a,l,c){!s&&!Dn(a,i.chartArea,0)||a.inRange(t.x,t.y,n)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function gm(i,t,e,n){let s=[];function r(o,a,l){const{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],n),{angle:u}=Eu(o,{x:t.x,y:t.y});Ws(u,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return Qs(i,e,t,r),s}function _m(i,t,e,n,s,r){let o=[];const a=mm(e);let l=Number.POSITIVE_INFINITY;function c(h,u,d){const f=h.inRange(t.x,t.y,s);if(n&&!f)return;const g=h.getCenterPoint(s);if(!(!!r||i.isPointInArea(g))&&!f)return;const p=a(t,g);p<l?(o=[{element:h,datasetIndex:u,index:d}],l=p):p===l&&o.push({element:h,datasetIndex:u,index:d})}return Qs(i,e,t,c),o}function ko(i,t,e,n,s,r){return!r&&!i.isPointInArea(t)?[]:e==="r"&&!n?gm(i,t,e,s):_m(i,t,e,n,s,r)}function Jl(i,t,e,n,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Qs(i,e,t,(l,c,h)=>{l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),n&&!a?[]:r}var xm={evaluateInteractionItems:Qs,modes:{index(i,t,e,n){const s=fi(t,i),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Fo(i,s,r,n,o):ko(i,s,r,!1,n,o),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,n){const s=fi(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Fo(i,s,r,n,o):ko(i,s,r,!1,n,o);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,n){const s=fi(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return Fo(i,s,r,n,o)},nearest(i,t,e,n){const s=fi(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return ko(i,s,r,e.intersect,n,o)},x(i,t,e,n){const s=fi(t,i);return Jl(i,s,"x",e.intersect,n)},y(i,t,e,n){const s=fi(t,i);return Jl(i,s,"y",e.intersect,n)}}};const $u=["left","top","right","bottom"];function _s(i,t){return i.filter(e=>e.pos===t)}function Ql(i,t){return i.filter(e=>$u.indexOf(e.pos)===-1&&e.box.axis===t)}function xs(i,t){return i.sort((e,n)=>{const s=t?n:e,r=t?e:n;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function vm(i){const t=[];let e,n,s,r,o,a;for(e=0,n=(i||[]).length;e<n;++e)s=i[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function bm(i){const t={};for(const e of i){const{stack:n,pos:s,stackWeight:r}=e;if(!n||!$u.includes(s))continue;const o=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function Mm(i,t){const e=bm(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=i.length;r<o;++r){a=i[r];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*n:l&&t.availableWidth,a.height=s):(a.width=n,a.height=h?h*s:l&&t.availableHeight)}return e}function ym(i){const t=vm(i),e=xs(t.filter(c=>c.box.fullSize),!0),n=xs(_s(t,"left"),!0),s=xs(_s(t,"right")),r=xs(_s(t,"top"),!0),o=xs(_s(t,"bottom")),a=Ql(t,"x"),l=Ql(t,"y");return{fullSize:e,leftAndTop:n.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:_s(t,"chartArea"),vertical:n.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function tc(i,t,e,n){return Math.max(i[e],t[e])+Math.max(i[n],t[n])}function Ku(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function Sm(i,t,e,n){const{pos:s,box:r}=e,o=i.maxPadding;if(!Xt(s)){e.size&&(i[s]-=e.size);const u=n[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?r.height:r.width),e.size=u.size/u.count,i[s]+=e.size}r.getPadding&&Ku(o,r.getPadding());const a=Math.max(0,t.outerWidth-tc(o,i,"left","right")),l=Math.max(0,t.outerHeight-tc(o,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function Em(i){const t=i.maxPadding;function e(n){const s=Math.max(t[n]-i[n],0);return i[n]+=s,s}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function Tm(i,t){const e=t.maxPadding;function n(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return n(i?["left","right"]:["top","bottom"])}function Rs(i,t,e,n){const s=[];let r,o,a,l,c,h;for(r=0,o=i.length,c=0;r<o;++r){a=i[r],l=a.box,l.update(a.width||t.w,a.height||t.h,Tm(a.horizontal,t));const{same:u,other:d}=Sm(t,e,a,n);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&Rs(s,t,e,n)||h}function fr(i,t,e,n,s){i.top=e,i.left=t,i.right=t+n,i.bottom=e+s,i.width=n,i.height=s}function ec(i,t,e,n){const s=e.padding;let{x:r,y:o}=t;for(const a of i){const l=a.box,c=n[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const u=t.w*h,d=c.size||l.height;Gs(c.start)&&(o=c.start),l.fullSize?fr(l,s.left,o,e.outerWidth-s.right-s.left,d):fr(l,t.left+c.placed,o,u,d),c.start=o,c.placed+=u,o=l.bottom}else{const u=t.h*h,d=c.size||l.width;Gs(c.start)&&(r=c.start),l.fullSize?fr(l,r,s.top,d,e.outerHeight-s.bottom-s.top):fr(l,r,t.top+c.placed,d,u),c.start=r,c.placed+=u,r=l.right}}t.x=r,t.y=o}var Le={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,n){if(!i)return;const s=De(i.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=ym(i.boxes),l=a.vertical,c=a.horizontal;Zt(i.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const h=l.reduce((_,p)=>p.box.options&&p.box.options.display===!1?_:_+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},s);Ku(d,De(n));const f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),g=Mm(l.concat(c),u);Rs(a.fullSize,f,u,g),Rs(l,f,u,g),Rs(c,f,u,g)&&Rs(l,f,u,g),Em(f),ec(a.leftAndTop,f,u,g),f.x+=f.w,f.y+=f.h,ec(a.rightAndBottom,f,u,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Zt(a.chartArea,_=>{const p=_.box;Object.assign(p,i.chartArea),p.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Zu{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,s){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):n)}}isAttached(t){return!0}updateConfig(t){}}class Am extends Zu{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const qr="$chartjs",wm={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},nc=i=>i===null||i==="";function Rm(i,t){const e=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[qr]={initial:{height:n,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",nc(s)){const r=kl(i,"width");r!==void 0&&(i.width=r)}if(nc(n))if(i.style.height==="")i.height=i.width/(t||2);else{const r=kl(i,"height");r!==void 0&&(i.height=r)}return i}const Ju=Pp?{passive:!0}:!1;function Cm(i,t,e){i.addEventListener(t,e,Ju)}function Pm(i,t,e){i.canvas.removeEventListener(t,e,Ju)}function Lm(i,t){const e=wm[i.type]||i.type,{x:n,y:s}=fi(i,t);return{type:e,chart:t,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function so(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function Dm(i,t,e){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||so(a.addedNodes,n),o=o&&!so(a.removedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function Im(i,t,e){const n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||so(a.removedNodes,n),o=o&&!so(a.addedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Ys=new Map;let ic=0;function Qu(){const i=window.devicePixelRatio;i!==ic&&(ic=i,Ys.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function Om(i,t){Ys.size||window.addEventListener("resize",Qu),Ys.set(i,t)}function Um(i){Ys.delete(i),Ys.size||window.removeEventListener("resize",Qu)}function Nm(i,t,e){const n=i.canvas,s=n&&il(n);if(!s)return;const r=Ru((a,l)=>{const c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),Om(i,r),o}function Bo(i,t,e){e&&e.disconnect(),t==="resize"&&Um(i)}function Fm(i,t,e){const n=i.canvas,s=Ru(r=>{i.ctx!==null&&e(Lm(r,i))},i);return Cm(n,t,s),s}class km extends Zu{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(Rm(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[qr])return!1;const n=e[qr].initial;["height","width"].forEach(r=>{const o=n[r];jt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=n.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[qr],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:Dm,detach:Im,resize:Nm}[e]||Fm;s[e]=o(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),s=n[e];if(!s)return;({attach:Bo,detach:Bo,resize:Bo}[e]||Pm)(t,e,s),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,s){return Cp(t,e,n,s)}isAttached(t){const e=il(t);return!!(e&&e.isConnected)}}function Bm(i){return!zu()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Am:km}class an{constructor(){rt(this,"x");rt(this,"y");rt(this,"active",!1);rt(this,"options");rt(this,"$animations")}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return os(this.x)&&os(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const s={};return t.forEach(r=>{s[r]=n[r]&&n[r].active()?n[r]._to:this[r]}),s}}rt(an,"defaults",{}),rt(an,"defaultRoutes");function zm(i,t){const e=i.options.ticks,n=Hm(i),s=Math.min(e.maxTicksLimit||n,n),r=e.major.enabled?Gm(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Wm(t,c,r,o/s),c;const h=Vm(r,t,s);if(o>0){let u,d;const f=o>1?Math.round((l-a)/(o-1)):null;for(pr(t,c,h,jt(f)?0:a-f,a),u=0,d=o-1;u<d;u++)pr(t,c,h,r[u],r[u+1]);return pr(t,c,h,l,jt(f)?t.length:l+f),c}return pr(t,c,h),c}function Hm(i){const t=i.options.offset,e=i._tickSize(),n=i._length/e+(t?0:1),s=i._maxLength/e;return Math.floor(Math.min(n,s))}function Vm(i,t,e){const n=Xm(i),s=t.length/e;if(!n)return Math.max(s,1);const r=If(n);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function Gm(i){const t=[];let e,n;for(e=0,n=i.length;e<n;e++)i[e].major&&t.push(e);return t}function Wm(i,t,e,n){let s=0,r=e[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===r&&(t.push(i[o]),s++,r=e[s*n])}function pr(i,t,e,n,s){const r=Ut(n,0),o=Math.min(Ut(s,i.length),i.length);let a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-n,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(i[c]),a++,h=Math.round(r+a*e))}function Xm(i){const t=i.length;let e,n;if(t<2)return!1;for(n=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==n)return!1;return n}const Ym=i=>i==="left"?"right":i==="right"?"left":i,sc=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,rc=(i,t)=>Math.min(t||i,i);function oc(i,t){const e=[],n=i.length/t,s=i.length;let r=0;for(;r<s;r+=n)e.push(i[Math.floor(r)]);return e}function jm(i,t,e){const n=i.ticks.length,s=Math.min(t,n-1),r=i._startPixel,o=i._endPixel,a=1e-6;let l=i.getPixelForTick(s),c;if(!(e&&(n===1?c=Math.max(l-r,o-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function qm(i,t){Zt(i,e=>{const n=e.gc,s=n.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[n[r]];n.splice(0,s)}})}function vs(i){return i.drawTicks?i.tickLength:0}function ac(i,t){if(!i.display)return 0;const e=ge(i.font,t),n=De(i.padding);return(se(i.text)?i.text.length:1)*e.lineHeight+n.height}function $m(i,t){return ni(i,{scale:t,type:"scale"})}function Km(i,t,e){return ni(i,{tick:e,index:t,type:"tick"})}function Zm(i,t,e){let n=Za(i);return(e&&t!=="right"||!e&&t==="right")&&(n=Ym(n)),n}function Jm(i,t,e,n){const{top:s,left:r,bottom:o,right:a,chart:l}=i,{chartArea:c,scales:h}=l;let u=0,d,f,g;const _=o-s,p=a-r;if(i.isHorizontal()){if(f=Ce(n,r,a),Xt(e)){const m=Object.keys(e)[0],b=e[m];g=h[m].getPixelForValue(b)+_-t}else e==="center"?g=(c.bottom+c.top)/2+_-t:g=sc(i,e,t);d=a-r}else{if(Xt(e)){const m=Object.keys(e)[0],b=e[m];f=h[m].getPixelForValue(b)-p+t}else e==="center"?f=(c.left+c.right)/2-p+t:f=sc(i,e,t);g=Ce(n,o,s),u=e==="left"?-fe:fe}return{titleX:f,titleY:g,maxWidth:d,rotation:u}}class Ci extends an{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:s}=this;return t=Ye(t,Number.POSITIVE_INFINITY),e=Ye(e,Number.NEGATIVE_INFINITY),n=Ye(n,Number.POSITIVE_INFINITY),s=Ye(s,Number.NEGATIVE_INFINITY),{min:Ye(t,n),max:Ye(e,s),minDefined:ce(t),maxDefined:ce(e)}}getMinMax(t){let{min:e,max:n,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:n};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(n=Math.max(n,o.max));return e=r&&e>n?n:e,n=s&&e>n?e:n,{min:Ye(e,Ye(n,e)),max:Ye(n,Ye(e,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ee(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=ap(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?oc(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=zm(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,n;this.isHorizontal()?(e=this.left,n=this.right):(e=this.top,n=this.bottom,t=!t),this._startPixel=e,this._endPixel=n,this._reversePixels=t,this._length=n-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ee(this.options.afterUpdate,[this])}beforeSetDimensions(){ee(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ee(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ee(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ee(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,s,r;for(n=0,s=t.length;n<s;n++)r=t[n],r.label=ee(e.callback,[r.value,n,t],this)}afterTickToLabelConversion(){ee(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ee(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=rc(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||n<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=Me(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/n:f/(n-1),u+6>a&&(a=f/(n-(t.offset?.5:1)),l=this.maxHeight-vs(t.grid)-e.padding-ac(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),o=$a(Math.min(Math.asin(Me((h.highest.height+6)/a,-1,1)),Math.asin(Me(l/c,-1,1))-Math.asin(Me(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ee(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ee(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=ac(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=vs(r)+l):(t.height=this.maxHeight,t.width=vs(r)+l),n.display&&this.ticks.length){const{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=n.padding*2,g=rn(this.labelRotation),_=Math.cos(g),p=Math.sin(g);if(a){const m=n.mirror?0:p*u.width+_*d.height;t.height=Math.min(this.maxHeight,t.height+m+f)}else{const m=n.mirror?0:_*u.width+p*d.height;t.width=Math.min(this.maxWidth,t.width+m+f)}this._calculatePadding(c,h,p,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*t.width,f=n*e.height):(d=n*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?d=t.width:r!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;r==="start"?(h=0,u=t.height):r==="end"&&(h=e.height,u=0),this.paddingTop=h+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ee(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,n;for(e=0,n=t.length;e<n;e++)jt(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=oc(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/rc(e,n));let c=0,h=0,u,d,f,g,_,p,m,b,v,y,A;for(u=0;u<e;u+=l){if(g=t[u].label,_=this._resolveTickFontOptions(u),s.font=p=_.string,m=r[p]=r[p]||{data:{},gc:[]},b=_.lineHeight,v=y=0,!jt(g)&&!se(g))v=no(s,m.data,m.gc,v,g),y=b;else if(se(g))for(d=0,f=g.length;d<f;++d)A=g[d],!jt(A)&&!se(A)&&(v=no(s,m.data,m.gc,v,A),y+=b);o.push(v),a.push(y),c=Math.max(v,c),h=Math.max(y,h)}qm(r,e);const R=o.indexOf(c),S=a.indexOf(h),D=W=>({width:o[W]||0,height:a[W]||0});return{first:D(0),last:D(e-1),widest:D(R),highest:D(S),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Nf(this._alignToPixels?oi(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=Km(this.getContext(),t,n))}return this.$context||(this.$context=$m(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=rn(this.labelRotation),n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),d=vs(r),f=[],g=a.setContext(this.getContext()),_=g.display?g.width:0,p=_/2,m=function(O){return oi(n,O,_)};let b,v,y,A,R,S,D,W,x,w,B,q;if(o==="top")b=m(this.bottom),S=this.bottom-d,W=b-p,w=m(t.top)+p,q=t.bottom;else if(o==="bottom")b=m(this.top),w=t.top,q=m(t.bottom)-p,S=b+p,W=this.top+d;else if(o==="left")b=m(this.right),R=this.right-d,D=b-p,x=m(t.left)+p,B=t.right;else if(o==="right")b=m(this.left),x=t.left,B=m(t.right)-p,R=b+p,D=this.left+d;else if(e==="x"){if(o==="center")b=m((t.top+t.bottom)/2+.5);else if(Xt(o)){const O=Object.keys(o)[0],X=o[O];b=m(this.chart.scales[O].getPixelForValue(X))}w=t.top,q=t.bottom,S=b+p,W=S+d}else if(e==="y"){if(o==="center")b=m((t.left+t.right)/2);else if(Xt(o)){const O=Object.keys(o)[0],X=o[O];b=m(this.chart.scales[O].getPixelForValue(X))}R=b-p,D=R-d,x=t.left,B=t.right}const L=Ut(s.ticks.maxTicksLimit,u),N=Math.max(1,Math.ceil(u/L));for(v=0;v<u;v+=N){const O=this.getContext(v),X=r.setContext(O),Y=a.setContext(O),j=X.lineWidth,$=X.color,et=Y.dash||[],ot=Y.dashOffset,Mt=X.tickWidth,V=X.tickColor,K=X.tickBorderDash||[],ht=X.tickBorderDashOffset;y=jm(this,v,l),y!==void 0&&(A=oi(n,y,j),c?R=D=x=B=A:S=W=w=q=A,f.push({tx1:R,ty1:S,tx2:D,ty2:W,x1:x,y1:w,x2:B,y2:q,width:j,color:$,borderDash:et,borderDashOffset:ot,tickWidth:Mt,tickColor:V,tickBorderDash:K,tickBorderDashOffset:ht}))}return this._ticksLength=u,this._borderValue=b,f}_computeLabelItems(t){const e=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=r,d=vs(n.grid),f=d+h,g=u?-h:f,_=-rn(this.labelRotation),p=[];let m,b,v,y,A,R,S,D,W,x,w,B,q="middle";if(s==="top")R=this.bottom-g,S=this._getXAxisLabelAlignment();else if(s==="bottom")R=this.top+g,S=this._getXAxisLabelAlignment();else if(s==="left"){const N=this._getYAxisLabelAlignment(d);S=N.textAlign,A=N.x}else if(s==="right"){const N=this._getYAxisLabelAlignment(d);S=N.textAlign,A=N.x}else if(e==="x"){if(s==="center")R=(t.top+t.bottom)/2+f;else if(Xt(s)){const N=Object.keys(s)[0],O=s[N];R=this.chart.scales[N].getPixelForValue(O)+f}S=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")A=(t.left+t.right)/2-f;else if(Xt(s)){const N=Object.keys(s)[0],O=s[N];A=this.chart.scales[N].getPixelForValue(O)}S=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?q="top":l==="end"&&(q="bottom"));const L=this._getLabelSizes();for(m=0,b=a.length;m<b;++m){v=a[m],y=v.label;const N=r.setContext(this.getContext(m));D=this.getPixelForTick(m)+r.labelOffset,W=this._resolveTickFontOptions(m),x=W.lineHeight,w=se(y)?y.length:1;const O=w/2,X=N.color,Y=N.textStrokeColor,j=N.textStrokeWidth;let $=S;o?(A=D,S==="inner"&&(m===b-1?$=this.options.reverse?"left":"right":m===0?$=this.options.reverse?"right":"left":$="center"),s==="top"?c==="near"||_!==0?B=-w*x+x/2:c==="center"?B=-L.highest.height/2-O*x+x:B=-L.highest.height+x/2:c==="near"||_!==0?B=x/2:c==="center"?B=L.highest.height/2-O*x:B=L.highest.height-w*x,u&&(B*=-1),_!==0&&!N.showLabelBackdrop&&(A+=x/2*Math.sin(_))):(R=D,B=(1-w)*x/2);let et;if(N.showLabelBackdrop){const ot=De(N.backdropPadding),Mt=L.heights[m],V=L.widths[m];let K=B-ot.top,ht=0-ot.left;switch(q){case"middle":K-=Mt/2;break;case"bottom":K-=Mt;break}switch(S){case"center":ht-=V/2;break;case"right":ht-=V;break}et={left:ht,top:K,width:V+ot.width,height:Mt+ot.height,color:N.backdropColor}}p.push({label:y,font:W,textOffset:B,options:{rotation:_,color:X,strokeColor:Y,strokeWidth:j,textAlign:$,textBaseline:q,translation:[A,R],backdrop:et}})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-rn(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,h;return e==="left"?s?(h=this.right+r,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,h)=>{!h.width||!h.color||(n.save(),n.lineWidth=h.width,n.strokeStyle=h.color,n.setLineDash(h.borderDash||[]),n.lineDashOffset=h.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:n,grid:s}}=this,r=n.setContext(this.getContext()),o=n.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,u,d;this.isHorizontal()?(c=oi(t,this.left,o)-o/2,h=oi(t,this.right,a)+a/2,u=d=l):(u=oi(t,this.top,o)-o/2,d=oi(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,s=this._computeLabelArea();s&&vo(n,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,c=o.label,h=o.textOffset;wi(n,c,0,h,l,a)}s&&bo(n)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:s}}=this;if(!n.display)return;const r=ge(n.font),o=De(n.padding),a=n.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||Xt(e)?(l+=o.bottom,se(n.text)&&(l+=r.lineHeight*(n.text.length-1))):l+=o.top;const{titleX:c,titleY:h,maxWidth:u,rotation:d}=Jm(this,l,e,a);wi(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:d,textAlign:Zm(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=Ut(t.grid&&t.grid.z,-1),s=Ut(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ci.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:n,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[n]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return ge(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class mr{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;eg(e)&&(n=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,Qm(t,o,n),this.override&&he.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,s=this.scope;n in e&&delete e[n],s&&n in he[s]&&(delete he[s][n],this.override&&delete Ai[n])}}function Qm(i,t,e){const n=Vs(Object.create(null),[e?he.get(e):{},he.get(t),i.defaults]);he.set(t,n),i.defaultRoutes&&tg(t,i.defaultRoutes),i.descriptors&&he.describe(t,i.descriptors)}function tg(i,t){Object.keys(t).forEach(e=>{const n=e.split("."),s=n.pop(),r=[i].concat(n).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");he.route(r,s,l,a)})}function eg(i){return"id"in i&&"defaults"in i}class ng{constructor(){this.controllers=new mr(on,"datasets",!0),this.elements=new mr(an,"elements"),this.plugins=new mr(Object,"plugins"),this.scales=new mr(Ci,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach(s=>{const r=n||this._getRegistryForType(s);n||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):Zt(s,o=>{const a=n||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,n){const s=qa(t);ee(n["before"+s],[],n),e[t](n),ee(n["after"+s],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return s}}var cn=new ng;class ig{constructor(){this._init=[]}notify(t,e,n,s){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,n);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,n,s){s=s||{};for(const r of t){const o=r.plugin,a=o[n],l=[e,s,r.options];if(ee(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){jt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,s=Ut(n.options&&n.options.plugins,{}),r=sg(n);return s===!1&&!e?[]:og(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,n),t,"stop"),this._notify(s(n,e),t,"start")}}function sg(i){const t={},e=[],n=Object.keys(cn.plugins.items);for(let r=0;r<n.length;r++)e.push(cn.getPlugin(n[r]));const s=i.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function rg(i,t){return!t&&i===!1?null:i===!0?{}:i}function og(i,{plugins:t,localIds:e},n,s){const r=[],o=i.getContext();for(const a of t){const l=a.id,c=rg(n[l],s);c!==null&&r.push({plugin:a,options:ag(i.config,{plugin:a,local:e[l]},c,o)})}return r}function ag(i,{plugin:t,local:e},n,s){const r=i.pluginScopeKeys(t),o=i.getOptionScopes(n,r);return e&&t.defaults&&o.push(t.defaults),i.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ta(i,t){const e=he.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function lg(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function cg(i,t){return i===t?"_index_":"_value_"}function lc(i){if(i==="x"||i==="y"||i==="r")return i}function hg(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Aa(i,...t){if(lc(i))return i;for(const e of t){const n=e.axis||hg(e.position)||i.length>1&&lc(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function cc(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function ug(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(e.length)return cc(i,"x",e[0])||cc(i,"y",e[0])}return{}}function dg(i,t){const e=Ai[i.type]||{scales:{}},n=t.scales||{},s=Ta(i.type,t),r=Object.create(null);return Object.keys(n).forEach(o=>{const a=n[o];if(!Xt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Aa(o,a,ug(o,i),he.scales[a.type]),c=cg(l,s),h=e.scales||{};r[o]=Is(Object.create(null),[{axis:l},a,h[l],h[c]])}),i.data.datasets.forEach(o=>{const a=o.type||i.type,l=o.indexAxis||Ta(a,t),h=(Ai[a]||{}).scales||{};Object.keys(h).forEach(u=>{const d=lg(u,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),Is(r[f],[{axis:d},n[f],h[u]])})}),Object.keys(r).forEach(o=>{const a=r[o];Is(a,[he.scales[a.type],he.scale])}),r}function td(i){const t=i.options||(i.options={});t.plugins=Ut(t.plugins,{}),t.scales=dg(i,t)}function ed(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function fg(i){return i=i||{},i.data=ed(i.data),td(i),i}const hc=new Map,nd=new Set;function gr(i,t){let e=hc.get(i);return e||(e=t(),hc.set(i,e),nd.add(e)),e}const bs=(i,t,e)=>{const n=Zn(t,e);n!==void 0&&i.add(n)};class pg{constructor(t){this._config=fg(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ed(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),td(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return gr(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return gr(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return gr(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,n=this.type;return gr(`${n}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const n=this._scopeCache;let s=n.get(t);return(!s||e)&&(s=new Map,n.set(t,s)),s}getOptionScopes(t,e,n){const{options:s,type:r}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>bs(l,t,u))),h.forEach(u=>bs(l,s,u)),h.forEach(u=>bs(l,Ai[r]||{},u)),h.forEach(u=>bs(l,he,u)),h.forEach(u=>bs(l,ya,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),nd.has(e)&&o.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Ai[e]||{},he.datasets[e]||{},{type:e},he,ya]}resolveNamedOptions(t,e,n,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=uc(this._resolverCache,t,s);let l=o;if(gg(o,e)){r.$shared=!1,n=Jn(n)?n():n;const c=this.createResolver(t,n,a);l=as(o,n,c)}for(const c of e)r[c]=l[c];return r}createResolver(t,e,n=[""],s){const{resolver:r}=uc(this._resolverCache,t,n);return Xt(e)?as(r,e,void 0,s):r}}function uc(i,t,e){let n=i.get(t);n||(n=new Map,i.set(t,n));const s=e.join();let r=n.get(s);return r||(r={resolver:tl(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,r)),r}const mg=i=>Xt(i)&&Object.getOwnPropertyNames(i).reduce((t,e)=>t||Jn(i[e]),!1);function gg(i,t){const{isScriptable:e,isIndexable:n}=Ou(i);for(const s of t){const r=e(s),o=n(s),a=(o||r)&&i[s];if(r&&(Jn(a)||mg(a))||o&&se(a))return!0}return!1}var _g="4.4.0";const xg=["top","bottom","left","right","chartArea"];function dc(i,t){return i==="top"||i==="bottom"||xg.indexOf(i)===-1&&t==="x"}function fc(i,t){return function(e,n){return e[i]===n[i]?e[t]-n[t]:e[i]-n[i]}}function pc(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ee(e&&e.onComplete,[i],t)}function vg(i){const t=i.chart,e=t.options.animation;ee(e&&e.onProgress,[i],t)}function id(i){return zu()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const $r={},mc=i=>{const t=id(i);return Object.values($r).filter(e=>e.canvas===t).pop()};function bg(i,t,e){const n=Object.keys(i);for(const s of n){const r=+s;if(r>=t){const o=i[s];delete i[s],(e>0||r>t)&&(i[r+e]=o)}}}function Mg(i,t,e,n){return!e||i.type==="mouseout"?null:n?t:i}function _r(i,t,e){return i.options.clip?i[e]:t[e]}function yg(i,t){const{xScale:e,yScale:n}=i;return e&&n?{left:_r(e,t,"left"),right:_r(e,t,"right"),top:_r(n,t,"top"),bottom:_r(n,t,"bottom")}:t}class Rn{static register(...t){cn.add(...t),gc()}static unregister(...t){cn.remove(...t),gc()}constructor(t,e){const n=this.config=new pg(e),s=id(t),r=mc(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Bm(s)),this.platform.updateConfig(n);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=Ef(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ig,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=zf(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],$r[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}En.listen(this,"complete",pc),En.listen(this,"progress",vg),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:s,_aspectRatio:r}=this;return jt(t)?e&&r?r:s?n/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return cn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Fl(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ol(this.canvas,this.ctx),this}stop(){return En.stop(this),this}resize(t,e){En.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,s=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Fl(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ee(n.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};Zt(e,(n,s)=>{n.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,s=Object.keys(n).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Aa(o,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),Zt(r,o=>{const a=o.options,l=a.id,c=Aa(l,a),h=Ut(a.type,o.dtype);(a.position===void 0||dc(a.position,c)!==dc(o.dposition))&&(a.position=o.dposition),s[l]=!0;let u=null;if(l in n&&n[l].type===h)u=n[l];else{const d=cn.getScale(h);u=new d({id:l,type:h,ctx:this.ctx,chart:this}),n[u.id]=u}u.init(a,t)}),Zt(s,(o,a)=>{o||delete n[a]}),Zt(n,o=>{Le.configure(this,o,o.options),Le.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort((s,r)=>s.index-r.index),n>e){for(let s=e;s<n;++s)this._destroyDatasetMeta(s);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(fc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((n,s)=>{e.filter(r=>r===n._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,s;for(this._removeUnreferencedMetasets(),n=0,s=e.length;n<s;n++){const r=e[n];let o=this.getDatasetMeta(n);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=a,o.indexAxis=r.indexAxis||Ta(a,this.options),o.order=r.order||0,o.index=n,o.label=""+r.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const l=cn.getController(a),{datasetElementType:c,dataElementType:h}=he.datasets[a];Object.assign(l,{dataElementType:cn.getElement(h),datasetElementType:c&&cn.getElement(c)}),o.controller=new l(this,n),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Zt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:u}=this.getDatasetMeta(c),d=!s&&r.indexOf(u)===-1;u.buildOrUpdateElements(d),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),s||Zt(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(fc("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Zt(this.scales,t=>{Le.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!Tl(e,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:s,count:r}of e){const o=n==="_removeElements"?-r:r;bg(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=n(0);for(let r=1;r<e;r++)if(!Tl(s,n(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Le.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],Zt(this.boxes,s=>{n&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,n=this.data.datasets.length;e<n;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,Jn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),s={meta:n,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(n.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(En.has(this)?this.attached&&!En.running(this)&&En.start(this):(this.draw(),pc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:s}=this._resizeBeforeDraw;this._resize(n,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n=t._clip,s=!n.disabled,r=yg(t,this.chartArea),o={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&vo(e,{left:n.left===!1?0:r.left-n.left,right:n.right===!1?this.width:r.right+n.right,top:n.top===!1?0:r.top-n.top,bottom:n.bottom===!1?this.height:r.bottom+n.bottom}),t.controller.draw(),s&&bo(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return Dn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,s){const r=xm.modes[e];return typeof r=="function"?r(this,t,n,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let s=n.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(s)),s}getContext(){return this.$context||(this.$context=ni(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const s=n?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Gs(e)?(r.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(r,{visible:n}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),En.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Ol(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete $r[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Zt(this.options.events,r=>n(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),n("resize",r),n("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),n("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Zt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},Zt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const s=n?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Qr(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,n){const s=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(u=>h.datasetIndex===u.datasetIndex&&h.index===u.index)),o=r(e,t),a=n?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,s)===!1)return;const r=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,s),(r||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,n,o),l=Pf(t),c=Mg(t,this._lastEvent,n,l);n&&(this._lastEvent=null,ee(r.onHover,[t,a,this],this),l&&ee(r.onClick,[t,a,this],this));const h=!Qr(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,n,s){if(t.type==="mouseout")return[];if(!n)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}rt(Rn,"defaults",he),rt(Rn,"instances",$r),rt(Rn,"overrides",Ai),rt(Rn,"registry",cn),rt(Rn,"version",_g),rt(Rn,"getChart",mc);function gc(){return Zt(Rn.instances,i=>i._plugins.invalidate())}function Sg(i,t,e){const{startAngle:n,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:l}=t;let c=s/a;i.beginPath(),i.arc(r,o,a,n-c,e+c),l>s?(c=s/l,i.arc(r,o,l,e+c,n-c,!0)):i.arc(r,o,s,e+fe,n-fe),i.closePath(),i.clip()}function Eg(i){return Qa(i,["outerStart","outerEnd","innerStart","innerEnd"])}function Tg(i,t,e,n){const s=Eg(i.options.borderRadius),r=(e-t)/2,o=Math.min(r,n*t/2),a=l=>{const c=(e-Math.min(r,l))*n/2;return Me(l,0,Math.min(r,c))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Me(s.innerStart,0,o),innerEnd:Me(s.innerEnd,0,o)}}function Ii(i,t,e,n){return{x:e+i*Math.cos(t),y:n+i*Math.sin(t)}}function ro(i,t,e,n,s,r){const{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,u=Math.max(t.outerRadius+n+e-c,0),d=h>0?h+n+e+c:0;let f=0;const g=s-l;if(n){const N=h>0?h-n:0,O=u>0?u-n:0,X=(N+O)/2,Y=X!==0?g*X/(X+n):g;f=(g-Y)/2}const _=Math.max(.001,g*u-e/oe)/u,p=(g-_)/2,m=l+p+f,b=s-p-f,{outerStart:v,outerEnd:y,innerStart:A,innerEnd:R}=Tg(t,d,u,b-m),S=u-v,D=u-y,W=m+v/S,x=b-y/D,w=d+A,B=d+R,q=m+A/w,L=b-R/B;if(i.beginPath(),r){const N=(W+x)/2;if(i.arc(o,a,u,W,N),i.arc(o,a,u,N,x),y>0){const j=Ii(D,x,o,a);i.arc(j.x,j.y,y,x,b+fe)}const O=Ii(B,b,o,a);if(i.lineTo(O.x,O.y),R>0){const j=Ii(B,L,o,a);i.arc(j.x,j.y,R,b+fe,L+Math.PI)}const X=(b-R/d+(m+A/d))/2;if(i.arc(o,a,d,b-R/d,X,!0),i.arc(o,a,d,X,m+A/d,!0),A>0){const j=Ii(w,q,o,a);i.arc(j.x,j.y,A,q+Math.PI,m-fe)}const Y=Ii(S,m,o,a);if(i.lineTo(Y.x,Y.y),v>0){const j=Ii(S,W,o,a);i.arc(j.x,j.y,v,m-fe,W)}}else{i.moveTo(o,a);const N=Math.cos(W)*u+o,O=Math.sin(W)*u+a;i.lineTo(N,O);const X=Math.cos(x)*u+o,Y=Math.sin(x)*u+a;i.lineTo(X,Y)}i.closePath()}function Ag(i,t,e,n,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){ro(i,t,e,n,l,s);for(let c=0;c<r;++c)i.fill();isNaN(a)||(l=o+(a%re||re))}return ro(i,t,e,n,l,s),i.fill(),l}function wg(i,t,e,n,s){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:u,borderDashOffset:d}=l,f=l.borderAlign==="inner";if(!c)return;i.setLineDash(u||[]),i.lineDashOffset=d,f?(i.lineWidth=c*2,i.lineJoin=h||"round"):(i.lineWidth=c,i.lineJoin=h||"bevel");let g=t.endAngle;if(r){ro(i,t,e,n,g,s);for(let _=0;_<r;++_)i.stroke();isNaN(a)||(g=o+(a%re||re))}f&&Sg(i,t,g),r||(ro(i,t,e,n,g,s),i.stroke())}class Cs extends an{constructor(e){super();rt(this,"circumference");rt(this,"endAngle");rt(this,"fullCircles");rt(this,"innerRadius");rt(this,"outerRadius");rt(this,"pixelMargin");rt(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,n,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=Eu(r,{x:e,y:n}),{startAngle:l,endAngle:c,innerRadius:h,outerRadius:u,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),f=(this.options.spacing+this.options.borderWidth)/2,_=Ut(d,c-l)>=re||Ws(o,l,c),p=Pn(a,h+f,u+f);return _&&p}getCenterPoint(e){const{x:n,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:h}=this.options,u=(r+o)/2,d=(a+l+h+c)/2;return{x:n+Math.cos(u)*d,y:s+Math.sin(u)*d}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:n,circumference:s}=this,r=(n.offset||0)/4,o=(n.spacing||0)/2,a=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=s>re?Math.floor(s/re):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const c=1-Math.sin(Math.min(oe,s||0)),h=r*c;e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,Ag(e,this,h,o,a),wg(e,this,h,o,a),e.restore()}}rt(Cs,"id","arc"),rt(Cs,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),rt(Cs,"defaultRoutes",{backgroundColor:"backgroundColor"}),rt(Cs,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function sd(i,t,e=t){i.lineCap=Ut(e.borderCapStyle,t.borderCapStyle),i.setLineDash(Ut(e.borderDash,t.borderDash)),i.lineDashOffset=Ut(e.borderDashOffset,t.borderDashOffset),i.lineJoin=Ut(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=Ut(e.borderWidth,t.borderWidth),i.strokeStyle=Ut(e.borderColor,t.borderColor)}function Rg(i,t,e){i.lineTo(e.x,e.y)}function Cg(i){return i.stepped?Jf:i.tension||i.cubicInterpolationMode==="monotone"?Qf:Rg}function rd(i,t,e={}){const n=i.length,{start:s=0,end:r=n-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:n,start:l,loop:t.loop,ilen:c<l&&!h?n+c-l:c-l}}function Pg(i,t,e,n){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=rd(s,e,n),h=Cg(r);let{move:u=!0,reverse:d}=n||{},f,g,_;for(f=0;f<=c;++f)g=s[(a+(d?c-f:f))%o],!g.skip&&(u?(i.moveTo(g.x,g.y),u=!1):h(i,_,g,d,r.stepped),_=g);return l&&(g=s[(a+(d?c:0))%o],h(i,_,g,d,r.stepped)),!!l}function Lg(i,t,e,n){const s=t.points,{count:r,start:o,ilen:a}=rd(s,e,n),{move:l=!0,reverse:c}=n||{};let h=0,u=0,d,f,g,_,p,m;const b=y=>(o+(c?a-y:y))%r,v=()=>{_!==p&&(i.lineTo(h,p),i.lineTo(h,_),i.lineTo(h,m))};for(l&&(f=s[b(0)],i.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[b(d)],f.skip)continue;const y=f.x,A=f.y,R=y|0;R===g?(A<_?_=A:A>p&&(p=A),h=(u*h+y)/++u):(v(),i.lineTo(y,A),g=R,u=0,_=p=A),m=A}v()}function wa(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Lg:Pg}function Dg(i){return i.stepped?Lp:i.tension||i.cubicInterpolationMode==="monotone"?Dp:pi}function Ig(i,t,e,n){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,n)&&s.closePath()),sd(i,t.options),i.stroke(s)}function Og(i,t,e,n){const{segments:s,options:r}=t,o=wa(t);for(const a of s)sd(i,r,a.style),i.beginPath(),o(i,t,a,{start:e,end:e+n-1})&&i.closePath(),i.stroke()}const Ug=typeof Path2D=="function";function Ng(i,t,e,n){Ug&&!t.options.segment?Ig(i,t,e,n):Og(i,t,e,n)}class Wn extends an{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const s=n.spanGaps?this._loop:this._fullLoop;Sp(this._points,n,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=kp(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,s=t[e],r=this.points,o=Xu(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],l=Dg(n);let c,h;for(c=0,h=o.length;c<h;++c){const{start:u,end:d}=o[c],f=r[u],g=r[d];if(f===g){a.push(f);continue}const _=Math.abs((s-f[e])/(g[e]-f[e])),p=l(f,g,_,n.stepped);p[e]=t[e],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,e,n){return wa(this)(t,this,e,n)}path(t,e,n){const s=this.segments,r=wa(this);let o=this._loop;e=e||0,n=n||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+n-1});return!!o}draw(t,e,n,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),Ng(t,this,n,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}rt(Wn,"id","line"),rt(Wn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),rt(Wn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),rt(Wn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function _c(i,t,e,n){const s=i.options,{[e]:r}=i.getProps([e],n);return Math.abs(t-r)<s.radius+s.hitRadius}class Kr extends an{constructor(e){super();rt(this,"parsed");rt(this,"skip");rt(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,n,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(n-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,n){return _c(this,e,"x",n)}inYRange(e,n){return _c(this,e,"y",n)}getCenterPoint(e){const{x:n,y:s}=this.getProps(["x","y"],e);return{x:n,y:s}}size(e){e=e||this.options||{};let n=e.radius||0;n=Math.max(n,n&&e.hoverRadius||0);const s=n&&e.borderWidth||0;return(n+s)*2}draw(e,n){const s=this.options;this.skip||s.radius<.1||!Dn(this,n,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Sa(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}rt(Kr,"id","point"),rt(Kr,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),rt(Kr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function od(i,t){const{x:e,y:n,base:s,width:r,height:o}=i.getProps(["x","y","base","width","height"],t);let a,l,c,h,u;return i.horizontal?(u=o/2,a=Math.min(e,s),l=Math.max(e,s),c=n-u,h=n+u):(u=r/2,a=e-u,l=e+u,c=Math.min(n,s),h=Math.max(n,s)),{left:a,top:c,right:l,bottom:h}}function Xn(i,t,e,n){return i?0:Me(t,e,n)}function Fg(i,t,e){const n=i.options.borderWidth,s=i.borderSkipped,r=Iu(n);return{t:Xn(s.top,r.top,0,e),r:Xn(s.right,r.right,0,t),b:Xn(s.bottom,r.bottom,0,e),l:Xn(s.left,r.left,0,t)}}function kg(i,t,e){const{enableBorderRadius:n}=i.getProps(["enableBorderRadius"]),s=i.options.borderRadius,r=bi(s),o=Math.min(t,e),a=i.borderSkipped,l=n||Xt(s);return{topLeft:Xn(!l||a.top||a.left,r.topLeft,0,o),topRight:Xn(!l||a.top||a.right,r.topRight,0,o),bottomLeft:Xn(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Xn(!l||a.bottom||a.right,r.bottomRight,0,o)}}function Bg(i){const t=od(i),e=t.right-t.left,n=t.bottom-t.top,s=Fg(i,e/2,n/2),r=kg(i,e/2,n/2);return{outer:{x:t.left,y:t.top,w:e,h:n,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:n-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function zo(i,t,e,n){const s=t===null,r=e===null,a=i&&!(s&&r)&&od(i,n);return a&&(s||Pn(t,a.left,a.right))&&(r||Pn(e,a.top,a.bottom))}function zg(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function Hg(i,t){i.rect(t.x,t.y,t.w,t.h)}function Ho(i,t,e={}){const n=i.x!==e.x?-t:0,s=i.y!==e.y?-t:0,r=(i.x+i.w!==e.x+e.w?t:0)-n,o=(i.y+i.h!==e.y+e.h?t:0)-s;return{x:i.x+n,y:i.y+s,w:i.w+r,h:i.h+o,radius:i.radius}}class Zr extends an{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:n,backgroundColor:s}}=this,{inner:r,outer:o}=Bg(this),a=zg(o.radius)?Xs:Hg;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Ho(o,e,r)),t.clip(),a(t,Ho(r,-e,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),a(t,Ho(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,n){return zo(this,t,e,n)}inXRange(t,e){return zo(this,t,null,e)}inYRange(t,e){return zo(this,null,t,e)}getCenterPoint(t){const{x:e,y:n,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?n:(n+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}rt(Zr,"id","bar"),rt(Zr,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),rt(Zr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Vg=Object.freeze({__proto__:null,ArcElement:Cs,BarElement:Zr,LineElement:Wn,PointElement:Kr});const Ra=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],xc=Ra.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function ad(i){return Ra[i%Ra.length]}function ld(i){return xc[i%xc.length]}function Gg(i,t){return i.borderColor=ad(t),i.backgroundColor=ld(t),++t}function Wg(i,t){return i.backgroundColor=i.data.map(()=>ad(t++)),t}function Xg(i,t){return i.backgroundColor=i.data.map(()=>ld(t++)),t}function Yg(i){let t=0;return(e,n)=>{const s=i.getDatasetMeta(n).controller;s instanceof xi?t=Wg(e,t):s instanceof Fs?t=Xg(e,t):s&&(t=Gg(e,t))}}function vc(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function jg(i){return i&&(i.borderColor||i.backgroundColor)}var qg={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;const{data:{datasets:n},options:s}=i.config,{elements:r}=s;if(!e.forceOverride&&(vc(n)||jg(s)||r&&vc(r)))return;const o=Yg(i);n.forEach(o)}};function $g(i,t,e,n,s){const r=s.samples||n;if(r>=e)return i.slice(t,t+e);const o=[],a=(e-2)/(r-2);let l=0;const c=t+e-1;let h=t,u,d,f,g,_;for(o[l++]=i[h],u=0;u<r-2;u++){let p=0,m=0,b;const v=Math.floor((u+1)*a)+1+t,y=Math.min(Math.floor((u+2)*a)+1,e)+t,A=y-v;for(b=v;b<y;b++)p+=i[b].x,m+=i[b].y;p/=A,m/=A;const R=Math.floor(u*a)+1+t,S=Math.min(Math.floor((u+1)*a)+1,e)+t,{x:D,y:W}=i[h];for(f=g=-1,b=R;b<S;b++)g=.5*Math.abs((D-p)*(i[b].y-W)-(D-i[b].x)*(m-W)),g>f&&(f=g,d=i[b],_=b);o[l++]=d,h=_}return o[l++]=i[c],o}function Kg(i,t,e,n){let s=0,r=0,o,a,l,c,h,u,d,f,g,_;const p=[],m=t+e-1,b=i[t].x,y=i[m].x-b;for(o=t;o<t+e;++o){a=i[o],l=(a.x-b)/y*n,c=a.y;const A=l|0;if(A===h)c<g?(g=c,u=o):c>_&&(_=c,d=o),s=(r*s+a.x)/++r;else{const R=o-1;if(!jt(u)&&!jt(d)){const S=Math.min(u,d),D=Math.max(u,d);S!==f&&S!==R&&p.push({...i[S],x:s}),D!==f&&D!==R&&p.push({...i[D],x:s})}o>0&&R!==f&&p.push(i[R]),p.push(a),h=A,r=0,g=_=c,u=d=f=o}}return p}function cd(i){if(i._decimated){const t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function bc(i){i.data.datasets.forEach(t=>{cd(t)})}function Zg(i,t){const e=t.length;let n=0,s;const{iScale:r}=i,{min:o,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(n=Me(Ln(t,r.axis,o).lo,0,e-1)),c?s=Me(Ln(t,r.axis,a).hi+1,n,e)-n:s=e-n,{start:n,count:s}}var Jg={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){bc(i);return}const n=i.width;i.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,l=i.getDatasetMeta(r),c=o||s.data;if(ws([a,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=i.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||i.options.parsing)return;let{start:u,count:d}=Zg(l,c);const f=e.threshold||4*n;if(d<=f){cd(s);return}jt(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let g;switch(e.algorithm){case"lttb":g=$g(c,u,d,n,e);break;case"min-max":g=Kg(c,u,d,n);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=g})},destroy(i){bc(i)}};function Qg(i,t,e){const n=i.segments,s=i.points,r=t.points,o=[];for(const a of n){let{start:l,end:c}=a;c=rl(l,c,s);const h=Ca(e,s[l],s[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[c]});continue}const u=Xu(t,h);for(const d of u){const f=Ca(e,r[d.start],r[d.end],d.loop),g=Wu(a,s,f);for(const _ of g)o.push({source:_,target:d,start:{[e]:Mc(h,f,"start",Math.max)},end:{[e]:Mc(h,f,"end",Math.min)}})}}return o}function Ca(i,t,e,n){if(n)return;let s=t[i],r=e[i];return i==="angle"&&(s=je(s),r=je(r)),{property:i,start:s,end:r}}function t_(i,t){const{x:e=null,y:n=null}=i||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=rl(o,a,s);const l=s[o],c=s[a];n!==null?(r.push({x:l.x,y:n}),r.push({x:c.x,y:n})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:c.y}))}),r}function rl(i,t,e){for(;t>i;t--){const n=e[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function Mc(i,t,e,n){return i&&t?n(i[e],t[e]):i?i[e]:t?t[e]:0}function hd(i,t){let e=[],n=!1;return se(i)?(n=!0,e=i):e=t_(i,t),e.length?new Wn({points:e,options:{tension:0},_loop:n,_fullLoop:n}):null}function yc(i){return i&&i.fill!==!1}function e_(i,t,e){let s=i[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!ce(s))return s;if(o=i[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function n_(i,t,e){const n=o_(i);if(Xt(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return ce(s)&&Math.floor(s)===s?i_(n[0],t,s,e):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function i_(i,t,e,n){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=n?!1:e}function s_(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:Xt(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function r_(i,t,e){let n;return i==="start"?n=e:i==="end"?n=t.options.reverse?t.min:t.max:Xt(i)?n=i.value:n=t.getBaseValue(),n}function o_(i){const t=i.options,e=t.fill;let n=Ut(e&&e.target,e);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function a_(i){const{scale:t,index:e,line:n}=i,s=[],r=n.segments,o=n.points,a=l_(t,e);a.push(hd({x:null,y:t.bottom},n));for(let l=0;l<r.length;l++){const c=r[l];for(let h=c.start;h<=c.end;h++)c_(s,o[h],a)}return new Wn({points:s,options:{}})}function l_(i,t){const e=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){const r=n[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function c_(i,t,e){const n=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:l}=h_(r,t,"x");if(!(!l||o&&a)){if(o)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function h_(i,t,e){const n=i.interpolate(t,e);if(!n)return{};const s=n[e],r=i.segments,o=i.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const h=r[c],u=o[h.start][e],d=o[h.end][e];if(Pn(s,u,d)){a=s===u,l=s===d;break}}return{first:a,last:l,point:n}}class ud{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:re},t.arc(s,r,o,e.end,e.start,!0),!n.bounds}interpolate(t){const{x:e,y:n,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:n+Math.sin(r)*s,angle:r}}}function u_(i){const{chart:t,fill:e,line:n}=i;if(ce(e))return d_(t,e);if(e==="stack")return a_(i);if(e==="shape")return!0;const s=f_(i);return s instanceof ud?s:hd(s,n)}function d_(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function f_(i){return(i.scale||{}).getPointPositionForValue?m_(i):p_(i)}function p_(i){const{scale:t={},fill:e}=i,n=s_(e,t);if(ce(n)){const s=t.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function m_(i){const{scale:t,fill:e}=i,n=t.options,s=t.getLabels().length,r=n.reverse?t.max:t.min,o=r_(e,t,r),a=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,r);return new ud({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function Vo(i,t,e){const n=u_(t),{line:s,scale:r,axis:o}=t,a=s.options,l=a.fill,c=a.backgroundColor,{above:h=c,below:u=c}=l||{};n&&s.points.length&&(vo(i,e),g_(i,{line:s,target:n,above:h,below:u,area:e,scale:r,axis:o}),bo(i))}function g_(i,t){const{line:e,target:n,above:s,below:r,area:o,scale:a}=t,l=e._loop?"angle":t.axis;i.save(),l==="x"&&r!==s&&(Sc(i,n,o.top),Ec(i,{line:e,target:n,color:s,scale:a,property:l}),i.restore(),i.save(),Sc(i,n,o.bottom)),Ec(i,{line:e,target:n,color:r,scale:a,property:l}),i.restore()}function Sc(i,t,e){const{segments:n,points:s}=t;let r=!0,o=!1;i.beginPath();for(const a of n){const{start:l,end:c}=a,h=s[l],u=s[rl(l,c,s)];r?(i.moveTo(h.x,h.y),r=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),o=!!t.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(u.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function Ec(i,t){const{line:e,target:n,property:s,color:r,scale:o}=t,a=Qg(e,n,s);for(const{source:l,target:c,start:h,end:u}of a){const{style:{backgroundColor:d=r}={}}=l,f=n!==!0;i.save(),i.fillStyle=d,__(i,o,f&&Ca(s,h,u)),i.beginPath();const g=!!e.pathSegment(i,l);let _;if(f){g?i.closePath():Tc(i,n,u,s);const p=!!n.pathSegment(i,c,{move:g,reverse:!0});_=g&&p,_||Tc(i,n,h,s)}i.closePath(),i.fill(_?"evenodd":"nonzero"),i.restore()}}function __(i,t,e){const{top:n,bottom:s}=t.chart.chartArea,{property:r,start:o,end:a}=e||{};r==="x"&&(i.beginPath(),i.rect(o,n,a-o,s-n),i.clip())}function Tc(i,t,e,n){const s=t.interpolate(e,n);s&&i.lineTo(s.x,s.y)}var x_={id:"filler",afterDatasetsUpdate(i,t,e){const n=(i.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<n;++o)r=i.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof Wn&&(l={visible:i.isDatasetVisible(o),index:o,fill:n_(a,o,n),chart:i,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<n;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=e_(s,o,e.propagate))},beforeDraw(i,t,e){const n=e.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),r=i.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),n&&a.fill&&Vo(i.ctx,a,r))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){const r=n[s].$filler;yc(r)&&Vo(i.ctx,r,i.chartArea)}},beforeDatasetDraw(i,t,e){const n=t.meta.$filler;!yc(n)||e.drawTime!=="beforeDatasetDraw"||Vo(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ac=(i,t)=>{let{boxHeight:e=t,boxWidth:n=t}=i;return i.usePointStyle&&(e=Math.min(e,t),n=i.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:e,itemHeight:Math.max(t,e)}},v_=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class wc extends an{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ee(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(n=>t.filter(n,this.chart.data))),t.sort&&(e=e.sort((n,s)=>t.sort(n,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,s=ge(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Ac(n,r);let c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a;let u=t;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((g,_)=>{const p=n+e/2+r.measureText(g.text).width;(_===0||c[c.length-1]+p+2*a>o)&&(u+=h,c[c.length-(_>0?0:1)]=0,f+=h,d++),l[_]={left:0,top:f,row:d,width:p,height:s},c[c.length-1]+=p+a}),u}_fitCols(t,e,n,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t;let u=a,d=0,f=0,g=0,_=0;return this.legendItems.forEach((p,m)=>{const{itemWidth:b,itemHeight:v}=b_(n,e,r,p,s);m>0&&f+v+2*a>h&&(u+=d+a,c.push({width:d,height:f}),g+=d+a,_++,d=f=0),l[m]={left:g,top:f,col:_,width:b,height:v},d=Math.max(d,b),f+=v+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:s},rtl:r}}=this,o=es(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Ce(n,this.left+s,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=Ce(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Ce(n,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=Ce(n,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;vo(t,this),this._draw(),bo(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:s}=this,{align:r,labels:o}=t,a=he.color,l=es(t.rtl,this.left,this.width),c=ge(o.font),{padding:h}=o,u=c.size,d=u/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:g,boxHeight:_,itemHeight:p}=Ac(o,u),m=function(R,S,D){if(isNaN(g)||g<=0||isNaN(_)||_<0)return;s.save();const W=Ut(D.lineWidth,1);if(s.fillStyle=Ut(D.fillStyle,a),s.lineCap=Ut(D.lineCap,"butt"),s.lineDashOffset=Ut(D.lineDashOffset,0),s.lineJoin=Ut(D.lineJoin,"miter"),s.lineWidth=W,s.strokeStyle=Ut(D.strokeStyle,a),s.setLineDash(Ut(D.lineDash,[])),o.usePointStyle){const x={radius:_*Math.SQRT2/2,pointStyle:D.pointStyle,rotation:D.rotation,borderWidth:W},w=l.xPlus(R,g/2),B=S+d;Du(s,x,w,B,o.pointStyleWidth&&g)}else{const x=S+Math.max((u-_)/2,0),w=l.leftForLtr(R,g),B=bi(D.borderRadius);s.beginPath(),Object.values(B).some(q=>q!==0)?Xs(s,{x:w,y:x,w:g,h:_,radius:B}):s.rect(w,x,g,_),s.fill(),W!==0&&s.stroke()}s.restore()},b=function(R,S,D){wi(s,D.text,R,S+p/2,c,{strikethrough:D.hidden,textAlign:l.textAlign(D.textAlign)})},v=this.isHorizontal(),y=this._computeTitleHeight();v?f={x:Ce(r,this.left+h,this.right-n[0]),y:this.top+h+y,line:0}:f={x:this.left+h,y:Ce(r,this.top+y+h,this.bottom-e[0].height),line:0},Hu(this.ctx,t.textDirection);const A=p+h;this.legendItems.forEach((R,S)=>{s.strokeStyle=R.fontColor,s.fillStyle=R.fontColor;const D=s.measureText(R.text).width,W=l.textAlign(R.textAlign||(R.textAlign=o.textAlign)),x=g+d+D;let w=f.x,B=f.y;l.setWidth(this.width),v?S>0&&w+x+h>this.right&&(B=f.y+=A,f.line++,w=f.x=Ce(r,this.left+h,this.right-n[f.line])):S>0&&B+A>this.bottom&&(w=f.x=w+e[f.line].width+h,f.line++,B=f.y=Ce(r,this.top+y+h,this.bottom-e[f.line].height));const q=l.x(w);if(m(q,B,R),w=Hf(W,w+g+d,v?w+x:this.right,t.rtl),b(l.x(w),B,R),v)f.x+=x+h;else if(typeof R.text!="string"){const L=c.lineHeight;f.y+=dd(R,L)+h}else f.y+=A}),Vu(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=ge(e.font),s=De(e.padding);if(!e.display)return;const r=es(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=n.size/2,c=s.top+l;let h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=Ce(t.align,u,this.right-d);else{const g=this.columnSizes.reduce((_,p)=>Math.max(_,p.height),0);h=c+Ce(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=Ce(a,u,u+d);o.textAlign=r.textAlign(Za(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,wi(o,e.text,f,h,n)}_computeTitleHeight(){const t=this.options.title,e=ge(t.font),n=De(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,s,r;if(Pn(t,this.left,this.right)&&Pn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],Pn(t,s.left,s.left+s.width)&&Pn(e,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(t){const e=this.options;if(!S_(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=v_(s,n);s&&!r&&ee(e.onLeave,[t,s,this],this),this._hoveredItem=n,n&&!r&&ee(e.onHover,[t,n,this],this)}else n&&ee(e.onClick,[t,n,this],this)}}function b_(i,t,e,n,s){const r=M_(n,i,t,e),o=y_(s,n,t.lineHeight);return{itemWidth:r,itemHeight:o}}function M_(i,t,e,n){let s=i.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+n.measureText(s).width}function y_(i,t,e){let n=i;return typeof t.text!="string"&&(n=dd(t,e)),n}function dd(i,t){const e=i.text?i.text.length:0;return t*e}function S_(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var E_={id:"legend",_element:wc,start(i,t,e){const n=i.legend=new wc({ctx:i.ctx,options:e,chart:i});Le.configure(i,n,e),Le.addBox(i,n)},stop(i){Le.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const n=i.legend;Le.configure(i,n,e),n.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const n=t.datasetIndex,s=e.chart;s.isDatasetVisible(n)?(s.hide(n),t.hidden=!0):(s.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:n,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=De(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class ol extends an{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=se(n.text)?n.text.length:1;this._padding=De(n.padding);const r=s*ge(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:n,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,h,u;return this.isHorizontal()?(h=Ce(a,n,r),u=e+t,c=r-n):(o.position==="left"?(h=n+t,u=Ce(a,s,e),l=oe*-.5):(h=r-t,u=Ce(a,e,s),l=oe*.5),c=s-e),{titleX:h,titleY:u,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const n=ge(e.font),r=n.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);wi(t,e.text,0,0,n,{color:e.color,maxWidth:l,rotation:c,textAlign:Za(e.align),textBaseline:"middle",translation:[o,a]})}}function T_(i,t){const e=new ol({ctx:i.ctx,options:t,chart:i});Le.configure(i,e,t),Le.addBox(i,e),i.titleBlock=e}var A_={id:"title",_element:ol,start(i,t,e){T_(i,e)},stop(i){const t=i.titleBlock;Le.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){const n=i.titleBlock;Le.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const xr=new WeakMap;var w_={id:"subtitle",start(i,t,e){const n=new ol({ctx:i.ctx,options:e,chart:i});Le.configure(i,n,e),Le.addBox(i,n),xr.set(i,n)},stop(i){Le.removeBox(i,xr.get(i)),xr.delete(i)},beforeUpdate(i,t,e){const n=xr.get(i);Le.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ps={average(i){if(!i.length)return!1;let t,e,n=0,s=0,r=0;for(t=0,e=i.length;t<e;++t){const o=i[t].element;if(o&&o.hasValue()){const a=o.tooltipPosition();n+=a.x,s+=a.y,++r}}return{x:n/r,y:s/r}},nearest(i,t){if(!i.length)return!1;let e=t.x,n=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=i.length;r<o;++r){const l=i[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=Ma(t,c);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,n=l.y}return{x:e,y:n}}};function ln(i,t){return t&&(se(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function Tn(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function R_(i,t){const{element:e,datasetIndex:n,index:s}=t,r=i.getDatasetMeta(n).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:i,label:o,parsed:r.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:n,element:e}}function Rc(i,t){const e=i.chart.ctx,{body:n,footer:s,title:r}=i,{boxWidth:o,boxHeight:a}=t,l=ge(t.bodyFont),c=ge(t.titleFont),h=ge(t.footerFont),u=r.length,d=s.length,f=n.length,g=De(t.padding);let _=g.height,p=0,m=n.reduce((y,A)=>y+A.before.length+A.lines.length+A.after.length,0);if(m+=i.beforeBody.length+i.afterBody.length,u&&(_+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),m){const y=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;_+=f*y+(m-f)*l.lineHeight+(m-1)*t.bodySpacing}d&&(_+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let b=0;const v=function(y){p=Math.max(p,e.measureText(y).width+b)};return e.save(),e.font=c.string,Zt(i.title,v),e.font=l.string,Zt(i.beforeBody.concat(i.afterBody),v),b=t.displayColors?o+2+t.boxPadding:0,Zt(n,y=>{Zt(y.before,v),Zt(y.lines,v),Zt(y.after,v)}),b=0,e.font=h.string,Zt(i.footer,v),e.restore(),p+=g.width,{width:p,height:_}}function C_(i,t){const{y:e,height:n}=t;return e<n/2?"top":e>i.height-n/2?"bottom":"center"}function P_(i,t,e,n){const{x:s,width:r}=n,o=e.caretSize+e.caretPadding;if(i==="left"&&s+r+o>t.width||i==="right"&&s-r-o<0)return!0}function L_(i,t,e,n){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=i;let c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),P_(c,i,t,e)&&(c="center"),c}function Cc(i,t,e){const n=e.yAlign||t.yAlign||C_(i,e);return{xAlign:e.xAlign||t.xAlign||L_(i,t,e,n),yAlign:n}}function D_(i,t){let{x:e,width:n}=i;return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function I_(i,t,e){let{y:n,height:s}=i;return t==="top"?n+=e:t==="bottom"?n-=s+e:n-=s/2,n}function Pc(i,t,e,n){const{caretSize:s,caretPadding:r,cornerRadius:o}=i,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=bi(o);let g=D_(t,a);const _=I_(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,d)+s:a==="right"&&(g+=Math.max(u,f)+s),{x:Me(g,0,n.width-t.width),y:Me(_,0,n.height-t.height)}}function vr(i,t,e){const n=De(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-n.right:i.x+n.left}function Lc(i){return ln([],Tn(i))}function O_(i,t,e){return ni(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Dc(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const fd={beforeTitle:xn,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,n=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return e[t.dataIndex]}return""},afterTitle:xn,beforeBody:xn,beforeLabel:xn,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return jt(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:xn,afterBody:xn,beforeFooter:xn,footer:xn,afterFooter:xn};function Fe(i,t,e,n){const s=i[t].call(e,n);return typeof s>"u"?fd[t].call(e,n):s}class Pa extends an{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),s=n.enabled&&e.options.animation&&n.animations,r=new Yu(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=O_(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:n}=e,s=Fe(n,"beforeTitle",this,t),r=Fe(n,"title",this,t),o=Fe(n,"afterTitle",this,t);let a=[];return a=ln(a,Tn(s)),a=ln(a,Tn(r)),a=ln(a,Tn(o)),a}getBeforeBody(t,e){return Lc(Fe(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:n}=e,s=[];return Zt(t,r=>{const o={before:[],lines:[],after:[]},a=Dc(n,r);ln(o.before,Tn(Fe(a,"beforeLabel",this,r))),ln(o.lines,Fe(a,"label",this,r)),ln(o.after,Tn(Fe(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Lc(Fe(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:n}=e,s=Fe(n,"beforeFooter",this,t),r=Fe(n,"footer",this,t),o=Fe(n,"afterFooter",this,t);let a=[];return a=ln(a,Tn(s)),a=ln(a,Tn(r)),a=ln(a,Tn(o)),a}_createItems(t){const e=this._active,n=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(R_(this.chart,e[l]));return t.filter&&(a=a.filter((h,u,d)=>t.filter(h,u,d,n))),t.itemSort&&(a=a.sort((h,u)=>t.itemSort(h,u,n))),Zt(a,h=>{const u=Dc(t.callbacks,h);s.push(Fe(u,"labelColor",this,h)),r.push(Fe(u,"labelPointStyle",this,h)),o.push(Fe(u,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const n=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Ps[n.position].call(this,s,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const l=this._size=Rc(this,n),c=Object.assign({},a,l),h=Cc(this.chart,n,c),u=Pc(n,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,s){const r=this.getCaretPosition(t,n,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,n){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:u}=bi(a),{x:d,y:f}=t,{width:g,height:_}=e;let p,m,b,v,y,A;return r==="center"?(y=f+_/2,s==="left"?(p=d,m=p-o,v=y+o,A=y-o):(p=d+g,m=p+o,v=y-o,A=y+o),b=p):(s==="left"?m=d+Math.max(l,h)+o:s==="right"?m=d+g-Math.max(c,u)-o:m=this.caretX,r==="top"?(v=f,y=v-o,p=m-o,b=m+o):(v=f+_,y=v+o,p=m+o,b=m-o),A=v),{x1:p,x2:m,x3:b,y1:v,y2:y,y3:A}}drawTitle(t,e,n){const s=this.title,r=s.length;let o,a,l;if(r){const c=es(n.rtl,this.x,this.width);for(t.x=vr(this,n.titleAlign,n),e.textAlign=c.textAlign(n.titleAlign),e.textBaseline="middle",o=ge(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,s,r){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=r,h=ge(r.bodyFont),u=vr(this,"left",r),d=s.x(u),f=l<h.lineHeight?(h.lineHeight-l)/2:0,g=e.y+f;if(r.usePointStyle){const _={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},p=s.leftForLtr(d,c)+c/2,m=g+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Sa(t,_,p,m),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Sa(t,_,p,m)}else{t.lineWidth=Xt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(d,c),p=s.leftForLtr(s.xPlus(d,1),c-2),m=bi(o.borderRadius);Object.values(m).some(b=>b!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Xs(t,{x:_,y:g,w:c,h:l,radius:m}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Xs(t,{x:p,y:g+1,w:c-2,h:l-2,radius:m}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,g,c,l),t.strokeRect(_,g,c,l),t.fillStyle=o.backgroundColor,t.fillRect(p,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=n,u=ge(n.bodyFont);let d=u.lineHeight,f=0;const g=es(n.rtl,this.x,this.width),_=function(D){e.fillText(D,g.x(t.x+f),t.y+d/2),t.y+=d+r},p=g.textAlign(o);let m,b,v,y,A,R,S;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=vr(this,p,n),e.fillStyle=n.bodyColor,Zt(this.beforeBody,_),f=a&&p!=="right"?o==="center"?c/2+h:c+2+h:0,y=0,R=s.length;y<R;++y){for(m=s[y],b=this.labelTextColors[y],e.fillStyle=b,Zt(m.before,_),v=m.lines,a&&v.length&&(this._drawColorBox(e,t,y,g,n),d=Math.max(u.lineHeight,l)),A=0,S=v.length;A<S;++A)_(v[A]),d=u.lineHeight;Zt(m.after,_)}f=0,d=u.lineHeight,Zt(this.afterBody,_),t.y-=r}drawFooter(t,e,n){const s=this.footer,r=s.length;let o,a;if(r){const l=es(n.rtl,this.x,this.width);for(t.x=vr(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=l.textAlign(n.footerAlign),e.textBaseline="middle",o=ge(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:h}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:g}=bi(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,l),o==="top"&&this.drawCaret(t,e,n,s),e.lineTo(a+c-d,l),e.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(t,e,n,s),e.lineTo(a+c,l+h-g),e.quadraticCurveTo(a+c,l+h,a+c-g,l+h),o==="bottom"&&this.drawCaret(t,e,n,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),o==="center"&&r==="left"&&this.drawCaret(t,e,n,s),e.lineTo(a,l+u),e.quadraticCurveTo(a,l,a+u,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,s=n&&n.x,r=n&&n.y;if(s||r){const o=Ps[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Rc(this,t),l=Object.assign({},o,this._size),c=Cc(e,t,l),h=Pc(t,l,c,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=De(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=n,this.drawBackground(r,t,s,e),Hu(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),Vu(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Qr(n,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,n),a=this._positionChanged(o,t),l=e||!Qr(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,n,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e;const o=this.chart.getElementsAtEventForMode(t,r.mode,r,n);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:n,caretY:s,options:r}=this,o=Ps[r.position].call(this,t,e);return o!==!1&&(n!==o.x||s!==o.y)}}rt(Pa,"positioners",Ps);var U_={id:"tooltip",_element:Pa,positioners:Ps,afterInit(i,t,e){e&&(i.tooltip=new Pa({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:fd},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},N_=Object.freeze({__proto__:null,Colors:qg,Decimation:Jg,Filler:x_,Legend:E_,SubTitle:w_,Title:A_,Tooltip:U_});const F_=(i,t,e,n)=>(typeof t=="string"?(e=i.push(t)-1,n.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function k_(i,t,e,n){const s=i.indexOf(t);if(s===-1)return F_(i,t,e,n);const r=i.lastIndexOf(t);return s!==r?e:s}const B_=(i,t)=>i===null?null:Me(Math.round(i),0,t);function Ic(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class La extends Ci{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const n=this.getLabels();for(const{index:s,label:r}of e)n[s]===r&&n.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(jt(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:k_(n,t,Ut(e,t),this._addedLabels),B_(e,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),e||(s=this.getLabels().length-1)),this.min=n,this.max=s}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Ic.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}rt(La,"id","category"),rt(La,"defaults",{ticks:{callback:Ic}});function z_(i,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=i,f=r||1,g=h-1,{min:_,max:p}=t,m=!jt(o),b=!jt(a),v=!jt(c),y=(p-_)/(u+1);let A=wl((p-_)/g/f)*f,R,S,D,W;if(A<1e-14&&!m&&!b)return[{value:_},{value:p}];W=Math.ceil(p/A)-Math.floor(_/A),W>g&&(A=wl(W*A/g/f)*f),jt(l)||(R=Math.pow(10,l),A=Math.ceil(A*R)/R),s==="ticks"?(S=Math.floor(_/A)*A,D=Math.ceil(p/A)*A):(S=_,D=p),m&&b&&r&&Of((a-o)/r,A/1e3)?(W=Math.round(Math.min((a-o)/A,h)),A=(a-o)/W,S=o,D=a):v?(S=m?o:S,D=b?a:D,W=c-1,A=(D-S)/W):(W=(D-S)/A,Os(W,Math.round(W),A/1e3)?W=Math.round(W):W=Math.ceil(W));const x=Math.max(Rl(A),Rl(S));R=Math.pow(10,jt(l)?x:l),S=Math.round(S*R)/R,D=Math.round(D*R)/R;let w=0;for(m&&(d&&S!==o?(e.push({value:o}),S<o&&w++,Os(Math.round((S+w*A)*R)/R,o,Oc(o,y,i))&&w++):S<o&&w++);w<W;++w){const B=Math.round((S+w*A)*R)/R;if(b&&B>a)break;e.push({value:B})}return b&&d&&D!==a?e.length&&Os(e[e.length-1].value,a,Oc(a,y,i))?e[e.length-1].value=a:e.push({value:a}):(!b||D===a)&&e.push({value:D}),e}function Oc(i,t,{horizontal:e,minRotation:n}){const s=rn(n),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+i).length;return Math.min(t/r,o)}class oo extends Ci{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return jt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=e?s:l,a=l=>r=n?r:l;if(t){const l=mn(s),c=mn(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:n}=t,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const s={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=z_(s,r);return t.bounds==="ticks"&&Su(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const s=(n-e)/Math.max(t.length-1,1)/2;e-=s,n+=s}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return Js(t,this.chart.options.locale,this.options.ticks.format)}}class Da extends oo{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=ce(t)?t:0,this.max=ce(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=rn(this.options.ticks.minRotation),s=(t?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}rt(Da,"id","linear"),rt(Da,"defaults",{ticks:{callback:xo.formatters.numeric}});const js=i=>Math.floor(Gn(i)),li=(i,t)=>Math.pow(10,js(i)+t);function Uc(i){return i/Math.pow(10,js(i))===1}function Nc(i,t,e){const n=Math.pow(10,e),s=Math.floor(i/n);return Math.ceil(t/n)-s}function H_(i,t){const e=t-i;let n=js(e);for(;Nc(i,t,n)>10;)n++;for(;Nc(i,t,n)<10;)n--;return Math.min(n,js(i))}function V_(i,{min:t,max:e}){t=Ye(i.min,t);const n=[],s=js(t);let r=H_(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10;let u=Math.floor((c-h)/Math.pow(10,r)),d=Ye(i.min,Math.round((l+h+u*Math.pow(10,r))*o)/o);for(;d<e;)n.push({value:d,major:Uc(d),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(r++,u=2,o=r>=0?1:o),d=Math.round((l+h+u*Math.pow(10,r))*o)/o;const f=Ye(i.max,d);return n.push({value:f,major:Uc(f),significand:u}),n}class Ia extends Ci{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const n=oo.prototype.parse.apply(this,[t,e]);if(n===0){this._zero=!0;return}return ce(n)&&n>0?n:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=ce(t)?Math.max(0,t):null,this.max=ce(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!ce(this._userMin)&&(this.min=t===li(this.min,0)?li(this.min,-1):li(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let n=this.min,s=this.max;const r=a=>n=t?n:a,o=a=>s=e?s:a;n===s&&(n<=0?(r(1),o(10)):(r(li(n,-1)),o(li(s,1)))),n<=0&&r(li(s,-1)),s<=0&&o(li(n,1)),this.min=n,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},n=V_(e,this);return t.bounds==="ticks"&&Su(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":Js(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Gn(t),this._valueRange=Gn(this.max)-Gn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Gn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}rt(Ia,"id","logarithmic"),rt(Ia,"defaults",{ticks:{callback:xo.formatters.logarithmic,major:{enabled:!0}}});function Oa(i){const t=i.ticks;if(t.display&&i.display){const e=De(t.backdropPadding);return Ut(t.font&&t.font.size,he.font.size)+e.height}return 0}function G_(i,t,e){return e=se(e)?e:[e],{w:Zf(i,t.string,e),h:e.length*t.lineHeight}}function Fc(i,t,e,n,s){return i===n||i===s?{start:t-e/2,end:t+e/2}:i<n||i>s?{start:t-e,end:t}:{start:t,end:t+e}}function W_(i){const t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),n=[],s=[],r=i._pointLabels.length,o=i.options.pointLabels,a=o.centerPointLabels?oe/r:0;for(let l=0;l<r;l++){const c=o.setContext(i.getPointLabelContext(l));s[l]=c.padding;const h=i.getPointPosition(l,i.drawingArea+s[l],a),u=ge(c.font),d=G_(i.ctx,u,i._pointLabels[l]);n[l]=d;const f=je(i.getIndexAngle(l)+a),g=Math.round($a(f)),_=Fc(g,h.x,d.w,0,180),p=Fc(g,h.y,d.h,90,270);X_(e,t,f,_,p)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=q_(i,n,s)}function X_(i,t,e,n,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,l=0;n.start<t.l?(a=(t.l-n.start)/r,i.l=Math.min(i.l,t.l-a)):n.end>t.r&&(a=(n.end-t.r)/r,i.r=Math.max(i.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/o,i.t=Math.min(i.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/o,i.b=Math.max(i.b,t.b+l))}function Y_(i,t,e){const n=i.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,l=i.getPointPosition(t,n+s+o,r),c=Math.round($a(je(l.angle+fe))),h=Z_(l.y,a.h,c),u=$_(c),d=K_(l.x,a.w,u);return{visible:!0,x:l.x,y:h,textAlign:u,left:d,top:h,right:d+a.w,bottom:h+a.h}}function j_(i,t){if(!t)return!0;const{left:e,top:n,right:s,bottom:r}=i;return!(Dn({x:e,y:n},t)||Dn({x:e,y:r},t)||Dn({x:s,y:n},t)||Dn({x:s,y:r},t))}function q_(i,t,e){const n=[],s=i._pointLabels.length,r=i.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Oa(r)/2,additionalAngle:o?oe/s:0};let c;for(let h=0;h<s;h++){l.padding=e[h],l.size=t[h];const u=Y_(i,h,l);n.push(u),a==="auto"&&(u.visible=j_(u,c),u.visible&&(c=u))}return n}function $_(i){return i===0||i===180?"center":i<180?"left":"right"}function K_(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function Z_(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function J_(i,t,e){const{left:n,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!jt(a)){const l=bi(t.borderRadius),c=De(t.backdropPadding);i.fillStyle=a;const h=n-c.left,u=s-c.top,d=r-n+c.width,f=o-s+c.height;Object.values(l).some(g=>g!==0)?(i.beginPath(),Xs(i,{x:h,y:u,w:d,h:f,radius:l}),i.fill()):i.fillRect(h,u,d,f)}}function Q_(i,t){const{ctx:e,options:{pointLabels:n}}=i;for(let s=t-1;s>=0;s--){const r=i._pointLabelItems[s];if(!r.visible)continue;const o=n.setContext(i.getPointLabelContext(s));J_(e,o,r);const a=ge(o.font),{x:l,y:c,textAlign:h}=r;wi(e,i._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function pd(i,t,e,n){const{ctx:s}=i;if(e)s.arc(i.xCenter,i.yCenter,t,0,re);else{let r=i.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<n;o++)r=i.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function tx(i,t,e,n,s){const r=i.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!n||!a||!l||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),pd(i,e,o,n),r.closePath(),r.stroke(),r.restore())}function ex(i,t,e){return ni(i,{label:e,index:t,type:"pointLabel"})}class Ls extends oo{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=De(Oa(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=ce(t)&&!isNaN(t)?t:0,this.max=ce(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Oa(this.options))}generateTickLabels(t){oo.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,n)=>{const s=ee(this.options.pointLabels.callback,[e,n],this);return s||s===0?s:""}).filter((e,n)=>this.chart.getDataVisibility(n))}fit(){const t=this.options;t.display&&t.pointLabels.display?W_(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,s))}getIndexAngle(t){const e=re/(this._pointLabels.length||1),n=this.options.startAngle||0;return je(t*e+rn(n))}getDistanceFromCenterForValue(t){if(jt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(jt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const n=e[t];return ex(this.getContext(),t,n)}}getPointPosition(t,e,n=0){const s=this.getIndexAngle(t)-fe+n;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:n,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),pd(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:n,grid:s,border:r}=e,o=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&Q_(this,o),s.display&&this.ticks.forEach((h,u)=>{if(u!==0){l=this.getDistanceFromCenterForValue(h.value);const d=this.getContext(u),f=s.setContext(d),g=r.setContext(d);tx(this,f,l,o,g)}}),n.display){for(t.save(),a=o-1;a>=0;a--){const h=n.setContext(this.getPointLabelContext(a)),{color:u,lineWidth:d}=h;!d||!u||(t.lineWidth=d,t.strokeStyle=u,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!e.reverse)return;const c=n.setContext(this.getContext(l)),h=ge(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const u=De(c.backdropPadding);t.fillRect(-o/2-u.left,-r-h.size/2-u.top,o+u.width,h.size+u.height)}wi(t,a.label,0,-r,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}rt(Ls,"id","radialLinear"),rt(Ls,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:xo.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),rt(Ls,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),rt(Ls,"descriptors",{angleLines:{_fallback:"grid"}});const yo={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Be=Object.keys(yo);function kc(i,t){return i-t}function Bc(i,t){if(jt(t))return null;const e=i._adapter,{parser:n,round:s,isoWeekday:r}=i._parseOpts;let o=t;return typeof n=="function"&&(o=n(o)),ce(o)||(o=typeof n=="string"?e.parse(o,n):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(os(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function zc(i,t,e,n){const s=Be.length;for(let r=Be.indexOf(i);r<s-1;++r){const o=yo[Be[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=n)return Be[r]}return Be[s-1]}function nx(i,t,e,n,s){for(let r=Be.length-1;r>=Be.indexOf(e);r--){const o=Be[r];if(yo[o].common&&i._adapter.diff(s,n,o)>=t-1)return o}return Be[e?Be.indexOf(e):0]}function ix(i){for(let t=Be.indexOf(i)+1,e=Be.length;t<e;++t)if(yo[Be[t]].common)return Be[t]}function Hc(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:n,hi:s}=Ka(e,t),r=e[n]>=t?e[n]:e[s];i[r]=!0}}function sx(i,t,e,n){const s=i._adapter,r=+s.startOf(t[0].value,n),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,n))l=e[a],l>=0&&(t[l].major=!0);return t}function Vc(i,t,e){const n=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,n.push({value:a,major:!1});return r===0||!e?n:sx(i,n,s,e)}class qs extends Ci{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const n=t.time||(t.time={}),s=this._adapter=new fm._date(t.adapters.date);s.init(e),Is(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Bc(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=ce(s)&&!isNaN(s)?s:+e.startOf(Date.now(),n),r=ce(r)&&!isNaN(r)?r:+e.endOf(Date.now(),n)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,s=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=kf(s,r,o);return this._unit=e.unit||(n.autoSkip?zc(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):nx(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:ix(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Vc(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,n=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?n=r:n=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Me(e,0,o),n=Me(n,0,o),this._offsets={start:e,end:n,factor:1/(e+1+n)}}_generate(){const t=this._adapter,e=this.min,n=this.max,s=this.options,r=s.time,o=r.unit||zc(r.minUnit,e,n,this._getLabelCapacity(e)),a=Ut(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=os(l)||l===!0,h={};let u=e,d,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":o),t.diff(n,e,o)>1e5*a)throw new Error(e+" and "+n+" are too far apart with stepSize of "+a+" "+o);const g=s.ticks.source==="data"&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+t.add(d,a,o),f++)Hc(h,d,g);return(d===n||s.bounds==="ticks"||f===1)&&Hc(h,d,g),Object.keys(h).sort(kc).map(_=>+_)}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,n,s){const r=this.options,o=r.ticks.callback;if(o)return ee(o,[t,e,n],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],u=c&&a[c],d=n[e],f=c&&u&&d&&d.major;return this._adapter.format(t,s||(f?u:h))}generateTickLabels(t){let e,n,s;for(e=0,n=t.length;e<n;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,s=rn(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*r+a*o,h:n*o+a*r}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,s=n[e.unit]||n.millisecond,r=this._tickFormatFunction(t,0,Vc(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,n;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,n=s.length;e<n;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const s=this.getLabels();for(e=0,n=s.length;e<n;++e)t.push(Bc(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Au(t.sort(kc))}}rt(qs,"id","time"),rt(qs,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function br(i,t,e){let n=0,s=i.length-1,r,o,a,l;e?(t>=i[n].pos&&t<=i[s].pos&&({lo:n,hi:s}=Ln(i,"pos",t)),{pos:r,time:a}=i[n],{pos:o,time:l}=i[s]):(t>=i[n].time&&t<=i[s].time&&({lo:n,hi:s}=Ln(i,"time",t)),{time:r,pos:a}=i[n],{time:o,pos:l}=i[s]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class Ua extends qs{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=br(e,this.min),this._tableRange=br(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,s=[],r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=n&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(e)||n.length===1)&&n.push(e),n.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return e.length&&n.length?t=this.normalize(e.concat(n)):t=e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(br(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return br(this._table,n*this._tableRange+this._minPos,!0)}}rt(Ua,"id","timeseries"),rt(Ua,"defaults",qs.defaults);var rx=Object.freeze({__proto__:null,CategoryScale:La,LinearScale:Da,LogarithmicScale:Ia,RadialLinearScale:Ls,TimeScale:qs,TimeSeriesScale:Ua});const ox=[dm,Vg,N_,rx];Rn.register(...ox);const _o=class _o{constructor(t){_o.charts.push(this);let e=document.getElementById("myChart");this.chart=new Rn(e,{type:"line",data:{labels:[],size:0,datasets:[{label:"Solves",data:[],tension:.1},{label:"Ao5",data:[],tension:.1},{label:"Ao12",data:[],tension:.1},{label:"Ao50",data:[],tension:.1}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"black"}}},scales:{x:{clip:!0,ticks:{color:"black"}},y:{ticks:{color:"black"}}}}})}addTime(t,e=!0){this.chart.data.size+=1,this.chart.data.labels.push(this.chart.data.size),this.chart.data.datasets[0].data.push({y:t.seconds,x:this.chart.data.size}),this.chart.data.size>4&&this.addAverage(this.chart.data.datasets[0].data.slice(-5)),this.chart.data.size>11&&this.addAverage(this.chart.data.datasets[0].data.slice(-12)),this.chart.data.size>49&&this.addAverage(this.chart.data.datasets[0].data.slice(-50)),e&&this.chart.update()}addAverage(t){let e=[];for(const s in t)e.push(t[s].y);let n=gu(e,!0);e.length==5?this.chart.data.datasets[1].data.push({y:n,x:this.chart.data.size}):e.length==12?this.chart.data.datasets[2].data.push({y:n,x:this.chart.data.size}):e.length==50&&this.chart.data.datasets[3].data.push({y:n,x:this.chart.data.size})}};rt(_o,"charts",[]);let ao=_o;class tr{constructor(){this.db}static open(){return new Promise((t,e)=>{const n=window.indexedDB.open("database",1);n.onerror=s=>{console.log(s),e()},n.onsuccess=()=>{this.db=n.result,t()},n.onupgradeneeded=()=>{this.db=n.result,this.db.createObjectStore("solves",{keyPath:"timeOfSolving"}).createIndex("time",["seconds"],{unique:!1}),t()}})}static getConnectionToStore(t){const e=this.db.transaction([t],"readwrite");return e.oncomplete=s=>{},e.onerror=s=>{console.log("--error: "+s)},e.objectStore(t)}static add(t,e){const n=this.getConnectionToStore("solves");let s={timeOfSolving:Date.now(),scramble:t,seconds:e,puzzle:"3x3",session:"main",penalty:0,dnf:!1,comments:""};const r=n.put(s);r.onsuccess=()=>{[].concat(ao.charts,Hs.tables).forEach(a=>{a.addTime(s)})},r.onerror=o=>{console.log("--error: "+o)}}static get(t="timeOfSolve",e=NaN){return new Promise((n,s)=>{const r=this.getConnectionToStore("solves");let o;t=="timeOfSolve"?o=r.getAll():console.log("wrong index!"),o.onsuccess=()=>{n(o.result)},o.onerror=a=>{console.log(a)}})}static delete(t){let n=this.getConnectionToStore("solves").delete(t);n.onsuccess=()=>{mu()},n.onerror=s=>{console.log(s)}}}rt(tr,"toUpdate",[]);class lo{constructor(){}static button(t){const e=document.createElement("c-button"),n=document.createElement("graphic"),s=document.createElement("line"),r=document.createElement("line");switch(n.appendChild(s),n.appendChild(r),t){case"expand":n.classList.add("expand-graphic"),s.classList.add("expand-graphic-line"),s.classList.add("diagonal-incline"),r.classList.add("expand-graphic-line"),r.classList.add("diagonal-decline");break;case"delete":n.classList.add("delete-graphic"),s.classList.add("delete-graphic-line"),s.classList.add("diagonal-incline"),r.classList.add("delete-graphic-line"),r.classList.add("diagonal-decline");break}return e.appendChild(n),e}static table(t,e){e.unshift("No."),e.push("");let n={};return n.rows=[],n.fields=e,n.create=function(){n.parent=document.getElementById(t),n.body=document.createElement("table-body"),n.header=document.createElement("table-row"),n.body.style.gridTemplateColumns=`50px repeat(${e.length-2}, 1fr) 50px`,n.header.id="header",n.header.cells=[],n.parent.appendChild(n.body),n.body.appendChild(n.header),n.fields.forEach(s=>{let r=parseInt(s.replace(/^\D+/g,"")),o=document.createElement("cell");o.innerHTML=s,o.sorted=!1,n.header.appendChild(o),n.header.cells.push(o),s&&(r?o.int=r:o.int=1,o.addEventListener("click",function(){o.int<=n.rows.length&&n.sort(o)}))})},n.addTime=function(s){const r=document.createElement("table-row");r.seconds=s.seconds,r.params=s,n.rows.push(r),n.body.insertBefore(r,n.body.firstChild.nextSibling),n.fields.forEach(o=>{let a=document.createElement("cell"),l=parseInt(o.replace(/^\D+/g,""));if(o=="No.")a.innerHTML=n.rows.length,r.params[o]=n.rows.length;else if(o=="Seconds")a.innerHTML=r.seconds,r.params[o]=a.innerHTML;else if(!isNaN(l))n.rows.length>=l?a.innerHTML=gu(n.rows.slice(n.rows.length-l)):a.inner="",r.params[o]=a.innerHTML;else if(o==""){let c=lo.button("delete");c.addEventListener("click",function(){tr.delete(r.params.timeOfSolving)}),a.appendChild(c)}r.appendChild(a)})},n.sort=function(s){if(s.sorted){n.rows=n.rows.reverse(),n.rows=n.rows.slice(s.int-1).concat(n.rows.slice(0,s.int-1)),n.body.replaceChildren(n.body.firstChild,...n.rows),s.sorted=!1;return}const r=s.innerHTML;let o=n.rows[n.rows.length-1];n.rows.forEach(l=>{l.params[r]>o.params[r]&&!isNaN(l.params[r])&&(o=l)});let a=[o];n.rows.forEach(l=>{const c=l.params[r];let h=0;for(;;){let u=a[h].params[r];if(o==l)break;if(!c){a.push(l);break}if(a.length==1){a.unshift(l);break}if(c<=u){a.splice(h,0,l);break}h++}}),n.header.cells.forEach(l=>{l.sorted=!1}),s.sorted=!0,n.rows=a,n.body.replaceChildren(n.body.firstChild,...a)},n.create(),n}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="161",Oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ax=0,Gc=1,lx=2,md=1,cx=2,An=3,Qn=0,ze=1,dn=2,qn=0,ns=1,Wc=2,Xc=3,Yc=4,hx=5,gi=100,ux=101,dx=102,jc=103,qc=104,fx=200,px=201,mx=202,gx=203,Na=204,Fa=205,_x=206,xx=207,vx=208,bx=209,Mx=210,yx=211,Sx=212,Ex=213,Tx=214,Ax=0,wx=1,Rx=2,co=3,Cx=4,Px=5,Lx=6,Dx=7,gd=0,Ix=1,Ox=2,$n=0,Ux=1,Nx=2,Fx=3,kx=4,Bx=5,zx=6,_d=300,cs=301,hs=302,ka=303,Ba=304,So=306,za=1e3,nn=1001,Ha=1002,Ne=1003,$c=1004,Ms=1005,ke=1006,Go=1007,vi=1008,Kn=1009,Hx=1010,Vx=1011,ll=1012,xd=1013,Yn=1014,Cn=1015,$s=1016,vd=1017,bd=1018,yi=1020,Gx=1021,sn=1023,Wx=1024,Xx=1025,Si=1026,us=1027,Yx=1028,Md=1029,jx=1030,yd=1031,Sd=1033,Wo=33776,Xo=33777,Yo=33778,jo=33779,Kc=35840,Zc=35841,Jc=35842,Qc=35843,Ed=36196,th=37492,eh=37496,nh=37808,ih=37809,sh=37810,rh=37811,oh=37812,ah=37813,lh=37814,ch=37815,hh=37816,uh=37817,dh=37818,fh=37819,ph=37820,mh=37821,qo=36492,gh=36494,_h=36495,qx=36283,xh=36284,vh=36285,bh=36286,Td=3e3,Ei=3001,$x=3200,Kx=3201,Zx=0,Jx=1,Je="",Se="srgb",On="srgb-linear",cl="display-p3",Eo="display-p3-linear",ho="linear",ie="srgb",uo="rec709",fo="p3",Ni=7680,Mh=519,Qx=512,t0=513,e0=514,Ad=515,n0=516,i0=517,s0=518,r0=519,yh=35044,Sh="300 es",Va=1035,In=2e3,po=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const ks=Math.PI/180,Ks=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function hl(i,t){return(i%t+t)%t}function o0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function a0(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function l0(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function c0(i,t=1){return t-Math.abs(hl(i,t*2)-t)}function h0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function u0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function d0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function f0(i,t){return i+Math.random()*(t-i)}function p0(i){return i*(.5-Math.random())}function m0(i){i!==void 0&&(Eh=i);let t=Eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g0(i){return i*ks}function _0(i){return i*Ks}function Ga(i){return(i&i-1)===0&&i!==0}function x0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function v0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const b0={DEG2RAD:ks,RAD2DEG:Ks,generateUUID:fs,clamp:Pe,euclideanModulo:hl,mapLinear:o0,inverseLerp:a0,lerp:Bs,damp:l0,pingpong:c0,smoothstep:h0,smootherstep:u0,randInt:d0,randFloat:f0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:Ga,ceilPowerOfTwo:x0,floorPowerOfTwo:mo,setQuaternionFromProperEuler:v0,normalize:Oe,denormalize:Ji};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],b=s[1],v=s[4],y=s[7],A=s[2],R=s[5],S=s[8];return r[0]=o*_+a*b+l*A,r[3]=o*p+a*v+l*R,r[6]=o*m+a*y+l*S,r[1]=c*_+h*b+u*A,r[4]=c*p+h*v+u*R,r[7]=c*m+h*y+u*S,r[2]=d*_+f*b+g*A,r[5]=d*p+f*v+g*R,r[8]=d*m+f*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Gt;function wd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function M0(){const i=go("canvas");return i.style.display="block",i}const Th={};function is(i){i in Th||(Th[i]=!0,console.warn(i))}const Ah=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[On]:{transfer:ho,primaries:uo,toReference:i=>i,fromReference:i=>i},[Se]:{transfer:ie,primaries:uo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Eo]:{transfer:ho,primaries:fo,toReference:i=>i.applyMatrix3(wh),fromReference:i=>i.applyMatrix3(Ah)},[cl]:{transfer:ie,primaries:fo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wh),fromReference:i=>i.applyMatrix3(Ah).convertLinearToSRGB()}},y0=new Set([On,Eo]),Qt={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!y0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Mr[t].toReference,s=Mr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Mr[i].primaries},getTransfer:function(i){return i===Je?ho:Mr[i].transfer}};function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=go("canvas")),Fi.width=t.width,Fi.height=t.height;const n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=go("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let S0=0;class Cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;class He extends Pi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=nn,s=nn,r=ke,o=vi,a=sn,l=Kn,c=He.DEFAULT_ANISOTROPY,h=Je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=fs(),this.name="",this.source=new Cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ei?Se:Je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case za:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case za:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?Ei:Td}set encoding(t){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ei?Se:Je}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=_d;He.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(f+1)/2,A=(m+1)/2,R=(h+d)/4,S=(u+_)/4,D=(g+p)/4;return v>y&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=S/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=S/r,s=D/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T0 extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ei?Se:Je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends T0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pd extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A0 extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),R=Math.atan2(A,m*b);p=Math.sin(p*R)/A,a=Math.sin(a*R)/A}const y=a*b;if(l=l*p+d*y,c=c*p+f*y,h=h*p+g*y,u=u*p+_*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new F,Rh=new ti;class er{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Sr.subVectors(this.max,ys),ki.subVectors(t.a,ys),Bi.subVectors(t.b,ys),zi.subVectors(t.c,ys),Un.subVectors(Bi,ki),Nn.subVectors(zi,Bi),ci.subVectors(ki,zi);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-ci.z,ci.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,ci.z,0,-ci.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-ci.y,ci.x,0];return!Qo(e,ki,Bi,zi,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,ki,Bi,zi,Sr))?!1:(Er.crossVectors(Un,Nn),e=[Er.x,Er.y,Er.z],Qo(e,ki,Bi,zi,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new F,new F,new F,new F,new F,new F,new F,new F],Qe=new F,yr=new er,ki=new F,Bi=new F,zi=new F,Un=new F,Nn=new F,ci=new F,ys=new F,Sr=new F,Er=new F,hi=new F;function Qo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hi.fromArray(i,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const w0=new er,Ss=new F,ta=new F;class ul{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):w0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(ta)),this.expandByPoint(Ss.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new F,ea=new F,Tr=new F,Fn=new F,na=new F,Ar=new F,ia=new F;class Ld{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=Fn.dot(this.direction),l=-Fn.dot(Tr),c=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ea).addScaledVector(Tr,d),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),Ar.subVectors(n,t),ia.crossVectors(na,Ar);let o=this.direction.dot(ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);const l=a*this.direction.dot(Ar.crossVectors(Fn,Ar));if(l<0)return null;const c=a*this.direction.dot(na.cross(Fn));if(c<0||l+c>o)return null;const h=-a*Fn.dot(ia);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,C0)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),kn.crossVectors(n,We),kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),kn.crossVectors(n,We)),kn.normalize(),wr.crossVectors(We,kn),s[0]=kn.x,s[4]=wr.x,s[8]=We.x,s[1]=kn.y,s[5]=wr.y,s[9]=We.y,s[2]=kn.z,s[6]=wr.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],v=n[7],y=n[11],A=n[15],R=s[0],S=s[4],D=s[8],W=s[12],x=s[1],w=s[5],B=s[9],q=s[13],L=s[2],N=s[6],O=s[10],X=s[14],Y=s[3],j=s[7],$=s[11],et=s[15];return r[0]=o*R+a*x+l*L+c*Y,r[4]=o*S+a*w+l*N+c*j,r[8]=o*D+a*B+l*O+c*$,r[12]=o*W+a*q+l*X+c*et,r[1]=h*R+u*x+d*L+f*Y,r[5]=h*S+u*w+d*N+f*j,r[9]=h*D+u*B+d*O+f*$,r[13]=h*W+u*q+d*X+f*et,r[2]=g*R+_*x+p*L+m*Y,r[6]=g*S+_*w+p*N+m*j,r[10]=g*D+_*B+p*O+m*$,r[14]=g*W+_*q+p*X+m*et,r[3]=b*R+v*x+y*L+A*Y,r[7]=b*S+v*w+y*N+A*j,r[11]=b*D+v*B+y*O+A*$,r[15]=b*W+v*q+y*X+A*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],b=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,v=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,y=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,A=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,R=e*b+n*v+s*y+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/R;return t[0]=b*S,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*S,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*S,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*S,t[4]=v*S,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*S,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*S,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*S,t[8]=y*S,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*m-e*u*m)*S,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*S,t[12]=A*S,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*S,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*S,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,b=l*c,v=l*h,y=l*u,A=n.x,R=n.y,S=n.z;return s[0]=(1-(_+m))*A,s[1]=(f+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+m))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+v)*S,s[9]=(p-b)*S,s[10]=(1-(d+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const o=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const c=1/r,h=1/o,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=In){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===In)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===po)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=In){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===In)g=(o+r)*u,_=-2*u;else if(a===po)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new F,tn=new Te,R0=new F(0,0,0),C0=new F(1,1,1),kn=new F,wr=new F,We=new F,Ch=new Te,Ph=new ti;class nr{constructor(t=0,e=0,n=0,s=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P0=0;const Lh=new F,Vi=new ti,Mn=new Te,Rr=new F,Es=new F,L0=new F,D0=new ti,Dh=new F(1,0,0),Ih=new F(0,1,0),Oh=new F(0,0,1),I0={type:"added"},O0={type:"removed"};class Ve extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new F,e=new nr,n=new ti,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Gt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Es,Rr,this.up):Mn.lookAt(Rr,Es,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(I0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O0)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,L0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,D0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new F(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new F,yn=new F,sa=new F,Sn=new F,Gi=new F,Wi=new F,Uh=new F,ra=new F,oa=new F,aa=new F;class fn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),yn.subVectors(n,e),sa.subVectors(t,e);const o=en.dot(en),a=en.dot(yn),l=en.dot(sa),c=yn.dot(yn),h=yn.dot(sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),yn.subVectors(t,e),en.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),en.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,n),Wi.subVectors(r,n),ra.subVectors(t,n);const l=Gi.dot(ra),c=Wi.dot(ra);if(l<=0&&c<=0)return e.copy(n);oa.subVectors(t,s);const h=Gi.dot(oa),u=Wi.dot(oa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gi,o);aa.subVectors(t,r);const f=Gi.dot(aa),g=Wi.dot(aa);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Wi,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Uh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Uh,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function la(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=hl(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=la(o,r,t+1/3),this.g=la(o,r,t),this.b=la(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=Ko(t.r),this.g=Ko(t.g),this.b=Ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Qt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Pe(Re.r*255,0,255))*65536+Math.round(Pe(Re.g*255,0,255))*256+Math.round(Pe(Re.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Se){Qt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Cr);const n=Bs(Bn.h,Cr.h,e),s=Bs(Bn.s,Cr.s,e),r=Bs(Bn.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Jt;Jt.NAMES=Id;let U0=0;class To extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ns,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dl extends To{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new F,Pr=new kt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return is("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yh&&(t.usage=this.usage),t}}class Od extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ud extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ti extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let N0=0;const Ke=new Te,ca=new Ve,Xi=new F,Xe=new er,Ts=new er,be=new F;class Li extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wd(t)?Ud:Od)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ti(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Xe.min,Ts.min),Xe.expandByPoint(be),be.addVectors(Xe.max,Ts.max),Xe.expandByPoint(be)):(Xe.expandByPoint(Ts.min),Xe.expandByPoint(Ts.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(t,c),be.add(Xi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let x=0;x<a;x++)c[x]=new F,h[x]=new F;const u=new F,d=new F,f=new F,g=new kt,_=new kt,p=new kt,m=new F,b=new F;function v(x,w,B){u.fromArray(s,x*3),d.fromArray(s,w*3),f.fromArray(s,B*3),g.fromArray(o,x*2),_.fromArray(o,w*2),p.fromArray(o,B*2),d.sub(u),f.sub(u),_.sub(g),p.sub(g);const q=1/(_.x*p.y-p.x*_.y);isFinite(q)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(q),b.copy(f).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(q),c[x].add(m),c[w].add(m),c[B].add(m),h[x].add(b),h[w].add(b),h[B].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let x=0,w=y.length;x<w;++x){const B=y[x],q=B.start,L=B.count;for(let N=q,O=q+L;N<O;N+=3)v(n[N+0],n[N+1],n[N+2])}const A=new F,R=new F,S=new F,D=new F;function W(x){S.fromArray(r,x*3),D.copy(S);const w=c[x];A.copy(w),A.sub(S.multiplyScalar(S.dot(w))).normalize(),R.crossVectors(D,w);const q=R.dot(h[x])<0?-1:1;l[x*4]=A.x,l[x*4+1]=A.y,l[x*4+2]=A.z,l[x*4+3]=q}for(let x=0,w=y.length;x<w;++x){const B=y[x],q=B.start,L=B.count;for(let N=q,O=q+L;N<O;N+=3)W(n[N+0]),W(n[N+1]),W(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new gn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Li,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new Te,ui=new Ld,Lr=new ul,Fh=new F,Yi=new F,ji=new F,qi=new F,ha=new F,Dr=new F,Ir=new kt,Or=new kt,Ur=new kt,kh=new F,Bh=new F,zh=new F,Nr=new F,Fr=new F;class pn extends Ve{constructor(t=new Li,e=new dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ha.fromBufferAttribute(u,t),o?Dr.addScaledVector(ha,h):Dr.addScaledVector(ha.sub(e),h))}e.add(Dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(Lr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Lr,Fh)===null||ui.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,A=v;y<A;y+=3){const R=a.getX(y),S=a.getX(y+1),D=a.getX(y+2);s=kr(this,m,t,n,c,h,u,R,S,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=kr(this,o,t,n,c,h,u,b,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,A=v;y<A;y+=3){const R=y,S=y+1,D=y+2;s=kr(this,m,t,n,c,h,u,R,S,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=p,v=p+1,y=p+2;s=kr(this,o,t,n,c,h,u,b,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function F0(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:i}}function kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Yi),i.getVertexPosition(l,ji),i.getVertexPosition(c,qi);const h=F0(i,t,e,n,Yi,ji,qi,Nr);if(h){s&&(Ir.fromBufferAttribute(s,a),Or.fromBufferAttribute(s,l),Ur.fromBufferAttribute(s,c),h.uv=fn.getInterpolation(Nr,Yi,ji,qi,Ir,Or,Ur,new kt)),r&&(Ir.fromBufferAttribute(r,a),Or.fromBufferAttribute(r,l),Ur.fromBufferAttribute(r,c),h.uv1=fn.getInterpolation(Nr,Yi,ji,qi,Ir,Or,Ur,new kt),h.uv2=h.uv1),o&&(kh.fromBufferAttribute(o,a),Bh.fromBufferAttribute(o,l),zh.fromBufferAttribute(o,c),h.normal=fn.getInterpolation(Nr,Yi,ji,qi,kh,Bh,zh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};fn.getNormal(Yi,ji,qi,u.normal),h.face=u}return h}class ir extends Li{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(h,3)),this.setAttribute("uv",new Ti(u,2));function g(_,p,m,b,v,y,A,R,S,D,W){const x=y/S,w=A/D,B=y/2,q=A/2,L=R/2,N=S+1,O=D+1;let X=0,Y=0;const j=new F;for(let $=0;$<O;$++){const et=$*w-q;for(let ot=0;ot<N;ot++){const Mt=ot*x-B;j[_]=Mt*b,j[p]=et*v,j[m]=L,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=R>0?1:-1,h.push(j.x,j.y,j.z),u.push(ot/S),u.push(1-$/D),X+=1}}for(let $=0;$<D;$++)for(let et=0;et<S;et++){const ot=d+et+N*$,Mt=d+et+N*($+1),V=d+(et+1)+N*($+1),K=d+(et+1)+N*$;l.push(ot,Mt,K),l.push(Mt,V,K),Y+=6}a.addGroup(f,Y,W),f+=Y,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function k0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nd(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}const B0={clone:ds,merge:Ue};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends To{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=k0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fd extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new F,Hh=new kt,Vh=new kt;class Ze extends Fd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Vh),e.subVectors(Vh,Hh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,Ki=1;class V0 extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze($i,Ki,t,e);s.layers=this.layers,this.add(s);const r=new Ze($i,Ki,t,e);r.layers=this.layers,this.add(r);const o=new Ze($i,Ki,t,e);o.layers=this.layers,this.add(o);const a=new Ze($i,Ki,t,e);a.layers=this.layers,this.add(a);const l=new Ze($i,Ki,t,e);l.layers=this.layers,this.add(l);const c=new Ze($i,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kd extends He{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class G0 extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ei?Se:Je),this.texture=new kd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ir(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:qn});r.uniforms.tEquirect.value=e;const o=new pn(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=ke),new V0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ua=new F,W0=new F,X0=new Gt;class Hn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ua.subVectors(n,e).cross(W0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||X0.getNormalMatrix(t),s=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new ul,Br=new F;class Bd{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],b=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,p-f,y-m).normalize(),n[1].setComponents(l+r,d+c,p+f,y+m).normalize(),n[2].setComponents(l+o,d+h,p+g,y+b).normalize(),n[3].setComponents(l-o,d-h,p-g,y-b).normalize(),n[4].setComponents(l-a,d-u,p-_,y-v).normalize(),e===In)n[5].setComponents(l+a,d+u,p+_,y+v).normalize();else if(e===po)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Y0(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];e?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class sr extends Li{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const b=m*d-o;for(let v=0;v<c;v++){const y=v*u-r;g.push(y,-b,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const v=b+c*m,y=b+c*(m+1),A=b+1+c*(m+1),R=b+1+c*m;f.push(v,y,R),f.push(y,A,R)}this.setIndex(f),this.setAttribute("position",new Ti(g,3)),this.setAttribute("normal",new Ti(_,3)),this.setAttribute("uv",new Ti(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.width,t.height,t.widthSegments,t.heightSegments)}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ev=`#ifdef USE_BATCHING
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
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ov=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gv=`#define PI 3.141592653589793
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
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xv=`vec3 transformedNormal = objectNormal;
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
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ev=`
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
}`,Tv=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ov=`#ifdef USE_GRADIENTMAP
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
}`,Uv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bv=`uniform bool receiveShadow;
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
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xv=`PhysicalMaterial material;
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
#endif`,Yv=`struct PhysicalMaterial {
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
}`,jv=`
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
#endif`,qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ib=`#if defined( USE_POINTS_UV )
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
#endif`,sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ob=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
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
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`#ifdef USE_MORPHTARGETS
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
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
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
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lb=`float getShadowMask() {
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
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jb=`uniform sampler2D t2D;
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
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
}`,Qb=`#if DEPTH_PACKING == 3200
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
}`,tM=`#define DISTANCE
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
}`,eM=`#define DISTANCE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
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
}`,rM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define LAMBERT
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
}`,hM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,dM=`#define NORMAL
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
}`,fM=`#define NORMAL
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
}`,pM=`#define PHONG
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
}`,mM=`#define PHONG
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
}`,gM=`#define STANDARD
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
}`,_M=`#define STANDARD
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
}`,xM=`#define TOON
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
}`,vM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,MM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,SM=`uniform vec3 color;
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
}`,EM=`uniform float rotation;
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
}`,TM=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:j0,alphahash_pars_fragment:q0,alphamap_fragment:$0,alphamap_pars_fragment:K0,alphatest_fragment:Z0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:tv,batching_pars_vertex:ev,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:sv,bsdfs:rv,iridescence_fragment:ov,bumpmap_pars_fragment:av,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:hv,clipping_planes_vertex:uv,color_fragment:dv,color_pars_fragment:fv,color_pars_vertex:pv,color_vertex:mv,common:gv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:xv,displacementmap_pars_vertex:vv,displacementmap_vertex:bv,emissivemap_fragment:Mv,emissivemap_pars_fragment:yv,colorspace_fragment:Sv,colorspace_pars_fragment:Ev,envmap_fragment:Tv,envmap_common_pars_fragment:Av,envmap_pars_fragment:wv,envmap_pars_vertex:Rv,envmap_physical_pars_fragment:zv,envmap_vertex:Cv,fog_vertex:Pv,fog_pars_vertex:Lv,fog_fragment:Dv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Ov,lightmap_fragment:Uv,lightmap_pars_fragment:Nv,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:kv,lights_pars_begin:Bv,lights_toon_fragment:Hv,lights_toon_pars_fragment:Vv,lights_phong_fragment:Gv,lights_phong_pars_fragment:Wv,lights_physical_fragment:Xv,lights_physical_pars_fragment:Yv,lights_fragment_begin:jv,lights_fragment_maps:qv,lights_fragment_end:$v,logdepthbuf_fragment:Kv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Qv,map_fragment:tb,map_pars_fragment:eb,map_particle_fragment:nb,map_particle_pars_fragment:ib,metalnessmap_fragment:sb,metalnessmap_pars_fragment:rb,morphcolor_vertex:ob,morphnormal_vertex:ab,morphtarget_pars_vertex:lb,morphtarget_vertex:cb,normal_fragment_begin:hb,normal_fragment_maps:ub,normal_pars_fragment:db,normal_pars_vertex:fb,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:xb,iridescence_pars_fragment:vb,opaque_fragment:bb,packing:Mb,premultiplied_alpha_fragment:yb,project_vertex:Sb,dithering_fragment:Eb,dithering_pars_fragment:Tb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Rb,shadowmap_pars_vertex:Cb,shadowmap_vertex:Pb,shadowmask_pars_fragment:Lb,skinbase_vertex:Db,skinning_pars_vertex:Ib,skinning_vertex:Ob,skinnormal_vertex:Ub,specularmap_fragment:Nb,specularmap_pars_fragment:Fb,tonemapping_fragment:kb,tonemapping_pars_fragment:Bb,transmission_fragment:zb,transmission_pars_fragment:Hb,uv_pars_fragment:Vb,uv_pars_vertex:Gb,uv_vertex:Wb,worldpos_vertex:Xb,background_vert:Yb,background_frag:jb,backgroundCube_vert:qb,backgroundCube_frag:$b,cube_vert:Kb,cube_frag:Zb,depth_vert:Jb,depth_frag:Qb,distanceRGBA_vert:tM,distanceRGBA_frag:eM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:sM,linedashed_frag:rM,meshbasic_vert:oM,meshbasic_frag:aM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:hM,meshmatcap_frag:uM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:_M,meshtoon_vert:xM,meshtoon_frag:vM,points_vert:bM,points_frag:MM,shadow_vert:yM,shadow_frag:SM,sprite_vert:EM,sprite_frag:TM},at={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},un={basic:{uniforms:Ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ue([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ue([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ue([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ue([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ue([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ue([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ue([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ue([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ue([at.common,at.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ue([at.lights,at.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};un.physical={uniforms:Ue([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const zr={r:0,b:0,g:0};function AM(i,t,e,n,s,r,o){const a=new Jt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(p,m){let b=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),b=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===So)?(h===void 0&&(h=new pn(new ir(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ds(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ie,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pn(new sr(2,2),new ei({name:"BackgroundMaterial",uniforms:ds(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(zr,Nd(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function wM(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(L,N,O,X,Y){let j=!1;if(o){const $=_(X,O,N);c!==$&&(c=$,f(c.object)),j=m(L,X,O,Y),j&&b(L,X,O,Y)}else{const $=N.wireframe===!0;(c.geometry!==X.id||c.program!==O.id||c.wireframe!==$)&&(c.geometry=X.id,c.program=O.id,c.wireframe=$,j=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,D(L,N,O,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,O){const X=O.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let j=Y[N.id];j===void 0&&(j={},Y[N.id]=j);let $=j[X];return $===void 0&&($=p(d()),j[X]=$),$}function p(L){const N=[],O=[],X=[];for(let Y=0;Y<s;Y++)N[Y]=0,O[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:X,object:L,attributes:{},index:null}}function m(L,N,O,X){const Y=c.attributes,j=N.attributes;let $=0;const et=O.getAttributes();for(const ot in et)if(et[ot].location>=0){const V=Y[ot];let K=j[ot];if(K===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),V===void 0||V.attribute!==K||K&&V.data!==K.data)return!0;$++}return c.attributesNum!==$||c.index!==X}function b(L,N,O,X){const Y={},j=N.attributes;let $=0;const et=O.getAttributes();for(const ot in et)if(et[ot].location>=0){let V=j[ot];V===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const K={};K.attribute=V,V&&V.data&&(K.data=V.data),Y[ot]=K,$++}c.attributes=Y,c.attributesNum=$,c.index=X}function v(){const L=c.newAttributes;for(let N=0,O=L.length;N<O;N++)L[N]=0}function y(L){A(L,0)}function A(L,N){const O=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;O[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),Y[L]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),Y[L]=N)}function R(){const L=c.newAttributes,N=c.enabledAttributes;for(let O=0,X=N.length;O<X;O++)N[O]!==L[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function S(L,N,O,X,Y,j,$){$===!0?i.vertexAttribIPointer(L,N,O,Y,j):i.vertexAttribPointer(L,N,O,X,Y,j)}function D(L,N,O,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=X.attributes,j=O.getAttributes(),$=N.defaultAttributeValues;for(const et in j){const ot=j[et];if(ot.location>=0){let Mt=Y[et];if(Mt===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),Mt!==void 0){const V=Mt.normalized,K=Mt.itemSize,ht=e.get(Mt);if(ht===void 0)continue;const Et=ht.buffer,At=ht.type,pt=ht.bytesPerElement,Yt=n.isWebGL2===!0&&(At===i.INT||At===i.UNSIGNED_INT||Mt.gpuType===xd);if(Mt.isInterleavedBufferAttribute){const Lt=Mt.data,U=Lt.stride,me=Mt.offset;if(Lt.isInstancedInterleavedBuffer){for(let yt=0;yt<ot.locationSize;yt++)A(ot.location+yt,Lt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let yt=0;yt<ot.locationSize;yt++)y(ot.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let yt=0;yt<ot.locationSize;yt++)S(ot.location+yt,K/ot.locationSize,At,V,U*pt,(me+K/ot.locationSize*yt)*pt,Yt)}else{if(Mt.isInstancedBufferAttribute){for(let Lt=0;Lt<ot.locationSize;Lt++)A(ot.location+Lt,Mt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Lt=0;Lt<ot.locationSize;Lt++)y(ot.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Lt=0;Lt<ot.locationSize;Lt++)S(ot.location+Lt,K/ot.locationSize,At,V,K*pt,K/ot.locationSize*Lt*pt,Yt)}}else if($!==void 0){const V=$[et];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(ot.location,V);break;case 3:i.vertexAttrib3fv(ot.location,V);break;case 4:i.vertexAttrib4fv(ot.location,V);break;default:i.vertexAttrib1fv(ot.location,V)}}}}R()}function W(){B();for(const L in a){const N=a[L];for(const O in N){const X=N[O];for(const Y in X)g(X[Y].object),delete X[Y];delete N[O]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const O in N){const X=N[O];for(const Y in X)g(X[Y].object),delete X[Y];delete N[O]}delete a[L.id]}function w(L){for(const N in a){const O=a[N];if(O[L.id]===void 0)continue;const X=O[L.id];for(const Y in X)g(X[Y].object),delete X[Y];delete O[L.id]}}function B(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:q,dispose:W,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function RM(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function CM(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||t.has("OES_texture_float"),A=v&&y,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:R}}function PM(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,v=b*4;let y=m.clippingState||null;l.value=y,y=h(g,d,v,f);for(let A=0;A!==v;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function LM(i){let t=new WeakMap;function e(o,a){return a===ka?o.mapping=cs:a===Ba&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ka||a===Ba)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new G0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class DM extends Fd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,Gh=[.125,.215,.35,.446,.526,.582],_i=20,da=new DM,Wh=new Jt;let fa=null,pa=0,ma=0;const mi=(1+Math.sqrt(5))/2,Zi=1/mi,Xh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,mi,Zi),new F(0,mi,-Zi),new F(Zi,0,mi),new F(-Zi,0,mi),new F(mi,Zi,0),new F(-mi,Zi,0)];class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,pa,ma),t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:$s,format:sn,colorSpace:On,depthBuffer:!1},s=jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IM(r)),this._blurMaterial=OM(r,t,e)}return s}_compileMaterial(t){const e=new pn(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,s){const a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wh),h.toneMapping=$n,h.autoClear=!1;const f=new dl({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new pn(new ir,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Wh),_=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Hr(s,b*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xh[(s-1)%Xh.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pn(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_i-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):_i;p>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const m=[];let b=0;for(let S=0;S<_i;++S){const D=S/_,W=Math.exp(-D*D/2);m.push(W),S===0?b+=W:S<p&&(b+=2*W)}for(let S=0;S<m.length;S++)m[S]=m[S]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[s],A=3*y*(s>v-Qi?s-v+Qi:0),R=4*(this._cubeSize-y);Hr(e,A,R,3*y,2*y),l.setRenderTarget(e),l.render(u,da)}}function IM(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+Gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=Gh[o-i+Qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),v=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let R=0;R<f;R++){const S=R%3*2/3-1,D=R>2?0:-1,W=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];b.set(W,_*g*R),v.set(d,p*g*R);const x=[R,R,R,R,R,R];y.set(x,m*g*R)}const A=new Li;A.setAttribute("position",new gn(b,_)),A.setAttribute("uv",new gn(v,p)),A.setAttribute("faceIndex",new gn(y,m)),t.push(A),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jh(i,t,e){const n=new Ri(i,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function OM(i,t,e){const n=new Float32Array(_i),s=new F(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function qh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function $h(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function UM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ka||l===Ba,h=l===cs||l===hs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Yh(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Yh(i));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function NM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function FM(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let v=0,y=b.length;v<y;v+=3){const A=b[v+0],R=b[v+1],S=b[v+2];d.push(A,R,R,S,S,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const A=v+0,R=v+1,S=v+2;d.push(A,R,R,S,S,A)}}else return;const p=new(wd(d)?Ud:Od)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kM(i,t,e,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*l),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*l,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let m=0;for(let b=0;b<_;b++)m+=g[b];e.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function BM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zM(i,t){return i[0]-t[0]}function HM(i,t){return Math.abs(t[1])-Math.abs(i[1])}function VM(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new Ee,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let N=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var f=N;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let W=0;v===!0&&(W=1),y===!0&&(W=2),A===!0&&(W=3);let x=h.attributes.position.count*W,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const B=new Float32Array(x*w*4*_),q=new Pd(B,x,w,_);q.type=Cn,q.needsUpdate=!0;const L=W*4;for(let O=0;O<_;O++){const X=R[O],Y=S[O],j=D[O],$=x*w*4*O;for(let et=0;et<X.count;et++){const ot=et*L;v===!0&&(o.fromBufferAttribute(X,et),B[$+ot+0]=o.x,B[$+ot+1]=o.y,B[$+ot+2]=o.z,B[$+ot+3]=0),y===!0&&(o.fromBufferAttribute(Y,et),B[$+ot+4]=o.x,B[$+ot+5]=o.y,B[$+ot+6]=o.z,B[$+ot+7]=0),A===!0&&(o.fromBufferAttribute(j,et),B[$+ot+8]=o.x,B[$+ot+9]=o.y,B[$+ot+10]=o.z,B[$+ot+11]=j.itemSize===4?o.w:1)}}p={count:_,texture:q,size:new kt(x,w)},r.set(h,p),h.addEventListener("dispose",N)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const b=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const A=_[y];A[0]=y,A[1]=d[y]}_.sort(HM);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(zM);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const A=a[y],R=A[0],S=A[1];R!==Number.MAX_SAFE_INTEGER&&S?(p&&h.getAttribute("morphTarget"+y)!==p[R]&&h.setAttribute("morphTarget"+y,p[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),s[y]=S,b+=S):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const v=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function GM(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Hd extends He{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Si,h!==Si&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=Yn),n===void 0&&h===us&&(n=yi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vd=new He,Gd=new Hd(1,1);Gd.compareFunction=Ad;const Wd=new Pd,Xd=new A0,Yd=new kd,Kh=[],Zh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),tu=new Float32Array(4);function ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ao(i,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function WM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function XM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function YM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function jM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function qM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),xe(e,n)}}function $M(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),xe(e,n)}}function KM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Jh.set(n),i.uniformMatrix4fv(this.addr,!1,Jh),xe(e,n)}}function ZM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function JM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function QM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function ty(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function ey(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ny(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function iy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function sy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function ry(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Gd:Vd;e.setTexture2D(t||r,s)}function oy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xd,s)}function ay(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yd,s)}function ly(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wd,s)}function cy(i){switch(i){case 5126:return WM;case 35664:return XM;case 35665:return YM;case 35666:return jM;case 35674:return qM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}function hy(i,t){i.uniform1fv(this.addr,t)}function uy(i,t){const e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function dy(i,t){const e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function fy(i,t){const e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function py(i,t){const e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function my(i,t){const e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gy(i,t){const e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _y(i,t){i.uniform1iv(this.addr,t)}function xy(i,t){i.uniform2iv(this.addr,t)}function vy(i,t){i.uniform3iv(this.addr,t)}function by(i,t){i.uniform4iv(this.addr,t)}function My(i,t){i.uniform1uiv(this.addr,t)}function yy(i,t){i.uniform2uiv(this.addr,t)}function Sy(i,t){i.uniform3uiv(this.addr,t)}function Ey(i,t){i.uniform4uiv(this.addr,t)}function Ty(i,t,e){const n=this.cache,s=t.length,r=Ao(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vd,r[o])}function Ay(i,t,e){const n=this.cache,s=t.length,r=Ao(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xd,r[o])}function wy(i,t,e){const n=this.cache,s=t.length,r=Ao(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yd,r[o])}function Ry(i,t,e){const n=this.cache,s=t.length,r=Ao(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wd,r[o])}function Cy(i){switch(i){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return _y;case 35667:case 35671:return xy;case 35668:case 35672:return vy;case 35669:case 35673:return by;case 5125:return My;case 36294:return yy;case 36295:return Sy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ry}}class Py{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cy(e.type)}}class Ly{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cy(e.type)}}class Dy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function eu(i,t){i.seq.push(t),i.map[t.id]=t}function Iy(i,t,e){const n=i.name,s=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),o=ga.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){eu(e,c===void 0?new Py(a,i,t):new Ly(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Dy(a),eu(e,u)),e=u}}}class Jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Iy(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function nu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Oy=37297;let Uy=0;function Ny(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Fy(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===fo&&e===uo?n="LinearDisplayP3ToLinearSRGB":t===uo&&e===fo&&(n="LinearSRGBToLinearDisplayP3"),i){case On:case Eo:return[n,"LinearTransferOETF"];case Se:case cl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function iu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ny(i.getShaderSource(t),o)}else return s}function ky(i,t){const e=Fy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function By(i,t){let e;switch(t){case Ux:e="Linear";break;case Nx:e="Reinhard";break;case Fx:e="OptimizedCineon";break;case kx:e="ACESFilmic";break;case zx:e="AgX";break;case Bx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function zy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function Hy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function Vy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ts(i){return i!==""}function su(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace(Wy,Yy)}const Xy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yy(i,t){let e=Bt[t];if(e===void 0){const n=Xy.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(i){return i.replace(jy,qy)}function qy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function au(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function $y(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===md?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cx?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Ky(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Jy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gd:t="ENVMAP_BLENDING_MULTIPLY";break;case Ix:t="ENVMAP_BLENDING_MIX";break;case Ox:t="ENVMAP_BLENDING_ADD";break}return t}function Qy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tS(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$y(e),c=Ky(e),h=Zy(e),u=Jy(e),d=Qy(e),f=e.isWebGL2?"":zy(e),g=Hy(e),_=Vy(r),p=s.createProgram();let m,b,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ts).join(`
`),m.length>0&&(m+=`
`),b=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ts).join(`
`),b.length>0&&(b+=`
`)):(m=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),b=[f,au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Bt.tonemapping_pars_fragment:"",e.toneMapping!==$n?By("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,ky("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),o=Wa(o),o=su(o,e),o=ru(o,e),a=Wa(a),a=su(a,e),a=ru(a,e),o=ou(o),a=ou(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const y=v+m+o,A=v+b+a,R=nu(s,s.VERTEX_SHADER,y),S=nu(s,s.FRAGMENT_SHADER,A);s.attachShader(p,R),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(B){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(R).trim(),N=s.getShaderInfoLog(S).trim();let O=!0,X=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,S);else{const Y=iu(s,R,"vertex"),j=iu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+q+`
`+Y+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||N==="")&&(X=!1);X&&(B.diagnostics={runnable:O,programLog:q,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:b}})}s.deleteShader(R),s.deleteShader(S),W=new Jr(s,p),x=Gy(s,p)}let W;this.getUniforms=function(){return W===void 0&&D(this),W};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Oy)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=S,this}let eS=0;class nS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new iS(t),e.set(t,n)),n}}class iS{constructor(t){this.id=eS++,this.code=t,this.usedTimes=0}}function sS(i,t,e,n,s,r,o){const a=new Dd,l=new nS,c=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,B,q,L){const N=q.fog,O=L.geometry,X=x.isMeshStandardMaterial?q.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||X),j=Y&&Y.mapping===So?Y.image.height:null,$=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ot=et!==void 0?et.length:0;let Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let V,K,ht,Et;if($){const Wt=un[$];V=Wt.vertexShader,K=Wt.fragmentShader}else V=x.vertexShader,K=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),Et=l.getFragmentShaderID(x);const At=i.getRenderTarget(),pt=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,Lt=!!x.map,U=!!x.matcap,me=!!Y,yt=!!x.aoMap,Rt=!!x.lightMap,_t=!!x.bumpMap,ne=!!x.normalMap,Dt=!!x.displacementMap,T=!!x.emissiveMap,M=!!x.metalnessMap,k=!!x.roughnessMap,it=x.anisotropy>0,Z=x.clearcoat>0,tt=x.iridescence>0,mt=x.sheen>0,lt=x.transmission>0,ft=it&&!!x.anisotropyMap,Tt=Z&&!!x.clearcoatMap,It=Z&&!!x.clearcoatNormalMap,J=Z&&!!x.clearcoatRoughnessMap,Kt=tt&&!!x.iridescenceMap,zt=tt&&!!x.iridescenceThicknessMap,Ct=mt&&!!x.sheenColorMap,vt=mt&&!!x.sheenRoughnessMap,ut=!!x.specularMap,Nt=!!x.specularColorMap,P=!!x.specularIntensityMap,st=lt&&!!x.transmissionMap,ct=lt&&!!x.thicknessMap,bt=!!x.gradientMap,C=!!x.alphaMap,nt=x.alphaTest>0,Q=!!x.alphaHash,gt=!!x.extensions;let St=$n;x.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(St=i.toneMapping);const qt={isWebGL2:u,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:K,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:Et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Yt,instancing:pt,instancingColor:pt&&L.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:On,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:U,envMap:me,envMapMode:me&&Y.mapping,envMapCubeUVHeight:j,aoMap:yt,lightMap:Rt,bumpMap:_t,normalMap:ne,displacementMap:f&&Dt,emissiveMap:T,normalMapObjectSpace:ne&&x.normalMapType===Jx,normalMapTangentSpace:ne&&x.normalMapType===Zx,metalnessMap:M,roughnessMap:k,anisotropy:it,anisotropyMap:ft,clearcoat:Z,clearcoatMap:Tt,clearcoatNormalMap:It,clearcoatRoughnessMap:J,iridescence:tt,iridescenceMap:Kt,iridescenceThicknessMap:zt,sheen:mt,sheenColorMap:Ct,sheenRoughnessMap:vt,specularMap:ut,specularColorMap:Nt,specularIntensityMap:P,transmission:lt,transmissionMap:st,thicknessMap:ct,gradientMap:bt,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:C,alphaTest:nt,alphaHash:Q,combine:x.combine,mapUv:Lt&&p(x.map.channel),aoMapUv:yt&&p(x.aoMap.channel),lightMapUv:Rt&&p(x.lightMap.channel),bumpMapUv:_t&&p(x.bumpMap.channel),normalMapUv:ne&&p(x.normalMap.channel),displacementMapUv:Dt&&p(x.displacementMap.channel),emissiveMapUv:T&&p(x.emissiveMap.channel),metalnessMapUv:M&&p(x.metalnessMap.channel),roughnessMapUv:k&&p(x.roughnessMap.channel),anisotropyMapUv:ft&&p(x.anisotropyMap.channel),clearcoatMapUv:Tt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:It&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(x.sheenRoughnessMap.channel),specularMapUv:ut&&p(x.specularMap.channel),specularColorMapUv:Nt&&p(x.specularColorMap.channel),specularIntensityMapUv:P&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:ct&&p(x.thicknessMap.channel),alphaMapUv:C&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ne||it),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Lt||C),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Mt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:gt&&x.extensions.derivatives===!0,extensionFragDepth:gt&&x.extensions.fragDepth===!0,extensionDrawBuffers:gt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:gt&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function b(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)w.push(B),w.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(v(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const w=_[x.type];let B;if(w){const q=un[w];B=B0.clone(q.uniforms)}else B=x.uniforms;return B}function R(x,w){let B;for(let q=0,L=h.length;q<L;q++){const N=h[q];if(N.cacheKey===w){B=N,++B.usedTimes;break}}return B===void 0&&(B=new tS(i,w,x,r),h.push(B)),B}function S(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function D(x){l.remove(x)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:A,acquireProgram:R,releaseProgram:S,releaseShaderCache:D,programs:h,dispose:W}}function rS(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function oS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||oS),n.length>1&&n.sort(d||lu),s.length>1&&s.sort(d||lu)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function aS(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new cu,i.set(n,[o])):s>=r.length?(o=new cu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Jt};break;case"SpotLight":e={position:new F,direction:new F,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function cS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hS=0;function uS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dS(i,t){const e=new lS,n=cS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);const r=new F,o=new Te,a=new Te;function l(h,u){let d=0,f=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let _=0,p=0,m=0,b=0,v=0,y=0,A=0,R=0,S=0,D=0,W=0;h.sort(uS);const x=u===!0?Math.PI:1;for(let B=0,q=h.length;B<q;B++){const L=h[B],N=L.color,O=L.intensity,X=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*O*x,f+=N.g*O*x,g+=N.b*O*x;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],O);W++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const $=L.shadow,et=n.get(L);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,s.directionalShadow[_]=et,s.directionalShadowMap[_]=Y,s.directionalShadowMatrix[_]=L.shadow.matrix,y++}s.directional[_]=j,_++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(N).multiplyScalar(O*x),j.distance=X,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[m]=j;const $=L.shadow;if(L.map&&(s.spotLightMap[S]=L.map,S++,$.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[m]=$.matrix,L.castShadow){const et=n.get(L);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,s.spotShadow[m]=et,s.spotShadowMap[m]=Y,R++}m++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(N).multiplyScalar(O),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[b]=j,b++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*x),j.distance=L.distance,j.decay=L.decay,L.castShadow){const $=L.shadow,et=n.get(L);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,s.pointShadow[p]=et,s.pointShadowMap[p]=Y,s.pointShadowMatrix[p]=L.shadow.matrix,A++}s.point[p]=j,p++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(O*x),j.groundColor.copy(L.groundColor).multiplyScalar(O*x),s.hemi[v]=j,v++}}b>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==b||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==A||w.numSpotShadows!==R||w.numSpotMaps!==S||w.numLightProbes!==W)&&(s.directional.length=_,s.spot.length=m,s.rectArea.length=b,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=R+S-D,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=W,w.directionalLength=_,w.pointLength=p,w.spotLength=m,w.rectAreaLength=b,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=A,w.numSpotShadows=R,w.numSpotMaps=S,w.numLightProbes=W,s.version=hS++)}function c(h,u){let d=0,f=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){const y=h[b];if(y.isDirectionalLight){const A=s.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(y.isSpotLight){const A=s.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const A=s.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const A=s.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const A=s.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function hu(i,t){const e=new dS(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fS(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new hu(i,t),e.set(r,[l])):o>=a.length?(l=new hu(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class pS extends To{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mS extends To{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
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
}`;function xS(i,t,e){let n=new Bd;const s=new kt,r=new kt,o=new Ee,a=new pS({depthPacking:Kx}),l=new mS,c={},h=e.maxTextureSize,u={[Qn]:ze,[ze]:Qn,[dn]:dn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:gS,fragmentShader:_S}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Li;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let m=this.type;this.render=function(R,S,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const W=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),B=i.state;B.setBlending(qn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=m!==An&&this.type===An,L=m===An&&this.type!==An;for(let N=0,O=R.length;N<O;N++){const X=R[N],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const j=Y.getFrameExtents();if(s.multiply(j),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||q===!0||L===!0){const et=this.type!==An?{minFilter:Ne,magFilter:Ne}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ri(s.x,s.y,et),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const $=Y.getViewportCount();for(let et=0;et<$;et++){const ot=Y.getViewport(et);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),B.viewport(o),Y.updateMatrices(X,et),n=Y.getFrustum(),y(S,D,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===An&&b(Y,D),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(W,x,w)};function b(R,S){const D=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(S,null,D,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(S,null,D,f,_,null)}function v(R,S,D,W){let x=null;const w=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const B=x.uuid,q=S.uuid;let L=c[B];L===void 0&&(L={},c[B]=L);let N=L[q];N===void 0&&(N=x.clone(),L[q]=N,S.addEventListener("dispose",A)),x=N}if(x.visible=S.visible,x.wireframe=S.wireframe,W===An?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:u[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=D}return x}function y(R,S,D,W,x){if(R.visible===!1)return;if(R.layers.test(S.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===An)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const q=t.update(R),L=R.material;if(Array.isArray(L)){const N=q.groups;for(let O=0,X=N.length;O<X;O++){const Y=N[O],j=L[Y.materialIndex];if(j&&j.visible){const $=v(R,j,W,x);R.onBeforeShadow(i,R,S,D,q,$,Y),i.renderBufferDirect(D,null,q,$,R,Y),R.onAfterShadow(i,R,S,D,q,$,Y)}}}else if(L.visible){const N=v(R,L,W,x);R.onBeforeShadow(i,R,S,D,q,N,null),i.renderBufferDirect(D,null,q,N,R,null),R.onAfterShadow(i,R,S,D,q,N,null)}}const B=R.children;for(let q=0,L=B.length;q<L;q++)y(B[q],S,D,W,x)}function A(R){R.target.removeEventListener("dispose",A);for(const D in c){const W=c[D],x=R.target.uuid;x in W&&(W[x].dispose(),delete W[x])}}}function vS(i,t,e){const n=e.isWebGL2;function s(){let C=!1;const nt=new Ee;let Q=null;const gt=new Ee(0,0,0,0);return{setMask:function(St){Q!==St&&!C&&(i.colorMask(St,St,St,St),Q=St)},setLocked:function(St){C=St},setClear:function(St,qt,Wt,te,ye){ye===!0&&(St*=te,qt*=te,Wt*=te),nt.set(St,qt,Wt,te),gt.equals(nt)===!1&&(i.clearColor(St,qt,Wt,te),gt.copy(nt))},reset:function(){C=!1,Q=null,gt.set(-1,0,0,0)}}}function r(){let C=!1,nt=null,Q=null,gt=null;return{setTest:function(St){St?pt(i.DEPTH_TEST):Yt(i.DEPTH_TEST)},setMask:function(St){nt!==St&&!C&&(i.depthMask(St),nt=St)},setFunc:function(St){if(Q!==St){switch(St){case Ax:i.depthFunc(i.NEVER);break;case wx:i.depthFunc(i.ALWAYS);break;case Rx:i.depthFunc(i.LESS);break;case co:i.depthFunc(i.LEQUAL);break;case Cx:i.depthFunc(i.EQUAL);break;case Px:i.depthFunc(i.GEQUAL);break;case Lx:i.depthFunc(i.GREATER);break;case Dx:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=St}},setLocked:function(St){C=St},setClear:function(St){gt!==St&&(i.clearDepth(St),gt=St)},reset:function(){C=!1,nt=null,Q=null,gt=null}}}function o(){let C=!1,nt=null,Q=null,gt=null,St=null,qt=null,Wt=null,te=null,ye=null;return{setTest:function($t){C||($t?pt(i.STENCIL_TEST):Yt(i.STENCIL_TEST))},setMask:function($t){nt!==$t&&!C&&(i.stencilMask($t),nt=$t)},setFunc:function($t,ue,Ie){(Q!==$t||gt!==ue||St!==Ie)&&(i.stencilFunc($t,ue,Ie),Q=$t,gt=ue,St=Ie)},setOp:function($t,ue,Ie){(qt!==$t||Wt!==ue||te!==Ie)&&(i.stencilOp($t,ue,Ie),qt=$t,Wt=ue,te=Ie)},setLocked:function($t){C=$t},setClear:function($t){ye!==$t&&(i.clearStencil($t),ye=$t)},reset:function(){C=!1,nt=null,Q=null,gt=null,St=null,qt=null,Wt=null,te=null,ye=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,b=null,v=null,y=null,A=null,R=null,S=null,D=null,W=new Jt(0,0,0),x=0,w=!1,B=null,q=null,L=null,N=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=j>=2);let et=null,ot={};const Mt=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),K=new Ee().fromArray(Mt),ht=new Ee().fromArray(V);function Et(C,nt,Q,gt){const St=new Uint8Array(4),qt=i.createTexture();i.bindTexture(C,qt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Q;Wt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(nt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(nt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return qt}const At={};At[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(i.DEPTH_TEST),l.setFunc(co),Dt(!1),T(Gc),pt(i.CULL_FACE),_t(qn);function pt(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function Yt(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function Lt(C,nt){return f[C]!==nt?(i.bindFramebuffer(C,nt),f[C]=nt,n&&(C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt)),!0):!1}function U(C,nt){let Q=_,gt=!1;if(C)if(Q=g.get(nt),Q===void 0&&(Q=[],g.set(nt,Q)),C.isWebGLMultipleRenderTargets){const St=C.texture;if(Q.length!==St.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,Wt=St.length;qt<Wt;qt++)Q[qt]=i.COLOR_ATTACHMENT0+qt;Q.length=St.length,gt=!0}}else Q[0]!==i.COLOR_ATTACHMENT0&&(Q[0]=i.COLOR_ATTACHMENT0,gt=!0);else Q[0]!==i.BACK&&(Q[0]=i.BACK,gt=!0);gt&&(e.isWebGL2?i.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function me(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const yt={[gi]:i.FUNC_ADD,[ux]:i.FUNC_SUBTRACT,[dx]:i.FUNC_REVERSE_SUBTRACT};if(n)yt[jc]=i.MIN,yt[qc]=i.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(yt[jc]=C.MIN_EXT,yt[qc]=C.MAX_EXT)}const Rt={[fx]:i.ZERO,[px]:i.ONE,[mx]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Mx]:i.SRC_ALPHA_SATURATE,[vx]:i.DST_COLOR,[_x]:i.DST_ALPHA,[gx]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[bx]:i.ONE_MINUS_DST_COLOR,[xx]:i.ONE_MINUS_DST_ALPHA,[yx]:i.CONSTANT_COLOR,[Sx]:i.ONE_MINUS_CONSTANT_COLOR,[Ex]:i.CONSTANT_ALPHA,[Tx]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(C,nt,Q,gt,St,qt,Wt,te,ye,$t){if(C===qn){m===!0&&(Yt(i.BLEND),m=!1);return}if(m===!1&&(pt(i.BLEND),m=!0),C!==hx){if(C!==b||$t!==w){if((v!==gi||R!==gi)&&(i.blendEquation(i.FUNC_ADD),v=gi,R=gi),$t)switch(C){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,A=null,S=null,D=null,W.set(0,0,0),x=0,b=C,w=$t}return}St=St||nt,qt=qt||Q,Wt=Wt||gt,(nt!==v||St!==R)&&(i.blendEquationSeparate(yt[nt],yt[St]),v=nt,R=St),(Q!==y||gt!==A||qt!==S||Wt!==D)&&(i.blendFuncSeparate(Rt[Q],Rt[gt],Rt[qt],Rt[Wt]),y=Q,A=gt,S=qt,D=Wt),(te.equals(W)===!1||ye!==x)&&(i.blendColor(te.r,te.g,te.b,ye),W.copy(te),x=ye),b=C,w=!1}function ne(C,nt){C.side===dn?Yt(i.CULL_FACE):pt(i.CULL_FACE);let Q=C.side===ze;nt&&(Q=!Q),Dt(Q),C.blending===ns&&C.transparent===!1?_t(qn):_t(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const gt=C.stencilWrite;c.setTest(gt),gt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),k(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(C){B!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),B=C)}function T(C){C!==ax?(pt(i.CULL_FACE),C!==q&&(C===Gc?i.cullFace(i.BACK):C===lx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Yt(i.CULL_FACE),q=C}function M(C){C!==L&&(Y&&i.lineWidth(C),L=C)}function k(C,nt,Q){C?(pt(i.POLYGON_OFFSET_FILL),(N!==nt||O!==Q)&&(i.polygonOffset(nt,Q),N=nt,O=Q)):Yt(i.POLYGON_OFFSET_FILL)}function it(C){C?pt(i.SCISSOR_TEST):Yt(i.SCISSOR_TEST)}function Z(C){C===void 0&&(C=i.TEXTURE0+X-1),et!==C&&(i.activeTexture(C),et=C)}function tt(C,nt,Q){Q===void 0&&(et===null?Q=i.TEXTURE0+X-1:Q=et);let gt=ot[Q];gt===void 0&&(gt={type:void 0,texture:void 0},ot[Q]=gt),(gt.type!==C||gt.texture!==nt)&&(et!==Q&&(i.activeTexture(Q),et=Q),i.bindTexture(C,nt||At[C]),gt.type=C,gt.texture=nt)}function mt(){const C=ot[et];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(C){K.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function P(C){ht.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ht.copy(C))}function st(C,nt){let Q=u.get(nt);Q===void 0&&(Q=new WeakMap,u.set(nt,Q));let gt=Q.get(C);gt===void 0&&(gt=i.getUniformBlockIndex(nt,C.name),Q.set(C,gt))}function ct(C,nt){const gt=u.get(nt).get(C);h.get(nt)!==gt&&(i.uniformBlockBinding(nt,gt,C.__bindingPointIndex),h.set(nt,gt))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},et=null,ot={},f={},g=new WeakMap,_=[],p=null,m=!1,b=null,v=null,y=null,A=null,R=null,S=null,D=null,W=new Jt(0,0,0),x=0,w=!1,B=null,q=null,L=null,N=null,O=null,K.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pt,disable:Yt,bindFramebuffer:Lt,drawBuffers:U,useProgram:me,setBlending:_t,setMaterial:ne,setFlipSided:Dt,setCullFace:T,setLineWidth:M,setPolygonOffset:k,setScissorTest:it,activeTexture:Z,bindTexture:tt,unbindTexture:mt,compressedTexImage2D:lt,compressedTexImage3D:ft,texImage2D:vt,texImage3D:ut,updateUBOMapping:st,uniformBlockBinding:ct,texStorage2D:zt,texStorage3D:Ct,texSubImage2D:Tt,texSubImage3D:It,compressedTexSubImage2D:J,compressedTexSubImage3D:Kt,scissor:Nt,viewport:P,reset:bt}}function bS(i,t,e,n,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):go("canvas")}function _(T,M,k,it){let Z=1;if((T.width>it||T.height>it)&&(Z=it/Math.max(T.width,T.height)),Z<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const tt=M?mo:Math.floor,mt=tt(Z*T.width),lt=tt(Z*T.height);u===void 0&&(u=g(mt,lt));const ft=k?g(mt,lt):u;return ft.width=mt,ft.height=lt,ft.getContext("2d").drawImage(T,0,0,mt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+mt+"x"+lt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Ga(T.width)&&Ga(T.height)}function m(T){return a?!1:T.wrapS!==nn||T.wrapT!==nn||T.minFilter!==Ne&&T.minFilter!==ke}function b(T,M){return T.generateMipmaps&&M&&T.minFilter!==Ne&&T.minFilter!==ke}function v(T){i.generateMipmap(T)}function y(T,M,k,it,Z=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let tt=M;if(M===i.RED&&(k===i.FLOAT&&(tt=i.R32F),k===i.HALF_FLOAT&&(tt=i.R16F),k===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.R8UI),k===i.UNSIGNED_SHORT&&(tt=i.R16UI),k===i.UNSIGNED_INT&&(tt=i.R32UI),k===i.BYTE&&(tt=i.R8I),k===i.SHORT&&(tt=i.R16I),k===i.INT&&(tt=i.R32I)),M===i.RG&&(k===i.FLOAT&&(tt=i.RG32F),k===i.HALF_FLOAT&&(tt=i.RG16F),k===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RGBA){const mt=Z?ho:Qt.getTransfer(it);k===i.FLOAT&&(tt=i.RGBA32F),k===i.HALF_FLOAT&&(tt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(tt=mt===ie?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(T,M,k){return b(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==Ne&&T.minFilter!==ke?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){return T===Ne||T===$c||T===Ms?i.NEAREST:i.LINEAR}function S(T){const M=T.target;M.removeEventListener("dispose",S),W(M),M.isVideoTexture&&h.delete(M)}function D(T){const M=T.target;M.removeEventListener("dispose",D),w(M)}function W(T){const M=n.get(T);if(M.__webglInit===void 0)return;const k=T.source,it=d.get(k);if(it){const Z=it[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(T),Object.keys(it).length===0&&d.delete(k)}n.remove(T)}function x(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const k=T.source,it=d.get(k);delete it[M.__cacheKey],o.memory.textures--}function w(T){const M=T.texture,k=n.get(T),it=n.get(M);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(k.__webglFramebuffer[Z]))for(let tt=0;tt<k.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(k.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(k.__webglFramebuffer[Z]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[Z])}else{if(Array.isArray(k.__webglFramebuffer))for(let Z=0;Z<k.__webglFramebuffer.length;Z++)i.deleteFramebuffer(k.__webglFramebuffer[Z]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Z=0;Z<k.__webglColorRenderbuffer.length;Z++)k.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[Z]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,tt=M.length;Z<tt;Z++){const mt=n.get(M[Z]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(M[Z])}n.remove(M),n.remove(T)}let B=0;function q(){B=0}function L(){const T=B;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function N(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function O(T,M){const k=n.get(T);if(T.isVideoTexture&&ne(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const it=T.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,T,M);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function X(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function Y(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,M);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function j(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){ht(k,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}const $={[za]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},et={[Ne]:i.NEAREST,[$c]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},ot={[Qx]:i.NEVER,[r0]:i.ALWAYS,[t0]:i.LESS,[Ad]:i.LEQUAL,[e0]:i.EQUAL,[s0]:i.GEQUAL,[n0]:i.GREATER,[i0]:i.NOTEQUAL};function Mt(T,M,k){if(M.type===Cn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ke||M.magFilter===Go||M.magFilter===Ms||M.magFilter===vi||M.minFilter===ke||M.minFilter===Go||M.minFilter===Ms||M.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(i.texParameteri(T,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,et[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,et[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==nn||M.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,R(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Ne&&M.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ne||M.minFilter!==Ms&&M.minFilter!==vi||M.type===Cn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===$s&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function V(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",S));const it=M.source;let Z=d.get(it);Z===void 0&&(Z={},d.set(it,Z));const tt=N(M);if(tt!==T.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[tt].usedTimes++;const mt=Z[T.__cacheKey];mt!==void 0&&(Z[T.__cacheKey].usedTimes--,mt.usedTimes===0&&x(M)),T.__cacheKey=tt,T.__webglTexture=Z[tt].texture}return k}function K(T,M,k){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);const Z=V(T,M),tt=M.source;e.bindTexture(it,T.__webglTexture,i.TEXTURE0+k);const mt=n.get(tt);if(tt.version!==mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);const lt=Qt.getPrimaries(Qt.workingColorSpace),ft=M.colorSpace===Je?null:Qt.getPrimaries(M.colorSpace),Tt=M.colorSpace===Je||lt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const It=m(M)&&p(M.image)===!1;let J=_(M.image,It,!1,s.maxTextureSize);J=Dt(M,J);const Kt=p(J)||a,zt=r.convert(M.format,M.colorSpace);let Ct=r.convert(M.type),vt=y(M.internalFormat,zt,Ct,M.colorSpace,M.isVideoTexture);Mt(it,M,Kt);let ut;const Nt=M.mipmaps,P=a&&M.isVideoTexture!==!0&&vt!==Ed,st=mt.__version===void 0||Z===!0,ct=tt.dataReady,bt=A(M,J,Kt);if(M.isDepthTexture)vt=i.DEPTH_COMPONENT,a?M.type===Cn?vt=i.DEPTH_COMPONENT32F:M.type===Yn?vt=i.DEPTH_COMPONENT24:M.type===yi?vt=i.DEPTH24_STENCIL8:vt=i.DEPTH_COMPONENT16:M.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Si&&vt===i.DEPTH_COMPONENT&&M.type!==ll&&M.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Yn,Ct=r.convert(M.type)),M.format===us&&vt===i.DEPTH_COMPONENT&&(vt=i.DEPTH_STENCIL,M.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=yi,Ct=r.convert(M.type))),st&&(P?e.texStorage2D(i.TEXTURE_2D,1,vt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,vt,J.width,J.height,0,zt,Ct,null));else if(M.isDataTexture)if(Nt.length>0&&Kt){P&&st&&e.texStorage2D(i.TEXTURE_2D,bt,vt,Nt[0].width,Nt[0].height);for(let C=0,nt=Nt.length;C<nt;C++)ut=Nt[C],P?ct&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,ut.width,ut.height,zt,Ct,ut.data):e.texImage2D(i.TEXTURE_2D,C,vt,ut.width,ut.height,0,zt,Ct,ut.data);M.generateMipmaps=!1}else P?(st&&e.texStorage2D(i.TEXTURE_2D,bt,vt,J.width,J.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,zt,Ct,J.data)):e.texImage2D(i.TEXTURE_2D,0,vt,J.width,J.height,0,zt,Ct,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){P&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,vt,Nt[0].width,Nt[0].height,J.depth);for(let C=0,nt=Nt.length;C<nt;C++)ut=Nt[C],M.format!==sn?zt!==null?P?ct&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ut.width,ut.height,J.depth,zt,ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,vt,ut.width,ut.height,J.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ut.width,ut.height,J.depth,zt,Ct,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,C,vt,ut.width,ut.height,J.depth,0,zt,Ct,ut.data)}else{P&&st&&e.texStorage2D(i.TEXTURE_2D,bt,vt,Nt[0].width,Nt[0].height);for(let C=0,nt=Nt.length;C<nt;C++)ut=Nt[C],M.format!==sn?zt!==null?P?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,ut.width,ut.height,zt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,C,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ct&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,ut.width,ut.height,zt,Ct,ut.data):e.texImage2D(i.TEXTURE_2D,C,vt,ut.width,ut.height,0,zt,Ct,ut.data)}else if(M.isDataArrayTexture)P?(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,vt,J.width,J.height,J.depth),ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,zt,Ct,J.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,J.width,J.height,J.depth,0,zt,Ct,J.data);else if(M.isData3DTexture)P?(st&&e.texStorage3D(i.TEXTURE_3D,bt,vt,J.width,J.height,J.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,zt,Ct,J.data)):e.texImage3D(i.TEXTURE_3D,0,vt,J.width,J.height,J.depth,0,zt,Ct,J.data);else if(M.isFramebufferTexture){if(st)if(P)e.texStorage2D(i.TEXTURE_2D,bt,vt,J.width,J.height);else{let C=J.width,nt=J.height;for(let Q=0;Q<bt;Q++)e.texImage2D(i.TEXTURE_2D,Q,vt,C,nt,0,zt,Ct,null),C>>=1,nt>>=1}}else if(Nt.length>0&&Kt){P&&st&&e.texStorage2D(i.TEXTURE_2D,bt,vt,Nt[0].width,Nt[0].height);for(let C=0,nt=Nt.length;C<nt;C++)ut=Nt[C],P?ct&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,zt,Ct,ut):e.texImage2D(i.TEXTURE_2D,C,vt,zt,Ct,ut);M.generateMipmaps=!1}else P?(st&&e.texStorage2D(i.TEXTURE_2D,bt,vt,J.width,J.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Ct,J)):e.texImage2D(i.TEXTURE_2D,0,vt,zt,Ct,J);b(M,Kt)&&v(it),mt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ht(T,M,k){if(M.image.length!==6)return;const it=V(T,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const tt=n.get(Z);if(Z.version!==tt.__version||it===!0){e.activeTexture(i.TEXTURE0+k);const mt=Qt.getPrimaries(Qt.workingColorSpace),lt=M.colorSpace===Je?null:Qt.getPrimaries(M.colorSpace),ft=M.colorSpace===Je||mt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Tt=M.isCompressedTexture||M.image[0].isCompressedTexture,It=M.image[0]&&M.image[0].isDataTexture,J=[];for(let C=0;C<6;C++)!Tt&&!It?J[C]=_(M.image[C],!1,!0,s.maxCubemapSize):J[C]=It?M.image[C].image:M.image[C],J[C]=Dt(M,J[C]);const Kt=J[0],zt=p(Kt)||a,Ct=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),ut=y(M.internalFormat,Ct,vt,M.colorSpace),Nt=a&&M.isVideoTexture!==!0,P=tt.__version===void 0||it===!0,st=Z.dataReady;let ct=A(M,Kt,zt);Mt(i.TEXTURE_CUBE_MAP,M,zt);let bt;if(Tt){Nt&&P&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ut,Kt.width,Kt.height);for(let C=0;C<6;C++){bt=J[C].mipmaps;for(let nt=0;nt<bt.length;nt++){const Q=bt[nt];M.format!==sn?Ct!==null?Nt?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,0,0,Q.width,Q.height,Ct,Q.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,ut,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,0,0,Q.width,Q.height,Ct,vt,Q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt,ut,Q.width,Q.height,0,Ct,vt,Q.data)}}}else{bt=M.mipmaps,Nt&&P&&(bt.length>0&&ct++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ut,J[0].width,J[0].height));for(let C=0;C<6;C++)if(It){Nt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,J[C].width,J[C].height,Ct,vt,J[C].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ut,J[C].width,J[C].height,0,Ct,vt,J[C].data);for(let nt=0;nt<bt.length;nt++){const gt=bt[nt].image[C].image;Nt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,0,0,gt.width,gt.height,Ct,vt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,ut,gt.width,gt.height,0,Ct,vt,gt.data)}}else{Nt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Ct,vt,J[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ut,Ct,vt,J[C]);for(let nt=0;nt<bt.length;nt++){const Q=bt[nt];Nt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,0,0,Ct,vt,Q.image[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,nt+1,ut,Ct,vt,Q.image[C])}}}b(M,zt)&&v(i.TEXTURE_CUBE_MAP),tt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Et(T,M,k,it,Z,tt){const mt=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),ft=y(k.internalFormat,mt,lt,k.colorSpace);if(!n.get(M).__hasExternalTextures){const It=Math.max(1,M.width>>tt),J=Math.max(1,M.height>>tt);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,ft,It,J,M.depth,0,mt,lt,null):e.texImage2D(Z,tt,ft,It,J,0,mt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),_t(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Z,n.get(k).__webglTexture,0,Rt(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,Z,n.get(k).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(T,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let it=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||_t(M)){const Z=M.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Cn?it=i.DEPTH_COMPONENT32F:Z.type===Yn&&(it=i.DEPTH_COMPONENT24));const tt=Rt(M);_t(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,it,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,it,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const it=Rt(M);k&&_t(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,M.width,M.height):_t(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const it=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0;Z<it.length;Z++){const tt=it[Z],mt=r.convert(tt.format,tt.colorSpace),lt=r.convert(tt.type),ft=y(tt.internalFormat,mt,lt,tt.colorSpace),Tt=Rt(M);k&&_t(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ft,M.width,M.height):_t(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const it=n.get(M.depthTexture).__webglTexture,Z=Rt(M);if(M.depthTexture.format===Si)_t(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(M.depthTexture.format===us)_t(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Yt(T){const M=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,T)}else if(k){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]=i.createRenderbuffer(),At(M.__webglDepthbuffer[it],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),At(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,M,k){const it=n.get(T);M!==void 0&&Et(it.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Yt(T)}function U(T){const M=T.texture,k=n.get(T),it=n.get(M);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,o.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,tt=T.isWebGLMultipleRenderTargets===!0,mt=p(T)||a;if(Z){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let ft=0;ft<M.mipmaps.length;ft++)k.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else k.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)k.__webglFramebuffer[lt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(tt)if(s.drawBuffers){const lt=T.texture;for(let ft=0,Tt=lt.length;ft<Tt;ft++){const It=n.get(lt[ft]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&_t(T)===!1){const lt=tt?M:[M];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ft=0;ft<lt.length;ft++){const Tt=lt[ft];k.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ft]);const It=r.convert(Tt.format,Tt.colorSpace),J=r.convert(Tt.type),Kt=y(Tt.internalFormat,It,J,Tt.colorSpace,T.isXRRenderTarget===!0),zt=Rt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Kt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,k.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),At(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,M,mt);for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Et(k.__webglFramebuffer[lt][ft],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else Et(k.__webglFramebuffer[lt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);b(M,mt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const lt=T.texture;for(let ft=0,Tt=lt.length;ft<Tt;ft++){const It=lt[ft],J=n.get(It);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Mt(i.TEXTURE_2D,It,mt),Et(k.__webglFramebuffer,T,It,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),b(It,mt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,it.__webglTexture),Mt(lt,M,mt),a&&M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Et(k.__webglFramebuffer[ft],T,M,i.COLOR_ATTACHMENT0,lt,ft);else Et(k.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,lt,0);b(M,mt)&&v(lt),e.unbindTexture()}T.depthBuffer&&Yt(T)}function me(T){const M=p(T)||a,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let it=0,Z=k.length;it<Z;it++){const tt=k[it];if(b(tt,M)){const mt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(tt).__webglTexture;e.bindTexture(mt,lt),v(mt),e.unbindTexture()}}}function yt(T){if(a&&T.samples>0&&_t(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,it=T.height;let Z=i.COLOR_BUFFER_BIT;const tt=[],mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(T),ft=T.isWebGLMultipleRenderTargets===!0;if(ft)for(let Tt=0;Tt<M.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){tt.push(i.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&tt.push(mt);const It=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(It===!1&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ft&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]),It===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[mt])),ft){const J=n.get(M[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,k,it,0,0,k,it,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Tt=0;Tt<M.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Tt]);const It=n.get(M[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Rt(T){return Math.min(s.maxSamples,T.samples)}function _t(T){const M=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ne(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Dt(T,M){const k=T.colorSpace,it=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Va||k!==On&&k!==Je&&(Qt.getTransfer(k)===ie?a===!1?t.has("EXT_sRGB")===!0&&it===sn?(T.format=Va,T.minFilter=ke,T.generateMipmaps=!1):M=Rd.sRGBToLinear(M):(it!==sn||Z!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=_t}function MS(i,t,e){const n=e.isWebGL2;function s(r,o=Je){let a;const l=Qt.getTransfer(o);if(r===Kn)return i.UNSIGNED_BYTE;if(r===vd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Hx)return i.BYTE;if(r===Vx)return i.SHORT;if(r===ll)return i.UNSIGNED_SHORT;if(r===xd)return i.INT;if(r===Yn)return i.UNSIGNED_INT;if(r===Cn)return i.FLOAT;if(r===$s)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Gx)return i.ALPHA;if(r===sn)return i.RGBA;if(r===Wx)return i.LUMINANCE;if(r===Xx)return i.LUMINANCE_ALPHA;if(r===Si)return i.DEPTH_COMPONENT;if(r===us)return i.DEPTH_STENCIL;if(r===Va)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Yx)return i.RED;if(r===Md)return i.RED_INTEGER;if(r===jx)return i.RG;if(r===yd)return i.RG_INTEGER;if(r===Sd)return i.RGBA_INTEGER;if(r===Wo||r===Xo||r===Yo||r===jo)if(l===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kc||r===Zc||r===Jc||r===Qc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ed)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===th||r===eh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===th)return l===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===eh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===nh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ah)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ch)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ph)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mh)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qo||r===gh||r===_h)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===qo)return l===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qx||r===xh||r===vh||r===bh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===qo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===yi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class yS extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ds extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SS={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ds;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ES=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
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

}`;class AS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new ei({extensions:{fragDepth:!0},vertexShader:ES,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pn(new sr(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class wS extends Pi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new AS,p=e.getContextAttributes();let m=null,b=null;const v=[],y=[],A=new kt;let R=null;const S=new Ze;S.layers.enable(1),S.viewport=new Ee;const D=new Ze;D.layers.enable(2),D.viewport=new Ee;const W=[S,D],x=new yS;x.layers.enable(1),x.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=v[V];return K===void 0&&(K=new _a,v[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=v[V];return K===void 0&&(K=new _a,v[V]=K),K.getGripSpace()},this.getHand=function(V){let K=v[V];return K===void 0&&(K=new _a,v[V]=K),K.getHandSpace()};function q(V){const K=y.indexOf(V.inputSource);if(K===-1)return;const ht=v[K];ht!==void 0&&(ht.update(V.inputSource,V.frame,c||o),ht.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",N);for(let V=0;V<v.length;V++){const K=y[V];K!==null&&(y[V]=null,v[V].disconnect(K))}w=null,B=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,b=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",L),s.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ri(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ht=null,Et=null;p.depth&&(Et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?us:Si,ht=p.stencil?yi:Yn);const At={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ri(d.textureWidth,d.textureHeight,{format:sn,type:Kn,depthTexture:new Hd(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const pt=t.properties.get(b);pt.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(V){for(let K=0;K<V.removed.length;K++){const ht=V.removed[K],Et=y.indexOf(ht);Et>=0&&(y[Et]=null,v[Et].disconnect(ht))}for(let K=0;K<V.added.length;K++){const ht=V.added[K];let Et=y.indexOf(ht);if(Et===-1){for(let pt=0;pt<v.length;pt++)if(pt>=y.length){y.push(ht),Et=pt;break}else if(y[pt]===null){y[pt]=ht,Et=pt;break}if(Et===-1)break}const At=v[Et];At&&At.connect(ht)}}const O=new F,X=new F;function Y(V,K,ht){O.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ht.matrixWorld);const Et=O.distanceTo(X),At=K.projectionMatrix.elements,pt=ht.projectionMatrix.elements,Yt=At[14]/(At[10]-1),Lt=At[14]/(At[10]+1),U=(At[9]+1)/At[5],me=(At[9]-1)/At[5],yt=(At[8]-1)/At[0],Rt=(pt[8]+1)/pt[0],_t=Yt*yt,ne=Yt*Rt,Dt=Et/(-yt+Rt),T=Dt*-yt;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(T),V.translateZ(Dt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const M=Yt+Dt,k=Lt+Dt,it=_t-T,Z=ne+(Et-T),tt=U*Lt/k*M,mt=me*Lt/k*M;V.projectionMatrix.makePerspective(it,Z,tt,mt,M,k),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),x.near=D.near=S.near=V.near,x.far=D.far=S.far=V.far,(w!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,B=x.far,S.near=w,S.far=B,D.near=w,D.far=B,S.updateProjectionMatrix(),D.updateProjectionMatrix(),V.updateProjectionMatrix());const K=V.parent,ht=x.cameras;j(x,K);for(let Et=0;Et<ht.length;Et++)j(ht[Et],K);ht.length===2?Y(x,S,D):x.projectionMatrix.copy(S.projectionMatrix),$(V,x,K)};function $(V,K,ht){ht===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ht.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ks*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let et=null;function ot(V,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Et=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,Et=!0);for(let pt=0;pt<ht.length;pt++){const Yt=ht[pt];let Lt=null;if(f!==null)Lt=f.getViewport(Yt);else{const me=u.getViewSubImage(d,Yt);Lt=me.viewport,pt===0&&(t.setRenderTargetTextures(b,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let U=W[pt];U===void 0&&(U=new Ze,U.layers.enable(pt),U.viewport=new Ee,W[pt]=U),U.matrix.fromArray(Yt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Yt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Et===!0&&x.cameras.push(U)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const pt=u.getDepthInformation(ht[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,s.renderState)}}for(let ht=0;ht<v.length;ht++){const Et=y[ht],At=v[ht];Et!==null&&At!==void 0&&At.update(Et,K,c||o)}_.render(t,x),et&&et(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Mt=new zd;Mt.setAnimationLoop(ot),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}function RS(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function CS(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){const y=v.program;n.uniformBlockBinding(b,y)}function c(b,v){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(b,A);const R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function h(b){const v=u();b.__bindingPointIndex=v;const y=i.createBuffer(),A=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const v=s[b.id],y=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,S=y.length;R<S;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let W=0,x=D.length;W<x;W++){const w=D[W];if(f(w,R,W,A)===!0){const B=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let N=0;N<q.length;N++){const O=q[N],X=_(O);typeof O=="number"||typeof O=="boolean"?(w.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,B+L,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=0,w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=0,w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=0):(O.toArray(w.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,y,A){const R=b.value,S=v+"_"+y;if(A[S]===void 0)return typeof R=="number"||typeof R=="boolean"?A[S]=R:A[S]=R.clone(),!0;{const D=A[S];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return A[S]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(b){const v=b.uniforms;let y=0;const A=16;for(let S=0,D=v.length;S<D;S++){const W=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,w=W.length;x<w;x++){const B=W[x],q=Array.isArray(B.value)?B.value:[B.value];for(let L=0,N=q.length;L<N;L++){const O=q[L],X=_(O),Y=y%A;Y!==0&&A-Y<X.boundary&&(y+=A-Y),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=X.storage}}}const R=y%A;return R>0&&(y+=A-R),b.__size=y,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class jd{constructor(t={}){const{canvas:e=M0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let y=!1,A=0,R=0,S=null,D=-1,W=null;const x=new Ee,w=new Ee;let B=null;const q=new Jt(0);let L=0,N=e.width,O=e.height,X=1,Y=null,j=null;const $=new Ee(0,0,N,O),et=new Ee(0,0,N,O);let ot=!1;const Mt=new Bd;let V=!1,K=!1,ht=null;const Et=new Te,At=new kt,pt=new F,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return S===null?X:1}let U=n;function me(E,I){for(let H=0;H<E.length;H++){const G=E[H],z=e.getContext(G,I);if(z!==null)return z}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",nt,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),U=me(I,E),U===null)throw me(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,Rt,_t,ne,Dt,T,M,k,it,Z,tt,mt,lt,ft,Tt,It,J,Kt,zt,Ct,vt,ut,Nt,P;function st(){yt=new NM(U),Rt=new CM(U,yt,t),yt.init(Rt),ut=new MS(U,yt,Rt),_t=new vS(U,yt,Rt),ne=new BM(U),Dt=new rS,T=new bS(U,yt,_t,Dt,Rt,ut,ne),M=new LM(v),k=new UM(v),it=new Y0(U,Rt),Nt=new wM(U,yt,it,Rt),Z=new FM(U,it,ne,Nt),tt=new GM(U,Z,it,ne),zt=new VM(U,Rt,T),It=new PM(Dt),mt=new sS(v,M,k,yt,Rt,Nt,It),lt=new RS(v,Dt),ft=new aS,Tt=new fS(yt,Rt),Kt=new AM(v,M,k,_t,tt,d,l),J=new xS(v,tt,Rt),P=new CS(U,ne,Rt,_t),Ct=new RM(U,yt,ne,Rt),vt=new kM(U,yt,ne,Rt),ne.programs=mt.programs,v.capabilities=Rt,v.extensions=yt,v.properties=Dt,v.renderLists=ft,v.shadowMap=J,v.state=_t,v.info=ne}st();const ct=new wS(v,U);this.xr=ct,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(N,O,!1))},this.getSize=function(E){return E.set(N,O)},this.setSize=function(E,I,H=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,O=I,e.width=Math.floor(E*X),e.height=Math.floor(I*X),H===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(N*X,O*X).floor()},this.setDrawingBufferSize=function(E,I,H){N=E,O=I,X=H,e.width=Math.floor(E*H),e.height=Math.floor(I*H),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,I,H,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,I,H,G),_t.viewport(x.copy($).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(et)},this.setScissor=function(E,I,H,G){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,I,H,G),_t.scissor(w.copy(et).multiplyScalar(X).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){_t.setScissorTest(ot=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(E=!0,I=!0,H=!0){let G=0;if(E){let z=!1;if(S!==null){const dt=S.texture.format;z=dt===Sd||dt===yd||dt===Md}if(z){const dt=S.texture.type,xt=dt===Kn||dt===Yn||dt===ll||dt===yi||dt===vd||dt===bd,wt=Kt.getClearColor(),Pt=Kt.getClearAlpha(),Ht=wt.r,Ot=wt.g,Ft=wt.b;xt?(f[0]=Ht,f[1]=Ot,f[2]=Ft,f[3]=Pt,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Ht,g[1]=Ot,g[2]=Ft,g[3]=Pt,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}I&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),ft.dispose(),Tt.dispose(),Dt.dispose(),M.dispose(),k.dispose(),tt.dispose(),Nt.dispose(),P.dispose(),mt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ye),ct.removeEventListener("sessionend",$t),ht&&(ht.dispose(),ht=null),ue.stop()};function bt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=ne.autoReset,I=J.enabled,H=J.autoUpdate,G=J.needsUpdate,z=J.type;st(),ne.autoReset=E,J.enabled=I,J.autoUpdate=H,J.needsUpdate=G,J.type=z}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const I=E.target;I.removeEventListener("dispose",Q),gt(I)}function gt(E){St(E),Dt.remove(E)}function St(E){const I=Dt.get(E).programs;I!==void 0&&(I.forEach(function(H){mt.releaseProgram(H)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,H,G,z,dt){I===null&&(I=Yt);const xt=z.isMesh&&z.matrixWorld.determinant()<0,wt=$d(E,I,H,G,z);_t.setMaterial(G,xt);let Pt=H.index,Ht=1;if(G.wireframe===!0){if(Pt=Z.getWireframeAttribute(H),Pt===void 0)return;Ht=2}const Ot=H.drawRange,Ft=H.attributes.position;let de=Ot.start*Ht,Ge=(Ot.start+Ot.count)*Ht;dt!==null&&(de=Math.max(de,dt.start*Ht),Ge=Math.min(Ge,(dt.start+dt.count)*Ht)),Pt!==null?(de=Math.max(de,0),Ge=Math.min(Ge,Pt.count)):Ft!=null&&(de=Math.max(de,0),Ge=Math.min(Ge,Ft.count));const ve=Ge-de;if(ve<0||ve===1/0)return;Nt.setup(z,G,wt,H,Pt);let _n,ae=Ct;if(Pt!==null&&(_n=it.get(Pt),ae=vt,ae.setIndex(_n)),z.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*Lt()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(z.isLine){let Vt=G.linewidth;Vt===void 0&&(Vt=1),_t.setLineWidth(Vt*Lt()),z.isLineSegments?ae.setMode(U.LINES):z.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else z.isPoints?ae.setMode(U.POINTS):z.isSprite&&ae.setMode(U.TRIANGLES);if(z.isBatchedMesh)ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ae.renderInstances(de,ve,z.count);else if(H.isInstancedBufferGeometry){const Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,wo=Math.min(H.instanceCount,Vt);ae.renderInstances(de,ve,wo)}else ae.render(de,ve)};function qt(E,I,H){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=ze,E.needsUpdate=!0,or(E,I,H),E.side=Qn,E.needsUpdate=!0,or(E,I,H),E.side=dn):or(E,I,H)}this.compile=function(E,I,H=null){H===null&&(H=E),p=Tt.get(H),p.init(),b.push(p),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v._useLegacyLights);const G=new Set;return E.traverse(function(z){const dt=z.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){const wt=dt[xt];qt(wt,H,z),G.add(wt)}else qt(dt,H,z),G.add(dt)}),b.pop(),p=null,G},this.compileAsync=function(E,I,H=null){const G=this.compile(E,I,H);return new Promise(z=>{function dt(){if(G.forEach(function(xt){Dt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){z(E);return}setTimeout(dt,10)}yt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Wt=null;function te(E){Wt&&Wt(E)}function ye(){ue.stop()}function $t(){ue.start()}const ue=new zd;ue.setAnimationLoop(te),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(E){Wt=E,ct.setAnimationLoop(E),E===null?ue.stop():ue.start()},ct.addEventListener("sessionstart",ye),ct.addEventListener("sessionend",$t),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(I),I=ct.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,S),p=Tt.get(E,b.length),p.init(),b.push(p),Et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Mt.setFromProjectionMatrix(Et),K=this.localClippingEnabled,V=It.init(this.clippingPlanes,K),_=ft.get(E,m.length),_.init(),m.push(_),Ie(E,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,j),this.info.render.frame++,V===!0&&It.beginShadows();const H=p.state.shadowsArray;if(J.render(H,E,I),V===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&Kt.render(_,E),p.setupLights(v._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let z=0,dt=G.length;z<dt;z++){const xt=G[z];pl(_,E,xt,xt.viewport)}}else pl(_,E,I);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(v,E,I),Nt.resetDefaultState(),D=-1,W=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ie(E,I,H,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Mt.intersectsSprite(E)){G&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);const xt=tt.update(E),wt=E.material;wt.visible&&_.push(E,xt,wt,H,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Mt.intersectsObject(E))){const xt=tt.update(E),wt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),pt.copy(xt.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(wt)){const Pt=xt.groups;for(let Ht=0,Ot=Pt.length;Ht<Ot;Ht++){const Ft=Pt[Ht],de=wt[Ft.materialIndex];de&&de.visible&&_.push(E,xt,de,H,pt.z,Ft)}}else wt.visible&&_.push(E,xt,wt,H,pt.z,null)}}const dt=E.children;for(let xt=0,wt=dt.length;xt<wt;xt++)Ie(dt[xt],I,H,G)}function pl(E,I,H,G){const z=E.opaque,dt=E.transmissive,xt=E.transparent;p.setupLightsView(H),V===!0&&It.setGlobalState(v.clippingPlanes,H),dt.length>0&&qd(z,dt,I,H),G&&_t.viewport(x.copy(G)),z.length>0&&rr(z,I,H),dt.length>0&&rr(dt,I,H),xt.length>0&&rr(xt,I,H),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function qd(E,I,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const dt=Rt.isWebGL2;ht===null&&(ht=new Ri(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?$s:Kn,minFilter:vi,samples:dt?4:0})),v.getDrawingBufferSize(At),dt?ht.setSize(At.x,At.y):ht.setSize(mo(At.x),mo(At.y));const xt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const wt=v.toneMapping;v.toneMapping=$n,rr(E,H,G),T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht);let Pt=!1;for(let Ht=0,Ot=I.length;Ht<Ot;Ht++){const Ft=I[Ht],de=Ft.object,Ge=Ft.geometry,ve=Ft.material,_n=Ft.group;if(ve.side===dn&&de.layers.test(G.layers)){const ae=ve.side;ve.side=ze,ve.needsUpdate=!0,ml(de,H,G,Ge,ve,_n),ve.side=ae,ve.needsUpdate=!0,Pt=!0}}Pt===!0&&(T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht)),v.setRenderTarget(xt),v.setClearColor(q,L),v.toneMapping=wt}function rr(E,I,H){const G=I.isScene===!0?I.overrideMaterial:null;for(let z=0,dt=E.length;z<dt;z++){const xt=E[z],wt=xt.object,Pt=xt.geometry,Ht=G===null?xt.material:G,Ot=xt.group;wt.layers.test(H.layers)&&ml(wt,I,H,Pt,Ht,Ot)}}function ml(E,I,H,G,z,dt){E.onBeforeRender(v,I,H,G,z,dt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,I,H,G,E,dt),z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=ze,z.needsUpdate=!0,v.renderBufferDirect(H,I,G,z,E,dt),z.side=Qn,z.needsUpdate=!0,v.renderBufferDirect(H,I,G,z,E,dt),z.side=dn):v.renderBufferDirect(H,I,G,z,E,dt),E.onAfterRender(v,I,H,G,z,dt)}function or(E,I,H){I.isScene!==!0&&(I=Yt);const G=Dt.get(E),z=p.state.lights,dt=p.state.shadowsArray,xt=z.state.version,wt=mt.getParameters(E,z.state,dt,I,H),Pt=mt.getProgramCacheKey(wt);let Ht=G.programs;G.environment=E.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||G.environment),Ht===void 0&&(E.addEventListener("dispose",Q),Ht=new Map,G.programs=Ht);let Ot=Ht.get(Pt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===xt)return _l(E,wt),Ot}else wt.uniforms=mt.getUniforms(E),E.onBuild(H,wt,v),E.onBeforeCompile(wt,v),Ot=mt.acquireProgram(wt,Pt),Ht.set(Pt,Ot),G.uniforms=wt.uniforms;const Ft=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=It.uniform),_l(E,wt),G.needsLights=Zd(E),G.lightsStateVersion=xt,G.needsLights&&(Ft.ambientLightColor.value=z.state.ambient,Ft.lightProbe.value=z.state.probe,Ft.directionalLights.value=z.state.directional,Ft.directionalLightShadows.value=z.state.directionalShadow,Ft.spotLights.value=z.state.spot,Ft.spotLightShadows.value=z.state.spotShadow,Ft.rectAreaLights.value=z.state.rectArea,Ft.ltc_1.value=z.state.rectAreaLTC1,Ft.ltc_2.value=z.state.rectAreaLTC2,Ft.pointLights.value=z.state.point,Ft.pointLightShadows.value=z.state.pointShadow,Ft.hemisphereLights.value=z.state.hemi,Ft.directionalShadowMap.value=z.state.directionalShadowMap,Ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ft.spotShadowMap.value=z.state.spotShadowMap,Ft.spotLightMatrix.value=z.state.spotLightMatrix,Ft.spotLightMap.value=z.state.spotLightMap,Ft.pointShadowMap.value=z.state.pointShadowMap,Ft.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function gl(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Jr.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function _l(E,I){const H=Dt.get(E);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function $d(E,I,H,G,z){I.isScene!==!0&&(I=Yt),T.resetTextureUnits();const dt=I.fog,xt=G.isMeshStandardMaterial?I.environment:null,wt=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:On,Pt=(G.isMeshStandardMaterial?k:M).get(G.envMap||xt),Ht=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!H.morphAttributes.position,de=!!H.morphAttributes.normal,Ge=!!H.morphAttributes.color;let ve=$n;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ve=v.toneMapping);const _n=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=_n!==void 0?_n.length:0,Vt=Dt.get(G),wo=p.state.lights;if(V===!0&&(K===!0||E!==W)){const qe=E===W&&G.id===D;It.setState(G,E,qe)}let le=!1;G.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==wo.state.version||Vt.outputColorSpace!==wt||z.isBatchedMesh&&Vt.batching===!1||!z.isBatchedMesh&&Vt.batching===!0||z.isInstancedMesh&&Vt.instancing===!1||!z.isInstancedMesh&&Vt.instancing===!0||z.isSkinnedMesh&&Vt.skinning===!1||!z.isSkinnedMesh&&Vt.skinning===!0||z.isInstancedMesh&&Vt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Vt.instancingColor===!1&&z.instanceColor!==null||Vt.envMap!==Pt||G.fog===!0&&Vt.fog!==dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==It.numPlanes||Vt.numIntersection!==It.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Ot||Vt.morphTargets!==Ft||Vt.morphNormals!==de||Vt.morphColors!==Ge||Vt.toneMapping!==ve||Rt.isWebGL2===!0&&Vt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Vt.__version=G.version);let ii=Vt.currentProgram;le===!0&&(ii=or(G,I,z));let xl=!1,ms=!1,Ro=!1;const Ae=ii.getUniforms(),si=Vt.uniforms;if(_t.useProgram(ii.program)&&(xl=!0,ms=!0,Ro=!0),G.id!==D&&(D=G.id,ms=!0),xl||W!==E){Ae.setValue(U,"projectionMatrix",E.projectionMatrix),Ae.setValue(U,"viewMatrix",E.matrixWorldInverse);const qe=Ae.map.cameraPosition;qe!==void 0&&qe.setValue(U,pt.setFromMatrixPosition(E.matrixWorld)),Rt.logarithmicDepthBuffer&&Ae.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,ms=!0,Ro=!0)}if(z.isSkinnedMesh){Ae.setOptional(U,z,"bindMatrix"),Ae.setOptional(U,z,"bindMatrixInverse");const qe=z.skeleton;qe&&(Rt.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Ae.setValue(U,"boneTexture",qe.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ae.setOptional(U,z,"batchingTexture"),Ae.setValue(U,"batchingTexture",z._matricesTexture,T));const Co=H.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0&&Rt.isWebGL2===!0)&&zt.update(z,H,ii),(ms||Vt.receiveShadow!==z.receiveShadow)&&(Vt.receiveShadow=z.receiveShadow,Ae.setValue(U,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(si.envMap.value=Pt,si.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),ms&&(Ae.setValue(U,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Kd(si,Ro),dt&&G.fog===!0&&lt.refreshFogUniforms(si,dt),lt.refreshMaterialUniforms(si,G,X,O,ht),Jr.upload(U,gl(Vt),si,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Jr.upload(U,gl(Vt),si,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(U,"center",z.center),Ae.setValue(U,"modelViewMatrix",z.modelViewMatrix),Ae.setValue(U,"normalMatrix",z.normalMatrix),Ae.setValue(U,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qe=G.uniformsGroups;for(let Po=0,Jd=qe.length;Po<Jd;Po++)if(Rt.isWebGL2){const vl=qe[Po];P.update(vl,ii),P.bind(vl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Kd(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Zd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,I,H){Dt.get(E.texture).__webglTexture=I,Dt.get(E.depthTexture).__webglTexture=H;const G=Dt.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const H=Dt.get(E);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,H=0){S=E,A=I,R=H;let G=!0,z=null,dt=!1,xt=!1;if(E){const Pt=Dt.get(E);Pt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):Pt.__webglFramebuffer===void 0?T.setupRenderTarget(E):Pt.__hasExternalTextures&&T.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);const Ot=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[I])?z=Ot[I][H]:z=Ot[I],dt=!0):Rt.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?z=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[H]:z=Ot,x.copy(E.viewport),w.copy(E.scissor),B=E.scissorTest}else x.copy($).multiplyScalar(X).floor(),w.copy(et).multiplyScalar(X).floor(),B=ot;if(_t.bindFramebuffer(U.FRAMEBUFFER,z)&&Rt.drawBuffers&&G&&_t.drawBuffers(E,z),_t.viewport(x),_t.scissor(w),_t.setScissorTest(B),dt){const Pt=Dt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pt.__webglTexture,H)}else if(xt){const Pt=Dt.get(E.texture),Ht=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,H||0,Ht)}D=-1},this.readRenderTargetPixels=function(E,I,H,G,z,dt,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){_t.bindFramebuffer(U.FRAMEBUFFER,wt);try{const Pt=E.texture,Ht=Pt.format,Ot=Pt.type;if(Ht!==sn&&ut.convert(Ht)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ot===$s&&(yt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ot!==Kn&&ut.convert(Ot)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Cn&&(Rt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&H>=0&&H<=E.height-z&&U.readPixels(I,H,G,z,ut.convert(Ht),ut.convert(Ot),dt)}finally{const Pt=S!==null?Dt.get(S).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(E,I,H=0){const G=Math.pow(2,-H),z=Math.floor(I.image.width*G),dt=Math.floor(I.image.height*G);T.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,E.x,E.y,z,dt),_t.unbindTexture()},this.copyTextureToTexture=function(E,I,H,G=0){const z=I.image.width,dt=I.image.height,xt=ut.convert(H.format),wt=ut.convert(H.type);T.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,E.x,E.y,z,dt,xt,wt,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,xt,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,E.x,E.y,xt,wt,I.image),G===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,I,H,G,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=E.max.x-E.min.x+1,xt=E.max.y-E.min.y+1,wt=E.max.z-E.min.z+1,Pt=ut.convert(G.format),Ht=ut.convert(G.type);let Ot;if(G.isData3DTexture)T.setTexture3D(G,0),Ot=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)T.setTexture2DArray(G,0),Ot=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Ft=U.getParameter(U.UNPACK_ROW_LENGTH),de=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ge=U.getParameter(U.UNPACK_SKIP_PIXELS),ve=U.getParameter(U.UNPACK_SKIP_ROWS),_n=U.getParameter(U.UNPACK_SKIP_IMAGES),ae=H.isCompressedTexture?H.mipmaps[z]:H.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?U.texSubImage3D(Ot,z,I.x,I.y,I.z,dt,xt,wt,Pt,Ht,ae.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ot,z,I.x,I.y,I.z,dt,xt,wt,Pt,ae.data)):U.texSubImage3D(Ot,z,I.x,I.y,I.z,dt,xt,wt,Pt,Ht,ae),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ft),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,_n),z===0&&G.generateMipmaps&&U.generateMipmap(Ot),_t.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){A=0,R=0,S=null,_t.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===cl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?Ei:Td}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ei?Se:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class PS extends jd{}PS.prototype.isWebGL1Renderer=!0;class LS extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class DS extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class IS extends DS{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class uu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);const du={type:"change"},xa={type:"start"},fu={type:"end"},Vr=new Ld,pu=new Hn,OS=Math.cos(70*b0.DEG2RAD);class US extends Pi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Tt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(du),n.update(),r=s.NONE},this.update=function(){const P=new F,st=new ti().setFromUnitVectors(t.up,new F(0,1,0)),ct=st.clone().invert(),bt=new F,C=new ti,nt=new F,Q=2*Math.PI;return function(St=null){const qt=n.object.position;P.copy(qt).sub(n.target),P.applyQuaternion(st),a.setFromVector3(P),n.autoRotate&&r===s.NONE&&B(x(St)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Wt=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(Wt)&&isFinite(te)&&(Wt<-Math.PI?Wt+=Q:Wt>Math.PI&&(Wt-=Q),te<-Math.PI?te+=Q:te>Math.PI&&(te-=Q),Wt<=te?a.theta=Math.max(Wt,Math.min(te,a.theta)):a.theta=a.theta>(Wt+te)/2?Math.max(Wt,a.theta):Math.min(te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(ct),qt.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ye=!1;if(n.zoomToCursor&&R){let $t=null;if(n.object.isPerspectiveCamera){const ue=P.length();$t=$(ue*c);const Ie=ue-$t;n.object.position.addScaledVector(y,Ie),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ue=new F(A.x,A.y,0);ue.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ye=!0;const Ie=new F(A.x,A.y,0);Ie.unproject(n.object),n.object.position.sub(Ie).add(ue),n.object.updateMatrixWorld(),$t=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($t).add(n.object.position):(Vr.origin.copy(n.object.position),Vr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vr.direction))<OS?t.lookAt(n.target):(pu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vr.intersectPlane(pu,n.target))))}else n.object.isOrthographicCamera&&(ye=c!==1,ye&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,R=!1,ye||bt.distanceToSquared(n.object.position)>o||8*(1-C.dot(n.object.quaternion))>o||nt.distanceToSquared(n.target)>0?(n.dispatchEvent(du),bt.copy(n.object.position),C.copy(n.object.quaternion),nt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Kt),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",k),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",k),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new uu,l=new uu;let c=1;const h=new F,u=new kt,d=new kt,f=new kt,g=new kt,_=new kt,p=new kt,m=new kt,b=new kt,v=new kt,y=new F,A=new kt;let R=!1;const S=[],D={};let W=!1;function x(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function w(P){const st=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*st)}function B(P){l.theta-=P}function q(P){l.phi-=P}const L=function(){const P=new F;return function(ct,bt){P.setFromMatrixColumn(bt,0),P.multiplyScalar(-ct),h.add(P)}}(),N=function(){const P=new F;return function(ct,bt){n.screenSpacePanning===!0?P.setFromMatrixColumn(bt,1):(P.setFromMatrixColumn(bt,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ct),h.add(P)}}(),O=function(){const P=new F;return function(ct,bt){const C=n.domElement;if(n.object.isPerspectiveCamera){const nt=n.object.position;P.copy(nt).sub(n.target);let Q=P.length();Q*=Math.tan(n.object.fov/2*Math.PI/180),L(2*ct*Q/C.clientHeight,n.object.matrix),N(2*bt*Q/C.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(ct*(n.object.right-n.object.left)/n.object.zoom/C.clientWidth,n.object.matrix),N(bt*(n.object.top-n.object.bottom)/n.object.zoom/C.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P,st){if(!n.zoomToCursor)return;R=!0;const ct=n.domElement.getBoundingClientRect(),bt=P-ct.left,C=st-ct.top,nt=ct.width,Q=ct.height;A.x=bt/nt*2-1,A.y=-(C/Q)*2+1,y.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function et(P){u.set(P.clientX,P.clientY)}function ot(P){j(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function Mt(P){g.set(P.clientX,P.clientY)}function V(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const st=n.domElement;B(2*Math.PI*f.x/st.clientHeight),q(2*Math.PI*f.y/st.clientHeight),u.copy(d),n.update()}function K(P){b.set(P.clientX,P.clientY),v.subVectors(b,m),v.y>0?X(w(v.y)):v.y<0&&Y(w(v.y)),m.copy(b),n.update()}function ht(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(_),n.update()}function Et(P){j(P.clientX,P.clientY),P.deltaY<0?Y(w(P.deltaY)):P.deltaY>0&&X(w(P.deltaY)),n.update()}function At(P){let st=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),st=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),st=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),st=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),st=!0;break}st&&(P.preventDefault(),n.update())}function pt(P){if(S.length===1)u.set(P.pageX,P.pageY);else{const st=ut(P),ct=.5*(P.pageX+st.x),bt=.5*(P.pageY+st.y);u.set(ct,bt)}}function Yt(P){if(S.length===1)g.set(P.pageX,P.pageY);else{const st=ut(P),ct=.5*(P.pageX+st.x),bt=.5*(P.pageY+st.y);g.set(ct,bt)}}function Lt(P){const st=ut(P),ct=P.pageX-st.x,bt=P.pageY-st.y,C=Math.sqrt(ct*ct+bt*bt);m.set(0,C)}function U(P){n.enableZoom&&Lt(P),n.enablePan&&Yt(P)}function me(P){n.enableZoom&&Lt(P),n.enableRotate&&pt(P)}function yt(P){if(S.length==1)d.set(P.pageX,P.pageY);else{const ct=ut(P),bt=.5*(P.pageX+ct.x),C=.5*(P.pageY+ct.y);d.set(bt,C)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const st=n.domElement;B(2*Math.PI*f.x/st.clientHeight),q(2*Math.PI*f.y/st.clientHeight),u.copy(d)}function Rt(P){if(S.length===1)_.set(P.pageX,P.pageY);else{const st=ut(P),ct=.5*(P.pageX+st.x),bt=.5*(P.pageY+st.y);_.set(ct,bt)}p.subVectors(_,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(_)}function _t(P){const st=ut(P),ct=P.pageX-st.x,bt=P.pageY-st.y,C=Math.sqrt(ct*ct+bt*bt);b.set(0,C),v.set(0,Math.pow(b.y/m.y,n.zoomSpeed)),X(v.y),m.copy(b);const nt=(P.pageX+st.x)*.5,Q=(P.pageY+st.y)*.5;j(nt,Q)}function ne(P){n.enableZoom&&_t(P),n.enablePan&&Rt(P)}function Dt(P){n.enableZoom&&_t(P),n.enableRotate&&yt(P)}function T(P){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",k)),zt(P),P.pointerType==="touch"?It(P):it(P))}function M(P){n.enabled!==!1&&(P.pointerType==="touch"?J(P):Z(P))}function k(P){switch(Ct(P),S.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",k),n.dispatchEvent(fu),r=s.NONE;break;case 1:const st=S[0],ct=D[st];It({pointerId:st,pageX:ct.x,pageY:ct.y});break}}function it(P){let st;switch(P.button){case 0:st=n.mouseButtons.LEFT;break;case 1:st=n.mouseButtons.MIDDLE;break;case 2:st=n.mouseButtons.RIGHT;break;default:st=-1}switch(st){case Oi.DOLLY:if(n.enableZoom===!1)return;ot(P),r=s.DOLLY;break;case Oi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Mt(P),r=s.PAN}else{if(n.enableRotate===!1)return;et(P),r=s.ROTATE}break;case Oi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;et(P),r=s.ROTATE}else{if(n.enablePan===!1)return;Mt(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(xa)}function Z(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(P);break;case s.DOLLY:if(n.enableZoom===!1)return;K(P);break;case s.PAN:if(n.enablePan===!1)return;ht(P);break}}function tt(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(xa),Et(mt(P)),n.dispatchEvent(fu))}function mt(P){const st=P.deltaMode,ct={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(st){case 1:ct.deltaY*=16;break;case 2:ct.deltaY*=100;break}return P.ctrlKey&&!W&&(ct.deltaY*=10),ct}function lt(P){P.key==="Control"&&(W=!0,n.domElement.getRootNode().addEventListener("keyup",ft,{passive:!0,capture:!0}))}function ft(P){P.key==="Control"&&(W=!1,n.domElement.getRootNode().removeEventListener("keyup",ft,{passive:!0,capture:!0}))}function Tt(P){n.enabled===!1||n.enablePan===!1||At(P)}function It(P){switch(vt(P),S.length){case 1:switch(n.touches.ONE){case Ui.ROTATE:if(n.enableRotate===!1)return;pt(P),r=s.TOUCH_ROTATE;break;case Ui.PAN:if(n.enablePan===!1)return;Yt(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(P),r=s.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(xa)}function J(P){switch(vt(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Rt(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ne(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(P),n.update();break;default:r=s.NONE}}function Kt(P){n.enabled!==!1&&P.preventDefault()}function zt(P){S.push(P.pointerId)}function Ct(P){delete D[P.pointerId];for(let st=0;st<S.length;st++)if(S[st]==P.pointerId){S.splice(st,1);return}}function vt(P){let st=D[P.pointerId];st===void 0&&(st=new kt,D[P.pointerId]=st),st.set(P.pageX,P.pageY)}function ut(P){const st=P.pointerId===S[0]?S[1]:S[0];return D[st]}n.domElement.addEventListener("contextmenu",Kt),n.domElement.addEventListener("pointerdown",T),n.domElement.addEventListener("pointercancel",k),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",lt,{passive:!0,capture:!0}),this.update()}}let NS="hsl(0, 0%, 100%)";class FS{constructor(t){this.parent=document.getElementById(t),this.canvas=document.createElement("canvas"),this.canvas.classList.add("bg"),this.parent.appendChild(this.canvas),this.scene=new LS,this.light=new IS(NS),this.camera=new Ze(50),this.renderer=new jd({canvas:this.canvas,alpha:!0}),this.controls=new US(this.camera,this.canvas),this.defaults(),this.addResizer(this,this.parent),this.animate(this)}cameraPosition(t){for(const e in t)switch(e){case"x":this.camera.position.x=t[e];break;case"y":this.camera.position.y=t[e];break;case"z":this.camera.position.z=t[e];break}}defaults(){this.renderer.setPixelRatio(window.devicePixelRatio),this.scene.add(this.light),this.scene.add(this.camera),this.cameraPosition({x:2,y:3,z:8}),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.enableZoom=!1}animate(t){requestAnimationFrame(()=>{t.animate(t)}),!t.parent.classList.contains("hidden")&&(t.controls.update(),t.renderer.render(t.scene,t.camera))}addResizer(t,e){new ResizeObserver(s=>{let r={width:e.clientWidth,height:e.clientHeight};t.renderer.setSize(r.width,r.height),t.camera.aspect=r.width/r.height,t.camera.updateProjectionMatrix()}).observe(e)}}let kS="hsl(100, 90%, 50%)",BS="hsl(65, 90%, 50%)";class zS{constructor(t="timer-div",e){this.cube=e,this.div=document.getElementById(t),this.wait_to_start=1e3,this.sTime=0,this.nTime=0,this.time=0,this.held=0,this.waited=!1,this.ready=!0,this.counting=!1,this.interval,document.addEventListener("keyup",n=>{this.div.classList.contains("hidden")||(n.code=="Space"&&!this.counting&&this.ready&&this.waited?(this.ready=!1,this.instructions.innerHTML="Press space",this.start()):this.ready||(this.cube.displayScramble(!0),this.ready=!0,this.instructions.innerHTML="Hold space"),n.code=="Space"&&(this.held=0,this.instructions.style.color="black"))}),document.addEventListener("keydown",n=>{this.div.classList.contains("hidden")||n.code=="Space"&&(n.preventDefault(),this.counting?(this.stop(),this.waited=!1):(this.instructions.style.color=BS,this.held||(this.held=new Date().getTime()),this.wait_to_start-(new Date().getTime()-this.held)<=0?(this.instructions.innerHTML="Release",this.instructions.style.color=kS,this.waited=!0):this.waited=!1))}),this.place(this)}place(t){this.timer=document.createElement("p"),this.minutes=document.createElement("span"),this.seconds=document.createElement("span"),this.miliseconds=document.createElement("span"),this.instructions=document.createElement("span"),this.timer.classList.add("timer"),this.minutes.classList.add("minutes"),this.seconds.classList.add("seconds"),this.miliseconds.classList.add("miliseconds"),this.instructions.id="instructions-span",this.instructions.innerHTML="Hold Space",this.seconds.innerHTML="00",this.miliseconds.innerHTML="00",this.timer.appendChild(this.minutes),this.timer.appendChild(this.seconds),this.timer.appendChild(this.miliseconds),this.div.appendChild(this.timer),this.div.appendChild(this.instructions)}start(){this.counting||(this.sTime=0,this.nTime=0,this.time=0,this.ready=!1,this.counting=!0,this.sTime=new Date().getTime(),this.interval=setInterval(this.count,10,this))}display(t,e=0){e||(e=((t.nTime-t.sTime)/1e3).toFixed(2).toString().split("."));let n=Math.floor(e[0]/60),s=e[0]%60,r=parseInt(e[1]),o=n>0?`${n}:`:"",a=s>9?`${s}`:`0${s}`,l=r>9?`${r}`:`0${r}`;this.minutes.innerHTML=o,this.seconds.innerHTML=a,this.miliseconds.innerHTML=l,parseFloat(`${e[0]}.${e[1]}`)}count(t){t.nTime=new Date().getTime(),t.time=t.nTime-t.sTime,t.display(t)}stop(){this.counting&&(this.counting=!1,clearInterval(this.interval),this.log(this.time/1e3))}log(t){tr.add("sd",t)}}let HS="hsl(100, 90%, 50%)",VS="hsl(0, 0%, 100%)",GS="hsl(225, 90%, 50%)",WS="hsl(65, 90%, 50%)",XS="hsl(0, 90%, 50%)",YS="hsl(30, 90%, 50%)";const hn=class hn{static move_decoder(t){let e=t[0],n=/\d/.test(t)?parseInt(t.replace(/\D/g,"")):1,s=t.includes("'")?-1:1;if(e in hn.moves)return{side:e,times:n,prime:s}}constructor(t,e=null,n=null){this.id=hn.ammount,hn.ammount++,this.scramble_location=e,this.scramble,this.pieces={FUL:null,FUM:null,FUR:null,FML:null,FMM:null,FMR:null,FDL:null,FDM:null,FDR:null,BUL:null,BUM:null,BUR:null,BML:null,BMM:null,BMR:null,BDL:null,BDM:null,BDR:null,UUL:null,UUM:null,UUR:null,UML:null,UMM:null,UMR:null,UDL:null,UDM:null,UDR:null,DUL:null,DUM:null,DUR:null,DML:null,DMM:null,DMR:null,DDL:null,DDM:null,DDR:null,RUL:null,RUM:null,RUR:null,RML:null,RMM:null,RMR:null,RDL:null,RDM:null,RDR:null,LUL:null,LUM:null,LUR:null,LML:null,LMM:null,LMR:null,LDL:null,LDM:null,LDR:null},this.type=t,this.location,n&&(this.timer=new zS(n,this))}move(t){let e=t[0];/\d/.test(t)&&parseInt(t.replace(/\D/g,"")),t.includes("'"),e in hn.moves}updatePieces(t){t=hn.move_decoder(t);let e=t.side,n=t.prime;const s=Object.assign({},this.pieces);console.log(s),hn.moves[e].pairs.forEach(r=>{n==-1&&(this.pieces[r[0]]=s[r[1]]),n==1&&(this.pieces[r[1]]=s[r[0]])})}generateScramble(t=20){let e=[["R","L"],["U","D"],["F","B"]],n=[],s=0,r,o;for(;n.length<t;){let a=Math.floor(Math.random()*2);a=a?"2":"";let l=Math.floor(Math.random()*2);l=l&&!a?"'":"";let c=3,h=3;for(;![0,1,2].includes(c);)c=Math.floor(Math.random()*3);for(;![0,1].includes(h);)h=Math.floor(Math.random()*2);if(c==r&&h==o)continue;if(c==r){if(s++,s>1)continue}else s=0;r=c,o=h;let u=e[c][h]+a+l;n.push(u)}return this.scramble=n,n}displayScramble(t){let e=this.scramble;t&&(e=this.generateScramble());let n="";e.forEach(s=>{n+=s+" "}),n=n.slice(0,-1),document.getElementById(this.scramble_location).innerHTML=n}};rt(hn,"ammount",0),rt(hn,"moves",{R:{pieces:["FDR","FMR","FUR","UDR","UMR","UUR","BUL","BML","BDL","DDR","DMR","DUR","RUR","RUM","RUL","RMR","RMM","RML","RDR","RDM","RDL"],pairs:[["UDR","FDR"],["BUL","UDR"],["DDR","BUL"],["FDR","DDR"],["UUR","FUR"],["BDL","UUR"],["DUR","BDL"],["FUR","DUR"],["UMR","FMR"],["BML","UMR"],["DMR","BML"],["FMR","DMR"],["RDL","RDR"],["RDR","RUR"],["RUR","RUL"],["RUL","RDL"],["RML","RUM"],["RUM","RMR"],["RMR","RDM"],["RDM","RML"]],axes:{x:-1,y:0,z:0}},D:{pieces:["FDR","FDM","FDL","LDR","LDM","LDL","BDR","BDM","BDL","RDR","RDM","RDL","DUR","DUM","DUL","DMR","DMM","DML","DDR","DDM","DDL"],pairs:[["FDL","LDL"],["LDL","BDL"],["BDL","RDL"],["RDL","FDL"],["FDR","LDR"],["LDR","BDR"],["BDR","RDR"],["RDR","FDR"],["FDM","LDM"],["LDM","BDM"],["BDM","RDM"],["RDM","FDM"],["DDL","DUL"],["DUL","DUR"],["DUR","DDR"],["DDR","DDL"],["DUM","DMR"],["DMR","DDM"],["DDM","DML"],["DML","DUM"]],axes:{x:0,y:-1,z:0}}});let rs=hn;class jS extends rs{constructor(t,e){super("3d",t),this.canvas=new FS(e),this.moving=!1,this.addKeyInputs(this),this.create3dPieces()}create3dPieces(){let t=-.5*Math.PI;const e={F:{color:HS,axis:"z",ud:[1,0,-1],lr:[-1,0,1]},B:{color:GS,axis:"z",ud:[1,0,-1],lr:[1,0,-1]},U:{color:WS,axis:"y",ud:[-1,0,1],lr:[-1,0,1]},D:{color:VS,axis:"y",ud:[1,0,-1],lr:[-1,0,1]},L:{color:XS,axis:"x",ud:[1,0,-1],lr:[-1,0,1]},R:{color:YS,axis:"x",ud:[1,0,-1],lr:[1,0,-1]}},n=["U","M","D"],s=["L","M","R"];for(const r in e){const o=e[r];for(let a=0;a<3;a++)for(let l=0;l<3;l++){const c=r+n[a]+s[l],h=new sr(1,1),u=new dl({color:o.color,side:dn}),d=new pn(h,u);switch(o.axis){case"x":d.position.x=r=="R"?1.5:-1.5,d.position.y=o.ud[a],d.position.z=o.lr[l],d.rotation.y=t;break;case"y":d.position.x=o.lr[l],d.position.y=r=="U"?1.5:-1.5,d.position.z=o.ud[a],d.rotation.x=t;break;case"z":d.position.x=o.lr[l],d.position.y=o.ud[a],d.position.z=r=="F"?1.5:-1.5;break}this.pieces[c]=d,this.canvas.scene.add(d)}}}move(t){if(this.moving)return;this.moving=!0;let e=rs.move_decoder(t),n=.5*Math.PI,s=e.side,r=e.times,o=e.prime;e=rs.moves[s];let a=new Ds;e.pieces.forEach(l=>{a.add(this.pieces[l])}),this.canvas.scene.add(a);for(let l=0;l<r;l++)gsap.to(a.rotation,{x:e.axes.x*n*o,y:e.axes.y*n*o,z:e.axes.z*n*o,onComplete:this.updateMatrix,onCompleteParams:[a,this,t],duration:.3})}updateMatrix(t,e,n){t.children.forEach(r=>{let o=new F,a=new nr,l=new ti;r.getWorldPosition(o),r.getWorldQuaternion(l),a.setFromQuaternion(l),r.position.x=o.x,r.position.y=o.y,r.position.z=o.z,r.rotation.x=a.x,r.rotation.y=a.y,r.rotation.z=a.z});let s=t.children.length;for(let r=1;r<s+1;r++)e.canvas.scene.add(t.children[s-r]);e.updatePieces(n),e.moving=!1}addKeyInputs(t){document.addEventListener("keyup",e=>{this.canvas.parent.classList.contains("hidden")||(e.code=="KeyM"&&t.move("R"),e.code=="KeyU"&&t.move("R'"),e.code=="KeyS"&&t.move("D"),e.code=="KeyG"&&console.log(t.generateScramble()))})}}let zs=Object;zs.exclude_from_avg=10;window.onload=async function(){await tr.open(),await new Promise(e=>{setTimeout(()=>{e()},0)}),document.getElementById("website-loading").style.opacity="0",await new Promise(e=>{setTimeout(()=>{e()},0)}),document.getElementById("website-loading").style.display="none",zs.charts=[new ao],zs.tables=[lo.table("history-div",["Seconds"]),lo.table("history-div2",["Ao 3","Ao 5","Ao 10"])];let i=new jS("scramble","td-tab"),t=new rs("2d","scramble-div","timer-div");zs.cubes=[i,t],t.displayScramble(!0),mu()};const Hs=zs;
