var n=Object.defineProperty;var o=(s,e,t)=>e in s?n(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(o(s,typeof e!="symbol"?e+"":e,t),t);import{A as c}from"./activeRecord.193d97cb.js";import"./registerWidgets.ff0e603c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="7a65370c-a702-4888-b1be-21f9ccf2d4f4",s._sentryDebugIdIdentifier="sentry-dbid-7a65370c-a702-4888-b1be-21f9ccf2d4f4")}catch{}})();class d{async list(){return await(await fetch("/_editor/api/jobs")).json()}async create(){return await(await fetch("/_editor/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(e){return await(await fetch(`/_editor/api/jobs/${e}`)).json()}async update(e,t){return await(await fetch(`/_editor/api/jobs/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async delete(e){await fetch(`/_editor/api/jobs/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(e){return(await fetch(`/_editor/api/jobs/${e}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const r=new d;class a{constructor(e){i(this,"record");this.record=c.create(r,e,"identifier")}static async list(){return(await r.list()).map(t=>new a(t))}static async create(){const e=await r.create();return new a(e)}static async get(e){const t=await r.get(e);return new a(t)}async delete(){await r.delete(this.identifier)}async duplicate(){return this}async save(){await this.record.save()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}get schedule(){return this.record.get("schedule")}set schedule(e){this.record.set("schedule",e)}get title(){return this.record.get("title")}get file(){return this.record.get("file")}set file(e){this.record.set("file",e)}get identifier(){return this.record.get("identifier")}set identifier(e){this.record.set("identifier",e)}async test(){return r.test(this.identifier)}get routeName(){return"job"}}export{a as J};
//# sourceMappingURL=jobs.875f4f93.js.map