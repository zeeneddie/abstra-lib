import{t as c}from"./icons.9d575a00.js";import{d,J as u,H as i,a as p,b as _,c as l,e as f,z as b,U as m,q as y}from"./registerWidgets.3fe0df5a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="801d94eb-ed3c-4134-8fea-45733160be8d",e._sentryDebugIdIdentifier="sentry-dbid-801d94eb-ed3c-4134-8fea-45733160be8d")}catch{}})();const v=d({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=p("icon");return _(),l("button",{class:"preview-button",onClick:r},[f(a,{class:"icon",path:b(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.f29c359b.js.map
