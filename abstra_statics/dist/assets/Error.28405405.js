import{d as c,K as i,b as l,c as _,x as r,N as s,z as p,O as u,Q as f,q as y}from"./registerWidgets.bbbd3e16.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9dafda25-e453-4475-a9ce-e8929a164337",e._sentryDebugIdIdentifier="sentry-dbid-9dafda25-e453-4475-a9ce-e8929a164337")}catch{}})();const a=e=>(u("data-v-d3846761"),e=e(),f(),e),h={class:"error"},b=a(()=>r("h1",{class:"error-header"},"Error",-1)),g={class:"error-body"},m={class:"error-message"},v={class:"error-details"},I=a(()=>r("span",null,"Reload",-1)),E=[I],w=c({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:o}){const t=e,d=i(()=>t.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function n(){o("reload")}return(x,D)=>(l(),_("div",h,[b,r("div",g,[r("div",m,[r("p",null,s(p(d)),1),r("p",v,s(e.error.name)+": "+s(e.error.message),1)]),r("div",{class:"error-actions"},[r("button",{class:"btn btn-primary",onClick:n},E)])])]))}});const B=y(w,[["__scopeId","data-v-d3846761"]]);export{B as E};
//# sourceMappingURL=Error.28405405.js.map
