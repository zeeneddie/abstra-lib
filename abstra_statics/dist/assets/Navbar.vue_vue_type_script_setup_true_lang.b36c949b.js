import{_ as C}from"./logo.084e5d7c.js";import{v as I,b as r,ev as y,eE as B,eF as w,e as h,d as k,eA as D,a as L,u as e,c,bg as S,w as t,f as o,ar as l,eD as i,bG as b,cE as f,cA as N,eM as E,eC as V,f5 as R,aD as F,ex as M}from"./outputWidgets.2c5e6309.js";import{b as g}from"./router.57bac28e.js";import{a as P}from"./asyncComputed.929ca3c2.js";import{A as T}from"./Text.86501620.js";import{A as $,B as j,a as G,c as H}from"./index.0db32dd1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="93eb1134-e29b-4e7b-b652-ae38a2bcc6dc",a._sentryDebugIdIdentifier="sentry-dbid-93eb1134-e29b-4e7b-b652-ae38a2bcc6dc")}catch{}})();const U={},v=a=>(B("data-v-439be421"),a=a(),w(),a),q={class:"logo"},z=v(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),J=v(()=>h("span",null,"Abstra Cloud",-1)),K=[z,J];function O(a,s){return r(),y("div",q,K)}const Q=I(U,[["render",O],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const m=p.split("@")[0];return E.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const u=D(),{result:n,loading:d,refetch:A}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),u.push({name:"login"})}return(p,m)=>{const _=L("router-link");return e(d)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(f),{direction:"vertical"},{default:t(()=>[o(e(T),null,{default:t(()=>[l(i(e(n).claims.email),1)]),_:1}),o(e(b),{onClick:x},{default:t(()=>[l("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(f),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e($),null,{default:t(()=>[l(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(b),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,u)=>(r(),c(e(H),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(j),{key:0},{default:t(()=>[(r(!0),y(F,null,V(s.breadcrumb,(n,d)=>(r(),c(e(G),{key:d},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[l(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):M("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.b36c949b.js.map
