import{z as S,B as w,U as s,Z as y,D as z,d as C,L as M,G as d,af as I,f as c,Q as u}from"./outputWidgets.ee623de8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="041a546d-3278-4001-9572-7947cb5f4f83",t._sentryDebugIdIdentifier="sentry-dbid-041a546d-3278-4001-9572-7947cb5f4f83")}catch{}})();const D=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:i}=t;return{[e]:s(s({},y(t)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:o}}})}},B=S("Divider",t=>{const e=w(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[D(e)]},{sizePaddingEdgeHorizontal:0}),G=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),E=C({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:G(),setup(t,e){let{slots:o,attrs:r}=e;const{prefixCls:i,direction:v}=M("divider",t),[b,f]=B(i),g=d(()=>t.orientation==="left"&&t.orientationMargin!=null),h=d(()=>t.orientation==="right"&&t.orientationMargin!=null),$=d(()=>{const{type:n,dashed:l,plain:x}=t,a=i.value;return{[a]:!0,[f.value]:!!f.value,[`${a}-${n}`]:!0,[`${a}-dashed`]:!!l,[`${a}-plain`]:!!x,[`${a}-rtl`]:v.value==="rtl",[`${a}-no-default-orientation-margin-left`]:g.value,[`${a}-no-default-orientation-margin-right`]:h.value}}),m=d(()=>{const n=typeof t.orientationMargin=="number"?`${t.orientationMargin}px`:t.orientationMargin;return s(s({},g.value&&{marginLeft:n}),h.value&&{marginRight:n})}),p=d(()=>t.orientation.length>0?"-"+t.orientation:t.orientation);return()=>{var n;const l=I((n=o.default)===null||n===void 0?void 0:n.call(o));return b(c("div",u(u({},r),{},{class:[$.value,l.length?`${i.value}-with-text ${i.value}-with-text${p.value}`:"",r.class],role:"separator"}),[l.length?c("span",{class:`${i.value}-inner-text`,style:m.value},[l]):null]))}}}),W=z(E);export{W as A};
//# sourceMappingURL=index.cb62c543.js.map
