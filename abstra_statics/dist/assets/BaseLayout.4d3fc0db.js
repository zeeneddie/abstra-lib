import{d as c,b as a,eu as n,dh as s,e as t,ey as d,ew as r,t as i}from"./outputWidgets.4ac7ed6a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="3fa329b8-6d65-4159-978d-b6b81206ce2e",o._sentryDebugIdIdentifier="sentry-dbid-3fa329b8-6d65-4159-978d-b6b81206ce2e")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},f={class:"canvas-absolute"},_={class:"canvas-footer"},y={key:1,class:"content-container"},b={class:"content-layout"},p={key:0,class:"content-footer"},h=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(a(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),t("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(a(),n("div",u,[t("div",v,[t("div",f,[s(e.$slots,"content",{},void 0,!0)])]),t("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(a(),n("div",y,[t("div",b,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(a(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(h,[["__scopeId","data-v-4f211c13"]]);export{B};
//# sourceMappingURL=BaseLayout.4d3fc0db.js.map
