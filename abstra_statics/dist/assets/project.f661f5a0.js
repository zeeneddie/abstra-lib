var c=Object.defineProperty;var d=(r,t,e)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(d(r,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.99e43695.js";import{A as u}from"./activeRecord.115270b9.js";import"./outputWidgets.75a5b0b9.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="0f5213c5-ab3f-41bf-b363-35a861fdea0c",r._sentryDebugIdIdentifier="sentry-dbid-0f5213c5-ab3f-41bf-b363-35a861fdea0c")}catch{}})();class h extends Error{constructor(){super("Subdomain already in use")}}class l{constructor(){o(this,"urlPath","projects")}async create({name:t,organizationId:e}){return s.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await s.delete(`/${this.urlPath}/${t}`)}async list(t){return s.get(`organizations/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){const a=await s.patch(`${this.urlPath}/${t}`,e);if("error"in a&&a.error==="subdomain-already-in-use")throw new h;if("error"in a)throw new Error("Unknown error");return a}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}async checkSubdomain(t,e){return s.get(`${this.urlPath}/${t}/check-subdomain/${e}`)}}const n=new l;class i{constructor(t){o(this,"record");this.record=u.create(n,t,"id")}static async list(t){return(await n.list(t)).map(a=>new i(a))}static async create({name:t,organizationId:e}){const a=await n.create({organizationId:e,name:t});return new i(a)}static async get(t){const e=await n.get(t);return new i(e)}async delete(){await n.delete(this.id)}async save(){return this.record.save()}resetChanges(){this.record.resetChanges()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await n.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}async checkSubdomain(){return await n.checkSubdomain(this.id,this.subdomain)}}export{i as P};
//# sourceMappingURL=project.f661f5a0.js.map