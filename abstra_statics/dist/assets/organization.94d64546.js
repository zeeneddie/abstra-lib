var c=Object.defineProperty;var d=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(d(s,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.abc0823a.js";import"./outputWidgets.fe37af53.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="fa399e8c-0373-4f7f-9599-103ece8359ec",s._sentryDebugIdIdentifier="sentry-dbid-fa399e8c-0373-4f7f-9599-103ece8359ec")}catch{}})();class o{constructor(){i(this,"urlPath","organizations")}async create(t){return a.post(`${this.urlPath}`,t)}async delete(t){await a.delete(`${this.urlPath}/${t}`)}async list(){return a.get(`${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}}const n=new o;class r{constructor(t){this.dto=t}static async list(){return(await n.list()).map(e=>new r(e))}static async create(t){const e=await n.create({name:t});return new r(e)}static async get(t){const e=await n.get(t);return new r(e)}async delete(){await n.delete(this.id)}get id(){return this.dto.id}get name(){return this.dto.name}}export{r as O};
//# sourceMappingURL=organization.94d64546.js.map
