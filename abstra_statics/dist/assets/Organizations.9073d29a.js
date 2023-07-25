import{d as z,J as f,b as y,c as b,e as i,v as O,y as r,F as k,G as C,p as h}from"./registerWidgets.04dc761e.js";import{f as v,g as x}from"./icons.d4e872e2.js";import{a as N}from"./asyncComputed.e0f43af3.js";import"./gateway.743ef31c.js";import{O as s}from"./organization.1d64b5e4.js";import{C as w}from"./CrudView.babb7bf0.js";import{N as A}from"./Navbar.3dcea4af.js";import"./passwordlessManager.271a8058.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.d347b089.js";import"./CircularLoading.78e37a70.js";import"./Modal.02341c49.js";import"./logo.084e5d7c.js";const B={class:"organizations"},I=z({__name:"Organizations",setup(V){const c=[{key:"name",label:"Organization Name"}],l=C(),{loading:m,result:n,refetch:d}=N(()=>s.list()),o=({key:e})=>{l.push({name:"organization",params:{organizationId:e}})},p=async e=>{const a=await s.create(e.name);o({key:a.id})},g=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this organization?")&&(await((t=(a=n.value)==null?void 0:a.find(_=>_.id===e))==null?void 0:t.delete()),d())},u=f(()=>{var e,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",classes:["centered"],actions:[{icon:v,label:"Delete",onClick:g,dangerous:!0},{icon:x,label:"Edit Organization",onClick:o}]}]})))!=null?a:[]}});return(e,a)=>(y(),b(k,null,[i(A),O("div",B,[i(w,{"entity-name":"organization",loading:r(m),"ask-name-on-create":!0,title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:r(u),fields:c,onCreate:p},null,8,["loading","table"])])],64))}});const H=h(I,[["__scopeId","data-v-b120b69b"]]);export{H as default};
//# sourceMappingURL=Organizations.9073d29a.js.map