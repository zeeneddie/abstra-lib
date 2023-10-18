import{B as W,D as L,d_ as O,ak as j,V as P,$ as X,d as z,N as k,H as y,O as w,f as d,R as v,F as U,aN as V,al as Z,d$ as q,bf as G,dZ as J,a6 as D,dI as K,bi as Q}from"./outputWidgets.397b3720.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="7cd2f383-3c2e-4180-8bba-677a1d307c95",e._sentryDebugIdIdentifier="sentry-dbid-7cd2f383-3c2e-4180-8bba-677a1d307c95")}catch{}})();const C=(e,c,o)=>{const n=O(o);return{[`${e.componentCls}-${c}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`]}}},Y=e=>j(e,(c,o)=>{let{textColor:n,lightBorderColor:a,lightColor:l,darkColor:r}=o;return{[`${e.componentCls}-${c}`]:{color:n,background:l,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:r,borderColor:r}}}}),ee=e=>{const{paddingXXS:c,lineWidth:o,tagPaddingHorizontal:n,componentCls:a}=e,l=n-o,r=c-o;return{[a]:P(P({},X(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${a}-close-icon`]:{marginInlineStart:r,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}})}},B=W("Tag",e=>{const{fontSize:c,lineHeight:o,lineWidth:n,fontSizeIcon:a}=e,l=Math.round(c*o),r=e.fontSizeSM,g=l-n*2,f=e.colorFillAlter,s=e.colorText,t=L(e,{tagFontSize:r,tagLineHeight:g,tagDefaultBg:f,tagDefaultColor:s,tagIconSize:a-2*n,tagPaddingHorizontal:8});return[ee(t),Y(t),C(t,"success","Success"),C(t,"processing","Info"),C(t,"error","Error"),C(t,"warning","Warning")]}),oe=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),le=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:oe(),setup(e,c){let{slots:o,emit:n,attrs:a}=c;const{prefixCls:l}=k("tag",e),[r,g]=B(l),f=t=>{const{checked:u}=e;n("update:checked",!u),n("change",!u),n("click",t)},s=y(()=>w(l.value,g.value,{[`${l.value}-checkable`]:!0,[`${l.value}-checkable-checked`]:e.checked}));return()=>{var t;return r(d("span",v(v({},a),{},{class:s.value,onClick:f}),[(t=o.default)===null||t===void 0?void 0:t.call(o)]))}}}),S=le,ne=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:D.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:K(),"onUpdate:visible":Function,icon:D.any}),h=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:ne(),slots:Object,setup(e,c){let{slots:o,emit:n,attrs:a}=c;const{prefixCls:l,direction:r}=k("tag",e),[g,f]=B(l),s=U(!0);V(()=>{e.visible!==void 0&&(s.value=e.visible)});const t=i=>{i.stopPropagation(),n("update:visible",!1),n("close",i),!i.defaultPrevented&&e.visible===void 0&&(s.value=!1)},u=y(()=>Z(e.color)||q(e.color)),F=y(()=>w(l.value,f.value,{[`${l.value}-${e.color}`]:u.value,[`${l.value}-has-color`]:e.color&&!u.value,[`${l.value}-hidden`]:!s.value,[`${l.value}-rtl`]:r.value==="rtl"})),H=i=>{n("click",i)};return()=>{var i,b,p;const{icon:_=(i=o.icon)===null||i===void 0?void 0:i.call(o),color:m,closeIcon:$=(b=o.closeIcon)===null||b===void 0?void 0:b.call(o),closable:A=!1}=e,M=()=>A?$?d("span",{class:`${l.value}-close-icon`,onClick:t},[$]):d(Q,{class:`${l.value}-close-icon`,onClick:t},null):null,N={backgroundColor:m&&!u.value?m:void 0},I=_||null,T=(p=o.default)===null||p===void 0?void 0:p.call(o),E=I?d(G,null,[I,d("span",null,[T])]):T,R=e.onClick!==void 0,x=d("span",v(v({},a),{},{onClick:H,class:[F.value,a.class],style:[N,a.style]}),[E,M()]);return g(R?d(J,null,{default:()=>[x]}):x)}}});h.CheckableTag=S;h.install=function(e){return e.component(h.name,h),e.component(S.name,S),e};const te=h;export{te as A,S as C};
//# sourceMappingURL=index.4acaedbb.js.map
