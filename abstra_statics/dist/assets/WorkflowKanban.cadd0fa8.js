import{K as n,E as p,L as a}from"./repository.5bc3588a.js";import{d as s,b as m,c,u as e}from"./outputWidgets.564eeccc.js";import{l as f}from"./index.c47683c7.js";import"./ant-design.3f2d0088.js";import"./index.5ac0c56f.js";import"./Modal.dbb1fef6.js";import"./asyncComputed.2d3ad713.js";import"./api.ef0f7682.js";import"./schema.18ec40d3.js";import"./index.cf4c23b9.js";import"./icons.726cd60c.js";import"./index.15b24fb8.js";import"./index.24b80b4d.js";import"./index.3512d6a9.js";import"./Paragraph.4b9ba85b.js";import"./Base.dde33a93.js";import"./Typography.4f26b9e4.js";import"./index.4b6c781c.js";import"./Link.a72d5b3f.js";import"./Text.deac93d2.js";import"./Title.51ffb5ac.js";import"./index.e2508887.js";import"./index.836baf67.js";import"./CollapsePanel.ca22a53e.js";import"./Form.b0ce7d11.js";import"./FormItem.a84fee82.js";import"./hasIn.cc075526.js";import"./Timeline.d7628515.js";import"./index.91ac9944.js";import"./isNumeric.75337b1e.js";import"./contracts.generated.df419aec.js";import"./scripts.73fdb453.js";import"./record.22afd401.js";import"./pubsub.626e6bcd.js";import"./workspaces.ff313c8b.js";import"./runnerData.64b2d9e4.js";import"./url.4dc2caea.js";import"./ExpandOutlined.90152750.js";import"./Card.0ce28b50.js";import"./TabPane.30f4514c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="28a7c8a8-3724-4112-b1e0-4f04535daff6",t._sentryDebugIdIdentifier="sentry-dbid-28a7c8a8-3724-4112-b1e0-4f04535daff6")}catch{}})();class d{constructor(o=f){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const to=s({__name:"WorkflowKanban",setup(t){const o=new p,r=new d,i=new a("kanban");return(u,y)=>(m(),c(n,{"kanban-repository":e(o),storage:e(i),"stage-run-repository":e(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{to as default};
//# sourceMappingURL=WorkflowKanban.cadd0fa8.js.map
