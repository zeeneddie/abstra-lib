import{d as u,eB as f,G as b,b as y,c as g,u as _}from"./outputWidgets.65a42716.js";import{a as w}from"./asyncComputed.af8cf203.js";import"./router.1dff6d79.js";import{M as n}from"./member.d59e462e.js";import"./columns.edb246d4.js";import{C as I}from"./CrudView.63edc54a.js";import"./Base.e53684e8.js";import"./transButton.d2e93887.js";import"./Text.f0cd4e48.js";import"./Title.dfc698a2.js";import"./index.a55a8b93.js";import"./gateway.fec1830c.js";import"./record.b5bd1eee.js";import"./pubsub.8d754297.js";import"./icons.9da44d92.js";import"./url.b76a6879.js";import"./index.fdc2480d.js";import"./index.f1371734.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="7037b815-af05-4044-a770-d3ddfd0e3dc2",e._sentryDebugIdIdentifier="sentry-dbid-7037b815-af05-4044-a770-d3ddfd0e3dc2")}catch{}})();const q=u({__name:"Members",setup(e){const r=f().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(r,t.email),p()},{loading:d,result:l,refetch:p}=w(()=>n.list(r)),c=b(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=l.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Members.7ce8f7d6.js.map
