var f=Object.defineProperty;var w=(a,t,e)=>t in a?f(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var d=(a,t,e)=>(w(a,typeof t!="symbol"?t+"":t,e),e);import{d as g,ez as h,F as v,b as k,c as I,u as _}from"./outputWidgets.4b203988.js";import{a as $}from"./asyncComputed.e3f401af.js";import{C as i}from"./router.b5e476b6.js";import"./jwt-decode.esm.74bd4619.js";import"./index.7a3abf72.js";import{o as C}from"./icons.b5300508.js";import{C as j}from"./CrudView.54167740.js";import"./FormItem.dacf5a0e.js";import"./hasIn.c2d80060.js";import"./storage.e938f042.js";import"./index.08241909.js";import"./index.cf4c23b9.js";import"./record.3809e80c.js";import"./pubsub.3a2fa885.js";import"./Title.aa160519.js";import"./Text.574763d2.js";import"./Form.ed264728.js";import"./Modal.96464eb7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js";import"./url.fcdccb50.js";import"./index.50465e1e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="a9b90937-7baa-419d-9a11-4afe6e46acc3",a._sentryDebugIdIdentifier="sentry-dbid-a9b90937-7baa-419d-9a11-4afe6e46acc3")}catch{}})();class P{constructor(){d(this,"urlPath","env-vars")}async create(t){return i.post(`projects/${t.projectId}/${this.urlPath}`,{name:t.name,value:t.value})}async delete(t,e){await i.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return i.get(`projects/${t}/${this.urlPath}`)}async get(t){return i.get(`${this.urlPath}/${t}`)}}const c=new P;class n{constructor(t,e){this.projectId=t,this.dto=e}static async list(t){return(await c.list(t)).map(r=>new n(t,r))}static async create(t,e,r){const l=await c.create({projectId:t,name:e,value:r});return new n(t,l)}static async get(t,e){const r=await c.get(e);return new n(t,r)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await c.delete(this.projectId,this.key)}}const X=g({__name:"EnvVars",setup(a){const e=h().params.projectId,{loading:r,result:l,refetch:u}=$(()=>n.list(e)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:o,value:s}){await n.create(e,o,s),u()}const b=v(()=>{var o,s;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(s=(o=l.value)==null?void 0:o.map(p=>({key:p.key,cells:[{type:"text",text:p.key},{type:"actions",actions:[{icon:C,label:"Delete",async onClick(){await p.delete(),u()},dangerous:!0}]}]})))!=null?s:[]}});return(o,s)=>(k(),I(j,{"entity-name":"Env var",loading:_(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:b.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=EnvVars.808e29be.js.map
