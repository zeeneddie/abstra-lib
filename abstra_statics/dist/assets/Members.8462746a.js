import{d as u,ez as f,H as b,b as y,c as g,u as _}from"./outputWidgets.a4629ff8.js";import{a as w}from"./asyncComputed.fb8b9ba6.js";import"./router.ab2ac3ba.js";import{M as m}from"./member.7e25c738.js";import"./columns.464a3bb5.js";import{C as I}from"./CrudView.a5b1a4eb.js";import"./Title.cf2a531e.js";import"./index.339c7421.js";import"./gateway.68939de7.js";import"./activeRecord.a2b7d343.js";import"./pubsub.25dc8c41.js";import"./index.f4ac7424.js";import"./icons.73bff2ab.js";import"./Text.eb216708.js";import"./Form.ab59726f.js";import"./url.d6a620b9.js";import"./index.874565bb.js";import"./index.48817ebe.js";import"./index.0f6dde5f.js";import"./index.46db6cb2.js";import"./index.56cfba6d.js";import"./index.fda4c602.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="76dec294-fd23-4021-9bac-914e2df8a964",e._sentryDebugIdIdentifier="sentry-dbid-76dec294-fd23-4021-9bac-914e2df8a964")}catch{}})();const K=u({__name:"Members",setup(e){const r=f().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>m.list(r)),c=b(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.8462746a.js.map
