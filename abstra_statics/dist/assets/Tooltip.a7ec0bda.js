import{d as y,r as c,H as x,b,et as g,aC as v,e as f,eB as m,eu as B,v as w}from"./outputWidgets.045188bd.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fee435d7-78af-42c8-83bc-bf93fa846cc1",t._sentryDebugIdIdentifier="sentry-dbid-fee435d7-78af-42c8-83bc-bf93fa846cc1")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=c(Date.now()),p=()=>{s.value=Date.now()},n=c(null),d=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?d():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:p},[v(o.$slots,"default",{},void 0,!0),f("div",{class:"tooltip",style:B(u.value)},[f("span",D,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.a7ec0bda.js.map
