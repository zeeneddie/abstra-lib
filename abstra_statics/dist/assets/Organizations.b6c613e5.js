import{d as y,K as b,b as z,c as O,e as c,x as w,z as d,F as k,H as h,q as x}from"./registerWidgets.80830a62.js";import{f as C,g as v}from"./icons.96376736.js";import{a as I}from"./asyncComputed.7fd138fd.js";import"./gateway.0f7f822d.js";import{O as l}from"./organization.dfe98db9.js";import{C as N}from"./CrudView.4ea83d11.js";import{N as D}from"./Navbar.eac3ae22.js";import"./passwordlessManager.65c1d475.js";import"./activeRecord.dd1973bd.js";import"./DropdownMenu.8a84ea08.js";import"./Modal.75286ba0.js";import"./LoadingIndicator.246acf5c.js";import"./lottie.ab5349ef.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="28eb5853-c27a-4c37-8857-aeab5b606464",n._sentryDebugIdIdentifier="sentry-dbid-28eb5853-c27a-4c37-8857-aeab5b606464")}catch{}})();const A={class:"organizations"},B=y({__name:"Organizations",setup(n){const o=[{key:"name",label:"Organization Name"}],i=h(),{loading:m,result:r,refetch:u}=I(()=>l.list()),s=({key:e})=>{i.push({name:"organization",params:{organizationId:e}})},g=async e=>{const t=await l.create(e.name);s({key:t.id})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this organization?")&&(await((a=(t=r.value)==null?void 0:t.find(_=>_.id===e))==null?void 0:a.delete()),u())},f=b(()=>{var e,t;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(t=(e=r.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:v,label:"Edit Organization",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>(z(),O(k,null,[c(D),w("div",A,[c(N,{"entity-name":"organization",loading:d(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:d(f),fields:o,onCreate:g},null,8,["loading","table"])])],64))}});const J=x(B,[["__scopeId","data-v-360ce05c"]]);export{J as default};
//# sourceMappingURL=Organizations.b6c613e5.js.map