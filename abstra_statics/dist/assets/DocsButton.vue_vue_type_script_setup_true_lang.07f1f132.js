import{d as a,b as c,c as i,w as d,b0 as p,u,cb as l}from"./registerWidgets.6188faf0.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="6106e8e4-582d-497b-8f7c-75e06c6c12a1",n._sentryDebugIdIdentifier="sentry-dbid-6106e8e4-582d-497b-8f7c-75e06c6c12a1")}catch{}})();class f{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const s=new f;class o{constructor(e,t){this.projectId=e,this.authorId=t}static async get(){const e=await s.get();return e.logged?new o(e.project_id,e.author_id):null}static async create(e){const t=await s.create(e);if(!t.logged)throw new Error("Failed to login");return new o(t.project_id,t.author_id)}async delete(){return s.delete()}}const g=a({__name:"DocsButton",props:{path:{}},setup(n){return(e,t)=>{var r;return c(),i(u(l),{class:"docs-button",href:`https://docs.abstra.io/${(r=e.path)!=null?r:""}`,target:"_blank"},{default:d(()=>[p(" Docs ")]),_:1},8,["href"])}}});export{o as L,g as _};
//# sourceMappingURL=DocsButton.vue_vue_type_script_setup_true_lang.07f1f132.js.map
