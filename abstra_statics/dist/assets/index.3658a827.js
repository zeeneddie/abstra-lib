import{C as l}from"./Card.66adb5e9.js";import{d as I,L as b,bQ as c,f as r,bn as d,G as _,aL as M,cl as m}from"./outputWidgets.737278d2.js";import{F as a}from"./Form.fbb1233f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2668341d-1ce3-4443-9f78-670153746107",e._sentryDebugIdIdentifier="sentry-dbid-2668341d-1ce3-4443-9f78-670153746107")}catch{}})();const x=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),u=I({compatConfig:{MODE:3},name:"ACardMeta",props:x(),slots:Object,setup(e,o){let{slots:n}=o;const{prefixCls:t}=b("card",e);return()=>{const i={[`${t.value}-meta`]:!0},s=c(n,e,"avatar"),v=c(n,e,"title"),p=c(n,e,"description"),D=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,g=v?r("div",{class:`${t.value}-meta-title`},[v]):null,C=p?r("div",{class:`${t.value}-meta-description`},[p]):null,y=g||C?r("div",{class:`${t.value}-meta-detail`},[g,C]):null;return r("div",{class:i},[D,y])}}}),G=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),f=I({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:G(),setup(e,o){let{slots:n}=o;const{prefixCls:t}=b("card",e),i=_(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:i.value},[(s=n.default)===null||s===void 0?void 0:s.call(n)])}}});l.Meta=u;l.Grid=f;l.install=function(e){return e.component(l.name,l),e.component(u.name,u),e.component(f.name,f),e};a.useInjectFormItemContext=M;a.ItemRest=m;a.install=function(e){return e.component(a.name,a),e.component(a.Item.name,a.Item),e.component(m.name,m),e};export{f as G,u as M};
//# sourceMappingURL=index.3658a827.js.map
