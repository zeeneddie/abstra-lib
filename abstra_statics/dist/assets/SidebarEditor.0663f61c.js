import{d as y,r as g,I as k,o as v,eM as c,b as u,c as f,w as a,f as t,u as e,aq as x,cD as V,e as r,eE as _,bz as A}from"./outputWidgets.36438843.js";import{d as D}from"./vuedraggable.umd.81aa9857.js";import{_ as I}from"./SaveButton.vue_vue_type_script_setup_true_lang.f47c39f6.js";import{a as S,A as C}from"./index.303a3a1d.js";import{A as E}from"./Title.06965b70.js";import{A as h}from"./index.173d5349.js";import{A as b}from"./index.eec227d3.js";import{A as F,F as L}from"./Form.89631493.js";import{W as U}from"./workspaces.fc8248ce.js";import{a as $}from"./asyncComputed.337ea25d.js";import"./envVars.cc1ecbde.js";import{L as B}from"./CircularLoading.cc0ba69e.js";import{S as M}from"./SidebarPreview.015025b1.js";import"./ant-design.ae109f6e.js";import"./index.c7e21684.js";import"./Modal.bc5706c4.js";import"./Text.0a4c76ae.js";import"./Link.0405183d.js";import"./hasIn.0e346df9.js";import"./runnerData.4f481531.js";import"./url.5c79ed51.js";import"./record.84099288.js";import"./pubsub.0ad28dde.js";import"./PlayerNavbar.b7b1ea68.js";import"./PhKanban.vue.0095fbc2.js";import"./index.d8a73281.js";import"./repository.1b3a1232.js";import"./index.60dd27c4.js";import"./Paragraph.db54cd0a.js";import"./index.46e7eb67.js";import"./WidgetsFrame.100bf0bd.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="f7c762f0-2b0c-4aa4-848a-a9c9ad8f1616",s._sentryDebugIdIdentifier="sentry-dbid-f7c762f0-2b0c-4aa4-848a-a9c9ad8f1616")}catch{}})();const N=r("span",null,"Route",-1),T=r("span",null,"Title",-1),j=r("span",null,"Visible",-1),q={style:{flex:"1 0"}},z={style:{flex:"1 0"}},R=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:o}){const n=s,i=g([]),p=()=>o("update:modelValue",i.value);return k(()=>n.modelValue,(d,m)=>{c.exports.isEqual(d,m)||(i.value=c.exports.cloneDeep(d))}),v(()=>{i.value=c.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),f(e(F),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:a(()=>[t(e(h),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:a(()=>[t(e(E),{level:4,style:{margin:"0"}},{default:a(()=>[x("Sidebar items")]),_:1}),t(I,{model:d.workspace},null,8,["model"])]),_:1}),t(e(C),{bordered:""},{header:a(()=>[t(e(V),{style:{width:"100%","justify-content":"space-between"}},{default:a(()=>[N,t(e(b),{type:"vertical"}),T,t(e(b),{type:"vertical"}),j]),_:1})]),default:a(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:p},{item:a(({element:l})=>[t(e(S),{style:{cursor:"ns-resize"}},{default:a(()=>[r("span",q,"/"+_(l.path),1),r("span",z,_(l.name),1),t(e(A),{checked:l.visible,"onUpdate:checked":w=>l.visible=w,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),W={style:{width:"50%"}},P={style:{width:"50%"}},ve=y({__name:"SidebarEditor",setup(s){const{result:o,loading:n}=$(()=>U.get());return(i,p)=>e(n)||!e(o)?(u(),f(B,{key:0})):(u(),f(e(L),{key:1,style:{width:"100%",padding:"40px 120px"}},{default:a(()=>[t(e(h),{gap:"40"},{default:a(()=>[r("div",W,[t(R,{modelValue:e(o).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(o).sidebar=d),workspace:e(o)},null,8,["modelValue","workspace"])]),r("div",P,[t(M,{workspace:e(o),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))}});export{ve as default};
//# sourceMappingURL=SidebarEditor.0663f61c.js.map
