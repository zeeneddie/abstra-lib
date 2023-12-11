import{d as y,eB as h,b as i,eu as c,f as t,w as a,u as e,c as g,a_ as w,aq as o,bu as k,cF as v}from"./outputWidgets.21f377c8.js";import{a as I}from"./asyncComputed.370fdc75.js";import{a as j}from"./router.95c1b235.js";import{B,a as A}from"./build.345aa54c.js";import"./index.ada89c5e.js";import{P as S}from"./project.514cf302.js";import{_ as T}from"./component.vue_vue_type_script_setup_true_lang.ffce812c.js";import{A as x}from"./Title.af50b526.js";import{b as C,c as s}from"./Text.07311513.js";import"./Base.59379838.js";import"./transButton.c639b300.js";import"./index.63051532.js";import"./gateway.8b828184.js";import"./record.b46190f7.js";import"./pubsub.1e530784.js";import"./icons.1c3e7b7d.js";import"./index.5dcb4f5c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="a36e2360-1353-4d1e-8fb1-2dd93b6b49a9",r._sentryDebugIdIdentifier="sentry-dbid-a36e2360-1353-4d1e-8fb1-2dd93b6b49a9")}catch{}})();const D={key:0},L={key:2},W=y({__name:"Live",setup(r){const d=h().params.projectId,{loading:p,result:u}=I(async()=>{const l=(await B.list(d)).find(_=>_.latest);if(!l)return null;const[m,b]=await Promise.all([A.get(l.id),S.get(d)]);return{buildSpec:m,project:b}});return(f,l)=>(i(),c(w,null,[t(e(x),null,{default:a(()=>[o("Live build")]),_:1}),t(e(C),null,{default:a(()=>[o(" This is where you can view your current active build. On this page, you can see the parts that make up your project and access the links to each form within it. ")]),_:1}),e(p)?(i(),c("div",D,[t(e(k))])):e(u)?(i(),g(T,{key:1,subdomain:e(u).project.subdomain,"build-spec":e(u).buildSpec},null,8,["subdomain","build-spec"])):(i(),c("div",L,[t(e(v),{direction:"vertical"},{default:a(()=>[t(e(s),null,{default:a(()=>[o("Install abstra using pip:")]),_:1}),t(e(s),{code:"",copyable:""},{default:a(()=>[o("pip install abstra")]),_:1}),t(e(s),null,{default:a(()=>[o("Start a new project using our CLI")]),_:1}),t(e(s),{code:"",copyable:""},{default:a(()=>[o("abstra serve my-new-project")]),_:1}),t(e(s),null,{default:a(()=>[o(" If you have any questions, please reach out to our "),t(e(j),{href:"https://discord.gg/abstra",target:"_blank"},{default:a(()=>[o(" discord channel ")]),_:1})]),_:1})]),_:1})]))],64))}});export{W as default};
//# sourceMappingURL=Live.f10fc9df.js.map
