import{L as c}from"./lottie.5c7f29e3.js";import{d as u,r as f,o as p,K as r,b as _,c as y,x as g,A as s,z as i,B as b,q as m}from"./registerWidgets.5bbfbb1a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2eeec402-e4f8-45c5-b2b8-80336a175a9a",e._sentryDebugIdIdentifier="sentry-dbid-2eeec402-e4f8-45c5-b2b8-80336a175a9a")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||c.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const d=r(()=>{const{direction:n="row",justify:a="space-between"}=t;return{flexDirection:n,justifyContent:a}}),l=r(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,a)=>(_(),y("div",{class:"container",style:s(i(d))},[g("div",{ref_key:"loading",ref:o,style:s(i(l))},null,4),b(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.fd9aaeaa.js.map
