import{d as y,eA as b,H as g,b as _,c as w,u as h,eP as I}from"./outputWidgets.5cb6b216.js";import{a as k}from"./asyncComputed.422207e4.js";import{b as x}from"./router.3aca6a3e.js";import"./index.6b54af25.js";import{M as n}from"./member.064d5fb4.js";import{C}from"./CrudView.3940ce9e.js";import{a as v}from"./ant-design.1d19c841.js";import"./Form.d3a832dd.js";import"./hasIn.65bf4776.js";import"./popupNotifcation.f2c3d4bb.js";import"./index.cf4c23b9.js";import"./record.13b786ed.js";import"./pubsub.90b2bde9.js";import"./Paragraph.9bde9d4e.js";import"./Text.96d8bc72.js";import"./Modal.d3744136.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.74b75f0f.js";import"./BookOutlined.694a5006.js";import"./url.e52c7235.js";import"./index.bd13b177.js";import"./Title.f8fa874e.js";import"./index.15208e63.js";import"./index.0bf09368.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="807d4291-eac3-4f98-ab90-b96af9c004cd",t._sentryDebugIdIdentifier="sentry-dbid-807d4291-eac3-4f98-ab90-b96af9c004cd")}catch{}})();const W=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.0ebe78ff.js.map