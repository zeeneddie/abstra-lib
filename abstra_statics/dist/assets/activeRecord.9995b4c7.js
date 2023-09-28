var h=Object.defineProperty;var r=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(r(s,typeof t!="symbol"?t+"":t,e),e);import{P as u}from"./pubsub.358cbe19.js";import{F as c,eD as d}from"./registerWidgets.dc9f1313.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="607d20dc-061c-412c-a84a-ea58f3d03755",s._sentryDebugIdIdentifier="sentry-dbid-607d20dc-061c-412c-a84a-ea58f3d03755")}catch{}})();class n{constructor(t,e,a){i(this,"initialState");i(this,"_changes");i(this,"api");i(this,"idKey");i(this,"pubsub");this.initialState=e,this._changes=c({}),this.api=t,this.idKey=a,this.pubsub=new u}static create(t,e,a=null){return d(new n(t,e,a))}get changes(){return this._changes.value}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this._changes.value={...this.changes,[t]:e}}async save(){if(Object.keys(this.changes).length===0)return;if(this.api.update===void 0)throw new Error("update not implemented");this.initialState=await this.api.update(this.idKey?this.initialState[this.idKey]:null,this.changes);const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}hasChanges(){return Object.keys(this.changes).length>0}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}}export{n as A};
//# sourceMappingURL=activeRecord.9995b4c7.js.map
