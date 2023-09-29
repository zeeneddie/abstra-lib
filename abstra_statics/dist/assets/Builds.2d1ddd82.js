import{d as I,eA as v,o as w,N as h,J as b,b as x,c as D,u as B,x as C}from"./outputWidgets.d6897520.js";import{a as k}from"./asyncComputed.2c363ccc.js";import{P as A}from"./project.7c73974a.js";import{B as P}from"./build.92b4d774.js";import{r as j}from"./console.526446d9.js";import"./index.a8a303e6.js";import{N as L,P as M}from"./icons.20b5fc8a.js";import{_ as N}from"./CrudView.vue_vue_type_script_setup_true_lang.eece189e.js";import{f as E}from"./index.b048d0fb.js";import"./gateway.c13063b9.js";import"./activeRecord.e97440b4.js";import"./pubsub.e0b33cd4.js";import"./index.40bea6c2.js";import"./Form.a2bccbf0.js";import"./Title.9e102f51.js";import"./index.65fddafd.js";import"./index.dcf9fd0a.js";import"./index.09e1dc09.js";import"./dayjs.dccbdd6f.js";import"./index.0f5fc52a.js";import"./index.fd09b35e.js";import"./TabPane.c8258ec5.js";import"./index.b11f642a.js";import"./index.7c1a9101.js";import"./index.e63bacfa.js";import"./index.30191c77.js";import"./index.33e7eca5.js";import"./index.16598f32.js";import"./index.a2784b6b.js";import"./index.59123055.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="c046c3ee-8e87-49ce-a0c9-b721918893c8",o._sentryDebugIdIdentifier="sentry-dbid-c046c3ee-8e87-49ce-a0c9-b721918893c8")}catch{}})();function F(o){return o.charAt(0).toUpperCase()+o.slice(1)}const S=I({__name:"Builds",setup(o){const s=v().params.projectId;async function m(e){const t=`https://${e.subdomain}.abstra.app/_version`;return(await fetch(t)).text()}const{loading:d,result:a,refetch:f}=k(()=>Promise.all([P.list(s),A.get(s).then(m)]).then(([e,t])=>({builds:e,lastDeploymentId:t})));let i;w(()=>{i=setInterval(f,5e3)}),h(()=>{clearInterval(i)});function c(e,t){return e.id===t}function g(e,t,r){return c(e,r)?"Live":t===0&&e.status==="success"?"Transitioning":e.status==="aborted-by-user"||e.status==="aborted"?"Aborted":e.status==="failure"?"Failed":e.status==="in-progress"?"In progress":e.status==="pending"?"Pending":e.status==="success"?"Past":F(e.status)}function y(e,t,r){return c(e,r)?"green":t===0&&e.status==="success"?"blue":e.status==="aborted"||e.status==="aborted-by-user"?"orange":e.status==="failure"?"red":e.status==="in-progress"||e.status==="pending"?"yellow":"lightgray"}const _=b(()=>{var e,t;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}],rows:(t=(e=a.value)==null?void 0:e.builds.map((r,l)=>{var u,p;return{key:r.id,cells:[{text:r.id.slice(0,8)},{text:E(r.createdAt,Date.now(),{addSuffix:!0})},{text:g(r,l,(u=a.value)==null?void 0:u.lastDeploymentId),tagColor:y(r,l,(p=a.value)==null?void 0:p.lastDeploymentId)},{text:"",actions:[{icon:L,label:"View application logs",onClick:()=>j.push({name:"logs",params:{projectId:s},query:{buildId:r.id}})},{icon:M,label:"Download files",onClick:()=>r.download()}]}]}}))!=null?t:[]}});return(e,t)=>(x(),D(N,{"entity-name":"build",loading:B(d),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:_.value,live:""},null,8,["loading","table"]))}});const de=C(S,[["__scopeId","data-v-c3cc84ec"]]);export{de as default};
//# sourceMappingURL=Builds.2d1ddd82.js.map