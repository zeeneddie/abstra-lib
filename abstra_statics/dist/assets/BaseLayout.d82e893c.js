import{d as r,b as t,ev as n,ds as s,e as a,ez as d,ex as i,v as c}from"./outputWidgets.7c5cd35c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="9d37393f-9efe-402e-9e5d-09a23a8f44d3",o._sentryDebugIdIdentifier="sentry-dbid-9d37393f-9efe-402e-9e5d-09a23a8f44d3")}catch{}})();const u={key:0,class:"canvas-container"},f={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[a("div",f,[a("div",v,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[a("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?i("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=c(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.d82e893c.js.map
