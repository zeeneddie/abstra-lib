import{K as n,L as a}from"./repository.a0d26787.js";import{E as p}from"./repository.4d778a0e.js";import{d as s,b as m,c,u as e}from"./outputWidgets.0abdb3ec.js";import{l as d}from"./index.39851272.js";import"./asyncComputed.cc7c102c.js";import"./api.e516f7eb.js";import"./index.cf4c23b9.js";import"./icons.a6123414.js";import"./ant-design.ed3ff111.js";import"./index.38f87eb2.js";import"./Modal.30b32d1a.js";import"./Text.8f40354f.js";import"./Base.24fc0c67.js";import"./Typography.43ae2525.js";import"./index.dba890f7.js";import"./Link.29ff42e2.js";import"./Paragraph.a90cc3a1.js";import"./Title.a33fe5d1.js";import"./index.f72a61bb.js";import"./index.17135acd.js";import"./index.d1e576ed.js";import"./index.6aa3cca1.js";import"./CollapsePanel.cdd83306.js";import"./Timeline.dd89ba07.js";import"./index.71f3cbbe.js";import"./index.a1e9f0b1.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.1ade1c98.js";import"./workspaces.d6475eec.js";import"./runnerData.46da3d0d.js";import"./url.df8226b7.js";import"./record.67dd7977.js";import"./pubsub.a3baed91.js";import"./scripts.795b15f0.js";import"./envVars.eba37578.js";import"./index.99147837.js";import"./Form.074188fd.js";import"./hasIn.7ef6949e.js";import"./ExpandOutlined.21164ef7.js";import"./Card.a36650a5.js";import"./TabPane.1f1cb0c7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="48a4e6b5-8da1-4ae1-ae9a-033d639230c3",t._sentryDebugIdIdentifier="sentry-dbid-48a4e6b5-8da1-4ae1-ae9a-033d639230c3")}catch{}})();class f{constructor(o=d){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const ro=s({__name:"WorkflowKanban",setup(t){const o=new p,r=new f,i=new a("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{ro as default};
//# sourceMappingURL=WorkflowKanban.2f6ed731.js.map
