var c=Object.defineProperty;var d=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(d(a,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.d73b54c4.js";import"./outputWidgets.3acae187.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="cf42813e-281f-4357-aa0b-5c58ab518083",a._sentryDebugIdIdentifier="sentry-dbid-cf42813e-281f-4357-aa0b-5c58ab518083")}catch{}})();class o{constructor(){i(this,"urlPath","organizations")}async create(t){return s.post(`${this.urlPath}`,t)}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async list(){return s.get(`${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}}const n=new o;class r{constructor(t){this.dto=t}static async list(){return(await n.list()).map(e=>new r(e))}static async create(t){const e=await n.create({name:t});return new r(e)}static async get(t){const e=await n.get(t);return new r(e)}async delete(){await n.delete(this.id)}get id(){return this.dto.id}get name(){return this.dto.name}}export{r as O};
//# sourceMappingURL=organization.9885f7c0.js.map
