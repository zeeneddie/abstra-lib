import{L as c}from"./lottie.d1a83079.js";import{d as u,r as f,o as p,K as a,b as _,c as y,x as b,A as s,z as d,B as g,q as m}from"./registerWidgets.ad696c68.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fd058304-488e-4bcb-ab9b-d55c7bfdfad4",e._sentryDebugIdIdentifier="sentry-dbid-fd058304-488e-4bcb-ab9b-d55c7bfdfad4")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||c.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=a(()=>{const{direction:n="row",justify:r="space-between"}=t;return{flexDirection:n,justifyContent:r}}),l=a(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,r)=>(_(),y("div",{class:"container",style:s(d(i))},[b("div",{ref_key:"loading",ref:o,style:s(d(l))},null,4),g(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.1b0ceab6.js.map