import{d as p,eB as m,b as u,eu as l,f as t,w as a,u as e,c as f,a_ as b,aq as o,bu as _,cF as y}from"./outputWidgets.609857d3.js";import{a as d}from"./asyncComputed.ee441ca1.js";import{_ as h,g}from"./BuildInspector.vue_vue_type_script_setup_true_lang.547959a9.js";import{a as v}from"./router.1cab72b8.js";import"./index.bd6c8cf6.js";import{P as w}from"./project.bebd4cec.js";import{A as k}from"./Title.86fadf94.js";import{b as I,c as n}from"./Text.5910ec7d.js";import"./gateway.18443e48.js";import"./icons.ae3b09ff.js";import"./index.3cc9f02e.js";import"./Base.cff9ddf5.js";import"./transButton.29406144.js";import"./index.efb45bdb.js";import"./record.5fdd269a.js";import"./pubsub.54491294.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[s]="9b80c66b-6fa3-4628-b871-0ecd6c11a7bb",r._sentryDebugIdIdentifier="sentry-dbid-9b80c66b-6fa3-4628-b871-0ecd6c11a7bb")}catch{}})();const j={key:0},A={key:2},G=p({__name:"Live",setup(r){const s=m(),i=d(()=>g(s.params.projectId)),c=d(()=>w.get(s.params.projectId));return(T,x)=>(u(),l(b,null,[t(e(k),null,{default:a(()=>[o("Live build")]),_:1}),t(e(I),null,{default:a(()=>[o(" This is where you can view your current active build. On this page, you can see the parts that make up your project and access the links to each form within it. ")]),_:1}),e(i).loading.value?(u(),l("div",j,[t(e(_))])):e(i).result.value&&e(c).result.value?(u(),f(h,{key:1,subdomain:e(c).result.value.subdomain,"build-spec":e(i).result.value},null,8,["subdomain","build-spec"])):(u(),l("div",A,[t(e(y),{direction:"vertical"},{default:a(()=>[t(e(n),null,{default:a(()=>[o("Install abstra using pip:")]),_:1}),t(e(n),{code:"",copyable:""},{default:a(()=>[o("pip install abstra")]),_:1}),t(e(n),null,{default:a(()=>[o("Start a new project using our CLI")]),_:1}),t(e(n),{code:"",copyable:""},{default:a(()=>[o("abstra serve my-new-project")]),_:1}),t(e(n),null,{default:a(()=>[o(" If you have any questions, please reach out to our "),t(e(v),{href:"https://discord.gg/abstra",target:"_blank"},{default:a(()=>[o(" discord channel ")]),_:1})]),_:1})]),_:1})]))],64))}});export{G as default};
//# sourceMappingURL=Live.9f7c06e2.js.map
