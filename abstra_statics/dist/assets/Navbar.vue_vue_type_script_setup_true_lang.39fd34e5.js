import{_ as I}from"./logo.084e5d7c.js";import{x as B,b as s,eu as y,eD as C,eE as w,e as h,d as k,ez as L,a as D,u as e,c,bF as S,w as t,f as a,aJ as l,eC as d,c4 as m,cI as N,t as V,eB as E,e_ as R,bg as T,ew as F}from"./outputWidgets.5f5dca9f.js";import{a as b}from"./router.a7910fab.js";import{a as P}from"./asyncComputed.eae0c0ea.js";import{a as $}from"./index.d2da0107.js";import{A as g}from"./index.7ab474e7.js";import{A as j,B as z,a as H,c as J}from"./index.de5dbed2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="c23f9c55-ff00-4068-841c-c814b1475b1b",o._sentryDebugIdIdentifier="sentry-dbid-c23f9c55-ff00-4068-841c-c814b1475b1b")}catch{}})();const M={},v=o=>(C("data-v-439be421"),o=o(),w(),o),U={class:"logo"},q=v(()=>h("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),G=v(()=>h("span",null,"Abstra Cloud",-1)),K=[q,G];function O(o,r){return s(),y("div",U,K)}const Q=B(M,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(o){function r(p){const f=p.split("@")[0];return V.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(i=>i[0]).join("")}const u=L(),{result:n,loading:_,refetch:x}=P(async()=>b.getAuthor());function A(){b.removeAuthor(),x(),u.push({name:"login"})}return(p,f)=>{const i=D("router-link");return e(_)?(s(),c(e(S),{key:0})):e(n)?(s(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[a(e(g),{direction:"vertical"},{default:t(()=>[a(e($),null,{default:t(()=>[l(d(e(n).claims.email),1)]),_:1}),a(e(m),{onClick:A},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[a(e(g),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(j),null,{default:t(()=>[l(d(r(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(s(),c(e(m),{key:2},{default:t(()=>[a(i,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),re=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(r,u)=>(s(),c(e(J),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[r.breadcrumb?(s(),c(e(z),{key:0},{default:t(()=>[(s(!0),y(T,null,E(r.breadcrumb,(n,_)=>(s(),c(e(H),{key:_},{default:t(()=>[a(e(R),{to:n.path},{default:t(()=>[l(d(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[a(Q)]),extra:t(()=>[a(W)]),_:1}))}});export{re as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.39fd34e5.js.map