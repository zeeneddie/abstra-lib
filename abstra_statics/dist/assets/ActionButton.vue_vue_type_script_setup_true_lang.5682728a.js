import{d as r,r as i,o as l,a5 as u,b as c,c as b,N as f,af as y}from"./registerWidgets.89616af0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="13633866-a7d8-4431-9716-299dbbbbcd22",e._sentryDebugIdIdentifier="sentry-dbid-13633866-a7d8-4431-9716-299dbbbbcd22")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);l(()=>{s.value&&o.action.setElement(s.value),u.addAction(o.action)});const a=()=>n("next");return(m,t)=>(c(),b("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=d=>a()),onKeydown:t[1]||(t[1]=y(d=>a(),["enter"]))},f(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.5682728a.js.map
