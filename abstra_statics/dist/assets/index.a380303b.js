import{B as F,D as L,bu as A,U as w,Z as O,d3 as V,E as W,bd as X,d as R,b1 as j,b4 as K,H as I,db as N,ab as p,r as f,I as U,L as G,o as Q,a3 as Z,f as o,Q as b,O as q,c4 as J,bG as v,dn as Y,a5 as c,aT as x}from"./outputWidgets.5cb6b216.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="7abb135b-0462-4da5-b1f7-5b1babd2e7ff",n._sentryDebugIdIdentifier="sentry-dbid-7abb135b-0462-4da5-b1f7-5b1babd2e7ff")}catch{}})();const k=n=>{const{componentCls:i}=n,e=`${i}-inner`;return{[i]:{[`&${i}-small`]:{minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:`${n.switchHeightSM}px`,[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM,[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSizeSM+n.switchPadding*2}px - ${n.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSizeSM+n.switchPadding*2}px + ${n.switchInnerMarginMaxSM*2}px)`},[`${e}-unchecked`]:{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${i}-handle`]:{width:n.switchPinSizeSM,height:n.switchPinSizeSM},[`${i}-loading-icon`]:{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize},[`&${i}-checked`]:{[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding*2}px + ${n.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSizeSM+n.switchPadding*2}px - ${n.switchInnerMarginMaxSM*2}px)`}},[`${i}-handle`]:{insetInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2}},[`&${i}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2}}}}}}},nn=n=>{const{componentCls:i}=n;return{[i]:{[`${i}-loading-icon${n.iconCls}`]:{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${i}-checked ${i}-loading-icon`]:{color:n.switchColor}}}},en=n=>{const{componentCls:i}=n,e=`${i}-handle`;return{[i]:{[e]:{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${i}-checked ${e}`]:{insetInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding}px)`},[`&:not(${i}-disabled):active`]:{[`${e}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${i}-checked ${e}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},an=n=>{const{componentCls:i}=n,e=`${i}-inner`;return{[i]:{[e]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${e}-checked, ${e}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none"},[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSize+n.switchPadding*2}px - ${n.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSize+n.switchPadding*2}px + ${n.switchInnerMarginMax*2}px)`},[`${e}-unchecked`]:{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${i}-checked ${e}`]:{paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding*2}px + ${n.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSize+n.switchPadding*2}px - ${n.switchInnerMarginMax*2}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:n.switchPadding*2,marginInlineEnd:-n.switchPadding*2}},[`&${i}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-n.switchPadding*2,marginInlineEnd:n.switchPadding*2}}}}}},cn=n=>{const{componentCls:i}=n;return{[i]:w(w(w(w({},O(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:`${n.switchHeight}px`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${i}-disabled)`]:{background:n.colorTextTertiary}}),V(n)),{[`&${i}-checked`]:{background:n.switchColor,[`&:hover:not(${i}-disabled)`]:{background:n.colorPrimaryHover}},[`&${i}-loading, &${i}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${i}-rtl`]:{direction:"rtl"}})}},tn=F("Switch",n=>{const i=n.fontSize*n.lineHeight,e=n.controlHeight/2,t=2,h=i-t*2,s=e-t*2,l=L(n,{switchMinWidth:h*2+t*4,switchHeight:i,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:h/2,switchInnerMarginMax:h+t+t*2,switchPadding:t,switchPinSize:h,switchBg:n.colorBgContainer,switchMinWidthSM:s*2+t*2,switchHeightSM:e,switchInnerMarginMinSM:s/2,switchInnerMarginMaxSM:s+t+t*2,switchPinSizeSM:s,switchHandleShadow:`0 2px 4px 0 ${new A("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:n.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[cn(l),an(l),en(l),nn(l),k(l)]}),dn=X("small","default"),sn=()=>({id:String,prefixCls:String,size:c.oneOf(dn),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}),ln=R({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:sn(),slots:Object,setup(n,i){let{attrs:e,slots:t,expose:h,emit:s}=i;const l=j(),C=K(),g=I(()=>{var a;return(a=n.disabled)!==null&&a!==void 0?a:C.value});N(()=>{p(),p()});const S=f(n.checked!==void 0?n.checked:e.defaultChecked),M=I(()=>S.value===n.checkedValue);U(()=>n.checked,()=>{S.value=n.checked});const{prefixCls:d,direction:y,size:P}=G("switch",n),[z,E]=tn(d),u=f(),m=()=>{var a;(a=u.value)===null||a===void 0||a.focus()};h({focus:m,blur:()=>{var a;(a=u.value)===null||a===void 0||a.blur()}}),Q(()=>{Z(()=>{n.autofocus&&!g.value&&u.value.focus()})});const $=(a,r)=>{g.value||(s("update:checked",a),s("change",a,r),l.onFieldChange())},H=a=>{s("blur",a)},D=a=>{m();const r=M.value?n.unCheckedValue:n.checkedValue;$(r,a),s("click",r,a)},T=a=>{a.keyCode===x.LEFT?$(n.unCheckedValue,a):a.keyCode===x.RIGHT&&$(n.checkedValue,a),s("keydown",a)},_=a=>{var r;(r=u.value)===null||r===void 0||r.blur(),s("mouseup",a)},B=I(()=>({[`${d.value}-small`]:P.value==="small",[`${d.value}-loading`]:n.loading,[`${d.value}-checked`]:M.value,[`${d.value}-disabled`]:g.value,[d.value]:!0,[`${d.value}-rtl`]:y.value==="rtl",[E.value]:!0}));return()=>{var a;return z(o(Y,null,{default:()=>[o("button",b(b(b({},q(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),e),{},{id:(a=n.id)!==null&&a!==void 0?a:l.id.value,onKeydown:T,onClick:D,onBlur:H,onMouseup:_,type:"button",role:"switch","aria-checked":S.value,disabled:g.value||n.loading,class:[e.class,B.value],ref:u}),[o("div",{class:`${d.value}-handle`},[n.loading?o(J,{class:`${d.value}-loading-icon`},null):null]),o("span",{class:`${d.value}-inner`},[o("span",{class:`${d.value}-inner-checked`},[v(t,n,"checkedChildren")]),o("span",{class:`${d.value}-inner-unchecked`},[v(t,n,"unCheckedChildren")])])])]}))}}}),hn=W(ln);export{hn as A};
//# sourceMappingURL=index.a380303b.js.map