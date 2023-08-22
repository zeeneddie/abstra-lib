var P=Object.defineProperty;var k=(a,e,t)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var h=(a,e,t)=>(k(a,typeof e!="symbol"?e+"":e,t),t);import{d as C,r as w,b,t as D,w as x,U as I,x as l,N as S,O as j,Q as M,q as N,K as $,c as B,e as A,z as v,F as K,J as z}from"./registerWidgets.d08da683.js";import{a as E}from"./asyncComputed.2c01b8cd.js";import{P as V}from"./project.a8f1c2aa.js";import{C as g}from"./gateway.0e8bb8f3.js";import{M as F}from"./member.b95ca5c0.js";import{A as O}from"./activeRecord.7b9ccd8b.js";import"./index.ce7159ab.js";import{C as U}from"./CrudView.7fcae0e5.js";import{M as W}from"./Modal.f85e67ed.js";import{r as Y}from"./icons.7be61185.js";import{f as q}from"./index.b048d0fb.js";import"./passwordlessManager.7e095e63.js";import"./pubsub.e3196f46.js";import"./DropdownMenu.5e686445.js";import"./LoadingIndicator.dce6e4e2.js";import"./lottie.bb3af4f6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="411e2963-47f3-426d-a55d-df656f3a7135",a._sentryDebugIdIdentifier="sentry-dbid-411e2963-47f3-426d-a55d-df656f3a7135")}catch{}})();class G{constructor(){h(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return g.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await g.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return g.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const u=new G;class c{constructor(e){h(this,"record");this.record=O.create(u,e,"id")}static async list(e){return(await u.list(e)).map(n=>new c(n))}static async create(e){const t=await u.create(e);return new c(t)}static async delete(e,t){await u.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const H=a=>(j("data-v-3da8363c"),a=a(),M(),a),J={class:"main-text"},Q=H(()=>l("div",{class:"separator"},null,-1)),T=["value"],L=C({__name:"ApiKeyModal",emits:["delete"],setup(a,{expose:e}){const t=w(null),n=w(""),m={maxWidth:"350px",height:"unset",padding:"30px"},y={display:"flex",flexDirection:"column",alignItems:"center",color:"#414A58",justifyContent:"center",lineHeight:"22px",fontSize:"18px",textAlign:"center",borderBottom:"none",gap:"23px",fontWeight:"700",marginBottom:"17px"},d={color:"#6D7C93",fontSize:"14px",textAlign:"center",justifyContent:"space-around"},f=o=>{var s;n.value=o,(s=t==null?void 0:t.value)==null||s.open()},p=()=>{var o;return(o=t==null?void 0:t.value)==null?void 0:o.close()};return e({open:f,close:p}),(o,s)=>(b(),D(W,{ref_key:"modalRef",ref:t,"container-style":m,"header-style":y,"content-style":d},{header:x(()=>[I(" API Key Created ")]),content:x(()=>[l("div",J,[I(S("Your API key has been created. Please copy it and store it in a safe place. You will not be able to see it again.")+" ",1),Q,l("input",{disabled:"",value:n.value},null,8,T),l("div",{class:"buttons"},[l("button",{class:"cancel",onClick:p},"Close")])])]),_:1},512))}});const R=N(L,[["__scopeId","data-v-3da8363c"]]),fe=C({__name:"ApiKeys",setup(a){const e=[{key:"name",label:"API key name"}],n=z().params.projectId,{loading:m,result:y,refetch:d}=E(async()=>Promise.all([c.list(n),V.get(n).then(o=>F.list(o.organizationId))]).then(([o,s])=>o.map(r=>({apiKey:r,member:s.find(i=>i.authorId===r.ownerId)})))),f=async o=>{const s=await c.create({projectId:n,name:o.name});d(),s.value&&prompt("Copy this API key and paste it in the local editor to deploy your app:",s==null?void 0:s.value)},p=$(()=>{var o,s;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(s=(o=y.value)==null?void 0:o.map(({apiKey:r,member:i})=>{var _;return{key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:q(r.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:(_=i==null?void 0:i.email)!=null?_:"Unknown"},{classes:["centered"],text:"actions",actions:[{label:"Delete",icon:Y,dangerous:!0,onClick:async()=>{await c.delete(n,r.id),d()}}]}]}}))!=null?s:[]}});return(o,s)=>(b(),B(K,null,[A(U,{"entity-name":"API key","create-button-text":"Create API Key",loading:v(m),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:v(p),fields:e,onCreate:f},null,8,["loading","table"]),A(R)],64))}});export{fe as default};
//# sourceMappingURL=ApiKeys.4281086c.js.map
