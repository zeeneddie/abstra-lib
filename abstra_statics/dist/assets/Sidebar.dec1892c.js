import{d as v,ey as w,ez as k,r as m,b as a,et as s,b8 as u,eA as _,e as p,eB as b,ex as f,f as h,I as g,ev as c,c as x,w as I,u as C,t as D}from"./outputWidgets.24bc53e6.js";import{w as B}from"./icons.346b8028.js";import{T as S}from"./Tooltip.161cda6e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="367b5655-a5eb-4e56-a890-c00362a34554",t._sentryDebugIdIdentifier="sentry-dbid-367b5655-a5eb-4e56-a890-c00362a34554")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},z={key:1,class:"tag beta"},A={key:2,class:"tag cloud"},L=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),d=k(),l=m((i=d.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),l.value=n.path)};return(n,R)=>(a(),s("div",T,[(a(!0),s(u,null,_(n.sections,r=>(a(),s("div",{key:r.name,class:"section"},[p("span",N,b(r.name),1),(a(!0),s(u,null,_(r.items,e=>(a(),s("div",{key:e.name,role:"button",class:f(["item",{active:l.value===e.path,disabled:e.unavailable||r.cloud}]),tabindex:"0",onClick:F=>y(e)},[h(g,{class:f(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,b(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):c("",!0),e.beta?(a(),s("span",z,"BETA")):c("",!0),e.cloud?(a(),s("span",A,"CLOUD")):c("",!0),e.warning?(a(),x(S,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:I(()=>[h(g,{path:C(B),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):c("",!0)],10,O))),128))]))),128))]))}});const q=D(L,[["__scopeId","data-v-16ccb6d0"]]);export{q as S};
//# sourceMappingURL=Sidebar.dec1892c.js.map
