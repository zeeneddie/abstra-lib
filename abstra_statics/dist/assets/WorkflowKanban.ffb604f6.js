import{K as n,E as p,L as a}from"./repository.6eb8eae7.js";import{d as s,b as m,c as d,u as e}from"./outputWidgets.b6281ddd.js";import{l as c}from"./fetch.5a688ff9.js";import"./asyncComputed.87b89de5.js";import"./workspaces.a9213051.js";import"./runnerData.91f9a612.js";import"./url.c9323ece.js";import"./record.5472cc64.js";import"./pubsub.3bfaef01.js";import"./scripts.fd4eface.js";import"./envVars.96f591c3.js";import"./api.4a03c3d3.js";import"./index.cf4c23b9.js";import"./metadata.718cc8ee.js";import"./PhCheckCircle.vue.536c701f.js";import"./PhScroll.vue.4a75e008.js";import"./PhWebhooksLogo.vue.b79e0b46.js";import"./ant-design.d420447b.js";import"./index.a577e013.js";import"./Modal.f720b408.js";import"./Text.266d831f.js";import"./index.be8ccb5d.js";import"./index.3f0e0d0a.js";import"./index.586a4633.js";import"./Paragraph.87e5c88f.js";import"./index.b28ca23f.js";import"./Link.a15e85a0.js";import"./Title.cf7b0ba4.js";import"./index.573da06b.js";import"./CollapsePanel.53b479cb.js";import"./index.6b6987a2.js";import"./index.f0121f4d.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.c13abb9f.js";import"./Card.691279c5.js";import"./index.81455936.js";import"./TabPane.fac8b66a.js";import"./hasIn.fa8badbc.js";import"./vuedraggable.umd.7f007131.js";import"./index.403dd354.js";import"./Form.64aa12be.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="d5e7795f-b3d0-48da-aa32-e449b25c12db",t._sentryDebugIdIdentifier="sentry-dbid-d5e7795f-b3d0-48da-aa32-e449b25c12db")}catch{}})();class f{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const ro=s({__name:"WorkflowKanban",setup(t){const o=new p,r=new f,i=new a("kanban");return(b,u)=>(m(),d(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{ro as default};
//# sourceMappingURL=WorkflowKanban.ffb604f6.js.map
