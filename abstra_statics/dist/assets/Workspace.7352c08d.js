import{d as w,eA as B,eB as D,H as v,r as N,b as t,c as d,w as o,ev as l,eC as y,u as c,cw as L,aD as g,bf as T,f as s,I as h,ar as V,eD as $,ex as k,bh as E,v as x,eE as P,eF as R,e as I,a as M}from"./outputWidgets.33535317.js";import{p as W,w as q,k as F,s as H,a as j,b as G,v as z,c as J,d as K}from"./icons.3c082a53.js";import{_ as O}from"./logo.084e5d7c.js";import{B as Q}from"./BaseLayout.cc1927cc.js";import{N as U}from"./NavbarControls.3f00cd49.js";import{c as X}from"./index.eba4e2d9.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.d717d72e.js";import"./ant-design.c6c2096e.js";import"./index.2a50b107.js";import"./Modal.40f2d981.js";import"./Typography.6c9836cc.js";import"./Link.429288d8.js";import"./Base.abc79167.js";import"./workspaces.a9416c96.js";import"./runnerData.613205a3.js";import"./url.807a6d7f.js";import"./record.49cb918d.js";import"./pubsub.fa124b5f.js";import"./asyncComputed.eceaf3f4.js";import"./envVars.187204be.js";import"./index.b50f735b.js";import"./Paragraph.e5c0c444.js";import"./Text.0d020666.js";import"./popupNotifcation.ce5e5591.js";import"./index.aaedd1ff.js";import"./CloseCircleOutlined.c170673f.js";import"./index.61f765d7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b0a6885c.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6cc6c5d6-da43-404c-abd9-99e41323ee5e",e._sentryDebugIdIdentifier="sentry-dbid-6cc6c5d6-da43-404c-abd9-99e41323ee5e")}catch{}})();const Y={key:0,class:"collapsible"},Z={key:1,class:"collapsible"},ee=w({__name:"Sidebar",setup(e){const n=B(),p=D();function _(){var m,r;return[(r=(m=b.value.map(a=>a.children).flat().find(a=>a.path===p.path))==null?void 0:m.name)!=null?r:"Workflow"]}const C=v(_),i=N(!1),f=()=>{i.value=!i.value},b=v(()=>[{name:"Project",children:[{name:"Stages",icon:W,path:"/_editor/stages"},{name:"Workflow",icon:q,path:"/_editor/workflow"},{name:"Threads",icon:F,path:"/_editor/kanban"}]},{name:"Settings",children:[{name:"Style",icon:H,path:"/_editor/style"},{name:"Sidebar",icon:j,path:"/_editor/sidebar"},{name:"Requirements",icon:G,path:"/_editor/requirements"},{name:"Env Vars",icon:z,path:"/_editor/env-vars"}]}]),A=u=>{n.push(u.path)};return(u,m)=>(t(),d(c(E),{"inline-collapsed":i.value,"selected-keys":C.value,style:{display:"flex","flex-direction":"column"}},{default:o(()=>[(t(!0),l(g,null,y(b.value,r=>(t(),d(c(L),{key:r.name,title:r.name},{default:o(()=>[(t(!0),l(g,null,y(r.children,a=>(t(),d(c(T),{key:a.name,role:"button",tabindex:"0",onClick:le=>A(a)},{icon:o(()=>[s(h,{path:a.icon,width:"18",height:"18"},null,8,["path"])]),default:o(()=>[V($(a.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1032,["title"]))),128)),i.value?(t(),l("div",Y,[s(h,{path:c(J),onClick:f},null,8,["path"])])):k("",!0),i.value?k("",!0):(t(),l("div",Z,[s(h,{path:c(K),onClick:f},null,8,["path"])]))]),_:1},8,["inline-collapsed","selected-keys"]))}});const te=x(ee,[["__scopeId","data-v-70171c75"]]);const oe={},S=e=>(P("data-v-81cd596e"),e=e(),R(),e),ae={class:"logo"},se=S(()=>I("img",{src:O,alt:"Abstra cloud logo"},null,-1)),ne=S(()=>I("span",null," Abstra ",-1)),re=[se,ne];function ce(e,n){return t(),l("div",ae,re)}const ie=x(oe,[["render",ce],["__scopeId","data-v-81cd596e"]]),We=w({__name:"Workspace",setup(e){return(n,p)=>{const _=M("router-view");return t(),d(Q,{"full-canvas":""},{navbar:o(()=>[s(c(X),{style:{padding:"5px 25px"}},{title:o(()=>[s(ie)]),extra:o(()=>[s(U,{"show-github-stars":"","show-v-s-code-button":""})]),_:1})]),sidebar:o(()=>[s(te,{class:"sidebar"})]),content:o(()=>[s(_)]),_:1})}}});export{We as default};
//# sourceMappingURL=Workspace.7352c08d.js.map