import{L as c}from"./lottie.c84c89e3.js";import{d as l,r as u,o as f,F as r,b as p,c as _,er as y,et as s,c2 as g,t as b}from"./registerWidgets.b2d74d6b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d8cd5eec-654f-44ea-a6e3-26bc2008b020",e._sentryDebugIdIdentifier="sentry-dbid-d8cd5eec-654f-44ea-a6e3-26bc2008b020")}catch{}})();const v=l({__name:"CircularLoading",props:{direction:{},justify:{},size:{}},setup(e){const n=e,o=u(null);f(()=>{!o.value||c.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=r(()=>{const{direction:t="row",justify:a="space-between"}=n;return{flexDirection:t,justifyContent:a}}),d=r(()=>{const{size:t="40"}=n;return{width:`${t}px`,height:`${t}px`}});return(t,a)=>(p(),_("div",{class:"container",style:s(i.value)},[y("div",{ref_key:"loading",ref:o,style:s(d.value)},null,4),g(t.$slots,"default",{},void 0,!0)],4))}});const I=b(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.944a8ffa.js.map
