import{d as y,r as f,H as x,b as g,er as v,aL as b,e as p,eA as m,et as w,v as B}from"./registerWidgets.2031932d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="844ff41f-a187-433e-82ee-898fc4502d29",t._sentryDebugIdIdentifier="sentry-dbid-844ff41f-a187-433e-82ee-898fc4502d29")}catch{}})();const D={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=f(Date.now()),d=()=>{s.value=Date.now()},n=f(null),c=()=>{var a,l,i;const o=(a=n.value)==null?void 0:a.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?c():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(g(),v("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:d},[b(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:w(u.value)},[p("span",D,m(t.text),1)],4)],544))}});const h=B(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.affb50a6.js.map
