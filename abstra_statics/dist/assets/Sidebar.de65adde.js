import{d as v,eA as w,eB as k,r as m,b as a,eu as s,a_ as u,eC as _,e as p,eD as b,ey as f,f as h,I as g,ew as c,c as x,w as C,u as D,t as I}from"./outputWidgets.bf2ccc30.js";import{w as B}from"./icons.eae3993a.js";import{T as S}from"./Tooltip.0c556cb5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="6cf45819-11a4-4bd7-9bb9-e81daa92508f",t._sentryDebugIdIdentifier="sentry-dbid-6cf45819-11a4-4bd7-9bb9-e81daa92508f")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},A={key:1,class:"tag beta"},L={key:2,class:"tag cloud"},R=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),d=k(),l=m((i=d.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),l.value=n.path)};return(n,z)=>(a(),s("div",T,[(a(!0),s(u,null,_(n.sections,r=>(a(),s("div",{key:r.name,class:"section"},[p("span",N,b(r.name),1),(a(!0),s(u,null,_(r.items,e=>(a(),s("div",{key:e.name,role:"button",class:f(["item",{active:l.value===e.path,disabled:e.unavailable||r.cloud}]),tabindex:"0",onClick:F=>y(e)},[h(g,{class:f(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,b(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):c("",!0),e.beta?(a(),s("span",A,"BETA")):c("",!0),e.cloud?(a(),s("span",L,"CLOUD")):c("",!0),e.warning?(a(),x(S,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:C(()=>[h(g,{path:D(B),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):c("",!0)],10,O))),128))]))),128))]))}});const q=I(R,[["__scopeId","data-v-9c95c206"]]);export{q as S};
//# sourceMappingURL=Sidebar.de65adde.js.map
