import{_ as C}from"./logo.084e5d7c.js";import{v as I,b as r,ev as y,eE as B,eF as w,e as h,d as k,eA as L,a as D,u as e,c,bg as S,w as t,f as o,aq as d,eD as i,bO as f,cC as b,cy as N,eK as V,eC as E,f3 as R,bq as q,ex as F}from"./outputWidgets.7c5cd35c.js";import{a as g}from"./authorManager.59476c7b.js";import{a as P}from"./asyncComputed.1363c455.js";import{A as T}from"./Text.3cdb5763.js";import{A as $,B as j,a as H,c as K}from"./index.535c3093.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="b71140d1-db42-4c1a-b416-793a4d880eab",a._sentryDebugIdIdentifier="sentry-dbid-b71140d1-db42-4c1a-b416-793a4d880eab")}catch{}})();const M={},v=a=>(B("data-v-439be421"),a=a(),w(),a),O={class:"logo"},U=v(()=>h("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),z=v(()=>h("span",null,"Abstra Cloud",-1)),G=[U,z];function J(a,s){return r(),y("div",O,G)}const Q=I(M,[["render",J],["__scopeId","data-v-439be421"]]),W=k({__name:"LoginBlock",setup(a){function s(p){const m=p.split("@")[0];return V.exports.kebabCase(m).toUpperCase().split("-").slice(0,2).map(_=>_[0]).join("")}const l=L(),{result:n,loading:u,refetch:A}=P(async()=>g.getAuthor());function x(){g.removeAuthor(),A(),l.push({name:"login"})}return(p,m)=>{const _=D("router-link");return e(u)?(r(),c(e(S),{key:0})):e(n)?(r(),c(e(N),{key:1,placement:"bottomRight"},{content:t(()=>[o(e(b),{direction:"vertical"},{default:t(()=>[o(e(T),null,{default:t(()=>[d(i(e(n).claims.email),1)]),_:1}),o(e(f),{onClick:x},{default:t(()=>[d("Logout")]),_:1})]),_:1})]),default:t(()=>[o(e(b),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e($),null,{default:t(()=>[d(i(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(f),{key:2},{default:t(()=>[o(_,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),oe=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,l)=>(r(),c(e(K),{style:{padding:"5px 25px"}},{breadcrumb:t(()=>[s.breadcrumb?(r(),c(e(j),{key:0},{default:t(()=>[(r(!0),y(q,null,E(s.breadcrumb,(n,u)=>(r(),c(e(H),{key:u},{default:t(()=>[o(e(R),{to:n.path},{default:t(()=>[d(i(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(Q)]),extra:t(()=>[o(W)]),_:1}))}});export{oe as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.419fdea6.js.map
