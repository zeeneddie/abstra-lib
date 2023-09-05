var b=Object.defineProperty;var h=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(h(a,typeof e!="symbol"?e+"":e,t),t);import{d as w,ey as g,F as v,b as k,u as $,bu as C}from"./registerWidgets.f95d7bbf.js";import{a as I}from"./asyncComputed.4154581e.js";import{C as l}from"./gateway.d227d468.js";import{A as _}from"./activeRecord.31e205b1.js";import"./index.ac5c3710.js";import{C as j}from"./CrudView.7dcef43d.js";import{q as A}from"./icons.7adc7725.js";import"./passwordlessManager.af4c7092.js";import"./pubsub.b6a8ac54.js";import"./storage.f52ebd8d.js";import"./DropdownMenu.ffb37e76.js";import"./Modal.17c23571.js";import"./LoadingIndicator.edbdbbf5.js";import"./lottie.8f48be34.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="5d5922d3-1890-4eba-992f-5bf0a4f0437b",a._sentryDebugIdIdentifier="sentry-dbid-5d5922d3-1890-4eba-992f-5bf0a4f0437b")}catch{}})();class P{constructor(){u(this,"urlPath","env-vars")}async create(e){return l.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await l.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return l.get(`projects/${e}/${this.urlPath}`)}async get(e){return l.get(`${this.urlPath}/${e}`)}async update(e,t){return l.patch(`${this.urlPath}/${e}`,t)}}const n=new P;class s{constructor(e,t){u(this,"record");this.projectId=e,this.record=_.create(n,t,"id")}static async list(e){return(await n.list(e)).map(r=>new s(e,r))}static async create(e,t,r){const o=await n.create({projectId:e,name:t,value:r});return new s(e,o)}static async get(e,t){const r=await n.get(t);return new s(e,r)}static async update(e,t,r){const o=await n.update(t,r);return new s(e,o)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(e){this.record.set("value",e)}async save(){await this.record.save()}async delete(){await n.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const L=w({__name:"EnvVars",setup(a){const t=g().params.projectId,{loading:r,result:o,refetch:p}=I(()=>s.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:i,value:c}){await s.create(t,i,c),p()}const f=v(()=>{var i,c;return{columns:[{name:"Key"},{name:"Actions"}],rows:(c=(i=o.value)==null?void 0:i.map(d=>({key:d.key,cells:[{text:d.key,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:A,label:"Delete",async onClick(){await d.delete(),p()},dangerous:!0}]}]})))!=null?c:[]}});return(i,c)=>(k(),$(j,{"entity-name":"env-vars",loading:C(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:f.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=EnvVars.f6920611.js.map