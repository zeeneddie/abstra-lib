import{d as b,ez as y,F as g,b as _,c as w,u as h}from"./outputWidgets.517466a4.js";import{a as I}from"./asyncComputed.4cc49353.js";import{b as k}from"./router.7372192a.js";import"./index.93c4bd99.js";import{M as n}from"./member.e7522fff.js";import{C as x}from"./CrudView.3319d010.js";import{F as C}from"./icons.18ac3d6d.js";import{a as M}from"./ant-design.6f3f0026.js";import"./FormItem.ebe02103.js";import"./hasIn.41d385a0.js";import"./jwt-decode.esm.74bd4619.js";import"./storage.a7faa4ce.js";import"./index.c09b1845.js";import"./index.cf4c23b9.js";import"./record.00f55d8c.js";import"./pubsub.1c68a664.js";import"./Title.50fff1e9.js";import"./Text.b4fa08c4.js";import"./Form.dedf0123.js";import"./Modal.c37f1dd1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.541da426.js";import"./url.f9726388.js";import"./index.1de61334.js";import"./index.79f0c9dc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="4fc73774-6b0e-44c1-8c26-1c3a1b914564",t._sentryDebugIdIdentifier="sentry-dbid-4fc73774-6b0e-44c1-8c26-1c3a1b914564")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function p(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.84c53e8d.js.map
