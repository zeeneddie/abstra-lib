import{m as h,l as k}from"./icons.28d0d847.js";import{d as y,G as _,b as a,eu as i,e as o,b6 as f,eB as S,ey as p,eC as b,t as g,F as I,u as v,ew as r,f as R,I as N,c as w,eD as C,eE as B}from"./outputWidgets.6d6b4a37.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="e282f80b-e372-4eb8-b9ec-da7b446438a6",s._sentryDebugIdIdentifier="sentry-dbid-e282f80b-e372-4eb8-b9ec-da7b446438a6")}catch{}})();const E={class:"sidebar-content"},$={class:"section"},D=["onClick"],P=y({__name:"Sidebar",props:{currentRuntime:{},displaySidebar:{type:Boolean},forceResponsivity:{}},emits:["selectRuntime","closeSidebar"],setup(s,{emit:t}){const u=s,c=e=>{m(e.id)||t("selectRuntime",e)},l=_(()=>u.currentRuntime.sidebar.filter(e=>e.visible)),m=e=>e===u.currentRuntime.id;return(e,n)=>(a(),i("div",{class:p(["sidebar",e.forceResponsivity,{open:e.displaySidebar}])},[o("div",E,[o("div",$,[(a(!0),i(f,null,S(l.value,d=>(a(),i("div",{key:d.id,class:p(["item",{active:m(d.id)}]),onClick:J=>c(d)},[o("div",{class:p(["item-title",{open:e.displaySidebar}])},b(d.name),3)],10,D))),128))])])],2))}});const U=g(P,[["__scopeId","data-v-dbb11367"]]),V=s=>(C("data-v-e67cfd1a"),s=s(),B(),s),F={class:"left-side"},z=["d"],G={key:1,class:"brand"},L=["src"],j={key:1,class:"brand-name"},q=V(()=>o("div",null,null,-1)),A={key:0,class:"signed-email"},H=y({__name:"PlayerNavbar",props:{runtime:{},userEmail:{},forceResponsivity:{}},emits:["logout","navigate"],setup(s,{emit:t}){const u=s,c=I({displaySidebar:!1}),l=_(()=>{const e=u.runtime.sidebar;return!e||e.length==0?!1:e.some(n=>n.visible)}),m=e=>t("navigate",e);return(e,n)=>(a(),i(f,null,[l.value||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(a(),i("div",{key:0,class:p(["navbar",l.value&&"background"])},[o("div",F,[l.value?(a(),i("svg",{key:0,class:p(["sidebar-menu-icon",e.forceResponsivity]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:n[0]||(n[0]=d=>c.displaySidebar=!c.displaySidebar)},[o("path",{d:v(h)},null,8,z)],2)):r("",!0),e.runtime.logoUrl||e.runtime.brandName?(a(),i("div",G,[e.runtime.logoUrl?(a(),i("img",{key:0,src:e.runtime.logoUrl,class:"logo-image"},null,8,L)):r("",!0),e.runtime.brandName?(a(),i("p",j,b(e.runtime.brandName),1)):r("",!0)])):r("",!0)]),q,e.userEmail?(a(),i("div",A,[o("span",null,b(e.userEmail),1),R(N,{width:"20",height:"20",class:"logout",path:v(k),fill:"var(--color-main)",onClick:n[1]||(n[1]=d=>t("logout"))},null,8,["path"])])):r("",!0)],2)):r("",!0),l.value?(a(),w(U,{key:1,"current-runtime":e.runtime,"display-sidebar":c.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:m},null,8,["current-runtime","display-sidebar","force-responsivity"])):r("",!0)],64))}});const O=g(H,[["__scopeId","data-v-e67cfd1a"]]);export{O as P};
//# sourceMappingURL=PlayerNavbar.a442f839.js.map