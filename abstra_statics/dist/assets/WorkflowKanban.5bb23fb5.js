import{K as n,L as p}from"./repository.58499269.js";import{E as s}from"./repository.2c4dc05e.js";import{d as a,b as m,c,u as e}from"./outputWidgets.9bb29762.js";import{l as d}from"./index.7dcd1439.js";import"./asyncComputed.ac1a0197.js";import"./workspaces.53f8033a.js";import"./runnerData.84b552ce.js";import"./url.c222fac4.js";import"./record.dd7b0559.js";import"./pubsub.90d4935e.js";import"./scripts.54747d94.js";import"./envVars.f8fed0f5.js";import"./api.2c2d04af.js";import"./index.cf4c23b9.js";import"./icons.d08bf04b.js";import"./contracts.generated.deda1c64.js";import"./index.fcc99b17.js";import"./ant-design.3940e065.js";import"./index.1ce3173e.js";import"./Modal.8f9ba470.js";import"./Text.5324981a.js";import"./Base.abff5e35.js";import"./Typography.184e8c0b.js";import"./index.e7d326b6.js";import"./Link.f9998948.js";import"./Paragraph.9dbf4710.js";import"./Title.b342fcc9.js";import"./index.b2ab466e.js";import"./index.3a419a8c.js";import"./index.d5eda63b.js";import"./CollapsePanel.a92a9301.js";import"./Timeline.15fac260.js";import"./index.54135072.js";import"./index.2c2899aa.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.d5a2bc8a.js";import"./Card.b91f4cc4.js";import"./TabPane.aa230872.js";import"./hasIn.fa8167cd.js";import"./DownOutlined.56421333.js";import"./index.d6e0013f.js";import"./Form.472b1af8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="5f541cef-4608-4441-8d54-d998370ba6e4",t._sentryDebugIdIdentifier="sentry-dbid-5f541cef-4608-4441-8d54-d998370ba6e4")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const eo=a({__name:"WorkflowKanban",setup(t){const o=new s,r=new f,i=new p("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{eo as default};
//# sourceMappingURL=WorkflowKanban.5bb23fb5.js.map
