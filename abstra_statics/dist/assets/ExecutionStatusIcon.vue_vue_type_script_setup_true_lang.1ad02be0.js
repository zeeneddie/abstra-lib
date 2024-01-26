import{C as h}from"./router.4543b4c7.js";import{f as u,eE as l,f1 as w,f2 as I,d as j,b as s,c as a,u as c,ev as S}from"./outputWidgets.20c46f71.js";import{C as P}from"./CheckCircleFilled.e70f3f73.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="1452b688-eb2c-49a2-9c56-5cc2d5a813bb",r._sentryDebugIdIdentifier="sentry-dbid-1452b688-eb2c-49a2-9c56-5cc2d5a813bb")}catch{}})();var _={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};const A=_;function O(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){F(r,i,t[i])})}return r}function F(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var d=function(e,t){var n=O({},e,t.attrs);return u(l,O({},n,{icon:w}),null)};d.displayName="CloseCircleFilled";d.inheritAttrs=!1;const D=d;function v(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){E(r,i,t[i])})}return r}function E(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var f=function(e,t){var n=v({},e,t.attrs);return u(l,v({},n,{icon:I}),null)};f.displayName="LoadingOutlined";f.inheritAttrs=!1;const $=f;function C(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){M(r,i,t[i])})}return r}function M(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var g=function(e,t){var n=C({},e,t.attrs);return u(l,C({},n,{icon:A}),null)};g.displayName="MinusCircleFilled";g.inheritAttrs=!1;const x=g;class B{async list({projectId:e,...t}){var m,y;const n={...t,offset:(m=t.offset)==null?void 0:m.toString(),limit:(y=t.limit)==null?void 0:y.toString()};Object.keys(n).forEach(o=>n[o]===void 0&&delete n[o]);const i=await h.get(`projects/${e}/executions`,n);return{executions:i.executions.map(o=>b.from(o)),totalCount:i.totalCount}}async fetchLogs(e,t){const n=await h.get(`projects/${e}/executions/${t}/logs`);return p.from(n)}}class p{constructor(e){this.dto=e}static from(e){return new p(e)}get entries(){return this.dto.sort((e,t)=>e.sequence-t.sequence).filter(e=>e.event!=="form-message")}}class b{constructor(e){this.dto=e}static from(e){return new b(e)}get id(){return this.dto.id}get shortId(){return this.dto.id.slice(0,8)}get createdAt(){return new Date(this.dto.createdAt)}get updatedAt(){return new Date(this.dto.updatedAt)}get status(){return this.dto.status}get context(){return this.dto.context}get buildId(){return this.dto.buildId}get stageId(){return this.dto.stageId}get duration_seconds(){return(this.updatedAt.getTime()-this.createdAt.getTime())/1e3}get stageRunId(){return this.dto.stageRunId}get projectId(){return this.dto.projectId}}const R=j({__name:"ExecutionStatusIcon",props:{status:{}},setup(r){return(e,t)=>e.status==="finished"?(s(),a(c(P),{key:0,style:{color:"#33b891"}})):e.status==="failed"?(s(),a(c(D),{key:1,style:{color:"#fa675c"}})):e.status==="abandoned"||e.status==="lock-failed"?(s(),a(c(x),{key:2,style:{color:"#f69220"}})):e.status==="running"?(s(),a(c($),{key:3})):S("",!0)}});export{B as E,R as _};
//# sourceMappingURL=ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1ad02be0.js.map
