import{d as y,eu as v,G as m,b as d,ev as c,e as l,u as g,ew as r,dp as u,ex as w,ey as h,ez as S,v as b,r as k,a as C,f,w as I,aD as D}from"./outputWidgets.005a49a1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b5cbd4c1-c4cb-4f64-9b82-2eed410fe8df",e._sentryDebugIdIdentifier="sentry-dbid-b5cbd4c1-c4cb-4f64-9b82-2eed410fe8df")}catch{}})();const x=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,p)=>(d(),c("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[l("div",{class:"container",style:r(t.containerStyle),onClick:p[0]||(p[0]=h(()=>{},["stop"]))},[g(i).header?(d(),c("div",{key:0,class:"header",style:r(t.headerStyle)},[u(t.$slots,"header",{},void 0,!0)],4)):w("",!0),l("div",{class:"content",style:r(t.contentStyle)},[u(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const M=b(x,[["__scopeId","data-v-4d878495"]]),O=["src"],z=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return d(),c(D,null,[f(n,{class:"router"}),f(M,{ref_key:"modal",ref:o},{content:I(()=>[l("iframe",{class:"form",src:s.onboardingForm},null,8,O)]),_:1},512)],64)}}});const F=b(z,[["__scopeId","data-v-7e290e34"]]);export{F as default};
//# sourceMappingURL=Home.b79507e4.js.map
