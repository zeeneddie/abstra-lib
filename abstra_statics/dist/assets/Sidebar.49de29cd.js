import{d as y,ey as w,ez as k,r as m,b as a,et as s,bf as u,eA as _,e as p,eB as f,ex as b,f as h,I as g,ev as r,c as x,w as I,u as C,v as D}from"./outputWidgets.90e6e058.js";import{w as B}from"./icons.c312238c.js";import{T as S}from"./Tooltip.398135f6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="67c40c33-5e11-402e-a7c6-ebfaf41382ef",t._sentryDebugIdIdentifier="sentry-dbid-67c40c33-5e11-402e-a7c6-ebfaf41382ef")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},z={key:1,class:"tag beta"},A={key:2,class:"tag cloud"},L=y({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),d=k(),l=m((i=d.name)!=null?i:"forms"),v=n=>{n.unavailable||(o.push(n.path),l.value=n.path)};return(n,R)=>(a(),s("div",T,[(a(!0),s(u,null,_(n.sections,c=>(a(),s("div",{key:c.name,class:"section"},[p("span",N,f(c.name),1),(a(!0),s(u,null,_(c.items,e=>(a(),s("div",{key:e.name,role:"button",class:b(["item",{active:l.value===e.path,disabled:e.unavailable||c.cloud}]),tabindex:"0",onClick:F=>v(e)},[h(g,{class:b(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,f(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):r("",!0),e.beta?(a(),s("span",z,"BETA")):r("",!0),e.cloud?(a(),s("span",A,"CLOUD")):r("",!0),e.warning?(a(),x(S,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:I(()=>[h(g,{path:C(B),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):r("",!0)],10,O))),128))]))),128))]))}});const q=D(L,[["__scopeId","data-v-16ccb6d0"]]);export{q as S};
//# sourceMappingURL=Sidebar.49de29cd.js.map