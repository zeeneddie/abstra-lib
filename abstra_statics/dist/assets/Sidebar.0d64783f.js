import{d as v,r as w,b as a,c as s,F as u,L as _,H as k,J as m,x as p,N as b,G as h,e as f,I as g,D as r,t as x,w as D,z as I,q as C}from"./registerWidgets.60bba559.js";import{e as S}from"./icons.86798a2e.js";import{T as B}from"./Tooltip.c2c5e61a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="1ec32de3-7139-4c4e-825a-c218caa8c2a9",t._sentryDebugIdIdentifier="sentry-dbid-1ec32de3-7139-4c4e-825a-c218caa8c2a9")}catch{}})();const N={class:"sidebar"},T={class:"section-name"},O=["onClick"],E={class:"item-name"},L={key:0,class:"tag soon"},V={key:1,class:"tag beta"},z={key:2,class:"tag cloud"},F=v({__name:"Sidebar",props:{sections:null},setup(t){var i;const n=k(),d=m(),l=w((i=d.name)!=null?i:"forms"),y=o=>{o.unavailable||(n.push(o.path),l.value=o.path)};return(o,R)=>(a(),s("div",N,[(a(!0),s(u,null,_(t.sections,c=>(a(),s("div",{key:c.name,class:"section"},[p("span",T,b(c.name),1),(a(!0),s(u,null,_(c.items,e=>(a(),s("div",{key:e.name,role:"button",class:h(["item",{active:l.value===e.path,disabled:e.unavailable||c.cloud}]),tabindex:"0",onClick:q=>y(e)},[f(g,{class:h(["icon",{disabled:e.unavailable,active:l.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,b(e.name),1),e.unavailable?(a(),s("span",L,"SOON")):r("",!0),e.beta?(a(),s("span",V,"BETA")):r("",!0),e.cloud?(a(),s("span",z,"CLOUD")):r("",!0),e.warning?(a(),x(B,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:D(()=>[f(g,{path:I(S),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):r("",!0)],10,O))),128))]))),128))]))}});const J=C(F,[["__scopeId","data-v-65839ebd"]]);export{J as S};
//# sourceMappingURL=Sidebar.0d64783f.js.map
