import{F as q,K as M,E as J,L as R}from"./repository.b664a4e3.js";import{a as U}from"./asyncComputed.e8505f10.js";import{F as $}from"./forms.05f428dc.js";import{H,J as P,S as Q}from"./scripts.9975b7e4.js";import"./workspaces.6907ae87.js";import{r as S,d as V,eM as W,H as G,b as C,eu as j,f as T,w as k,u as e,c as I,ew as E,bx as X,eQ as Y,bE as Z,aq as N,e as tt,eD as F,eC as et,cC as at}from"./outputWidgets.c199cd65.js";import"./envVars.66ce4ea6.js";import{s as ot}from"./metadata.4606e762.js";import{L as nt}from"./LoadingOutlined.4f66bcf1.js";import{A as L}from"./index.464c5f1b.js";import{l as rt}from"./fetch.2b5e9b72.js";import{A as st}from"./index.f01cf24e.js";import"./api.2045c8e3.js";import"./index.cf4c23b9.js";import"./ant-design.b476bfd3.js";import"./index.e3a2bc50.js";import"./Modal.94298c95.js";import"./Text.47bac3a4.js";import"./index.0270c373.js";import"./index.aa1a8bf7.js";import"./Paragraph.72c12540.js";import"./index.869e7552.js";import"./Link.dcc50f83.js";import"./Title.2a2cadae.js";import"./index.0d7ca402.js";import"./CollapsePanel.6f180d06.js";import"./index.889438f0.js";import"./index.761cbc7f.js";import"./isNumeric.75337b1e.js";import"./ExpandOutlined.19a981ef.js";import"./Card.b21ac257.js";import"./index.f8d3c2d8.js";import"./TabPane.af37a735.js";import"./hasIn.7b6e24c6.js";import"./vuedraggable.umd.808fa0ff.js";import"./index.db198256.js";import"./Form.2bee2b00.js";import"./record.e60b008b.js";import"./pubsub.6235e50c.js";import"./runnerData.2958fc11.js";import"./url.266b7147.js";import"./PhCheckCircle.vue.010b2f95.js";import"./PhScroll.vue.31e129a1.js";import"./PhWebhooksLogo.vue.cb31e14f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="c62cb0b5-2bb7-43c8-99e6-508a2721bcbb",a._sentryDebugIdIdentifier="sentry-dbid-c62cb0b5-2bb7-43c8-99e6-508a2721bcbb")}catch{}})();const O=[{title:"Thread",dataIndex:"thread"},{title:"Stage",dataIndex:"stage"},{title:"Status",dataIndex:"status"},{title:"Updated at",dataIndex:"updated_at"}],lt=({kanbanRepository:a})=>{const t=q(),o=S(0),l=S(1),b=S(10),v=async()=>await Promise.all([$.list(),H.list(),P.list(),Q.list()]).then(([u,c,g,h])=>[...u,...c,...g,...h].map(s=>({title:s.title,id:s.id,type:s.type,can_be_started:!!(s.type==="job"||s.type==="form"&&s.isInitial),path:s.type==="form"?s.path:void 0}))),K=async()=>{var d,p;const u=await v(),c=await a.getData({filter:{},limit:1e3,offset:0}),g=(d=c.stage_run_cards)==null?void 0:d.map(n=>n.content.map(m=>m.key)).flat(),h=Array.from(new Set(g)),A=[...O.map(n=>n.title),...h],_=(p=c.stage_run_cards)==null?void 0:p.map(n=>{var r,f;const m=u.find(y=>y.id===n.stage);return[n.id,(r=m==null?void 0:m.title)!=null?r:"",n.status,(f=n.updated_at)!=null?f:"",...h.map(y=>{const x=n.content.find(D=>D.key===y);return x?JSON.stringify(x.value):""})]}),w=new Date;return{columns:A,rows:_!=null?_:[],fileName:`therads-${w.toISOString()}`}};return{tableAsyncComputed:U(async()=>{var u,c,g,h;try{const s=await v();t.limit.value=b.value*l.value,t.offset.value=(l.value-1)*b.value;const A=t.requestDataFactory(),_=await a.getData(A);o.value=_.total_count;const w=(c=(u=_.stage_run_cards)==null?void 0:u.map(r=>r.content.map(f=>f.key)).flat())!=null?c:[],d=Array.from(new Set(w)),p=(h=(g=_.stage_run_cards)==null?void 0:g.reduce((r,f)=>{const y=s.find(D=>D.id===f.stage);let x={};for(const D of d){const z=f.content.find(B=>B.key===D);x={...x,[D]:z?z.value:null,status:f.status,thread:f.id,updated_at:f.updated_at,stage:y==null?void 0:y.title}}return r==null||r.push({type:y==null?void 0:y.type,...x}),r},[]))!=null?h:[],n=[];for(const r of O)n.push({title:r.title,dataIndex:r.dataIndex});const m=[];for(const r of d)m.push({title:r,dataIndex:r.toLowerCase()});return n.push({title:"Data",children:m}),{tableColumns:n,tableRows:p}}catch{return{tableColumns:[],tableRows:[]}}}),totalCount:o,current:l,pageSize:b,filterController:t,getDataAsCsv:K}},it=a=>{let t=a.columns.join(",")+`
`;a.rows.forEach(l=>{t+=l.join(","),t+=`
`});const o=document.createElement("a");o.href="data:text/csv;charset=utf-8,"+encodeURIComponent(t),o.target="_blank",o.download=`${a.fileName}.csv`,o.click()},ut={style:{padding:"20px"}},ct={style:{"text-align":"center",margin:"0"}},dt=V({__name:"TableView",props:{kanbanRepository:{}},setup(a){const t=a,o=S(""),l=S(!1),b=S(!1),v=()=>{l.value=!0,h.filterSearch.value=o.value,K()},K=W.exports.debounce(()=>{i.refetch(),l.value=!1},500),{tableAsyncComputed:i,totalCount:u,current:c,pageSize:g,filterController:h,getDataAsCsv:s}=lt({kanbanRepository:t.kanbanRepository}),A=G(()=>({total:u.value,current:c.value,pageSize:g.value,totalBoundaryShowSizeChanger:10,showSizeChanger:!0,pageSizeOptions:["10","25","50","100"],onChange:async(w,d)=>{c.value=w,g.value=d,await i.refetch()}})),_=async()=>{if(b.value=!0,!i.result.value)return;const w=await s();it(w),b.value=!1};return(w,d)=>(C(),j("div",ut,[T(e(L),{justify:"space-between",style:{"margin-bottom":"12px"}},{default:k(()=>[T(e(X),{value:o.value,"onUpdate:value":[d[0]||(d[0]=p=>o.value=p),v],placeholder:"Search data or status",style:{width:"400px"},"allow-clear":""},{prefix:k(()=>[T(e(Y))]),suffix:k(()=>[l.value?(C(),I(e(nt),{key:0})):E("",!0)]),_:1},8,["value"]),T(e(Z),{loading:b.value,onClick:_},{default:k(()=>[N("Export to CSV")]),_:1},8,["loading"])]),_:1}),e(i).result.value?(C(),I(e(at),{key:0,columns:e(i).result.value.tableColumns,"data-source":e(i).result.value.tableRows,loading:l.value,pagination:A.value,scroll:{x:2400,y:700},bordered:"",size:"middle"},{headerCell:k(({column:p})=>[tt("p",ct,F(p.title),1)]),bodyCell:k(({column:p,text:n,record:m})=>[p.dataIndex==="stage"?(C(),I(e(L),{key:0,gap:"small"},{default:k(()=>[(C(),I(et(e(ot)(m.type)),{size:"20"})),N(" "+F(n),1)]),_:2},1024)):E("",!0)]),_:1},8,["columns","data-source","loading","pagination"])):E("",!0)]))}});class pt{constructor(t=rt){this.fetch=t}async fork(t){return(await this.fetch("/_editor/api/stage_runs/fork",{method:"POST",body:JSON.stringify({stage_run_id:t}),headers:{"Content-Type":"application/json"}})).json()}}const mt={style:{padding:"20px"}},ne=V({__name:"WorkflowThreads",setup(a){const t=new J,o=new pt,l=new R("kanban"),b=["Kanban","Table view"],v=S("Kanban");return(K,i)=>(C(),j("div",mt,[T(e(st),{value:v.value,"onUpdate:value":i[0]||(i[0]=u=>v.value=u),options:b,style:{"margin-bottom":"16px"}},null,8,["value"]),v.value==="Kanban"?(C(),I(M,{key:0,"kanban-repository":e(t),storage:e(l),"stage-run-repository":e(o)},null,8,["kanban-repository","storage","stage-run-repository"])):E("",!0),v.value==="Table view"?(C(),I(dt,{key:1,"kanban-repository":e(t)},null,8,["kanban-repository"])):E("",!0)]))}});export{ne as default};
//# sourceMappingURL=WorkflowThreads.8568e81e.js.map