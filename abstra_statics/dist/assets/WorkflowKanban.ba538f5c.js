import{K as n,L as p}from"./repository.df39422d.js";import{E as a}from"./repository.c504c840.js";import{d as s,b as m,c as d,u as i}from"./outputWidgets.2c5e6309.js";import{l as c}from"./index.0684de81.js";import"./asyncComputed.929ca3c2.js";import"./workspaces.26125cd9.js";import"./runnerData.c0559c26.js";import"./url.fe0cc0c5.js";import"./record.0135330d.js";import"./pubsub.d999543c.js";import"./scripts.81134d0d.js";import"./envVars.ad40f27a.js";import"./api.929ede50.js";import"./index.cf4c23b9.js";import"./icons.85722c07.js";import"./contracts.generated.32b8098d.js";import"./index.702a74de.js";import"./ant-design.c002fce5.js";import"./index.f83038f0.js";import"./Modal.875953eb.js";import"./Text.86501620.js";import"./Base.51646eea.js";import"./Typography.87909cc3.js";import"./index.553e9309.js";import"./Link.ad46a36b.js";import"./Paragraph.2c479822.js";import"./Title.a5524a3f.js";import"./index.3cb2b4b7.js";import"./index.0458f7ba.js";import"./index.4937a42e.js";import"./CollapsePanel.939215bb.js";import"./Timeline.7942369a.js";import"./index.9805d44d.js";import"./index.e083ea22.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.11c170c9.js";import"./Card.b368461c.js";import"./TabPane.53ca592b.js";import"./hasIn.86e53fee.js";import"./vuedraggable.umd.3e456987.js";import"./index.8ae905a0.js";import"./Form.1133885f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="c1a2d589-a2d4-4b74-8794-bb1397db7a2e",t._sentryDebugIdIdentifier="sentry-dbid-c1a2d589-a2d4-4b74-8794-bb1397db7a2e")}catch{}})();class b{constructor(o=c){this.fetch=o}async fork(o){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:o}),headers:{"Content-Type":"application/json"}})).json()}}const io=s({__name:"WorkflowKanban",setup(t){const o=new a,r=new b,e=new p("kanban");return(f,u)=>(m(),d(n,{"kanban-repository":i(o),storage:i(e),"stage-run-repository":i(r)},null,8,["kanban-repository","storage","stage-run-repository"]))}});export{io as default};
//# sourceMappingURL=WorkflowKanban.ba538f5c.js.map
