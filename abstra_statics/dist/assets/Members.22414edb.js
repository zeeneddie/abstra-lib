import{d as u,eB as f,G as b,b as y,c as g,u as _}from"./outputWidgets.acb147ed.js";import{a as w}from"./asyncComputed.95a36516.js";import"./router.00439560.js";import{M as m}from"./member.3043c113.js";import"./columns.589004f2.js";import{C as I}from"./CrudView.fc9e2e37.js";import"./Base.17c9417a.js";import"./FormItem.d12ca532.js";import"./transButton.cef1faca.js";import"./Text.d353b37a.js";import"./Title.911299ad.js";import"./index.d349a4a0.js";import"./gateway.0019b16e.js";import"./activeRecord.bc23ce79.js";import"./pubsub.99f97766.js";import"./index.cf4c23b9.js";import"./icons.85d31212.js";import"./url.f0c967a6.js";import"./index.4428f3d1.js";import"./index.f473a235.js";import"./index.1813b5d3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="12f063af-6093-4185-ac87-91d687085fdb",e._sentryDebugIdIdentifier="sentry-dbid-12f063af-6093-4185-ac87-91d687085fdb")}catch{}})();const J=u({__name:"Members",setup(e){const r=f().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>m.list(r)),c=b(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Members.22414edb.js.map
