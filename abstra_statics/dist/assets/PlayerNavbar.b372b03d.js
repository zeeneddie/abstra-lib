import{u as h,v as S}from"./icons.2cb14ff7.js";import{d as y,H as _,b as a,ev as i,e as d,a$ as f,eC as k,ez as m,eD as b,v as g,G as R,u as v,ex as o,f as I,I as N,c as C,eE as $,eF as w}from"./outputWidgets.dfaed084.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="f93dba02-7bbd-4b9a-8cda-08588d3a415a",s._sentryDebugIdIdentifier="sentry-dbid-f93dba02-7bbd-4b9a-8cda-08588d3a415a")}catch{}})();const B={class:"sidebar-content"},E={class:"section"},D=["onClick"],P={class:"item-title"},U=y({__name:"Sidebar",props:{currentRuntime:{},displaySidebar:{type:Boolean},forceResponsivity:{}},emits:["selectRuntime","closeSidebar"],setup(s,{emit:t}){const n=s,c=e=>{p(e.id)||t("selectRuntime",e)},l=_(()=>n.currentRuntime.sidebar.filter(e=>e.visible)),p=e=>"id"in n.currentRuntime?n.currentRuntime.id===e:!1;return(e,r)=>(a(),i("div",{class:m(["sidebar",e.forceResponsivity,{open:e.displaySidebar}])},[d("div",B,[d("div",E,[(a(!0),i(f,null,k(l.value,u=>(a(),i("div",{key:u.id,class:m(["item",{active:p(u.id)}]),onClick:K=>c(u)},[d("div",P,b(u.name),1)],10,D))),128))])])],2))}});const V=g(U,[["__scopeId","data-v-ed02befc"]]),z=s=>($("data-v-92330d74"),s=s(),w(),s),F={class:"left-side"},G=["d"],H={key:1,class:"brand"},L=["src"],j={key:1,class:"brand-name"},q=z(()=>d("div",null,null,-1)),A={key:0,class:"signed-email"},J=y({__name:"PlayerNavbar",props:{runtime:{},userEmail:{},forceResponsivity:{},hideSidebar:{type:Boolean}},emits:["logout","navigate"],setup(s,{emit:t}){const n=s,c=R({displaySidebar:!1}),l=_(()=>{const e=n.runtime.sidebar;return!e||e.length==0||n.hideSidebar?!1:e.some(r=>r.visible)}),p=e=>t("navigate",e);return(e,r)=>(a(),i(f,null,[l.value||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(a(),i("div",{key:0,class:m(["navbar",l.value&&"background"])},[d("div",F,[l.value?(a(),i("svg",{key:0,class:m(["sidebar-menu-icon",e.forceResponsivity]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:r[0]||(r[0]=u=>c.displaySidebar=!c.displaySidebar)},[d("path",{d:v(h)},null,8,G)],2)):o("",!0),e.runtime.logoUrl||e.runtime.brandName?(a(),i("div",H,[e.runtime.logoUrl?(a(),i("img",{key:0,src:e.runtime.logoUrl,class:"logo-image"},null,8,L)):o("",!0),e.runtime.brandName?(a(),i("p",j,b(e.runtime.brandName),1)):o("",!0)])):o("",!0)]),q,e.userEmail?(a(),i("div",A,[d("span",null,b(e.userEmail),1),I(N,{width:"20",height:"20",class:"logout",path:v(S),fill:"var(--color-main)",onClick:r[1]||(r[1]=u=>t("logout"))},null,8,["path"])])):o("",!0)],2)):o("",!0),l.value?(a(),C(V,{key:1,"current-runtime":e.runtime,"display-sidebar":c.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:p},null,8,["current-runtime","display-sidebar","force-responsivity"])):o("",!0)],64))}});const Q=g(J,[["__scopeId","data-v-92330d74"]]);export{Q as P};
//# sourceMappingURL=PlayerNavbar.b372b03d.js.map
