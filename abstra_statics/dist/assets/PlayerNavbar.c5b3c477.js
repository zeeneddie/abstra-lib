import{v as h,w as k}from"./icons.99d10079.js";import{d as f,G as y,b as a,ev as i,e as o,bq as _,eC as S,ez as p,eD as b,v as g,F as I,u as v,ex as r,f as R,I as N,c as w,eE as C,eF as E}from"./outputWidgets.308fc26e.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="bba2713d-04f5-4dac-9c12-f53a8fbc6f06",s._sentryDebugIdIdentifier="sentry-dbid-bba2713d-04f5-4dac-9c12-f53a8fbc6f06")}catch{}})();const $={class:"sidebar-content"},B={class:"section"},D=["onClick"],P=f({__name:"Sidebar",props:{currentRuntime:{},displaySidebar:{type:Boolean},forceResponsivity:{}},emits:["selectRuntime","closeSidebar"],setup(s,{emit:t}){const c=s,u=e=>{m(e.id)||t("selectRuntime",e)},d=y(()=>c.currentRuntime.sidebar.filter(e=>e.visible)),m=e=>e===c.currentRuntime.id;return(e,n)=>(a(),i("div",{class:p(["sidebar",e.forceResponsivity,{open:e.displaySidebar}])},[o("div",$,[o("div",B,[(a(!0),i(_,null,S(d.value,l=>(a(),i("div",{key:l.id,class:p(["item",{active:m(l.id)}]),onClick:J=>u(l)},[o("div",{class:p(["item-title",{open:e.displaySidebar}])},b(l.name),3)],10,D))),128))])])],2))}});const U=g(P,[["__scopeId","data-v-dbb11367"]]),F=s=>(C("data-v-e67cfd1a"),s=s(),E(),s),V={class:"left-side"},z=["d"],q={key:1,class:"brand"},G=["src"],L={key:1,class:"brand-name"},j=F(()=>o("div",null,null,-1)),A={key:0,class:"signed-email"},H=f({__name:"PlayerNavbar",props:{runtime:{},userEmail:{},forceResponsivity:{}},emits:["logout","navigate"],setup(s,{emit:t}){const c=s,u=I({displaySidebar:!1}),d=y(()=>{const e=c.runtime.sidebar;return!e||e.length==0?!1:e.some(n=>n.visible)}),m=e=>t("navigate",e);return(e,n)=>(a(),i(_,null,[d.value||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(a(),i("div",{key:0,class:p(["navbar",d.value&&"background"])},[o("div",V,[d.value?(a(),i("svg",{key:0,class:p(["sidebar-menu-icon",e.forceResponsivity]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:n[0]||(n[0]=l=>u.displaySidebar=!u.displaySidebar)},[o("path",{d:v(h)},null,8,z)],2)):r("",!0),e.runtime.logoUrl||e.runtime.brandName?(a(),i("div",q,[e.runtime.logoUrl?(a(),i("img",{key:0,src:e.runtime.logoUrl,class:"logo-image"},null,8,G)):r("",!0),e.runtime.brandName?(a(),i("p",L,b(e.runtime.brandName),1)):r("",!0)])):r("",!0)]),j,e.userEmail?(a(),i("div",A,[o("span",null,b(e.userEmail),1),R(N,{width:"20",height:"20",class:"logout",path:v(k),fill:"var(--color-main)",onClick:n[1]||(n[1]=l=>t("logout"))},null,8,["path"])])):r("",!0)],2)):r("",!0),d.value?(a(),w(U,{key:1,"current-runtime":e.runtime,"display-sidebar":u.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:m},null,8,["current-runtime","display-sidebar","force-responsivity"])):r("",!0)],64))}});const O=g(H,[["__scopeId","data-v-e67cfd1a"]]);export{O as P};
//# sourceMappingURL=PlayerNavbar.c5b3c477.js.map