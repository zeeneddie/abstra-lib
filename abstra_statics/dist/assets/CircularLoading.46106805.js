import{L as l}from"./lottie.7deefc1c.js";import{d as u,r as f,o as p,K as r,b as _,c as y,x as g,A as s,z as d,B as b,q as m}from"./registerWidgets.c5dd482d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5004aa9d-2ea0-4dd5-82c4-5d2cd3c23bf9",e._sentryDebugIdIdentifier="sentry-dbid-5004aa9d-2ea0-4dd5-82c4-5d2cd3c23bf9")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||l.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=r(()=>{const{direction:n="row",justify:a="space-between"}=t;return{flexDirection:n,justifyContent:a}}),c=r(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,a)=>(_(),y("div",{class:"container",style:s(d(i))},[g("div",{ref_key:"loading",ref:o,style:s(d(c))},null,4),b(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.46106805.js.map
