import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.8c60f264.js";import{a as I}from"./asyncComputed.ec57bff0.js";import{b as k}from"./router.73027db0.js";import"./index.cefba0be.js";import{M as n}from"./member.40dcb26b.js";import{C as x}from"./CrudView.dddbc266.js";import{L as C}from"./icons.a1b2387c.js";import{a as v}from"./ant-design.efa26625.js";import"./Form.59d8a79a.js";import"./hasIn.2571917b.js";import"./popupNotifcation.9fb65665.js";import"./index.cf4c23b9.js";import"./record.12e29287.js";import"./pubsub.e2873ec1.js";import"./Paragraph.6e41b767.js";import"./Base.39a7265d.js";import"./Typography.7f982c9c.js";import"./Modal.bbbfe3c8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e0bea090.js";import"./url.446977b6.js";import"./index.251ea9f5.js";import"./Title.49f2815e.js";import"./Text.06b5e1a7.js";import"./index.449fb202.js";import"./index.55688c56.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="21b9b11f-8ed9-405b-a898-24ebd17c3391",t._sentryDebugIdIdentifier="sentry-dbid-21b9b11f-8ed9-405b-a898-24ebd17c3391")}catch{}})();const Y=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.dd0b66f4.js.map
