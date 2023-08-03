var c=Object.defineProperty;var h=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(h(s,typeof t!="symbol"?t+"":t,e),e);import{C as n}from"./gateway.6ecad65a.js";import{A as d}from"./activeRecord.74699a56.js";import"./registerWidgets.db466a36.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="20598b52-af84-4075-b2f6-9029f8f3ba85",s._sentryDebugIdIdentifier="sentry-dbid-20598b52-af84-4075-b2f6-9029f8f3ba85")}catch{}})();class o{constructor(){i(this,"urlPath","organizations")}async create(t){return n.post(`${this.urlPath}`,t)}async delete(t){await n.delete(`${this.urlPath}/${t}`)}async list(){return n.get(`${this.urlPath}`)}async get(t){return n.get(`${this.urlPath}/${t}`)}async update(t,e){return n.patch(`${this.urlPath}/${t}`,e)}}const a=new o;class r{constructor(t){i(this,"initialState");i(this,"changes");i(this,"record");this.record=new d(a,t,"id"),this.initialState=t,this.changes={}}static async list(){const t=await a.list();return console.log(t),t.map(e=>new r(e))}static async create(t){const e=await a.create({name:t});return new r(e)}static async get(t){const e=await a.get(t);return new r(e)}async delete(){await a.delete(this.id)}async save(){Object.keys(this.changes).length!==0&&(this.initialState=await a.update(this.id,this.changes),this.changes={})}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this.changes[t]=e}hasChanges(){return Object.keys(this.changes).length>0}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}get name(){return this.record.get("name")}}export{r as O};
//# sourceMappingURL=organization.733ae077.js.map
