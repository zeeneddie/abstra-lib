import{d as L,ey as j,G as P,H as $,b as o,c,w as n,u as e,f as l,b0 as C,ad as U,cF as V,cb as E,eA as s,eu as S,er as f,ez as O,e as y,cY as G,bu as z,cB as H,eD as Y}from"./registerWidgets.5ceb46ef.js";import{C as J}from"./gateway.fadd845e.js";import{B as K}from"./build.b9edb17e.js";import"./index.e1d2843e.js";import{a as M}from"./asyncComputed.fd157db2.js";import{t as Q}from"./ant-design.722d9ebc.js";import{f as R}from"./dayjs.a04d1bd5.js";import{R as W,C as X,A as Z}from"./console.8043e5b6.js";import{f as q}from"./index.b048d0fb.js";import{A as ee}from"./Title.d4cb8bc4.js";import{A as I}from"./FormItem.0abaafb1.js";import{F as te}from"./Form.9c114a17.js";import{a as ae}from"./index.1a41b32a.js";import{A as b}from"./index.f7704414.js";import{A as F}from"./index.4fdcdf65.js";import"./passwordlessManager.db35a950.js";import"./pubsub.451b7de0.js";import"./storage.4e9cf889.js";import"./activeRecord.693e9703.js";import"./index.9fb57ecd.js";import"./index.dd15e290.js";import"./index.577eba83.js";import"./index.ddacc24d.js";import"./index.fac4722d.js";import"./index.124d01ae.js";import"./index.4c782ec6.js";import"./index.5183e138.js";import"./index.ce292253.js";import"./index.0d24e9b8.js";import"./index.77b675c5.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[t]="118d1095-d28c-4290-a405-92112a7cd0b6",p._sentryDebugIdIdentifier="sentry-dbid-118d1095-d28c-4290-a405-92112a7cd0b6")}catch{}})();class re{list(t){const d=new URLSearchParams({offset:t.offset.toString(),limit:t.limit.toString(),from:t.from.getTime().toString(),to:t.to.getTime().toString(),search:t.search});return J.get(`projects/${t.projectId}/builds/${t.buildId}/logs?${d}`)}}const le=new re;class h{constructor(t,d,v,r,_,A,g){this.executionId=t,this.runtimeType=d,this.runtimeName=v,this.payload=r,this.event=_,this.buildId=A,this.createdAt=g}static fromDTO(t){return new h(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){return(await le.list(t)).logs.map(h.fromDTO)}}const oe={key:0},ne=["textContent"],se=["textContent"],ie=["textContent"],de=["textContent"],Ee=L({__name:"Logs",setup(p){function t(i){return q(i,new Date,{addSuffix:!0})}const d=j(),v=d.params.projectId,r=P({selectedBuild:d.query.buildId||"latest",dateRange:[R().subtract(30,"days"),R()],search:"",limit:50,offset:0}),_=$(()=>m.value?[{label:"Latest",value:"latest"},{label:"All",value:"all"},...m.value.builds.map(i=>({label:`${t(i.createdAt)} (${i.id.slice(0,8)})`,value:i.id}))]:[{label:"Latest",value:"latest"},{label:"All",value:"all"}]),A=i=>{r.selectedBuild=i,k()},{loading:g,result:m,refetch:k}=M(()=>Promise.all([h.list({projectId:v,limit:r.limit,offset:r.offset,buildId:r.selectedBuild,from:r.dateRange[0].toDate(),to:r.dateRange[1].toDate(),search:r.search}),K.list(v)]).then(([i,u])=>Y({logs:i,builds:u})));return(i,u)=>(o(),c(e(F),{direction:"vertical"},{default:n(()=>{var w,x,B;return[l(e(ee),null,{default:n(()=>[C("Logs")]),_:1}),l(e(te),null,{default:n(()=>[l(e(I),{label:"Build"},{default:n(()=>[l(e(U),{value:r.selectedBuild,"onUpdate:value":u[0]||(u[0]=a=>r.selectedBuild=a),options:_.value,"option-label":"label","option-value":"value",filter:!1,onChange:A},null,8,["value","options"])]),_:1}),l(e(I),{label:"From"},{default:n(()=>[l(e(W),{value:r.dateRange,"onUpdate:value":u[1]||(u[1]=a=>r.dateRange=a)},null,8,["value"])]),_:1}),l(e(I),{label:"Search"},{default:n(()=>[l(e(V),{value:r.search,"onUpdate:value":u[2]||(u[2]=a=>r.search=a),type:"search"},null,8,["value"])]),_:1}),l(e(E),{loading:e(g),onClick:e(k)},{default:n(()=>[C("Filter")]),_:1},8,["loading","onClick"])]),_:1}),(w=e(m))!=null&&w.logs.length?(o(),c(e(ae),{key:0},{default:n(()=>[C(" Showing from "+s(r.offset+1)+" to "+s(r.offset+r.limit),1)]),_:1})):S("",!0),(x=e(m))!=null&&x.logs.length?(o(),c(e(X),{key:1,"data-source":(B=e(m))==null?void 0:B.logs,loading:e(g)},{default:n(()=>[(o(!0),f(z,null,O(e(m).logs,(a,N)=>(o(),c(e(Z),{key:N},{header:n(()=>[l(e(F),null,{default:n(()=>[r.selectedBuild=="all"?(o(),f("span",oe,s(a.buildId.split("-")[0]),1)):S("",!0),l(e(b),{type:"vertical"}),y("span",null,s(t(a.createdAt)),1),l(e(b),{type:"vertical"}),y("span",null,s(a.runtimeType)+":"+s(a.runtimeName),1),l(e(b),{type:"vertical"}),y("span",null,s(a.executionId.slice(0,8)),1),l(e(b),{type:"vertical"}),y("span",null,s(a.event),1)]),_:2},1024)]),default:n(()=>{var D,T;return[y("div",null,[a.event==="stdout"?(o(),f("pre",{key:0,textContent:s(a.payload.log)},null,8,ne)):a.event==="stderr"?(o(),f("pre",{key:1,textContent:s(a.payload.log)},null,8,se)):a.event==="program-start-failed"?(o(),f("pre",{key:2,textContent:s(a.payload.error)},null,8,ie)):a.event==="widgets-computed"&&((T=(D=a.payload.errors)==null?void 0:D.general)==null?void 0:T.repr)?(o(),f("pre",{key:3,textContent:s(a.payload.errors.general.repr)},null,8,de)):(o(),c(e(G),{key:4,"tree-data":e(Q)(a.payload)},null,8,["tree-data"]))])]}),_:2},1024))),128))]),_:1},8,["data-source","loading"])):(o(),c(e(H),{key:2}))]}),_:1}))}});export{Ee as default};
//# sourceMappingURL=Logs.b02cae42.js.map
