import{d as b,ey as w,ez as y,r as k,F as x,b as n,c as l,w as t,et as h,eA as I,u as d,bd as C,ex as f,f as s,I as B,ao as N,eB as D,bo as S,bf as V,t as A,eC as L,eD as T,e as g,a as p,ev as E}from"./outputWidgets.517466a4.js";import{h as $,s as z}from"./icons.18ac3d6d.js";import{_ as F}from"./logo.084e5d7c.js";import{B as H}from"./BaseLayout.7babf70d.js";import{N as M}from"./NavbarControls.86f8b982.js";import{c as R}from"./index.ada15ca9.js";import"./asyncComputed.4cc49353.js";import"./index.81295ba2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.541da426.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.ba70e99c.js";import"./ant-design.6f3f0026.js";import"./index.79f0c9dc.js";import"./Modal.c37f1dd1.js";import"./storage.a7faa4ce.js";import"./Link.0df5f530.js";import"./Text.b4fa08c4.js";import"./index.61a3d490.js";import"./Title.50fff1e9.js";import"./index.60da12cf.js";import"./workspaces.c3f6c735.js";import"./record.00f55d8c.js";import"./pubsub.1c68a664.js";import"./url.f9726388.js";import"./popupNotifcation.4dba9581.js";import"./CircularLoading.c3f6250e.js";import"./index.d6f709b0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e2ee1562-b0b9-41e2-b170-eaf798b008c6",e._sentryDebugIdIdentifier="sentry-dbid-e2ee1562-b0b9-41e2-b170-eaf798b008c6")}catch{}})();const W=b({__name:"Sidebar",setup(e){var m;const o=w(),c=y(),r=k((m=c.name)!=null?m:"forms"),u=x(()=>[{name:"Home",icon:$,path:"home"},{name:"Settings",icon:z,path:"settings"}]),i=_=>{o.push(_.path),r.value=_.path};return(_,Q)=>(n(),l(d(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),h(S,null,I(u.value,a=>(n(),l(d(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:U=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(D(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const P={},v=e=>(L("data-v-81cd596e"),e=e(),T(),e),j={class:"logo"},q=v(()=>g("img",{src:F,alt:"Abstra cloud logo"},null,-1)),G=v(()=>g("span",null," Abstra ",-1)),J=[q,G];function K(e,o){return n(),h("div",j,J)}const O=A(P,[["render",K],["__scopeId","data-v-81cd596e"]]),xe=b({__name:"Workspace",setup(e){return(o,c)=>{const r=p("ant-button"),u=p("router-link"),i=p("router-view");return n(),l(H,null,{navbar:t(()=>[s(d(R),{style:{padding:"5px 25px"}},{title:t(()=>[s(O)]),extra:t(()=>[s(M,{"show-github-stars":""},{default:t(()=>[E("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(W,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{xe as default};
//# sourceMappingURL=Workspace.85cf69ea.js.map
