import{n,a as i}from"./string.651f1f90.js";import"./outputWidgets.9bb29762.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="14e73341-d8fc-47d0-a71c-69a99f26b49b",e._sentryDebugIdIdentifier="sentry-dbid-14e73341-d8fc-47d0-a71c-69a99f26b49b")}catch{}})();const o=["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"];function s(e){return e.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:e.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:e.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function c(e){if(!s(e).valid)throw new Error("Invalid filename");const a=e.slice(0,-3);return n(a,!0,!0,!0,!0)+".py"}function m(e){return n(e,!0,!0,!0,!0)+".py"}function l(e){return e.trim().length===0?{valid:!1,reason:"Variable name cannot be empty"}:/^[a-zA-Z_]/.test(e)?o.includes(e)?{valid:!1,reason:"Variable name cannot be a Python keyword"}:{valid:!0}:{valid:!1,reason:"Variable name must start with a letter or underscore"}}function b(e){if(!l(e).valid)throw new Error("Invalid variable name");return n(e,!1,!0,!1)}function d(e){return e.trim().length===0?{valid:!1,reason:"Path cannot be empty"}:{valid:!0}}function y(e){if(!d(e).valid)throw new Error("Invalid path");return e.split("/").filter(Boolean).map(r=>i(r)).join("/")}export{l as a,m as b,d as c,y as d,c as e,b as n,s as v};
//# sourceMappingURL=validations.18054e42.js.map
