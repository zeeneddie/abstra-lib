import{P as r}from"./Passwordless.35d47bfc.js";import{d as a,ex as i,b as d,er as c,f as s,w as _,v as f}from"./registerWidgets.e6444af9.js";import{M as m}from"./member.ff8ae9e2.js";import{W as p}from"./WidgetsFrame.0c4db1ad.js";import"./CircularLoading.cf5badfe.js";import"./icons.a104c4bd.js";import"./passwordlessManager.00482f2f.js";import"./pubsub.46252dca.js";import"./storage.ec763cd7.js";import"./gateway.c88e2935.js";import"./activeRecord.156dfe51.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="536024fe-d4c8-465f-8794-cec49a380583",e._sentryDebugIdIdentifier="sentry-dbid-536024fe-d4c8-465f-8794-cec49a380583")}catch{}})();const l={class:"login"},u=a({__name:"Login",setup(e){const o=i();async function t(n){await m.login(),o.push({name:"home"})}return(n,g)=>(d(),c("div",l,[s(p,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:_(()=>[s(r,{class:"passwordless",onDone:t})]),_:1})]))}});const B=f(u,[["__scopeId","data-v-0e3dc783"]]);export{B as default};
//# sourceMappingURL=Login.fc5cc24b.js.map
