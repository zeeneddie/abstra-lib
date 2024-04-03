import{C as f,A as x}from"./CollapsePanel.130c73c8.js";import{d as D,$ as A,L as E,H as C,f as s,a5 as c,ax as M,bd as N,B as G,D as Q,U as P,Z as U,aB as Z,c4 as q,d4 as F,N as W,Q as _}from"./outputWidgets.5cb6b216.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="1593f206-a338-4903-b7d9-73d9fc000ffa",e._sentryDebugIdIdentifier="sentry-dbid-1593f206-a338-4903-b7d9-73d9fc000ffa")}catch{}})();f.Panel=x;f.install=function(e){return e.component(f.name,f),e.component(x.name,x),e};const J=()=>({prefixCls:String,color:String,dot:c.any,pending:M(),position:c.oneOf(N("left","right","")).def(""),label:c.any}),v=D({compatConfig:{MODE:3},name:"ATimelineItem",props:A(J(),{color:"blue",pending:!1}),slots:Object,setup(e,i){let{slots:l}=i;const{prefixCls:n}=E("timeline",e),t=C(()=>({[`${n.value}-item`]:!0,[`${n.value}-item-pending`]:e.pending})),u=C(()=>/blue|red|green|gray/.test(e.color||"")?void 0:e.color||"blue"),b=C(()=>({[`${n.value}-item-head`]:!0,[`${n.value}-item-head-${e.color||"blue"}`]:!u.value}));return()=>{var g,p,r;const{label:o=(g=l.label)===null||g===void 0?void 0:g.call(l),dot:a=(p=l.dot)===null||p===void 0?void 0:p.call(l)}=e;return s("li",{class:t.value},[o&&s("div",{class:`${n.value}-item-label`},[o]),s("div",{class:`${n.value}-item-tail`},null),s("div",{class:[b.value,!!a&&`${n.value}-item-head-custom`],style:{borderColor:u.value,color:u.value}},[a]),s("div",{class:`${n.value}-item-content`},[(r=l.default)===null||r===void 0?void 0:r.call(l)])])}}}),K=e=>{const{componentCls:i}=e;return{[i]:P(P({},U(e)),{margin:0,padding:0,listStyle:"none",[`${i}-item`]:{position:"relative",margin:0,paddingBottom:e.timeLineItemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize,insetInlineStart:(e.timeLineItemHeadSize-e.timeLineItemTailWidth)/2,height:`calc(100% - ${e.timeLineItemHeadSize}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px ${e.lineType} ${e.colorSplit}`},"&-pending":{[`${i}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${i}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.timeLineItemHeadSize,height:e.timeLineItemHeadSize,backgroundColor:e.colorBgContainer,border:`${e.timeLineHeadBorderWidth}px ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize/2,insetInlineStart:e.timeLineItemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.timeLineItemCustomHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.lineWidth,marginInlineStart:e.margin+e.timeLineItemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${i}-item-tail`]:{display:"none"},[`> ${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}}},[`&${i}-alternate,
        &${i}-right,
        &${i}-label`]:{[`${i}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:`-${e.marginXXS}px`,"&-custom":{marginInlineStart:e.timeLineItemTailWidth/2}},"&-left":{[`${i}-item-content`]:{insetInlineStart:`calc(50% - ${e.marginXXS}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}},"&-right":{[`${i}-item-content`]:{width:`calc(50% - ${e.marginSM}px)`,margin:0,textAlign:"end"}}}},[`&${i}-right`]:{[`${i}-item-right`]:{[`${i}-item-tail,
            ${i}-item-head,
            ${i}-item-head-custom`]:{insetInlineStart:`calc(100% - ${(e.timeLineItemHeadSize+e.timeLineItemTailWidth)/2}px)`},[`${i}-item-content`]:{width:`calc(100% - ${e.timeLineItemHeadSize+e.marginXS}px)`}}},[`&${i}-pending
        ${i}-item-last
        ${i}-item-tail`]:{display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`&${i}-reverse
        ${i}-item-last
        ${i}-item-tail`]:{display:"none"},[`&${i}-reverse ${i}-item-pending`]:{[`${i}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}},[`&${i}-label`]:{[`${i}-item-label`]:{position:"absolute",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.timeLineItemTailWidth,width:`calc(50% - ${e.marginSM}px)`,textAlign:"end"},[`${i}-item-right`]:{[`${i}-item-label`]:{insetInlineStart:`calc(50% + ${e.marginSM}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${i}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},Y=G("Timeline",e=>{const i=Q(e,{timeLineItemPaddingBottom:e.padding*1.25,timeLineItemHeadSize:10,timeLineItemCustomHeadPaddingVertical:e.paddingXXS,timeLinePaddingInlineEnd:2,timeLineItemTailWidth:e.lineWidthBold,timeLineHeadBorderWidth:e.wireframe?e.lineWidthBold:e.lineWidth*3});return[K(i)]}),k=()=>({prefixCls:String,pending:c.any,pendingDot:c.any,reverse:M(),mode:c.oneOf(N("left","alternate","right",""))}),S=D({compatConfig:{MODE:3},name:"ATimeline",inheritAttrs:!1,props:A(k(),{reverse:!1,mode:""}),slots:Object,setup(e,i){let{slots:l,attrs:n}=i;const{prefixCls:t,direction:u}=E("timeline",e),[b,g]=Y(t),p=(r,o)=>{const a=r.props||{};return e.mode==="alternate"?a.position==="right"?`${t.value}-item-right`:a.position==="left"?`${t.value}-item-left`:o%2===0?`${t.value}-item-left`:`${t.value}-item-right`:e.mode==="left"?`${t.value}-item-left`:e.mode==="right"?`${t.value}-item-right`:a.position==="right"?`${t.value}-item-right`:""};return()=>{var r,o,a;const{pending:m=(r=l.pending)===null||r===void 0?void 0:r.call(l),pendingDot:O=(o=l.pendingDot)===null||o===void 0?void 0:o.call(l),reverse:I,mode:H}=e,X=typeof m=="boolean"?null:m,y=Z((a=l.default)===null||a===void 0?void 0:a.call(l)),T=m?s(v,{pending:!!m,dot:O||s(q,null,null)},{default:()=>[X]}):null;T&&y.push(T);const L=I?y.reverse():y,B=L.length,z=`${t.value}-item-last`,j=L.map(($,d)=>{const h=d===B-2?z:"",R=d===B-1?z:"";return F($,{class:W([!I&&!!m?h:R,p($,d)])})}),w=L.some($=>{var d,h;return!!(((d=$.props)===null||d===void 0?void 0:d.label)||((h=$.children)===null||h===void 0?void 0:h.label))}),V=W(t.value,{[`${t.value}-pending`]:!!m,[`${t.value}-reverse`]:!!I,[`${t.value}-${H}`]:!!H&&!w,[`${t.value}-label`]:w,[`${t.value}-rtl`]:u.value==="rtl"},n.class,g.value);return b(s("ul",_(_({},n),{},{class:V}),[j]))}}});S.Item=v;S.install=function(e){return e.component(S.name,S),e.component(v.name,v),e};export{v as A,S as T};
//# sourceMappingURL=index.9d7265f8.js.map