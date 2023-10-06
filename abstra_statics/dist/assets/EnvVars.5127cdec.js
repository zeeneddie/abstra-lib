var b=Object.defineProperty;var f=(a,t,e)=>t in a?b(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var u=(a,t,e)=>(f(a,typeof t!="symbol"?t+"":t,e),e);import{d as g,eA as w,J as v,b as k,c as $,u as _}from"./outputWidgets.1f391ab3.js";import{a as I}from"./asyncComputed.56fb497e.js";import"./console.3edc9cde.js";import{C as l}from"./gateway.98993b50.js";import{A}from"./activeRecord.b9964a93.js";import"./index.e8fb5940.js";import{q as C}from"./icons.35fd2af6.js";import{_ as j}from"./CrudView.vue_vue_type_script_setup_true_lang.fc3376a4.js";import"./index.a24e4cfd.js";import"./Form.d88e907e.js";import"./Title.e19c9b7e.js";import"./CollapsePanel.ed22c9ce.js";import"./index.3daa08be.js";import"./index.beaf06d8.js";import"./index.16917afa.js";import"./dayjs.12321a58.js";import"./index.06f9a351.js";import"./index.130e9d58.js";import"./TabPane.49afc3f4.js";import"./index.a2705008.js";import"./index.257ed691.js";import"./index.72e9f57c.js";import"./index.4260e6cf.js";import"./index.f0baefdd.js";import"./index.37b8f4ea.js";import"./index.18aa8459.js";import"./index.d09067f1.js";import"./index.6e066317.js";import"./pubsub.ab26e051.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="62bbc69a-a8d8-4548-8b33-94c168fe510e",a._sentryDebugIdIdentifier="sentry-dbid-62bbc69a-a8d8-4548-8b33-94c168fe510e")}catch{}})();class P{constructor(){u(this,"urlPath","env-vars")}async create(t){return l.post(`projects/${t.projectId}/${this.urlPath}`,{name:t.name,value:t.value})}async delete(t,e){await l.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return l.get(`projects/${t}/${this.urlPath}`)}async get(t){return l.get(`${this.urlPath}/${t}`)}async update(t,e){return l.patch(`${this.urlPath}/${t}`,e)}}const s=new P;class o{constructor(t,e){u(this,"record");this.projectId=t,this.record=A.create(s,e,"id")}static async list(t){return(await s.list(t)).map(r=>new o(t,r))}static async create(t,e,r){const n=await s.create({projectId:t,name:e,value:r});return new o(t,n)}static async get(t,e){const r=await s.get(e);return new o(t,r)}static async update(t,e,r){const n=await s.update(e,r);return new o(t,n)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(t){this.record.set("value",t)}async save(){await this.record.save()}async delete(){await s.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const st=g({__name:"EnvVars",setup(a){const e=w().params.projectId,{loading:r,result:n,refetch:m}=I(()=>o.list(e)),d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:i,value:c}){await o.create(e,i,c),m()}const h=v(()=>{var i,c;return{columns:[{name:"Key"},{name:"Actions",align:"right"}],rows:(c=(i=n.value)==null?void 0:i.map(p=>({key:p.key,cells:[{text:p.key},{text:"Actions",actions:[{icon:C,label:"Delete",async onClick(){await p.delete(),m()},dangerous:!0}]}]})))!=null?c:[]}});return(i,c)=>(k(),$(j,{"entity-name":"Env var",loading:_(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:h.value,"create-button-text":"Add Environment Variable",fields:d,onCreate:y},null,8,["loading","table"]))}});export{st as default};
//# sourceMappingURL=EnvVars.5127cdec.js.map
