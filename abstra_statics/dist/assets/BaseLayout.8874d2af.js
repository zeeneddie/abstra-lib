import{d as r,b as t,eu as n,aD as s,e as o,ey as d,ew as c,x as i}from"./outputWidgets.b8e3fbc0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="ea1df8bd-314d-4032-a7ba-72538ffee579",a._sentryDebugIdIdentifier="sentry-dbid-ea1df8bd-314d-4032-a7ba-72538ffee579")}catch{}})();const u={key:0,class:"canvas-container"},f={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(a){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),o("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[o("div",f,[o("div",v,[s(e.$slots,"content",{},void 0,!0)])]),o("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[o("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?c("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-4f211c13"]]);export{B};
//# sourceMappingURL=BaseLayout.8874d2af.js.map
