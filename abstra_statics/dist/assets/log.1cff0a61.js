import{C as n}from"./gateway.b0bf75e4.js";import"./outputWidgets.2e02c315.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="0e2dea5f-d794-46a9-8771-592f2da244ac",s._sentryDebugIdIdentifier="sentry-dbid-0e2dea5f-d794-46a9-8771-592f2da244ac")}catch{}})();class c{list({projectId:t,buildId:e,...r}){return n.post(`projects/${t}/builds/${e}/logs`,r)}filters(t){return n.get(`projects/${t}/log-filters`)}}const a=new c;class i{constructor(t,e,r,d,o,l,u){this.executionId=t,this.runtimeType=e,this.runtimeName=r,this.payload=d,this.event=o,this.buildId=l,this.createdAt=u}static fromDTO(t){return new i(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){const e=await a.list(t);return{total:e.total,logs:e.logs.map(i.fromDTO)}}static async filters(t){return a.filters(t)}get displayPayload(){return this.event==="start"?"Start":this.event==="end"?"End":this.event==="stdout"?this.payload.log:this.event==="stderr"?this.payload.log:JSON.stringify(this.payload)}get execId(){return this.executionId.slice(0,8)}}export{i as L};
//# sourceMappingURL=log.1cff0a61.js.map
