import{P as r}from"./Passwordless.493e6d57.js";import{d as a,ex as i,b as d,c,e as s,eq as _,t as m}from"./registerWidgets.92d2f644.js";import{M as p}from"./member.2ffa4868.js";import{W as f}from"./WidgetsFrame.c49cae71.js";import"./CircularLoading.e3659467.js";import"./lottie.8475a642.js";import"./icons.f7e2c66d.js";import"./passwordlessManager.d1484834.js";import"./pubsub.cabffe13.js";import"./storage.63ab52ef.js";import"./gateway.b5fd6e0f.js";import"./activeRecord.1a640186.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c250e176-b39a-4c1c-bd72-4b9119bbe1d5",e._sentryDebugIdIdentifier="sentry-dbid-c250e176-b39a-4c1c-bd72-4b9119bbe1d5")}catch{}})();const l={class:"login"},u=a({__name:"Login",setup(e){const o=i();async function t(n){await p.login(),o.push({name:"home"})}return(n,b)=>(d(),c("div",l,[s(f,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:_(()=>[s(r,{class:"passwordless",onDone:t})]),_:1})]))}});const C=m(u,[["__scopeId","data-v-0e3dc783"]]);export{C as default};
//# sourceMappingURL=Login.caf11ecf.js.map
