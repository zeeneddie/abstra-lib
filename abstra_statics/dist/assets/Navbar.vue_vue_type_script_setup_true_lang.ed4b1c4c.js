import{_ as I}from"./logo.084e5d7c.js";import{x as B,b as s,et as y,eD as C,eE as w,e as h,d as k,ez as L,a as D,u as e,c,bF as S,w as t,f as o,aJ as l,eC as d,c4 as f,cI as N,t as V,eB as E,eZ as R,bg as T,ew as F}from"./outputWidgets.6f061a1b.js";import{a as g}from"./router.5b3ff3d3.js";import{a as P}from"./asyncComputed.2773f568.js";import{a as $}from"./index.9b59049d.js";import{A as b}from"./index.f509d6e1.js";import{A as j,B as z,a as H,c as J}from"./index.5290153e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="190993c9-b13e-4c10-8697-006294e48fa1",a._sentryDebugIdIdentifier="sentry-dbid-190993c9-b13e-4c10-8697-006294e48fa1")}catch{}})();const M={},v=a=>(C("data-v-439be421"),a=a(),w(),a),U={class:"logo"},Z=v(()=>h("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),q=v(()=>h("span",null,"Abstra Cloud",-1)),G=[Z,q];function K(a,r){return s(),y("div",U,G)}const O=B(M,[["render",K],["__scopeId","data-v-439be421"]]),Q=k({__name:"LoginBlock",setup(a){function r(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const u=L(),{result:n,loading:i,refetch:x}=P(async()=>g.getAuthor());function A(){g.removeAuthor(),x(),u.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(i)?(s(),c(e(S),{key:0})):e(n)?(s(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[l(d(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:A},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[l(d(r(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(s(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),re=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(r,u)=>(s(),c(e(J),{style:{padding:"5px 10px"}},{breadcrumb:t(()=>[r.breadcrumb?(s(),c(e(z),{key:0},{default:t(()=>[(s(!0),y(T,null,E(r.breadcrumb,(n,i)=>(s(),c(e(H),{key:i},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[l(d(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(O)]),extra:t(()=>[o(Q)]),_:1}))}});export{re as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.ed4b1c4c.js.map