import{t as r}from"./icons.bc25a773.js";import{d,J as u,H as i,a as f,b as p,c as _,e as l,z as m,U as y,q as b}from"./registerWidgets.08459ba9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4fc50a5c-f0c4-4fc5-ae4f-ae5ed0f3084d",e._sentryDebugIdIdentifier="sentry-dbid-4fc50a5c-f0c4-4fc5-ae4f-ae5ed0f3084d")}catch{}})();const v=d({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),c=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=f("icon");return p(),_("button",{class:"preview-button",onClick:c},[l(a,{class:"icon",path:m(r),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),y(" Preview ")])}}});const I=b(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.5fbecc93.js.map
