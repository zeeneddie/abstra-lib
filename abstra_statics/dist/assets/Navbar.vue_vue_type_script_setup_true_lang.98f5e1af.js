import{_ as C}from"./logo.084e5d7c.js";import{v as I,b as r,eu as y,eF as w,eG as B,e as h,d as k,eA as L,a as D,u as e,c,bf as S,w as t,f as o,aq as l,eE as _,bF as m,cD as b,cz as N,eM as V,eC as E,f5 as F,aC as R,ew as M}from"./outputWidgets.b1e87772.js";import{b as g}from"./router.a9e5af79.js";import{a as P}from"./asyncComputed.5830bf45.js";import{A as T}from"./Text.a2ac66f5.js";import{A as $}from"./index.56c26672.js";import{B as j,A as q,b as z}from"./index.aff0a004.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="c9c62cf1-a7d0-4c7f-a697-5ea72aa8c76f",a._sentryDebugIdIdentifier="sentry-dbid-c9c62cf1-a7d0-4c7f-a697-5ea72aa8c76f")}catch{}})();const G={},A=a=>(w("data-v-439be421"),a=a(),B(),a),H={class:"logo"},U=A(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),J=A(()=>h("span",null,"Abstra Cloud",-1)),K=[U,J];function O(a,s){return r(),y("div",H,K)}const Q=I(G,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const f=p.split("@")[0];return V.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(i=>i[0]).join("")}const u=L(),{result:n,loading:d,refetch:v}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),v(),u.push({name:"login"})}return(p,f)=>{const i=D("router-link");return e(d)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e(T),null,{default:t(()=>[l(_(e(n).claims.email),1)]),_:1}),o(e(m),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e($),null,{default:t(()=>[l(_(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(m),{key:2},{default:t(()=>[o(i,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),se=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,u)=>(r(),c(e(z),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(j),{key:0},{default:t(()=>[(r(!0),y(R,null,E(s.breadcrumb,(n,d)=>(r(),c(e(q),{key:d},{default:t(()=>[o(e(F),{to:n.path},{default:t(()=>[l(_(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):M("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{se as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.98f5e1af.js.map