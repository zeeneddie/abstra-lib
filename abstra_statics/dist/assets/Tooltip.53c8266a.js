import{d as y,r as p,H as x,b as g,et as v,aC as b,e as c,eB as m,eu as B,v as w}from"./outputWidgets.eadfae9c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2662c545-30ce-42ef-a297-9d77c6518e02",t._sentryDebugIdIdentifier="sentry-dbid-2662c545-30ce-42ef-a297-9d77c6518e02")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),d=()=>{s.value=Date.now()},n=p(null),f=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(g(),v("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:d},[b(o.$slots,"default",{},void 0,!0),c("div",{class:"tooltip",style:B(u.value)},[c("span",D,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.53c8266a.js.map
