var n=Object.defineProperty;var o=(s,t,e)=>t in s?n(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{A as c}from"./record.b5bd1eee.js";import"./outputWidgets.65a42716.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="b79a0dba-7a0e-45a4-add3-3c503840c094",s._sentryDebugIdIdentifier="sentry-dbid-b79a0dba-7a0e-45a4-add3-3c503840c094")}catch{}})();class d{async list(){return await(await fetch("/_editor/api/jobs")).json()}async create(){return await(await fetch("/_editor/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/jobs/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/jobs/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t){await fetch(`/_editor/api/jobs/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(t){return(await fetch(`/_editor/api/jobs/${t}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const a=new d;class r{constructor(t){i(this,"record");i(this,"isInitial",!0);this.record=c.create(a,t)}static async list(){return(await a.list()).map(e=>new r(e))}static async create(){const t=await a.create();return new r(t)}static async get(t){const e=await a.get(t);return new r(e)}async delete(){await a.delete(this.id)}async duplicate(){return this}async save(){await this.record.save()}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}get schedule(){return this.record.get("schedule")}set schedule(t){this.record.set("schedule",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get id(){return this.record.get("id")}async test(){return a.test(this.id)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e,referential:"world"}}}export{r as J};
//# sourceMappingURL=jobs.4ff64c34.js.map
