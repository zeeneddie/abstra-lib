import{d as c,b as t,et as n,aN as s,e as o,ey as d,ew as r,x as i}from"./outputWidgets.1f56779e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="3aacc6e0-3074-4343-a8f5-f2b75debc4de",a._sentryDebugIdIdentifier="sentry-dbid-3aacc6e0-3074-4343-a8f5-f2b75debc4de")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(a){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),o("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[o("div",v,[o("div",f,[s(e.$slots,"content",{},void 0,!0)])]),o("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[o("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-1687ec5d"]]);export{B};
//# sourceMappingURL=BaseLayout.035924d4.js.map
