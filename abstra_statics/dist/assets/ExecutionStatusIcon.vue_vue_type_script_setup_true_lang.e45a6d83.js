import{C as y}from"./router.8e23138d.js";import{f as l,eH as u,f6 as w,f7 as I,d as j,b as o,c,u as a,ew as S}from"./outputWidgets.225dd371.js";import{L as P}from"./LoadingOutlined.0b4b4b83.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="6240a898-4b06-4ba4-8048-38084d73bc45",r._sentryDebugIdIdentifier="sentry-dbid-6240a898-4b06-4ba4-8048-38084d73bc45")}catch{}})();var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};const _=F;function C(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){A(r,i,t[i])})}return r}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var d=function(e,t){var n=C({},e,t.attrs);return l(u,C({},n,{icon:w}),null)};d.displayName="CheckCircleFilled";d.inheritAttrs=!1;const D=d;function O(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){E(r,i,t[i])})}return r}function E(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var f=function(e,t){var n=O({},e,t.attrs);return l(u,O({},n,{icon:I}),null)};f.displayName="CloseCircleFilled";f.inheritAttrs=!1;const $=f;function v(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){k(r,i,t[i])})}return r}function k(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var g=function(e,t){var n=v({},e,t.attrs);return l(u,v({},n,{icon:_}),null)};g.displayName="MinusCircleFilled";g.inheritAttrs=!1;const M=g;class L{async list({projectId:e,...t}){var m,h;const n={...t,offset:(m=t.offset)==null?void 0:m.toString(),limit:(h=t.limit)==null?void 0:h.toString()};Object.keys(n).forEach(s=>n[s]===void 0&&delete n[s]);const i=await y.get(`projects/${e}/executions`,n);return{executions:i.executions.map(s=>b.from(s)),totalCount:i.totalCount}}async fetchLogs(e,t){const n=await y.get(`projects/${e}/executions/${t}/logs`);return p.from(n)}}class p{constructor(e){this.dto=e}static from(e){return new p(e)}get entries(){return this.dto.sort((e,t)=>e.sequence-t.sequence).filter(e=>e.event!=="form-message")}}class b{constructor(e){this.dto=e}static from(e){return new b(e)}get id(){return this.dto.id}get shortId(){return this.dto.id.slice(0,8)}get createdAt(){return new Date(this.dto.createdAt)}get updatedAt(){return new Date(this.dto.updatedAt)}get status(){return this.dto.status}get context(){return this.dto.context}get buildId(){return this.dto.buildId}get stageId(){return this.dto.stageId}get duration_seconds(){return(this.updatedAt.getTime()-this.createdAt.getTime())/1e3}get stageRunId(){return this.dto.stageRunId}get projectId(){return this.dto.projectId}}const R=j({__name:"ExecutionStatusIcon",props:{status:{}},setup(r){return(e,t)=>e.status==="finished"?(o(),c(a(D),{key:0,style:{color:"#33b891"}})):e.status==="failed"?(o(),c(a($),{key:1,style:{color:"#fa675c"}})):e.status==="abandoned"||e.status==="lock-failed"?(o(),c(a(M),{key:2,style:{color:"#f69220"}})):e.status==="running"?(o(),c(a(P),{key:3})):S("",!0)}});export{L as E,R as _};
//# sourceMappingURL=ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.e45a6d83.js.map
