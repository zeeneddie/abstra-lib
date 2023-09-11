import{d as _,ex as y,F as z,b as O,c as w,e as c,er as h,bu as k,bw as v,t as x}from"./registerWidgets.cd0230b6.js";import{e as C,f as I}from"./icons.79c2c142.js";import{a as N}from"./asyncComputed.d5643777.js";import"./gateway.13cd486c.js";import{O as d}from"./organization.5d93f4da.js";import"./index.832c5194.js";import{C as D}from"./CrudView.511a0961.js";import{N as A}from"./Navbar.cc73a603.js";import"./passwordlessManager.e49dd838.js";import"./pubsub.acd37fe2.js";import"./storage.c08be30c.js";import"./activeRecord.87f5172c.js";import"./DropdownMenu.43cd71e8.js";import"./Modal.bb8ad073.js";import"./LoadingIndicator.47654df0.js";import"./lottie.3848dff9.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="4fbbe6b9-d5b2-4f96-be83-0ba1967c2667",n._sentryDebugIdIdentifier="sentry-dbid-4fbbe6b9-d5b2-4f96-be83-0ba1967c2667")}catch{}})();const B={class:"organizations"},E=_({__name:"Organizations",setup(n){const o=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],l=y(),{loading:m,result:r,refetch:p}=N(()=>d.list()),s=({key:e})=>{l.push({name:"organization",params:{organizationId:e}})},u=async e=>{const t=await d.create(e.name);s({key:t.id})},g=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this organization?")&&(await((a=(t=r.value)==null?void 0:t.find(f=>f.id===e))==null?void 0:a.delete()),p())},b=z(()=>{var e,t;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(t=(e=r.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:g,dangerous:!0},{icon:I,label:"Edit Organization",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>(O(),w(v,null,[c(A,{breadcrumb:o}),h("div",B,[c(D,{"entity-name":"organization",loading:k(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:u},null,8,["loading","table"])])],64))}});const W=x(E,[["__scopeId","data-v-29b5921d"]]);export{W as default};
//# sourceMappingURL=Organizations.03d1d466.js.map