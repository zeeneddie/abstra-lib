import{K as n,L as p}from"./repository.91b32d7f.js";import{E as s}from"./repository.0c57d545.js";import{d as a,b as m,c as f,u as e}from"./outputWidgets.bfafbcce.js";import{l as c}from"./index.9e4a9794.js";import"./asyncComputed.e3664e51.js";import"./workspaces.42b0ae7b.js";import"./runnerData.df5de691.js";import"./url.9fc5b682.js";import"./record.d891537d.js";import"./pubsub.4c5702fb.js";import"./scripts.97f2659d.js";import"./envVars.c243b1aa.js";import"./api.107a98b8.js";import"./index.cf4c23b9.js";import"./icons.ec0181ba.js";import"./contracts.generated.5f7fa2b8.js";import"./index.4ca0ad71.js";import"./ant-design.bdf85ef6.js";import"./index.ac17f1fb.js";import"./Modal.1cd57426.js";import"./Text.89636bb3.js";import"./Base.2d21206d.js";import"./Typography.a5f91748.js";import"./index.b512b5c1.js";import"./Link.81d3b598.js";import"./Paragraph.cec4f59f.js";import"./Title.dede4192.js";import"./index.ef6b4543.js";import"./index.83a062f8.js";import"./index.762aeaa5.js";import"./CollapsePanel.10cadb68.js";import"./Timeline.c174eac7.js";import"./index.7f9b2185.js";import"./index.ff038703.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.ea4cd56e.js";import"./Card.085a2fa4.js";import"./TabPane.8e75ea2e.js";import"./hasIn.ccde7955.js";import"./DownOutlined.31429673.js";import"./index.8cc101dc.js";import"./Form.07152d5a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="8699378a-e15f-459e-b7e7-f350fd185d0c",t._sentryDebugIdIdentifier="sentry-dbid-8699378a-e15f-459e-b7e7-f350fd185d0c")}catch{}})();class d{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const eo=a({__name:"WorkflowKanban",setup(t){const o=new s,r=new d,i=new p("kanban");return(u,y)=>(m(),f(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{eo as default};
//# sourceMappingURL=WorkflowKanban.73c76498.js.map
