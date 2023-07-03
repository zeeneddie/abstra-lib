var m=Object.defineProperty;var g=(r,t,e)=>t in r?m(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>(g(r,typeof t!="symbol"?t+"":t,e),e);import{d as y,K as w,b as $,t as f,z as l,J as C}from"./registerWidgets.81004098.js";import{a as b}from"./asyncComputed.841de1fc.js";import"./passwordlessManager.d8088db9.js";import{A as P,C as s}from"./utils.ac5c1175.js";import{C as A}from"./CrudView.20b9da12.js";import"./pubsub.a0411919.js";import"./DropdownMenu.f9c0b8cd.js";import"./CircularLoading.cef8a22f.js";import"./Modal.bc20d9b5.js";class j{constructor(){u(this,"urlPath","builds")}async create(t){return s.post(`projects/${t}/${this.urlPath}`,{})}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){return s.put(`${this.urlPath}/${t}`,e)}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}}const a=new j;class c{constructor(t){u(this,"record");this.record=new P(a,t,"id")}static async list(t){return(await a.list(t)).map(o=>new c(o))}static async create(t){const e=await a.create(t);return new c(e)}static async get(t){const e=await a.get(t);return new c(e)}async delete(){await a.delete(this.id)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await a.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get createdAt(){return this.record.get("createdAt")}get status(){return this.record.get("status")}}const G=y({__name:"Builds",setup(r){const e=C().params.projectId,{loading:o,result:p}=b(()=>c.list(e)),h=w(()=>{var n,d;return{columns:[{name:"Id"},{name:"Creation date"},{name:"Status"}],rows:(d=(n=p.value)==null?void 0:n.map(i=>({key:i.id,cells:[{text:i.id,classes:["title","centered"]},{text:i.createdAt.toLocaleString(),classes:[]},{text:i.status,classes:["centered"]}]})))!=null?d:[]}});return(n,d)=>($(),f(A,{"entity-name":"build",loading:l(o),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:l(h)},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Builds.c48a1805.js.map