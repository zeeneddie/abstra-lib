import{d as a,b as c,c as d,t as i}from"./registerWidgets.48d70646.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="21d45b9f-339d-404f-a77d-602f59c8f78c",s._sentryDebugIdIdentifier="sentry-dbid-21d45b9f-339d-404f-a77d-602f59c8f78c")}catch{}})();class p{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const n=new p;class o{constructor(e,t){this.projectId=e,this.authorId=t}static async get(){const e=await n.get();return e.logged?new o(e.project_id,e.author_id):null}static async create(e){const t=await n.create(e);if(!t.logged)throw new Error("Failed to login");return new o(t.project_id,t.author_id)}async delete(){return n.delete()}}const f=["href"],_=a({__name:"DocsButton",props:{path:{}},setup(s){return(e,t)=>{var r;return c(),d("a",{class:"docs-button",href:`https://docs.abstra.io/${(r=e.path)!=null?r:""}`,target:"_blank"}," Docs ",8,f)}}});const l=i(_,[["__scopeId","data-v-9fec5678"]]);export{l as D,o as L};
//# sourceMappingURL=DocsButton.d0cc80ac.js.map
