import{d as n,J as l,b as _,c as i,v as e,L as o,y as p,N as u,O as h,p as m}from"./registerWidgets.990552e9.js";const s=r=>(u("data-v-d3846761"),r=r(),h(),r),v={class:"error"},y=s(()=>e("h1",{class:"error-header"},"Error",-1)),f={class:"error-body"},g={class:"error-message"},E={class:"error-details"},b=s(()=>e("span",null,"Reload",-1)),x=[b],B=n({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(r,{emit:t}){const a=r,c=l(()=>a.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function d(){t("reload")}return(I,S)=>(_(),i("div",v,[y,e("div",f,[e("div",g,[e("p",null,o(p(c)),1),e("p",E,o(r.error.name)+": "+o(r.error.message),1)]),e("div",{class:"error-actions"},[e("button",{class:"btn btn-primary",onClick:d},x)])])]))}});const O=m(B,[["__scopeId","data-v-d3846761"]]);export{O as E};
//# sourceMappingURL=Error.ecbd86d2.js.map
