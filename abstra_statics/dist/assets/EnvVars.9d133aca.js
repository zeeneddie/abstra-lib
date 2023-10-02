var f=Object.defineProperty;var b=(a,t,e)=>t in a?f(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var u=(a,t,e)=>(b(a,typeof t!="symbol"?t+"":t,e),e);import{d as g,eA as w,J as v,b as k,c as $,u as _}from"./outputWidgets.541a6a3f.js";import{a as I}from"./asyncComputed.6496ca6b.js";import"./console.7080c244.js";import{C as l}from"./gateway.647cec74.js";import{A}from"./activeRecord.867c40fa.js";import"./index.56c0102f.js";import{p as C}from"./icons.fbbc5318.js";import{_ as j}from"./CrudView.vue_vue_type_script_setup_true_lang.af69973c.js";import"./index.1b1480b6.js";import"./Form.2a9acb85.js";import"./Title.3011141f.js";import"./index.7fb7f882.js";import"./index.33fb7a48.js";import"./index.5d5870f2.js";import"./dayjs.03d6e1d3.js";import"./index.f20ad580.js";import"./index.d89692b2.js";import"./TabPane.40396dd5.js";import"./index.ef35da09.js";import"./index.c3edc651.js";import"./index.dda022dd.js";import"./index.1797b918.js";import"./index.7f86f9a3.js";import"./index.68ffc7e6.js";import"./index.3cff0676.js";import"./index.07910c0e.js";import"./pubsub.8482a29f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="b61402ca-0774-4383-adc8-e2df4a337505",a._sentryDebugIdIdentifier="sentry-dbid-b61402ca-0774-4383-adc8-e2df4a337505")}catch{}})();class P{constructor(){u(this,"urlPath","env-vars")}async create(t){return l.post(`projects/${t.projectId}/${this.urlPath}`,{name:t.name,value:t.value})}async delete(t,e){await l.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return l.get(`projects/${t}/${this.urlPath}`)}async get(t){return l.get(`${this.urlPath}/${t}`)}async update(t,e){return l.patch(`${this.urlPath}/${t}`,e)}}const o=new P;class s{constructor(t,e){u(this,"record");this.projectId=t,this.record=A.create(o,e,"id")}static async list(t){return(await o.list(t)).map(r=>new s(t,r))}static async create(t,e,r){const n=await o.create({projectId:t,name:e,value:r});return new s(t,n)}static async get(t,e){const r=await o.get(e);return new s(t,r)}static async update(t,e,r){const n=await o.update(e,r);return new s(t,n)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(t){this.record.set("value",t)}async save(){await this.record.save()}async delete(){await o.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const rt=g({__name:"EnvVars",setup(a){const e=w().params.projectId,{loading:r,result:n,refetch:d}=I(()=>s.list(e)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:i,value:c}){await s.create(e,i,c),d()}const h=v(()=>{var i,c;return{columns:[{name:"Key"},{name:"Actions",align:"right"}],rows:(c=(i=n.value)==null?void 0:i.map(p=>({key:p.key,cells:[{text:p.key},{text:"Actions",actions:[{icon:C,label:"Delete",async onClick(){await p.delete(),d()},dangerous:!0}]}]})))!=null?c:[]}});return(i,c)=>(k(),$(j,{"entity-name":"Env var",loading:_(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:h.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{rt as default};
//# sourceMappingURL=EnvVars.9d133aca.js.map
