import{s as f}from"./icons.9bf16893.js";import{d as i,r as c,b as u,c as v,e as p,z as y,U as _,N as b,G as m,a as g,q as h}from"./registerWidgets.308ea35b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a40269ad-b3a6-473d-88ad-f64d1c2bb061",e._sentryDebugIdIdentifier="sentry-dbid-a40269ad-b3a6-473d-88ad-f64d1c2bb061")}catch{}})();const w=i({__name:"SaveButton",props:{model:null},setup(e){const n=e,t=c(!1);async function s(){t.value=!0;try{await n.model.save()}finally{t.value=!1}}return addEventListener("keydown",a=>{(a.metaKey||a.ctrlKey)&&a.key==="s"&&(a.preventDefault(),s())}),addEventListener("beforeunload",a=>{n.model.hasChanges()&&(a.preventDefault(),a.returnValue="")}),(a,o)=>{var d,l;const r=g("icon");return u(),v("button",{class:m(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),onClick:o[0]||(o[0]=S=>s())},[p(r,{class:"icon",path:y(f),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),_(" "+b(t.value?"Saving ...":(l=e.model)!=null&&l.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(w,[["__scopeId","data-v-15752ff4"]]);export{k as S};
//# sourceMappingURL=SaveButton.0495a9b0.js.map
