import{d as c,b as a,et as n,aD as s,e as t,ey as d,ew as r,x as i}from"./outputWidgets.6f061a1b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="6ff653b0-ebd3-4365-b23b-3bd1e999c52c",o._sentryDebugIdIdentifier="sentry-dbid-6ff653b0-ebd3-4365-b23b-3bd1e999c52c")}catch{}})();const u={key:0,class:"canvas-container"},f={class:"canvas-content"},v={class:"canvas-absolute"},_={class:"canvas-footer"},b={key:1,class:"content-container"},y={class:"content-layout"},p={key:0,class:"content-footer"},m=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(a(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),t("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(a(),n("div",u,[t("div",f,[t("div",v,[s(e.$slots,"content",{},void 0,!0)])]),t("div",_,[s(e.$slots,"footer",{},void 0,!0)])])):(a(),n("div",b,[t("div",y,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(a(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-4f211c13"]]);export{B};
//# sourceMappingURL=BaseLayout.18e1b00d.js.map