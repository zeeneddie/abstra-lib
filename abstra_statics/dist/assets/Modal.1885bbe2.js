import{d as u,eu as _,H as b,b as r,et as c,e as i,u as v,ev as a,aD as p,ew as m,ex as S,ey as g,x as k}from"./outputWidgets.1f391ab3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fda7804f-22e2-4a38-b604-cdc66b6899cb",e._sentryDebugIdIdentifier="sentry-dbid-fda7804f-22e2-4a38-b604-cdc66b6899cb")}catch{}})();const w=u({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const f=_(),y=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:y,close:d});const o=b({isOpened:!1});return(s,l)=>(r(),c("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[i("div",{class:"container",style:a(s.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[v(f).header?(r(),c("div",{key:0,class:"header",style:a(s.headerStyle)},[p(s.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(s.contentStyle)},[p(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(w,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.1885bbe2.js.map
