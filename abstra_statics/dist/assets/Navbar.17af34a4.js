import{_ as k}from"./logo.084e5d7c.js";import{q as i,b as o,c as t,O as u,Q as p,x as a,d as b,H as I,a as $,z as _,N as f,e as r,w as g,U as m,F as w,L,D as x,ap as N}from"./registerWidgets.7afd6438.js";import{p as l}from"./passwordlessManager.7da7ab9e.js";import{a as C}from"./asyncComputed.b60ddd9a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="ee3ba949-89d3-4742-a305-f0d8ec5f1f5e",e._sentryDebugIdIdentifier="sentry-dbid-ee3ba949-89d3-4742-a305-f0d8ec5f1f5e")}catch{}})();const B={},v=e=>(u("data-v-439be421"),e=e(),p(),e),D={class:"logo"},S=v(()=>a("img",{class:"logo-img",src:k,alt:"Abstra cloud logo"},null,-1)),V=v(()=>a("span",null,"Abstra Cloud",-1)),U=[S,V];function A(e,s){return o(),t("div",D,U)}const E=i(B,[["render",A],["__scopeId","data-v-439be421"]]),F={key:0},R={key:1,class:"logged"},q={class:"author-email"},z={key:2},H=b({__name:"LoginBlock",setup(e){const s=I(),{result:c,loading:n,refetch:d}=C(async()=>l.getUser());function h(){l.removeUser(),d(),s.push({name:"login"})}return(P,W)=>{const y=$("router-link");return _(n)?(o(),t("div",F,"loading...")):_(c)?(o(),t("div",R,[a("span",q,f(_(c).claims.email),1),a("button",{class:"btn",onClick:h},"Logout")])):(o(),t("div",z,[r(y,{class:"btn",to:"/login"},{default:g(()=>[m("Login")]),_:1})]))}}});const M=i(H,[["__scopeId","data-v-6c08207b"]]),O=e=>(u("data-v-cf48b8cc"),e=e(),p(),e),Q={class:"nav"},T={class:"left"},j={key:0,class:"breadcrumb-container"},G=O(()=>a("span",{class:"divider"},">",-1)),J={class:"right"},K=b({__name:"Navbar",props:{breadcrumb:{}},setup(e){return(s,c)=>(o(),t("nav",Q,[a("div",T,[r(E),s.breadcrumb?(o(),t("div",j,[(o(!0),t(w,null,L(s.breadcrumb,(n,d)=>(o(),t("span",{key:d,class:"breadcrumb-item"},[r(_(N),{class:"breadcrumb-link",to:n.path},{default:g(()=>[m(f(n.label),1)]),_:2},1032,["to"]),G]))),128))])):x("",!0)]),a("div",J,[r(M)])]))}});const se=i(K,[["__scopeId","data-v-cf48b8cc"]]);export{se as N};
//# sourceMappingURL=Navbar.17af34a4.js.map
