import{d as b,eA as w,eB as k,r as x,H as y,b as n,c as d,w as t,ev as h,eC as I,u as l,bu as C,ez as f,f as s,I as B,ar as N,eD as D,a$ as S,bw as V,v as A,eE as E,eF as L,e as g,a as p,ex as T}from"./outputWidgets.220c70d1.js";import{h as $,s as H}from"./icons.fdfbed6f.js";import{_ as z}from"./logo.084e5d7c.js";import{B as F}from"./BaseLayout.6de9eb7e.js";import{N as M}from"./NavbarControls.c9d9b358.js";import{c as R}from"./index.27add0f0.js";import"./index.7eafd91b.js";import"./pubsub.7b024ff2.js";import"./asyncComputed.20cd3652.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.43088df8.js";import"./ant-design.1d039466.js";import"./index.c4065685.js";import"./Modal.86b4188e.js";import"./Typography.344758c5.js";import"./Link.f4eda3e8.js";import"./Base.602a14c3.js";import"./index.2c5cf9d9.js";import"./workspaces.14474854.js";import"./runnerData.13f27192.js";import"./url.2d374c77.js";import"./record.8e7dde63.js";import"./popupNotifcation.69543925.js";import"./index.f5ba3119.js";import"./Text.31b6cae2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3fe65d64.js";import"./Paragraph.4c72ed81.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f38e1b86-ebd8-4703-ae3d-455dbc65fc29",e._sentryDebugIdIdentifier="sentry-dbid-f38e1b86-ebd8-4703-ae3d-455dbc65fc29")}catch{}})();const W=b({__name:"Sidebar",setup(e){var m;const o=w(),c=k(),r=x((m=c.name)!=null?m:"forms"),u=y(()=>[{name:"Home",icon:$,path:"home"},{name:"Settings",icon:H,path:"settings"}]),i=_=>{o.push(_.path),r.value=_.path};return(_,Q)=>(n(),d(l(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),h(S,null,I(u.value,a=>(n(),d(l(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:U=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(D(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const P={},v=e=>(E("data-v-81cd596e"),e=e(),L(),e),j={class:"logo"},q=v(()=>g("img",{src:z,alt:"Abstra cloud logo"},null,-1)),G=v(()=>g("span",null," Abstra ",-1)),J=[q,G];function K(e,o){return n(),h("div",j,J)}const O=A(P,[["render",K],["__scopeId","data-v-81cd596e"]]),ye=b({__name:"Workspace",setup(e){return(o,c)=>{const r=p("ant-button"),u=p("router-link"),i=p("router-view");return n(),d(F,null,{navbar:t(()=>[s(l(R),{style:{padding:"5px 25px"}},{title:t(()=>[s(O)]),extra:t(()=>[s(M,{"show-github-stars":""},{default:t(()=>[T("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(W,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{ye as default};
//# sourceMappingURL=Workspace.78578164.js.map
