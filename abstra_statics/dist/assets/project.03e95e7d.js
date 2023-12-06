var h=Object.defineProperty;var l=(r,t,e)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(l(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.71b9bb90.js";import{A as m}from"./record.d9d8ddd5.js";import"./outputWidgets.d5e6cc81.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="b5ee1bca-fb2f-4016-8923-28ef3248952d",r._sentryDebugIdIdentifier="sentry-dbid-b5ee1bca-fb2f-4016-8923-28ef3248952d")}catch{}})();class g extends Error{constructor(){super("Subdomain already in use")}}class y{constructor(){i(this,"urlPath","projects")}async create({name:t,organizationId:e}){return a.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await a.delete(`/${this.urlPath}/${t}`)}async list(t){return a.get(`organizations/${t}/${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}async update(t,e){const s=await a.patch(`${this.urlPath}/${t}`,e);if("error"in s&&s.error==="subdomain-already-in-use")throw new g;if("error"in s)throw new Error("Unknown error");return s}async checkSubdomain(t,e){return a.get(`${this.urlPath}/${t}/check-subdomain/${e}`)}async getStatus(t){return a.get(`${this.urlPath}/${t}/deploy-status`)}}const n=new y;class o{constructor(t){i(this,"record");this.record=m.create(n,t)}static formatSubdomain(t){const s=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=/[a-z0-9]+/g,u=s.matchAll(c);return Array.from(u).map(d=>d[0]).join("-")}static async list(t){return(await n.list(t)).map(s=>new o(s))}static async create(t){const e=await n.create(t);return new o(e)}static async get(t){const e=await n.get(t);return new o(e)}static async getStatus(t){return await n.getStatus(t)}async delete(){await n.delete(this.id)}async save(){return this.record.save()}resetChanges(){this.record.resetChanges()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}get customDomain(){return this.record.get("customDomain")}async checkSubdomain(){return await n.checkSubdomain(this.id,this.subdomain)}getUrl(t=""){const e=t.startsWith("/")?t.slice(1):t;return`https://${this.subdomain}.abstra.app/${e}`}getCustomDomainUrl(t=""){const e=t.startsWith("/")?t.slice(1):t;return`https://${this.customDomain}/${e}`}}export{o as P};
//# sourceMappingURL=project.03e95e7d.js.map
