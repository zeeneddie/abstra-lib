import{d as y,r as p,J as x,b,et as g,aN as v,e as d,eC as m,ev as w,x as B}from"./outputWidgets.75a5b0b9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f49290a0-5284-47be-990c-50386b25a28a",t._sentryDebugIdIdentifier="sentry-dbid-f49290a0-5284-47be-990c-50386b25a28a")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),c=()=>{s.value=Date.now()},n=p(null),f=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(b(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[v(o.$slots,"default",{},void 0,!0),d("div",{class:"tooltip",style:w(u.value)},[d("span",D,m(t.text),1)],4)],544))}});const h=B(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.b03bfe8e.js.map