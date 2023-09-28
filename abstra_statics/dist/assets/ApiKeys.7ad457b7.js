var P=Object.defineProperty;var C=(a,e,t)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var m=(a,e,t)=>(C(a,typeof e!="symbol"?e+"":e,t),t);import{d as _,r as k,ey as x,H as D,b as $,er as j,f as l,u as d,w as u,bu as N,b0 as w,eA as M}from"./registerWidgets.dc9f1313.js";import{a as T}from"./asyncComputed.b23fa538.js";import{P as E}from"./project.30910c3e.js";import{C as f}from"./gateway.edd1f42a.js";import{M as B}from"./member.6c9afc02.js";import{A as K}from"./activeRecord.9995b4c7.js";import"./index.5939d926.js";import{o as R}from"./icons.43fab4f0.js";import{_ as S}from"./CrudView.vue_vue_type_script_setup_true_lang.c1a9182c.js";import{f as U}from"./index.b048d0fb.js";import{A as V,a as z}from"./index.809c009e.js";import{M as F}from"./Title.aac0de3b.js";import"./passwordlessManager.bb9c7ffc.js";import"./pubsub.358cbe19.js";import"./storage.44e69db3.js";import"./Form.14d2c95c.js";import"./index.13368493.js";import"./index.a5ea279e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="062fb5ae-7ffe-450f-9cf8-7e3dfe3d9449",a._sentryDebugIdIdentifier="sentry-dbid-062fb5ae-7ffe-450f-9cf8-7e3dfe3d9449")}catch{}})();class G{constructor(){m(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return f.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await f.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return f.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const p=new G;class s{constructor(e){m(this,"record");this.record=K.create(p,e,"id")}static async list(e){return(await p.list(e)).map(y=>new s(y))}static async create(e){const t=await p.create(e);return new s(t)}static async delete(e,t){await p.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const le=_({__name:"ApiKeys",setup(a){const e=k(null),t=[{key:"name",label:"API key name"}],c=x().params.projectId,{loading:A,result:I,refetch:g}=T(async()=>Promise.all([s.list(c),E.get(c).then(r=>B.list(r.organizationId))]).then(([r,o])=>r.map(n=>({apiKey:n,member:o.find(i=>i.authorId===n.ownerId)})))),b=async r=>{const o=await s.create({projectId:c,name:r.name});g(),e.value=o.value},v=D(()=>{var r,o;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(o=(r=I.value)==null?void 0:r.map(({apiKey:n,member:i})=>{var h;return{key:n.id,cells:[{text:n.name},{text:U(n.createdAt,Date.now(),{addSuffix:!0})},{text:(h=i==null?void 0:i.email)!=null?h:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:R,dangerous:!0,onClick:async()=>{await s.delete(c,n.id),g()}}]}]}}))!=null?o:[]}});return(r,o)=>($(),j(N,null,[l(S,{"entity-name":"API key","create-button-text":"Create API Key",loading:d(A),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:v.value,fields:t,onCreate:b},null,8,["loading","table"]),l(d(F),{open:!!e.value,title:"Api key generated",onCancel:o[0]||(o[0]=n=>e.value=null)},{footer:u(()=>[]),default:u(()=>[l(d(V),null,{default:u(()=>[w("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(d(z),{code:"",copyable:""},{default:u(()=>[w(M(e.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.7ad457b7.js.map
