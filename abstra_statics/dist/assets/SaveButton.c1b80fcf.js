import{j as c}from"./icons.79ac4c38.js";import{d as i,r as f,b as u,c as v,e as p,z as y,S as _,N as m,G as b,a as g,q as h}from"./registerWidgets.dc0b6768.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4ece555c-97e5-4259-a445-b9c0bd8afc3d",e._sentryDebugIdIdentifier="sentry-dbid-4ece555c-97e5-4259-a445-b9c0bd8afc3d")}catch{}})();const S=i({__name:"SaveButton",props:{model:null},setup(e){const n=e,t=f(!1);async function s(){t.value=!0;try{await n.model.save()}finally{t.value=!1}}return addEventListener("keydown",a=>{(a.metaKey||a.ctrlKey)&&a.key==="s"&&(a.preventDefault(),s())}),addEventListener("beforeunload",a=>{n.model.hasChanges()&&(a.preventDefault(),a.returnValue="")}),(a,o)=>{var d,l;const r=g("icon");return u(),v("button",{class:b(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),onClick:o[0]||(o[0]=w=>s())},[p(r,{class:"icon",path:y(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),_(" "+m(t.value?"Saving ...":(l=e.model)!=null&&l.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(S,[["__scopeId","data-v-42786fd0"]]);export{k as S};
//# sourceMappingURL=SaveButton.c1b80fcf.js.map