import{d as o,b as a,c as r,w as c,b2 as d,u as i,cd as p}from"./outputWidgets.a732e2ee.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2138cc0e-88a2-43f4-ae60-532b1ba43d2d",t._sentryDebugIdIdentifier="sentry-dbid-2138cc0e-88a2-43f4-ae60-532b1ba43d2d")}catch{}})();class f{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}}const u=new f,b=o({__name:"DocsButton",props:{path:{}},setup(t){return(e,n)=>{var s;return a(),r(i(p),{class:"docs-button",href:`https://docs.abstra.io/${(s=e.path)!=null?s:""}`,target:"_blank"},{default:c(()=>[d(" Docs ")]),_:1},8,["href"])}}});export{b as _,u as l};
//# sourceMappingURL=DocsButton.vue_vue_type_script_setup_true_lang.1c91da11.js.map