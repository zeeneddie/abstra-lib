import{d as f,ey as u,H as b,b as y,c as _,u as g}from"./registerWidgets.4340e287.js";import{a as w}from"./asyncComputed.a4cc4ebe.js";import"./gateway.1f2ccdb0.js";import{M as n}from"./member.02e55f2a.js";import"./index.dbce76fa.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.e9f57b5e.js";import"./passwordlessManager.8c70219b.js";import"./pubsub.3290d859.js";import"./storage.dfe55847.js";import"./activeRecord.c40ac301.js";import"./index.f58e2ef8.js";import"./Title.4165770a.js";import"./Form.7b78c348.js";import"./icons.da02f7f7.js";import"./index.17a2edf7.js";import"./index.7bc7e814.js";import"./index.d24f6130.js";import"./index.9aade351.js";import"./index.c13b703c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="819fd4ae-7ff0-451d-8b7e-de5326e04725",e._sentryDebugIdIdentifier="sentry-dbid-819fd4ae-7ff0-451d-8b7e-de5326e04725")}catch{}})();const F=f({__name:"Members",setup(e){const r=u().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(r,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>n.list(r)),c=b(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),_(I,{"entity-name":"members",loading:g(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{F as default};
//# sourceMappingURL=Members.edef4f61.js.map
