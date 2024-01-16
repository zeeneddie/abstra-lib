import{d as y,eB as h,b as s,ev as d,f as e,w as o,u as t,c as g,bq as w,aq as a,bg as v,cC as k}from"./outputWidgets.781e41f9.js";import{a as I}from"./asyncComputed.d06d5356.js";import"./authorManager.2805bec3.js";import{B as j,a as A}from"./build.e3a78b95.js";import"./index.fc2f40fb.js";import{P as B}from"./project.373df54c.js";import{_ as S}from"./component.vue_vue_type_script_setup_true_lang.c89d053f.js";import{a as T,A as x}from"./Title.bf1f8106.js";import{A as i}from"./Text.6168f33a.js";import{A as C}from"./Link.77931b3a.js";import"./index.cf4c23b9.js";import"./record.71f43d7d.js";import"./pubsub.2273fc34.js";import"./Log.e9aac728.js";import"./ant-design.e0bbd844.js";import"./index.609ad91a.js";import"./Modal.3a32e945.js";import"./StarFilled.fad29e50.js";import"./Timeline.31655e29.js";import"./WarningFilled.d99917ef.js";import"./index.db0f7a49.js";import"./BaseLayout.afa95ff0.js";import"./log.7fb94d10.js";import"./index.3c3518df.js";import"./TabPane.6d00c211.js";import"./hasIn.205b6afa.js";import"./index.82ed657d.js";import"./isNumeric.75337b1e.js";import"./icons.0ffc383b.js";import"./index.c9303d4d.js";import"./FormItem.341ebdb6.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="4a157c78-47d1-497d-8462-1225ba9988c7",r._sentryDebugIdIdentifier="sentry-dbid-4a157c78-47d1-497d-8462-1225ba9988c7")}catch{}})();const D={key:0},L={key:2},ut=y({__name:"Live",setup(r){const p=h().params.projectId,{loading:c,result:l}=I(async()=>{const u=(await j.list(p)).find(_=>_.latest);if(!u)return null;const[f,b]=await Promise.all([A.get(u.id),B.get(p)]);return{buildSpec:f,project:b}});return(m,u)=>(s(),d(w,null,[e(t(T),null,{default:o(()=>[a("Live build")]),_:1}),e(t(x),null,{default:o(()=>[a(" This is where you can view your current active build. On this page, you can see the parts that make up your project and access the links to each form within it. ")]),_:1}),t(c)?(s(),d("div",D,[e(t(v))])):t(l)?(s(),g(S,{key:1,subdomain:t(l).project.subdomain,"is-live":!0,"build-spec":t(l).buildSpec},null,8,["subdomain","build-spec"])):(s(),d("div",L,[e(t(k),{direction:"vertical"},{default:o(()=>[e(t(i),null,{default:o(()=>[a("Install abstra using pip:")]),_:1}),e(t(i),{code:"",copyable:""},{default:o(()=>[a("pip install abstra")]),_:1}),e(t(i),null,{default:o(()=>[a("Start a new project using our CLI")]),_:1}),e(t(i),{code:"",copyable:""},{default:o(()=>[a("abstra serve my-new-project")]),_:1}),e(t(i),null,{default:o(()=>[a(" If you have any questions, please reach out to our "),e(t(C),{href:"https://discord.gg/abstra",target:"_blank"},{default:o(()=>[a(" discord channel ")]),_:1})]),_:1})]),_:1})]))],64))}});export{ut as default};
//# sourceMappingURL=Live.79b34cd4.js.map
