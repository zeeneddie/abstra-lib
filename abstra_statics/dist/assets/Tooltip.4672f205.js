import{d as x,r as i,J as y,b as m,c as v,A as B,v as c,L as g,z as k,y as $,p as b}from"./registerWidgets.04dc761e.js";const h={class:"text"},S=x({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(o){const e=o,s=i(Date.now()),u=()=>{s.value=Date.now()},n=i(null),f=()=>{var r,l,p;const t=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!t)return{};const{x:a,y:_}=t;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((p=e.left)!=null?p:0)}px`}},d=y(()=>{var t;return e.fixed?f():{left:`${(t=e.left)!=null?t:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(t,a)=>(m(),v("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:u},[B(t.$slots,"default",{},void 0,!0),c("div",{class:"tooltip",style:k($(d))},[c("span",h,g(o.text),1)],4)],544))}});const D=b(S,[["__scopeId","data-v-74636348"]]);export{D as T};
//# sourceMappingURL=Tooltip.4672f205.js.map