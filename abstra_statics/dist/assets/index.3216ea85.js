import{C as o}from"./Card.0ce28b50.js";import{d as p,N as g,bX as d,f as r,bB as i,H as y}from"./outputWidgets.564eeccc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5d97b182-fb27-489c-980b-53123caa1d3d",e._sentryDebugIdIdentifier="sentry-dbid-5d97b182-fb27-489c-980b-53123caa1d3d")}catch{}})();const _=()=>({prefixCls:String,title:i(),description:i(),avatar:i()}),c=p({compatConfig:{MODE:3},name:"ACardMeta",props:_(),slots:Object,setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=d(a,e,"avatar"),v=d(a,e,"title"),f=d(a,e,"description"),C=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,m=v?r("div",{class:`${t.value}-meta-title`},[v]):null,b=f?r("div",{class:`${t.value}-meta-description`},[f]):null,D=m||b?r("div",{class:`${t.value}-meta-detail`},[m,b]):null;return r("div",{class:l},[C,D])}}}),M=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),u=p({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:M(),setup(e,n){let{slots:a}=n;const{prefixCls:t}=g("card",e),l=y(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});o.Meta=c;o.Grid=u;o.install=function(e){return e.component(o.name,o),e.component(c.name,c),e.component(u.name,u),e};export{u as G,c as M};
//# sourceMappingURL=index.3216ea85.js.map
