import{P as p}from"./PlayerNavbar.62e8a14d.js";import{d as u}from"./runnerData.cef787df.js";import{l as d,a as l,b as k}from"./colors.267ec6f7.js";import{d as b,J as n,b as i,c as g,v as y,y as r,q as f,B as h,z as w,p as _}from"./registerWidgets.4cc86716.js";function v(o){return o.startsWith("#")||o.match(/^(rgb|hsl)/)}function C(o){return o.startsWith("http://")||o.startsWith("https://")}function P(o){return C(o)?"external-image":v(o)?"color":"hosted-image"}function S(o,e="/_assets/background"){switch(P(o)){case"external-image":return{backgroundImage:`url(${o})`,backgroundSize:"cover",backgroundPosition:"center"};case"color":return{backgroundColor:o};case"hosted-image":return{backgroundImage:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center"}}}const x={class:"sidebar-preview"},N=b({__name:"SidebarPreview",props:{workspace:null},setup(o){const e=o,s=n(()=>e.workspace.logoUrl?`/_editor/api/assets/${e.workspace.logoUrl}`:""),m=n(()=>(document.documentElement.style.setProperty("--ac-global-font-family",e.workspace.fontFamily),{"--color-main":e.workspace.mainColor,"--color-main-light":d(e.workspace.mainColor,.15),"--color-main-hover":l(e.workspace.mainColor),"--color-main-active":l(e.workspace.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":k(e.workspace.mainColor),"--font-family":e.workspace.fontFamily,...S(e.workspace.theme,`/_editor/api/assets/${e.workspace.theme}`)})),c=n(()=>{var a,t;return e.workspace?{id:"mockId",path:"mockPath",title:"mockTitle",theme:e.workspace.theme,brandName:(a=e.workspace.brandName)!=null?a:null,logoUrl:(t=e.workspace.logoUrl)!=null?t:null,mainColor:e.workspace.mainColor,fontFamily:e.workspace.fontFamily,layout:u({props:{},slot:{},version:"0.2"}),idOrPath:"mockIdOrPath",workspaceName:"Untitled Workspace",sidebar:e.workspace.sidebar,runtimeType:"dash"}:null});return(a,t)=>(i(),g("div",x,[y("div",{class:"sidebar-frame",style:w(r(m))},[r(c)?(i(),f(p,{key:0,runtime:r(c),"brand-name":o.workspace.brandName,"logo-url":r(s),"user-email":"user@email.com","force-responsivity":"desktop"},null,8,["runtime","brand-name","logo-url"])):h("",!0)],4)]))}});const I=_(N,[["__scopeId","data-v-24eb3689"]]);export{I as S,P as b};
//# sourceMappingURL=SidebarPreview.7042594b.js.map
