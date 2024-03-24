import{d as F,H as f,G as at,r as R,J as Y,L as rt,V as i,f as v,O as _,N as M,aC as lt,aq as q,a6 as D,B as it,aF as O,D as st,ds as U,$ as J,R as B,dt as G,bI as ut,ag as ct,aI as dt,aJ as gt,aK as bt,aL as mt}from"./outputWidgets.33535317.js";import{i as ft}from"./isNumeric.75337b1e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f606a449-2582-4d06-a7b5-4666c16d92cd",t._sentryDebugIdIdentifier="sentry-dbid-f606a449-2582-4d06-a7b5-4666c16d92cd")}catch{}})();function K(t){let{prefixCls:e,value:a,current:o,offset:n=0}=t,c;return n&&(c={position:"absolute",top:`${n}00%`,left:0}),v("p",{style:c,class:_(`${e}-only-unit`,{current:o})},[a])}function vt(t,e,a){let o=t,n=0;for(;(o+10)%10!==e;)o+=a,n+=a;return n}const pt=F({compatConfig:{MODE:3},name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup(t){const e=f(()=>Number(t.value)),a=f(()=>Math.abs(t.count)),o=at({prevValue:e.value,prevCount:a.value}),n=()=>{o.prevValue=e.value,o.prevCount=a.value},c=R();return Y(e,()=>{clearTimeout(c.value),c.value=setTimeout(()=>{n()},1e3)},{flush:"post"}),rt(()=>{clearTimeout(c.value)}),()=>{let d,p={};const s=e.value;if(o.prevValue===s||Number.isNaN(s)||Number.isNaN(o.prevValue))d=[K(i(i({},t),{current:!0}))],p={transition:"none"};else{d=[];const h=s+10,g=[];for(let r=s;r<=h;r+=1)g.push(r);const l=g.findIndex(r=>r%10===o.prevValue);d=g.map((r,S)=>{const $=r%10;return K(i(i({},t),{value:$,offset:S-l,current:S===l}))});const u=o.prevCount<a.value?1:-1;p={transform:`translateY(${-vt(o.prevValue,s,u)}00%)`}}return v("span",{class:`${t.prefixCls}-only`,style:p,onTransitionend:()=>n()},[d])}}});var ht=globalThis&&globalThis.__rest||function(t,e){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(a[o[n]]=t[o[n]]);return a};const $t={prefixCls:String,count:D.any,component:String,title:D.any,show:Boolean},yt=F({compatConfig:{MODE:3},name:"ScrollNumber",inheritAttrs:!1,props:$t,setup(t,e){let{attrs:a,slots:o}=e;const{prefixCls:n}=M("scroll-number",t);return()=>{var c;const d=i(i({},t),a),{prefixCls:p,count:s,title:h,show:g,component:l="sup",class:u,style:r}=d,S=ht(d,["prefixCls","count","title","show","component","class","style"]),$=i(i({},S),{style:r,"data-show":t.show,class:_(n.value,u),title:h});let b=s;if(s&&Number(s)%1===0){const m=String(s).split("");b=m.map((I,P)=>v(pt,{prefixCls:n.value,count:Number(s),value:I,key:m.length-P},null))}r&&r.borderColor&&($.style=i(i({},r),{boxShadow:`0 0 0 1px ${r.borderColor} inset`}));const y=lt((c=o.default)===null||c===void 0?void 0:c.call(o));return y&&y.length?q(y,{class:_(`${n.value}-custom-component`)},!1):v(l,$,{default:()=>[b]})}}}),St=new O("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),Ct=new O("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),wt=new O("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),xt=new O("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),Nt=new O("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Ot=new O("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),It=t=>{const{componentCls:e,iconCls:a,antCls:o,badgeFontHeight:n,badgeShadowSize:c,badgeHeightSm:d,motionDurationSlow:p,badgeStatusSize:s,marginXS:h,badgeRibbonOffset:g}=t,l=`${o}-scroll-number`,u=`${o}-ribbon`,r=`${o}-ribbon-wrapper`,S=U(t,(b,y)=>{let{darkColor:m}=y;return{[`&${e} ${e}-color-${b}`]:{background:m,[`&:not(${e}-count)`]:{color:m}}}}),$=U(t,(b,y)=>{let{darkColor:m}=y;return{[`&${u}-color-${b}`]:{background:m,color:m}}});return{[e]:i(i(i(i({},J(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{zIndex:t.badgeZIndex,minWidth:t.badgeHeight,height:t.badgeHeight,color:t.badgeTextColor,fontWeight:t.badgeFontWeight,fontSize:t.badgeFontSize,lineHeight:`${t.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:t.badgeHeight/2,boxShadow:`0 0 0 ${c}px ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:d,height:d,fontSize:t.badgeFontSizeSm,lineHeight:`${d}px`,borderRadius:d/2},[`${e}-multiple-words`]:{padding:`0 ${t.paddingXS}px`},[`${e}-dot`]:{zIndex:t.badgeZIndex,width:t.badgeDotSize,minWidth:t.badgeDotSize,height:t.badgeDotSize,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${c}px ${t.badgeShadowColor}`},[`${e}-dot${l}`]:{transition:`background ${p}`},[`${e}-count, ${e}-dot, ${l}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${a}-spin`]:{animationName:Ot,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:s,height:s,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{overflow:"visible",color:t.colorPrimary,backgroundColor:t.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:c,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:St,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:h,color:t.colorText,fontSize:t.fontSize}}}),S),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:Ct,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:wt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:xt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:Nt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${l}-custom-component, ${e}-count`]:{transform:"none"},[`${l}-custom-component, ${l}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${l}`]:{overflow:"hidden",[`${l}-only`]:{position:"relative",display:"inline-block",height:t.badgeHeight,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${l}-only-unit`]:{height:t.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${l}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${l}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${r}`]:{position:"relative"},[`${u}`]:i(i(i(i({},J(t)),{position:"absolute",top:h,padding:`0 ${t.paddingXS}px`,color:t.colorPrimary,lineHeight:`${n}px`,whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${u}-text`]:{color:t.colorTextLightSolid},[`${u}-corner`]:{position:"absolute",top:"100%",width:g,height:g,color:"currentcolor",border:`${g/2}px solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),$),{[`&${u}-placement-end`]:{insetInlineEnd:-g,borderEndEndRadius:0,[`${u}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${u}-placement-start`]:{insetInlineStart:-g,borderEndStartRadius:0,[`${u}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},Q=it("Badge",t=>{const{fontSize:e,lineHeight:a,fontSizeSM:o,lineWidth:n,marginXS:c,colorBorderBg:d}=t,p=Math.round(e*a),s=n,h="auto",g=p-2*s,l=t.colorBgContainer,u="normal",r=o,S=t.colorError,$=t.colorErrorHover,b=e,y=o/2,m=o,I=o/2,P=st(t,{badgeFontHeight:p,badgeShadowSize:s,badgeZIndex:h,badgeHeight:g,badgeTextColor:l,badgeFontWeight:u,badgeFontSize:r,badgeColor:S,badgeColorHover:$,badgeShadowColor:d,badgeHeightSm:b,badgeDotSize:y,badgeFontSizeSm:m,badgeStatusSize:I,badgeProcessingDuration:"1.2s",badgeRibbonOffset:c,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[It(P)]});var Pt=globalThis&&globalThis.__rest||function(t,e){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(a[o[n]]=t[o[n]]);return a};const Tt=()=>({prefix:String,color:{type:String},text:D.any,placement:{type:String,default:"end"}}),Bt=F({compatConfig:{MODE:3},name:"ABadgeRibbon",inheritAttrs:!1,props:Tt(),slots:Object,setup(t,e){let{attrs:a,slots:o}=e;const{prefixCls:n,direction:c}=M("ribbon",t),[d,p]=Q(n),s=f(()=>G(t.color,!1)),h=f(()=>[n.value,`${n.value}-placement-${t.placement}`,{[`${n.value}-rtl`]:c.value==="rtl",[`${n.value}-color-${t.color}`]:s.value}]);return()=>{var g,l;const{class:u,style:r}=a,S=Pt(a,["class","style"]),$={},b={};return t.color&&!s.value&&($.background=t.color,b.color=t.color),d(v("div",B({class:`${n.value}-wrapper ${p.value}`},S),[(g=o.default)===null||g===void 0?void 0:g.call(o),v("div",{class:[h.value,u,p.value],style:i(i({},$),r)},[v("span",{class:`${n.value}-text`},[t.text||((l=o.text)===null||l===void 0?void 0:l.call(o))]),v("div",{class:`${n.value}-corner`,style:b},null)])]))}}}),Dt=()=>({count:D.any.def(null),showZero:{type:Boolean,default:void 0},overflowCount:{type:Number,default:99},dot:{type:Boolean,default:void 0},prefixCls:String,scrollNumberPrefixCls:String,status:{type:String},size:{type:String,default:"default"},color:String,text:D.any,offset:Array,numberStyle:{type:Object,default:void 0},title:String}),Ht=F({compatConfig:{MODE:3},name:"ABadge",Ribbon:Bt,inheritAttrs:!1,props:Dt(),slots:Object,setup(t,e){let{slots:a,attrs:o}=e;const{prefixCls:n,direction:c}=M("badge",t),[d,p]=Q(n),s=f(()=>t.count>t.overflowCount?`${t.overflowCount}+`:t.count),h=f(()=>s.value==="0"||s.value===0),g=f(()=>t.count===null||h.value&&!t.showZero),l=f(()=>(t.status!==null&&t.status!==void 0||t.color!==null&&t.color!==void 0)&&g.value),u=f(()=>t.dot&&!h.value),r=f(()=>u.value?"":s.value),S=f(()=>(r.value===null||r.value===void 0||r.value===""||h.value&&!t.showZero)&&!u.value),$=R(t.count),b=R(r.value),y=R(u.value);Y([()=>t.count,r,u],()=>{S.value||($.value=t.count,b.value=r.value,y.value=u.value)},{immediate:!0});const m=f(()=>G(t.color,!1)),I=f(()=>({[`${n.value}-status-dot`]:l.value,[`${n.value}-status-${t.status}`]:!!t.status,[`${n.value}-color-${t.color}`]:m.value})),P=f(()=>t.color&&!m.value?{background:t.color,color:t.color}:{}),k=f(()=>({[`${n.value}-dot`]:y.value,[`${n.value}-count`]:!y.value,[`${n.value}-count-sm`]:t.size==="small",[`${n.value}-multiple-words`]:!y.value&&b.value&&b.value.toString().length>1,[`${n.value}-status-${t.status}`]:!!t.status,[`${n.value}-color-${t.color}`]:m.value}));return()=>{var z,W;const{offset:N,title:Z,color:V}=t,L=o.style,j=ut(a,t,"text"),w=n.value,C=$.value;let x=ct((z=a.default)===null||z===void 0?void 0:z.call(a));x=x.length?x:null;const A=!!(!S.value||a.count),E=(()=>{if(!N)return i({},L);const T={marginTop:ft(N[1])?`${N[1]}px`:N[1]};return c.value==="rtl"?T.left=`${parseInt(N[0],10)}px`:T.right=`${-parseInt(N[0],10)}px`,i(i({},T),L)})(),tt=Z!=null?Z:typeof C=="string"||typeof C=="number"?C:void 0,et=A||!j?null:v("span",{class:`${w}-status-text`},[j]),ot=typeof C=="object"||C===void 0&&a.count?q(C!=null?C:(W=a.count)===null||W===void 0?void 0:W.call(a),{style:E},!1):null,X=_(w,{[`${w}-status`]:l.value,[`${w}-not-a-wrapper`]:!x,[`${w}-rtl`]:c.value==="rtl"},o.class,p.value);if(!x&&l.value){const T=E.color;return d(v("span",B(B({},o),{},{class:X,style:E}),[v("span",{class:I.value,style:P.value},null),v("span",{style:{color:T},class:`${w}-status-text`},[j])]))}const nt=dt(x?`${w}-zoom`:"",{appear:!1});let H=i(i({},E),t.numberStyle);return V&&!m.value&&(H=H||{},H.background=V),d(v("span",B(B({},o),{},{class:X}),[x,v(gt,nt,{default:()=>[bt(v(yt,{prefixCls:t.scrollNumberPrefixCls,show:A,class:k.value,count:b.value,title:tt,style:H,key:"scrollNumber"},{default:()=>[ot]}),[[mt,A]])]}),et]))}}});export{Ht as B,Bt as R};
//# sourceMappingURL=Badge.8c368916.js.map