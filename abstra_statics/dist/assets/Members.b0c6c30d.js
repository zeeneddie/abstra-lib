import{d as b,ey as u,H as f,b as y,c as _,u as g}from"./registerWidgets.3527ced4.js";import{a as w}from"./asyncComputed.df2dd9d3.js";import"./gateway.d203662f.js";import{M as n}from"./member.016ee938.js";import"./index.3bd9f3ad.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.13d9c941.js";import"./passwordlessManager.59ddd75d.js";import"./pubsub.f36d2323.js";import"./storage.602ff6c5.js";import"./activeRecord.f2d90c1f.js";import"./Modal.abf0bfb5.js";import"./Title.603c65b1.js";import"./transButton.89ff6fa7.js";import"./index.ea46f37f.js";import"./Text.46b50423.js";import"./index.d3381f53.js";import"./index.c6e52af8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d223b11f-6ba5-47c7-be31-7857b91f96ba",e._sentryDebugIdIdentifier="sentry-dbid-d223b11f-6ba5-47c7-be31-7857b91f96ba")}catch{}})();const j=b({__name:"Members",setup(e){const a=u().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(a,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>n.list(a)),c=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?r:[]}});return(t,r)=>(y(),_(I,{"entity-name":"members",loading:g(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Members.b0c6c30d.js.map
