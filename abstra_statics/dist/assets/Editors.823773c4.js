import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.6b7b2109.js";import{a as I}from"./asyncComputed.737c3e82.js";import{b as k}from"./router.4ce496fb.js";import"./index.a050040e.js";import{M as n}from"./member.c1e368a0.js";import{C as x}from"./CrudView.53580747.js";import{K as C}from"./icons.cb098b8a.js";import{a as v}from"./ant-design.25416f08.js";import"./Form.cdfe71d8.js";import"./hasIn.2705c14d.js";import"./popupNotifcation.5b64c683.js";import"./index.cf4c23b9.js";import"./record.12be9daf.js";import"./pubsub.ae834c9f.js";import"./Paragraph.8e58cc3a.js";import"./Base.17c7d462.js";import"./Typography.20e705fd.js";import"./Modal.d3414b99.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.cfeb9774.js";import"./url.a82b6fe6.js";import"./index.37d922d7.js";import"./Title.17a5bc38.js";import"./Text.2714d474.js";import"./index.0475a035.js";import"./index.02be8314.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="4d3c4c55-fc4b-497f-8cb6-55cdbd499c5a",t._sentryDebugIdIdentifier="sentry-dbid-4d3c4c55-fc4b-497f-8cb6-55cdbd499c5a")}catch{}})();const Y=b({__name:"Editors",setup(t){const a=y().params.organizationId,c=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),m()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:c,onCreate:l},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.823773c4.js.map
