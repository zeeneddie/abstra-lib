var u=Object.defineProperty;var c=(s,t,e)=>t in s?u(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(c(s,typeof t!="symbol"?t+"":t,e),e);import{E as g,eI as h,eJ as l}from"./outputWidgets.6d6b4a37.js";import{P as d}from"./pubsub.7d377b25.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="81cd9ed8-af05-4439-8a3f-6e8835895f2b",s._sentryDebugIdIdentifier="sentry-dbid-81cd9ed8-af05-4439-8a3f-6e8835895f2b")}catch{}})();class n{constructor(t){a(this,"initialState");a(this,"pubsub");a(this,"_changes");this.initialState=t,this.pubsub=new d,this._changes=g({})}static from(t){return h(new n(t))}get changes(){return this._changes.value}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this._changes.value={...this.changes,[t]:e}}hasChanges(t){return t?t in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(t){return t in this.changes&&!l.exports.isEqual(this.initialState[t],this.changes[t])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}}class r extends n{constructor(e,i){super(i);a(this,"api");this.api=e}static create(e,i){return h(new r(e,i))}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.initialState.id,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}export{r as A,n as E};
//# sourceMappingURL=record.7835c07e.js.map