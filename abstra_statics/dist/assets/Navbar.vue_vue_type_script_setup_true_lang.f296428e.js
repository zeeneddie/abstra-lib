import{_ as B}from"./logo.084e5d7c.js";import{v as C,b as r,ev as y,eE as I,eF as w,e as h,d as k,eA as L,a as D,u as e,c,bv as S,w as t,f as a,ar as d,eD as i,bV as f,cF as b,cB as N,eL as V,eC as E,f1 as F,a$ as R,ex as $}from"./outputWidgets.ad220777.js";import{b as g}from"./router.6b225833.js";import{a as P}from"./asyncComputed.d014c782.js";import{A as T}from"./Text.1d40b64f.js";import{A as j,B as H,a as M,c as U}from"./index.a4d9c4fd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="1b068003-71cd-4dcc-98cb-914f63c3031d",o._sentryDebugIdIdentifier="sentry-dbid-1b068003-71cd-4dcc-98cb-914f63c3031d")}catch{}})();const q={},v=o=>(I("data-v-439be421"),o=o(),w(),o),z={class:"logo"},G=v(()=>h("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),J=v(()=>h("span",null,"Abstra Cloud",-1)),K=[G,J];function O(o,s){return r(),y("div",z,K)}const Q=C(q,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(o){function s(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=L(),{result:n,loading:u,refetch:A}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),l.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[a(e(b),{direction:"vertical"},{default:t(()=>[a(e(T),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),a(e(f),{onClick:x},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[a(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(j),null,{default:t(()=>[d(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[a(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),ae=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(s,l)=>(r(),c(e(U),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(H),{key:0},{default:t(()=>[(r(!0),y(R,null,E(s.breadcrumb,(n,u)=>(r(),c(e(M),{key:u},{default:t(()=>[a(e(F),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):$("",!0)]),title:t(()=>[a(Q)]),extra:t(()=>[a(W)]),_:1}))}});export{ae as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.f296428e.js.map
