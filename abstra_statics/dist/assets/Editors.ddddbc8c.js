import{d as y,eB as b,H as g,b as _,c as w,u as h}from"./outputWidgets.66cb3323.js";import{a as I}from"./asyncComputed.e916adae.js";import{b as k}from"./router.0bc1d0d5.js";import"./index.9d397e35.js";import{M as n}from"./member.9e8761af.js";import{C as x}from"./CrudView.4fbaeb64.js";import{K as C}from"./icons.bf22aa40.js";import{a as v}from"./ant-design.3885082e.js";import"./Form.6c3a2d9f.js";import"./hasIn.cda4df71.js";import"./popupNotifcation.9d486082.js";import"./index.cf4c23b9.js";import"./record.b20b5768.js";import"./pubsub.19cef690.js";import"./Paragraph.de06c047.js";import"./Base.e0db6d09.js";import"./Typography.2ce150f4.js";import"./Modal.7f50b274.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f80c2df7.js";import"./url.50176a21.js";import"./index.c07575ec.js";import"./Title.dfc9c803.js";import"./Text.86e9a2de.js";import"./index.c1ed2dcd.js";import"./index.02c3e4df.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="5d3773ee-f902-4359-9e49-e23185dee041",t._sentryDebugIdIdentifier="sentry-dbid-5d3773ee-f902-4359-9e49-e23185dee041")}catch{}})();const Y=y({__name:"Editors",setup(t){const r=b().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),m()};async function p(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),m())}const{loading:c,result:u,refetch:m}=I(()=>n.list(r)),f=g(()=>{var e,a;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(a=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(_(),w(x,{"entity-name":"members",loading:h(c),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.ddddbc8c.js.map
