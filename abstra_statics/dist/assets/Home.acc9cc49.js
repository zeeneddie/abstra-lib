import{d as y,eu as b,G as m,b as d,ev as c,e as l,u as g,ew as r,dp as p,ex as w,ey as h,ez as S,v,r as k,a as C,f as u,w as I,a$ as x}from"./outputWidgets.0a8e4948.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1c2e6cc3-8faf-46dd-a4bd-e7077fcc0f86",e._sentryDebugIdIdentifier="sentry-dbid-1c2e6cc3-8faf-46dd-a4bd-e7077fcc0f86")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,f)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:f[0]||(f[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=v(D,[["__scopeId","data-v-4d878495"]]),O=["src"],$=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),c(x,null,[u(n,{class:"router"}),u(M,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const B=v($,[["__scopeId","data-v-7e290e34"]]);export{B as default};
//# sourceMappingURL=Home.acc9cc49.js.map
