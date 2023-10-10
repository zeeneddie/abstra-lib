import{D as N,E as O,d$ as R,al as j,W as P,a0 as X,d as z,O as w,J as y,Q as k,f as d,U as b,G as U,aO as G,am as J,e0 as Q,bg as V,bX as q,a7 as D,dL as K,bj as Y}from"./outputWidgets.dcbaec6c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="856a00b9-8648-469a-b62c-73f18aa3618f",e._sentryDebugIdIdentifier="sentry-dbid-856a00b9-8648-469a-b62c-73f18aa3618f")}catch{}})();const C=(e,c,o)=>{const a=R(o);return{[`${e.componentCls}-${c}`]:{color:e[`color${o}`],background:e[`color${a}Bg`],borderColor:e[`color${a}Border`]}}},Z=e=>j(e,(c,o)=>{let{textColor:a,lightBorderColor:n,lightColor:l,darkColor:r}=o;return{[`${e.componentCls}-${c}`]:{color:a,background:l,borderColor:n,"&-inverse":{color:e.colorTextLightSolid,background:r,borderColor:r}}}}),ee=e=>{const{paddingXXS:c,lineWidth:o,tagPaddingHorizontal:a,componentCls:n}=e,l=a-o,r=c-o;return{[n]:P(P({},X(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${n}-close-icon`]:{marginInlineStart:r,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}})}},B=N("Tag",e=>{const{fontSize:c,lineHeight:o,lineWidth:a,fontSizeIcon:n}=e,l=Math.round(c*o),r=e.fontSizeSM,g=l-a*2,f=e.colorFillAlter,s=e.colorText,t=O(e,{tagFontSize:r,tagLineHeight:g,tagDefaultBg:f,tagDefaultColor:s,tagIconSize:n-2*a,tagPaddingHorizontal:8});return[ee(t),Z(t),C(t,"success","Success"),C(t,"processing","Info"),C(t,"error","Error"),C(t,"warning","Warning")]}),oe=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),le=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:oe(),setup(e,c){let{slots:o,emit:a,attrs:n}=c;const{prefixCls:l}=w("tag",e),[r,g]=B(l),f=t=>{const{checked:u}=e;a("update:checked",!u),a("change",!u),a("click",t)},s=y(()=>k(l.value,g.value,{[`${l.value}-checkable`]:!0,[`${l.value}-checkable-checked`]:e.checked}));return()=>{var t;return r(d("span",b(b({},n),{},{class:s.value,onClick:f}),[(t=o.default)===null||t===void 0?void 0:t.call(o)]))}}}),S=le,ae=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:D.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:K(),"onUpdate:visible":Function,icon:D.any}),h=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ae(),slots:Object,setup(e,c){let{slots:o,emit:a,attrs:n}=c;const{prefixCls:l,direction:r}=w("tag",e),[g,f]=B(l),s=U(!0);G(()=>{e.visible!==void 0&&(s.value=e.visible)});const t=i=>{i.stopPropagation(),a("update:visible",!1),a("close",i),!i.defaultPrevented&&e.visible===void 0&&(s.value=!1)},u=y(()=>J(e.color)||Q(e.color)),F=y(()=>k(l.value,f.value,{[`${l.value}-${e.color}`]:u.value,[`${l.value}-has-color`]:e.color&&!u.value,[`${l.value}-hidden`]:!s.value,[`${l.value}-rtl`]:r.value==="rtl"})),H=i=>{a("click",i)};return()=>{var i,v,p;const{icon:_=(i=o.icon)===null||i===void 0?void 0:i.call(o),color:m,closeIcon:$=(v=o.closeIcon)===null||v===void 0?void 0:v.call(o),closable:A=!1}=e,M=()=>A?$?d("span",{class:`${l.value}-close-icon`,onClick:t},[$]):d(Y,{class:`${l.value}-close-icon`,onClick:t},null):null,E={backgroundColor:m&&!u.value?m:void 0},I=_||null,T=(p=o.default)===null||p===void 0?void 0:p.call(o),W=I?d(V,null,[I,d("span",null,[T])]):T,L=e.onClick!==void 0,x=d("span",b(b({},n),{},{onClick:H,class:[F.value,n.class],style:[E,n.style]}),[W,M()]);return g(L?d(q,null,{default:()=>[x]}):x)}}});h.CheckableTag=S;h.install=function(e){return e.component(h.name,h),e.component(S.name,S),e};const te=h;export{te as A,S as C};
//# sourceMappingURL=index.69bd7c01.js.map
