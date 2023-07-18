var o=Object.defineProperty;var d=(a,t,e)=>t in a?o(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var c=(a,t,e)=>(d(a,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./gateway.4e567afc.js";import{A as u}from"./activeRecord.57c6bf02.js";class h{constructor(){c(this,"urlPath","projects")}async create({name:t,organizationId:e}){return r.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await r.delete(`/${this.urlPath}/${t}`)}async list(t){return r.get(`organizations/${t}/${this.urlPath}`)}async get(t){return r.get(`${this.urlPath}/${t}`)}async update(t,e){return r.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return r.post(`${this.urlPath}/${t}/duplicate`,{})}}const s=new h;class i{constructor(t){c(this,"record");this.record=new u(s,t,"id")}static async list(t){return(await s.list(t)).map(n=>new i(n))}static async create({name:t,organizationId:e}){const n=await s.create({organizationId:e,name:t});return new i(n)}static async get(t){const e=await s.get(t);return new i(e)}async delete(){await s.delete(this.id)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await s.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}}export{i as P};
//# sourceMappingURL=project.27024010.js.map
