import{d as w,eA as B,eB as D,H as v,r as N,b as t,c as l,w as o,ev as d,eC as y,u as i,cw as L,aD as g,bf as T,f as s,I as b,ar as V,eD as $,ex as k,bh as E,v as x,eE as P,eF as R,e as I,a as M}from"./outputWidgets.cb403911.js";import{p as W,w as q,k as F,s as H,a as j,b as G,v as z,c as J,d as K}from"./icons.aae3c493.js";import{_ as O}from"./logo.084e5d7c.js";import{B as Q}from"./BaseLayout.de97a8da.js";import{N as U}from"./NavbarControls.8f8b9561.js";import{c as X}from"./index.14a7b0ad.js";import"./workspaces.708eeb7e.js";import"./runnerData.7760bba6.js";import"./url.947a208d.js";import"./record.1cf44d32.js";import"./pubsub.b68b1f2c.js";import"./asyncComputed.e79d98d0.js";import"./envVars.716b1827.js";import"./index.834a7b7b.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.766cb25b.js";import"./ant-design.cd0744b8.js";import"./index.3f3dd84a.js";import"./Modal.8e17ec62.js";import"./Typography.1be659fb.js";import"./Link.e4c5d1e2.js";import"./Base.e3f83538.js";import"./CloseCircleOutlined.d981975e.js";import"./index.593c023f.js";import"./popupNotifcation.25cc8775.js";import"./index.ee47e378.js";import"./Text.685c8d87.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2e7aedec.js";import"./Paragraph.42173e08.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="46a5b056-4d2a-4268-a5bb-7b50b68d6bdd",e._sentryDebugIdIdentifier="sentry-dbid-46a5b056-4d2a-4268-a5bb-7b50b68d6bdd")}catch{}})();const Y={key:0,class:"collapsible"},Z={key:1,class:"collapsible"},ee=w({__name:"Sidebar",setup(e){const n=B(),p=D();function _(){var m,r;return[(r=(m=f.value.map(a=>a.children).flat().find(a=>a.path===p.path))==null?void 0:m.name)!=null?r:"Workflow"]}const C=v(_),c=N(!1),h=()=>{c.value=!c.value},f=v(()=>[{name:"Project",children:[{name:"Stages",icon:W,path:"/_editor/stages"},{name:"Workflow",icon:q,path:"/_editor/workflow"},{name:"Threads",icon:F,path:"/_editor/kanban"}]},{name:"Settings",children:[{name:"Style",icon:H,path:"/_editor/style"},{name:"Sidebar",icon:j,path:"/_editor/sidebar"},{name:"Requirements",icon:G,path:"/_editor/requirements"},{name:"Env Vars",icon:z,path:"/_editor/env-vars"}]}]),A=u=>{n.push(u.path)};return(u,m)=>(t(),l(i(E),{"inline-collapsed":c.value,"selected-keys":C.value,style:{display:"flex","flex-direction":"column"}},{default:o(()=>[(t(!0),d(g,null,y(f.value,r=>(t(),l(i(L),{key:r.name,title:r.name},{default:o(()=>[(t(!0),d(g,null,y(r.children,a=>(t(),l(i(T),{key:a.name,role:"button",tabindex:"0",onClick:de=>A(a)},{icon:o(()=>[s(b,{path:a.icon,width:"18",height:"18"},null,8,["path"])]),default:o(()=>[V($(a.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1032,["title"]))),128)),c.value?(t(),d("div",Y,[s(b,{path:i(J),onClick:h},null,8,["path"])])):k("",!0),c.value?k("",!0):(t(),d("div",Z,[s(b,{path:i(K),onClick:h},null,8,["path"])]))]),_:1},8,["inline-collapsed","selected-keys"]))}});const te=x(ee,[["__scopeId","data-v-70171c75"]]);const oe={},S=e=>(P("data-v-81cd596e"),e=e(),R(),e),ae={class:"logo"},se=S(()=>I("img",{src:O,alt:"Abstra cloud logo"},null,-1)),ne=S(()=>I("span",null," Abstra ",-1)),re=[se,ne];function ie(e,n){return t(),d("div",ae,re)}const ce=x(oe,[["render",ie],["__scopeId","data-v-81cd596e"]]),We=w({__name:"Workspace",setup(e){return(n,p)=>{const _=M("router-view");return t(),l(Q,{"full-canvas":""},{navbar:o(()=>[s(i(X),{style:{padding:"5px 25px"}},{title:o(()=>[s(ce)]),extra:o(()=>[s(U,{"show-github-stars":"","show-v-s-code-button":""})]),_:1})]),sidebar:o(()=>[s(te,{class:"sidebar"})]),content:o(()=>[s(_)]),_:1})}}});export{We as default};
//# sourceMappingURL=Workspace.c866e796.js.map
