var u=Object.defineProperty;var y=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{d as f,ez as g,H as w,b,c as _,u as h}from"./outputWidgets.942e04a7.js";import"./router.88ac172f.js";import"./columns.b249ad7a.js";import{C as k}from"./gateway.c853ac2b.js";import{A as v}from"./activeRecord.c49c8827.js";import{a as I}from"./asyncComputed.581a6d32.js";import{C as D}from"./CrudView.ef33eac6.js";import"./Title.02f374d5.js";import"./index.6d3b437a.js";import"./index.f4ac7424.js";import"./pubsub.c4874b0f.js";import"./icons.c37bd5be.js";import"./index.a0056785.js";import"./Form.fa989528.js";import"./url.c27b4b3f.js";import"./index.afbbab9c.js";import"./index.a1c695e0.js";import"./index.f7b7cb5d.js";import"./index.182b7916.js";import"./index.90e879e1.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="d5a0c89b-287d-4d80-92af-a46e51c26b34",r._sentryDebugIdIdentifier="sentry-dbid-d5a0c89b-287d-4d80-92af-a46e51c26b34")}catch{}})();class C{constructor(){i(this,"urlPath","files")}async create(e){throw new Error("Not implemented")}async delete(e,t){throw new Error("Not implemented")}async get(e){throw new Error("Not implemented")}async update(e,t){throw new Error("Not implemented")}async list(e){return k.get(`projects/${e}/${this.urlPath}`)}}const d=new C;class c{constructor(e,t){i(this,"record");this.projectId=e,this.record=v.create(d,t,"id")}static async list(e){return(await d.list(e)).map(a=>new c(e,a))}get key(){return this.record.get("name")}get name(){return this.record.get("name")}get size(){return this.record.get("size")}get date(){return new Date(this.record.get("date"))}}const Q=f({__name:"Files",setup(r){const t=g().params.projectId,{loading:a,result:l}=I(()=>c.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],p=w(()=>{var s,n;return{columns:[{name:"Name"},{name:"Size"},{name:"Date"}],rows:(n=(s=l.value)==null?void 0:s.map(o=>({key:o.key,cells:[{text:o.key},{text:o.size.toString()},{text:o.date.toDateString()}]})))!=null?n:[]}});return(s,n)=>(b(),_(D,{"entity-name":"File",loading:h(a),title:"Files",description:"Persist files on your projects.","empty-title":"No environment variables set",table:p.value,fields:m},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Files.89cdeed6.js.map
