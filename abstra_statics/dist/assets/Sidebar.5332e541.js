import{d as v,eA as w,eB as k,r as m,b as a,eu as s,a_ as u,eC as _,e as p,eD as f,ey as b,f as h,I as g,ew as r,c as x,w as C,u as D,t as I}from"./outputWidgets.7cbc6f77.js";import{w as B}from"./icons.b2f60bf4.js";import{T as S}from"./Tooltip.72370848.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="d5c25ca9-d18f-4fe5-b664-fb09d2ec0e1d",t._sentryDebugIdIdentifier="sentry-dbid-d5c25ca9-d18f-4fe5-b664-fb09d2ec0e1d")}catch{}})();const T={class:"sidebar"},N={class:"section-name"},O=["onClick"],E={class:"item-name"},V={key:0,class:"tag soon"},A={key:1,class:"tag beta"},L={key:2,class:"tag cloud"},R=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),l=k(),d=m((i=l.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),d.value=n.path)};return(n,z)=>(a(),s("div",T,[(a(!0),s(u,null,_(n.sections,c=>(a(),s("div",{key:c.name,class:"section"},[p("span",N,f(c.name),1),(a(!0),s(u,null,_(c.items,e=>(a(),s("div",{key:e.name,role:"button",class:b(["item",{active:d.value===e.path,disabled:e.unavailable||c.cloud}]),tabindex:"0",onClick:F=>y(e)},[h(g,{class:b(["icon",{disabled:e.unavailable,active:d.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,f(e.name),1),e.unavailable?(a(),s("span",V,"SOON")):r("",!0),e.beta?(a(),s("span",A,"BETA")):r("",!0),e.cloud?(a(),s("span",L,"CLOUD")):r("",!0),e.warning?(a(),x(S,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:C(()=>[h(g,{path:D(B),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):r("",!0)],10,O))),128))]))),128))]))}});const q=I(R,[["__scopeId","data-v-9c95c206"]]);export{q as S};
//# sourceMappingURL=Sidebar.5332e541.js.map
