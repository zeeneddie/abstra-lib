var i=Object.defineProperty;var o=(s,t,e)=>t in s?i(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./router.679077c0.js";import"./outputWidgets.4d9ba3ef.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="bcc44add-07c6-4df8-9d25-67bc580ec7dd",s._sentryDebugIdIdentifier="sentry-dbid-bcc44add-07c6-4df8-9d25-67bc580ec7dd")}catch{}})();class u{constructor(){n(this,"urlPath","api-keys")}async create({projectId:t,name:e}){return r.post(`projects/${t}/${this.urlPath}`,{name:e})}async delete(t,e){await r.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return r.get(`projects/${t}/${this.urlPath}`)}}const a=new u;class d{constructor(t){this.dto=t}static async list(t){return(await a.list(t)).map(c=>new d(c))}static async create(t){const e=await a.create(t);return new d(e)}static async delete(t,e){await a.delete(t,e)}get id(){return this.dto.id}get name(){return this.dto.name}get createdAt(){return new Date(this.dto.createdAt)}get ownerId(){return this.dto.createdBy}get value(){var t;return(t=this.dto.value)!=null?t:null}}export{d as A};
//# sourceMappingURL=apiKey.8204ac0d.js.map
