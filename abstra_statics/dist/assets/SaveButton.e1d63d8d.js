import{j as c}from"./icons.854ecd29.js";import{d as i,r as u,b as f,c as v,e as p,z as y,S as _,N as m,G as b,a as g,q as h}from"./registerWidgets.5e258592.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="10c17e99-29d3-4589-88c1-1b7956cf06d7",e._sentryDebugIdIdentifier="sentry-dbid-10c17e99-29d3-4589-88c1-1b7956cf06d7")}catch{}})();const S=i({__name:"SaveButton",props:{model:null},setup(e){const t=e,a=u(!1);async function s(){a.value=!0;try{await t.model.save()}finally{a.value=!1}}return addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key==="s"&&(n.preventDefault(),s())}),addEventListener("beforeunload",n=>{t.model.hasChanges()&&(n.preventDefault(),n.returnValue="")}),(n,o)=>{var d,l;const r=g("icon");return f(),v("button",{class:b(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),onClick:o[0]||(o[0]=w=>s())},[p(r,{class:"icon",path:y(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),_(" "+m(a.value?"Saving ...":(l=e.model)!=null&&l.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(S,[["__scopeId","data-v-0e370bd3"]]);export{k as S};
//# sourceMappingURL=SaveButton.e1d63d8d.js.map