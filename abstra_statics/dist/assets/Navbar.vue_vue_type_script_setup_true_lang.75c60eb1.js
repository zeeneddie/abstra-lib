import{d as m,b as n,ev as _,ex as v,e as B,eD as i,v as w,eA as A,a as C,u as e,c as l,bv as L,w as a,f as r,ar as d,bV as g,cF as y,cB as U,eN as x,eC as I,f3 as D,a$ as V}from"./outputWidgets.f9d55cb0.js";import{u as k}from"./index.630cd210.js";import{a as $}from"./asyncComputed.c2e425ff.js";import{A as R}from"./Text.8d155850.js";import"./index.218a9012.js";import{A as S,B as E,a as F,c as P}from"./index.4b864f6b.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="0f10d9b1-b520-422e-bd3c-d92d8826c650",s._sentryDebugIdIdentifier="sentry-dbid-0f10d9b1-b520-422e-bd3c-d92d8826c650")}catch{}})();const T={class:"logo"},j=["src"],H=m({__name:"Logo",props:{brandName:{},logoUrl:{}},setup(s){const c=`${s.brandName} logo`;return(o,u)=>(n(),_("div",T,[o.logoUrl?(n(),_("img",{key:0,class:"logo-img",src:o.logoUrl,alt:c},null,8,j)):v("",!0),B("span",null,i(o.brandName),1)]))}});const M=w(H,[["__scopeId","data-v-b39249e9"]]),q=m({__name:"LoginBlock",setup(s){function t(b){const f=b.split("@")[0];return x.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=A(),{result:o,loading:u,refetch:h}=$(async()=>k.getUser());function N(){k.removeUser(),h(),c.push({name:"playerLogin"})}return(b,f)=>{const p=C("router-link");return e(u)?(n(),l(e(L),{key:0})):e(o)?(n(),l(e(U),{key:1,placement:"bottomRight"},{content:a(()=>[r(e(y),{direction:"vertical"},{default:a(()=>[r(e(R),null,{default:a(()=>[d(i(e(o).claims.email),1)]),_:1}),r(e(g),{onClick:N},{default:a(()=>[d("Logout")]),_:1})]),_:1})]),default:a(()=>[r(e(y),{align:"center",style:{cursor:"pointer"}},{default:a(()=>[r(e(S),null,{default:a(()=>[d(i(t(e(o).claims.email)),1)]),_:1})]),_:1})]),_:1})):(n(),l(e(g),{key:2},{default:a(()=>[r(p,{to:"/_player/login"},{default:a(()=>[d("Login")]),_:1})]),_:1}))}}}),W=m({__name:"Navbar",props:{brandName:{},logoUrl:{},breadcrumb:{}},setup(s){return(t,c)=>(n(),l(e(P),{style:{padding:"5px 25px",width:"100vw"}},{breadcrumb:a(()=>[t.breadcrumb?(n(),l(e(E),{key:0},{default:a(()=>[(n(!0),_(V,null,I(t.breadcrumb,(o,u)=>(n(),l(e(F),{key:u},{default:a(()=>[r(e(D),{to:o.path},{default:a(()=>[d(i(o.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):v("",!0)]),title:a(()=>[r(M,{"brand-name":t.brandName,"logo-url":t.logoUrl},null,8,["brand-name","logo-url"])]),extra:a(()=>[r(q)]),_:1}))}});export{W as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.75c60eb1.js.map
