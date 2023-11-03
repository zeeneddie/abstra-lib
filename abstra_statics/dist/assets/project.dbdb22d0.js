var h=Object.defineProperty;var l=(r,t,e)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(l(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.dc33ca80.js";import{A as m}from"./activeRecord.21f51d54.js";import"./outputWidgets.eadfae9c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="b20299d7-4742-4c17-983b-f16c5d295464",r._sentryDebugIdIdentifier="sentry-dbid-b20299d7-4742-4c17-983b-f16c5d295464")}catch{}})();class g extends Error{constructor(){super("Subdomain already in use")}}class y{constructor(){o(this,"urlPath","projects")}async create({name:t,organizationId:e}){return a.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await a.delete(`/${this.urlPath}/${t}`)}async list(t){return a.get(`organizations/${t}/${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}async update(t,e){const s=await a.patch(`${this.urlPath}/${t}`,e);if("error"in s&&s.error==="subdomain-already-in-use")throw new g;if("error"in s)throw new Error("Unknown error");return s}async duplicate(t){return a.post(`${this.urlPath}/${t}/duplicate`,{})}async checkSubdomain(t,e){return a.get(`${this.urlPath}/${t}/check-subdomain/${e}`)}}const n=new y;class i{constructor(t){o(this,"record");this.record=m.create(n,t,"id")}static formatSubdomain(t){const s=t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),c=/[a-z0-9]+/g,d=s.matchAll(c);return Array.from(d).map(u=>u[0]).join("-")}static async list(t){return(await n.list(t)).map(s=>new i(s))}static async create({name:t,organizationId:e}){const s=await n.create({organizationId:e,name:t});return new i(s)}static async get(t){const e=await n.get(t);return new i(e)}async delete(){await n.delete(this.id)}async save(){return this.record.save()}resetChanges(){this.record.resetChanges()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await n.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}get customDomain(){return this.record.get("customDomain")}async checkSubdomain(){return await n.checkSubdomain(this.id,this.subdomain)}getUrl(t=""){const e=t.startsWith("/")?t.slice(1):t;return`https://${this.subdomain}.abstra.app/${e}`}getCustomDomainUrl(t=""){const e=t.startsWith("/")?t.slice(1):t;return`https://${this.customDomain}/${e}`}}export{i as P};
//# sourceMappingURL=project.dbdb22d0.js.map
