import{r as c}from"./icons.3fd4ec74.js";import{d,ey as u,ex as i,a as p,b as _,c as l,e as b,bu as f,bh as m,t as y}from"./registerWidgets.b639afe0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a8e14bfb-337e-4249-be48-d42e77da032e",e._sentryDebugIdIdentifier="sentry-dbid-a8e14bfb-337e-4249-be48-d42e77da032e")}catch{}})();const v=d({__name:"PreviewButton",props:{model:{}},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=p("icon");return _(),l("button",{class:"preview-button",onClick:r},[b(a,{class:"icon",path:f(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.b053d905.js.map
