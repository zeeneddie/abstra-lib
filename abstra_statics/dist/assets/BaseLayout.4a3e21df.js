import{d as l,b as t,et as n,aC as s,e as o,ex as c,ev as r,v as i}from"./outputWidgets.a4629ff8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="5a3ba42f-ccd8-4dcf-bcc4-67e9a5ec747f",a._sentryDebugIdIdentifier="sentry-dbid-5a3ba42f-ccd8-4dcf-bcc4-67e9a5ec747f")}catch{}})();const u={key:0,class:"canvas-container"},f={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=l({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(a){return(e,d)=>(t(),n("div",{class:c(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),o("div",{class:c(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[o("div",f,[o("div",v,[s(e.$slots,"content",{},void 0,!0)])]),o("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[o("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const C=i(m,[["__scopeId","data-v-4f211c13"]]);export{C as B};
//# sourceMappingURL=BaseLayout.4a3e21df.js.map
