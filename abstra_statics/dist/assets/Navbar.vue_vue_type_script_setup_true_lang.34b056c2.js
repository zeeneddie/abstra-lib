import{d as m,b as n,ev as _,ex as v,e as L,eD as i,v as N,eA as w,a as A,u as e,c as l,bv as C,w as a,f as r,ar as u,bV as b,cF as y,cB as U,eL as x,eC as I,f3 as D,a$ as V}from"./outputWidgets.dfaed084.js";import{u as k}from"./index.5a931540.js";import{a as $}from"./asyncComputed.c6a80f78.js";import{A as R}from"./Text.1bcc4cd1.js";import"./index.9f982820.js";import{A as S,B as E,a as F,c as P}from"./index.b530ed25.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="a27d1617-eb02-48ca-a928-87c421cc129d",s._sentryDebugIdIdentifier="sentry-dbid-a27d1617-eb02-48ca-a928-87c421cc129d")}catch{}})();const T={class:"logo"},j=["src"],H=m({__name:"Logo",props:{brandName:{},logoUrl:{}},setup(s){const c=`${s.brandName} logo`;return(o,d)=>(n(),_("div",T,[o.logoUrl?(n(),_("img",{key:0,class:"logo-img",src:o.logoUrl,alt:c},null,8,j)):v("",!0),L("span",null,i(o.brandName),1)]))}});const M=N(H,[["__scopeId","data-v-b39249e9"]]),q=m({__name:"LoginBlock",setup(s){function t(g){const f=g.split("@")[0];return x.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=w(),{result:o,loading:d,refetch:h}=$(async()=>k.getUser());function B(){k.removeUser(),h(),c.push({name:"playerLogin"})}return(g,f)=>{const p=A("router-link");return e(d)?(n(),l(e(C),{key:0})):e(o)?(n(),l(e(U),{key:1,placement:"bottomRight"},{content:a(()=>[r(e(y),{direction:"vertical"},{default:a(()=>[r(e(R),null,{default:a(()=>[u(i(e(o).claims.email),1)]),_:1}),r(e(b),{onClick:B},{default:a(()=>[u("Logout")]),_:1})]),_:1})]),default:a(()=>[r(e(y),{align:"center",style:{cursor:"pointer"}},{default:a(()=>[r(e(S),null,{default:a(()=>[u(i(t(e(o).claims.email)),1)]),_:1})]),_:1})]),_:1})):(n(),l(e(b),{key:2},{default:a(()=>[r(p,{to:"/_player/login"},{default:a(()=>[u("Login")]),_:1})]),_:1}))}}}),W=m({__name:"Navbar",props:{brandName:{},logoUrl:{},breadcrumb:{}},setup(s){return(t,c)=>(n(),l(e(P),{style:{padding:"5px 25px",width:"100vw"}},{breadcrumb:a(()=>[t.breadcrumb?(n(),l(e(E),{key:0},{default:a(()=>[(n(!0),_(V,null,I(t.breadcrumb,(o,d)=>(n(),l(e(F),{key:d},{default:a(()=>[r(e(D),{to:o.path},{default:a(()=>[u(i(o.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):v("",!0)]),title:a(()=>[r(M,{"brand-name":t.brandName,"logo-url":t.logoUrl},null,8,["brand-name","logo-url"])]),extra:a(()=>[r(q)]),_:1}))}});export{W as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.34b056c2.js.map
