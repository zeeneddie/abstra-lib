import"./registerWidgets.db466a36.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="e710596b-2b30-40ce-8eb1-663ae8f9e0e1",e._sentryDebugIdIdentifier="sentry-dbid-e710596b-2b30-40ce-8eb1-663ae8f9e0e1")}catch{}})();const _={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},x="#000",A="#272D35",C="#ffffff",I="#1b1b23";function w(e,r){const{r:n,g:t,b:a,usePound:i}=h(e);return b(g(n,-r),g(t,-r),g(a,-r),i)}function g(e,r){const n=e*(100+r*100)/100;return n>255?255:n<0?0:Math.round(n)}const L=(e,r)=>p(w(p(e),r)),F=e=>{if(q(e))return d(e);const r=_[e.toLowerCase()];if(!r)return!1;const[n,t,a]=r;return d(b(n,t,a))},E=e=>d(e)?C:I,M=e=>d(e)?L(e,.1):w(e,.1);function d(e){const{r,g:n,b:t}=h(e);return r*.299+n*.587+t*.114<186}function h(e){let r=!1;e[0]=="#"&&(e=e.slice(1),r=!0);const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:r}}function p(e){const{r,g:n,b:t,usePound:a}=h(e);return b(255-r,255-n,255-t,a)}const b=(e,r,n,t=!0)=>(t?"#":"")+(n|r<<8|e<<16).toString(16).padStart(6,"0");function q(e){if(e.length>9)return!1;const r=e.startsWith("#")?e.slice(1):e;return/[0-9A-Fa-f]{6}/g.test(r)}function T(e){return/https?:\/\/[^\s]+/g.test(e)}const c={};function H(e){return e in c||(c[e]=new Promise(r=>{const n=document.createElement("img");n.src=e,n.crossOrigin="Anonymous",n.style.display="none",document.body.appendChild(n);let t=0;n.onload=()=>{const{width:a,height:i}=n,o=document.createElement("canvas");o.width=a,o.height=i;const u=o.getContext("2d");if(!u)return r(!1);u.drawImage(n,0,0);const v=u.getImageData(0,0,o.width,o.height),{data:s}=v;let m,f,y,k;for(let l=0,O=s.length;l<O;l+=4)m=s[l],f=s[l+1],y=s[l+2],k=Math.floor((m+f+y)/3),t+=k;const D=Math.floor(t/(a*i));document.body.removeChild(n),r(D<=127)}})),c[e]}export{A as D,C as L,M as a,E as b,x as c,H as d,F as e,I as f,T as i,L as l};
//# sourceMappingURL=colors.9a2cbb67.js.map
