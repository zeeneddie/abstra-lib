import{_ as B}from"./logo.084e5d7c.js";import{v as C,b as r,er as y,eB as I,eC as w,e as h,d as k,ex as L,a as N,u as e,c,bP as S,w as t,f as a,b0 as l,eA as _,cb as f,cN as D,q as V,ez as P,eX as R,bu as T,eu as U}from"./registerWidgets.2031932d.js";import{p as b}from"./passwordlessManager.50ecc1b4.js";import{a as E}from"./asyncComputed.57cbb10a.js";import{A as $}from"./Text.f7290fbc.js";import{A as g}from"./index.b4b072a9.js";import{A as j,B as q,a as z,c as F}from"./index.5a7b7c6a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="0177d293-f823-4e54-9ac3-48873bed93e6",o._sentryDebugIdIdentifier="sentry-dbid-0177d293-f823-4e54-9ac3-48873bed93e6")}catch{}})();const H={},v=o=>(I("data-v-439be421"),o=o(),w(),o),M={class:"logo"},X=v(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),G=v(()=>h("span",null,"Abstra Cloud",-1)),J=[X,G];function K(o,s){return r(),y("div",M,J)}const O=C(H,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(o){function s(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(i=>i[0]).join("")}const d=L(),{result:n,loading:u,refetch:x}=E(async()=>b.getUser());function A(){b.removeUser(),x(),d.push({name:"login"})}return(p,m)=>{const i=N("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(D),{key:1,placement:"bottomRight"},{content:t(()=>[a(e(g),{direction:"vertical"},{default:t(()=>[a(e($),null,{default:t(()=>[l(_(e(n).claims.email),1)]),_:1}),a(e(f),{onClick:A},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[a(e(g),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(j),null,{default:t(()=>[l(_(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[a(i,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),se=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(s,d)=>(r(),c(e(F),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(q),{key:0},{default:t(()=>[(r(!0),y(T,null,P(s.breadcrumb,(n,u)=>(r(),c(e(z),{key:u},{default:t(()=>[a(e(R),{to:n.path},{default:t(()=>[l(_(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):U("",!0)]),title:t(()=>[a(O)]),extra:t(()=>[a(Q)]),_:1}))}});export{se as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.dd664761.js.map
