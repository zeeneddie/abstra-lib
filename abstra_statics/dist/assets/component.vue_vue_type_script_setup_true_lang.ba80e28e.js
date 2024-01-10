import{f as i,eG as O,f3 as W,f4 as q,d as S,o as V,a0 as z,u as n,b as a,c as u,bg as P,ev as _,bq as j,eC as $,w as s,v as E,F as B,e as F,eD as y,ck as N,eA as G,ex as I,bM as U,bh as H,bf as R,I as v,aq as m,cC as k}from"./outputWidgets.6b670cb4.js";import{a as M}from"./asyncComputed.5b907bc6.js";import"./authorManager.295db41f.js";import"./index.79b54298.js";import{C as J}from"./gateway.5e982d32.js";import{C as X,L as Y}from"./Log.47b384da.js";import{W as Z}from"./WarningFilled.d99917ef.js";import{A as Q}from"./Link.3c1b119a.js";import{d as K}from"./index.1de14aca.js";import{B as ee}from"./BaseLayout.63a423fb.js";import{L as te}from"./log.3687a082.js";import{c as ne}from"./index.e9a5e10f.js";import{T as re,A as oe}from"./TabPane.6a70f28e.js";import{T as se}from"./Timeline.6c30aefa.js";import{A as ie}from"./index.01f54033.js";import{Q as ae,E as le,f as ce,j as ue,a as de}from"./icons.0f712874.js";import{A as b}from"./Text.b3304ad8.js";import{a as pe,A as fe}from"./index.63f07760.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="2594c7bf-bb65-46fb-9d49-1989a5d3ce84",r._sentryDebugIdIdentifier="sentry-dbid-2594c7bf-bb65-46fb-9d49-1989a5d3ce84")}catch{}})();function A(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),o.forEach(function(c){me(r,c,t[c])})}return r}function me(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var C=function(e,t){var o=A({},e,t.attrs);return i(O,A({},o,{icon:W}),null)};C.displayName="CloseCircleFilled";C.inheritAttrs=!1;const ye=C;function T(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),o.forEach(function(c){ge(r,c,t[c])})}return r}function ge(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var L=function(e,t){var o=T({},e,t.attrs);return i(O,T({},o,{icon:q}),null)};L.displayName="LoadingOutlined";L.inheritAttrs=!1;const be=L;function D(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),o.forEach(function(c){_e(r,c,t[c])})}return r}function _e(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var w=function(e,t){var o=D({},e,t.attrs);return i(O,D({},o,{icon:Z}),null)};w.displayName="WarningFilled";w.inheritAttrs=!1;const he=w;class ve{list({buildId:e,...t}){return J.post(`builds/${e}/executions`,t)}}const Ie=new ve;class x{constructor(e){this.dto=e}static fromDTO(e){return new x(e)}static async list(e){const t=await Ie.list(e);return{total:t.total,executions:t.executions.map(x.fromDTO)}}get id(){return this.dto.executionId}get shortId(){return this.dto.executionId.slice(0,8)}get startTime(){return this.dto.startTime}get startDate(){return new Date(this.dto.startTime)}get endTime(){return this.dto.endTime}get isSuccessful(){return this.dto.isSuccessful}title(e){return this.endTime?"finished":e?"running":"aborted"}}const xe={key:1,class:"flex-row"},ke={key:2},Oe=S({__name:"ExecutionsShort",props:{logQuery:{},isLive:{type:Boolean}},emits:["select"],setup(r,{emit:e}){const t=r,{result:o,refetch:c}=M(()=>x.list({buildId:t.logQuery.buildId,runtimeNames:[t.logQuery.runtimeId,t.logQuery.runtimeTitle],limit:5})),h=g=>{e("select",g)};let f=null;return V(()=>{t.isLive&&(f=setInterval(()=>c(),15e3))}),z(()=>{f&&clearInterval(f)}),(g,d)=>n(o)?n(o)?(a(),_("div",xe,[(a(!0),_(j,null,$(n(o).executions,p=>(a(),u(n(Q),{key:p.id,title:p.title(t.isLive),onClick:l=>h(p)},{default:s(()=>[p.isSuccessful?(a(),u(n(X),{key:0,style:{color:"#33b891"}})):p.endTime?(a(),u(n(ye),{key:1,style:{color:"#fa675c"}})):t.isLive?(a(),u(n(be),{key:2})):(a(),u(n(he),{key:3,style:{color:"#f69220"}}))]),_:2},1032,["title","onClick"]))),128))])):(a(),_("div",ke,"Some error")):(a(),u(n(P),{key:0}))}});const Se=E(Oe,[["__scopeId","data-v-fa28e30b"]]),je=["title"],Ce=S({__name:"ExecutionInspector",props:{execution:{},projectId:{},buildId:{},isLive:{type:Boolean}},emits:["close"],setup(r,{emit:e}){const t=r,o=B({selectedTab:"logs"}),c=["success","stderr","execution-id","started","start","form-response","program:end","failed","connection-closed","stdout","error"],h=K(t.execution.startDate),{loading:f,result:g}=M(async()=>await te.list({projectId:t.projectId,buildId:t.buildId,executionIds:[t.execution.id],limit:1e3,runtimeNames:[],search:"",offset:0,events:c}));return(d,p)=>(a(),u(n(ie),{open:"",title:`Execution: ${d.execution.shortId}`,width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:p[1]||(p[1]=l=>e("close"))},{extra:s(()=>[F("span",{title:t.execution.startTime}," started "+y(n(h)),9,je)]),default:s(()=>[i(ee,null,{navbar:s(()=>[i(n(ne),{style:{padding:"5px 25px"}},{footer:s(()=>[i(n(re),{"active-key":o.selectedTab,"onUpdate:activeKey":p[0]||(p[0]=l=>o.selectedTab=l)},{default:s(()=>[i(n(oe),{key:"logs",tab:"Logs"})]),_:1},8,["active-key"])]),_:1})]),content:s(()=>[n(f)?(a(),u(n(P),{key:0})):n(g)?(a(),u(n(se),{key:1},{default:s(()=>[(a(!0),_(j,null,$(n(g).logs,l=>(a(),u(Y,{key:l.createdAt.toTimeString(),log:l},null,8,["log"]))),128))]),_:1})):(a(),u(n(N),{key:2}))]),_:1})]),_:1},8,["title"]))}});const Le=E(Ce,[["__scopeId","data-v-f70c72e8"]]),we={style:{display:"flex","align-items":"center",gap:"5px"}},Ae={key:1},Xe=S({__name:"component",props:{buildSpec:{},subdomain:{},isLive:{type:Boolean}},setup(r){const e=r,t=G(),o=B({execution:null}),c=()=>{o.execution=null},h=d=>{o.execution=d},f=d=>!e.subdomain||d.type!="form"?"":`https://${e.subdomain}.abstra.app/${d.path}`,g=d=>{t.push({name:"logs",params:{projectId:e.buildSpec.projectId},query:d.logQuery})};return(d,p)=>(a(),_(j,null,[d.buildSpec.runtimes.length>0?(a(),u(n(fe),{key:0,"item-layout":"horizontal","data-source":d.buildSpec.runtimes},{renderItem:s(({item:l})=>[i(n(pe),null,{actions:s(()=>[i(Se,{"log-query":l.logQuery,"project-id":d.buildSpec.projectId,"is-live":e.isLive,onSelect:h},null,8,["log-query","project-id","is-live"]),i(n(U),null,{overlay:s(()=>[i(n(H),null,{default:s(()=>[i(n(R),{onClick:Te=>g(l)},{default:s(()=>[F("div",we,[i(v,{path:n(ae)},null,8,["path"]),i(n(b),null,{default:s(()=>[m(" View Logs")]),_:1})])]),_:2},1032,["onClick"])]),_:2},1024)]),default:s(()=>[i(v,{path:n(le),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)]),default:s(()=>[l.type=="form"?(a(),u(n(k),{key:0,size:"large"},{default:s(()=>[i(v,{path:n(ce)},null,8,["path"]),f(l)?(a(),u(n(Q),{key:0,href:f(l),strong:""},{default:s(()=>[m(y(l.title),1)]),_:2},1032,["href"])):(a(),u(n(b),{key:1,strong:""},{default:s(()=>[m(y(l.title),1)]),_:2},1024)),i(n(b),{type:"secondary",code:""},{default:s(()=>[m("/"+y(l.path),1)]),_:2},1024)]),_:2},1024)):I("",!0),l.type=="job"?(a(),u(n(k),{key:1,size:"large"},{default:s(()=>[i(v,{path:n(ue)},null,8,["path"]),i(n(b),{strong:""},{default:s(()=>[m(y(l.title),1)]),_:2},1024),i(n(b),{type:"secondary",code:""},{default:s(()=>[m(y(l.schedule),1)]),_:2},1024)]),_:2},1024)):I("",!0),l.type=="hook"?(a(),u(n(k),{key:2,size:"large"},{default:s(()=>[i(v,{path:n(de)},null,8,["path"]),i(n(b),{strong:""},{default:s(()=>[m(y(l.title),1)]),_:2},1024),i(n(b),{type:"secondary",code:""},{default:s(()=>[m("/_hooks/"+y(l.path),1)]),_:2},1024)]),_:2},1024)):I("",!0)]),_:2},1024)]),_:1},8,["data-source"])):(a(),_("div",Ae,[i(n(N),{description:"No runtimes found. Make sure your project has forms, hooks or jobs before deploying it"})])),o.execution?(a(),u(Le,{key:2,execution:o.execution,"project-id":d.buildSpec.projectId,"build-id":d.buildSpec.buildId,"is-live":e.isLive,onClose:c},null,8,["execution","project-id","build-id","is-live"])):I("",!0)],64))}});export{Xe as _};
//# sourceMappingURL=component.vue_vue_type_script_setup_true_lang.ba80e28e.js.map
