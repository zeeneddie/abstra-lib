import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.2e81476f.js";import{a as I}from"./asyncComputed.0ee4ad3a.js";import{b as k}from"./router.531c2e5b.js";import"./index.98d6c2e6.js";import{M as n}from"./member.a0125d27.js";import{C as x}from"./CrudView.03545da5.js";import{K as C}from"./icons.1049709e.js";import{a as M}from"./ant-design.25453a0f.js";import"./Form.c58bda6e.js";import"./hasIn.7eb5d716.js";import"./index.cf4c23b9.js";import"./record.50ac2043.js";import"./pubsub.1775b7b0.js";import"./Paragraph.fa427307.js";import"./Base.4b4fcd9e.js";import"./Typography.6b5bcced.js";import"./Modal.57765070.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.aec8d026.js";import"./url.3e4fa442.js";import"./index.2ae48476.js";import"./Title.8e26a800.js";import"./Text.1865a75b.js";import"./index.f59c4a04.js";import"./index.4b6136c5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="de4c58c8-1edf-41e7-a3e8-2f7a6939468d",t._sentryDebugIdIdentifier="sentry-dbid-de4c58c8-1edf-41e7-a3e8-2f7a6939468d")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function d(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.0f2e0d11.js.map
