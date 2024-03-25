import{d as j,o as B,a1 as $,u as t,b as p,ev as h,aD as E,eC as T,c as b,w as o,f as r,ar as i,eD as m,cA as D,bg as U,v as S,eB as V,H as R,e as N,ex as P,cE as q,cu as M}from"./outputWidgets.7e6eb177.js";import{a as L}from"./asyncComputed.5c83bb8a.js";import{r as C}from"./router.1fa38c42.js";import{B as F,a as H}from"./build.881ebd6f.js";import"./index.0e1d2395.js";import{P as W}from"./project.e9ad3d00.js";import{C as z}from"./CrudView.93e6cce5.js";import{U as G,W as J}from"./icons.42e022b7.js";import{_ as K,E as O}from"./ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.4362a47d.js";import{A as I}from"./Paragraph.a13a9f0d.js";import{A as Q}from"./index.01890b09.js";import{A as f}from"./Text.497ac05f.js";import{A}from"./Link.eeb9f7f0.js";import{A as X}from"./index.a964b97b.js";import"./Form.f6e73dd6.js";import"./hasIn.958b80f9.js";import"./popupNotifcation.1c8d50aa.js";import"./index.cf4c23b9.js";import"./record.a100d067.js";import"./pubsub.782b9d46.js";import"./Modal.dcc2c9e3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5e43f505.js";import"./url.577173aa.js";import"./index.d8062c86.js";import"./Title.f948a676.js";import"./Base.fe1b5bdf.js";import"./Typography.9133b65d.js";import"./CheckCircleFilled.95df7053.js";import"./LoadingOutlined.f2d72c3d.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[_]="08564346-6917-4fc0-973b-2c511635f933",d._sentryDebugIdIdentifier="sentry-dbid-08564346-6917-4fc0-973b-2c511635f933")}catch{}})();const Y={key:0,class:"flex-row"},Z={key:1,class:"flex-row"},ee={key:2,class:"flex-row"},te=j({__name:"ExecutionsShort",props:{stageId:{},projectId:{}},emits:["select"],setup(d,{emit:_}){const l=d,v=new O,{result:y,refetch:u,loading:w}=L(async()=>{const{executions:e}=await v.list({projectId:l.projectId,stageId:l.stageId,limit:6});return e}),k=e=>{_("select",e)};let g=null;return B(()=>{g=setInterval(()=>u(),15e3)}),$(()=>{g&&clearInterval(g)}),(e,c)=>t(y)?(p(),h("div",Y,[(p(!0),h(E,null,T(t(y),s=>(p(),b(t(D),{key:s.id,title:s.createdAt.toLocaleString(),onClick:a=>k(s)},{content:o(()=>[r(t(I),null,{default:o(()=>[i("Status: "+m(s.status),1)]),_:2},1024),r(t(I),null,{default:o(()=>[i("Duration: "+m(s.duration_seconds)+" s",1)]),_:2},1024),r(t(I),null,{default:o(()=>[i("Build: "+m(s.buildId.slice(0,6)),1)]),_:2},1024)]),default:o(()=>[r(K,{status:s.status},null,8,["status"])]),_:2},1032,["title","onClick"]))),128))])):t(w)?(p(),h("div",Z,[r(t(U))])):(p(),h("div",ee,"None"))}});const oe=S(te,[["__scopeId","data-v-dc7e11a2"]]),se={style:{"max-width":"250px",overflow:"hidden","text-overflow":"ellipsis ellipsis","white-space":"nowrap"}},ae={key:1},re=j({__name:"Live",setup(d){const l=V().params.projectId,v=e=>{C.push({name:"logs",params:{projectId:l},query:{runtimeId:e.stageId,executionId:e.id}})},{loading:y,result:u}=L(async()=>{const c=(await F.list(l)).find(n=>n.latest);if(!c)return null;const[s,a]=await Promise.all([H.get(c.id),W.get(l)]);return{buildSpec:s,project:a}}),w=e=>{var a;if(!("path"in e)||!e.path)return;const c=e.type==="form"?`/${e.path}`:`/_hooks/${e.path}`,s=(a=u.value)==null?void 0:a.project.getUrl(c);!s||(navigator.clipboard.writeText(s),M.success("Copied URL to clipboard"))},k=e=>e.type=="form"?`/${e.path}`.slice(0,30):e.type=="hook"?`/_hooks/${e.path}`.slice(0,30):e.type=="job"?`${e.schedule}`:"",g=R(()=>{var s;const e=[{name:"Type",align:"left"},{name:"Title",align:"left"},{name:"Trigger",align:"left"},{name:"Last Runs"},{name:"",align:"right"}],c=(s=u.value)==null?void 0:s.buildSpec;return c?{columns:e,rows:c.runtimes.map(a=>({key:a.id,cells:[{type:"tag",text:a.type.charAt(0).toUpperCase()+a.type.slice(1),tagColor:"default"},{type:"slot",key:"title",payload:{runtime:a}},{type:"slot",key:"trigger",payload:{runtime:a}},{type:"slot",key:"last-runs",payload:{runtime:a}},{type:"actions",actions:[{icon:G,label:"View script logs",onClick:()=>C.push({name:"logs",params:{projectId:l},query:{runtimeId:a.id}})},{icon:J,label:"Copy URL",onClick:()=>w(a),hide:!["form","hook"].includes(a.type)}]}]}))}:{columns:e,rows:[]}});return(e,c)=>{var s,a;return t(y)||((a=(s=t(u))==null?void 0:s.buildSpec.runtimes.length)!=null?a:0)>0?(p(),b(z,{key:0,"empty-title":"","entity-name":"build",description:"Access and monitor your project's current scripts here.",table:g.value,loading:t(y),title:"Live View"},{extra:o(()=>[r(t(Q),{message:"Last runs will only be shown for deploys with abstra version >= 1.27.0",type:"info","show-icon":""})]),title:o(({payload:n})=>{var x;return[N("div",se,[n.runtime.type!="form"?(p(),b(t(f),{key:0},{default:o(()=>[i(m(n.runtime.title),1)]),_:2},1024)):n.runtime.type=="form"?(p(),b(t(A),{key:1,href:(x=t(u))==null?void 0:x.project.getUrl(n.runtime.path),target:"_blank"},{default:o(()=>[i(m(n.runtime.title),1)]),_:2},1032,["href"])):P("",!0)])]}),"last-runs":o(({payload:n})=>[r(oe,{"stage-id":n.runtime.id,"project-id":t(l),onSelect:v},null,8,["stage-id","project-id"])]),trigger:o(({payload:n})=>[r(t(X),{color:"default"},{default:o(()=>[i(m(k(n.runtime)),1)]),_:2},1024)]),_:1},8,["table","loading"])):(p(),h("div",ae,[r(t(q),{direction:"vertical"},{default:o(()=>[r(t(f),null,{default:o(()=>[i("Install abstra using pip:")]),_:1}),r(t(f),{code:"",copyable:""},{default:o(()=>[i("pip install abstra")]),_:1}),r(t(f),null,{default:o(()=>[i("Start a new project using our CLI")]),_:1}),r(t(f),{code:"",copyable:""},{default:o(()=>[i("abstra serve my-new-project")]),_:1}),r(t(f),null,{default:o(()=>[i(" If you have any questions, please reach out to our "),r(t(A),{href:"https://discord.gg/abstra",target:"_blank"},{default:o(()=>[i(" discord channel ")]),_:1})]),_:1})]),_:1})]))}}});const Ue=S(re,[["__scopeId","data-v-5bc0258e"]]);export{Ue as default};
//# sourceMappingURL=Live.a83007c8.js.map