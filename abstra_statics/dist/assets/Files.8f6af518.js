var u=Object.defineProperty;var y=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{d as f,eA as g,J as w,b as _,c as b,u as h}from"./outputWidgets.b13a87c2.js";import"./console.d76c010c.js";import"./index.b8915c7f.js";import{C as k}from"./gateway.f581ef9f.js";import{A as v}from"./activeRecord.f5a2d19d.js";import{a as I}from"./asyncComputed.02afd50e.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.cf244ae9.js";import"./index.98e61e8e.js";import"./Form.e21e0d73.js";import"./Title.6f86755a.js";import"./index.3d7f8177.js";import"./index.55a2786b.js";import"./index.c4d59e95.js";import"./dayjs.2e90d17d.js";import"./index.fbf04eaa.js";import"./index.7011a200.js";import"./TabPane.3cb0210e.js";import"./index.0345671f.js";import"./index.24360d49.js";import"./index.c32ce6af.js";import"./index.73746068.js";import"./index.7dcc157a.js";import"./index.0b99f8ef.js";import"./index.1b5bc05c.js";import"./index.957937c4.js";import"./pubsub.dab46576.js";import"./icons.76c1fe8b.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="903a21c3-d478-464e-9f17-219ecdcacbd0",r._sentryDebugIdIdentifier="sentry-dbid-903a21c3-d478-464e-9f17-219ecdcacbd0")}catch{}})();class N{constructor(){n(this,"urlPath","files")}async create(e){throw new Error("Not implemented")}async delete(e,t){throw new Error("Not implemented")}async get(e){throw new Error("Not implemented")}async update(e,t){throw new Error("Not implemented")}async list(e){return k.get(`projects/${e}/${this.urlPath}`)}}const m=new N;class c{constructor(e,t){n(this,"record");this.projectId=e,this.record=v.create(m,t,"id")}static async list(e){return(await m.list(e)).map(a=>new c(e,a))}get key(){return this.record.get("name")}get name(){return this.record.get("name")}get size(){return this.record.get("size")}get date(){return new Date(this.record.get("date"))}}const ee=f({__name:"Files",setup(r){const t=g().params.projectId,{loading:a,result:p}=I(()=>c.list(t)),d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],l=w(()=>{var s,i;return{columns:[{name:"Name"},{name:"Size"},{name:"Date"}],rows:(i=(s=p.value)==null?void 0:s.map(o=>({key:o.key,cells:[{text:o.key},{text:o.size.toString()},{text:o.date.toDateString()}]})))!=null?i:[]}});return(s,i)=>(_(),b(D,{"entity-name":"File",loading:h(a),title:"Files",description:"Persist files on your projects.","empty-title":"No environment variables set",table:l.value,fields:d},null,8,["loading","table"]))}});export{ee as default};
//# sourceMappingURL=Files.8f6af518.js.map
