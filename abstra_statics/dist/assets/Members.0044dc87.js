import{d as f,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.f6d682fa.js";import{a as I}from"./asyncComputed.ed0deb47.js";import{b as k}from"./router.e47ff16a.js";import"./index.f59c680e.js";import{M as n}from"./member.320d1557.js";import{C as x}from"./CrudView.460455d0.js";import{K as C}from"./icons.42488cb2.js";import{a as M}from"./ant-design.d327c68e.js";import"./Form.3eacca1c.js";import"./hasIn.25a290f4.js";import"./index.cf4c23b9.js";import"./record.d9541040.js";import"./pubsub.16533839.js";import"./Paragraph.f4abe30c.js";import"./Base.7c6912dc.js";import"./Typography.9e9f2c8e.js";import"./Modal.e19cbbe1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.23d47507.js";import"./url.4b5dbfe0.js";import"./index.91f4c839.js";import"./Title.8b8d8ebc.js";import"./Text.f0ff112a.js";import"./index.2672fe00.js";import"./index.23ab44a9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="a1ba2cbd-5c26-46bf-bab1-bcfcecbb0f25",t._sentryDebugIdIdentifier="sentry-dbid-a1ba2cbd-5c26-46bf-bab1-bcfcecbb0f25")}catch{}})();const X=f({__name:"Members",setup(t){const a=y().params.organizationId,c=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),m()};async function p(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:b,refetch:m}=I(()=>n.list(a)),u=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=b.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:u.value,"create-button-text":"Add members",fields:c,onCreate:l},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.0044dc87.js.map
