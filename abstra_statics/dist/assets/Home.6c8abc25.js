import{d as y,et as v,H as m,b as c,eu as l,e as d,u as g,ev as r,aD as p,ew as w,ex as h,ey as S,x as b,r as k,a as C,f,w as I,bg as x}from"./outputWidgets.3f6d0550.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b81069d2-87b3-4cf7-8a7c-8b618e527acb",e._sentryDebugIdIdentifier="sentry-dbid-b81069d2-87b3-4cf7-8a7c-8b618e527acb")}catch{}})();const D=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:s,emit:o}){const i=v(),_=()=>{a.isOpened=!0,o("open")},n=()=>{a.isOpened=!1,o("close")};s({open:_,close:n});const a=m({isOpened:!1});return(t,u)=>(c(),l("div",{class:S(["background",a.isOpened&&"visible"]),onClick:n},[d("div",{class:"container",style:r(t.containerStyle),onClick:u[0]||(u[0]=h(()=>{},["stop"]))},[g(i).header?(c(),l("div",{key:0,class:"header",style:r(t.headerStyle)},[p(t.$slots,"header",{},void 0,!0)],4)):w("",!0),d("div",{class:"content",style:r(t.contentStyle)},[p(t.$slots,"content",{},void 0,!0)],4)],4)],2))}});const H=b(D,[["__scopeId","data-v-24f739ca"]]),M=["src"],O=y({__name:"Home",setup(e){const s=m({onboardingForm:""}),o=k(null);return(i,_)=>{const n=C("router-view");return c(),l(x,null,[f(n,{class:"router"}),f(H,{ref_key:"modal",ref:o},{content:I(()=>[d("iframe",{class:"form",src:s.onboardingForm},null,8,M)]),_:1},512)],64)}}});const F=b(O,[["__scopeId","data-v-7e290e34"]]);export{F as default};
//# sourceMappingURL=Home.6c8abc25.js.map
