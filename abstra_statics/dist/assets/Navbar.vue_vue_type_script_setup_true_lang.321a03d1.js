import{_ as x}from"./logo.084e5d7c.js";import{v as B,b as s,et as y,eC as I,eD as w,e as h,d as k,ey as L,a as D,u as e,c,bC as S,w as t,f as o,aB as d,eB as i,b_ as f,cC as N,eF as V,eA as R,e_ as T,b9 as E,ev as F}from"./outputWidgets.d6334d0e.js";import{a as b}from"./router.c9839d0e.js";import{a as P}from"./asyncComputed.95fd0999.js";import{a as $}from"./Text.2f6a30da.js";import{A as g}from"./index.6da051f8.js";import{A as j,B as H,a as M,c as U}from"./index.02b3bfd1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="74dd325d-f641-45ba-9097-5dcf4b3407d8",a._sentryDebugIdIdentifier="sentry-dbid-74dd325d-f641-45ba-9097-5dcf4b3407d8")}catch{}})();const q={},v=a=>(I("data-v-439be421"),a=a(),w(),a),z={class:"logo"},G=v(()=>h("img",{class:"logo-img",src:x,alt:"Abstra cloud logo"},null,-1)),J=v(()=>h("span",null,"Abstra Cloud",-1)),K=[G,J];function O(a,r){return s(),y("div",z,K)}const Q=B(q,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function r(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=L(),{result:n,loading:u,refetch:A}=P(async()=>b.getAuthor());function C(){b.removeAuthor(),A(),l.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(s(),c(e(S),{key:0})):e(n)?(s(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(g),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:C},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(g),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[d(i(r(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(s(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),re=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(r,l)=>(s(),c(e(U),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[r.breadcrumb?(s(),c(e(H),{key:0},{default:t(()=>[(s(!0),y(E,null,R(r.breadcrumb,(n,u)=>(s(),c(e(M),{key:u},{default:t(()=>[o(e(T),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{re as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.321a03d1.js.map
