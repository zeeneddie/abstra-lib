var h=Object.defineProperty;var r=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(r(s,typeof e!="symbol"?e+"":e,t),t);import{P as u}from"./pubsub.7e5686b2.js";import{F as c,eE as g,eF as l}from"./outputWidgets.7f968caf.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="e3208d0e-e3f4-41c1-9e43-6a5e55965f63",s._sentryDebugIdIdentifier="sentry-dbid-e3208d0e-e3f4-41c1-9e43-6a5e55965f63")}catch{}})();class n{constructor(e,t,a){i(this,"initialState");i(this,"_changes");i(this,"api");i(this,"idKey");i(this,"pubsub");this.initialState=t,this._changes=c({}),this.api=e,this.idKey=a,this.pubsub=new u}static create(e,t,a=null){return g(new n(e,t,a))}get changes(){return this._changes.value}get(e){var t;return(t=this.changes[e])!=null?t:this.initialState[e]}set(e,t){this._changes.value={...this.changes,[e]:t}}async save(){if(Object.keys(this.changes).length===0)return;if(this.api.update===void 0)throw new Error("update not implemented");this.initialState=await this.api.update(this.idKey?this.initialState[this.idKey]:null,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}hasChanges(e){return e?e in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(e){return e in this.changes&&!l.exports.isEqual(this.initialState[e],this.changes[e])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}export{n as A};
//# sourceMappingURL=activeRecord.42da519e.js.map
