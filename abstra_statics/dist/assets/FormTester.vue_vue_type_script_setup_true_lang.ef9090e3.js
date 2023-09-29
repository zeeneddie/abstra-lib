import{d as R,r as y,H as T,b as c,c as f,w as i,f as n,et as w,eB as x,e as K,b2 as B,eC as E,u as t,bw as C,c6 as I,c7 as F,J as D,ez as A,bR as M}from"./outputWidgets.d6897520.js";import{R as N}from"./SmartConsole.5f1c5f28.js";import{c as L,A as b}from"./Title.9e102f51.js";import{F as P}from"./Form.a2bccbf0.js";import{W as V}from"./workspaces.fb65e732.js";import{R as W,F as H}from"./broker.2631cbda.js";import{a as U}from"./asyncComputed.2c363ccc.js";import{r as z}from"./index.40bea6c2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[d]="98e048a1-3d0d-45d2-9ce8-ad2e4611d3d0",o._sentryDebugIdIdentifier="sentry-dbid-98e048a1-3d0d-45d2-9ce8-ad2e4611d3d0")}catch{}})();const G="forms_workspace_id_path_key",J="This path is already being used by another form or dash on your workspace",te=R({__name:"FormSettings",props:{form:{}},setup(o){const e=y(o.form),m=[{label:"General",props:[{label:"Form name",valueKey:"title"}]},{label:"Welcome Screen",props:[{label:"Title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],g=T({pathError:null,sectionsShown:[!0,!1,!1]}),v=l=>{l.detail.includes(G)&&(g.pathError=J)};return addEventListener("hasura-error",v),(l,u)=>(c(),f(t(P),{layout:"vertical"},{default:i(()=>[n(N,{runtime:e.value},null,8,["runtime"]),(c(),w(C,null,x(m,r=>K("div",{key:r.label},[n(t(L),{level:3},{default:i(()=>[B(E(r.label),1)]),_:2},1024),(c(!0),w(C,null,x(r.props,s=>(c(),f(t(b),{key:s.label,label:s.label},{default:i(()=>[n(t(I),{type:"text",value:e.value[s.valueKey],onChange:p=>e.value[s.valueKey]=p.target.value},null,8,["value","onChange"])]),_:2},1032,["label"]))),128))])),64)),n(t(b),{label:"Start smart form automatically"},{default:i(()=>[n(t(F),{checked:e.value.autoStart,"onUpdate:checked":u[0]||(u[0]=r=>e.value.autoStart=r)},null,8,["checked"])]),_:1}),n(t(b),{label:"Allow the user to restart the smart form after it is over"},{default:i(()=>[n(t(F),{checked:e.value.allowRestart,"onUpdate:checked":u[1]||(u[1]=r=>e.value.allowRestart=r)},null,8,["checked"])]),_:1})]),_:1}))}}),ae=R({__name:"FormTester",props:{form:{},logService:{}},setup(o,{expose:d}){var h,k,_,S;const e=o,{result:m,loading:g}=U(()=>V.get()),v=y({}),l=D(()=>W.create({formPath:e.form.path}));(h=l.value)==null||h.on("stdout",a=>{e.logService.log({type:"stdout",log:a.log})}),(k=l.value)==null||k.on("stderr",a=>{e.logService.log({type:"stderr",log:a.log})}),(_=l.value)==null||_.onClose(()=>{e.logService.log({type:"stderr",log:"Program closed"})}),(S=l.value)==null||S.on("files:changed",()=>{e.logService.log({type:"files-changed",log:"Files changed"})});const u=A(),r=({path:a})=>{z("editor",u,a)},s=y(null);async function p(){var a;return e.logService.log({type:"restart"}),(a=s.value)==null?void 0:a.run()}return d({restart:p}),(a,$)=>t(g)||!t(m)?(c(),f(t(M),{key:0})):(c(),f(H,{key:1,ref_key:"runner",ref:s,form:a.form.makeRunnerData(t(m)),params:v.value,"is-preview":"","enable-auto-focus":"",broker:l.value,onNavigate:r,onLogout:p},null,8,["form","params","broker"]))}});export{ae as _,te as a};
//# sourceMappingURL=FormTester.vue_vue_type_script_setup_true_lang.ef9090e3.js.map