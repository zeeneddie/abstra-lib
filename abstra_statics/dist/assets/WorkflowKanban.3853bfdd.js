import{K as n,L as p}from"./repository.42637fa0.js";import{E as a}from"./repository.2261201e.js";import{d as s,b as m,c,u as e}from"./outputWidgets.8c60f264.js";import{l as d}from"./index.ac291587.js";import"./asyncComputed.ec57bff0.js";import"./api.4aa429e6.js";import"./index.cf4c23b9.js";import"./icons.a1b2387c.js";import"./ant-design.efa26625.js";import"./index.55688c56.js";import"./Modal.bbbfe3c8.js";import"./Text.06b5e1a7.js";import"./Base.39a7265d.js";import"./Typography.7f982c9c.js";import"./index.a34e9509.js";import"./Link.c8f3c7ce.js";import"./Paragraph.6e41b767.js";import"./Title.49f2815e.js";import"./index.251ea9f5.js";import"./index.449fb202.js";import"./index.beafe4fd.js";import"./index.b6b51af4.js";import"./CollapsePanel.db6381d1.js";import"./Timeline.e5fab016.js";import"./index.353d66b5.js";import"./index.1036624f.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.7664651e.js";import"./workspaces.4e0f580d.js";import"./runnerData.aeefefa0.js";import"./url.446977b6.js";import"./record.12e29287.js";import"./pubsub.e2873ec1.js";import"./scripts.6df1a001.js";import"./envVars.4a3f904a.js";import"./index.06892f31.js";import"./Form.59d8a79a.js";import"./hasIn.2571917b.js";import"./ExpandOutlined.b628b9e2.js";import"./Card.4b8c615b.js";import"./TabPane.2b639b94.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="0753e97e-e7bf-4478-a351-3d30a23c36e9",t._sentryDebugIdIdentifier="sentry-dbid-0753e97e-e7bf-4478-a351-3d30a23c36e9")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const ro=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new f,i=new p("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{ro as default};
//# sourceMappingURL=WorkflowKanban.3853bfdd.js.map
