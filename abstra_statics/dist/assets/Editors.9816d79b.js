import{d as y,eB as b,H as g,b as _,c as w,u as h}from"./outputWidgets.d6d96ec7.js";import{a as I}from"./asyncComputed.1b2420c8.js";import{b as k}from"./router.a5fc5df9.js";import"./index.bd2c571b.js";import{M as n}from"./member.4044469f.js";import{C as x}from"./CrudView.d96eb331.js";import{L as C}from"./icons.7b0283be.js";import{a as v}from"./ant-design.c198b6a8.js";import"./Form.cd215f8b.js";import"./hasIn.62b690a8.js";import"./index.cf4c23b9.js";import"./record.12f5a3cc.js";import"./pubsub.02c72f28.js";import"./Paragraph.34cf35f2.js";import"./Base.338ee0ee.js";import"./Typography.8b2cb2d2.js";import"./Modal.a9c09b04.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.08292008.js";import"./url.73fc30e4.js";import"./index.1507d19b.js";import"./Title.dda512f8.js";import"./Text.b5eccbba.js";import"./index.e619fc41.js";import"./index.5c374b44.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="8d28ee2c-a88d-49c1-a33f-642991d3eaa7",t._sentryDebugIdIdentifier="sentry-dbid-8d28ee2c-a88d-49c1-a33f-642991d3eaa7")}catch{}})();const X=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Editors.9816d79b.js.map
