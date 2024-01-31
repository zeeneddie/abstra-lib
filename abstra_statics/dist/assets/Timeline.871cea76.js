import{d as w,a0 as _,N as W,H as I,f as d,a6 as c,ay as D,bt as P,B as X,D as V,V as T,$ as j,a_ as R,aT as G,d5 as q,O as z,R as B}from"./outputWidgets.1f5e37db.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="1d6b2ce4-83c8-4472-8b12-ce4d56238c9a",e._sentryDebugIdIdentifier="sentry-dbid-1d6b2ce4-83c8-4472-8b12-ce4d56238c9a")}catch{}})();const F=()=>({prefixCls:String,color:String,dot:c.any,pending:D(),position:c.oneOf(P("left","right","")).def(""),label:c.any}),J=w({compatConfig:{MODE:3},name:"ATimelineItem",props:_(F(),{color:"blue",pending:!1}),slots:Object,setup(e,i){let{slots:l}=i;const{prefixCls:a}=W("timeline",e),t=I(()=>({[`${a.value}-item`]:!0,[`${a.value}-item-pending`]:e.pending})),u=I(()=>/blue|red|green|gray/.test(e.color||"")?void 0:e.color||"blue"),S=I(()=>({[`${a.value}-item-head`]:!0,[`${a.value}-item-head-${e.color||"blue"}`]:!u.value}));return()=>{var g,p,r;const{label:o=(g=l.label)===null||g===void 0?void 0:g.call(l),dot:n=(p=l.dot)===null||p===void 0?void 0:p.call(l)}=e;return d("li",{class:t.value},[o&&d("div",{class:`${a.value}-item-label`},[o]),d("div",{class:`${a.value}-item-tail`},null),d("div",{class:[S.value,!!n&&`${a.value}-item-head-custom`],style:{borderColor:u.value,color:u.value}},[n]),d("div",{class:`${a.value}-item-content`},[(r=l.default)===null||r===void 0?void 0:r.call(l)])])}}}),K=e=>{const{componentCls:i}=e;return{[i]:T(T({},j(e)),{margin:0,padding:0,listStyle:"none",[`${i}-item`]:{position:"relative",margin:0,paddingBottom:e.timeLineItemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize,insetInlineStart:(e.timeLineItemHeadSize-e.timeLineItemTailWidth)/2,height:`calc(100% - ${e.timeLineItemHeadSize}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px ${e.lineType} ${e.colorSplit}`},"&-pending":{[`${i}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${i}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.timeLineItemHeadSize,height:e.timeLineItemHeadSize,backgroundColor:e.colorBgContainer,border:`${e.timeLineHeadBorderWidth}px ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:e.timeLineItemHeadSize/2,insetInlineStart:e.timeLineItemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.timeLineItemCustomHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.lineWidth,marginInlineStart:e.margin+e.timeLineItemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${i}-item-tail`]:{display:"none"},[`> ${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}}},[`&${i}-alternate,
        &${i}-right,
        &${i}-label`]:{[`${i}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:`-${e.marginXXS}px`,"&-custom":{marginInlineStart:e.timeLineItemTailWidth/2}},"&-left":{[`${i}-item-content`]:{insetInlineStart:`calc(50% - ${e.marginXXS}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}},"&-right":{[`${i}-item-content`]:{width:`calc(50% - ${e.marginSM}px)`,margin:0,textAlign:"end"}}}},[`&${i}-right`]:{[`${i}-item-right`]:{[`${i}-item-tail,
            ${i}-item-head,
            ${i}-item-head-custom`]:{insetInlineStart:`calc(100% - ${(e.timeLineItemHeadSize+e.timeLineItemTailWidth)/2}px)`},[`${i}-item-content`]:{width:`calc(100% - ${e.timeLineItemHeadSize+e.marginXS}px)`}}},[`&${i}-pending
        ${i}-item-last
        ${i}-item-tail`]:{display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`&${i}-reverse
        ${i}-item-last
        ${i}-item-tail`]:{display:"none"},[`&${i}-reverse ${i}-item-pending`]:{[`${i}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.timeLineItemTailWidth}px dotted ${e.colorSplit}`},[`${i}-item-content`]:{minHeight:e.controlHeightLG*1.2}},[`&${i}-label`]:{[`${i}-item-label`]:{position:"absolute",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.timeLineItemTailWidth,width:`calc(50% - ${e.marginSM}px)`,textAlign:"end"},[`${i}-item-right`]:{[`${i}-item-label`]:{insetInlineStart:`calc(50% + ${e.marginSM}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${i}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},Q=X("Timeline",e=>{const i=V(e,{timeLineItemPaddingBottom:e.padding*1.25,timeLineItemHeadSize:10,timeLineItemCustomHeadPaddingVertical:e.paddingXXS,timeLinePaddingInlineEnd:2,timeLineItemTailWidth:e.lineWidthBold,timeLineHeadBorderWidth:e.wireframe?e.lineWidthBold:e.lineWidth*3});return[K(i)]}),U=()=>({prefixCls:String,pending:c.any,pendingDot:c.any,reverse:D(),mode:c.oneOf(P("left","alternate","right",""))}),Z=w({compatConfig:{MODE:3},name:"ATimeline",inheritAttrs:!1,props:_(U(),{reverse:!1,mode:""}),slots:Object,setup(e,i){let{slots:l,attrs:a}=i;const{prefixCls:t,direction:u}=W("timeline",e),[S,g]=Q(t),p=(r,o)=>{const n=r.props||{};return e.mode==="alternate"?n.position==="right"?`${t.value}-item-right`:n.position==="left"?`${t.value}-item-left`:o%2===0?`${t.value}-item-left`:`${t.value}-item-right`:e.mode==="left"?`${t.value}-item-left`:e.mode==="right"?`${t.value}-item-right`:n.position==="right"?`${t.value}-item-right`:""};return()=>{var r,o,n;const{pending:m=(r=l.pending)===null||r===void 0?void 0:r.call(l),pendingDot:A=(o=l.pendingDot)===null||o===void 0?void 0:o.call(l),reverse:v,mode:y}=e,E=typeof m=="boolean"?null:m,b=R((n=l.default)===null||n===void 0?void 0:n.call(l)),L=m?d(J,{pending:!!m,dot:A||d(G,null,null)},{default:()=>[E]}):null;L&&b.push(L);const f=v?b.reverse():b,C=f.length,x=`${t.value}-item-last`,M=f.map(($,s)=>{const h=s===C-2?x:"",N=s===C-1?x:"";return q($,{class:z([!v&&!!m?h:N,p($,s)])})}),H=f.some($=>{var s,h;return!!(((s=$.props)===null||s===void 0?void 0:s.label)||((h=$.children)===null||h===void 0?void 0:h.label))}),O=z(t.value,{[`${t.value}-pending`]:!!m,[`${t.value}-reverse`]:!!v,[`${t.value}-${y}`]:!!y&&!H,[`${t.value}-label`]:H,[`${t.value}-rtl`]:u.value==="rtl"},a.class,g.value);return S(d("ul",B(B({},a),{},{class:O}),[M]))}}});export{J as A,Z as T};
//# sourceMappingURL=Timeline.871cea76.js.map
