import{B as F,D as A,bS as L,V as w,$ as V,dv as O,E as W,bC as X,d as R,b1 as N,b4 as j,H as I,dN as K,ac as p,r as f,J as U,N as Q,o as G,a4 as J,f as o,R as M,Q as Z,b8 as q,am as v,dZ as Y,a6 as c,aU as C}from"./outputWidgets.397b3720.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="f5251ea1-98bc-4b53-ba63-a64b281b439d",i._sentryDebugIdIdentifier="sentry-dbid-f5251ea1-98bc-4b53-ba63-a64b281b439d")}catch{}})();const k=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:i.switchMinWidthSM,height:i.switchHeightSM,lineHeight:`${i.switchHeightSM}px`,[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMaxSM,paddingInlineEnd:i.switchInnerMarginMinSM,[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:i.switchPinSizeSM,height:i.switchPinSizeSM},[`${n}-loading-icon`]:{top:(i.switchPinSizeSM-i.switchLoadingIconSize)/2,fontSize:i.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMinSM,paddingInlineEnd:i.switchInnerMarginMaxSM,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.marginXXS/2,marginInlineEnd:-i.marginXXS/2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.marginXXS/2,marginInlineEnd:i.marginXXS/2}}}}}}},ii=i=>{const{componentCls:n}=i;return{[n]:{[`${n}-loading-icon${i.iconCls}`]:{position:"relative",top:(i.switchPinSize-i.fontSize)/2,color:i.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:i.switchColor}}}},ni=i=>{const{componentCls:n}=i,e=`${n}-handle`;return{[n]:{[e]:{position:"absolute",top:i.switchPadding,insetInlineStart:i.switchPadding,width:i.switchPinSize,height:i.switchPinSize,transition:`all ${i.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i.colorWhite,borderRadius:i.switchPinSize/2,boxShadow:i.switchHandleShadow,transition:`all ${i.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${e}`]:{insetInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding}px)`},[`&:not(${n}-disabled):active`]:{[`${e}::before`]:{insetInlineEnd:i.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${e}::before`]:{insetInlineEnd:0,insetInlineStart:i.switchHandleActiveInset}}}}},ei=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[e]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i.switchInnerMarginMax,paddingInlineEnd:i.switchInnerMarginMin,transition:`padding-inline-start ${i.switchDuration} ease-in-out, padding-inline-end ${i.switchDuration} ease-in-out`,[`${e}-checked, ${e}-unchecked`]:{display:"block",color:i.colorTextLightSolid,fontSize:i.fontSizeSM,transition:`margin-inline-start ${i.switchDuration} ease-in-out, margin-inline-end ${i.switchDuration} ease-in-out`,pointerEvents:"none"},[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${e}`]:{paddingInlineStart:i.switchInnerMarginMin,paddingInlineEnd:i.switchInnerMarginMax,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.switchPadding*2,marginInlineEnd:-i.switchPadding*2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.switchPadding*2,marginInlineEnd:i.switchPadding*2}}}}}},ai=i=>{const{componentCls:n}=i;return{[n]:w(w(w(w({},V(i)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i.switchMinWidth,height:i.switchHeight,lineHeight:`${i.switchHeight}px`,verticalAlign:"middle",background:i.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${i.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:i.colorTextTertiary}}),O(i)),{[`&${n}-checked`]:{background:i.switchColor,[`&:hover:not(${n}-disabled)`]:{background:i.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:i.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},ci=F("Switch",i=>{const n=i.fontSize*i.lineHeight,e=i.controlHeight/2,t=2,h=n-t*2,s=e-t*2,l=A(i,{switchMinWidth:h*2+t*4,switchHeight:n,switchDuration:i.motionDurationMid,switchColor:i.colorPrimary,switchDisabledOpacity:i.opacityLoading,switchInnerMarginMin:h/2,switchInnerMarginMax:h+t+t*2,switchPadding:t,switchPinSize:h,switchBg:i.colorBgContainer,switchMinWidthSM:s*2+t*2,switchHeightSM:e,switchInnerMarginMinSM:s/2,switchInnerMarginMaxSM:s+t+t*2,switchPinSizeSM:s,switchHandleShadow:`0 2px 4px 0 ${new L("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:i.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${i.opacityLoading})`,switchHandleActiveInset:"-30%"});return[ai(l),ei(l),ni(l),ii(l),k(l)]}),ti=X("small","default"),di=()=>({id:String,prefixCls:String,size:c.oneOf(ti),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}),si=R({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:di(),slots:Object,setup(i,n){let{attrs:e,slots:t,expose:h,emit:s}=n;const l=N(),x=j(),g=I(()=>{var a;return(a=i.disabled)!==null&&a!==void 0?a:x.value});K(()=>{p(),p()});const S=f(i.checked!==void 0?i.checked:e.defaultChecked),b=I(()=>S.value===i.checkedValue);U(()=>i.checked,()=>{S.value=i.checked});const{prefixCls:d,direction:y,size:P}=Q("switch",i),[z,E]=ci(d),u=f(),m=()=>{var a;(a=u.value)===null||a===void 0||a.focus()};h({focus:m,blur:()=>{var a;(a=u.value)===null||a===void 0||a.blur()}}),G(()=>{J(()=>{i.autofocus&&!g.value&&u.value.focus()})});const $=(a,r)=>{g.value||(s("update:checked",a),s("change",a,r),l.onFieldChange())},H=a=>{s("blur",a)},D=a=>{m();const r=b.value?i.unCheckedValue:i.checkedValue;$(r,a),s("click",r,a)},T=a=>{a.keyCode===C.LEFT?$(i.unCheckedValue,a):a.keyCode===C.RIGHT&&$(i.checkedValue,a),s("keydown",a)},_=a=>{var r;(r=u.value)===null||r===void 0||r.blur(),s("mouseup",a)},B=I(()=>({[`${d.value}-small`]:P.value==="small",[`${d.value}-loading`]:i.loading,[`${d.value}-checked`]:b.value,[`${d.value}-disabled`]:g.value,[d.value]:!0,[`${d.value}-rtl`]:y.value==="rtl",[E.value]:!0}));return()=>{var a;return z(o(Y,null,{default:()=>[o("button",M(M(M({},Z(i,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),e),{},{id:(a=i.id)!==null&&a!==void 0?a:l.id.value,onKeydown:T,onClick:D,onBlur:H,onMouseup:_,type:"button",role:"switch","aria-checked":S.value,disabled:g.value||i.loading,class:[e.class,B.value],ref:u}),[o("div",{class:`${d.value}-handle`},[i.loading?o(q,{class:`${d.value}-loading-icon`},null):null]),o("span",{class:`${d.value}-inner`},[o("span",{class:`${d.value}-inner-checked`},[v(t,i,"checkedChildren")]),o("span",{class:`${d.value}-inner-unchecked`},[v(t,i,"unCheckedChildren")])])])]}))}}}),oi=W(si);export{oi as A};
//# sourceMappingURL=index.0c0c1078.js.map
