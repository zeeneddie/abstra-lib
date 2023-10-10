var i=Object.defineProperty;var o=(r,t,e)=>t in r?i(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var d=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.f4357ae1.js";import{A as u}from"./activeRecord.d9292c93.js";import"./outputWidgets.dcbaec6c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="6f65297b-689d-42e0-824b-39649d5fa6ec",r._sentryDebugIdIdentifier="sentry-dbid-6f65297b-689d-42e0-824b-39649d5fa6ec")}catch{}})();class h{constructor(){d(this,"urlPath","builds")}async create(t){return s.post(`projects/${t.projectId}/${this.urlPath}`,{})}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){return s.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}async download(t){return s.get(`${this.urlPath}/${t}/download`)}}const a=new h;class n{constructor(t){d(this,"record");this.record=u.create(a,t,"id")}static async list(t){return(await a.list(t)).map(c=>new n(c))}static async create(t){const e=await a.create({projectId:t});return new n(e)}static async get(t){const e=await a.get(t);return new n(e)}async delete(){await a.delete(this.id)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await a.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get createdAt(){return new Date(this.record.get("createdAt"))}get status(){return this.record.get("status")}get log(){return this.record.get("log")}async download(){const{url:t}=await a.download(this.id);window.open(t,"_blank")}}export{n as B};
//# sourceMappingURL=build.b373bb9e.js.map
