import{d as v,ex as w,ey as k,r as m,b as a,c as s,bw as i,ez as _,er as p,eA as b,ew as f,e as h,I as g,eu as r,u as x,eq as I,bu as C,t as D}from"./registerWidgets.741285ec.js";import{b as S}from"./icons.ed9d50ce.js";import{T as B}from"./Tooltip.dc99131d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="5c4f612d-568c-45b9-9a47-c611ec3eb30c",t._sentryDebugIdIdentifier="sentry-dbid-5c4f612d-568c-45b9-9a47-c611ec3eb30c")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},z={key:1,class:"tag beta"},A={key:2,class:"tag cloud"},L=v({__name:"Sidebar",props:{sections:{}},setup(t){var u;const o=w(),d=k(),l=m((u=d.name)!=null?u:"forms"),y=n=>{n.unavailable||(o.push(n.path),l.value=n.path)};return(n,R)=>(a(),s("div",T,[(a(!0),s(i,null,_(n.sections,c=>(a(),s("div",{key:c.name,class:"section"},[p("span",N,b(c.name),1),(a(!0),s(i,null,_(c.items,e=>(a(),s("div",{key:e.name,role:"button",class:f(["item",{active:l.value===e.path,disabled:e.unavailable||c.cloud}]),tabindex:"0",onClick:q=>y(e)},[h(g,{class:f(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,b(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):r("",!0),e.beta?(a(),s("span",z,"BETA")):r("",!0),e.cloud?(a(),s("span",A,"CLOUD")):r("",!0),e.warning?(a(),x(B,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:I(()=>[h(g,{path:C(S),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):r("",!0)],10,O))),128))]))),128))]))}});const j=D(L,[["__scopeId","data-v-16ccb6d0"]]);export{j as S};
//# sourceMappingURL=Sidebar.1edde0bc.js.map