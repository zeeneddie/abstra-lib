var h=Object.defineProperty;var c=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(c(s,typeof e!="symbol"?e+"":e,t),t);import{P as u}from"./pubsub.de7b160f.js";import{D as r,eD as g}from"./registerWidgets.b2d74d6b.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="cc59ac4e-5a7c-4ebb-ae9e-cca0cedfd71b",s._sentryDebugIdIdentifier="sentry-dbid-cc59ac4e-5a7c-4ebb-ae9e-cca0cedfd71b")}catch{}})();class n{constructor(e,t,i){a(this,"initialState");a(this,"_changes");a(this,"api");a(this,"idKey");a(this,"pubsub");this.initialState=t,this._changes=r({}),this.api=e,this.idKey=i,this.pubsub=new u}static create(e,t,i=null){return g(new n(e,t,i))}get changes(){return this._changes.value}get(e){var t;return(t=this.changes[e])!=null?t:this.initialState[e]}set(e,t){this._changes.value={...this.changes,[e]:t}}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.idKey?this.initialState[this.idKey]:null,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}hasChanges(){return Object.keys(this.changes).length>0}get state(){return{...this.initialState,...this.changes}}resetChanges(){const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}export{n as A};
//# sourceMappingURL=activeRecord.ad458e5f.js.map
