import"./outputWidgets.a70357a7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="399a9114-444c-403c-9986-dc839ee986c6",e._sentryDebugIdIdentifier="sentry-dbid-399a9114-444c-403c-9986-dc839ee986c6")}catch{}})();function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e,a,n=!1,t=!0,r=!1){const o=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=r?o.replace(/[^a-zA-Z0-9/]/g,"_"):o.replace(/[^a-zA-Z0-9]/g,"_"),l=n?s:s.replace(/_+/g,"_");return a?l:l.replace(/_$/,"")}function f(e){var c;const n=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,r=n.match(t);return(c=r==null?void 0:r.join("-"))!=null?c:""}function g(e){try{return{valid:!0,parsed:JSON.parse(e)}}catch(a){return{valid:!1,message:a.message}}}export{f as a,u as c,d as n,g as v};
//# sourceMappingURL=string.5b237c20.js.map
