(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="c252f328-1d84-4003-912c-8d7d899bb4db",e._sentryDebugIdIdentifier="sentry-dbid-c252f328-1d84-4003-912c-8d7d899bb4db")}catch{}})();function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidCharacterError";var s=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new i("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,d=0,o=0,c="";n=r.charAt(o++);~n&&(t=d%4?64*t+n:n,d++%4)?c+=String.fromCharCode(255&t>>(-2*d&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return c};function f(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(s(t).replace(/(.)/g,function(n,d){var o=d.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(r)}catch{return s(r)}}function a(e){this.message=e}function l(e,r){if(typeof e!="string")throw new a("Invalid token specified");var t=(r=r||{}).header===!0?0:1;try{return JSON.parse(f(e.split(".")[t]))}catch(n){throw new a("Invalid token specified: "+n.message)}}a.prototype=new Error,a.prototype.name="InvalidTokenError";export{l as o};
//# sourceMappingURL=jwt-decode.esm.74bd4619.js.map