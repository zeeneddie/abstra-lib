import{C as l}from"./Card.e4c20161.js";import{d as M,N as _,bX as d,f as r,bB as u,H as $,aM as G,co as f}from"./outputWidgets.f2dbcdfc.js";import{C as i,A as v}from"./CollapsePanel.2aaa7fd6.js";import{F as a}from"./Form.45d9e489.js";import{T as c,A as b}from"./Timeline.17c2f157.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="0a7ff09a-1b91-4c8a-aa3b-20b9ffca6083",e._sentryDebugIdIdentifier="sentry-dbid-0a7ff09a-1b91-4c8a-aa3b-20b9ffca6083")}catch{}})();const w=()=>({prefixCls:String,title:u(),description:u(),avatar:u()}),C=M({compatConfig:{MODE:3},name:"ACardMeta",props:w(),slots:Object,setup(e,o){let{slots:n}=o;const{prefixCls:t}=_("card",e);return()=>{const m={[`${t.value}-meta`]:!0},s=d(n,e,"avatar"),I=d(n,e,"title"),g=d(n,e,"description"),A=s?r("div",{class:`${t.value}-meta-avatar`},[s]):null,D=I?r("div",{class:`${t.value}-meta-title`},[I]):null,y=g?r("div",{class:`${t.value}-meta-description`},[g]):null,x=D||y?r("div",{class:`${t.value}-meta-detail`},[D,y]):null;return r("div",{class:m},[A,x])}}}),F=()=>({prefixCls:String,hoverable:{type:Boolean,default:!0}}),p=M({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:F(),setup(e,o){let{slots:n}=o;const{prefixCls:t}=_("card",e),m=$(()=>({[`${t.value}-grid`]:!0,[`${t.value}-grid-hoverable`]:e.hoverable}));return()=>{var s;return r("div",{class:m.value},[(s=n.default)===null||s===void 0?void 0:s.call(n)])}}});l.Meta=C;l.Grid=p;l.install=function(e){return e.component(l.name,l),e.component(C.name,C),e.component(p.name,p),e};i.Panel=v;i.install=function(e){return e.component(i.name,i),e.component(v.name,v),e};a.useInjectFormItemContext=G;a.ItemRest=f;a.install=function(e){return e.component(a.name,a),e.component(a.Item.name,a.Item),e.component(f.name,f),e};c.Item=b;c.install=function(e){return e.component(c.name,c),e.component(b.name,b),e};export{p as G,C as M};
//# sourceMappingURL=index.c770af83.js.map