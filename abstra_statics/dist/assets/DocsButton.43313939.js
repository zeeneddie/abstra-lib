import{d as a,b as c,c as i,t as d}from"./registerWidgets.741285ec.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="4557712f-9bf9-4676-8049-6d0c99123ad7",s._sentryDebugIdIdentifier="sentry-dbid-4557712f-9bf9-4676-8049-6d0c99123ad7")}catch{}})();class p{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const n=new p;class o{constructor(e,t){this.projectId=e,this.authorId=t}static async get(){const e=await n.get();return e.logged?new o(e.project_id,e.author_id):null}static async create(e){const t=await n.create(e);if(!t.logged)throw new Error("Failed to login");return new o(t.project_id,t.author_id)}async delete(){return n.delete()}}const _=["href"],u=a({__name:"DocsButton",props:{path:{}},setup(s){return(e,t)=>{var r;return c(),i("a",{class:"docs-button",href:`https://docs.abstra.io/${(r=e.path)!=null?r:""}`,target:"_blank"}," Docs ",8,_)}}});const f=d(u,[["__scopeId","data-v-9fec5678"]]);export{f as D,o as L};
//# sourceMappingURL=DocsButton.43313939.js.map