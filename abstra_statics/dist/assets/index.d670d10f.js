import{O as h,V as f,B as $,D as j,ax as o,ay as I,bf as d,a2 as _,E as G,d as O,dl as E,N as F,H as A,f as D,R as T,Q as N}from"./outputWidgets.2a809d0b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="39a396da-dd2f-4c89-aef1-0bffa3822e3e",e._sentryDebugIdIdentifier="sentry-dbid-39a396da-dd2f-4c89-aef1-0bffa3822e3e")}catch{}})();const p=["wrap","nowrap","wrap-reverse"],y=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],x=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],P=(e,t)=>{const a={};return p.forEach(n=>{a[`${e}-wrap-${n}`]=t.wrap===n}),a},V=(e,t)=>{const a={};return x.forEach(n=>{a[`${e}-align-${n}`]=t.align===n}),a[`${e}-align-stretch`]=!t.align&&!!t.vertical,a},W=(e,t)=>{const a={};return y.forEach(n=>{a[`${e}-justify-${n}`]=t.justify===n}),a};function L(e,t){return h(f(f(f({},P(e,t)),V(e,t)),W(e,t)))}const H=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},J=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},M=e=>{const{componentCls:t}=e,a={};return p.forEach(n=>{a[`${t}-wrap-${n}`]={flexWrap:n}}),a},R=e=>{const{componentCls:t}=e,a={};return x.forEach(n=>{a[`${t}-align-${n}`]={alignItems:n}}),a},z=e=>{const{componentCls:t}=e,a={};return y.forEach(n=>{a[`${t}-justify-${n}`]={justifyContent:n}}),a},B=$("Flex",e=>{const t=j(e,{flexGapSM:e.paddingXS,flexGap:e.padding,flexGapLG:e.paddingLG});return[H(t),J(t),M(t),R(t),z(t)]});function g(e){return["small","middle","large"].includes(e)}const Q=()=>({prefixCls:o(),vertical:I(),wrap:o(),justify:o(),align:o(),flex:d([Number,String]),gap:d([Number,String]),component:_()});var X=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]]);return a};const q=O({name:"AFlex",inheritAttrs:!1,props:Q(),setup(e,t){let{slots:a,attrs:n}=t;const{flex:l,direction:m}=E(),{prefixCls:s}=F("flex",e),[v,b]=B(s),S=A(()=>{var r;return[s.value,b.value,L(s.value,e),{[`${s.value}-rtl`]:m.value==="rtl",[`${s.value}-gap-${e.gap}`]:g(e.gap),[`${s.value}-vertical`]:(r=e.vertical)!==null&&r!==void 0?r:l==null?void 0:l.value.vertical}]});return()=>{var r;const{flex:u,gap:c,component:w="div"}=e,C=X(e,["flex","gap","component"]),i={};return u&&(i.flex=u),c&&!g(c)&&(i.gap=`${c}px`),v(D(w,T({class:[n.class,S.value],style:[n.style,i]},N(C,["justify","wrap","align","vertical"])),{default:()=>[(r=a.default)===null||r===void 0?void 0:r.call(a)]}))}}}),Y=G(q);export{Y as A};
//# sourceMappingURL=index.d670d10f.js.map
