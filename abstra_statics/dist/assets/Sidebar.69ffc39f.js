import{d as v,eA as w,eB as k,r as m,b as a,eu as s,a_ as u,eC as _,e as p,eD as f,ey as h,f as b,I as g,ew as c,c as x,w as C,u as D,t as I}from"./outputWidgets.65a42716.js";import{w as B}from"./icons.9da44d92.js";import{T as S}from"./Tooltip.8f12f63b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="d1058a16-68d2-41c2-aed3-6d61a46945df",t._sentryDebugIdIdentifier="sentry-dbid-d1058a16-68d2-41c2-aed3-6d61a46945df")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},A={key:1,class:"tag beta"},L={key:2,class:"tag cloud"},R=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),l=k(),d=m((i=l.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),d.value=n.path)};return(n,z)=>(a(),s("div",T,[(a(!0),s(u,null,_(n.sections,r=>(a(),s("div",{key:r.name,class:"section"},[p("span",N,f(r.name),1),(a(!0),s(u,null,_(r.items,e=>(a(),s("div",{key:e.name,role:"button",class:h(["item",{active:d.value===e.path,disabled:e.unavailable||r.cloud}]),tabindex:"0",onClick:F=>y(e)},[b(g,{class:h(["icon",{disabled:e.unavailable,active:d.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,f(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):c("",!0),e.beta?(a(),s("span",A,"BETA")):c("",!0),e.cloud?(a(),s("span",L,"CLOUD")):c("",!0),e.warning?(a(),x(S,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:C(()=>[b(g,{path:D(B),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):c("",!0)],10,O))),128))]))),128))]))}});const q=I(R,[["__scopeId","data-v-9c95c206"]]);export{q as S};
//# sourceMappingURL=Sidebar.69ffc39f.js.map
