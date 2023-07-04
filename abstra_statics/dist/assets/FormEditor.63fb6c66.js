import{d as V,r as S,v as q,b as n,c as d,x as s,F as R,L as K,N as x,V as T,a0 as P,e as l,O as z,Q as j,q as A,K as G,z as t,t as w,w as v,D as J,H as O,J as Q,a as X,S as B,G as Y}from"./registerWidgets.802bba2f.js";import{L as Z}from"./CircularLoading.5c7f2ad7.js";import{E as ee}from"./Error.065a6318.js";import{R as te,F as ae}from"./broker.5716bf12.js";import{R as se,S as oe}from"./SmartConsole.b3382257.js";import{k as re,j as le}from"./icons.03f7ad73.js";import{T as ne,B as ie,a as L}from"./BackButton.f84b7a41.js";import{l as M}from"./log.8028a717.js";import{a as I}from"./asyncComputed.1364aaa9.js";import{F as ce}from"./forms.91463966.js";import{W as ue}from"./workspaces.4c177a35.js";import"./passwordlessManager.d5134797.js";import"./Passwordless.50bb9805.js";import"./WidgetsFrame.8f0c7a42.js";import"./index.7eb978ee.js";import"./Modal.e13f7972.js";import"./dashes.ca1ade9b.js";import"./utils.95f0e9e8.js";import"./pubsub.a0411919.js";import"./runnerData.37fb2c95.js";import"./hooks.911e43af.js";import"./jobs.cb7d0efd.js";const pe="forms_workspace_id_path_key",N=u=>(z("data-v-7c6d2ec1"),u=u(),j(),u),me={class:"form-settings"},de={class:"content"},fe={class:"subsection-label"},ve={class:"property-label"},_e=["value","placeholder","onChange"],he={class:"content"},ye={class:"property"},be=N(()=>s("div",{class:"property-label"},"Start smart form automatically",-1)),ge={class:"property"},ke=N(()=>s("div",{class:"property-label"}," Allow the user to restart the smart form after it is over ",-1)),we=V({__name:"FormSettings",props:{form:null},setup(u){const a=S(u.form),p=[{label:"Welcome Screen",props:[{label:"Title",fallbackKey:"title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],h=q({pathError:null,sectionsShown:[!0,!1,!1]}),g=f=>{f.detail.includes(pe)&&(h.pathError=o)},o="This path is already being used by another form or dash on your workspace";return addEventListener("hasura-error",g),(f,c)=>(n(),d("div",me,[s("div",de,[(n(),d(R,null,K(p,r=>s("div",{key:r.label,class:"subsection"},[s("div",fe,x(r.label),1),(n(!0),d(R,null,K(r.props,i=>{var m;return n(),d("div",{key:i.label,class:"property column"},[s("div",ve,x(i.label),1),s("input",{class:"property-input",type:"text",value:a.value[i.valueKey],placeholder:(m=i.fallbackKey?a.value[i.fallbackKey]:null)!=null?m:"Enter message",onChange:y=>a.value[i.valueKey]=y.target.value},null,40,_e)])}),128))])),64))]),s("div",he,[s("div",ye,[T(s("input",{"onUpdate:modelValue":c[0]||(c[0]=r=>a.value.autoStart=r),class:"checkbox-input",type:"checkbox"},null,512),[[P,a.value.autoStart]]),be]),s("div",ge,[T(s("input",{"onUpdate:modelValue":c[1]||(c[1]=r=>a.value.allowRestart=r),class:"checkbox-input",type:"checkbox"},null,512),[[P,a.value.allowRestart]]),ke])]),l(se,{runtime:a.value},null,8,["runtime"])]))}});const Se=A(we,[["__scopeId","data-v-7c6d2ec1"]]),xe={class:"page"},Ce={key:1,class:"error"},Ee=V({__name:"FormEditor",setup(u){const _=O(),a=Q(),p=q({fullscreen:!1,rightPanelCollapsed:!1,hasChanges:!1,started:!1});addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="s"&&(e.preventDefault(),y())});const h=S(null),{loading:g,result:o,error:f,refetch:c}=I(async()=>{const e=await ce.get(a.params.formPath);return k(),e}),{result:r}=I(()=>ue.get()),i=()=>{o.value&&_.push(`/_editor/form/${encodeURIComponent(o.value.path)}/preview`)},m=S(!1);async function y(){var e;m.value=!0;try{await((e=o.value)==null?void 0:e.save())}finally{m.value=!1}}const D=G(()=>te.create({isLocal:!1,formPath:a.params.formPath,isPreview:!0})),$=()=>{M.clear()},k=async()=>{var e;if(!p.started){(e=h.value)==null||e.run();return}M.log({type:"restart"}),p.started=!1},H=({path:e,type:b})=>{b==="dash"?_.push({name:"dashEditor",params:{dashPath:e},query:a.query}):(_.push({name:"editor",params:{formPath:e},query:a.query}),c())},U=()=>{p.started=!0},W=()=>{p.started=!1};return(e,b)=>{const C=X("icon");return n(),d("div",xe,[t(g)||!t(o)||!t(r)?(n(),w(Z,{key:0})):t(f)?(n(),d("div",Ce,[l(ee,{error:t(f),onReload:t(c)},null,8,["error","onReload"])])):(n(),w(ne,{key:2},{left:v(()=>[l(ie,{link:"/_editor/forms"})]),right:v(()=>{var E,F;return[s("button",{class:"preview-button",onClick:i},[l(C,{class:"icon",path:t(re),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),B(" Preview ")]),s("button",{class:Y(["save-button",{changes:(E=t(o))==null?void 0:E.hasChanges()}]),onClick:b[0]||(b[0]=Fe=>y())},[l(C,{class:"icon",path:t(le),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),B(" "+x(m.value?"Saving ...":(F=t(o))!=null&&F.hasChanges()?"Save":"Saved"),1)],2)]}),default:v(()=>[l(L,{title:"Preview"},{default:v(()=>[l(ae,{ref_key:"runner",ref:h,form:t(o).makeRunnerData(t(r)),params:t(a).query,"is-preview":!0,"enable-auto-focus":!1,broker:t(D),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:H,onLogout:k,onExit:W,onStart:U},null,8,["form","params","broker"])]),_:1}),l(L,{title:"Settings"},{default:v(()=>[l(Se,{form:t(o)},null,8,["form"])]),_:1})]),_:1})),t(o)?(n(),w(oe,{key:3,runtime:"forms",onRestart:k,onClearTerminal:$})):J("",!0)])}}});const Qe=A(Ee,[["__scopeId","data-v-ab1b9fa2"]]);export{Qe as default};
//# sourceMappingURL=FormEditor.63fb6c66.js.map
