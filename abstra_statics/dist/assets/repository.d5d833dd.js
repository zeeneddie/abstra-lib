import{l as a}from"./index.bcf3f6e4.js";import"./outputWidgets.8234a0a2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a9d79002-cc8d-4335-8c45-44ea14299afc",t._sentryDebugIdIdentifier="sentry-dbid-a9d79002-cc8d-4335-8c45-44ea14299afc")}catch{}})();class r{constructor(e=a){this.fetch=e}async getData(e){return(await this.fetch("/_editor/api/kanban",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()}async getLogs(e){return(await this.fetch(`/_editor/api/kanban/logs/${e}`)).json()}async startJob(e){await this.fetch(`/_editor/api/kanban/jobs/${e}/start`,{method:"POST"})}}class i{constructor(e,s=a){this.authProvider=e,this.fetch=s}get headers(){return{"Content-Type":"application/json",...this.authProvider.authHeaders()}}async getData(e){return(await this.fetch("/_kanban/",{method:"POST",body:JSON.stringify(e),headers:this.headers})).json()}async getLogs(e){return(await this.fetch(`/_kanban/logs/${e}`,{headers:this.headers})).json()}async startJob(e){await this.fetch(`/_kanban/jobs/${e}/start`,{method:"POST",headers:this.headers})}}export{r as E,i as P};
//# sourceMappingURL=repository.d5d833dd.js.map
