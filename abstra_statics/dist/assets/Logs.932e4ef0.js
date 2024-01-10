import{d as x,r as I,H as B,G as R,eB as F,F as $,eL as z,b as p,c as v,w as r,u as e,eK as E,f as a,aq as P,ad as _,co as j,bg as O,cC as k,ev as V,eC as G,bq as H,bL as K,ck as M}from"./outputWidgets.f2ae36a0.js";import{L as J}from"./Log.9ebb73a3.js";import{d as Q}from"./index.2a7bba2b.js";import{L}from"./log.584dcd0e.js";import"./authorManager.39a8ddb8.js";import{B as W}from"./build.c7ab3685.js";import"./index.d218deb1.js";import{a as X}from"./asyncComputed.543cc13a.js";import{R as Y}from"./dayjs.5545965e.js";import{a as Z}from"./Title.1747a412.js";import{a as D,A as g}from"./router.4a7d2453.js";import{A as c}from"./FormItem.a1fd3798.js";import{F as ee}from"./Form.47de7bd6.js";import{T as te}from"./Timeline.32fbf745.js";import"./ant-design.e027ec60.js";import"./index.60f2d2be.js";import"./StarFilled.fad29e50.js";import"./gateway.168406cd.js";import"./index.cf4c23b9.js";import"./record.104738e2.js";import"./pubsub.815fdbd4.js";import"./index.2aeee2a3.js";import"./index.e300b0a9.js";import"./Text.17250f4c.js";import"./hasIn.8c7e2228.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[u]="e0db021a-8ead-4964-85b5-c4f2d29e033d",f._sentryDebugIdIdentifier="sentry-dbid-e0db021a-8ead-4964-85b5-c4f2d29e033d")}catch{}})();const Le=x({__name:"Logs",setup(f){const u=I(1),i=I(10);B([u,i],([n,t])=>{u.value=n,i.value=t,w()});const h=R(()=>{var n,t;return{runtimes:(n=d.value)==null?void 0:n.filters.runtimes.map(({runtimeName:o,runtimeType:l})=>({label:`[${l}] ${o}`,value:o})),events:(t=d.value)==null?void 0:t.filters.events.map(o=>({label:`[${o.runtimeType}] ${o.event}`,value:o.event}))}}),m=F(),b=m.params.projectId;function N(){const n=[];return typeof m.query.runtimeId=="string"&&n.push(m.query.runtimeId),typeof m.query.runtimeTitle=="string"&&n.push(m.query.runtimeTitle),n}const s=$({selectedBuild:m.query.buildId||"latest",dateRange:void 0,search:"",runtimeNames:N(),events:[]}),T=z.exports.debounce(async()=>{await w(),y.value=!1},500),y=I(!1);B(s,()=>{y.value=!0,u.value=1,T()});const U=R(()=>d.value?[{label:"Latest",value:"latest"},{label:"All",value:"all"},...d.value.builds.map(n=>({label:`${Q(n.createdAt)} (${n.id.slice(0,8)})`,value:n.id}))]:[{label:"Latest",value:"latest"},{label:"All",value:"all"}]),q=n=>{s.selectedBuild=n,w()},{loading:C,result:d,refetch:w}=X(()=>{var n,t;return Promise.all([L.list({projectId:b,limit:i.value,offset:(u.value-1)*i.value,buildId:s.selectedBuild,from:(n=s.dateRange)==null?void 0:n[0].toDate(),to:(t=s.dateRange)==null?void 0:t[1].toDate(),search:s.search,executionIds:[],runtimeNames:s.runtimeNames,events:s.events}),W.list(b),L.filters(b)]).then(([{total:o,logs:l},A,S])=>E({total:o,logs:l,builds:A,filters:S}))});return(n,t)=>(p(),v(e(k),{direction:"vertical"},{default:r(()=>{var o;return[a(e(Z),null,{default:r(()=>[P("Logs")]),_:1}),a(e(ee),{layout:"vertical"},{default:r(()=>[a(e(D),{gutter:10},{default:r(()=>[a(e(g),{span:12},{default:r(()=>[a(e(c),{label:"Build"},{default:r(()=>[a(e(_),{value:s.selectedBuild,"onUpdate:value":t[0]||(t[0]=l=>s.selectedBuild=l),options:U.value,"option-label":"label","option-value":"value",filter:!1,onChange:q},null,8,["value","options"])]),_:1})]),_:1}),a(e(g),{span:12},{default:r(()=>[a(e(c),{label:"Date"},{default:r(()=>[a(e(Y),{value:s.dateRange,"onUpdate:value":t[1]||(t[1]=l=>s.dateRange=l),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(e(D),{gutter:10},{default:r(()=>[a(e(g),{span:12},{default:r(()=>[a(e(c),{label:"Runtimes"},{default:r(()=>[a(e(_),{value:s.runtimeNames,"onUpdate:value":t[2]||(t[2]=l=>s.runtimeNames=l),options:h.value.runtimes,mode:"multiple"},null,8,["value","options"])]),_:1})]),_:1}),a(e(g),{span:12},{default:r(()=>[a(e(c),{label:"Events"},{default:r(()=>[a(e(_),{value:s.events,"onUpdate:value":t[3]||(t[3]=l=>s.events=l),options:h.value.events,mode:"multiple"},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),a(e(c),{label:"Search"},{default:r(()=>[a(e(j),{value:s.search,"onUpdate:value":t[4]||(t[4]=l=>s.search=l),type:"search"},null,8,["value"])]),_:1})]),_:1}),e(C)||y.value?(p(),v(e(O),{key:0,style:{width:"100%"}})):(o=e(d))!=null&&o.logs.length?(p(),v(e(k),{key:1,direction:"vertical",style:{width:"100%"}},{default:r(()=>[a(e(te),null,{default:r(()=>[(p(!0),V(H,null,G(e(d).logs,(l,A)=>(p(),v(J,{key:A,log:l},null,8,["log"]))),128))]),_:1}),a(e(K),{current:u.value,"onUpdate:current":t[5]||(t[5]=l=>u.value=l),"page-size":i.value,"onUpdate:pageSize":t[6]||(t[6]=l=>i.value=l),"show-size-changer":"",total:e(d).total},null,8,["current","page-size","total"])]),_:1})):(p(),v(e(M),{key:2}))]}),_:1}))}});export{Le as default};
//# sourceMappingURL=Logs.932e4ef0.js.map