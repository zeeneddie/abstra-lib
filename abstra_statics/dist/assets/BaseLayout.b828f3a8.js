import{d as c,b as n,ev as t,dp as s,e as o,ez as d,ex as r,v as i}from"./outputWidgets.25dce6ef.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="3da2cc62-64e2-4e37-acb6-662d09e8491d",a._sentryDebugIdIdentifier="sentry-dbid-3da2cc62-64e2-4e37-acb6-662d09e8491d")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},_={class:"canvas-absolute"},f={class:"canvas-footer"},y={key:1,class:"content-container"},p={key:0,class:"content-footer"},b=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean},noMargins:{type:Boolean}},setup(a){return(e,l)=>(n(),t("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),o("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(n(),t("div",u,[o("div",v,[o("div",_,[s(e.$slots,"content",{},void 0,!0)])]),o("div",f,[s(e.$slots,"footer",{},void 0,!0)])])):(n(),t("div",y,[o("div",{class:d(["content-layout",{"no-margins":e.noMargins}])},[s(e.$slots,"content",{},void 0,!0)],2)]))],2),e.fullCanvas?r("",!0):(n(),t("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const g=i(b,[["__scopeId","data-v-393a4c0b"]]);export{g as B};
//# sourceMappingURL=BaseLayout.b828f3a8.js.map
