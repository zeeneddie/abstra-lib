import{d as T,N as H,dY as J,H as o,r as N,J as L,O as M,V as p,ah as W,f as m,bf as Y,R as O,cI as h,a6 as G,bC as j,aP as q}from"./outputWidgets.045188bd.js";import{u as K}from"./Title.68794b00.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="52a1282d-7007-4001-be65-5683b86685c9",e._sentryDebugIdIdentifier="sentry-dbid-52a1282d-7007-4001-be65-5683b86685c9")}catch{}})();const Q={small:8,middle:16,large:24},U=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:G.oneOf(j("horizontal","vertical")).def("horizontal"),align:G.oneOf(j("start","end","center","baseline")),wrap:q()});function X(e){return typeof e=="string"?Q[e]:e||0}const r=T({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:U(),slots:Object,setup(e,c){let{slots:l,attrs:f}=c;const{prefixCls:n,space:g,direction:x}=H("space",e),[B,E]=J(n),z=K(),s=o(()=>{var t,a,i;return(i=(t=e.size)!==null&&t!==void 0?t:(a=g==null?void 0:g.value)===null||a===void 0?void 0:a.size)!==null&&i!==void 0?i:"small"}),y=N(),u=N();L(s,()=>{[y.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(t=>X(t))},{immediate:!0});const $=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),F=o(()=>M(n.value,E.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${$.value}`]:$.value})),P=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),R=o(()=>{const t={};return z.value&&(t.columnGap=`${y.value}px`,t.rowGap=`${u.value}px`),p(p({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var t,a;const{wrap:i,direction:V="horizontal"}=e,w=(t=l.default)===null||t===void 0?void 0:t.call(l),_=W(w),C=_.length;if(C===0)return null;const d=(a=l.split)===null||a===void 0?void 0:a.call(l),I=`${n.value}-item`,A=y.value,b=C-1;return m("div",O(O({},f),{},{class:[F.value,f.class],style:[R.value,f.style]}),[_.map((D,S)=>{const k=w.indexOf(D);let v={};return z.value||(V==="vertical"?S<b&&(v={marginBottom:`${A/(d?2:1)}px`}):v=p(p({},S<b&&{[P.value]:`${A/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),B(m(Y,{key:k},[m("div",{class:I,style:v},[D]),S<b&&d&&m("span",{class:`${I}-split`,style:v},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const te=r;export{te as A};
//# sourceMappingURL=index.22e7eee3.js.map
