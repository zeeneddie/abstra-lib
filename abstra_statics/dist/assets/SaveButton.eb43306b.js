import{j as d}from"./icons.3f47812d.js";import{d as i,r as u,b as f,c as v,e as p,z as y,S as _,N as b,G as m,a as g,q as h}from"./registerWidgets.bbbd3e16.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a5c60c12-0757-418c-8192-cb05e883f1d4",e._sentryDebugIdIdentifier="sentry-dbid-a5c60c12-0757-418c-8192-cb05e883f1d4")}catch{}})();const S=i({__name:"SaveButton",props:{model:null},setup(e){const t=e,a=u(!1);async function s(){a.value=!0;try{await t.model.save()}finally{a.value=!1}}return addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key==="s"&&(n.preventDefault(),s())}),addEventListener("beforeunload",n=>{t.model.hasChanges()&&(n.preventDefault(),n.returnValue="")}),(n,o)=>{var l,r;const c=g("icon");return f(),v("button",{class:m(["save-button",{changes:(l=e.model)==null?void 0:l.hasChanges()}]),onClick:o[0]||(o[0]=w=>s())},[p(c,{class:"icon",path:y(d),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),_(" "+b(a.value?"Saving ...":(r=e.model)!=null&&r.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(S,[["__scopeId","data-v-64b5b2e8"]]);export{k as S};
//# sourceMappingURL=SaveButton.eb43306b.js.map
