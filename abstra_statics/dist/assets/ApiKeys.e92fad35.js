var P=Object.defineProperty;var C=(r,e,t)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>(C(r,typeof e!="symbol"?e+"":e,t),t);import{d as _,r as k,eA as x,J as D,b as $,et as j,f as l,u as d,w as p,bw as N,b2 as w,eC as M}from"./outputWidgets.d6897520.js";import{a as T}from"./asyncComputed.2c363ccc.js";import{P as E}from"./project.7c73974a.js";import"./console.526446d9.js";import{M as B}from"./member.916242f8.js";import{C as y}from"./gateway.c13063b9.js";import{A as K}from"./activeRecord.e97440b4.js";import"./index.a8a303e6.js";import{p as R}from"./icons.20b5fc8a.js";import{_ as S}from"./CrudView.vue_vue_type_script_setup_true_lang.eece189e.js";import{f as U}from"./index.b048d0fb.js";import{A as V,a as z}from"./index.59123055.js";import{M as F}from"./Title.9e102f51.js";import"./index.40bea6c2.js";import"./Form.a2bccbf0.js";import"./index.65fddafd.js";import"./index.dcf9fd0a.js";import"./index.09e1dc09.js";import"./dayjs.dccbdd6f.js";import"./index.0f5fc52a.js";import"./index.fd09b35e.js";import"./TabPane.c8258ec5.js";import"./index.b11f642a.js";import"./index.7c1a9101.js";import"./index.e63bacfa.js";import"./index.30191c77.js";import"./index.33e7eca5.js";import"./index.16598f32.js";import"./index.a2784b6b.js";import"./pubsub.e0b33cd4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="73c221e8-7bb3-43f1-a1c2-4481fc7c8f31",r._sentryDebugIdIdentifier="sentry-dbid-73c221e8-7bb3-43f1-a1c2-4481fc7c8f31")}catch{}})();class G{constructor(){u(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return y.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await y.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return y.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const m=new G;class s{constructor(e){u(this,"record");this.record=K.create(m,e,"id")}static async list(e){return(await m.list(e)).map(f=>new s(f))}static async create(e){const t=await m.create(e);return new s(t)}static async delete(e,t){await m.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const be=_({__name:"ApiKeys",setup(r){const e=k(null),t=[{key:"name",label:"API key name"}],c=x().params.projectId,{loading:A,result:I,refetch:g}=T(async()=>Promise.all([s.list(c),E.get(c).then(a=>B.list(a.organizationId))]).then(([a,o])=>a.map(n=>({apiKey:n,member:o.find(i=>i.authorId===n.ownerId)})))),b=async a=>{const o=await s.create({projectId:c,name:a.name});g(),e.value=o.value},v=D(()=>{var a,o;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions",align:"right"}],rows:(o=(a=I.value)==null?void 0:a.map(({apiKey:n,member:i})=>{var h;return{key:n.id,cells:[{text:n.name},{text:U(n.createdAt,Date.now(),{addSuffix:!0})},{text:(h=i==null?void 0:i.email)!=null?h:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:R,dangerous:!0,onClick:async()=>{await s.delete(c,n.id),g()}}]}]}}))!=null?o:[]}});return(a,o)=>($(),j(N,null,[l(S,{"entity-name":"API key","create-button-text":"Create API Key",loading:d(A),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:v.value,fields:t,onCreate:b},null,8,["loading","table"]),l(d(F),{open:!!e.value,title:"Api key generated",onCancel:o[0]||(o[0]=n=>e.value=null)},{footer:p(()=>[]),default:p(()=>[l(d(V),null,{default:p(()=>[w("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(d(z),{code:"",copyable:""},{default:p(()=>[w(M(e.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{be as default};
//# sourceMappingURL=ApiKeys.e92fad35.js.map