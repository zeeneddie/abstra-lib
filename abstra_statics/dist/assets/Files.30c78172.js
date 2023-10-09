var u=Object.defineProperty;var y=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{d as f,eA as b,J as g,b as w,c as _,u as h}from"./outputWidgets.6f061a1b.js";import"./router.5b3ff3d3.js";import"./index.687cbbe9.js";import{C as k}from"./gateway.d7e131e7.js";import{A as v}from"./activeRecord.9149f449.js";import{a as I}from"./asyncComputed.2773f568.js";import{C as D}from"./CrudView.b7f89c6a.js";import"./Title.7c0d9d7d.js";import"./index.e175414d.js";import"./pubsub.932fd4f4.js";import"./icons.8e3c1aee.js";import"./index.9b59049d.js";import"./Form.05e047f5.js";import"./url.c2a645fe.js";import"./index.b224d470.js";import"./index.9eb77f7a.js";import"./index.9a029dac.js";import"./index.f509d6e1.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="b11bf993-d44f-49a2-b09b-1f35fc956ddd",r._sentryDebugIdIdentifier="sentry-dbid-b11bf993-d44f-49a2-b09b-1f35fc956ddd")}catch{}})();class C{constructor(){i(this,"urlPath","files")}async create(e){throw new Error("Not implemented")}async delete(e,t){throw new Error("Not implemented")}async get(e){throw new Error("Not implemented")}async update(e,t){throw new Error("Not implemented")}async list(e){return k.get(`projects/${e}/${this.urlPath}`)}}const c=new C;class d{constructor(e,t){i(this,"record");this.projectId=e,this.record=v.create(c,t,"id")}static async list(e){return(await c.list(e)).map(s=>new d(e,s))}get key(){return this.record.get("name")}get name(){return this.record.get("name")}get size(){return this.record.get("size")}get date(){return new Date(this.record.get("date"))}}const M=f({__name:"Files",setup(r){const t=b().params.projectId,{loading:s,result:l}=I(()=>d.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],p=g(()=>{var a,n;return{columns:[{name:"Name"},{name:"Size"},{name:"Date"}],rows:(n=(a=l.value)==null?void 0:a.map(o=>({key:o.key,cells:[{text:o.key},{text:o.size.toString()},{text:o.date.toDateString()}]})))!=null?n:[]}});return(a,n)=>(w(),_(D,{"entity-name":"File",loading:h(s),title:"Files",description:"Persist files on your projects.","empty-title":"No environment variables set",table:p.value,fields:m},null,8,["loading","table"]))}});export{M as default};
//# sourceMappingURL=Files.30c78172.js.map