import{C as o}from"./router.80da957b.js";import"./outputWidgets.0277cbbd.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="b35f29de-f8eb-4e80-a4e1-c9aa920b8169",i._sentryDebugIdIdentifier="sentry-dbid-b35f29de-f8eb-4e80-a4e1-c9aa920b8169")}catch{}})();class l{async list(e){return o.get(`projects/${e}/builds`)}async get(e){return o.get(`builds/${e}`)}async download(e){return o.get(`builds/${e}/download`)}}const a=new l;class u{constructor(e){this.dto=e}static async list(e){return(await a.list(e)).map(s=>new u(s))}get id(){return this.dto.id}get projectId(){return this.dto.projectId}get createdAt(){return new Date(this.dto.createdAt)}get status(){return this.dto.status}get log(){return this.dto.log}get latest(){return this.dto.latest}async download(){const e=await a.download(this.id);if(!e)throw new Error("Download failed");window.open(e.url,"_blank")}}class d{constructor(e,r,s){this.projectId=e,this.buildId=r,this.project=s}static fromV0(e,r,s){const n={hooks:s.hooks.map(t=>({id:t.path,logQuery:{buildId:r,runtimeId:t.path,runtimeTitle:t.title},...t})),forms:s.forms.map(t=>({id:t.path,logQuery:{buildId:r,runtimeId:t.path,runtimeTitle:t.title},...t})),jobs:s.jobs.map(t=>({id:t.identifier,logQuery:{buildId:r,runtimeId:t.identifier,runtimeTitle:t.title},...t})),scripts:[]};return new d(e,r,n)}static fromDTO(e,r,s){const n={hooks:s.hooks.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t})),forms:s.forms.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t})),jobs:s.jobs.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t})),scripts:s.scripts.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t}))};return new d(e,r,n)}static async get(e){const r=await a.get(e);if(!r)throw new Error("Build not found");const{projectId:s,abstraJson:n}=r,t=JSON.parse(n);if(!t.version)throw new Error("Version is invalid");return t.version==="0.1"?this.fromV0(s,e,t):this.fromDTO(s,e,t)}get runtimes(){return[...this.project.forms.map(e=>({...e,type:"form"})),...this.project.hooks.map(e=>({...e,type:"hook"})),...this.project.jobs.map(e=>({...e,type:"job"})),...this.project.scripts.map(e=>({...e,type:"script"}))]}}export{u as B,d as a,l as b};
//# sourceMappingURL=build.f72a9af6.js.map
