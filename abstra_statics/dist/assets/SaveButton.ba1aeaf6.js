import{s as f}from"./icons.0ae396f2.js";import{d as i,r as u,a as c,b as p,c as v,e as _,z as y,U as b,N as m,G as g,q as h}from"./registerWidgets.7afd6438.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="254a8b23-dbd8-4814-8071-1d2f67f85b75",n._sentryDebugIdIdentifier="sentry-dbid-254a8b23-dbd8-4814-8071-1d2f67f85b75")}catch{}})();const w=i({__name:"SaveButton",props:{model:{}},setup(n){const a=n,t=u(!1);async function s(){t.value=!0;try{await a.model.save()}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),s())}),addEventListener("beforeunload",e=>{a.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,r;const l=c("icon");return p(),v("button",{class:g(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),onClick:o[0]||(o[0]=S=>s())},[_(l,{class:"icon",path:y(f),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),b(" "+m(t.value?"Saving ...":(r=e.model)!=null&&r.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(w,[["__scopeId","data-v-15752ff4"]]);export{k as S};
//# sourceMappingURL=SaveButton.ba1aeaf6.js.map
