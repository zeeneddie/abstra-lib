import{d as y,et as b,G as m,b as d,eu as c,e as l,u as g,ev as r,dj as p,ew as w,ex as h,ey as S,v,r as k,a as C,f,w as I,aC as x}from"./outputWidgets.1c4947c7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="c7c91c93-232b-4116-80a0-89fd4051f912",e._sentryDebugIdIdentifier="sentry-dbid-c7c91c93-232b-4116-80a0-89fd4051f912")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=b(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=v(D,[["__scopeId","data-v-4d878495"]]),O=["src"],B=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),c(x,null,[f(n,{class:"router"}),f(M,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const H=v(B,[["__scopeId","data-v-7e290e34"]]);export{H as default};
//# sourceMappingURL=Home.a2a7e1d8.js.map
