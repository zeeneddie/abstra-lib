import{d as h,eA as w,eB as k,r as x,H as y,b as n,c as l,w as t,ev as b,eC as I,u as d,bu as C,ez as f,f as s,I as B,ar as N,eD as D,a$ as S,bw as V,v as A,eE as E,eF as L,e as g,a as p,ex as T}from"./outputWidgets.f2dbcdfc.js";import{h as $,s as H}from"./icons.ac84ddf6.js";import{_ as z}from"./logo.084e5d7c.js";import{B as F}from"./BaseLayout.49c9a2bb.js";import{N as M}from"./NavbarControls.964525b4.js";import{c as R}from"./index.ad281f8e.js";import"./asyncComputed.37132230.js";import"./index.a57e7d56.js";import"./pubsub.d8506141.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.07f8bbed.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.3acddd29.js";import"./ant-design.7bf5dcea.js";import"./index.ab2d11b8.js";import"./Modal.cc063c68.js";import"./Base.e7a1d92f.js";import"./Link.7ebe42d5.js";import"./index.75e649e2.js";import"./Paragraph.a4acc8de.js";import"./Text.e98aa09c.js";import"./workspaces.1bcacb1f.js";import"./runnerData.15c3b047.js";import"./url.978d277d.js";import"./record.50d91012.js";import"./popupNotifcation.87555d12.js";import"./CircularLoading.ca677d59.js";import"./index.1b352efb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1dff3b43-5e1b-44f9-a366-75e0291e5ca3",e._sentryDebugIdIdentifier="sentry-dbid-1dff3b43-5e1b-44f9-a366-75e0291e5ca3")}catch{}})();const W=h({__name:"Sidebar",setup(e){var m;const o=w(),c=k(),r=x((m=c.name)!=null?m:"forms"),u=y(()=>[{name:"Home",icon:$,path:"home"},{name:"Settings",icon:H,path:"settings"}]),i=_=>{o.push(_.path),r.value=_.path};return(_,Q)=>(n(),l(d(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),b(S,null,I(u.value,a=>(n(),l(d(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:U=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(D(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const P={},v=e=>(E("data-v-81cd596e"),e=e(),L(),e),j={class:"logo"},q=v(()=>g("img",{src:z,alt:"Abstra cloud logo"},null,-1)),G=v(()=>g("span",null," Abstra ",-1)),J=[q,G];function K(e,o){return n(),b("div",j,J)}const O=A(P,[["render",K],["__scopeId","data-v-81cd596e"]]),ye=h({__name:"Workspace",setup(e){return(o,c)=>{const r=p("ant-button"),u=p("router-link"),i=p("router-view");return n(),l(F,null,{navbar:t(()=>[s(d(R),{style:{padding:"5px 25px"}},{title:t(()=>[s(O)]),extra:t(()=>[s(M,{"show-github-stars":""},{default:t(()=>[T("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(W,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{ye as default};
//# sourceMappingURL=Workspace.a2c03dec.js.map
