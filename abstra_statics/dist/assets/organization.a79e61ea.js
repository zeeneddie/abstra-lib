var d=Object.defineProperty;var c=(a,t,e)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(c(a,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./router.00bad958.js";import"./outputWidgets.bb2f46e4.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="fa35fc30-989d-4dbf-922d-c4eb5cb8e7a8",a._sentryDebugIdIdentifier="sentry-dbid-fa35fc30-989d-4dbf-922d-c4eb5cb8e7a8")}catch{}})();class l{constructor(){i(this,"urlPath","organizations")}async create(t){return s.post(`${this.urlPath}`,t)}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async rename(t,e){await s.patch(`${this.urlPath}/${t}`,{name:e})}async list(){return s.get(`${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}}const n=new l;class r{constructor(t){this.dto=t}static async list(){return(await n.list()).map(e=>new r(e))}static async create(t){const e=await n.create({name:t});return new r(e)}static async get(t){const e=await n.get(t);return new r(e)}async delete(){await n.delete(this.id)}static async rename(t,e){return n.rename(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get featureFlags(){return this.dto.featureFlags}get billingMetadata(){return!this.dto.billingMetadata||Object.keys(this.dto.billingMetadata).length===0?{plan:"Free"}:this.dto.billingMetadata}}export{r as O};
//# sourceMappingURL=organization.a79e61ea.js.map