import"./registerWidgets.d6e66474.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="99778b32-7495-4d5e-87d5-d2953c9e09dc",r._sentryDebugIdIdentifier="sentry-dbid-99778b32-7495-4d5e-87d5-d2953c9e09dc")}catch{}})();class s{static get(e){try{const t=localStorage.getItem(e);return t&&JSON.parse(t)}catch{return null}}static set(e,t){localStorage.setItem(e,JSON.stringify(t))}static pop(e){const t=s.get(e);return s.remove(e),t}static remove(e){localStorage.removeItem(e)}}export{s as S};
//# sourceMappingURL=storage.d7eb729a.js.map
