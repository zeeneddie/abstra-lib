import{_ as C}from"./logo.084e5d7c.js";import{t as B,b as r,eu as y,eD as I,eE as w,e as h,d as k,ez as L,a as D,u as e,c,bx as S,w as t,f as a,az as d,eC as i,bX as f,cG as b,cC as N,eJ as V,eB as E,eY as R,b6 as z,ew as P}from"./outputWidgets.a177f9c3.js";import{a as g}from"./router.c47a87c6.js";import{a as T}from"./asyncComputed.acb737a7.js";import{A as $,B as j,a as F,c as G}from"./index.9cafe5c9.js";import{c as H}from"./index.57b83223.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="210df654-3446-40d4-8ee6-574274ed52be",o._sentryDebugIdIdentifier="sentry-dbid-210df654-3446-40d4-8ee6-574274ed52be")}catch{}})();const J={},v=o=>(I("data-v-439be421"),o=o(),w(),o),M={class:"logo"},U=v(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),X=v(()=>h("span",null,"Abstra Cloud",-1)),Y=[U,X];function q(o,s){return r(),y("div",M,Y)}const K=B(J,[["render",q],["__scopeId","data-v-439be421"]]),O=k({__name:"LoginBlock",setup(o){function s(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=L(),{result:n,loading:u,refetch:x}=T(async()=>g.getAuthor());function A(){g.removeAuthor(),x(),l.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[a(e(b),{direction:"vertical"},{default:t(()=>[a(e(H),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),a(e(f),{onClick:A},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[a(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e($),null,{default:t(()=>[d(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[a(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),ae=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(s,l)=>(r(),c(e(G),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(j),{key:0},{default:t(()=>[(r(!0),y(z,null,E(s.breadcrumb,(n,u)=>(r(),c(e(F),{key:u},{default:t(()=>[a(e(R),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):P("",!0)]),title:t(()=>[a(K)]),extra:t(()=>[a(O)]),_:1}))}});export{ae as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.42f943df.js.map
