import{_ as k}from"./logo.084e5d7c.js";import{q as i,b as s,c as o,O as u,Q as b,x as t,d as p,H as I,a as x,z as _,N as f,e as r,w as g,S as m,F as $,L as w,D as L,aq as N}from"./registerWidgets.68572380.js";import{p as l}from"./passwordlessManager.8fb0aebd.js";import{a as C}from"./asyncComputed.896b7bde.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="baa5545f-70c0-43f5-bb5f-6ecba434448b",e._sentryDebugIdIdentifier="sentry-dbid-baa5545f-70c0-43f5-bb5f-6ecba434448b")}catch{}})();const B={},v=e=>(u("data-v-439be421"),e=e(),b(),e),D={class:"logo"},S=v(()=>t("img",{class:"logo-img",src:k,alt:"Abstra cloud logo"},null,-1)),V=v(()=>t("span",null,"Abstra Cloud",-1)),q=[S,V];function A(e,a){return s(),o("div",D,q)}const E=i(B,[["render",A],["__scopeId","data-v-439be421"]]),F={key:0},R={key:1,class:"logged"},U={class:"author-email"},z={key:2},H=p({__name:"LoginBlock",setup(e){const a=I(),{result:c,loading:n,refetch:d}=C(async()=>l.getUser());function h(){l.removeUser(),d(),a.push({name:"login"})}return(P,W)=>{const y=x("router-link");return _(n)?(s(),o("div",F,"loading...")):_(c)?(s(),o("div",R,[t("span",U,f(_(c).claims.email),1),t("button",{class:"btn",onClick:h},"Logout")])):(s(),o("div",z,[r(y,{class:"btn",to:"/login"},{default:g(()=>[m("Login")]),_:1})]))}}});const M=i(H,[["__scopeId","data-v-6c08207b"]]),O=e=>(u("data-v-cf48b8cc"),e=e(),b(),e),Q={class:"nav"},T={class:"left"},j={key:0,class:"breadcrumb-container"},G=O(()=>t("span",{class:"divider"},">",-1)),J={class:"right"},K=p({__name:"Navbar",props:{breadcrumb:null},setup(e){return(a,c)=>(s(),o("nav",Q,[t("div",T,[r(E),e.breadcrumb?(s(),o("div",j,[(s(!0),o($,null,w(e.breadcrumb,(n,d)=>(s(),o("span",{key:d,class:"breadcrumb-item"},[r(_(N),{class:"breadcrumb-link",to:n.path},{default:g(()=>[m(f(n.label),1)]),_:2},1032,["to"]),G]))),128))])):L("",!0)]),t("div",J,[r(M)])]))}});const se=i(K,[["__scopeId","data-v-cf48b8cc"]]);export{se as N};
//# sourceMappingURL=Navbar.03b5b117.js.map
