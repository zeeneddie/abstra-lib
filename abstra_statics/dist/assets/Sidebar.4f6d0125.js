import{d as v,ez as w,eA as k,r as m,b as a,eu as s,bg as u,eB as _,e as p,eC as f,ey as b,f as h,I as g,ew as c,c as x,w as C,u as I,x as D}from"./outputWidgets.65926c1d.js";import{w as B}from"./icons.da7d27cd.js";import{T as S}from"./Tooltip.aac6d259.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="c400a293-a496-42f5-8728-0efe89f0a3f4",t._sentryDebugIdIdentifier="sentry-dbid-c400a293-a496-42f5-8728-0efe89f0a3f4")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},z={key:1,class:"tag beta"},A={key:2,class:"tag cloud"},L=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),d=k(),l=m((i=d.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),l.value=n.path)};return(n,R)=>(a(),s("div",T,[(a(!0),s(u,null,_(n.sections,r=>(a(),s("div",{key:r.name,class:"section"},[p("span",N,f(r.name),1),(a(!0),s(u,null,_(r.items,e=>(a(),s("div",{key:e.name,role:"button",class:b(["item",{active:l.value===e.path,disabled:e.unavailable||r.cloud}]),tabindex:"0",onClick:F=>y(e)},[h(g,{class:b(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,f(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):c("",!0),e.beta?(a(),s("span",z,"BETA")):c("",!0),e.cloud?(a(),s("span",A,"CLOUD")):c("",!0),e.warning?(a(),x(S,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:C(()=>[h(g,{path:I(B),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):c("",!0)],10,O))),128))]))),128))]))}});const q=D(L,[["__scopeId","data-v-16ccb6d0"]]);export{q as S};
//# sourceMappingURL=Sidebar.4f6d0125.js.map
