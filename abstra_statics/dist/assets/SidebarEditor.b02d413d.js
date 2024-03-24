import{d as y,r as g,J as k,o as v,eM as u,b as c,c as f,w as a,f as t,u as e,ar as x,cE as V,e as r,eD as _,bA as A}from"./outputWidgets.fac45c48.js";import{d as D}from"./vuedraggable.umd.dc58e894.js";import{_ as I}from"./SaveButton.vue_vue_type_script_setup_true_lang.4c798035.js";import{a as S,A as C}from"./index.7557da5a.js";import{A as E}from"./Title.2e4b2563.js";import{A as h}from"./index.b3e6ec9d.js";import{A as b}from"./index.f50ffb54.js";import{A as F,F as L}from"./Form.52913586.js";import{W as T}from"./workspaces.825cc410.js";import{a as U}from"./asyncComputed.c2ace6d4.js";import"./envVars.0832ef9b.js";import{L as $}from"./CircularLoading.d9228ed5.js";import{S as B}from"./SidebarPreview.ff2abf7f.js";import"./ant-design.473132d5.js";import"./index.71141a44.js";import"./Modal.a0857891.js";import"./Typography.aaa65d83.js";import"./Link.fedcf51b.js";import"./Base.3a461843.js";import"./hasIn.43400675.js";import"./runnerData.c5c21e00.js";import"./url.6ba1dc24.js";import"./record.8066e75e.js";import"./pubsub.8a639700.js";import"./PlayerNavbar.3cdfb1d3.js";import"./index.a0e13257.js";import"./icons.80c908ff.js";import"./repository.ef09eea3.js";import"./ArrowRightOutlined.08fa31dd.js";import"./WidgetsFrame.8fb0e8a6.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="32fca5d6-9619-408a-86b0-81abb21a5b91",s._sentryDebugIdIdentifier="sentry-dbid-32fca5d6-9619-408a-86b0-81abb21a5b91")}catch{}})();const M=r("span",null,"Route",-1),N=r("span",null,"Title",-1),j=r("span",null,"Visible",-1),R={style:{flex:"1 0"}},W={style:{flex:"1 0"}},q=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:o}){const n=s,i=g([]),p=()=>o("update:modelValue",i.value);return k(()=>n.modelValue,(d,m)=>{u.exports.isEqual(d,m)||(i.value=u.exports.cloneDeep(d))}),v(()=>{i.value=u.exports.cloneDeep(n.modelValue)}),(d,m)=>(c(),f(e(F),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:a(()=>[t(e(h),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:a(()=>[t(e(E),{level:4,style:{margin:"0"}},{default:a(()=>[x("Sidebar items")]),_:1}),t(I,{model:d.workspace},null,8,["model"])]),_:1}),t(e(C),{bordered:""},{header:a(()=>[t(e(V),{style:{width:"100%","justify-content":"space-between"}},{default:a(()=>[M,t(e(b),{type:"vertical"}),N,t(e(b),{type:"vertical"}),j]),_:1})]),default:a(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:p},{item:a(({element:l})=>[t(e(S),{style:{cursor:"ns-resize"}},{default:a(()=>[r("span",R,"/"+_(l.path),1),r("span",W,_(l.name),1),t(e(A),{checked:l.visible,"onUpdate:checked":w=>l.visible=w,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),z={style:{width:"50%"}},J={style:{width:"50%"}},ke=y({__name:"SidebarEditor",setup(s){const{result:o,loading:n}=U(()=>T.get());return(i,p)=>e(n)||!e(o)?(c(),f($,{key:0})):(c(),f(e(L),{key:1,style:{width:"100%",padding:"40px 120px"}},{default:a(()=>[t(e(h),{gap:"40"},{default:a(()=>[r("div",z,[t(q,{modelValue:e(o).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(o).sidebar=d),workspace:e(o)},null,8,["modelValue","workspace"])]),r("div",J,[t(B,{workspace:e(o),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))}});export{ke as default};
//# sourceMappingURL=SidebarEditor.b02d413d.js.map
