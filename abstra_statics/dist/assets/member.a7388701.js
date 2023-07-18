var c=Object.defineProperty;var h=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var o=(a,t,e)=>(h(a,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./gateway.4e567afc.js";import{A as u}from"./activeRecord.57c6bf02.js";class l{constructor(){o(this,"urlPath","members")}async create(t){return r.post(`organizations/${t.organizationId}/${this.urlPath}`,{email:t.email})}async delete(t){await r.delete(`${this.urlPath}/${t}`)}async list(t){return r.get(`organizations/${t}/${this.urlPath}`)}async get(t,e){return r.get(`organizations/${t}/${this.urlPath}/${e}`)}async update(t,e){return r.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return r.post(`${this.urlPath}/${t}/duplicate`,{})}async login(){return r.post("authors",{})}}const s=new l;class n{constructor(t){o(this,"record");this.record=new u(s,t,"id")}static async login(){return s.login()}static async list(t){return(await s.list(t)).map(i=>new n(i))}static async create(t,e){const i=await s.create({organizationId:t,email:e});return new n(i)}static async get(t,e){const i=await s.get(t,e);return new n(i)}async delete(){await s.delete(this.email)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}get email(){return this.record.get("email")}set email(t){this.record.set("email",t)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get role(){return this.record.get("role")}set role(t){this.record.set("role",t)}get id(){return this.record.get("id")}get authorId(){return this.record.get("authorId")}}export{n as M};
//# sourceMappingURL=member.a7388701.js.map
