import{_ as B}from"./logo.084e5d7c.js";import{t as C,b as r,eu as y,eE as I,eF as w,e as h,d as k,eA as L,a as D,u as e,c,bu as S,w as t,f as o,aq as d,eD as i,bU as f,cF as b,cB as N,eH as V,eC as E,eZ as F,a_ as R,ew as H}from"./outputWidgets.57f0182b.js";import{b as g}from"./router.b9fd36e0.js";import{a as P}from"./asyncComputed.98eb0dfd.js";import{A as T,B as U,a as $,c as j}from"./index.2cb78a35.js";import{c as q}from"./Text.2d2c95b1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="085aab77-49d1-43b9-8191-dfee9df29c57",a._sentryDebugIdIdentifier="sentry-dbid-085aab77-49d1-43b9-8191-dfee9df29c57")}catch{}})();const M={},v=a=>(I("data-v-439be421"),a=a(),w(),a),Z={class:"logo"},z=v(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),G=v(()=>h("span",null,"Abstra Cloud",-1)),J=[z,G];function K(a,s){return r(),y("div",Z,J)}const O=C(M,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(a){function s(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=L(),{result:n,loading:u,refetch:A}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),l.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e(q),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:x},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(T),null,{default:t(()=>[d(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,l)=>(r(),c(e(j),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(U),{key:0},{default:t(()=>[(r(!0),y(R,null,E(s.breadcrumb,(n,u)=>(r(),c(e($),{key:u},{default:t(()=>[o(e(F),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):H("",!0)]),title:t(()=>[o(O)]),extra:t(()=>[o(Q)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.0228f487.js.map
