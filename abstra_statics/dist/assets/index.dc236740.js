import{C as o}from"./Card.9bd70da8.js";import{d as p,L as g,bH as i,f as r,bl as d,H as y}from"./outputWidgets.f017b1ba.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="73516a9e-75b8-4313-a07c-0ba53b05dd58",e._sentryDebugIdIdentifier="sentry-dbid-73516a9e-75b8-4313-a07c-0ba53b05dd58")}catch{}})();const _=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),c=p({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),v=i(a,e,"title"),m=i(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,f=v?r("div",{class:`${t.value}-meta-title`},[v]):null,b=m?r("div",{class:`${t.value}-meta-description`},[m]):null,D=f||b?r("div",{class:`${t.value}-meta-detail`},[f,b]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=p({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.dc236740.js.map