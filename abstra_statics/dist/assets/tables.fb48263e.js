var h=Object.defineProperty;var m=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{E as b}from"./record.abea3cf4.js";import{C as u}from"./index.9a3dfc21.js";import{n as i}from"./string.6f12f860.js";import{C as a}from"./gateway.b0bf75e4.js";import"./outputWidgets.2e02c315.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="9af3b580-a025-4120-89c7-149c0b7c9cd6",s._sentryDebugIdIdentifier="sentry-dbid-9af3b580-a025-4120-89c7-149c0b7c9cd6")}catch{}})();const C=["varchar","int","boolean","json","date","timestamp","uuid"];class I{async list(e){return a.get(`projects/${e}/tables`)}async create(e,t){return await a.post(`projects/${e.projectId}/tables`,t)}async get(e){return a.get(`projects/${e.projectId}/tables/${e.tableId}`)}async delete(e){return a.delete(`projects/${e.projectId}/tables/${e.tableId}`)}async selectRows(e){const t=new URLSearchParams({limit:e.limit.toString(),offset:e.offset.toString()});return a.get(`projects/${e.projectId}/tables/${e.tableId}/rows?${t}`)}async update(e,t){return a.patch(`projects/${e.projectId}/tables/${e.tableId}`,t)}async insertRow(e,t){return a.post(`projects/${e.projectId}/tables/${e.tableId}/rows`,t)}async updateRow(e,t){return a.patch(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`,t)}async deleteRow(e){return a.delete(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`)}async executeQuery(e,t,r){return a.post(`projects/${e.projectId}/execute`,{query:t,params:r})}}const n=new I;class d{constructor(e,t=null){l(this,"record");l(this,"columns");this.record=b.from(e),this.columns=t}static async list(e){return(await n.list(e)).map(r=>new d(r))}static async create(e,t){const r=i(t,!1),o=await n.create({projectId:e},{name:r});return new d(o.table,o.columns.map(p=>u.fromDTO(p)))}static async get(e,t){const r=await n.get({projectId:e,tableId:t}),o=r.table,c=r.columns.map(p=>u.fromDTO({...p,projectId:o.projectId}));return new d(o,c)}async delete(e,t){return n.delete({projectId:e,tableId:t})}fixTraillingName(){this.name=i(this.name,!1)}async save(){if(Object.keys(this.record.changes).length!==0){this.record.changes.name&&this.fixTraillingName();try{await n.update({id:this.id,tableId:this.id,projectId:this.projectId},this.record.changes)}finally{this.record.resetChanges()}}}resetChanges(){this.record.resetChanges()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}hasChangesDeep(e){return this.record.hasChangesDeep(e)&&i(this.name,!1)!==this.record.initialState.name}getColumns(){var e;return(e=this.columns)!=null?e:[]}getUnprotectedColumns(){var e,t;return(t=(e=this.columns)==null?void 0:e.filter(r=>!r.protected).map(r=>r.toDTO()))!=null?t:[]}executeQuery(e,t){return n.executeQuery({projectId:this.projectId},e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(e){const t=i(e,!0);this.record.set("name",t)}get projectId(){return this.record.get("projectId")}async addColumn(e){const t=await u.create(e.name,e.type,e.default,e.nullable,e.unique,this.id,this.projectId);return"error"in t?{success:!1,error:t.error}:this.columns?(this.columns.push(t),{success:!0,error:""}):(this.columns=[t],{success:!0,error:""})}getColumn(e){var t;return(t=this.columns)==null?void 0:t.find(r=>r.id&&r.id===e)}async select(e={},t,r){const o=Object.keys(e).map(c=>`${c} = :${c}`).join(" AND ");return n.selectRows({name:this.name,where:o,params:e,tableId:this.id,projectId:this.projectId,limit:r,offset:t})}async insertRow(e){return n.insertRow({tableId:this.id,projectId:this.projectId},e)}async updateRow(e,t){return n.updateRow({tableId:this.id,projectId:this.projectId,rowId:e},t)}async deleteRow(e){return n.deleteRow({tableId:this.id,projectId:this.projectId,rowId:e})}}export{d as T,C as p};
//# sourceMappingURL=tables.fb48263e.js.map
