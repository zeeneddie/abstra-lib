import{d as y,et as b,F as m,b as d,eu as c,e as l,u as g,ev as r,dh as p,ew as w,ex as h,ey as S,t as v,r as k,a as C,f,w as I,a_ as x}from"./outputWidgets.91878a00.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="2ac1f8cd-72d6-4887-a274-f3ae16e96390",e._sentryDebugIdIdentifier="sentry-dbid-2ac1f8cd-72d6-4887-a274-f3ae16e96390")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:t}){const i=b(),_=()=>{a.isOpened=!0,t("open")},n=()=>{a.isOpened=!1,t("close")};s({open:_,close:n});const a=m({isOpened:!1});return(o,u)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(o.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(o.headerStyle)},[p(o.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(o.contentStyle)},[p(o.$slots,"content",{},void 0,!0)],4)],4)],2))}});const F=v(D,[["__scopeId","data-v-24f739ca"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),t=k(null);return(i,_)=>{const n=C("router-view");return d(),c(x,null,[f(n,{class:"router"}),f(F,{ref_key:"modal",ref:t},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const H=v(O,[["__scopeId","data-v-7e290e34"]]);export{H as default};
//# sourceMappingURL=Home.d730308e.js.map
