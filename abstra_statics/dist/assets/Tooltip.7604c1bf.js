import{d as b,r as f,J as y,b as x,et as g,aN as v,e as p,eC as m,ev as w,x as B}from"./outputWidgets.b56466d5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f0fa968c-f7cf-40c9-95ae-b34bb2944bbf",t._sentryDebugIdIdentifier="sentry-dbid-f0fa968c-f7cf-40c9-95ae-b34bb2944bbf")}catch{}})();const D={class:"text"},k=b({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=f(Date.now()),c=()=>{s.value=Date.now()},n=f(null),d=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},u=y(()=>{var o;return e.fixed?d():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(x(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:w(u.value)},[p("span",D,m(t.text),1)],4)],544))}});const h=B(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.7604c1bf.js.map
