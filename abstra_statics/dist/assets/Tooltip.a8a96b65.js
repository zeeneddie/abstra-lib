import{d as y,r as d,G as b,b as x,eu as g,dh as v,e as p,eD as m,ev as D,t as w}from"./outputWidgets.a5fcf389.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="015f1986-44df-40b9-99bc-dfb4b3729042",t._sentryDebugIdIdentifier="sentry-dbid-015f1986-44df-40b9-99bc-dfb4b3729042")}catch{}})();const B={class:"text"},h=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=d(Date.now()),f=()=>{s.value=Date.now()},n=d(null),c=()=>{var l,a,i;const o=(l=n.value)==null?void 0:l.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((a=e.top)!=null?a:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=b(()=>{var o;return e.fixed?c():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(x(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:f},[v(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:D(u.value)},[p("span",B,m(t.text),1)],4)],544))}});const I=w(h,[["__scopeId","data-v-74636348"]]);export{I as T};
//# sourceMappingURL=Tooltip.a8a96b65.js.map