import{d as c,K as i,b as l,c as _,x as r,N as s,z as p,O as u,Q as f,q as y}from"./registerWidgets.9f96e537.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="45c4ae36-4a89-47da-8f69-d2a4a95b611d",e._sentryDebugIdIdentifier="sentry-dbid-45c4ae36-4a89-47da-8f69-d2a4a95b611d")}catch{}})();const t=e=>(u("data-v-d3846761"),e=e(),f(),e),b={class:"error"},h=t(()=>r("h1",{class:"error-header"},"Error",-1)),g={class:"error-body"},m={class:"error-message"},v={class:"error-details"},I=t(()=>r("span",null,"Reload",-1)),E=[I],w=c({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:o}){const a=e,d=i(()=>a.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function n(){o("reload")}return(x,D)=>(l(),_("div",b,[h,r("div",g,[r("div",m,[r("p",null,s(p(d)),1),r("p",v,s(e.error.name)+": "+s(e.error.message),1)]),r("div",{class:"error-actions"},[r("button",{class:"btn btn-primary",onClick:n},E)])])]))}});const B=y(w,[["__scopeId","data-v-d3846761"]]);export{B as E};
//# sourceMappingURL=Error.de79aae8.js.map