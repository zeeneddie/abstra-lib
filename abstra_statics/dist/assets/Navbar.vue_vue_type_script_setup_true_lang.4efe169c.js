import{d as m,b as n,ev as _,ex as v,e as B,eD as i,v as w,eA as A,a as C,u as e,c as l,bv as L,w as a,f as r,ar as u,bV as b,cF as y,cB as U,eN as x,eC as I,f3 as D,a$ as V}from"./outputWidgets.6bfc0239.js";import{u as k}from"./index.d59ef797.js";import{a as $}from"./asyncComputed.21831dee.js";import{A as R,B as S,a as E,c as F}from"./index.a0291250.js";import{A as P}from"./Text.3be64ce1.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="4491e11c-a8c4-4470-86fa-3fb6a2a59abf",s._sentryDebugIdIdentifier="sentry-dbid-4491e11c-a8c4-4470-86fa-3fb6a2a59abf")}catch{}})();const T={class:"logo"},j=["src"],H=m({__name:"Logo",props:{brandName:{},logoUrl:{}},setup(s){const c=`${s.brandName} logo`;return(o,d)=>(n(),_("div",T,[o.logoUrl?(n(),_("img",{key:0,class:"logo-img",src:o.logoUrl,alt:c},null,8,j)):v("",!0),B("span",null,i(o.brandName),1)]))}});const M=w(H,[["__scopeId","data-v-b39249e9"]]),q=m({__name:"LoginBlock",setup(s){function t(f){const g=f.split("@")[0];return x.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=A(),{result:o,loading:d,refetch:h}=$(async()=>k.getUser());function N(){k.removeUser(),h(),c.push({name:"playerLogin"})}return(f,g)=>{const p=C("router-link");return e(d)?(n(),l(e(L),{key:0})):e(o)?(n(),l(e(U),{key:1,placement:"bottomRight"},{content:a(()=>[r(e(y),{direction:"vertical"},{default:a(()=>[r(e(P),null,{default:a(()=>[u(i(e(o).claims.email),1)]),_:1}),r(e(b),{onClick:N},{default:a(()=>[u("Logout")]),_:1})]),_:1})]),default:a(()=>[r(e(y),{align:"center",style:{cursor:"pointer"}},{default:a(()=>[r(e(R),null,{default:a(()=>[u(i(t(e(o).claims.email)),1)]),_:1})]),_:1})]),_:1})):(n(),l(e(b),{key:2},{default:a(()=>[r(p,{to:"/_player/login"},{default:a(()=>[u("Login")]),_:1})]),_:1}))}}}),Q=m({__name:"Navbar",props:{brandName:{},logoUrl:{},breadcrumb:{}},setup(s){return(t,c)=>(n(),l(e(F),{style:{padding:"5px 25px",width:"100vw"}},{breadcrumb:a(()=>[t.breadcrumb?(n(),l(e(S),{key:0},{default:a(()=>[(n(!0),_(V,null,I(t.breadcrumb,(o,d)=>(n(),l(e(E),{key:d},{default:a(()=>[r(e(D),{to:o.path},{default:a(()=>[u(i(o.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):v("",!0)]),title:a(()=>[r(M,{"brand-name":t.brandName,"logo-url":t.logoUrl},null,8,["brand-name","logo-url"])]),extra:a(()=>[r(q)]),_:1}))}});export{Q as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.4efe169c.js.map