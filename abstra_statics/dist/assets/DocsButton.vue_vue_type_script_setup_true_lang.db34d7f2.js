import{d as a,b as o,c as r,w as c,b2 as d,u as i,cd as p}from"./outputWidgets.b13a87c2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a9489f35-4c2d-4689-a1b7-53c5bfadca29",t._sentryDebugIdIdentifier="sentry-dbid-a9489f35-4c2d-4689-a1b7-53c5bfadca29")}catch{}})();class f{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const u=new f,b=a({__name:"DocsButton",props:{path:{}},setup(t){return(e,n)=>{var s;return o(),r(i(p),{class:"docs-button",href:`https://docs.abstra.io/${(s=e.path)!=null?s:""}`,target:"_blank"},{default:c(()=>[d(" Docs ")]),_:1},8,["href"])}}});export{b as _,u as l};
//# sourceMappingURL=DocsButton.vue_vue_type_script_setup_true_lang.db34d7f2.js.map
