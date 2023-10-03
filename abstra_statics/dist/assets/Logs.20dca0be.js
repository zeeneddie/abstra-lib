import{d as L,eA as j,H as P,J as $,b as o,c,w as n,u as e,f as l,b2 as C,af as U,cH as V,cd as E,eC as s,ew as S,et as f,eB as O,e as y,c_ as H,bw as G,cD as J,eF as z}from"./outputWidgets.72a8a893.js";import{R as K,C as M,A as Q}from"./console.1e555cd2.js";import{B as W}from"./build.767698aa.js";import"./index.8450d9eb.js";import{C as X}from"./gateway.3abe44fe.js";import{a as Y}from"./asyncComputed.74bbd75d.js";import{t as Z}from"./ant-design.e23e0553.js";import{f as R}from"./dayjs.1a33e42f.js";import{f as q}from"./index.b048d0fb.js";import{c as ee,A as w}from"./Title.fe2fe6f3.js";import{F as te}from"./Form.48bbf8f1.js";import{a as ae}from"./index.ab196bdb.js";import{A as g}from"./index.dea3d4a3.js";import{A as F}from"./index.6c331fbc.js";import"./index.46b9286c.js";import"./index.90ebe0b1.js";import"./index.22f0a69d.js";import"./index.cd22db62.js";import"./TabPane.dd1f5358.js";import"./index.6f18afbc.js";import"./index.71acb1cc.js";import"./index.08449dba.js";import"./index.c10e75ad.js";import"./index.3637b6d9.js";import"./index.dc10183a.js";import"./index.f700047f.js";import"./activeRecord.51d9a2df.js";import"./pubsub.ae9f2be4.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[t]="8004b3e7-2dbc-41a0-b637-1b8f651f0753",p._sentryDebugIdIdentifier="sentry-dbid-8004b3e7-2dbc-41a0-b637-1b8f651f0753")}catch{}})();class re{list(t){const d=new URLSearchParams({offset:t.offset.toString(),limit:t.limit.toString(),from:t.from.getTime().toString(),to:t.to.getTime().toString(),search:t.search});return X.get(`projects/${t.projectId}/builds/${t.buildId}/logs?${d}`)}}const le=new re;class h{constructor(t,d,b,r,_,A,v){this.executionId=t,this.runtimeType=d,this.runtimeName=b,this.payload=r,this.event=_,this.buildId=A,this.createdAt=v}static fromDTO(t){return new h(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){return(await le.list(t)).logs.map(h.fromDTO)}}const oe={key:0},ne=["textContent"],se=["textContent"],ie=["textContent"],de=["textContent"],Ue=L({__name:"Logs",setup(p){function t(i){return q(i,new Date,{addSuffix:!0})}const d=j(),b=d.params.projectId,r=P({selectedBuild:d.query.buildId||"latest",dateRange:[R().subtract(30,"days"),R()],search:"",limit:50,offset:0}),_=$(()=>m.value?[{label:"Latest",value:"latest"},{label:"All",value:"all"},...m.value.builds.map(i=>({label:`${t(i.createdAt)} (${i.id.slice(0,8)})`,value:i.id}))]:[{label:"Latest",value:"latest"},{label:"All",value:"all"}]),A=i=>{r.selectedBuild=i,I()},{loading:v,result:m,refetch:I}=Y(()=>Promise.all([h.list({projectId:b,limit:r.limit,offset:r.offset,buildId:r.selectedBuild,from:r.dateRange[0].toDate(),to:r.dateRange[1].toDate(),search:r.search}),W.list(b)]).then(([i,u])=>z({logs:i,builds:u})));return(i,u)=>(o(),c(e(F),{direction:"vertical"},{default:n(()=>{var k,x,B;return[l(e(ee),null,{default:n(()=>[C("Logs")]),_:1}),l(e(te),null,{default:n(()=>[l(e(w),{label:"Build"},{default:n(()=>[l(e(U),{value:r.selectedBuild,"onUpdate:value":u[0]||(u[0]=a=>r.selectedBuild=a),options:_.value,"option-label":"label","option-value":"value",filter:!1,onChange:A},null,8,["value","options"])]),_:1}),l(e(w),{label:"From"},{default:n(()=>[l(e(K),{value:r.dateRange,"onUpdate:value":u[1]||(u[1]=a=>r.dateRange=a)},null,8,["value"])]),_:1}),l(e(w),{label:"Search"},{default:n(()=>[l(e(V),{value:r.search,"onUpdate:value":u[2]||(u[2]=a=>r.search=a),type:"search"},null,8,["value"])]),_:1}),l(e(E),{loading:e(v),onClick:e(I)},{default:n(()=>[C("Filter")]),_:1},8,["loading","onClick"])]),_:1}),(k=e(m))!=null&&k.logs.length?(o(),c(e(ae),{key:0},{default:n(()=>[C(" Showing from "+s(r.offset+1)+" to "+s(r.offset+r.limit),1)]),_:1})):S("",!0),(x=e(m))!=null&&x.logs.length?(o(),c(e(M),{key:1,"data-source":(B=e(m))==null?void 0:B.logs,loading:e(v)},{default:n(()=>[(o(!0),f(G,null,O(e(m).logs,(a,N)=>(o(),c(e(Q),{key:N},{header:n(()=>[l(e(F),null,{default:n(()=>[r.selectedBuild=="all"?(o(),f("span",oe,s(a.buildId.split("-")[0]),1)):S("",!0),l(e(g),{type:"vertical"}),y("span",null,s(t(a.createdAt)),1),l(e(g),{type:"vertical"}),y("span",null,s(a.runtimeType)+":"+s(a.runtimeName),1),l(e(g),{type:"vertical"}),y("span",null,s(a.executionId.slice(0,8)),1),l(e(g),{type:"vertical"}),y("span",null,s(a.event),1)]),_:2},1024)]),default:n(()=>{var D,T;return[y("div",null,[a.event==="stdout"?(o(),f("pre",{key:0,textContent:s(a.payload.log)},null,8,ne)):a.event==="stderr"?(o(),f("pre",{key:1,textContent:s(a.payload.log)},null,8,se)):a.event==="program-start-failed"?(o(),f("pre",{key:2,textContent:s(a.payload.error)},null,8,ie)):a.event==="widgets-computed"&&((T=(D=a.payload.errors)==null?void 0:D.general)==null?void 0:T.repr)?(o(),f("pre",{key:3,textContent:s(a.payload.errors.general.repr)},null,8,de)):(o(),c(e(H),{key:4,"tree-data":e(Z)(a.payload)},null,8,["tree-data"]))])]}),_:2},1024))),128))]),_:1},8,["data-source","loading"])):(o(),c(e(J),{key:2}))]}),_:1}))}});export{Ue as default};
//# sourceMappingURL=Logs.20dca0be.js.map
