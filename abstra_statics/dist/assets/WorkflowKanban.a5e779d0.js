import{K as n,E as p,L as s}from"./repository.86049b97.js";import{d as a,b as m,c,u as e}from"./outputWidgets.b9fff993.js";import{l as d}from"./index.464cdf70.js";import"./asyncComputed.1f5d86b1.js";import"./api.4eddc360.js";import"./index.cf4c23b9.js";import"./icons.bc2aede4.js";import"./index.68c30d13.js";import"./ant-design.96233567.js";import"./index.a8909a00.js";import"./Modal.1e5c3a47.js";import"./Text.25b12d34.js";import"./Base.dfcc101c.js";import"./Typography.e547c78f.js";import"./index.73d32778.js";import"./index.5b67bdc8.js";import"./Paragraph.34590571.js";import"./index.548f1043.js";import"./Link.e60d9f0d.js";import"./Title.07be7847.js";import"./index.ce1062a2.js";import"./CollapsePanel.0b41bff9.js";import"./Form.43b4f8c5.js";import"./hasIn.460a2d20.js";import"./Timeline.7794e1fb.js";import"./index.ac5eba1f.js";import"./index.07655242.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.25f7c9b1.js";import"./workspaces.5277ba83.js";import"./runnerData.72ef15b6.js";import"./url.948062f7.js";import"./record.67aa92ec.js";import"./pubsub.a4bfec49.js";import"./scripts.6aae0c0b.js";import"./envVars.04760935.js";import"./ExpandOutlined.fe1d7073.js";import"./Card.d9af75c3.js";import"./TabPane.ee9c68ed.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="b3e488d7-64c6-4e31-a755-095823328080",t._sentryDebugIdIdentifier="sentry-dbid-b3e488d7-64c6-4e31-a755-095823328080")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const oo=a({__name:"WorkflowKanban",setup(t){const o=new p,r=new f,i=new s("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{oo as default};
//# sourceMappingURL=WorkflowKanban.a5e779d0.js.map
