import{t as d}from"./icons.6936d0f0.js";import{d as c,J as u,H as i,a as p,b as _,c as l,e as b,z as f,U as m,q as y}from"./registerWidgets.1fe34791.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b64d4bf4-a4db-4d6b-a453-d18835620987",e._sentryDebugIdIdentifier="sentry-dbid-b64d4bf4-a4db-4d6b-a453-d18835620987")}catch{}})();const v=c({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=p("icon");return _(),l("button",{class:"preview-button",onClick:r},[b(a,{class:"icon",path:f(d),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.a6b54dc1.js.map
