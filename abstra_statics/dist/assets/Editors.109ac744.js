import{d as b,eB as y,H as g,b as _,c as w,u as h,eP as I}from"./outputWidgets.36438843.js";import{a as k}from"./asyncComputed.337ea25d.js";import{b as x}from"./router.dee1064a.js";import"./index.ec4ce82c.js";import{M as n}from"./member.5cdd1ec1.js";import{C}from"./CrudView.9ec0615c.js";import{a as v}from"./ant-design.ae109f6e.js";import"./Form.89631493.js";import"./hasIn.0e346df9.js";import"./popupNotifcation.a4e64d79.js";import"./index.cf4c23b9.js";import"./record.84099288.js";import"./pubsub.0ad28dde.js";import"./Paragraph.db54cd0a.js";import"./Text.0a4c76ae.js";import"./Modal.bc5706c4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6a8a8129.js";import"./url.5c79ed51.js";import"./index.173d5349.js";import"./Title.06965b70.js";import"./index.6dc92ff0.js";import"./index.c7e21684.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="29b1daee-756e-41a0-9c82-1be0bdf8ef39",t._sentryDebugIdIdentifier="sentry-dbid-29b1daee-756e-41a0-9c82-1be0bdf8ef39")}catch{}})();const U=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Editors.109ac744.js.map
