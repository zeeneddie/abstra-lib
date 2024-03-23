import{C as m}from"./router.e97d6286.js";import{f as y,eG as C,f6 as v,d as O,b as i,c,u as a,ex as I}from"./outputWidgets.74b0761d.js";import{C as w}from"./CheckCircleFilled.2522df8c.js";import{L as j}from"./LoadingOutlined.bc24ba86.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="8e3f4ed0-d9d6-4179-b620-dcfd089cbc31",r._sentryDebugIdIdentifier="sentry-dbid-8e3f4ed0-d9d6-4179-b620-dcfd089cbc31")}catch{}})();var S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};const _=S;function b(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){A(r,s,t[s])})}return r}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var l=function(e,t){var n=b({},e,t.attrs);return y(C,b({},n,{icon:v}),null)};l.displayName="CloseCircleFilled";l.inheritAttrs=!1;const F=l;function h(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){P(r,s,t[s])})}return r}function P(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var u=function(e,t){var n=h({},e,t.attrs);return y(C,h({},n,{icon:_}),null)};u.displayName="MinusCircleFilled";u.inheritAttrs=!1;const D=u;class k{async list({projectId:e,...t}){var g,p;const n={...t,offset:(g=t.offset)==null?void 0:g.toString(),limit:(p=t.limit)==null?void 0:p.toString()};Object.keys(n).forEach(o=>n[o]===void 0&&delete n[o]);const s=await m.get(`projects/${e}/executions`,n);return{executions:s.executions.map(o=>f.from(o)),totalCount:s.totalCount}}async fetchLogs(e,t){const n=await m.get(`projects/${e}/executions/${t}/logs`);return d.from(n)}}class d{constructor(e){this.dto=e}static from(e){return new d(e)}get entries(){return this.dto.sort((e,t)=>e.sequence-t.sequence).filter(e=>e.event!=="form-message")}}class f{constructor(e){this.dto=e}static from(e){return new f(e)}get id(){return this.dto.id}get shortId(){return this.dto.id.slice(0,8)}get createdAt(){return new Date(this.dto.createdAt)}get updatedAt(){return new Date(this.dto.updatedAt)}get status(){return this.dto.status}get context(){return this.dto.context}get buildId(){return this.dto.buildId}get stageId(){return this.dto.stageId}get duration_seconds(){return(this.updatedAt.getTime()-this.createdAt.getTime())/1e3}get stageRunId(){return this.dto.stageRunId}get projectId(){return this.dto.projectId}}const N=O({__name:"ExecutionStatusIcon",props:{status:{}},setup(r){return(e,t)=>e.status==="finished"?(i(),c(a(w),{key:0,style:{color:"#33b891"}})):e.status==="failed"?(i(),c(a(F),{key:1,style:{color:"#fa675c"}})):e.status==="abandoned"||e.status==="lock-failed"?(i(),c(a(D),{key:2,style:{color:"#f69220"}})):e.status==="running"?(i(),c(a(j),{key:3})):I("",!0)}});export{k as E,N as _};
//# sourceMappingURL=ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.0b10be30.js.map
