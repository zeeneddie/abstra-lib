import{d as T,N as H,dY as J,H as o,r as N,J as L,O as M,V as p,ah as W,f,bf as Y,R as O,cI as h,a6 as G,bC as j,aP as q}from"./outputWidgets.397b3720.js";import{u as K}from"./Title.382247fb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="53420ad3-868c-4e08-9235-b4ec2a6f6aa5",e._sentryDebugIdIdentifier="sentry-dbid-53420ad3-868c-4e08-9235-b4ec2a6f6aa5")}catch{}})();const Q={small:8,middle:16,large:24},U=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:G.oneOf(j("horizontal","vertical")).def("horizontal"),align:G.oneOf(j("start","end","center","baseline")),wrap:q()});function X(e){return typeof e=="string"?Q[e]:e||0}const r=T({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:U(),slots:Object,setup(e,c){let{slots:l,attrs:m}=c;const{prefixCls:n,space:g,direction:x}=H("space",e),[B,E]=J(n),z=K(),s=o(()=>{var a,t,i;return(i=(a=e.size)!==null&&a!==void 0?a:(t=g==null?void 0:g.value)===null||t===void 0?void 0:t.size)!==null&&i!==void 0?i:"small"}),y=N(),u=N();L(s,()=>{[y.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(a=>X(a))},{immediate:!0});const $=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),F=o(()=>M(n.value,E.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${$.value}`]:$.value})),P=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),R=o(()=>{const a={};return z.value&&(a.columnGap=`${y.value}px`,a.rowGap=`${u.value}px`),p(p({},a),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var a,t;const{wrap:i,direction:V="horizontal"}=e,w=(a=l.default)===null||a===void 0?void 0:a.call(l),_=W(w),C=_.length;if(C===0)return null;const d=(t=l.split)===null||t===void 0?void 0:t.call(l),I=`${n.value}-item`,A=y.value,b=C-1;return f("div",O(O({},m),{},{class:[F.value,m.class],style:[R.value,m.style]}),[_.map((D,S)=>{const k=w.indexOf(D);let v={};return z.value||(V==="vertical"?S<b&&(v={marginBottom:`${A/(d?2:1)}px`}):v=p(p({},S<b&&{[P.value]:`${A/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),B(f(Y,{key:k},[f("div",{class:I,style:v},[D]),S<b&&d&&f("span",{class:`${I}-split`,style:v},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ae=r;export{ae as A};
//# sourceMappingURL=index.e12747aa.js.map
