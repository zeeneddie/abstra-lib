import{d as c,b as a,et as n,dm as s,e as t,ex as d,ev as r,t as i}from"./outputWidgets.517466a4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="4bde864b-335d-4478-bdeb-c0c5d34e192d",o._sentryDebugIdIdentifier="sentry-dbid-4bde864b-335d-4478-bdeb-c0c5d34e192d")}catch{}})();const u={key:0,class:"canvas-container"},v={class:"canvas-content"},_={class:"canvas-absolute"},f={class:"canvas-footer"},b={key:1,class:"content-container"},y={class:"content-layout"},p={key:0,class:"content-footer"},m=c({__name:"BaseLayout",props:{fullCanvas:{type:Boolean}},setup(o){return(e,l)=>(a(),n("div",{class:d(["base-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"navbar",{},void 0,!0),t("div",{class:d(["middle-layout",{"full-canvas":e.fullCanvas}])},[s(e.$slots,"sidebar",{},void 0,!0),e.fullCanvas?(a(),n("div",u,[t("div",v,[t("div",_,[s(e.$slots,"content",{},void 0,!0)])]),t("div",f,[s(e.$slots,"footer",{},void 0,!0)])])):(a(),n("div",b,[t("div",y,[s(e.$slots,"content",{},void 0,!0)])]))],2),e.fullCanvas?r("",!0):(a(),n("div",p,[s(e.$slots,"footer",{},void 0,!0)]))],2))}});const B=i(m,[["__scopeId","data-v-f51eb3de"]]);export{B};
//# sourceMappingURL=BaseLayout.7babf70d.js.map
