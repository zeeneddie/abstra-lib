import{d as u,ez as b,G as f,b as y,c as g,u as _}from"./outputWidgets.9d44d9f3.js";import{a as w}from"./asyncComputed.99132b68.js";import"./router.b1f71dc3.js";import{M as m}from"./member.dada99a2.js";import"./columns.9f935597.js";import{C as I}from"./CrudView.533819ab.js";import"./Form.97529076.js";import"./Title.2f009ad9.js";import"./transButton.41dbfda3.js";import"./Text.0ad03b29.js";import"./index.a9ce4fb3.js";import"./gateway.aff02c91.js";import"./activeRecord.cde63aa9.js";import"./pubsub.36fbfdaf.js";import"./index.cf4c23b9.js";import"./icons.6774e95a.js";import"./url.2bddec37.js";import"./index.ed7c13f2.js";import"./index.6cc0b47a.js";import"./index.eaa93dcb.js";import"./index.0eda3d6a.js";import"./index.a18b3bba.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f9365094-1ecb-465c-89ec-854e652051cd",e._sentryDebugIdIdentifier="sentry-dbid-f9365094-1ecb-465c-89ec-854e652051cd")}catch{}})();const K=u({__name:"Members",setup(e){const r=b().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),c()},{loading:l,result:p,refetch:c}=w(()=>m.list(r)),d=f(()=>{var t,i;return{columns:[{name:"Email"},{name:"Role"}],rows:(i=(t=p.value)==null?void 0:t.map(a=>({key:a.email,cells:[{text:a.email},{text:a.role}]})))!=null?i:[]}});return(t,i)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:d.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.b9b8d998.js.map