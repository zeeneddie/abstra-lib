import{d as y,es as _,E as b,b as c,c as l,er as i,bu as v,et as a,c2 as p,eu as m,ev as S,ew as g,t as k}from"./registerWidgets.43612290.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b8b911d4-731f-40ac-a865-2c43cc78226e",e._sentryDebugIdIdentifier="sentry-dbid-b8b911d4-731f-40ac-a865-2c43cc78226e")}catch{}})();const w=y({__name:"Modal",props:{containerStyle:{},headerStyle:{},contentStyle:{}},emits:["open","close"],setup(e,{expose:t,emit:n}){const f=_(),u=()=>{o.isOpened=!0,n("open")},d=()=>{o.isOpened=!1,n("close")};t({open:u,close:d});const o=b({isOpened:!1});return(s,r)=>(c(),l("div",{class:g(["background",o.isOpened&&"visible"]),onClick:d},[i("div",{class:"container",style:a(s.containerStyle),onClick:r[0]||(r[0]=S(()=>{},["stop"]))},[v(f).header?(c(),l("div",{key:0,class:"header",style:a(s.headerStyle)},[p(s.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(s.contentStyle)},[p(s.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(w,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.2fe9bbb0.js.map
