import{d as r,r as d,o as i,a3 as l,b as c,c as u,N as b,ad as y}from"./registerWidgets.db466a36.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="55eb9cf2-f027-427f-bb69-918d250f6ffc",e._sentryDebugIdIdentifier="sentry-dbid-55eb9cf2-f027-427f-bb69-918d250f6ffc")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=d(null);i(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const f=()=>n("next");return(m,t)=>(c(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=a=>f()),onKeydown:t[1]||(t[1]=y(a=>f(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.3c018778.js.map
