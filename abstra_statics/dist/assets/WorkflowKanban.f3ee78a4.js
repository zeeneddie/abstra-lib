import{K as n,L as p}from"./repository.22e280cb.js";import{E as s}from"./repository.1b3a1232.js";import{d as a,b as m,c as f,u as e}from"./outputWidgets.36438843.js";import{l as c}from"./index.d8a73281.js";import"./asyncComputed.337ea25d.js";import"./workspaces.fc8248ce.js";import"./runnerData.4f481531.js";import"./url.5c79ed51.js";import"./record.84099288.js";import"./pubsub.0ad28dde.js";import"./scripts.6de0afc0.js";import"./envVars.cc1ecbde.js";import"./api.bb51b754.js";import"./index.cf4c23b9.js";import"./PhScroll.vue.397a56f1.js";import"./PhWebhooksLogo.vue.b6887261.js";import"./index.173d5349.js";import"./ant-design.ae109f6e.js";import"./index.c7e21684.js";import"./Modal.bc5706c4.js";import"./Text.0a4c76ae.js";import"./index.6dc92ff0.js";import"./index.71c275d6.js";import"./Paragraph.db54cd0a.js";import"./index.60dd27c4.js";import"./Link.0405183d.js";import"./Title.06965b70.js";import"./index.df8ae7e5.js";import"./CollapsePanel.7869142e.js";import"./Timeline.d1256ee1.js";import"./index.eec227d3.js";import"./index.0d945e93.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.30a60503.js";import"./Card.5a1294b3.js";import"./TabPane.3879967a.js";import"./hasIn.0e346df9.js";import"./vuedraggable.umd.81aa9857.js";import"./index.2e37a3c1.js";import"./Form.89631493.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="97c5df58-0f28-4f77-92bc-567f90e899ed",t._sentryDebugIdIdentifier="sentry-dbid-97c5df58-0f28-4f77-92bc-567f90e899ed")}catch{}})();class d{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const to=a({__name:"WorkflowKanban",setup(t){const o=new s,r=new d,i=new p("kanban");return(u,y)=>(m(),f(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{to as default};
//# sourceMappingURL=WorkflowKanban.f3ee78a4.js.map