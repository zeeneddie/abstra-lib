import{d as y,eA as h,b as s,eu as d,f as e,w as a,u as t,c as g,b6 as w,az as o,bx as k,cG as v}from"./outputWidgets.3acae187.js";import{a as I}from"./asyncComputed.4acb40f3.js";import"./router.330b5ee2.js";import{B as j,a as A}from"./build.35c29208.js";import"./index.330e6f4e.js";import{P as x}from"./project.7c8c0251.js";import{_ as B}from"./component.vue_vue_type_script_setup_true_lang.8640713e.js";import{A as S}from"./Title.b0254e64.js";import{b as T,c as i,a as C}from"./index.d2e87b7c.js";import"./Form.01134ed5.js";import"./index.30e21000.js";import"./gateway.d73b54c4.js";import"./record.8667ddd6.js";import"./pubsub.bc590f31.js";import"./Log.5618fb77.js";import"./ant-design.0486e70d.js";import"./index.ea121cf6.js";import"./index.26b85772.js";import"./WarningFilled.d99917ef.js";import"./BaseLayout.550facf6.js";import"./index.f9c001fe.js";import"./index.ec1e7f1e.js";import"./TabPane.7427d21f.js";import"./icons.238cb834.js";import"./index.f791e12b.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="864a6156-6a5d-4f1d-9286-17aafec9607a",r._sentryDebugIdIdentifier="sentry-dbid-864a6156-6a5d-4f1d-9286-17aafec9607a")}catch{}})();const D={key:0},L={key:2},rt=y({__name:"Live",setup(r){const l=h().params.projectId,{loading:c,result:u}=I(async()=>{const p=(await j.list(l)).find(_=>_.latest);if(!p)return null;const[f,b]=await Promise.all([A.get(p.id),x.get(l)]);return{buildSpec:f,project:b}});return(m,p)=>(s(),d(w,null,[e(t(S),null,{default:a(()=>[o("Live build")]),_:1}),e(t(T),null,{default:a(()=>[o(" This is where you can view your current active build. On this page, you can see the parts that make up your project and access the links to each form within it. ")]),_:1}),t(c)?(s(),d("div",D,[e(t(k))])):t(u)?(s(),g(B,{key:1,subdomain:t(u).project.subdomain,"is-live":!0,"build-spec":t(u).buildSpec},null,8,["subdomain","build-spec"])):(s(),d("div",L,[e(t(v),{direction:"vertical"},{default:a(()=>[e(t(i),null,{default:a(()=>[o("Install abstra using pip:")]),_:1}),e(t(i),{code:"",copyable:""},{default:a(()=>[o("pip install abstra")]),_:1}),e(t(i),null,{default:a(()=>[o("Start a new project using our CLI")]),_:1}),e(t(i),{code:"",copyable:""},{default:a(()=>[o("abstra serve my-new-project")]),_:1}),e(t(i),null,{default:a(()=>[o(" If you have any questions, please reach out to our "),e(t(C),{href:"https://discord.gg/abstra",target:"_blank"},{default:a(()=>[o(" discord channel ")]),_:1})]),_:1})]),_:1})]))],64))}});export{rt as default};
//# sourceMappingURL=Live.ef3e4ce4.js.map
