import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.18a31a4b.js";import{a as I}from"./asyncComputed.619182b9.js";import{b as k}from"./router.09f8c19a.js";import"./index.e64dc616.js";import{M as n}from"./member.3acd0c96.js";import{C as x}from"./CrudView.c2557c93.js";import{L as C}from"./icons.d20708b7.js";import{a as v}from"./ant-design.b4c55a9c.js";import"./Form.99377304.js";import"./hasIn.1db1a4ba.js";import"./popupNotifcation.07382277.js";import"./index.cf4c23b9.js";import"./record.43702d11.js";import"./pubsub.d1622d77.js";import"./Paragraph.42f17176.js";import"./Base.f82c0529.js";import"./Typography.827084de.js";import"./Modal.44ae6a9a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js";import"./url.c5408f2f.js";import"./index.e66e1d37.js";import"./Title.c00241dd.js";import"./Text.2f7556a1.js";import"./index.7bcb0088.js";import"./index.3a4d17fa.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="b15b5303-766f-43ae-917d-0895fb44a33e",t._sentryDebugIdIdentifier="sentry-dbid-b15b5303-766f-43ae-917d-0895fb44a33e")}catch{}})();const Y=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],p=async e=>{await n.create(a,e.email),m()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:p},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.3cd99ccf.js.map
