import{d as b,ex as y,F as z,b as O,c as w,e as c,er as h,bu as k,bw as v,t as x}from"./registerWidgets.d68712f0.js";import{e as C,f as I}from"./icons.24d45fbf.js";import{a as N}from"./asyncComputed.f9ea598c.js";import"./gateway.f055664d.js";import{O as d}from"./organization.f45635ab.js";import"./index.8465c60e.js";import{C as D}from"./CrudView.dbd62bcc.js";import{N as A}from"./Navbar.ab57810c.js";import"./passwordlessManager.36ac2e38.js";import"./pubsub.5d7eaeae.js";import"./activeRecord.b8754928.js";import"./DropdownMenu.96853481.js";import"./Modal.b6d9a624.js";import"./LoadingIndicator.bd782213.js";import"./lottie.2b6a117e.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="84ade123-a929-416c-b0e9-8a94f789a019",n._sentryDebugIdIdentifier="sentry-dbid-84ade123-a929-416c-b0e9-8a94f789a019")}catch{}})();const B={class:"organizations"},E=b({__name:"Organizations",setup(n){const o=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],l=y(),{loading:m,result:r,refetch:u}=N(()=>d.list()),s=({key:e})=>{l.push({name:"organization",params:{organizationId:e}})},p=async e=>{const a=await d.create(e.name);s({key:a.id})},g=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this organization?")&&(await((t=(a=r.value)==null?void 0:a.find(_=>_.id===e))==null?void 0:t.delete()),u())},f=z(()=>{var e,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(a=(e=r.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:g,dangerous:!0},{icon:I,label:"Edit Organization",onClick:s}]}]})))!=null?a:[]}});return(e,a)=>(O(),w(v,null,[c(A,{breadcrumb:o}),h("div",B,[c(D,{"entity-name":"organization",loading:k(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:f.value,fields:i,onCreate:p},null,8,["loading","table"])])],64))}});const S=x(E,[["__scopeId","data-v-29b5921d"]]);export{S as default};
//# sourceMappingURL=Organizations.d675787e.js.map
