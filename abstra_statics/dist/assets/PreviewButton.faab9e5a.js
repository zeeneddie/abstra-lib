import{t as r}from"./icons.d073d483.js";import{d,J as u,H as i,a as p,b as _,c as l,e as f,z as m,U as b,q as y}from"./registerWidgets.4d894c88.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d1cd9f29-98c2-4ac4-a221-3b6fdd3a6770",e._sentryDebugIdIdentifier="sentry-dbid-d1cd9f29-98c2-4ac4-a221-3b6fdd3a6770")}catch{}})();const v=d({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),a=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const c=p("icon");return _(),l("button",{class:"preview-button",onClick:a},[f(c,{class:"icon",path:m(r),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),b(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.faab9e5a.js.map
