import{d as l,b as t,er as n,aL as s,e as o,ew as d,eu as r,v as i}from"./registerWidgets.6188faf0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="20cc5d6c-0844-44fe-8ead-afe1cd3da488",a._sentryDebugIdIdentifier="sentry-dbid-20cc5d6c-0844-44fe-8ead-afe1cd3da488")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},p={class:"content-layout"},b={key:0,class:"content-footer"},m=l({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(a){return(e,c)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),o("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[o("div",v,[o("div",f,[s(e.$slots,"content",{},void 0,!0)])]),o("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[o("div",p,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(t(),n("div",b,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-1687ec5d"]]);export{B};
//# sourceMappingURL=BaseLayout.0e6d53ae.js.map
