import{d as y,es as _,G as v,b as l,er as c,e as i,u as b,et as a,aL as p,eu as m,ev as S,ew as g,v as k}from"./registerWidgets.fc4aaf77.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="083d7c4f-4bfa-4c45-86d4-46298a537cd4",e._sentryDebugIdIdentifier="sentry-dbid-083d7c4f-4bfa-4c45-86d4-46298a537cd4")}catch{}})();const w=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const f=_(),u=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:u,close:d});const o=v({isOpened:!1});return(s,r)=>(l(),c("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[i("div",{class:"container",style:a(s.containerStyle),onClick:r[0]||(r[0]=S(()=>{},["stop"]))},[b(f).header?(l(),c("div",{key:0,class:"header",style:a(s.headerStyle)},[p(s.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(s.contentStyle)},[p(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(w,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.83b244c5.js.map
