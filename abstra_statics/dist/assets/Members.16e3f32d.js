import{d as b,eB as y,G as g,b as _,c as w,u as C}from"./outputWidgets.5d603989.js";import{a as I}from"./asyncComputed.58ba4f93.js";import{a as h}from"./authorManager.c2511e61.js";import"./index.31469fdb.js";import{M as n}from"./member.af3ccd8c.js";import{C as k}from"./CrudView.d4ee2ca6.js";import{C as v}from"./icons.bd111c16.js";import{a as M}from"./ant-design.a23d89b2.js";import"./index.cf4c23b9.js";import"./record.d917866d.js";import"./pubsub.6c84e9b3.js";import"./gateway.4795e7dc.js";import"./Title.ff9a3ba8.js";import"./Text.09cd31d9.js";import"./FormItem.908927d2.js";import"./hasIn.fd9b99bd.js";import"./Form.f9dc07de.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.94c2a2ef.js";import"./router.cff355e3.js";import"./index.7ab57155.js";import"./url.db1ec50a.js";import"./index.af1c082d.js";import"./index.55aa4166.js";import"./index.5d1709ee.js";import"./index.8a8ca7a1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="d8eef4da-4bfa-40ff-a511-48559fed02ae",t._sentryDebugIdIdentifier="sentry-dbid-d8eef4da-4bfa-40ff-a511-48559fed02ae")}catch{}})();const Y=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:f,refetch:m}=I(()=>n.list(a)),u=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"Actions"}],rows:(r=(e=f.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{text:o.email},{text:o.role},{text:"",actions:((s=h.getAuthor())==null?void 0:s.claims.email)===o.email?void 0:[{icon:v,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(k,{"entity-name":"members",loading:C(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:u.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Members.16e3f32d.js.map
