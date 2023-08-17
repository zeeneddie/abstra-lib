var c=Object.defineProperty;var o=(r,t,e)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var d=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.c57a498b.js";import{A as u}from"./activeRecord.91994ff2.js";import"./registerWidgets.dfdff788.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="924f1fb9-2d8c-4059-941c-f5106106d2f8",r._sentryDebugIdIdentifier="sentry-dbid-924f1fb9-2d8c-4059-941c-f5106106d2f8")}catch{}})();class h{constructor(){d(this,"urlPath","projects")}async create({name:t,organizationId:e}){return s.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await s.delete(`/${this.urlPath}/${t}`)}async list(t){return s.get(`organizations/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){return s.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}}const a=new h;class n{constructor(t){d(this,"record");this.record=u.create(a,t,"id")}static async list(t){return(await a.list(t)).map(i=>new n(i))}static async create({name:t,organizationId:e}){const i=await a.create({organizationId:e,name:t});return new n(i)}static async get(t){const e=await a.get(t);return new n(e)}async delete(){await a.delete(this.id)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await a.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}}export{n as P};
//# sourceMappingURL=project.ef032470.js.map
