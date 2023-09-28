import{d as m,ey as d,H as l,b as c,c as u,u as f,v as _}from"./registerWidgets.dc9f1313.js";import{a as y}from"./asyncComputed.b23fa538.js";import"./gateway.edd1f42a.js";import{B as g}from"./build.a6e15d95.js";import"./index.5939d926.js";import{M as b,O as w}from"./icons.43fab4f0.js";import{r as I}from"./console.bde11dc7.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.c1a9182c.js";import{f as v}from"./index.b048d0fb.js";import"./passwordlessManager.bb9c7ffc.js";import"./pubsub.358cbe19.js";import"./storage.44e69db3.js";import"./activeRecord.9995b4c7.js";import"./index.306aab55.js";import"./Form.14d2c95c.js";import"./Title.aac0de3b.js";import"./index.8fa60cd0.js";import"./index.a5ea279e.js";import"./index.db3825e7.js";import"./dayjs.62770fd8.js";import"./index.aeb5998e.js";import"./index.82a9eeff.js";import"./index.a6b470f8.js";import"./index.ea13c8cc.js";import"./index.56fa7ca8.js";import"./index.13368493.js";import"./index.a55930a0.js";import"./index.35a9179c.js";import"./index.809c009e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="8cbcfa30-6d51-4137-a962-f924d1c24719",o._sentryDebugIdIdentifier="sentry-dbid-8cbcfa30-6d51-4137-a962-f924d1c24719")}catch{}})();const B=m({__name:"Builds",setup(o){const r=d().params.projectId,{loading:s,result:n}=y(()=>g.list(r)),p=l(()=>{var a,i;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(i=(a=n.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8)},{text:v(t.createdAt,Date.now(),{addSuffix:!0})},{text:t.status+(t.log?": "+t.log:"")},{text:"",actions:[{icon:b,label:"View logs",onClick:()=>I.push({name:"logs",params:{projectId:r},query:{buildId:t.id}})},{icon:w,label:"Download files",onClick:()=>t.download()}]}]})))!=null?i:[]}});return(a,i)=>(c(),u(x,{"entity-name":"build",loading:f(s),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:p.value},null,8,["loading","table"]))}});const Z=_(B,[["__scopeId","data-v-03f70823"]]);export{Z as default};
//# sourceMappingURL=Builds.d4dc6adb.js.map
