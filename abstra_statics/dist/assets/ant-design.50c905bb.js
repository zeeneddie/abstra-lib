import{eN as n}from"./outputWidgets.174c2ebc.js";import"./index.80e40b83.js";import{M as y}from"./Modal.85d9af85.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f29caf43-c68e-408d-ace3-6437aca383f8",e._sentryDebugIdIdentifier="sentry-dbid-f29caf43-c68e-408d-ace3-6437aca383f8")}catch{}})();function c(e){return n.exports.isArray(e)?e.length===0?"[ ]":"[ ... ]":n.exports.isObject(e)?Object.keys(e).length===0?"{ }":"{ ... }":n.exports.isString(e)?`'${e}'`:n.exports.isUndefined(e)||n.exports.isNull(e)?"None":e===!0?"True":e===!1?"False":`${e}`}function o(e){if(n.exports.isArray(e))return"array";if(n.exports.isObject(e))return"object";throw new Error("treeKey called with non-object and non-array")}function u(e,r=[],t){const f=t?`'${t}': ${c(e)}`:c(e);if(n.exports.isArray(e)){const i=o(e);return[{title:f,key:[...r,i].join("/"),children:e.flatMap((s,l)=>u(s,[...r,i,`${l}`]))}]}else if(n.exports.isObject(e)){const i=o(e);return[{title:f,key:[...r,i].join("/"),children:Object.entries(e).flatMap(([s,l])=>u(l,[...r,i,s],s))}]}else return[{title:f,key:r.join("/"),children:[]}]}function k(e,r){return new Promise(t=>{y.confirm({title:e,onOk:()=>t(!0),okText:r==null?void 0:r.okText,onCancel:()=>t(!1),cancelText:r==null?void 0:r.cancelText})})}export{k as a,u as t};
//# sourceMappingURL=ant-design.50c905bb.js.map
