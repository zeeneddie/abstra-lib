var u=Object.defineProperty;var y=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{d as b,eA as f,J as g,b as w,c as _,u as h}from"./outputWidgets.800838e3.js";import"./router.ba9fc25a.js";import"./index.46095ec8.js";import{C as k}from"./gateway.872328f1.js";import{A as v}from"./activeRecord.9d8d542d.js";import{a as I}from"./asyncComputed.982dc1f5.js";import{C as D}from"./CrudView.b259bd34.js";import"./Title.28613ffd.js";import"./index.cc2e9ddf.js";import"./pubsub.3b460539.js";import"./icons.93f59c4e.js";import"./index.e0615505.js";import"./Form.b8148ab8.js";import"./url.e7bb6b8a.js";import"./index.9edddcd4.js";import"./index.70fbd67e.js";import"./index.c4440e89.js";import"./index.960544fb.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="b361d0e2-b7b3-4e12-899a-1b61f253d96d",r._sentryDebugIdIdentifier="sentry-dbid-b361d0e2-b7b3-4e12-899a-1b61f253d96d")}catch{}})();class C{constructor(){i(this,"urlPath","files")}async create(e){throw new Error("Not implemented")}async delete(e,t){throw new Error("Not implemented")}async get(e){throw new Error("Not implemented")}async update(e,t){throw new Error("Not implemented")}async list(e){return k.get(`projects/${e}/${this.urlPath}`)}}const l=new C;class d{constructor(e,t){i(this,"record");this.projectId=e,this.record=v.create(l,t,"id")}static async list(e){return(await l.list(e)).map(s=>new d(e,s))}get key(){return this.record.get("name")}get name(){return this.record.get("name")}get size(){return this.record.get("size")}get date(){return new Date(this.record.get("date"))}}const M=b({__name:"Files",setup(r){const t=f().params.projectId,{loading:s,result:c}=I(()=>d.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],p=g(()=>{var a,n;return{columns:[{name:"Name"},{name:"Size"},{name:"Date"}],rows:(n=(a=c.value)==null?void 0:a.map(o=>({key:o.key,cells:[{text:o.key},{text:o.size.toString()},{text:o.date.toDateString()}]})))!=null?n:[]}});return(a,n)=>(w(),_(D,{"entity-name":"File",loading:h(s),title:"Files",description:"Persist files on your projects.","empty-title":"No environment variables set",table:p.value,fields:m},null,8,["loading","table"]))}});export{M as default};
//# sourceMappingURL=Files.4354019a.js.map
