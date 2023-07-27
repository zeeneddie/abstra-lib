import{d as P,r as w,v as T,b as c,c as m,x as r,F as S,L as C,N as F,V as K,a1 as R,e as s,O as H,Q as W,q as L,K as A,z as a,t as k,w as f,D as U,H as z,J as G}from"./registerWidgets.ad696c68.js";import{L as J}from"./CircularLoading.1b0ceab6.js";import{E as O}from"./Error.1fa9e8b0.js";import{R as Q,F as j}from"./broker.0b03ffc6.js";import{R as X,_ as Y,S as Z}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.89e589ba.js";import{T as ee,B as te,a as B}from"./BackButton.24741e55.js";import{l as D}from"./log.812f9d15.js";import{a as I}from"./asyncComputed.40a67fe8.js";import{F as ae}from"./forms.b1d3d225.js";import{W as re}from"./workspaces.d73a0523.js";import{S as oe}from"./SaveButton.82c831ae.js";import{D as se}from"./DocsButton.3f80ab35.js";import{P as le}from"./PreviewButton.c589ed3a.js";import"./lottie.d1a83079.js";import"./passwordlessManager.86ad8b48.js";import"./icons.1c1f9d53.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.a0f7f94d.js";import"./Passwordless.896adb7f.js";import"./executeJs.5aebf107.js";import"./PlayerNavbar.049fd037.js";import"./index.5e96dbf3.js";import"./WidgetsFrame.afffe632.js";import"./colors.698f0f3f.js";import"./Modal.d606972f.js";import"./dashes.55442710.js";import"./activeRecord.da3a3625.js";import"./runnerData.50606928.js";import"./hooks.11fa8e4c.js";import"./jobs.519b05d4.js";import"./login.d93a4279.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[d]="d1d88122-8c94-450c-9ff3-a7f887e2bed0",o._sentryDebugIdIdentifier="sentry-dbid-d1d88122-8c94-450c-9ff3-a7f887e2bed0")}catch{}})();const ne="forms_workspace_id_path_key",M=o=>(H("data-v-6ccbe7b5"),o=o(),W(),o),ie={class:"form-settings"},ce={class:"content"},ue={class:"subsection-label"},de={class:"property-label"},me=["value","placeholder","onChange"],pe={class:"content"},fe={class:"property"},_e=M(()=>r("div",{class:"property-label"},"Start smart form automatically",-1)),ve={class:"property"},he=M(()=>r("div",{class:"property-label"}," Allow the user to restart the smart form after it is over ",-1)),ye=P({__name:"FormSettings",props:{form:null},setup(o){const t=w(o.form),_=[{label:"General",props:[{label:"Form name",valueKey:"title"}]},{label:"Welcome Screen",props:[{label:"Title",fallbackKey:"title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],v=T({pathError:null,sectionsShown:[!0,!1,!1]}),y=p=>{p.detail.includes(ne)&&(v.pathError=l)},l="This path is already being used by another form or dash on your workspace";return addEventListener("hasura-error",y),(p,u)=>(c(),m("div",ie,[r("div",ce,[(c(),m(S,null,C(_,n=>r("div",{key:n.label,class:"subsection"},[r("div",ue,F(n.label),1),(c(!0),m(S,null,C(n.props,i=>{var h;return c(),m("div",{key:i.label,class:"property column"},[r("div",de,F(i.label),1),r("input",{class:"property-input",type:"text",value:t.value[i.valueKey],placeholder:(h=i.fallbackKey?t.value[i.fallbackKey]:null)!=null?h:"Enter message",onChange:b=>t.value[i.valueKey]=b.target.value},null,40,me)])}),128))])),64))]),r("div",pe,[r("div",fe,[K(r("input",{"onUpdate:modelValue":u[0]||(u[0]=n=>t.value.autoStart=n),class:"checkbox-input",type:"checkbox"},null,512),[[R,t.value.autoStart]]),_e]),r("div",ve,[K(r("input",{"onUpdate:modelValue":u[1]||(u[1]=n=>t.value.allowRestart=n),class:"checkbox-input",type:"checkbox"},null,512),[[R,t.value.allowRestart]]),he])]),s(X,{runtime:t.value},null,8,["runtime"])]))}});const be=L(ye,[["__scopeId","data-v-6ccbe7b5"]]),ge={class:"page"},ke={key:1,class:"error"},we=P({__name:"FormEditor",setup(o){const d=z(),t=G(),_=T({fullscreen:!1,rightPanelCollapsed:!1,hasChanges:!1,started:!1});addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="s"&&(e.preventDefault(),h())});const v=w(null),{loading:y,result:l,error:p,refetch:u}=I(async()=>{const e=await ae.get(t.params.formPath);return g(),e}),{result:n}=I(()=>re.get()),i=w(!1);async function h(){var e;i.value=!0;try{await((e=l.value)==null?void 0:e.save())}finally{i.value=!1}}const b=A(()=>Q.create({isLocal:!1,formPath:t.params.formPath,isPreview:!0})),q=()=>{D.clear()},g=async()=>{var e;return D.log({type:"restart"}),(e=v.value)==null?void 0:e.run()},V=({path:e,type:x})=>{x==="dash"?d.push({name:"dashEditor",params:{dashPath:e},query:t.query}):(d.push({name:"editor",params:{formPath:e},query:t.query}),u())},N=()=>{_.started=!0},$=()=>{_.started=!1};return(e,x)=>{var E;return c(),m(S,null,[r("div",ge,[a(y)||!a(l)||!a(n)?(c(),k(J,{key:0})):a(p)?(c(),m("div",ke,[s(O,{error:a(p),onReload:a(u)},null,8,["error","onReload"])])):(c(),k(ee,{key:2},{left:f(()=>[s(te,{link:"/_editor/forms"})]),right:f(()=>[s(se),s(le,{model:a(l)},null,8,["model"]),s(oe,{model:a(l)},null,8,["model"])]),default:f(()=>[s(B,{title:"Preview"},{default:f(()=>[s(j,{ref_key:"runner",ref:v,form:a(l).makeRunnerData(a(n)),params:a(t).query,"is-preview":!0,"enable-auto-focus":!1,broker:a(b),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:V,onLogout:g,onExit:$,onStart:N},null,8,["form","params","broker"])]),_:1}),s(B,{title:"Settings"},{default:f(()=>[s(be,{form:a(l)},null,8,["form"])]),_:1})]),_:1})),a(l)?(c(),k(Z,{key:3,runtime:"forms",onRestart:g,onClearTerminal:q})):U("",!0)]),s(Y,{"has-changes":(E=a(l))==null?void 0:E.hasChanges()},null,8,["has-changes"])],64)}}});const Ze=L(we,[["__scopeId","data-v-b68827d7"]]);export{Ze as default};
//# sourceMappingURL=FormEditor.e5f10f6b.js.map
