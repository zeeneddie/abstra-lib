import{d as b,eA as y,eB as k,r as w,G as x,b as n,c as l,w as t,ev as h,eC as I,u as d,bf as C,ez as f,f as s,I as B,aq as N,eD as S,bq as D,bh as V,v as A,eE as L,eF as E,e as g,a as _,ex as T}from"./outputWidgets.31ce2d5c.js";import{h as q,c as P,m as $,p as z}from"./icons.266b547d.js";import{_ as F}from"./logo.084e5d7c.js";import{B as H}from"./BaseLayout.bada4c41.js";import{N as M}from"./NavbarControls.afcfe3f2.js";import{c as R}from"./index.cad5b763.js";import"./workspaces.f1f3f168.js";import"./record.b2148451.js";import"./pubsub.2d9ab3f4.js";import"./url.94a5ee71.js";import"./popupNotifcation.2de4b14e.js";import"./asyncComputed.7e3e21f4.js";import"./index.dcfaf8a5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js";import"./ant-design.feb03817.js";import"./index.7e964756.js";import"./Modal.32a7843c.js";import"./index.5765ee72.js";import"./Text.46c5bec2.js";import"./Base.eeda2dae.js";import"./index.3e9e5589.js";import"./Link.c257b01e.js";import"./Title.951eccc5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ecabd4a4-6d17-47b4-9cb0-fa57247cb29e",e._sentryDebugIdIdentifier="sentry-dbid-ecabd4a4-6d17-47b4-9cb0-fa57247cb29e")}catch{}})();const W=b({__name:"Sidebar",setup(e){var m;const o=y(),c=k(),r=w((m=c.name)!=null?m:"forms"),u=x(()=>[{name:"Home",icon:q,path:"home"},{name:"Style settings",icon:P,path:"style"},{name:"Sidebar settings",icon:$,path:"sidebar"},{name:"Python Packages",icon:z,path:"requirements"}]),i=p=>{o.push(p.path),r.value=p.path};return(p,X)=>(n(),l(d(V),{"inline-collapsed":""},{default:t(()=>[(n(!0),h(D,null,I(u.value,a=>(n(),l(d(C),{key:a.name,role:"button",class:f({active:r.value===a.path}),tabindex:"0",onClick:Y=>i(a)},{icon:t(()=>[s(B,{class:f({active:r.value===a.path}),path:a.icon,width:"20",height:"20"},null,8,["class","path"])]),title:t(()=>[N(S(a.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}))}});const G={},v=e=>(L("data-v-81cd596e"),e=e(),E(),e),j={class:"logo"},J=v(()=>g("img",{src:F,alt:"Abstra cloud logo"},null,-1)),K=v(()=>g("span",null," Abstra ",-1)),O=[J,K];function Q(e,o){return n(),h("div",j,O)}const U=A(G,[["render",Q],["__scopeId","data-v-81cd596e"]]),xe=b({__name:"Workspace",setup(e){return(o,c)=>{const r=_("ant-button"),u=_("router-link"),i=_("router-view");return n(),l(H,null,{navbar:t(()=>[s(d(R),{style:{padding:"5px 25px"}},{title:t(()=>[s(U)]),extra:t(()=>[s(M,{"show-github-stars":""},{default:t(()=>[T("",!0)]),_:1})]),_:1})]),sidebar:t(()=>[s(W,{class:"sidebar"})]),content:t(()=>[s(i)]),_:1})}}});export{xe as default};
//# sourceMappingURL=Workspace.ce599bdb.js.map
