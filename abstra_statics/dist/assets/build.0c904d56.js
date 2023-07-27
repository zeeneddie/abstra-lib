var d=Object.defineProperty;var o=(r,t,e)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var n=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.b560ee02.js";import{A as u}from"./activeRecord.cbf414d4.js";import"./registerWidgets.c33434b6.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="3f069452-3961-41a5-b171-c877bd358b22",r._sentryDebugIdIdentifier="sentry-dbid-3f069452-3961-41a5-b171-c877bd358b22")}catch{}})();class h{constructor(){n(this,"urlPath","builds")}async create(t){return s.post(`projects/${t.projectId}/${this.urlPath}`,{})}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){return s.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}}const a=new h;class i{constructor(t){n(this,"record");this.record=new u(a,t,"id")}static async list(t){return(await a.list(t)).map(c=>new i(c))}static async create(t){const e=await a.create({projectId:t});return new i(e)}static async get(t){const e=await a.get(t);return new i(e)}async delete(){await a.delete(this.id)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await a.duplicate(this.id)}get label(){return`${this.createdAt.toString().slice(0,16).replace("T"," ")} (${this.id.split("-")[0]})`}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get createdAt(){return this.record.get("createdAt")}get status(){return this.record.get("status")}}export{i as B};
//# sourceMappingURL=build.0c904d56.js.map