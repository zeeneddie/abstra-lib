import{d as u,eB as b,G as f,b as y,c as g,u as _}from"./outputWidgets.4dca5506.js";import{a as w}from"./asyncComputed.c4b429e1.js";import"./authorManager.a800075c.js";import"./index.78568e24.js";import{M as m}from"./member.a938d350.js";import{C as I}from"./CrudView.1fde2773.js";import"./index.cf4c23b9.js";import"./record.7d38c825.js";import"./pubsub.8d119a65.js";import"./gateway.c9180c86.js";import"./icons.bd47d131.js";import"./Text.207bda18.js";import"./Title.c9e508fd.js";import"./FormItem.64e623f3.js";import"./hasIn.190f5047.js";import"./Form.81f19b00.js";import"./Modal.a47ec0ab.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4e54e9d0.js";import"./router.bcc3ba4b.js";import"./index.342688b0.js";import"./url.2dba12d6.js";import"./index.7d0729b5.js";import"./index.f5322801.js";import"./index.d018329d.js";import"./index.8d495a1c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b6576088-96e0-4958-b68a-d70dde130b8d",e._sentryDebugIdIdentifier="sentry-dbid-b6576088-96e0-4958-b68a-d70dde130b8d")}catch{}})();const S=u({__name:"Members",setup(e){const r=b().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),p()},{loading:d,result:l,refetch:p}=w(()=>m.list(r)),c=f(()=>{var t,i;return{columns:[{name:"Email"},{name:"Role"}],rows:(i=(t=l.value)==null?void 0:t.map(a=>({key:a.email,cells:[{text:a.email},{text:a.role}]})))!=null?i:[]}});return(t,i)=>(y(),g(I,{"entity-name":"members",loading:_(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Members.37deafcd.js.map
