import{d as c,F as i,b as l,c as _,er as r,eA as s,eB as p,eC as u,t as f}from"./registerWidgets.eb5d1044.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="a39a5685-a37f-46a9-b639-e29ed351dabe",e._sentryDebugIdIdentifier="sentry-dbid-a39a5685-a37f-46a9-b639-e29ed351dabe")}catch{}})();const a=e=>(p("data-v-d3846761"),e=e(),u(),e),b={class:"error"},y=a(()=>r("h1",{class:"error-header"},"Error",-1)),h={class:"error-body"},g={class:"error-message"},m={class:"error-details"},v=a(()=>r("span",null,"Reload",-1)),I=[v],E=c({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:o}){const t=e,d=i(()=>t.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function n(){o("reload")}return(w,B)=>(l(),_("div",b,[y,r("div",h,[r("div",g,[r("p",null,s(d.value),1),r("p",m,s(e.error.name)+": "+s(e.error.message),1)]),r("div",{class:"error-actions"},[r("button",{class:"btn btn-primary",onClick:n},I)])])]))}});const k=f(E,[["__scopeId","data-v-d3846761"]]);export{k as E};
//# sourceMappingURL=Error.09dba021.js.map
