import{d as y,r as i,G as x,b as g,eu as v,as as b,e as f,eD as m,ev as D,t as w}from"./outputWidgets.555d9e11.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="48f7e531-65ef-4fd2-986d-f7163a6d5a31",t._sentryDebugIdIdentifier="sentry-dbid-48f7e531-65ef-4fd2-986d-f7163a6d5a31")}catch{}})();const B={class:"text"},k=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),p=()=>{s.value=Date.now()},n=i(null),u=()=>{var r,l,d;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((d=e.left)!=null?d:0)}px`}},c=x(()=>{var o;return e.fixed?u():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(g(),v("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:p},[b(o.$slots,"default",{},void 0,!0),f("div",{class:"tooltip",style:D(c.value)},[f("span",B,m(t.text),1)],4)],544))}});const h=w(k,[["__scopeId","data-v-74636348"]]);export{h as T};
//# sourceMappingURL=Tooltip.b62f5600.js.map
