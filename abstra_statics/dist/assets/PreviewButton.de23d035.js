import{u as a}from"./icons.96376736.js";import{d as c,J as u,H as i,a as f,b as p,c as _,e as l,z as b,S as m,q as y}from"./registerWidgets.80830a62.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f1e2f0d7-1b7d-4959-955d-efa5dafbd54f",e._sentryDebugIdIdentifier="sentry-dbid-f1e2f0d7-1b7d-4959-955d-efa5dafbd54f")}catch{}})();const v=c({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const d=f("icon");return p(),_("button",{class:"preview-button",onClick:r},[l(d,{class:"icon",path:b(a),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.de23d035.js.map