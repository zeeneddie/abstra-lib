import{_ as C}from"./logo.084e5d7c.js";import{v as I,b as r,ev as y,eE as B,eF as w,e as h,d as k,eA as D,a as L,u as e,c,bg as N,w as t,f as o,ar as d,eD as i,bG as m,cE as b,cA as S,eN as E,eC as V,f4 as R,aD as F,ex as P}from"./outputWidgets.9bb29762.js";import{b as g}from"./router.f15646c4.js";import{a as T}from"./asyncComputed.ac1a0197.js";import{A as $}from"./Text.5324981a.js";import{A as j,B as G,a as H,c as M}from"./index.3a61abce.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="c1f5cd6c-d38d-4105-a8af-74364ab84206",a._sentryDebugIdIdentifier="sentry-dbid-c1f5cd6c-d38d-4105-a8af-74364ab84206")}catch{}})();const U={},v=a=>(B("data-v-439be421"),a=a(),w(),a),q={class:"logo"},z=v(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),J=v(()=>h("span",null,"Abstra Cloud",-1)),K=[z,J];function O(a,s){return r(),y("div",q,K)}const Q=I(U,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const f=p.split("@")[0];return E.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=D(),{result:n,loading:u,refetch:A}=T(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),l.push({name:"login"})}return(p,f)=>{const _=L("router-link");return e(u)?(r(),c(e(N),{key:0})):e(n)?(r(),c(e(S),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),o(e(m),{onClick:x},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[d(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(m),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,l)=>(r(),c(e(M),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(G),{key:0},{default:t(()=>[(r(!0),y(F,null,V(s.breadcrumb,(n,u)=>(r(),c(e(H),{key:u},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):P("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.7fb12854.js.map
