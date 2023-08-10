var o=Object.defineProperty;var u=(r,t,e)=>t in r?o(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var c=(r,t,e)=>(u(r,typeof t!="symbol"?t+"":t,e),e);import{A as h}from"./activeRecord.b3eba751.js";import{C as a}from"./gateway.772dec88.js";import{b as g}from"./index.7276737e.js";import"./registerWidgets.5e258592.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="ef1a9033-dc80-4192-a466-ba051867b46d",r._sentryDebugIdIdentifier="sentry-dbid-ef1a9033-dc80-4192-a466-ba051867b46d")}catch{}})();class y{constructor(){c(this,"urlPath","connectors")}async create(t){return a.post(`projects/${t.projectId}/${this.urlPath}`,t)}async delete(t){await a.delete(`${this.urlPath}/${t}`)}async list(t){return a.get(`projects/${t}/${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}async update(t,e){return a.patch(`${this.urlPath}/${t}`,e)}async test(t,e,s){return await a.post(`${this.urlPath}/${t}/test`,{method:e,params:s})}}const n=new y;class i{constructor(t){c(this,"record");this.record=new h(n,t,"id")}static async list(t){return(await n.list(t)).map(s=>new i(s))}static async create(t,e,s){const d=await n.create({projectId:t,name:e,type:s});return new i(d)}static async get(t){const e=await n.get(t);return new i(e)}async delete(){await n.delete(this.id)}async test(t,e){return await n.test(this.id,t,e)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get type(){return this.record.get("type")}get settings(){return new Proxy(this.record.get("settings"),{set:(t,e,s)=>(t[e]=s,this.record.set("settings",t),!0)})}get schema(){return g.schema[this.type]}}export{i as C};
//# sourceMappingURL=connector.4bf5db00.js.map
