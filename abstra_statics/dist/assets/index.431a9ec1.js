import{C as c}from"./Card.d0bf83a8.js";import{d as C,L as I,bQ as i,f as r,bn as d,G as _,aL as M,cl as m}from"./outputWidgets.2e02c315.js";import{F as n}from"./Form.c3ceca07.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c34c8ae1-b35c-4ab6-95fc-f3d22aa90c3b",e._sentryDebugIdIdentifier="sentry-dbid-c34c8ae1-b35c-4ab6-95fc-f3d22aa90c3b")}catch{}})();const x=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),u=C({compatConfig:{MODE:3},name:"ACardMeta",props:x(),slots:Object,setup(e,o){let{slots:a}=o;const{prefixCls:t}=I("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(a,e,"avatar"),v=i(a,e,"title"),b=i(a,e,"description"),D=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,p=v?r("div",{class:`${t.value}-meta-title`},[v]):null,g=b?r("div",{class:`${t.value}-meta-description`},[b]):null,y=p||g?r("div",{class:`${t.value}-meta-detail`},[p,g]):null;return r("div",{class:l},[D,y])}}}),G=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),f=C({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:G(),setup(e,o){let{slots:a}=o;const{prefixCls:t}=I("card",e),l=_(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=a.default)===null||s===void 0?void 0:s.call(a)])}}});c.Meta=u;c.Grid=f;c.install=function(e){return e.component(c.name,c),e.component(u.name,u),e.component(f.name,f),e};n.useInjectFormItemContext=M;n.ItemRest=m;n.install=function(e){return e.component(n.name,n),e.component(n.Item.name,n.Item),e.component(m.name,m),e};export{f as G,u as M};
//# sourceMappingURL=index.431a9ec1.js.map
