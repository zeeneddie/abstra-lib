import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.415d7ed9.js";import{a as I}from"./asyncComputed.2eb53e5b.js";import{b as k}from"./router.62758fe7.js";import"./index.4a7070e1.js";import{M as n}from"./member.99596049.js";import{C as x}from"./CrudView.ab9c9027.js";import{K as C}from"./icons.adcacb0a.js";import{a as v}from"./ant-design.bbb61fae.js";import"./Form.a84cb2b9.js";import"./hasIn.af9e963d.js";import"./popupNotifcation.eaaa79e4.js";import"./index.cf4c23b9.js";import"./record.241377fb.js";import"./pubsub.e0cdf962.js";import"./Paragraph.01b06a11.js";import"./Base.a4b3ce11.js";import"./Typography.b95e4aa0.js";import"./Modal.9dce3cbe.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.95edd1a7.js";import"./url.b56f5759.js";import"./index.0ddbb3d1.js";import"./Title.d12082f2.js";import"./Text.0097eaf4.js";import"./index.cc1cfc71.js";import"./index.5d6fbd34.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="58d01368-7776-49e1-9c21-567487c52b8a",t._sentryDebugIdIdentifier="sentry-dbid-58d01368-7776-49e1-9c21-567487c52b8a")}catch{}})();const Y=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function p(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.146311e7.js.map
