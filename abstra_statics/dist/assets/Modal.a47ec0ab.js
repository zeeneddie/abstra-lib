import{d as L,$ as A,an as M,L as R,cR as U,ab as $,N as P,f as r,U as w,bu as z,Q as c,aV as N,cS as V,cT as W,x as q,a5 as d,a2 as f,bO as B,cU as Q,bq as X}from"./outputWidgets.4dca5506.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[l]="00116ac7-c1da-4d02-89ee-0c63d6e36583",e._sentryDebugIdIdentifier="sentry-dbid-00116ac7-c1da-4d02-89ee-0c63d6e36583")}catch{}})();var Y=globalThis&&globalThis.__rest||function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};let g;const G=e=>{g={x:e.pageX,y:e.pageY},setTimeout(()=>g=null,100)};W()&&q(document.documentElement,"click",G,!0);const H=()=>({prefixCls:String,visible:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},confirmLoading:{type:Boolean,default:void 0},title:d.any,closable:{type:Boolean,default:void 0},closeIcon:d.any,onOk:Function,onCancel:Function,"onUpdate:visible":Function,"onUpdate:open":Function,onChange:Function,afterClose:Function,centered:{type:Boolean,default:void 0},width:[String,Number],footer:d.any,okText:d.any,okType:String,cancelText:d.any,icon:d.any,maskClosable:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},okButtonProps:f(),cancelButtonProps:f(),destroyOnClose:{type:Boolean,default:void 0},wrapClassName:String,maskTransitionName:String,transitionName:String,getContainer:{type:[String,Function,Boolean,Object],default:void 0},zIndex:Number,bodyStyle:f(),maskStyle:f(),mask:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},wrapProps:Object,focusTriggerAfterClose:{type:Boolean,default:void 0},modalRender:Function,mousePosition:f()}),K=L({compatConfig:{MODE:3},name:"AModal",inheritAttrs:!1,props:A(H(),{width:520,confirmLoading:!1,okType:"primary"}),setup(e,l){let{emit:a,slots:n,attrs:t}=l;const[v]=M("Modal"),{prefixCls:i,rootPrefixCls:b,direction:O,getPopupContainer:p}=R("modal",e),[S,C]=U(i);$(e.visible===void 0);const T=o=>{a("update:visible",!1),a("update:open",!1),a("cancel",o),a("change",!1)},h=o=>{a("ok",o)},I=()=>{var o,s;const{okText:k=(o=n.okText)===null||o===void 0?void 0:o.call(n),okType:m,cancelText:u=(s=n.cancelText)===null||s===void 0?void 0:s.call(n),confirmLoading:y}=e;return r(X,null,[r(B,c({onClick:T},e.cancelButtonProps),{default:()=>[u||v.value.cancelText]}),r(B,c(c({},Q(m)),{},{loading:y,onClick:h},e.okButtonProps),{default:()=>[k||v.value.okText]})])};return()=>{var o,s;const{prefixCls:k,visible:m,open:u,wrapClassName:y,centered:_,getContainer:F,closeIcon:j=(o=n.closeIcon)===null||o===void 0?void 0:o.call(n),focusTriggerAfterClose:D=!0}=e,x=Y(e,["prefixCls","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),E=P(y,{[`${i.value}-centered`]:!!_,[`${i.value}-wrap-rtl`]:O.value==="rtl"});return S(r(V,c(c(c({},x),t),{},{rootClassName:C.value,class:P(C.value,t.class),getContainer:F||(p==null?void 0:p.value),prefixCls:i.value,wrapClassName:E,visible:u!=null?u:m,onClose:T,focusTriggerAfterClose:D,transitionName:N(b.value,"zoom",e.transitionName),maskTransitionName:N(b.value,"fade",e.maskTransitionName),mousePosition:(s=x.mousePosition)!==null&&s!==void 0?s:g}),w(w({},n),{footer:n.footer||I,closeIcon:()=>r("span",{class:`${i.value}-close-x`},[j||r(z,{class:`${i.value}-close-icon`},null)])})))}}});export{K as M};
//# sourceMappingURL=Modal.a47ec0ab.js.map