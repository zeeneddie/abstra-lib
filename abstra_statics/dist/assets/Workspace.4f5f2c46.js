import{d as h,eA as w,eB as k,r as x,H as y,b as n,c as l,w as t,ev as b,eC as I,u as d,bu as C,ez as f,f as s,I as B,ar as N,eD as D,a$ as S,bw as V,v as A,eE as E,eF as L,e as g,a as p,ex as T}from"./outputWidgets.c849273f.js";import{h as $,s as H}from"./icons.5de06bbc.js";import{_ as z}from"./logo.084e5d7c.js";import{B as F}from"./BaseLayout.14faff94.js";import{N as M}from"./NavbarControls.ba003e1f.js";import{c as R}from"./index.d8f3b2c5.js";import"./index.ba6972e5.js";import"./pubsub.4b8cd066.js";import"./asyncComputed.53ec0023.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.fdac0a1a.js";import"./ant-design.b086c804.js";import"./index.b316b415.js";import"./Modal.37c66109.js";import"./Typography.69f3ca41.js";import"./Link.033fb53b.js";import"./Base.f58dc0d7.js";import"./index.df190dd4.js";import"./workspaces.d3b33248.js";import"./runnerData.d1133baa.js";import"./url.acb8fdc2.js";import"./record.7386625d.js";import"./popupNotifcation.b65ad660.js";import"./index.d9979e5f.js";import"./Text.4e6778b2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.527e9d50.js";import"./Paragraph.9b9c9580.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="157997d9-52c8-4c77-a2d8-179a4240bcef",e._sentryDebugIdIdentifier="sentry-dbid-157997d9-52c8-4c77-a2d8-179a4240bcef")}catch{}})();const W=h({__name:"Sidebar",setup(e){var m;const o=w(),c=k(),r=x((m=c.name)!=null?m:"forms"),u=y(()=>[{name:"Home",icon:$,path:"home"},{name:"Settings",icon:H,path:"settings"}]),i=_=>{o.push(_.path),r.value=_.path};return(_,Q)=>(n(),l(d(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),b(S,null,I(u.value,a=>(n(),l(d(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:U=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(D(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const P={},v=e=>(E("data-v-81cd596e"),e=e(),L(),e),j={class:"logo"},q=v(()=>g("img",{src:z,alt:"Abstra cloud logo"},null,-1)),G=v(()=>g("span",null," Abstra ",-1)),J=[q,G];function K(e,o){return n(),b("div",j,J)}const O=A(P,[["render",K],["__scopeId","data-v-81cd596e"]]),ye=h({__name:"Workspace",setup(e){return(o,c)=>{const r=p("ant-button"),u=p("router-link"),i=p("router-view");return n(),l(F,null,{navbar:t(()=>[s(d(R),{style:{padding:"5px 25px"}},{title:t(()=>[s(O)]),extra:t(()=>[s(M,{"show-github-stars":""},{default:t(()=>[T("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(W,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{ye as default};
//# sourceMappingURL=Workspace.4f5f2c46.js.map
