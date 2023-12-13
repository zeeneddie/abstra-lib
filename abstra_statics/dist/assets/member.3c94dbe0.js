var c=Object.defineProperty;var d=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var o=(a,t,e)=>(d(a,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./gateway.d73b54c4.js";import"./outputWidgets.3acae187.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="5e9c63ca-96b2-47a0-a0fa-7c978af94c80",a._sentryDebugIdIdentifier="sentry-dbid-5e9c63ca-96b2-47a0-a0fa-7c978af94c80")}catch{}})();class u{constructor(){o(this,"urlPath","members")}async create(t){return r.post(`organizations/${t.organizationId}/${this.urlPath}`,{email:t.email})}async delete(t){await r.delete(`${this.urlPath}/${t}`)}async list(t){return r.get(`organizations/${t}/${this.urlPath}`)}async get(t,e){return r.get(`organizations/${t}/${this.urlPath}/${e}`)}async login(){return r.post("authors",{})}}const s=new u;class i{constructor(t){this.dto=t}static async login(){return s.login()}static async list(t){return(await s.list(t)).map(n=>new i(n))}static async create(t,e){const n=await s.create({organizationId:t,email:e});return new i(n)}static async get(t,e){const n=await s.get(t,e);return new i(n)}async delete(){await s.delete(this.email)}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.id}get authorId(){return this.dto.authorId}}export{i as M};
//# sourceMappingURL=member.3c94dbe0.js.map