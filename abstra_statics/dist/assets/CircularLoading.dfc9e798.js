import{L as c}from"./lottie.ab5349ef.js";import{d as u,r as f,o as p,K as s,b as _,c as y,x as g,A as a,z as i,B as b,q as m}from"./registerWidgets.80830a62.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="68cd7767-8778-44f3-928b-87f900e445f1",e._sentryDebugIdIdentifier="sentry-dbid-68cd7767-8778-44f3-928b-87f900e445f1")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||c.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const d=s(()=>{const{direction:n="row",justify:r="space-between"}=t;return{flexDirection:n,justifyContent:r}}),l=s(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,r)=>(_(),y("div",{class:"container",style:a(i(d))},[g("div",{ref_key:"loading",ref:o,style:a(i(l))},null,4),b(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.dfc9e798.js.map