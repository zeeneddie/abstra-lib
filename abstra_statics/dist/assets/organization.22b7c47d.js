var c=Object.defineProperty;var d=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(d(a,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./router.477783f4.js";import"./outputWidgets.33535317.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="3885a10a-c1a2-438a-849a-3b7dcc50db93",a._sentryDebugIdIdentifier="sentry-dbid-3885a10a-c1a2-438a-849a-3b7dcc50db93")}catch{}})();class o{constructor(){i(this,"urlPath","organizations")}async create(t){return s.post(`${this.urlPath}`,t)}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async rename(t,e){await s.patch(`${this.urlPath}/${t}`,{name:e})}async list(){return s.get(`${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}}const n=new o;class r{constructor(t){this.dto=t}static async list(){return(await n.list()).map(e=>new r(e))}static async create(t){const e=await n.create({name:t});return new r(e)}static async get(t){const e=await n.get(t);return new r(e)}async delete(){await n.delete(this.id)}static async rename(t,e){return n.rename(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get featureFlags(){return this.dto.featureFlags}get billingMetadata(){return this.dto.billingMetadata}}export{r as O};
//# sourceMappingURL=organization.22b7c47d.js.map