import{d as w,eA as B,eB as D,H as v,r as N,b as t,c as d,w as o,ev as l,eC as y,u as i,cw as L,aD as g,bf as T,f as s,I as f,ar as V,eD as $,ex as k,bh as E,v as x,eE as P,eF as R,e as I,a as M}from"./outputWidgets.cb8125c8.js";import{p as W,w as q,k as F,s as H,a as j,b as G,v as z,c as J,d as K}from"./icons.761f499f.js";import{_ as O}from"./logo.084e5d7c.js";import{B as Q}from"./BaseLayout.e3221a94.js";import{N as U}from"./NavbarControls.683d8a83.js";import{c as X}from"./index.dfe7eea5.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.752d1ba4.js";import"./ant-design.178d8a9a.js";import"./index.980cd2fb.js";import"./Modal.945e24ca.js";import"./Typography.df8b404a.js";import"./Link.82536732.js";import"./Base.78af0cff.js";import"./workspaces.1141f63b.js";import"./runnerData.c28e6b00.js";import"./url.4e105e46.js";import"./record.ccc69b14.js";import"./pubsub.6ee8a225.js";import"./asyncComputed.6371a492.js";import"./envVars.04645c05.js";import"./index.8a826ec1.js";import"./Paragraph.10cdb8a2.js";import"./Text.43513288.js";import"./popupNotifcation.847864fc.js";import"./index.9597c69d.js";import"./CloseCircleOutlined.6880f9ed.js";import"./index.ba9bbc88.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f6f3e050.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="47481bd1-ff1b-4d1b-8590-d458a9460566",e._sentryDebugIdIdentifier="sentry-dbid-47481bd1-ff1b-4d1b-8590-d458a9460566")}catch{}})();const Y={key:0,class:"collapsible"},Z={key:1,class:"collapsible"},ee=w({__name:"Sidebar",setup(e){const n=B(),p=D();function _(){var m,r;return[(r=(m=b.value.map(a=>a.children).flat().find(a=>a.path===p.path))==null?void 0:m.name)!=null?r:"Workflow"]}const C=v(_),c=N(!1),h=()=>{c.value=!c.value},b=v(()=>[{name:"Project",children:[{name:"Stages",icon:W,path:"/_editor/stages"},{name:"Workflow",icon:q,path:"/_editor/workflow"},{name:"Threads",icon:F,path:"/_editor/kanban"}]},{name:"Settings",children:[{name:"Style",icon:H,path:"/_editor/style"},{name:"Sidebar",icon:j,path:"/_editor/sidebar"},{name:"Requirements",icon:G,path:"/_editor/requirements"},{name:"Env Vars",icon:z,path:"/_editor/env-vars"}]}]),A=u=>{n.push(u.path)};return(u,m)=>(t(),d(i(E),{"inline-collapsed":c.value,"selected-keys":C.value,style:{display:"flex","flex-direction":"column"}},{default:o(()=>[(t(!0),l(g,null,y(b.value,r=>(t(),d(i(L),{key:r.name,title:r.name},{default:o(()=>[(t(!0),l(g,null,y(r.children,a=>(t(),d(i(T),{key:a.name,role:"button",tabindex:"0",onClick:le=>A(a)},{icon:o(()=>[s(f,{path:a.icon,width:"18",height:"18"},null,8,["path"])]),default:o(()=>[V($(a.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1032,["title"]))),128)),c.value?(t(),l("div",Y,[s(f,{path:i(J),onClick:h},null,8,["path"])])):k("",!0),c.value?k("",!0):(t(),l("div",Z,[s(f,{path:i(K),onClick:h},null,8,["path"])]))]),_:1},8,["inline-collapsed","selected-keys"]))}});const te=x(ee,[["__scopeId","data-v-70171c75"]]);const oe={},S=e=>(P("data-v-81cd596e"),e=e(),R(),e),ae={class:"logo"},se=S(()=>I("img",{src:O,alt:"Abstra cloud logo"},null,-1)),ne=S(()=>I("span",null," Abstra ",-1)),re=[se,ne];function ie(e,n){return t(),l("div",ae,re)}const ce=x(oe,[["render",ie],["__scopeId","data-v-81cd596e"]]),We=w({__name:"Workspace",setup(e){return(n,p)=>{const _=M("router-view");return t(),d(Q,{"full-canvas":""},{navbar:o(()=>[s(i(X),{style:{padding:"5px 25px"}},{title:o(()=>[s(ce)]),extra:o(()=>[s(U,{"show-github-stars":"","show-v-s-code-button":""})]),_:1})]),sidebar:o(()=>[s(te,{class:"sidebar"})]),content:o(()=>[s(_)]),_:1})}}});export{We as default};
//# sourceMappingURL=Workspace.fb2251a0.js.map
