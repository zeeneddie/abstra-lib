import{d as h,b as e,c as s,E as q,bw as f,ez as I,er as d,eA as $,e as y,t as M,F as S,eu as m,u as j,eW as O,eG as P,ey as A,bu as k,eq as C,aS as T,eE as N,eB as G,eC as L}from"./registerWidgets.06c1cec2.js";import{b as D}from"./index.f0f8a229.js";import{T as V,a as E}from"./Tab.3d92dc1b.js";import"./gateway.9c20ccdc.js";import{C as F}from"./connector.0799acb6.js";import{a as U}from"./asyncComputed.1cd01399.js";import{B as z}from"./BackButton.537fc728.js";import{S as J}from"./SaveButton.73a8051e.js";import{L as W}from"./CircularLoading.0e9dd4ec.js";import"./passwordlessManager.f02eb77f.js";import"./pubsub.61d9b2cb.js";import"./storage.c14c1fad.js";import"./activeRecord.0be1ff51.js";import"./icons.42c6d84c.js";import"./lottie.449a7401.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[o]="9450b06e-4901-4f00-9a78-643e0c908bb3",u._sentryDebugIdIdentifier="sentry-dbid-9450b06e-4901-4f00-9a78-643e0c908bb3")}catch{}})();const H=["value"],Q=h({__name:"TextInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){return(r,n)=>(e(),s("input",{value:r.value,onChange:n[0]||(n[0]=t=>o("change",t.target.value))},null,40,H))}}),X=["value"],Y=h({__name:"NumberInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){return(r,n)=>(e(),s("input",{value:r.value,type:"number",onChange:n[0]||(n[0]=t=>o("change",t.target.value))},null,40,X))}}),Z=["value"],x=h({__name:"BooleanInput",props:{value:{type:Boolean},schema:{}},emits:["change"],setup(u,{emit:o}){return(r,n)=>(e(),s("input",{value:r.value,type:"checkbox",onChange:n[0]||(n[0]=t=>o("change",t.target.checked))},null,40,Z))}}),K={class:"oi"},ee={class:"oi-item-label"},te=h({__name:"ObjectInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){var g;const r=u,n=q({value:(g=r.value)!=null?g:{}}),t=(b,a)=>{n.value[b]=a,c()},c=()=>{o("change",n.value)};return(b,a)=>(e(),s("div",K,[(e(!0),s(f,null,I(r.schema.values,(v,i)=>(e(),s("div",{key:i,class:"oi-item"},[d("div",ee,$(i),1),y(B,{class:"oi-item-input",schema:v,value:n.value[i],onChange:_=>t(i,_)},null,8,["schema","value","onChange"])]))),128))]))}});const se=M(te,[["__scopeId","data-v-bd751ecc"]]),ne={class:"ai"},ae=["onClick"],oe=h({__name:"ArrayInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){var a;const n=q({value:(a=u.value)!=null?a:[]}),t=()=>{n.value.push(void 0)},c=v=>{n.value.splice(v,1),b()},g=(v,i)=>{n.value[v]=i,b()},b=()=>{o("change",n.value)};return(v,i)=>(e(),s("div",ne,[(e(!0),s(f,null,I(n.value,(_,l)=>(e(),s("div",{key:l,class:"ai-item"},[y(B,{schema:v.schema.items,value:_,onChange:p=>g(l,p)},null,8,["schema","value","onChange"]),d("button",{class:"ai-item-remove",onClick:p=>c(l)},"x",8,ae)]))),128)),d("button",{class:"ai-item-add",onClick:i[0]||(i[0]=_=>t())},"Add")]))}});const re=M(oe,[["__scopeId","data-v-a6c8b9fb"]]),ue=["value"],ce=["value"],le=h({__name:"OptionsInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){return(r,n)=>(e(),s("select",{value:r.value,onChange:n[0]||(n[0]=t=>o("change",t.target.value))},[(e(!0),s(f,null,I(r.schema.values,t=>(e(),s("option",{key:t,value:t},$(t),9,ce))),128))],40,ue))}}),ie=["value"],de=h({__name:"UnionInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){return(r,n)=>(e(),s("input",{value:r.value,onChange:n[0]||(n[0]=t=>o("change",t.target.value))},null,40,ie))}}),pe=["value"],_e=h({__name:"AnyInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){return(r,n)=>(e(),s("input",{value:r.value,onChange:n[0]||(n[0]=t=>o("change",t.target.value))},null,40,pe))}}),me={string:Q,number:Y,boolean:x,object:se,array:re,options:le,any:_e,union:de},he={class:"gi"},ve={key:0,class:"gi-header"},ge={key:0,class:"gi-label"},be={key:1,class:"gi-tags"},ye={key:0,class:"gi-required"},fe={key:1,class:"gi-required"},Ie={key:1,class:"gi-description"},$e=h({__name:"GenericInput",props:{value:{},schema:{}},emits:["change"],setup(u,{emit:o}){const r=u,n=S(()=>({component:me[r.schema.type],props:{value:r.value,schema:r.schema}}));return(t,c)=>(e(),s("div",he,["label"in t.schema?(e(),s("div",ve,["label"in t.schema?(e(),s("label",ge,$(t.schema.label),1)):m("",!0),"required"in t.schema||"secret"in t.schema?(e(),s("div",be,["required"in t.schema&&t.schema.required?(e(),s("span",ye,"[Required]")):m("",!0),"secret"in t.schema&&t.schema.secret?(e(),s("span",fe,"[Secret]")):m("",!0)])):m("",!0)])):m("",!0),"description"in t.schema?(e(),s("div",Ie,$(t.schema.description),1)):m("",!0),(e(),j(P(n.value.component),O({class:"gi-input"},n.value.props,{onChange:c[0]||(c[0]=g=>o("change",g))}),null,16))]))}});const B=M($e,[["__scopeId","data-v-dd33d764"]]),R=u=>(G("data-v-63dce332"),u=u(),L(),u),ke={class:"page settings"},Ce={class:"page test"},Se={class:"test-method-selector"},Be=R(()=>d("label",{class:"test-method-selector-label"},"Method",-1)),Me=R(()=>d("option",{value:null,disabled:"",selected:"",hidden:""},"Select a method",-1)),Re=["value"],we={key:0,class:"test-method-parameters"},je=R(()=>d("label",{class:"test-method-parameters-label"},"Params",-1)),qe={key:1,class:"test-method-response"},De=R(()=>d("label",{class:"test-method-response-label"},"Response",-1)),Ee={key:0,class:"test-method-response-errors"},Oe={key:1,class:"test-method-response-returns"},Pe={class:"test-method-response-returns-value"},Ae=h({__name:"ConnectorEditor",setup(u){const o=S(()=>{var i;return`/projects/${(i=c.value)==null?void 0:i.projectId}/connectors`}),n=A().params.connectorId,{loading:t,result:c}=U(()=>F.get(n)),g=S(()=>{var i;return(i=c.value)!=null&&i.schema.methods?Object.keys(c.value.schema.methods).reduce((_,l)=>{const p=c.value.schema.methods[l];return[..._,{key:l,...p}]},[]):[]}),b=S(()=>!c.value||!(c.value.type in D.schema)?null:D.schema[c.value.type]),a=q({testMethod:null,testParams:{},testResponse:null}),v=async()=>{!c.value||!a.testMethod||!a.testParams||(a.testResponse=await c.value.test(a.testMethod,a.testParams))};return(i,_)=>k(t)||!k(c)||!b.value?(e(),j(W,{key:0})):(e(),j(V,{key:1,class:"connector-editor"},{left:C(()=>[y(z,{link:o.value},null,8,["link"])]),right:C(()=>[y(J,{model:k(c)},null,8,["model"])]),default:C(()=>[y(E,{title:"Settings"},{default:C(()=>[d("div",ke,[(e(!0),s(f,null,I(b.value.settings,(l,p)=>(e(),s("div",{key:p},[y(B,{schema:l,value:k(c).settings[p],onChange:w=>k(c).settings[p]=w},null,8,["schema","value","onChange"])]))),128))])]),_:1}),y(E,{title:"Test"},{default:C(()=>[d("div",Ce,[d("div",Se,[Be,T(d("select",{"onUpdate:modelValue":_[0]||(_[0]=l=>a.testMethod=l),class:"test-method-selector-selector"},[Me,(e(!0),s(f,null,I(g.value,l=>(e(),s("option",{key:l.key,value:l.key},$(l.label),9,Re))),128))],512),[[N,a.testMethod]])]),a.testMethod?(e(),s("div",we,[je,(e(!0),s(f,null,I(k(c).schema.methods[a.testMethod].params,(l,p)=>(e(),s("div",{key:p,class:"test-field"},[y(B,{schema:l,value:a.testParams[p],onChange:w=>a.testParams[p]=w},null,8,["schema","value","onChange"])]))),128)),d("button",{class:"test-method-run",onClick:_[1]||(_[1]=l=>v())},"Test")])):m("",!0),a.testResponse?(e(),s("div",qe,[De,a.testResponse.errors.length>0?(e(),s("div",Ee,[(e(!0),s(f,null,I(a.testResponse.errors,l=>(e(),s("div",{key:l},$(l),1))),128))])):m("",!0),a.testResponse.returns&&Object.keys(a.testResponse.returns).length>0?(e(),s("div",Oe,[d("span",Pe,[d("pre",null,$(JSON.stringify(a.testResponse.returns,null,2)),1)])])):m("",!0)])):m("",!0)])]),_:1})]),_:1}))}});const xe=M(Ae,[["__scopeId","data-v-63dce332"]]);export{xe as default};
//# sourceMappingURL=ConnectorEditor.e52523dd.js.map
