import{r as T}from"./router.c745a3c2.js";import{d as S,eA as z,b as d,c as m,w as o,f as l,u as t,bT as N,bw as $,bu as E,e as F,I as k,ar as u,cF as C,eD as p,ex as v,ev as D,cn as P,eB as R,o as q,L as Q,r as H,H as J,a$ as O,f7 as U,b3 as Y,bv as G,v as K}from"./outputWidgets.6830fc2d.js";import{a as B}from"./asyncComputed.46a733c1.js";import{B as W,a as X}from"./build.62abea20.js";import"./index.fddb9e1e.js";import{P as Z}from"./project.bd61c28b.js";import{C as ee}from"./CrudView.432fe0c4.js";import{O as j,c as te,f as ae,j as oe,a as le,J as se,Q as ne}from"./icons.31e4fa46.js";import{A as g}from"./Text.b2a17f23.js";import{a as re,A as ie}from"./index.64cffed4.js";import{g as ue}from"./datetime.70a96c3f.js";import{M as de}from"./Modal.e109cdd2.js";import"./FormItem.278e4518.js";import"./hasIn.48daad41.js";import"./index.cf4c23b9.js";import"./record.416df660.js";import"./pubsub.6d4f7540.js";import"./Paragraph.c22304c7.js";import"./Base.e8ab0cc0.js";import"./Form.a8618886.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6b319732.js";import"./url.1f48e231.js";import"./index.a26dbe33.js";import"./Title.10b04a9c.js";import"./index.ec7fc193.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[_]="f719d2b7-a63f-454b-91bd-09d15cfbf261",f._sentryDebugIdIdentifier="sentry-dbid-f719d2b7-a63f-454b-91bd-09d15cfbf261")}catch{}})();const ce={style:{display:"flex","align-items":"center",gap:"5px"}},pe={key:1},fe=S({__name:"BuildInspector",props:{buildSpec:{}},setup(f){const _=f,b=z(),I=i=>{b.push({name:"logs",params:{projectId:_.buildSpec.projectId},query:i.logQuery})};return(i,x)=>i.buildSpec.runtimes.length>0?(d(),m(t(ie),{key:0,"item-layout":"horizontal","data-source":i.buildSpec.runtimes},{renderItem:o(({item:n})=>[l(t(re),null,{actions:o(()=>[l(t(N),null,{overlay:o(()=>[l(t($),null,{default:o(()=>[l(t(E),{onClick:c=>I(n)},{default:o(()=>[F("div",ce,[l(k,{path:t(j)},null,8,["path"]),l(t(g),null,{default:o(()=>[u(" View Logs")]),_:1})])]),_:2},1032,["onClick"])]),_:2},1024)]),default:o(()=>[l(k,{path:t(te),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)]),default:o(()=>[n.type=="form"?(d(),m(t(C),{key:0,size:"large"},{default:o(()=>[l(k,{path:t(ae)},null,8,["path"]),l(t(g),{strong:""},{default:o(()=>[u(p(n.title),1)]),_:2},1024),l(t(g),{type:"secondary",code:""},{default:o(()=>[u("/"+p(n.path),1)]),_:2},1024)]),_:2},1024)):v("",!0),n.type=="job"?(d(),m(t(C),{key:1,size:"large"},{default:o(()=>[l(k,{path:t(oe)},null,8,["path"]),l(t(g),{strong:""},{default:o(()=>[u(p(n.title),1)]),_:2},1024),l(t(g),{type:"secondary",code:""},{default:o(()=>[u(p(n.schedule),1)]),_:2},1024)]),_:2},1024)):v("",!0),n.type=="hook"?(d(),m(t(C),{key:2,size:"large"},{default:o(()=>[l(k,{path:t(le)},null,8,["path"]),l(t(g),{strong:""},{default:o(()=>[u(p(n.title),1)]),_:2},1024),l(t(g),{type:"secondary",code:""},{default:o(()=>[u("/_hooks/"+p(n.path),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),_:2},1024)]),_:1},8,["data-source"])):(d(),D("div",pe,[l(t(P),{description:"No runtimes found. Make sure your project has forms, hooks or jobs before deploying it"})]))}}),ge=S({__name:"Builds",setup(f){const b=R().params.projectId,{loading:I,result:i,refetch:x}=B(async()=>{const[e,a]=await Promise.all([W.list(b),Z.getStatus(b)]);return{b:e.map(r=>({build:r,status:a.filter(y=>y.buildId==r.id).map(y=>y.status)})),status:a}});let n;q(()=>{n=setInterval(x,1e4)}),Q(()=>{clearInterval(n)});const c=H(null),h=B(async()=>c.value?await X.get(c.value):null),M=()=>{var s;const e=(s=i.value)==null?void 0:s.b.find(r=>r.build.id===c.value);return`Build ${e==null?void 0:e.build.id.slice(0,8)} - ${e==null?void 0:e.build.createdAt.toLocaleString()}`},A=[{text:"Deploying",tagColor:"blue",check:e=>{var a,s;return(s=e.build.latest&&e.status.some(r=>r=="Running")&&((a=i.value)==null?void 0:a.status.some(r=>r.buildId!==e.build.id)))!=null?s:!1}},{text:"Deactivating",tagColor:"orange",check:e=>e.build.status==="success"&&!e.build.latest&&e.status.some(a=>a=="Running")},{text:"Failed",tagColor:"orange",check:e=>e.build.latest&&e.status.some(a=>a=="Failed")},{text:"LIVE",tagColor:"green",check:e=>e.build.latest},{text:"Inactive",tagColor:"lightgray",check:e=>e.build.status==="success"},{text:"Aborted",tagColor:"orange",check:e=>e.build.status==="aborted"||e.build.status==="aborted-by-user"},{text:"Failed",tagColor:"orange",check:e=>e.build.status==="failure"},{text:"In progress",tagColor:"red",check:e=>e.build.status==="in-progress"},{text:"Pending",tagColor:"yellow",check:e=>e.build.status==="pending"}];function L(e){var a,s,r,y;return{text:(s=(a=A.find(w=>w.check(e)))==null?void 0:a.text)!=null?s:"unknown",tagColor:(y=(r=A.find(w=>w.check(e)))==null?void 0:r.tagColor)!=null?y:"lightgray"}}const V=J(()=>{const e=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"",align:"right"}];return i.value?{columns:e,rows:i.value.b.map(a=>{var s;return{key:a.build.id,cells:[{type:"text",text:a.build.id.slice(0,8)},{key:"date",type:"slot",payload:{date:ue(a.build.createdAt,{weekday:void 0}),distance:U(a.build.createdAt)}},{type:"tag",...L(a),hover:(s=a.build.log)!=null?s:void 0},{type:"actions",actions:[{icon:se,label:"Inspect build",onClick:async()=>{c.value=a.build.id,h.refetch()}},{icon:j,label:"View application logs",onClick:()=>T.push({name:"logs",params:{projectId:b},query:{buildId:a.build.id}})},{icon:ne,label:"Download files",onClick:()=>a.build.download()}]}]}})}:{columns:e,rows:[]}});return(e,a)=>(d(),D(O,null,[l(ee,{"entity-name":"build",loading:t(I),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:V.value,live:""},{date:o(({payload:s})=>[l(t(Y),null,{title:o(()=>[u(p(s.distance),1)]),default:o(()=>[u(p(s.date)+" ",1)]),_:2},1024)]),_:1},8,["loading","table"]),c.value?(d(),m(t(de),{key:0,footer:null,open:!!c.value,size:"large",width:"80%",title:M(),onCancel:a[0]||(a[0]=s=>c.value=null)},{default:o(()=>[!t(h).result.value||t(h).loading.value?(d(),m(t(G),{key:0})):t(h).result.value?(d(),m(fe,{key:1,"build-spec":t(h).result.value},null,8,["build-spec"])):v("",!0)]),_:1},8,["open","title"])):v("",!0)],64))}});const Pe=K(ge,[["__scopeId","data-v-c12ac415"]]);export{Pe as default};
//# sourceMappingURL=Builds.ee7a3b83.js.map
