import{K as n,L as p}from"./repository.2eb90ad1.js";import{E as a}from"./repository.c2276f1e.js";import{d as s,b as m,c,u as e}from"./outputWidgets.45c7404b.js";import{l as d}from"./index.b09af52a.js";import"./asyncComputed.b6502bd0.js";import"./workspaces.2b490d56.js";import"./runnerData.81b99867.js";import"./url.f504f2ef.js";import"./record.7138611e.js";import"./pubsub.fbad3310.js";import"./scripts.665a3586.js";import"./envVars.8f8e4a42.js";import"./api.d40f1f2f.js";import"./index.cf4c23b9.js";import"./icons.14bde68f.js";import"./contracts.generated.e817ffbe.js";import"./index.6031f34e.js";import"./ant-design.55f5e0ef.js";import"./index.c1134fe9.js";import"./Modal.4ec46017.js";import"./Text.9d46918a.js";import"./Base.7d2c537c.js";import"./Typography.1a23e608.js";import"./index.2d673020.js";import"./Link.0365adef.js";import"./Paragraph.2b21747d.js";import"./Title.a8c9b8de.js";import"./index.55b8a0fc.js";import"./index.688e30f9.js";import"./index.b1d3d30f.js";import"./CollapsePanel.1022ecad.js";import"./Timeline.2933e323.js";import"./index.e66da937.js";import"./index.63783465.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.d40c4b96.js";import"./Card.bb20108d.js";import"./TabPane.ab52f469.js";import"./hasIn.e0b0d824.js";import"./DownOutlined.89b35445.js";import"./index.c368f845.js";import"./Form.05416e25.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="2dde55a1-93da-4ce0-ae4c-41f66022ce85",t._sentryDebugIdIdentifier="sentry-dbid-2dde55a1-93da-4ce0-ae4c-41f66022ce85")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const eo=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new f,i=new p("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{eo as default};
//# sourceMappingURL=WorkflowKanban.3a486386.js.map
