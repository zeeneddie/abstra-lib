import{d as h,ey as w,ez as y,r as k,F as x,b as n,c as d,w as t,et as b,eA as I,u as l,bd as C,ex as f,f as s,I as B,ao as N,eB as D,bo as S,bf as V,t as A,eC as L,eD as T,e as g,a as p,ev as E}from"./outputWidgets.b00cf7e9.js";import{h as $,s as z}from"./icons.99873bd8.js";import{_ as F}from"./logo.084e5d7c.js";import{B as H}from"./BaseLayout.737caf54.js";import{N as M}from"./NavbarControls.e2e8ff8e.js";import{c as R}from"./index.0d76c058.js";import"./asyncComputed.1f0126f2.js";import"./index.24187c91.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1a9808bf.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.7c6446dc.js";import"./ant-design.2d18431c.js";import"./index.d004fd61.js";import"./Modal.f98e25b2.js";import"./storage.c80f95dc.js";import"./Link.29c2dd22.js";import"./Text.20fe3ce1.js";import"./index.77ec4d5c.js";import"./Title.334eceae.js";import"./index.c775a6c6.js";import"./workspaces.00b9975d.js";import"./record.2bf8fb00.js";import"./pubsub.b6fbda2c.js";import"./url.255821a6.js";import"./popupNotifcation.b91c8b3b.js";import"./CircularLoading.432b1cc5.js";import"./index.4b86cc41.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="a664a23c-5c19-457c-8dfa-39b2dfcf9355",e._sentryDebugIdIdentifier="sentry-dbid-a664a23c-5c19-457c-8dfa-39b2dfcf9355")}catch{}})();const W=h({__name:"Sidebar",setup(e){var m;const o=w(),c=y(),r=k((m=c.name)!=null?m:"forms"),u=x(()=>[{name:"Home",icon:$,path:"home"},{name:"Settings",icon:z,path:"settings"}]),i=_=>{o.push(_.path),r.value=_.path};return(_,Q)=>(n(),d(l(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),b(S,null,I(u.value,a=>(n(),d(l(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:U=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(D(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const P={},v=e=>(L("data-v-81cd596e"),e=e(),T(),e),j={class:"logo"},q=v(()=>g("img",{src:F,alt:"Abstra cloud logo"},null,-1)),G=v(()=>g("span",null," Abstra ",-1)),J=[q,G];function K(e,o){return n(),b("div",j,J)}const O=A(P,[["render",K],["__scopeId","data-v-81cd596e"]]),xe=h({__name:"Workspace",setup(e){return(o,c)=>{const r=p("ant-button"),u=p("router-link"),i=p("router-view");return n(),d(H,null,{navbar:t(()=>[s(l(R),{style:{padding:"5px 25px"}},{title:t(()=>[s(O)]),extra:t(()=>[s(M,{"show-github-stars":""},{default:t(()=>[E("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(W,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{xe as default};
//# sourceMappingURL=Workspace.3d6a32be.js.map
