var P=Object.defineProperty;var k=(a,e,t)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var f=(a,e,t)=>(k(a,typeof e!="symbol"?e+"":e,t),t);import{d as b,r as w,b as C,t as S,w as I,S as x,x as l,N as D,O as j,Q as M,q as N,K as $,c as B,e as A,z as v,F as K,J as z}from"./registerWidgets.553de467.js";import{a as E}from"./asyncComputed.2769eba5.js";import{P as V}from"./project.19a6393a.js";import{C as g}from"./gateway.55889fdc.js";import{M as F}from"./member.2fe0e01a.js";import{A as O}from"./activeRecord.5283a3fc.js";import{C as W}from"./CrudView.5f681026.js";import{M as Y}from"./Modal.3622aa4e.js";import{t as q}from"./icons.012820f9.js";import"./passwordlessManager.b79493a6.js";import"./DropdownMenu.00727fd4.js";import"./LoadingIndicator.c7b4d86e.js";import"./lottie.433e3d0f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="27715f7a-16c3-4866-922a-b06d7187c28d",a._sentryDebugIdIdentifier="sentry-dbid-27715f7a-16c3-4866-922a-b06d7187c28d")}catch{}})();class G{constructor(){f(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return g.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await g.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return g.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const u=new G;class c{constructor(e){f(this,"record");this.record=new O(u,e,"id")}static async list(e){return(await u.list(e)).map(s=>new c(s))}static async create(e){const t=await u.create(e);return new c(t)}static async delete(e,t){await u.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const H=a=>(j("data-v-3da8363c"),a=a(),M(),a),J={class:"main-text"},L=H(()=>l("div",{class:"separator"},null,-1)),Q=["value"],T=b({__name:"ApiKeyModal",emits:["delete"],setup(a,{expose:e}){const t=w(null),s=w(""),m={maxWidth:"350px",height:"unset",padding:"30px"},y={display:"flex",flexDirection:"column",alignItems:"center",color:"#414A58",justifyContent:"center",lineHeight:"22px",fontSize:"18px",textAlign:"center",borderBottom:"none",gap:"23px",fontWeight:"700",marginBottom:"17px"},d={color:"#6D7C93",fontSize:"14px",textAlign:"center",justifyContent:"space-around"},h=o=>{var n;s.value=o,(n=t==null?void 0:t.value)==null||n.open()},p=()=>{var o;return(o=t==null?void 0:t.value)==null?void 0:o.close()};return e({open:h,close:p}),(o,n)=>(C(),S(Y,{ref_key:"modalRef",ref:t,"container-style":m,"header-style":y,"content-style":d},{header:I(()=>[x(" API Key Created ")]),content:I(()=>[l("div",J,[x(D("Your API key has been created. Please copy it and store it in a safe place. You will not be able to see it again.")+" ",1),L,l("input",{disabled:"",value:s.value},null,8,Q),l("div",{class:"buttons"},[l("button",{class:"cancel",onClick:p},"Close")])])]),_:1},512))}});const U=N(T,[["__scopeId","data-v-3da8363c"]]),pe=b({__name:"ApiKeys",setup(a){const e=[{key:"name",label:"API key name"}],s=z().params.projectId,{loading:m,result:y,refetch:d}=E(async()=>Promise.all([c.list(s),V.get(s).then(o=>F.list(o.organizationId))]).then(([o,n])=>o.map(r=>({apiKey:r,member:n.find(i=>i.authorId===r.ownerId)})))),h=async o=>{const n=await c.create({projectId:s,name:o.name});d(),n.value&&prompt("Copy this API key and paste it in the local editor to deploy your app:",n==null?void 0:n.value)},p=$(()=>{var o,n;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(n=(o=y.value)==null?void 0:o.map(({apiKey:r,member:i})=>{var _;return{key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:r.createdAt.toLocaleString(),classes:[]},{text:(_=i==null?void 0:i.email)!=null?_:"Unknown"},{classes:["centered"],text:"actions",actions:[{label:"Delete",icon:q,dangerous:!0,onClick:async()=>{await c.delete(s,r.id),d()}}]}]}}))!=null?n:[]}});return(o,n)=>(C(),B(K,null,[A(W,{"entity-name":"API key","create-button-text":"Create API Key",loading:v(m),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:v(p),fields:e,onCreate:h},null,8,["loading","table"]),A(U)],64))}});export{pe as default};
//# sourceMappingURL=ApiKeys.0f5693b5.js.map
