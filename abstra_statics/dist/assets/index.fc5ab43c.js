import{C as c}from"./Card.d0f439b4.js";import{d as C,L as I,bQ as i,f as r,bn as d,G as _,aL as M,cl as m}from"./outputWidgets.7c5cd35c.js";import{F as a}from"./Form.030063aa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f3c84f2a-19cd-416e-abf1-f826dcc8c580",e._sentryDebugIdIdentifier="sentry-dbid-f3c84f2a-19cd-416e-abf1-f826dcc8c580")}catch{}})();const x=()=>({prefixCls:String,title:d(),description:d(),avatar:d()}),u=C({compatConfig:{MODE:3},name:"ACardMeta",props:x(),slots:Object,setup(e,o){let{slots:n}=o;const{prefixCls:t}=I("card",e);return()=>{const l={[`${t.value}-meta`]:!0},s=i(n,e,"avatar"),v=i(n,e,"title"),p=i(n,e,"description"),D=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,b=v?r("div",{class:`${t.value}-meta-title`},[v]):null,g=p?r("div",{class:`${t.value}-meta-description`},[p]):null,y=b||g?r("div",{class:`${t.value}-meta-detail`},[b,g]):null;return r("div",{class:l},[D,y])}}}),G=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),f=C({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:G(),setup(e,o){let{slots:n}=o;const{prefixCls:t}=I("card",e),l=_(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:l.value},[(s=n.default)===null||s===void 0?void 0:s.call(n)])}}});c.Meta=u;c.Grid=f;c.install=function(e){return e.component(c.name,c),e.component(u.name,u),e.component(f.name,f),e};a.useInjectFormItemContext=M;a.ItemRest=m;a.install=function(e){return e.component(a.name,a),e.component(a.Item.name,a.Item),e.component(m.name,m),e};export{f as G,u as M};
//# sourceMappingURL=index.fc5ab43c.js.map
