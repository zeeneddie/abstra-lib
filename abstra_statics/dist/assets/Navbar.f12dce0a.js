import{_ as k}from"./logo.084e5d7c.js";import{v as i,b as o,d2 as t,eB as u,eC as p,e as a,d as b,ex as I,a as $,u as _,eA as f,f as r,w as g,b0 as m,bu as w,ez as x,eu as L,eY as C}from"./registerWidgets.d6e66474.js";import{p as l}from"./passwordlessManager.a2051844.js";import{a as N}from"./asyncComputed.5c362931.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="fb92ea8e-3284-4ec3-8454-6f18834bddb0",e._sentryDebugIdIdentifier="sentry-dbid-fb92ea8e-3284-4ec3-8454-6f18834bddb0")}catch{}})();const B={},v=e=>(u("data-v-439be421"),e=e(),p(),e),D={class:"logo"},S=v(()=>a("img",{class:"logo-img",src:k,alt:"Abstra cloud logo"},null,-1)),V=v(()=>a("span",null,"Abstra Cloud",-1)),A=[S,V];function E(e,s){return o(),t("div",D,A)}const R=i(B,[["render",E],["__scopeId","data-v-439be421"]]),U={key:0},z={key:1,class:"logged"},F={class:"author-email"},M={key:2},T=b({__name:"LoginBlock",setup(e){const s=I(),{result:n,loading:c,refetch:d}=N(async()=>l.getUser());function h(){l.removeUser(),d(),s.push({name:"login"})}return(P,Q)=>{const y=$("router-link");return _(c)?(o(),t("div",U,"loading...")):_(n)?(o(),t("div",z,[a("span",F,f(_(n).claims.email),1),a("button",{class:"btn",onClick:h},"Logout")])):(o(),t("div",M,[r(y,{class:"btn",to:"/login"},{default:g(()=>[m("Login")]),_:1})]))}}});const Y=i(T,[["__scopeId","data-v-6c08207b"]]),j=e=>(u("data-v-7bfa390c"),e=e(),p(),e),q={class:"nav"},G={class:"left"},H={key:0,class:"breadcrumb-container"},J=j(()=>a("span",{class:"divider"},">",-1)),K={class:"right"},O=b({__name:"Navbar",props:{breadcrumb:{}},setup(e){return(s,n)=>(o(),t("nav",q,[a("div",G,[r(R),s.breadcrumb?(o(),t("div",H,[(o(!0),t(w,null,x(s.breadcrumb,(c,d)=>(o(),t("span",{key:d,class:"breadcrumb-item"},[r(_(C),{class:"breadcrumb-link",to:c.path},{default:g(()=>[m(f(c.label),1)]),_:2},1032,["to"]),J]))),128))])):L("",!0)]),a("div",K,[r(Y)])]))}});const se=i(O,[["__scopeId","data-v-7bfa390c"]]);export{se as N};
//# sourceMappingURL=Navbar.f12dce0a.js.map
