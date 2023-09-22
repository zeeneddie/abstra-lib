import{B as W,D as L,dA as O,ax as j,U as P,Z as U,d as z,N as w,H as y,O as B,f as d,R as v,F as X,a_ as V,ay as Z,dB as q,bu as G,c2 as J,a5 as D,dl as K,ah as Q}from"./registerWidgets.d6e66474.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c27efc63-b0b0-46e3-9376-059c6d496686",e._sentryDebugIdIdentifier="sentry-dbid-c27efc63-b0b0-46e3-9376-059c6d496686")}catch{}})();const f=(e,t,o)=>{const n=O(o);return{[`${e.componentCls}-${t}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`]}}},Y=e=>j(e,(t,o)=>{let{textColor:n,lightBorderColor:a,lightColor:l,darkColor:r}=o;return{[`${e.componentCls}-${t}`]:{color:n,background:l,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:r,borderColor:r}}}}),ee=e=>{const{paddingXXS:t,lineWidth:o,tagPaddingHorizontal:n,componentCls:a}=e,l=n-o,r=t-o;return{[a]:P(P({},U(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${a}-close-icon`]:{marginInlineStart:r,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}})}},k=W("Tag",e=>{const{fontSize:t,lineHeight:o,lineWidth:n,fontSizeIcon:a}=e,l=Math.round(t*o),r=e.fontSizeSM,g=l-n*2,h=e.colorFillAlter,s=e.colorText,c=L(e,{tagFontSize:r,tagLineHeight:g,tagDefaultBg:h,tagDefaultColor:s,tagIconSize:a-2*n,tagPaddingHorizontal:8});return[ee(c),Y(c),f(c,"success","Success"),f(c,"processing","Info"),f(c,"error","Error"),f(c,"warning","Warning")]}),oe=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),le=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:oe(),setup(e,t){let{slots:o,emit:n,attrs:a}=t;const{prefixCls:l}=w("tag",e),[r,g]=k(l),h=c=>{const{checked:u}=e;n("update:checked",!u),n("change",!u),n("click",c)},s=y(()=>B(l.value,g.value,{[`${l.value}-checkable`]:!0,[`${l.value}-checkable-checked`]:e.checked}));return()=>{var c;return r(d("span",v(v({},a),{},{class:s.value,onClick:h}),[(c=o.default)===null||c===void 0?void 0:c.call(o)]))}}}),S=le,ne=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:D.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:K(),"onUpdate:visible":Function,icon:D.any}),C=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ne(),slots:Object,setup(e,t){let{slots:o,emit:n,attrs:a}=t;const{prefixCls:l,direction:r}=w("tag",e),[g,h]=k(l),s=X(!0);V(()=>{e.visible!==void 0&&(s.value=e.visible)});const c=i=>{i.stopPropagation(),n("update:visible",!1),n("close",i),!i.defaultPrevented&&e.visible===void 0&&(s.value=!1)},u=y(()=>Z(e.color)||q(e.color)),F=y(()=>B(l.value,h.value,{[`${l.value}-${e.color}`]:u.value,[`${l.value}-has-color`]:e.color&&!u.value,[`${l.value}-hidden`]:!s.value,[`${l.value}-rtl`]:r.value==="rtl"})),H=i=>{n("click",i)};return()=>{var i,b,p;const{icon:_=(i=o.icon)===null||i===void 0?void 0:i.call(o),color:m,closeIcon:$=(b=o.closeIcon)===null||b===void 0?void 0:b.call(o),closable:A=!1}=e,M=()=>A?$?d("span",{class:`${l.value}-close-icon`,onClick:c},[$]):d(Q,{class:`${l.value}-close-icon`,onClick:c},null):null,N={backgroundColor:m&&!u.value?m:void 0},I=_||null,T=(p=o.default)===null||p===void 0?void 0:p.call(o),E=I?d(G,null,[I,d("span",null,[T])]):T,R=e.onClick!==void 0,x=d("span",v(v({},a),{},{onClick:H,class:[F.value,a.class],style:[N,a.style]}),[E,M()]);return g(R?d(J,null,{default:()=>[x]}):x)}}});C.CheckableTag=S;C.install=function(e){return e.component(C.name,C),e.component(S.name,S),e};const ce=C;export{ce as A,S as C};
//# sourceMappingURL=index.3aa3e246.js.map
