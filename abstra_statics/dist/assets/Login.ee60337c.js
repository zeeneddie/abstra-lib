import{P as a}from"./Passwordless.30a1b023.js";import{d as r,ex as i,b as d,c as f,e as s,eq as c,t as _}from"./registerWidgets.48d70646.js";import{M as m}from"./member.9990ae25.js";import{W as p}from"./WidgetsFrame.c8a97b8c.js";import"./CircularLoading.20fe55b2.js";import"./lottie.59a9905b.js";import"./icons.48cd7982.js";import"./passwordlessManager.03d1b335.js";import"./pubsub.e10d523f.js";import"./gateway.2de0c194.js";import"./activeRecord.a633f408.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f383acf2-a0d3-4f68-9097-4ba81f208fe8",e._sentryDebugIdIdentifier="sentry-dbid-f383acf2-a0d3-4f68-9097-4ba81f208fe8")}catch{}})();const l={class:"login"},u=r({__name:"Login",setup(e){const o=i();async function t(n){await m.login(),o.push({name:"home"})}return(n,g)=>(d(),f("div",l,[s(p,{theme:"white","main-color":"#d14056","font-family":"sans-serif",runtime:"dash"},{default:c(()=>[s(a,{class:"passwordless",onDone:t})]),_:1})]))}});const B=_(u,[["__scopeId","data-v-0e3dc783"]]);export{B as default};
//# sourceMappingURL=Login.ee60337c.js.map
