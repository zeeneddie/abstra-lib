import{d as y,r as i,H as b,b as x,et as g,aC as v,e as p,eB as m,eu as B,v as w}from"./outputWidgets.4420c31f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d0eaa7ba-fe62-498e-8bb0-67dfad040cbd",t._sentryDebugIdIdentifier="sentry-dbid-d0eaa7ba-fe62-498e-8bb0-67dfad040cbd")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),f=()=>{s.value=Date.now()},n=i(null),c=()=>{var r,d,l;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((d=e.top)!=null?d:0)}px`,left:`${a+((l=e.left)!=null?l:0)}px`}},u=b(()=>{var o;return e.fixed?c():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(x(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:f},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:B(u.value)},[p("span",D,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.0c87c310.js.map
