import{l as a}from"./index.d1556999.js";import"./outputWidgets.84400f3d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a6b174fd-a03c-43dc-9d26-805016e93be0",t._sentryDebugIdIdentifier="sentry-dbid-a6b174fd-a03c-43dc-9d26-805016e93be0")}catch{}})();class r{constructor(e=a){this.fetch=e}async getData(e){return(await this.fetch("/_editor/api/kanban",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()}async getLogs(e){return(await this.fetch(`/_editor/api/kanban/logs/${e}`)).json()}async startJob(e){await this.fetch(`/_editor/api/kanban/jobs/${e}/start`,{method:"POST"})}}class i{constructor(e,s=a){this.authProvider=e,this.fetch=s}get headers(){return{"Content-Type":"application/json",...this.authProvider.authHeaders()}}async getData(e){return(await this.fetch("/_kanban/",{method:"POST",body:JSON.stringify(e),headers:this.headers})).json()}async getLogs(e){return(await this.fetch(`/_kanban/logs/${e}`,{headers:this.headers})).json()}async startJob(e){await this.fetch(`/_kanban/jobs/${e}/start`,{method:"POST",headers:this.headers})}}export{r as E,i as P};
//# sourceMappingURL=repository.1c5e601f.js.map