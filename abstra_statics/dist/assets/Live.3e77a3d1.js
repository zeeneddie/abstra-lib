import{d as j,o as B,a1 as T,u as t,b as p,ev as h,aD as $,eC as E,c as b,w as o,f as r,ar as i,eD as m,cA as D,bg as V,v as S,eB as R,H as U,e as N,ex as P,cE as q,cu as M}from"./outputWidgets.e95bb5ba.js";import{a as L}from"./asyncComputed.a918aff5.js";import{r as C}from"./router.3a6e59a9.js";import{B as F,a as H}from"./build.a4e05403.js";import"./index.625c948c.js";import{P as X}from"./project.21666977.js";import{C as z}from"./CrudView.94891a85.js";import{V as G,X as J}from"./icons.c7f42c0c.js";import{_ as K,E as O}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.458c0f7e.js";import{A as I}from"./Paragraph.3bf751f9.js";import{A as Q}from"./index.276b908d.js";import{A as f}from"./Text.dbae65ca.js";import{A}from"./Link.fbdd76a8.js";import{A as W}from"./index.85a9f4d0.js";import"./Form.f0f90fb3.js";import"./hasIn.c432e05d.js";import"./popupNotifcation.217238e6.js";import"./index.cf4c23b9.js";import"./record.725c0e31.js";import"./pubsub.9f576728.js";import"./Modal.d9b4f07f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d389fa9d.js";import"./url.409b259d.js";import"./index.57d47c25.js";import"./Title.c4936cbe.js";import"./Base.fb82d3c2.js";import"./Typography.c0addfce.js";import"./SyncOutlined.e872f431.js";import"./CheckCircleFilled.1335e9f7.js";import"./LoadingOutlined.74e92bf7.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[_]="f737a30c-67b6-4168-a466-3b84367cbac8",d._sentryDebugIdIdentifier="sentry-dbid-f737a30c-67b6-4168-a466-3b84367cbac8")}catch{}})();const Y={key:0,class:"flex-row"},Z={key:1,class:"flex-row"},ee={key:2,class:"flex-row"},te=j({__name:"ExecutionsShort",props:{stageId:{},projectId:{}},emits:["select"],setup(d,{emit:_}){const l=d,v=new O,{result:y,refetch:u,loading:w}=L(async()=>{const{executions:e}=await v.list({projectId:l.projectId,stageId:l.stageId,limit:6});return e}),k=e=>{_("select",e)};let g=null;return B(()=>{g=setInterval(()=>u(),15e3)}),T(()=>{g&&clearInterval(g)}),(e,c)=>t(y)?(p(),h("div",Y,[(p(!0),h($,null,E(t(y),s=>(p(),b(t(D),{key:s.id,title:s.createdAt.toLocaleString(),onClick:a=>k(s)},{content:o(()=>[r(t(I),null,{default:o(()=>[i("Status: "+m(s.status),1)]),_:2},1024),r(t(I),null,{default:o(()=>[i("Duration: "+m(s.duration_seconds)+" s",1)]),_:2},1024),r(t(I),null,{default:o(()=>[i("Build: "+m(s.buildId.slice(0,6)),1)]),_:2},1024)]),default:o(()=>[r(K,{status:s.status},null,8,["status"])]),_:2},1032,["title","onClick"]))),128))])):t(w)?(p(),h("div",Z,[r(t(V))])):(p(),h("div",ee,"None"))}});const oe=S(te,[["__scopeId","data-v-dc7e11a2"]]),se={style:{"max-width":"250px",overflow:"hidden","text-overflow":"ellipsis ellipsis","white-space":"nowrap"}},ae={key:1},re=j({__name:"Live",setup(d){const l=R().params.projectId,v=e=>{C.push({name:"logs",params:{projectId:l},query:{runtimeId:e.stageId,executionId:e.id}})},{loading:y,result:u}=L(async()=>{const c=(await F.list(l)).find(n=>n.latest);if(!c)return null;const[s,a]=await Promise.all([H.get(c.id),X.get(l)]);return{buildSpec:s,project:a}}),w=e=>{var a;if(!("path"in e)||!e.path)return;const c=e.type==="form"?`/${e.path}`:`/_hooks/${e.path}`,s=(a=u.value)==null?void 0:a.project.getUrl(c);!s||(navigator.clipboard.writeText(s),M.success("Copied URL to clipboard"))},k=e=>e.type=="form"?`/${e.path}`.slice(0,30):e.type=="hook"?`/_hooks/${e.path}`.slice(0,30):e.type=="job"?`${e.schedule}`:"",g=U(()=>{var s;const e=[{name:"Type",align:"left"},{name:"Title",align:"left"},{name:"Trigger",align:"left"},{name:"Last Runs"},{name:"",align:"right"}],c=(s=u.value)==null?void 0:s.buildSpec;return c?{columns:e,rows:c.runtimes.map(a=>({key:a.id,cells:[{type:"tag",text:a.type.charAt(0).toUpperCase()+a.type.slice(1),tagColor:"default"},{type:"slot",key:"title",payload:{runtime:a}},{type:"slot",key:"trigger",payload:{runtime:a}},{type:"slot",key:"last-runs",payload:{runtime:a}},{type:"actions",actions:[{icon:G,label:"View script logs",onClick:()=>C.push({name:"logs",params:{projectId:l},query:{runtimeId:a.id}})},{icon:J,label:"Copy URL",onClick:()=>w(a),hide:!["form","hook"].includes(a.type)}]}]}))}:{columns:e,rows:[]}});return(e,c)=>{var s,a;return t(y)||((a=(s=t(u))==null?void 0:s.buildSpec.runtimes.length)!=null?a:0)>0?(p(),b(z,{key:0,"empty-title":"","entity-name":"build",description:"Access and monitor your project's current scripts here.",table:g.value,loading:t(y),title:"Live View"},{extra:o(()=>[r(t(Q),{message:"Last runs will only be shown for deploys with abstra version >= 1.27.0",type:"info","show-icon":""})]),title:o(({payload:n})=>{var x;return[N("div",se,[n.runtime.type!="form"?(p(),b(t(f),{key:0},{default:o(()=>[i(m(n.runtime.title),1)]),_:2},1024)):n.runtime.type=="form"?(p(),b(t(A),{key:1,href:(x=t(u))==null?void 0:x.project.getUrl(n.runtime.path),target:"_blank"},{default:o(()=>[i(m(n.runtime.title),1)]),_:2},1032,["href"])):P("",!0)])]}),"last-runs":o(({payload:n})=>[r(oe,{"stage-id":n.runtime.id,"project-id":t(l),onSelect:v},null,8,["stage-id","project-id"])]),trigger:o(({payload:n})=>[r(t(W),{color:"default"},{default:o(()=>[i(m(k(n.runtime)),1)]),_:2},1024)]),_:1},8,["table","loading"])):(p(),h("div",ae,[r(t(q),{direction:"vertical"},{default:o(()=>[r(t(f),null,{default:o(()=>[i("Install abstra using pip:")]),_:1}),r(t(f),{code:"",copyable:""},{default:o(()=>[i("pip install abstra")]),_:1}),r(t(f),null,{default:o(()=>[i("Start a new project using our CLI")]),_:1}),r(t(f),{code:"",copyable:""},{default:o(()=>[i("abstra serve my-new-project")]),_:1}),r(t(f),null,{default:o(()=>[i(" If you have any questions, please reach out to our "),r(t(A),{href:"https://discord.gg/abstra",target:"_blank"},{default:o(()=>[i(" discord channel ")]),_:1})]),_:1})]),_:1})]))}}});const Re=S(re,[["__scopeId","data-v-5bc0258e"]]);export{Re as default};
//# sourceMappingURL=Live.3e77a3d1.js.map