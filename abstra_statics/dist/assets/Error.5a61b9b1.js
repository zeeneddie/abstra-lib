import{d as c,K as i,b as l,c as _,x as r,N as s,O as p,Q as f,q as u}from"./registerWidgets.f519f117.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f71517d7-ec85-415f-a5f7-5fc4867862f9",e._sentryDebugIdIdentifier="sentry-dbid-f71517d7-ec85-415f-a5f7-5fc4867862f9")}catch{}})();const a=e=>(p("data-v-d3846761"),e=e(),f(),e),y={class:"error"},h=a(()=>r("h1",{class:"error-header"},"Error",-1)),b={class:"error-body"},g={class:"error-message"},m={class:"error-details"},v=a(()=>r("span",null,"Reload",-1)),I=[v],E=c({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:o}){const t=e,d=i(()=>t.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function n(){o("reload")}return(w,x)=>(l(),_("div",y,[h,r("div",b,[r("div",g,[r("p",null,s(d.value),1),r("p",m,s(e.error.name)+": "+s(e.error.message),1)]),r("div",{class:"error-actions"},[r("button",{class:"btn btn-primary",onClick:n},I)])])]))}});const k=u(E,[["__scopeId","data-v-d3846761"]]);export{k as E};
//# sourceMappingURL=Error.5a61b9b1.js.map
