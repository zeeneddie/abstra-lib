var h=Object.defineProperty;var m=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{E as I}from"./record.4e413006.js";import{C as u}from"./index.3025c580.js";import{n as i}from"./string.aad39fae.js";import{C as n}from"./router.679077c0.js";import"./outputWidgets.4d9ba3ef.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="0c8245cb-0e06-45d9-9868-a218c3c03892",s._sentryDebugIdIdentifier="sentry-dbid-0c8245cb-0e06-45d9-9868-a218c3c03892")}catch{}})();const C=["varchar","int","boolean","json","date","timestamp","uuid"];class b{async list(e){return n.get(`projects/${e}/tables`)}async create(e,t){return await n.post(`projects/${e.projectId}/tables`,t)}async get(e){return n.get(`projects/${e.projectId}/tables/${e.tableId}`)}async delete(e){return n.delete(`projects/${e.projectId}/tables/${e.tableId}`)}async selectRows(e){return n.get(`projects/${e.projectId}/tables/${e.tableId}/rows`,{limit:e.limit.toString(),offset:e.offset.toString()})}async update(e,t){return n.patch(`projects/${e.projectId}/tables/${e.tableId}`,t)}async insertRow(e,t){return n.post(`projects/${e.projectId}/tables/${e.tableId}/rows`,t)}async updateRow(e,t){return n.patch(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`,t)}async deleteRow(e){return n.delete(`projects/${e.projectId}/tables/${e.tableId}/rows/${e.rowId}`)}async executeQuery(e,t,r){return n.post(`projects/${e.projectId}/execute`,{query:t,params:r})}}const o=new b;class d{constructor(e,t=null){l(this,"record");l(this,"columns");this.record=I.from(e),this.columns=t}static async list(e){return(await o.list(e)).map(r=>new d(r))}static async create(e,t){const r=i(t,!1),a=await o.create({projectId:e},{name:r});return new d(a.table,a.columns.map(p=>u.fromDTO(p)))}static async get(e,t){const r=await o.get({projectId:e,tableId:t}),a=r.table,c=r.columns.map(p=>u.fromDTO({...p,projectId:a.projectId}));return new d(a,c)}async delete(e,t){return o.delete({projectId:e,tableId:t})}fixTraillingName(){this.name=i(this.name,!1)}async save(){if(Object.keys(this.record.changes).length!==0){this.record.changes.name&&this.fixTraillingName();try{await o.update({id:this.id,tableId:this.id,projectId:this.projectId},this.record.changes)}finally{this.record.resetChanges()}}}resetChanges(){this.record.resetChanges()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}hasChangesDeep(e){return this.record.hasChangesDeep(e)&&i(this.name,!1)!==this.record.initialState.name}getColumns(){var e;return(e=this.columns)!=null?e:[]}getUnprotectedColumns(){var e,t;return(t=(e=this.columns)==null?void 0:e.filter(r=>!r.protected).map(r=>r.toDTO()))!=null?t:[]}executeQuery(e,t){return o.executeQuery({projectId:this.projectId},e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}set name(e){const t=i(e,!0);this.record.set("name",t)}get projectId(){return this.record.get("projectId")}async addColumn(e){const t=await u.create(e.name,e.type,e.default,e.nullable,e.unique,this.id,this.projectId);return"error"in t?{success:!1,error:t.error}:this.columns?(this.columns.push(t),{success:!0,error:""}):(this.columns=[t],{success:!0,error:""})}getColumn(e){var t;return(t=this.columns)==null?void 0:t.find(r=>r.id&&r.id===e)}async select(e={},t,r){const a=Object.keys(e).map(c=>`${c} = :${c}`).join(" AND ");return o.selectRows({name:this.name,where:a,params:e,tableId:this.id,projectId:this.projectId,limit:r,offset:t})}async insertRow(e){return o.insertRow({tableId:this.id,projectId:this.projectId},e)}async updateRow(e,t){return o.updateRow({tableId:this.id,projectId:this.projectId,rowId:e},t)}async deleteRow(e){return o.deleteRow({tableId:this.id,projectId:this.projectId,rowId:e})}}export{d as T,C as p};
//# sourceMappingURL=tables.ec5e1571.js.map