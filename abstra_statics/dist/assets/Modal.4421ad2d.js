import{d as u,eu as _,H as b,b as r,et as i,e as c,u as v,ev as a,aN as p,ew as m,ex as S,ey as g,x as k}from"./outputWidgets.1f56779e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2baaeeae-2765-45dd-bb72-f3a6898292d4",e._sentryDebugIdIdentifier="sentry-dbid-2baaeeae-2765-45dd-bb72-f3a6898292d4")}catch{}})();const w=u({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const y=_(),f=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:f,close:d});const o=b({isOpened:!1});return(s,l)=>(r(),i("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[c("div",{class:"container",style:a(s.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[v(y).header?(r(),i("div",{key:0,class:"header",style:a(s.headerStyle)},[p(s.$slots,"header",{},void 0,!0)],4)):m("",!0),c("div",{class:"content",style:a(s.contentStyle)},[p(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(w,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.4421ad2d.js.map
