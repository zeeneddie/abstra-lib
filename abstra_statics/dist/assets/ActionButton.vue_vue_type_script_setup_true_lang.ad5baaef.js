import{d as r,r as i,o as l,a3 as c,b as u,c as f,N as b,ad as y}from"./registerWidgets.1590c05e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8bd2bbe5-af2d-4a83-9840-eae19c3b8eac",e._sentryDebugIdIdentifier="sentry-dbid-8bd2bbe5-af2d-4a83-9840-eae19c3b8eac")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,a=i(null);l(()=>{a.value&&o.action.setElement(a.value),c.addAction(o.action)});const s=()=>n("next");return(m,t)=>(u(),f("button",{ref_key:"element",ref:a,class:"next-button",onClick:t[0]||(t[0]=d=>s()),onKeydown:t[1]||(t[1]=y(d=>s(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.ad5baaef.js.map