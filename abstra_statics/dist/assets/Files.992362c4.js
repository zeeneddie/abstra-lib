var u=Object.defineProperty;var y=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{d as b,ez as f,H as g,b as w,c as _,u as h}from"./outputWidgets.eadfae9c.js";import"./router.cabecc21.js";import"./columns.975e8045.js";import{C as k}from"./gateway.dc33ca80.js";import{A as v}from"./activeRecord.21f51d54.js";import{a as I}from"./asyncComputed.c95ad691.js";import{C as D}from"./CrudView.80afc469.js";import"./Title.716fc759.js";import"./index.c6d264a6.js";import"./index.f4ac7424.js";import"./pubsub.ccbe9bec.js";import"./icons.2f5445a0.js";import"./index.9f89b4d8.js";import"./Form.6d482df9.js";import"./url.0e9a1556.js";import"./index.b3a60446.js";import"./index.d96071b1.js";import"./index.e070f863.js";import"./index.388714b1.js";import"./index.f475c099.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="6b7e5c25-d575-4335-becb-33a3fc6d0100",r._sentryDebugIdIdentifier="sentry-dbid-6b7e5c25-d575-4335-becb-33a3fc6d0100")}catch{}})();class C{constructor(){i(this,"urlPath","files")}async create(e){throw new Error("Not implemented")}async delete(e,t){throw new Error("Not implemented")}async get(e){throw new Error("Not implemented")}async update(e,t){throw new Error("Not implemented")}async list(e){return k.get(`projects/${e}/${this.urlPath}`)}}const d=new C;class c{constructor(e,t){i(this,"record");this.projectId=e,this.record=v.create(d,t,"id")}static async list(e){return(await d.list(e)).map(s=>new c(e,s))}get key(){return this.record.get("name")}get name(){return this.record.get("name")}get size(){return this.record.get("size")}get date(){return new Date(this.record.get("date"))}}const Q=b({__name:"Files",setup(r){const t=f().params.projectId,{loading:s,result:l}=I(()=>c.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],p=g(()=>{var a,n;return{columns:[{name:"Name"},{name:"Size"},{name:"Date"}],rows:(n=(a=l.value)==null?void 0:a.map(o=>({key:o.key,cells:[{text:o.key},{text:o.size.toString()},{text:o.date.toDateString()}]})))!=null?n:[]}});return(a,n)=>(w(),_(D,{"entity-name":"File",loading:h(s),title:"Files",description:"Persist files on your projects.","empty-title":"No environment variables set",table:p.value,fields:m},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Files.992362c4.js.map
