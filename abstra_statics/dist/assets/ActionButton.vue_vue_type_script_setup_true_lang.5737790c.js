import{d as r,r as i,o as c,eO as l,b as f,er as u,eA as b,eM as p}from"./registerWidgets.faec4901.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="33cb5dba-765d-4e00-bcf5-c78fda3d4ec7",e._sentryDebugIdIdentifier="sentry-dbid-33cb5dba-765d-4e00-bcf5-c78fda3d4ec7")}catch{}})();const m=r({__name:"ActionButton",props:{action:{},displayName:{}},emits:["click"],setup(e,{emit:n}){const o=e,s=i(null);return c(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)}),(d,t)=>(f(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=a=>n("click")),onKeydown:t[1]||(t[1]=p(a=>n("click"),["enter"]))},b(d.displayName),545))}});export{m as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.5737790c.js.map
