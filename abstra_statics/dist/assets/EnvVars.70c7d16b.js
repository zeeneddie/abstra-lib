var h=Object.defineProperty;var w=(a,e,t)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{d as g,K as v,b as k,t as $,z as p,J as C}from"./registerWidgets.80830a62.js";import{a as I}from"./asyncComputed.7fd138fd.js";import{C as l}from"./gateway.0f7f822d.js";import{A as _}from"./activeRecord.dd1973bd.js";import{C as j}from"./CrudView.4ea83d11.js";import{t as A}from"./icons.96376736.js";import"./passwordlessManager.65c1d475.js";import"./DropdownMenu.8a84ea08.js";import"./Modal.75286ba0.js";import"./LoadingIndicator.246acf5c.js";import"./lottie.ab5349ef.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="133b1e3e-6670-4900-8b1d-56800bfdb629",a._sentryDebugIdIdentifier="sentry-dbid-133b1e3e-6670-4900-8b1d-56800bfdb629")}catch{}})();class P{constructor(){u(this,"urlPath","env-vars")}async create(e){return l.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await l.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return l.get(`projects/${e}/${this.urlPath}`)}async get(e){return l.get(`${this.urlPath}/${e}`)}async update(e,t){return l.patch(`${this.urlPath}/${e}`,t)}}const n=new P;class s{constructor(e,t){u(this,"record");this.projectId=e,this.record=new _(n,t,"id")}static async list(e){return(await n.list(e)).map(r=>new s(e,r))}static async create(e,t,r){const o=await n.create({projectId:e,name:t,value:r});return new s(e,o)}static async get(e,t){const r=await n.get(t);return new s(e,r)}static async update(e,t,r){const o=await n.update(t,r);return new s(e,o)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(e){this.record.set("value",e)}async save(){await this.record.save()}async delete(){await n.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const q=g({__name:"EnvVars",setup(a){const t=C().params.projectId,{loading:r,result:o,refetch:m}=I(()=>s.list(t)),y=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function b({key:i,value:c}){await s.create(t,i,c),m()}const f=v(()=>{var i,c;return{columns:[{name:"Key"},{name:"Actions"}],rows:(c=(i=o.value)==null?void 0:i.map(d=>({key:d.key,cells:[{text:d.key,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:A,label:"Delete",async onClick(){await d.delete(),m()},dangerous:!0}]}]})))!=null?c:[]}});return(i,c)=>(k(),$(j,{"entity-name":"env-vars",loading:p(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:p(f),"create-button-text":"Add Environment Variable",fields:p(y),onCreate:b},null,8,["loading","table","fields"]))}});export{q as default};
//# sourceMappingURL=EnvVars.70c7d16b.js.map