import{d as b,eB as y,H as g,b as _,c as w,u as h,eP as I}from"./outputWidgets.f017b1ba.js";import{a as k}from"./asyncComputed.9ec0ae7d.js";import{b as x}from"./router.bd5e0bcd.js";import"./index.2d300106.js";import{M as n}from"./member.513202f6.js";import{C}from"./CrudView.ab7e0ba9.js";import{a as v}from"./ant-design.f8dd6064.js";import"./Form.c4ae4d63.js";import"./hasIn.a2b4c2f9.js";import"./popupNotifcation.d47f45e7.js";import"./index.cf4c23b9.js";import"./record.e2bcfa5f.js";import"./pubsub.4d72db7b.js";import"./Paragraph.3ffb559e.js";import"./Base.bb2b5283.js";import"./Typography.5dfc411f.js";import"./Modal.334f8812.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.377064a4.js";import"./url.42b30a4e.js";import"./index.5cbbe314.js";import"./Title.4002b692.js";import"./Text.01ac3fdf.js";import"./index.b5d890a4.js";import"./index.11845c93.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="90e9787b-696c-4479-ab02-49b74604653e",t._sentryDebugIdIdentifier="sentry-dbid-90e9787b-696c-4479-ab02-49b74604653e")}catch{}})();const X=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function p(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:u,refetch:m}=k(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=x.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(C,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Editors.e6946e1e.js.map