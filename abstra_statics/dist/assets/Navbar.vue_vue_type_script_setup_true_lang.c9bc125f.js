import{_ as B}from"./logo.084e5d7c.js";import{t as C,b as r,et as y,eC as I,eD as w,e as h,d as k,ey as L,a as D,u as e,c,be as S,w as t,f as o,ao as l,eB as i,bM as b,cA as f,cw as N,eJ as V,eA as R,f0 as T,bo as E,ev as M}from"./outputWidgets.cd4dc36b.js";import{b as g}from"./router.44419e22.js";import{a as P}from"./asyncComputed.135c7ebf.js";import{A as $}from"./Text.d76cf89a.js";import{A as j,B as F,a as H,c as J}from"./index.aa891245.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="08abfda8-5d60-45ab-9680-0c94a31bb0ba",a._sentryDebugIdIdentifier="sentry-dbid-08abfda8-5d60-45ab-9680-0c94a31bb0ba")}catch{}})();const U={},A=a=>(I("data-v-439be421"),a=a(),w(),a),q={class:"logo"},z=A(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),G=A(()=>h("span",null,"Abstra Cloud",-1)),K=[z,G];function O(a,s){return r(),y("div",q,K)}const Q=C(U,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const d=L(),{result:n,loading:u,refetch:v}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),v(),d.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(f),{direction:"vertical"},{default:t(()=>[o(e($),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(b),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(f),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(j),null,{default:t(()=>[l(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(b),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,d)=>(r(),c(e(J),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(F),{key:0},{default:t(()=>[(r(!0),y(E,null,R(s.breadcrumb,(n,u)=>(r(),c(e(H),{key:u},{default:t(()=>[o(e(T),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):M("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.c9bc125f.js.map
