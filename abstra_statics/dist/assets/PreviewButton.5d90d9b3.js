import{r as c}from"./icons.f9be01a3.js";import{d,ey as u,ex as i,a as p,b as _,c as l,e as f,bu as m,bh as y,t as b}from"./registerWidgets.eb5d1044.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c40ecae2-91a2-426e-97fa-aa8f8eded7cd",e._sentryDebugIdIdentifier="sentry-dbid-c40ecae2-91a2-426e-97fa-aa8f8eded7cd")}catch{}})();const v=d({__name:"PreviewButton",props:{model:{}},setup(e){const t=e,o=u(),s=i(),a=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const r=p("icon");return _(),l("button",{class:"preview-button",onClick:a},[f(r,{class:"icon",path:m(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),y(" Preview ")])}}});const I=b(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.5d90d9b3.js.map
