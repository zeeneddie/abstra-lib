var g=Object.defineProperty;var l=(s,t,e)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(l(s,typeof t!="symbol"?t+"":t,e),e);import{eM as h,F as d,eN as o}from"./outputWidgets.7dcb9763.js";import{P as b}from"./pubsub.a9318333.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="43d4a014-d409-4bd1-b693-8765ee06f394",s._sentryDebugIdIdentifier="sentry-dbid-43d4a014-d409-4bd1-b693-8765ee06f394")}catch{}})();class n{constructor(t){a(this,"initialState");a(this,"pubsub");a(this,"_changes");this.initialState=t,this.pubsub=new b,this._changes=d({})}static from(t){return h(new n(t))}get changes(){return this._changes.value}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this._changes.value={...this.changes,[t]:e}}hasChanges(t){return t?t in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(t){return t in this.changes&&!o.exports.isEqual(this.initialState[t],this.changes[t])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}}class r extends n{constructor(e,i){super(i);a(this,"api");this.api=e}static create(e,i){return h(new r(e,i))}getInitialState(e){return this.initialState[e]}updateInitialState(e,i){this.initialState[e]=i,delete this._changes.value[e]}async save(e){if(Object.keys(this.changes).length===0||e&&!(e in this.changes))return;if(e){const u={[e]:this.changes[e]},c=await this.api.update(this.initialState.id,u);this.initialState={...this.initialState,...c},delete this._changes.value[e];return}this.initialState=await this.api.update(this.initialState.id,this.changes);const i={...this.changes};this._changes.value={},this.pubsub.publish("update",i)}}export{r as A,n as E};
//# sourceMappingURL=record.c580fef2.js.map