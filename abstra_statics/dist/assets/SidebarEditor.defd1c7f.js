import{d as b,r as g,J as k,o as v,eM as u,b as c,c as f,w as a,f as t,u as e,ar as x,cE as V,e as r,eD as _,bA as A}from"./outputWidgets.33535317.js";import{d as D}from"./vuedraggable.umd.c36d8218.js";import{_ as I}from"./SaveButton.vue_vue_type_script_setup_true_lang.d717d72e.js";import{a as S,A as C}from"./index.03f7660d.js";import{A as E}from"./Title.55e2ce15.js";import{A as h}from"./index.aaedd1ff.js";import{A as y}from"./index.6172c911.js";import{A as F,F as L}from"./Form.bb02d3a3.js";import{W as T}from"./workspaces.a9416c96.js";import{a as U}from"./asyncComputed.eceaf3f4.js";import"./envVars.187204be.js";import{L as $}from"./CircularLoading.8656cac6.js";import{S as B}from"./SidebarPreview.393c8f32.js";import"./ant-design.c6c2096e.js";import"./index.2a50b107.js";import"./Modal.40f2d981.js";import"./Typography.6c9836cc.js";import"./Link.429288d8.js";import"./Base.abc79167.js";import"./hasIn.0dff4f2d.js";import"./runnerData.613205a3.js";import"./url.807a6d7f.js";import"./record.49cb918d.js";import"./pubsub.fa124b5f.js";import"./PlayerNavbar.4fe08d80.js";import"./index.b50f735b.js";import"./icons.3c082a53.js";import"./repository.5ea61edf.js";import"./ArrowRightOutlined.08fa31dd.js";import"./WidgetsFrame.3e5dcda2.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="37c3d60a-f785-43aa-8366-bfd32e2a7823",s._sentryDebugIdIdentifier="sentry-dbid-37c3d60a-f785-43aa-8366-bfd32e2a7823")}catch{}})();const M=r("span",null,"Route",-1),N=r("span",null,"Title",-1),j=r("span",null,"Visible",-1),R={style:{flex:"1 0"}},W={style:{flex:"1 0"}},q=b({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:o}){const n=s,i=g([]),p=()=>o("update:modelValue",i.value);return k(()=>n.modelValue,(d,m)=>{u.exports.isEqual(d,m)||(i.value=u.exports.cloneDeep(d))}),v(()=>{i.value=u.exports.cloneDeep(n.modelValue)}),(d,m)=>(c(),f(e(F),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:a(()=>[t(e(h),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:a(()=>[t(e(E),{level:4,style:{margin:"0"}},{default:a(()=>[x("Sidebar items")]),_:1}),t(I,{model:d.workspace},null,8,["model"])]),_:1}),t(e(C),{bordered:""},{header:a(()=>[t(e(V),{style:{width:"100%","justify-content":"space-between"}},{default:a(()=>[M,t(e(y),{type:"vertical"}),N,t(e(y),{type:"vertical"}),j]),_:1})]),default:a(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:p},{item:a(({element:l})=>[t(e(S),{style:{cursor:"ns-resize"}},{default:a(()=>[r("span",R,"/"+_(l.path),1),r("span",W,_(l.name),1),t(e(A),{checked:l.visible,"onUpdate:checked":w=>l.visible=w,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),z={style:{width:"50%"}},J={style:{width:"50%"}},ke=b({__name:"SidebarEditor",setup(s){const{result:o,loading:n}=U(()=>T.get());return(i,p)=>e(n)||!e(o)?(c(),f($,{key:0})):(c(),f(e(L),{key:1,style:{width:"100%",padding:"40px 120px"}},{default:a(()=>[t(e(h),{gap:"40"},{default:a(()=>[r("div",z,[t(q,{modelValue:e(o).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(o).sidebar=d),workspace:e(o)},null,8,["modelValue","workspace"])]),r("div",J,[t(B,{workspace:e(o),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))}});export{ke as default};
//# sourceMappingURL=SidebarEditor.defd1c7f.js.map