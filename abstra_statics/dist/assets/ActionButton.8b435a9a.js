import{d as u,F as m,b as d,et as c,e as i,bo as b,eA as g,ex as f,eB as _,ev as v,t as y,r as k,o as I,c as B,w as r,f as w,ao as h,eN as N,u as p,bM as A,eV as S}from"./outputWidgets.c5bb0ffd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="67eda94c-705e-4400-9748-f5f3616f525f",e._sentryDebugIdIdentifier="sentry-dbid-67eda94c-705e-4400-9748-f5f3616f525f")}catch{}})();const C={key:0,class:"p-steps p-component"},D={class:"p-steps-list"},V={class:"p-menuitem-link"},x={class:"p-steps-number"},E=u({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,o=m(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(l,s)=>e.stepsInfo?(d(),c("nav",C,[i("ol",D,[(d(!0),c(b,null,g(o.value,(n,a)=>(d(),c("li",{key:a,class:f(["p-steps-item",{"p-highlight":a+1===e.stepsInfo.current}])},[i("span",V,[i("span",x,_(a+1),1)])],2))),128))])])):v("",!0)}});const K=y(E,[["__scopeId","data-v-c916ecf3"]]),$=u({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const o=e,l=k(null);return I(()=>{l.value&&o.action.setElement(l.value)}),(s,n)=>(d(),B(p(S),null,{default:r(()=>[w(p(A),{ref_key:"element",ref:l,class:f(["next-button",s.disabled?"disabled":""]),loading:s.loading,disabled:s.disabled,onClick:n[0]||(n[0]=a=>t("click")),onKeydown:n[1]||(n[1]=N(a=>t("click"),["enter"]))},{default:r(()=>[h(_(s.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const M=y($,[["__scopeId","data-v-e711f126"]]);export{M as A,K as S};
//# sourceMappingURL=ActionButton.8b435a9a.js.map
