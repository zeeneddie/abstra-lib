import{d as s,b as a,c as r,w as i,aI as c,u as d,c0 as p}from"./outputWidgets.90e6e058.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="61531b83-1b40-42f2-aa36-d4e489191311",t._sentryDebugIdIdentifier="sentry-dbid-61531b83-1b40-42f2-aa36-d4e489191311")}catch{}})();class f{async get(){return(await fetch("/_editor/api/login")).json()}async create(e){return(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json()}async delete(){await fetch("/_editor/api/login",{method:"DELETE"})}async getProjectInfo(){return(await fetch("/_editor/api/project-info")).json()}}const l=new f,_=s({__name:"DocsButton",props:{path:{}},setup(t){return(e,n)=>{var o;return a(),r(d(p),{class:"docs-button",href:`https://docs.abstra.io/${(o=e.path)!=null?o:""}`,target:"_blank"},{default:i(()=>[c(" Docs ")]),_:1},8,["href"])}}});export{_,l};
//# sourceMappingURL=DocsButton.vue_vue_type_script_setup_true_lang.fd3716ba.js.map