import{d as r,b as t,er as n,aL as s,e as a,ew as d,eu as c,v as i}from"./registerWidgets.dc9f1313.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="927f04d4-6799-4fb1-8b90-ddf3a7232b98",o._sentryDebugIdIdentifier="sentry-dbid-927f04d4-6799-4fb1-8b90-ddf3a7232b98")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},b={class:"content-layout"},p={key:0,class:"content-footer"},m=r({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(t(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),a("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(t(),n("div",u,[a("div",v,[a("div",f,[s(e.$slots,"content",{},void 0,!0)])]),a("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(t(),n("div",y,[a("div",b,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?c("",!0):(t(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-1687ec5d"]]);export{B};
//# sourceMappingURL=BaseLayout.b7855ada.js.map