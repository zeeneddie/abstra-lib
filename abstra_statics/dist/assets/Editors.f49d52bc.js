import{d as y,eB as b,H as g,b as _,c as w,u as h}from"./outputWidgets.7dcb9763.js";import{a as I}from"./asyncComputed.1391bc4e.js";import{b as k}from"./router.c239924b.js";import"./index.8803a7ce.js";import{M as n}from"./member.5fbf3b1d.js";import{C as x}from"./CrudView.498f2862.js";import{L as C}from"./icons.28fdd925.js";import{a as v}from"./ant-design.5f27df94.js";import"./Form.d1397da7.js";import"./hasIn.a0faa635.js";import"./popupNotifcation.2e66fb53.js";import"./index.cf4c23b9.js";import"./record.c580fef2.js";import"./pubsub.a9318333.js";import"./Paragraph.546e285b.js";import"./Base.959092ed.js";import"./Typography.890fd94a.js";import"./Modal.6b55c8db.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7b65ae43.js";import"./url.1d026e93.js";import"./index.5807d2be.js";import"./Title.a796f87f.js";import"./Text.c3748e80.js";import"./index.ee476d81.js";import"./index.ad1dd235.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="54546330-0de2-4eaf-a7f5-8d2f1a7efa6f",t._sentryDebugIdIdentifier="sentry-dbid-54546330-0de2-4eaf-a7f5-8d2f1a7efa6f")}catch{}})();const Y=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function p(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:c,result:f,refetch:m}=I(()=>n.list(a)),u=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=f.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(c),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:u.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.f49d52bc.js.map
