import{l as n}from"./index.d59ef797.js";import"./outputWidgets.6bfc0239.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="a4e1409a-25cd-4c3e-ba61-8d950a6eb0f6",s._sentryDebugIdIdentifier="sentry-dbid-a4e1409a-25cd-4c3e-ba61-8d950a6eb0f6")}catch{}})();class r{constructor(e=n){this.fetch=e}async getData(e){return(await this.fetch("/_editor/api/kanban",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()}async getLogs(e){return(await this.fetch(`/_editor/api/kanban/logs/${e}`)).json()}}class i{constructor(e,t=n){this.authProvider=e,this.fetch=t}get headers(){return{"Content-Type":"application/json",...this.authProvider.authHeaders()}}async getData(e){return(await this.fetch("/_kanban/",{method:"POST",body:JSON.stringify(e),headers:this.headers})).json()}async getLogs(e){return(await this.fetch(`/_kanban/logs/${e}`,{headers:this.headers})).json()}}export{r as E,i as P};
//# sourceMappingURL=repository.dc59ddc1.js.map