import{d as b,ey as u,H as f,b as y,c as _,u as g}from"./registerWidgets.faec4901.js";import{a as w}from"./asyncComputed.04758d6d.js";import"./gateway.241cb512.js";import{M as n}from"./member.b574c677.js";import"./index.a999bbce.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.3dfdcdc3.js";import"./passwordlessManager.90d3a316.js";import"./pubsub.c32c984e.js";import"./storage.02df2e1a.js";import"./activeRecord.64153c3d.js";import"./Modal.c4a3eb37.js";import"./Title.38629c7e.js";import"./transButton.389d0ba4.js";import"./index.bd454869.js";import"./Text.8913855c.js";import"./index.353431e1.js";import"./index.da74220a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="75dc87eb-d20b-4131-b949-fa9d6b681b79",e._sentryDebugIdIdentifier="sentry-dbid-75dc87eb-d20b-4131-b949-fa9d6b681b79")}catch{}})();const j=b({__name:"Members",setup(e){const a=u().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(a,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>n.list(a)),c=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?r:[]}});return(t,r)=>(y(),_(I,{"entity-name":"members",loading:g(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Members.117fe265.js.map
