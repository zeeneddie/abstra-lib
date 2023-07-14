var n=Object.defineProperty;var o=(s,t,e)=>t in s?n(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{A as c}from"./activeRecord.57c6bf02.js";class d{async list(){return await(await fetch("/_editor/api/jobs")).json()}async create(){return await(await fetch("/_editor/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/jobs/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/jobs/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t){await fetch(`/_editor/api/jobs/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(t){return(await fetch(`/_editor/api/jobs/${t}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const r=new d;class a{constructor(t){i(this,"record");this.record=new c(r,t,"identifier")}static async list(){return(await r.list()).map(e=>new a(e))}static async create(){const t=await r.create();return new a(t)}static async get(t){const e=await r.get(t);return new a(e)}async delete(){await r.delete(this.identifier)}async duplicate(){return this}async save(){await this.record.save()}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(){return this.record.hasChanges()}get schedule(){return this.record.get("schedule")}set schedule(t){this.record.set("schedule",t)}get title(){return this.record.get("title")}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get identifier(){return this.record.get("identifier")}set identifier(t){this.record.set("identifier",t)}async test(){return r.test(this.identifier)}get routeName(){return"job"}}export{a as J};
//# sourceMappingURL=jobs.098bcb10.js.map