import{d as y,r as p,G as x,b as g,eu as v,dh as b,e as d,eD as m,ev as D,t as w}from"./outputWidgets.4ac7ed6a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5479ce09-47e6-4466-921c-5613805114e2",t._sentryDebugIdIdentifier="sentry-dbid-5479ce09-47e6-4466-921c-5613805114e2")}catch{}})();const B={class:"text"},h=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=p(Date.now()),c=()=>{s.value=Date.now()},n=p(null),u=()=>{var l,a,i;const o=(l=n.value)==null?void 0:l.getBoundingClientRect();if(!o)return{};const{x:r,y:_}=o;return s.value,{position:"fixed",top:`${_+((a=e.top)!=null?a:0)}px`,left:`${r+((i=e.left)!=null?i:0)}px`}},f=x(()=>{var o;return e.fixed?u():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,r)=>(g(),v("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[b(o.$slots,"default",{},void 0,!0),d("div",{class:"tooltip",style:D(f.value)},[d("span",B,m(t.text),1)],4)],544))}});const I=w(h,[["__scopeId","data-v-74636348"]]);export{I as T};
//# sourceMappingURL=Tooltip.ab80c44c.js.map
