import{d as u,y as _,v as b,b as r,c as i,x as c,z as v,A as a,B as p,D as m,E as S,G as g,q as k}from"./registerWidgets.7afd6438.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5a071b15-09f5-460f-8bd3-d43730e76228",e._sentryDebugIdIdentifier="sentry-dbid-5a071b15-09f5-460f-8bd3-d43730e76228")}catch{}})();const h=u({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const f=_(),y=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:y,close:d});const o=b({isOpened:!1});return(s,l)=>(r(),i("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[c("div",{class:"container",style:a(s.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[v(f).header?(r(),i("div",{key:0,class:"header",style:a(s.headerStyle)},[p(s.$slots,"header",{},void 0,!0)],4)):m("",!0),c("div",{class:"content",style:a(s.contentStyle)},[p(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(h,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.94284cfc.js.map
