import{C as n}from"./authorManager.2805bec3.js";import"./outputWidgets.781e41f9.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="b523966f-7902-4a4d-9544-99d20f9fcdf6",s._sentryDebugIdIdentifier="sentry-dbid-b523966f-7902-4a4d-9544-99d20f9fcdf6")}catch{}})();class f{list({projectId:t,buildId:e,...r}){return n.post(`projects/${t}/builds/${e}/logs`,r)}filters(t){return n.get(`projects/${t}/log-filters`)}}const a=new f;class i{constructor(t,e,r,d,o,l,u){this.executionId=t,this.runtimeType=e,this.runtimeName=r,this.payload=d,this.event=o,this.buildId=l,this.createdAt=u}static fromDTO(t){return new i(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){const e=await a.list(t);return{total:e.total,logs:e.logs.map(i.fromDTO)}}static async filters(t){return a.filters(t)}get displayPayload(){return this.event==="start"?"Start":this.event==="end"?"End":this.event==="stdout"?this.payload.log:this.event==="stderr"?this.payload.log:JSON.stringify(this.payload)}get execId(){return this.executionId.slice(0,8)}}export{i as L};
//# sourceMappingURL=log.7fb94d10.js.map
