import{L as c}from"./lottie.68b1efe0.js";import{d as f,r as u,o as p,K as a,b as _,c as y,x as g,A as s,z as i,B as b,q as m}from"./registerWidgets.6f0bbac2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="31845e8f-769f-4e33-af75-ff9541b7d323",e._sentryDebugIdIdentifier="sentry-dbid-31845e8f-769f-4e33-af75-ff9541b7d323")}catch{}})();const v=f({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=u(null);p(()=>{!o.value||c.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const d=a(()=>{const{direction:n="row",justify:r="space-between"}=t;return{flexDirection:n,justifyContent:r}}),l=a(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,r)=>(_(),y("div",{class:"container",style:s(i(d))},[g("div",{ref_key:"loading",ref:o,style:s(i(l))},null,4),b(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.64e0c9cf.js.map