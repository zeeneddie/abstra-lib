import{u as c}from"./icons.5faf907f.js";import{d,J as u,H as i,a as p,b as _,c as f,e as l,z as b,S as m,q as y}from"./registerWidgets.7cf0d33e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7adf31fb-251d-4721-8fb3-7966efa6b2ca",e._sentryDebugIdIdentifier="sentry-dbid-7adf31fb-251d-4721-8fb3-7966efa6b2ca")}catch{}})();const v=d({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),a=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const r=p("icon");return _(),f("button",{class:"preview-button",onClick:a},[l(r,{class:"icon",path:b(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.6629294c.js.map