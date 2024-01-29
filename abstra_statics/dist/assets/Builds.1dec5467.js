import{r as z}from"./router.679077c0.js";import{d as S,ey as T,b as d,c as f,w as a,f as l,u as t,bK as E,bf as N,bd as F,e as $,I as k,ao as u,cA as w,eB as p,ev as v,et as D,ci as P,ez as R,o as q,J as Q,r as J,F as K,bo as U,bp as Y,be as G,t as H}from"./outputWidgets.4d9ba3ef.js";import{a as B}from"./asyncComputed.f4677978.js";import"./jwt-decode.esm.74bd4619.js";import{B as O,a as W}from"./build.3b6499e4.js";import"./index.3025c580.js";import{P as X}from"./project.b9d20a81.js";import{C as Z}from"./CrudView.38618fc3.js";import{Q as j,E as ee,f as te,j as oe,a as ae,L as le,S as se}from"./icons.a69fa9c8.js";import{A as m}from"./Text.cb3c74fa.js";import{a as ne,A as re}from"./index.f69eae46.js";import{g as ie}from"./datetime.7e1f81eb.js";import{d as ue}from"./index.cb2c6e5c.js";import{M as de}from"./Modal.889e82ae.js";import"./FormItem.24b19ea4.js";import"./hasIn.1cdec4af.js";import"./storage.39df5cbf.js";import"./index.cf4c23b9.js";import"./record.4e413006.js";import"./pubsub.3bfcfc7f.js";import"./Title.60378b9e.js";import"./Form.d59f41b5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2c380584.js";import"./url.cd5d7e23.js";import"./index.c7c4284d.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[_]="6f69e58e-7716-4250-885b-74d4221b9e3e",g._sentryDebugIdIdentifier="sentry-dbid-6f69e58e-7716-4250-885b-74d4221b9e3e")}catch{}})();const ce={style:{display:"flex","align-items":"center",gap:"5px"}},pe={key:1},ge=S({__name:"BuildInspector",props:{buildSpec:{}},setup(g){const _=g,y=T(),I=i=>{y.push({name:"logs",params:{projectId:_.buildSpec.projectId},query:i.logQuery})};return(i,x)=>i.buildSpec.runtimes.length>0?(d(),f(t(re),{key:0,"item-layout":"horizontal","data-source":i.buildSpec.runtimes},{renderItem:a(({item:n})=>[l(t(ne),null,{actions:a(()=>[l(t(E),null,{overlay:a(()=>[l(t(N),null,{default:a(()=>[l(t(F),{onClick:c=>I(n)},{default:a(()=>[$("div",ce,[l(k,{path:t(j)},null,8,["path"]),l(t(m),null,{default:a(()=>[u(" View Logs")]),_:1})])]),_:2},1032,["onClick"])]),_:2},1024)]),default:a(()=>[l(k,{path:t(ee),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)]),default:a(()=>[n.type=="form"?(d(),f(t(w),{key:0,size:"large"},{default:a(()=>[l(k,{path:t(te)},null,8,["path"]),l(t(m),{strong:""},{default:a(()=>[u(p(n.title),1)]),_:2},1024),l(t(m),{type:"secondary",code:""},{default:a(()=>[u("/"+p(n.path),1)]),_:2},1024)]),_:2},1024)):v("",!0),n.type=="job"?(d(),f(t(w),{key:1,size:"large"},{default:a(()=>[l(k,{path:t(oe)},null,8,["path"]),l(t(m),{strong:""},{default:a(()=>[u(p(n.title),1)]),_:2},1024),l(t(m),{type:"secondary",code:""},{default:a(()=>[u(p(n.schedule),1)]),_:2},1024)]),_:2},1024)):v("",!0),n.type=="hook"?(d(),f(t(w),{key:2,size:"large"},{default:a(()=>[l(k,{path:t(ae)},null,8,["path"]),l(t(m),{strong:""},{default:a(()=>[u(p(n.title),1)]),_:2},1024),l(t(m),{type:"secondary",code:""},{default:a(()=>[u("/_hooks/"+p(n.path),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),_:2},1024)]),_:1},8,["data-source"])):(d(),D("div",pe,[l(t(P),{description:"No runtimes found. Make sure your project has forms, hooks or jobs before deploying it"})]))}}),me=S({__name:"Builds",setup(g){const y=R().params.projectId,{loading:I,result:i,refetch:x}=B(async()=>{const[e,o]=await Promise.all([O.list(y),X.getStatus(y)]);return{b:e.map(r=>({build:r,status:o.filter(b=>b.buildId==r.id).map(b=>b.status)})),status:o}});let n;q(()=>{n=setInterval(x,1e4)}),Q(()=>{clearInterval(n)});const c=J(null),h=B(async()=>c.value?await W.get(c.value):null),M=()=>{var s;const e=(s=i.value)==null?void 0:s.b.find(r=>r.build.id===c.value);return`Build ${e==null?void 0:e.build.id.slice(0,8)} - ${e==null?void 0:e.build.createdAt.toLocaleString()}`},A=[{text:"Deploying",tagColor:"blue",check:e=>{var o,s;return(s=e.build.latest&&e.status.some(r=>r=="Running")&&((o=i.value)==null?void 0:o.status.some(r=>r.buildId!==e.build.id)))!=null?s:!1}},{text:"Deactivating",tagColor:"orange",check:e=>e.build.status==="success"&&!e.build.latest&&e.status.some(o=>o=="Running")},{text:"Failed",tagColor:"orange",check:e=>e.build.latest&&e.status.some(o=>o=="Failed")},{text:"LIVE",tagColor:"green",check:e=>e.build.latest},{text:"Inactive",tagColor:"lightgray",check:e=>e.build.status==="success"},{text:"Aborted",tagColor:"orange",check:e=>e.build.status==="aborted"||e.build.status==="aborted-by-user"},{text:"Failed",tagColor:"orange",check:e=>e.build.status==="failure"},{text:"In progress",tagColor:"red",check:e=>e.build.status==="in-progress"},{text:"Pending",tagColor:"yellow",check:e=>e.build.status==="pending"}];function L(e){var o,s,r,b;return{text:(s=(o=A.find(C=>C.check(e)))==null?void 0:o.text)!=null?s:"unknown",tagColor:(b=(r=A.find(C=>C.check(e)))==null?void 0:r.tagColor)!=null?b:"lightgray"}}const V=K(()=>{const e=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"",align:"right"}];return i.value?{columns:e,rows:i.value.b.map(o=>{var s;return{key:o.build.id,cells:[{type:"text",text:o.build.id.slice(0,8)},{key:"date",type:"slot",payload:{date:ie(o.build.createdAt,{weekday:void 0}),distance:ue(o.build.createdAt)}},{type:"tag",...L(o),hover:(s=o.build.log)!=null?s:void 0},{type:"actions",actions:[{icon:le,label:"Inspect build",onClick:async()=>{c.value=o.build.id,h.refetch()}},{icon:j,label:"View application logs",onClick:()=>z.push({name:"logs",params:{projectId:y},query:{buildId:o.build.id}})},{icon:se,label:"Download files",onClick:()=>o.build.download()}]}]}})}:{columns:e,rows:[]}});return(e,o)=>(d(),D(U,null,[l(Z,{"entity-name":"build",loading:t(I),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:V.value,live:""},{date:a(({payload:s})=>[l(t(Y),null,{title:a(()=>[u(p(s.distance),1)]),default:a(()=>[u(p(s.date)+" ",1)]),_:2},1024)]),_:1},8,["loading","table"]),c.value?(d(),f(t(de),{key:0,footer:null,open:!!c.value,size:"large",width:"80%",title:M(),onCancel:o[0]||(o[0]=s=>c.value=null)},{default:a(()=>[!t(h).result.value||t(h).loading.value?(d(),f(t(G),{key:0})):t(h).result.value?(d(),f(ge,{key:1,"build-spec":t(h).result.value},null,8,["build-spec"])):v("",!0)]),_:1},8,["open","title"])):v("",!0)],64))}});const Pe=H(me,[["__scopeId","data-v-c12ac415"]]);export{Pe as default};
//# sourceMappingURL=Builds.1dec5467.js.map
