import{P as m}from"./PlayerNavbar.b87f3634.js";import{d as u}from"./runnerData.ab08ffbd.js";import{l as p,a as i,b as k}from"./colors.3cd7bb26.js";import{d as f,K as s,b as l,c as b,x as y,z as o,t as g,D as w,A as _,q as h}from"./registerWidgets.5e258592.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="d7707061-6fc2-4e73-9cc0-5957254dbce8",r._sentryDebugIdIdentifier="sentry-dbid-d7707061-6fc2-4e73-9cc0-5957254dbce8")}catch{}})();function v(r){return r.startsWith("#")||r.match(/^(rgb|hsl)/)}function C(r){return r.startsWith("http://")||r.startsWith("https://")}function I(r){return C(r)?"external-image":v(r)?"color":"hosted-image"}function P(r,e="/_assets/background"){switch(I(r)){case"external-image":return{backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center"};case"color":return{backgroundColor:r};case"hosted-image":return{backgroundImage:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center"}}}const x={class:"sidebar-preview"},D=f({__name:"SidebarPreview",props:{workspace:null},setup(r){const e=r,a=s(()=>e.workspace.makeRunnerData()),d=s(()=>(document.documentElement.style.setProperty("--ac-global-font-family",e.workspace.fontFamily),{"--color-main":e.workspace.mainColor,"--color-main-light":p(e.workspace.mainColor,.15),"--color-main-hover":i(e.workspace.mainColor),"--color-main-active":i(e.workspace.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":k(e.workspace.mainColor),"--font-family":e.workspace.fontFamily,...P(e.workspace.theme,`/_editor/api/assets/${e.workspace.theme}`)})),c=s(()=>{var t,n;return e.workspace?{id:"mockId",path:"mockPath",title:"mockTitle",theme:e.workspace.theme,brandName:(t=e.workspace.brandName)!=null?t:null,logoUrl:(n=e.workspace.logoUrl)!=null?n:null,mainColor:e.workspace.mainColor,fontFamily:e.workspace.fontFamily,layout:u({props:{},slot:{},version:"0.2"}),workspaceName:"Untitled Workspace",sidebar:e.workspace.sidebar,runtimeType:"dash"}:null});return(t,n)=>(l(),b("div",x,[y("div",{class:"sidebar-frame",style:_(o(d))},[o(c)?(l(),g(m,{key:0,runtime:o(c),"brand-name":o(a).brandName,"user-email":"user@email.com","force-responsivity":"desktop"},null,8,["runtime","brand-name"])):w("",!0)],4)]))}});const z=h(D,[["__scopeId","data-v-5de7c0fd"]]);export{z as S,I as b};
//# sourceMappingURL=SidebarPreview.1d907f53.js.map
