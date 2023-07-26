import{d as y,K as z,b,c as O,e as c,x as w,z as d,F as k,H as h,q as x}from"./registerWidgets.fce18b61.js";import{f as C,g as v}from"./icons.99afd58c.js";import{a as I}from"./asyncComputed.aceaab2d.js";import"./gateway.6f3c5fa6.js";import{O as l}from"./organization.5fd83ecb.js";import{C as N}from"./CrudView.042abd13.js";import{N as D}from"./Navbar.0ec3decd.js";import"./passwordlessManager.2cd33479.js";import"./activeRecord.5ca93a47.js";import"./DropdownMenu.94fbd8d3.js";import"./Modal.eb38c07a.js";import"./LoadingIndicator.b25e3053.js";import"./lottie.84b3db69.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="dc4f8076-5fea-4130-9c1b-e6a6de6a35f5",n._sentryDebugIdIdentifier="sentry-dbid-dc4f8076-5fea-4130-9c1b-e6a6de6a35f5")}catch{}})();const A={class:"organizations"},B=y({__name:"Organizations",setup(n){const o=[{key:"name",label:"Organization Name"}],i=h(),{loading:m,result:r,refetch:u}=I(()=>l.list()),s=({key:e})=>{i.push({name:"organization",params:{organizationId:e}})},g=async e=>{const t=await l.create(e.name);s({key:t.id})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this organization?")&&(await((a=(t=r.value)==null?void 0:t.find(_=>_.id===e))==null?void 0:a.delete()),u())},f=z(()=>{var e,t;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(t=(e=r.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:v,label:"Edit Organization",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>(b(),O(k,null,[c(D),w("div",A,[c(N,{"entity-name":"organization",loading:d(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:d(f),fields:o,onCreate:g},null,8,["loading","table"])])],64))}});const J=x(B,[["__scopeId","data-v-360ce05c"]]);export{J as default};
//# sourceMappingURL=Organizations.3396c084.js.map
