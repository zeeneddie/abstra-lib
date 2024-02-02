import{d as g,b as t,ev as a,G as D,a$ as C,eC as I,e as O,eD as A,f as m,v as S,H as P,ex as _,c as y,e_ as G,eS as x,r as U,eB as H,eA as L,a as J,w as l,eK as K,u as o,ar as M,ae as Q,cE as T,bV as W}from"./outputWidgets.f2dbcdfc.js";import{B as X}from"./BaseLayout.49c9a2bb.js";import{a as Y}from"./asyncComputed.37132230.js";import{b as q}from"./index.89d31b1f.js";import{_ as Z}from"./SaveButton.vue_vue_type_script_setup_true_lang.3acddd29.js";import"./router.11cb60a2.js";import{P as ee}from"./project.f82b1ae3.js";import{C as te}from"./connector.2ee1946a.js";import{O as ne}from"./organization.5d2e51ee.js";import{T as ae,A as N}from"./TabPane.37e9c944.js";import{B as se,a as oe,c as re}from"./index.ad281f8e.js";import{F as V}from"./Form.45d9e489.js";import{A as E}from"./FormItem.cd189ec8.js";import{A as ue}from"./index.0a6c0680.js";import"./index.cf4c23b9.js";import"./record.50d91012.js";import"./pubsub.d8506141.js";import"./ant-design.7bf5dcea.js";import"./index.ab2d11b8.js";import"./Modal.cc063c68.js";import"./Base.e7a1d92f.js";import"./Link.7ebe42d5.js";import"./hasIn.84ebe126.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="b0d1849a-1e10-47ad-93fd-a2224b6d02a2",i._sentryDebugIdIdentifier="sentry-dbid-b0d1849a-1e10-47ad-93fd-a2224b6d02a2")}catch{}})();const ce=["value"],le=g({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ce))}}),ie=["value"],pe=g({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,ie))}}),de=["value"],me=g({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=e=>s("change",e.target.checked))},null,40,de))}}),_e={class:"oi"},ve={class:"oi-item-label"},he=g({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var f;const r=i,n=D({value:(f=r.value)!=null?f:{}}),e=(j,B)=>{n.value[j]=B,k()},k=()=>{s("change",n.value)};return(j,B)=>(t(),a("div",_e,[(t(!0),a(C,null,I(r.schema.values,(b,v)=>(t(),a("div",{key:v,class:"oi-item"},[O("div",ve,A(v),1),m(z,{class:"oi-item-input",schema:b,value:n.value[v],onChange:u=>e(v,u)},null,8,["schema","value","onChange"])]))),128))]))}});const ge=S(he,[["__scopeId","data-v-bd751ecc"]]),fe={class:"ai"},be=["onClick"],ye=g({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){var B;const n=D({value:(B=i.value)!=null?B:[]}),e=()=>{n.value.push(void 0)},k=b=>{n.value.splice(b,1),j()},f=(b,v)=>{n.value[b]=v,j()},j=()=>{s("change",n.value)};return(b,v)=>(t(),a("div",fe,[(t(!0),a(C,null,I(n.value,(u,w)=>(t(),a("div",{key:w,class:"ai-item"},[m(z,{schema:b.schema.items,value:u,onChange:d=>f(w,d)},null,8,["schema","value","onChange"]),O("button",{class:"ai-item-remove",onClick:d=>k(w)},"x",8,be)]))),128)),O("button",{class:"ai-item-add",onClick:v[0]||(v[0]=u=>e())},"Add")]))}});const ke=S(ye,[["__scopeId","data-v-a6c8b9fb"]]),$e=["value"],Ce=["value"],Ie=g({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("select",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},[(t(!0),a(C,null,I(r.schema.values,e=>(t(),a("option",{key:e,value:e},A(e),9,Ce))),128))],40,$e))}}),Ae=["value"],je=g({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Ae))}}),Be=["value"],Re=g({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){return(r,n)=>(t(),a("input",{value:r.value,onChange:n[0]||(n[0]=e=>s("change",e.target.value))},null,40,Be))}}),we={string:le,number:pe,boolean:me,object:ge,array:ke,options:Ie,any:Re,union:je},Me={class:"gi"},Oe={key:0,class:"gi-header"},Pe={key:0,class:"gi-label"},ze={key:1,class:"gi-tags"},De={key:0,class:"gi-required"},Se={key:1,class:"gi-required"},Te={key:1,class:"gi-description"},qe=g({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(i,{emit:s}){const r=i,n=P(()=>({component:we[r.schema.type],props:{value:r.value,schema:r.schema}}));return(e,k)=>(t(),a("div",Me,["label"in e.schema?(t(),a("div",Oe,["label"in e.schema?(t(),a("label",Pe,A(e.schema.label),1)):_("",!0),"required"in e.schema||"secret"in e.schema?(t(),a("div",ze,["required"in e.schema&&e.schema.required?(t(),a("span",De,"[Required]")):_("",!0),"secret"in e.schema&&e.schema.secret?(t(),a("span",Se,"[Secret]")):_("",!0)])):_("",!0)])):_("",!0),"description"in e.schema?(t(),a("div",Te,A(e.schema.description),1)):_("",!0),(t(),y(x(n.value.component),G({class:"gi-input"},n.value.props,{onChange:k[0]||(k[0]=f=>s("change",f))}),null,16))]))}});const z=S(qe,[["__scopeId","data-v-dd33d764"]]),Ne={key:0},Ve={key:1},Ee={key:0},Fe={key:1},pt=g({__name:"ConnectorEditor",setup(i){const s=U("connect"),n=H().params.connectorId,{result:e,loading:k}=Y(async()=>{const d=await te.get(n),p=await ee.get(d.projectId),$=await ne.get(p.organizationId);return K({connector:d,project:p,organization:$})}),f=P(()=>!k.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}/connectors`}]:void 0),j=L();function B(){e.value&&j.push({name:"connectors",params:{projectId:e.value.project.id}})}const b=P(()=>{var d;return(d=e.value)!=null&&d.connector.schema.methods?Object.entries(e.value.connector.schema.methods).reduce((p,[$,c])=>[...p,{key:$,...c}],[]):[]}),v=P(()=>{var d,p,$;return!((d=e.value)!=null&&d.connector)||!(((p=e.value)==null?void 0:p.connector.type)in q.schema)?null:q.schema[($=e.value)==null?void 0:$.connector.type]}),u=D({testMethod:void 0,testParams:{},testResponse:null}),w=async()=>{var d,p;!((d=e.value)!=null&&d.connector)||!u.testMethod||!u.testParams||(u.testResponse=await((p=e.value)==null?void 0:p.connector.test(u.testMethod,u.testParams)))};return(d,p)=>{const $=J("router-link");return t(),y(X,null,{navbar:l(()=>{var c;return[m(o(re),{title:(c=o(e))==null?void 0:c.connector.name,style:{padding:"5px 25px"},onBack:B},{footer:l(()=>[m(o(ae),{"active-key":s.value,"onUpdate:activeKey":p[0]||(p[0]=h=>s.value=h)},{default:l(()=>[m(o(N),{key:"connect",tab:"Connect"}),m(o(N),{key:"test",tab:"Test"})]),_:1},8,["active-key"])]),breadcrumb:l(()=>[f.value?(t(),y(o(se),{key:0},{default:l(()=>[(t(!0),a(C,null,I(f.value,(h,R)=>(t(),y(o(oe),{key:R},{default:l(()=>[m($,{to:h.path},{default:l(()=>[M(A(h.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):_("",!0)]),extra:l(()=>[o(e)?(t(),y(Z,{key:0,model:o(e).connector},null,8,["model"])):_("",!0)]),_:1},8,["title"])]}),content:l(()=>[o(e)&&s.value==="connect"?(t(),y(o(V),{key:0},{default:l(()=>{var c;return[(t(!0),a(C,null,I((c=v.value)==null?void 0:c.settings,(h,R)=>(t(),y(o(E),{key:R},{default:l(()=>[m(z,{schema:h,value:o(e).connector.settings[R],onChange:F=>o(e).connector.settings[R]=F},null,8,["schema","value","onChange"])]),_:2},1024))),128))]}),_:1})):_("",!0),o(e)&&s.value==="test"?(t(),y(o(V),{key:1},{default:l(()=>[m(o(E),{label:"Method"},{default:l(()=>[m(o(Q),{value:u.testMethod,"onUpdate:value":p[1]||(p[1]=c=>u.testMethod=c)},{default:l(()=>[m(o(T),{value:null,disabled:"",selected:"",hidden:""},{default:l(()=>[M("Select a method")]),_:1}),(t(!0),a(C,null,I(b.value,c=>(t(),y(o(T),{key:c.key,value:c.key},{default:l(()=>[M(A(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u.testMethod?(t(),a("div",Ne,[(t(!0),a(C,null,I(o(e).connector.schema.methods[u.testMethod].params,(c,h)=>(t(),a("div",{key:h},[m(z,{schema:c,value:u.testParams[h],onChange:R=>u.testParams[h]=R},null,8,["schema","value","onChange"])]))),128)),m(o(W),{type:"primary",onClick:p[2]||(p[2]=c=>w())},{default:l(()=>[M("Test")]),_:1})])):_("",!0),u.testResponse?(t(),a("div",Ve,[m(o(ue),{orientation:"left"},{default:l(()=>[M("Response")]),_:1}),u.testResponse.errors.length>0?(t(),a("div",Ee,[(t(!0),a(C,null,I(u.testResponse.errors,c=>(t(),a("div",{key:c},A(c),1))),128))])):_("",!0),u.testResponse.returns&&Object.keys(u.testResponse.returns).length>0?(t(),a("div",Fe,[O("span",null,[O("pre",null,A(JSON.stringify(u.testResponse.returns,null,2)),1)])])):_("",!0)])):_("",!0)]),_:1})):_("",!0)]),_:1})}}});export{pt as default};
//# sourceMappingURL=ConnectorEditor.538acf12.js.map