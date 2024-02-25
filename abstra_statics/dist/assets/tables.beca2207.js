var h=Object.defineProperty;var m=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var p=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{E as b}from"./record.19c12a45.js";import{C as u}from"./index.a0d2b41b.js";import{n as d}from"./string.26d0386f.js";import{C as a}from"./router.e5be387e.js";import"./outputWidgets.0d6c71c4.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="869b6e13-dcf4-40c3-85d2-3bd6e56a7ac9",s._sentryDebugIdIdentifier="sentry-dbid-869b6e13-dcf4-40c3-85d2-3bd6e56a7ac9")}catch{}})();const C=["varchar","int","boolean","json","date","timestamp","uuid"];class I{async list(e){return a.get(`projects/${e}/tables`)}async create(e,t){return await a.post(`projects/${e.projectId}/tables`,t)}async get(e){return a.get(`projects/${e.projectId}/tables/${e.tableId}`)}async delete(e){return a.delete(`projects/${e.projectId}/tables/${e.tableId}`)}async selectRows(e){return a.get(`projects/${e.projectId}/tables/${e.tableId}/rows`,{limit:e.limit.toString(),offset:e.offset.toString()})}async update(e,t){return a.patch(`projects/${e.projectId}/tables/${e.tableId}`,t)}async insertRow(e,t){return a.post(`projects/${e.projectId}/tables/${e.tableId}/rows`,t)}async updateRow(e,t){return a.patch(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`,t)}async deleteRow(e){return a.delete(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`)}}const n=new I;class i{constructor(e,t=null){p(this,"record");p(this,"columns");this.record=b.from(e),this.columns=t}static async list(e){return(await n.list(e)).map(r=>new i(r))}static async create(e,t){const r=d(t,!1),o=await n.create({projectId:e},{name:r});return new i(o.table,o.columns.map(l=>u.fromDTO(l)))}static async get(e,t){const r=await n.get({projectId:e,tableId:t}),o=r.table,c=r.columns.map(l=>u.fromDTO({...l,projectId:o.projectId}));return new i(o,c)}async delete(e,t){return n.delete({projectId:e,tableId:t})}fixTraillingName(){this.name=d(this.name,!1)}async save(){if(Object.keys(this.record.changes).length!==0){this.record.changes.name&&this.fixTraillingName();try{await n.update({id:this.id,tableId:this.id,projectId:this.projectId},this.record.changes)}finally{this.record.resetChanges()}}}resetChanges(){this.record.resetChanges()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}hasChangesDeep(e){return this.record.hasChangesDeep(e)&&d(this.name,!1)!==this.record.initialState.name}getColumns(){var e;return(e=this.columns)!=null?e:[]}getUnprotectedColumns(){var e,t;return(t=(e=this.columns)==null?void 0:e.filter(r=>!r.protected).map(r=>r.toDTO()))!=null?t:[]}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(e){const t=d(e,!0);this.record.set("name",t)}get projectId(){return this.record.get("projectId")}async addColumn(e){const t=await u.create(e.name,e.type,e.default,e.nullable,e.unique,this.id,this.projectId);return"error"in t?{success:!1,error:t.error}:this.columns?(this.columns.push(t),{success:!0,error:""}):(this.columns=[t],{success:!0,error:""})}getColumn(e){var t;return(t=this.columns)==null?void 0:t.find(r=>r.id&&r.id===e)}async select(e={},t,r){const o=Object.keys(e).map(c=>`${c} = :${c}`).join(" AND ");return n.selectRows({name:this.name,where:o,params:e,tableId:this.id,projectId:this.projectId,limit:r,offset:t})}async insertRow(e){return n.insertRow({tableId:this.id,projectId:this.projectId},e)}async updateRow(e,t){return n.updateRow({tableId:this.id,projectId:this.projectId,rowId:e},t)}async deleteRow(e){return n.deleteRow({tableId:this.id,projectId:this.projectId,rowId:e})}}export{i as T,C as p};
//# sourceMappingURL=tables.beca2207.js.map