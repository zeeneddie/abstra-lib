import{d as v,H as w,J as k,r as m,b as a,c as s,F as u,L as _,x as p,N as b,G as f,e as h,I as g,D as l,t as x,w as D,z as I,q as C}from"./registerWidgets.08d6baab.js";import{e as S}from"./icons.e8e5575c.js";import{T as B}from"./Tooltip.5e71bfd3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="4600a266-2f67-47a4-b66b-31d62f9a716d",t._sentryDebugIdIdentifier="sentry-dbid-4600a266-2f67-47a4-b66b-31d62f9a716d")}catch{}})();const N={class:"sidebar"},T={class:"section-name"},O=["onClick"],E={class:"item-name"},L={key:0,class:"tag soon"},V={key:1,class:"tag beta"},z={key:2,class:"tag cloud"},F=v({__name:"Sidebar",props:{sections:{}},setup(t){var i;const o=w(),c=k(),d=m((i=c.name)!=null?i:"forms"),y=n=>{n.unavailable||(o.push(n.path),d.value=n.path)};return(n,R)=>(a(),s("div",N,[(a(!0),s(u,null,_(n.sections,r=>(a(),s("div",{key:r.name,class:"section"},[p("span",T,b(r.name),1),(a(!0),s(u,null,_(r.items,e=>(a(),s("div",{key:e.name,role:"button",class:f(["item",{active:d.value===e.path,disabled:e.unavailable||r.cloud}]),tabindex:"0",onClick:q=>y(e)},[h(g,{class:f(["icon",{disabled:e.unavailable,active:d.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,b(e.name),1),e.unavailable?(a(),s("span",L,"SOON")):l("",!0),e.beta?(a(),s("span",V,"BETA")):l("",!0),e.cloud?(a(),s("span",z,"CLOUD")):l("",!0),e.warning?(a(),x(B,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:D(()=>[h(g,{path:I(S),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):l("",!0)],10,O))),128))]))),128))]))}});const J=C(F,[["__scopeId","data-v-65839ebd"]]);export{J as S};
//# sourceMappingURL=Sidebar.11eb2829.js.map
