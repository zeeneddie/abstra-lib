import{K as n,L as p}from"./repository.6129a512.js";import{E as a}from"./repository.30f2b463.js";import{d as s,b as m,c as d,u as i}from"./outputWidgets.cb403911.js";import{l as c}from"./index.834a7b7b.js";import"./asyncComputed.e79d98d0.js";import"./workspaces.708eeb7e.js";import"./runnerData.7760bba6.js";import"./url.947a208d.js";import"./record.1cf44d32.js";import"./pubsub.b68b1f2c.js";import"./scripts.855a5f7b.js";import"./envVars.716b1827.js";import"./api.f8f1a2a1.js";import"./index.cf4c23b9.js";import"./icons.aae3c493.js";import"./contracts.generated.1995c368.js";import"./index.ee47e378.js";import"./ant-design.cd0744b8.js";import"./index.3f3dd84a.js";import"./Modal.8e17ec62.js";import"./Text.685c8d87.js";import"./Base.e3f83538.js";import"./Typography.1be659fb.js";import"./index.5113177c.js";import"./Link.e4c5d1e2.js";import"./Paragraph.42173e08.js";import"./Title.c41b8760.js";import"./index.2cd71938.js";import"./index.363fae22.js";import"./index.e031d872.js";import"./CollapsePanel.b9b3dbed.js";import"./Timeline.6e91e2a7.js";import"./index.0ce17bcf.js";import"./index.3b2ed356.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.1e24b605.js";import"./Card.dcc1468b.js";import"./TabPane.31c8bf49.js";import"./hasIn.fda5345a.js";import"./DownOutlined.34e59790.js";import"./index.63ed256b.js";import"./Form.c4e43409.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="2453f6d0-baa6-41ed-8270-c78dd27d368f",t._sentryDebugIdIdentifier="sentry-dbid-2453f6d0-baa6-41ed-8270-c78dd27d368f")}catch{}})();class f{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const io=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new f,e=new p("kanban");return(u,y)=>(m(),d(n,{"kanban-repository":i(o),storage:i(e),"stage-run-repository":i(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{io as default};
//# sourceMappingURL=WorkflowKanban.b1905a48.js.map
