import{r as a}from"./icons.89f10f59.js";import{d,K as u,J as i,a as p,b as _,c as l,e as b,A as f,V as m,t as y}from"./registerWidgets.163fba07.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9121bde3-504c-46c5-a40b-be700d78b386",e._sentryDebugIdIdentifier="sentry-dbid-9121bde3-504c-46c5-a40b-be700d78b386")}catch{}})();const v=d({__name:"PreviewButton",props:{model:{}},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const c=p("icon");return _(),l("button",{class:"preview-button",onClick:r},[b(c,{class:"icon",path:f(a),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.0f9d5012.js.map
