import{d as y,eA as h,b as s,eu as u,f as e,w as a,u as t,c as g,b6 as w,az as o,bx as k,cG as v}from"./outputWidgets.a177f9c3.js";import{a as I}from"./asyncComputed.acb737a7.js";import"./router.c47a87c6.js";import{B as j,a as A}from"./build.dca7c3c8.js";import"./index.049a6d97.js";import{P as x}from"./project.8ccdb31c.js";import{_ as B}from"./component.vue_vue_type_script_setup_true_lang.c0f2b2fd.js";import{A as S}from"./Title.cb335585.js";import{b as T,c as i,a as C}from"./index.57b83223.js";import"./Form.17a59008.js";import"./index.f5af42aa.js";import"./gateway.c17828e8.js";import"./record.56549bf6.js";import"./pubsub.a5b7cb2c.js";import"./Log.e07a747f.js";import"./ant-design.07b21cc9.js";import"./index.c1979ebf.js";import"./index.3783fce3.js";import"./WarningFilled.d99917ef.js";import"./BaseLayout.2b9dd6eb.js";import"./index.24dd2413.js";import"./index.9cafe5c9.js";import"./TabPane.17d9b922.js";import"./icons.7303f3f1.js";import"./index.e921cdf0.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="df22de5d-69a2-49da-9a3f-7c2c69863c7c",r._sentryDebugIdIdentifier="sentry-dbid-df22de5d-69a2-49da-9a3f-7c2c69863c7c")}catch{}})();const D={key:0},L={key:2},rt=y({__name:"Live",setup(r){const c=h().params.projectId,{loading:p,result:d}=I(async()=>{const l=(await j.list(c)).find(_=>_.latest);if(!l)return null;const[f,b]=await Promise.all([A.get(l.id),x.get(c)]);return{buildSpec:f,project:b}});return(m,l)=>(s(),u(w,null,[e(t(S),null,{default:a(()=>[o("Live build")]),_:1}),e(t(T),null,{default:a(()=>[o(" This is where you can view your current active build. On this page, you can see the parts that make up your project and access the links to each form within it. ")]),_:1}),t(p)?(s(),u("div",D,[e(t(k))])):t(d)?(s(),g(B,{key:1,subdomain:t(d).project.subdomain,"is-live":!0,"build-spec":t(d).buildSpec},null,8,["subdomain","build-spec"])):(s(),u("div",L,[e(t(v),{direction:"vertical"},{default:a(()=>[e(t(i),null,{default:a(()=>[o("Install abstra using pip:")]),_:1}),e(t(i),{code:"",copyable:""},{default:a(()=>[o("pip install abstra")]),_:1}),e(t(i),null,{default:a(()=>[o("Start a new project using our CLI")]),_:1}),e(t(i),{code:"",copyable:""},{default:a(()=>[o("abstra serve my-new-project")]),_:1}),e(t(i),null,{default:a(()=>[o(" If you have any questions, please reach out to our "),e(t(C),{href:"https://discord.gg/abstra",target:"_blank"},{default:a(()=>[o(" discord channel ")]),_:1})]),_:1})]),_:1})]))],64))}});export{rt as default};
//# sourceMappingURL=Live.86c2cee0.js.map
