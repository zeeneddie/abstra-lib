import{d as c,b as t,ev as n,dp as s,e as a,ez as d,ex as r,v as i}from"./outputWidgets.f5b314de.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="19ff2223-cc4e-46f5-86a7-0ffb1277cc69",o._sentryDebugIdIdentifier="sentry-dbid-19ff2223-cc4e-46f5-86a7-0ffb1277cc69")}catch{}})();const f={key:0,class:"canvas-container"},u={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",f,[a("div",u,[a("div",v,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[a("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.95780167.js.map
