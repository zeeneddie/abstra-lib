import{P as m,l as d,a as s,b as p}from"./colors.4ea7d5a7.js";import{d as u}from"./runnerData.833eed88.js";import{d as k,K as l,b as c,c as f,x as y,z as t,t as w,D as b,A as _,q as h}from"./registerWidgets.88d12ae1.js";const v=o=>{try{return new URL(o),!0}catch{return!1}},g=o=>v(o)?{backgroundImage:`url(${o})`,backgroundSize:"cover"}:{backgroundColor:o},C={class:"sidebar-preview"},P=k({__name:"SidebarPreview",props:{workspace:null},setup(o){const e=o,i=l(()=>(typeof document<"u"&&document.documentElement.style.setProperty("--ac-global-font-family",e.workspace.fontFamily),{"--color-main":e.workspace.mainColor,"--color-main-light":d(e.workspace.mainColor,.15),"--color-main-hover":s(e.workspace.mainColor),"--color-main-active":s(e.workspace.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":p(e.workspace.mainColor),"--font-family":e.workspace.fontFamily,...g(e.workspace.theme)})),n=l(()=>{var a,r;return e.workspace?{id:"mockId",path:"mockPath",title:"mockTitle",theme:e.workspace.theme,brandName:(a=e.workspace.brandName)!=null?a:null,logoUrl:(r=e.workspace.logoUrl)!=null?r:null,mainColor:e.workspace.mainColor,fontFamily:e.workspace.fontFamily,layout:u({props:{},slot:{},version:"0.2"}),idOrPath:"mockIdOrPath",workspaceName:"Untitled Workspace",sidebar:e.workspace.sidebar,runtimeType:"dash"}:null});return(a,r)=>(c(),f("div",C,[y("div",{class:"sidebar-frame",style:_(t(i))},[t(n)?(c(),w(m,{key:0,runtime:t(n),"display-sidebar":!0,"brand-name":o.workspace.brandName,"logo-url":o.workspace.logoUrl,"user-email":"user@email.com","force-responsivity":"desktop"},null,8,["runtime","brand-name","logo-url"])):b("",!0)],4)]))}});const x=h(P,[["__scopeId","data-v-55fdf88a"]]);export{x as S};
//# sourceMappingURL=SidebarPreview.1dfaa6b8.js.map