import{O as h,V as f,B as $,D as j,ax as o,ay as I,bf as d,a2 as _,E as G,d as O,dl as E,N as F,H as A,f as D,R as T,Q as N}from"./outputWidgets.b9fff993.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="803539bc-01f8-4d94-98fe-6940b3b8dd40",e._sentryDebugIdIdentifier="sentry-dbid-803539bc-01f8-4d94-98fe-6940b3b8dd40")}catch{}})();const p=["wrap","nowrap","wrap-reverse"],y=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],x=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],P=(e,t)=>{const l={};return p.forEach(n=>{l[`${e}-wrap-${n}`]=t.wrap===n}),l},V=(e,t)=>{const l={};return x.forEach(n=>{l[`${e}-align-${n}`]=t.align===n}),l[`${e}-align-stretch`]=!t.align&&!!t.vertical,l},W=(e,t)=>{const l={};return y.forEach(n=>{l[`${e}-justify-${n}`]=t.justify===n}),l};function L(e,t){return h(f(f(f({},P(e,t)),V(e,t)),W(e,t)))}const H=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},J=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},M=e=>{const{componentCls:t}=e,l={};return p.forEach(n=>{l[`${t}-wrap-${n}`]={flexWrap:n}}),l},R=e=>{const{componentCls:t}=e,l={};return x.forEach(n=>{l[`${t}-align-${n}`]={alignItems:n}}),l},z=e=>{const{componentCls:t}=e,l={};return y.forEach(n=>{l[`${t}-justify-${n}`]={justifyContent:n}}),l},B=$("Flex",e=>{const t=j(e,{flexGapSM:e.paddingXS,flexGap:e.padding,flexGapLG:e.paddingLG});return[H(t),J(t),M(t),R(t),z(t)]});function g(e){return["small","middle","large"].includes(e)}const Q=()=>({prefixCls:o(),vertical:I(),wrap:o(),justify:o(),align:o(),flex:d([Number,String]),gap:d([Number,String]),component:_()});var X=globalThis&&globalThis.__rest||function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l};const q=O({name:"AFlex",inheritAttrs:!1,props:Q(),setup(e,t){let{slots:l,attrs:n}=t;const{flex:a,direction:m}=E(),{prefixCls:s}=F("flex",e),[b,v]=B(s),S=A(()=>{var r;return[s.value,v.value,L(s.value,e),{[`${s.value}-rtl`]:m.value==="rtl",[`${s.value}-gap-${e.gap}`]:g(e.gap),[`${s.value}-vertical`]:(r=e.vertical)!==null&&r!==void 0?r:a==null?void 0:a.value.vertical}]});return()=>{var r;const{flex:u,gap:c,component:w="div"}=e,C=X(e,["flex","gap","component"]),i={};return u&&(i.flex=u),c&&!g(c)&&(i.gap=`${c}px`),b(D(w,T({class:[n.class,S.value],style:[n.style,i]},N(C,["justify","wrap","align","vertical"])),{default:()=>[(r=l.default)===null||r===void 0?void 0:r.call(l)]}))}}}),Y=G(q);export{Y as A};
//# sourceMappingURL=index.68c30d13.js.map
