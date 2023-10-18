var fe=Object.defineProperty;var pe=(u,e,r)=>e in u?fe(u,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[e]=r;var l=(u,e,r)=>(pe(u,typeof e!="symbol"?e+"":e,r),r);import{a as B}from"./index.9ea8c44d.js";import{e as me,R as ve,P as ge}from"./executeJs.1a09d42d.js";import{L as ye}from"./CircularLoading.2c694ce3.js";import{W as be}from"./WidgetsFrame.cb4cea4e.js";import{d as U,a as we,b as c,et as y,c as w,ev as I,aC as ke,v as R,r as E,w as oe,aI as _e,u as z,eF as ee,e as x,eB as M,H as te,J as Ee,G as Se,eS as re,o as Pe,L as We,ex as ne,f as V,eT as Le,eU as Ae,eV as Ce,bf as q,eA as N,eI as Ie,eQ as T}from"./outputWidgets.397b3720.js";import{_ as Fe}from"./ActionButton.vue_vue_type_script_setup_true_lang.0b212a8d.js";import{r as Be,u as xe}from"./icons.5e65f599.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[e]="17ba5852-5278-4624-8829-c5f292be0bf7",u._sentryDebugIdIdentifier="sentry-dbid-17ba5852-5278-4624-8829-c5f292be0bf7")}catch{}})();function P(u){return"key"in u&&"value"in u&&"errors"in u}class J{constructor(e,r){l(this,"endedByPage",!1);l(this,"reactivePollInterval",null);l(this,"seq",0);l(this,"programEnded",!1);l(this,"widgetError",()=>{this.newPageState({widgets:[{type:"error"}],actions:[],fullWidth:!1,steps:null})});l(this,"widgetEnd",()=>{this.endedByPage||this.newPageState({widgets:[{type:"end"}],actions:this.pageActionFactory.restartAction,fullWidth:!1,steps:null})});l(this,"sendUser",e=>{this.broker.send({type:"auth:saved-jwt",jwt:e.jwt})});l(this,"sendBrowserTryDisconnect",()=>{this.broker.send({type:"browser:try-disconnect"})});l(this,"newPageStateListener",()=>{});l(this,"updatePageStateListener",()=>{});l(this,"onReactivePollListener",()=>{});l(this,"onErrorListener",()=>{});l(this,"onExitListener",()=>{});l(this,"onStartAuthListener");l(this,"onEndAuthListener");l(this,"onBadAuthListener");this.broker=e,this.pageActionFactory=r}static create(e,r,i){const n=new J(e,r);return n.broker.onClose(()=>{if(n.programEnded)return;const s="Connection with service closed before program ended";n.widgetError(),n.error(s)}),n.broker.on("form",({widgets:s,actions:o,buttonText:f,endProgram:m,reactivePollingInterval:k,steps:D})=>{n.newPageState({widgets:s,actions:n.pageActionFactory.fromPageActionsDto(f?[f]:o!=null?o:[]),fullWidth:s.some(L=>"fullWidth"in L&&L.fullWidth),steps:D}),k&&(n.reactivePollInterval=setInterval(n.onReactivePollListener,k*1e3)),m&&(n.endedByPage=!0,n.broker.send({type:"form-response",payload:{},secrets:[],seq:++n.seq}))}),n.broker.on("execute-js:request",async s=>{const o=await me(s);n.broker.send(o)}),n.broker.on("auth:require-info",s=>{n.newPageState({widgets:[],actions:[],fullWidth:!1,steps:null}),n.onStartAuthListener&&n.onStartAuthListener(s)}),n.broker.on("auth:valid-jwt",()=>{n.onEndAuthListener&&n.onEndAuthListener()}),n.broker.on("auth:invalid-jwt",()=>{console.warn("invalid jwt"),n.onBadAuthListener&&n.onBadAuthListener()}),n.broker.on("program:connection-error",s=>{n.widgetError(),n.error(s)}),n.broker.on("program:end",s=>{n.programEnded=!0,s.exitStatus!=="SUCCESS"||s.exception?(n.widgetError(),n.error(s)):(n.widgetEnd(),n.exit(s))}),n.broker.on("redirect",s=>{i.onRedirect(s.url,s.queryParams)}),n.broker.on("program:disconnect",s=>{n.exit(s)}),n.broker.on("heartbeat",()=>{n.broker.resetHeartbeatCounter()}),n.broker.on("form-update",({widgets:s,validation:o,seq:f})=>{f===n.seq&&n.updatePageState({widgets:s,error:{message:o.message,status:o.status},fullWidth:s.some(m=>"fullWidth"in m&&m.fullWidth)})}),n}handleAction(e,r,i){this.reactivePollInterval&&clearInterval(this.reactivePollInterval);const n={};Object.entries(e).forEach(([s,o])=>{n[s]=o}),this.broker.send({type:"form-response",payload:n,action:r==null?void 0:r.name,secrets:i,seq:++this.seq})}sendUserEvent(e,r){const i={};Object.entries(e).forEach(([n,s])=>{i[n]=s}),this.broker.send({type:"user-event",payload:i,secrets:r,seq:++this.seq})}init(e){this.broker.resetState(),this.newPageState({widgets:[],actions:[],fullWidth:!1,steps:null}),this.broker.connect(e!=null?e:{})}newPageState(e){this.newPageStateListener(e)}updatePageState(e){this.updatePageStateListener(e)}listenToNewPageState(e){this.newPageStateListener=e}listenToPageStateUpdate(e){this.updatePageStateListener=e}onReactivePoll(e){this.onReactivePollListener=e}error(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onErrorListener(e)}onError(e){this.onErrorListener=e}exit(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onExitListener(e)}onExit(e){this.onExitListener=e}onStartAuth(e){this.onStartAuthListener=e}onEndAuth(e){this.onEndAuthListener=e}onBadAuth(e){this.onBadAuthListener=e}}class W{constructor(e,r){l(this,"element",null);this.name=e,this.isDefault=r}static fromDto(e){return typeof e=="string"?new W(e,!1):new W(e.name,e.is_default)}setElement(e){e instanceof HTMLElement&&(this.element=e)}get isFocused(){return this.element===document.activeElement}focusOnButton(){var e;(e=this.element)==null||e.focus()}addKeydownListener(e){var r;(r=this.element)==null||r.addEventListener("keydown",e)}}class G{constructor(e){this.form=e}static from(e){return new G(e)}get startAction(){var e;return[W.fromDto((e=this.form.startButtonText)!=null?e:"Start")]}get restartAction(){var r;const e=(r=this.form.restartButtonText)!=null?r:"Restart";return this.form.allowRestart?[W.fromDto(e)]:[]}fromPageActionsDto(e){return e.filter(r=>!!r).map(r=>W.fromDto(r))}}const Ue={class:"outline-button"},Re=U({__name:"OutlineButton",props:{iconPath:{},noShadow:{type:Boolean},status:{}},setup(u){return(e,r)=>{const i=we("icon");return c(),y("button",Ue,[e.iconPath?(c(),w(i,{key:0,path:e.iconPath,fill:"#fff",class:"icon"},null,8,["path"])):I("",!0),ke(e.$slots,"default",{},void 0,!0)])}}});const De=R(Re,[["__scopeId","data-v-d16448de"]]),je=U({__name:"FormAutoFill",props:{broker:{},form:{}},setup(u){const e=u,r=window.__runs||(window.__runs={previous:[],current:[]});e.broker.on("start",()=>{r.previous=r.current,r.current=[]});const i=E(null);function n(){for(const f in r.current){const m=r.previous[f],k=r.current[f];if(!m||m.type!==k.type||m.type=="form"&&!ee.exports.isEqual(m.widgets,k.widgets)||m.type=="form-response"&&!ee.exports.isEqual(m.payload,k.payload))return null}const o=r.previous[r.current.length];if((o==null?void 0:o.type)!=="form-response")return null;i.value=o}function s(){const o=i.value;o&&e.broker.send(o)}return e.broker.on("form",o=>{r.current.push(o),n()}),e.broker.on("form-response",o=>{r.current.push(o),i.value=null}),(o,f)=>i.value?(c(),w(De,{key:0,"icon-path":z(Be),class:"form-auto-fill-btn",onClick:s},{default:oe(()=>[_e(" Repeat last answer ")]),_:1},8,["icon-path"])):I("",!0)}});const $e=R(je,[["__scopeId","data-v-9590d96b"]]),Oe={key:0,class:"hint"},Ve={class:"icon",viewBox:"0 0 24 24",style:{width:"20px",height:"20px"}},qe=["d"],Ne={class:"hint-content"},Te=U({__name:"WidgetHint",props:{hint:{}},setup(u){return(e,r)=>e.hint?(c(),y("div",Oe,[(c(),y("svg",Ve,[x("path",{d:z(xe)},null,8,qe)])),x("div",Ne,M(e.hint),1)])):I("",!0)}});const He=R(Te,[["__scopeId","data-v-419a518f"]]),Me={key:0,class:"form-wrapper"},ze=["id"],Je={key:1,class:"loading-wrapper"},Ge={key:2,class:"span-error"},Ke={class:"buttons"},Qe=U({__name:"FormRunner",props:{form:{},params:{},isPreview:{type:Boolean},enableAutoFocus:{type:Boolean},broker:{}},emits:["log","error","exit","navigate","logout","start","redirect"],setup(u,{expose:e,emit:r}){const i=u,n=[],s=E({}),o=E({}),f=E({}),m=E(!1),k=(t,a)=>{n[a]=t},D=E(null),L=te(()=>G.from(i.form)),ae=t=>r("navigate",t),K=()=>{h.value={widgets:[{type:"start"}],actions:L.value.startAction,fullWidth:!1,steps:null}};Ee(()=>i.form,()=>{var t;((t=h.value.widgets[0])==null?void 0:t.type)=="start"&&K()});const b=Se({user:null,authenticating:!1}),h=E({widgets:[],fullWidth:!1,actions:[],steps:null}),A=E("idle"),Q=te(()=>h.value.widgets.filter(t=>"secret"in t).reduce((t,a)=>"key"in a&&"secret"in a?[...t,{key:a.key,secret:a.secret}]:t,[]));j();function j(){b.user=B.getUser()}const ie=()=>{B.removeUser(),j(),r("logout")},g=J.create(i.broker,L.value,{onRedirect(t,a){r("redirect",t,a)}});g.onError(t=>{r("error",t),A.value="error"}),g.onExit(t=>{r("exit",t),A.value="over"}),g.onStartAuth(t=>{t.refresh?(B.removeUser(),j(),b.authenticating=!0):b.user?g.sendUser(b.user):b.authenticating=!0}),g.onEndAuth(()=>{b.authenticating=!1}),g.onBadAuth(()=>{B.removeUser(),b.user=null,b.authenticating=!0}),g.onReactivePoll(()=>{g.sendUserEvent(s.value,Q.value)});const le=t=>{b.user=t,g.sendUser(t)};g.listenToNewPageState(t=>{m.value=!1,h.value=t,re.init(i.enableAutoFocus,()=>$());const a={},p={};h.value.widgets.forEach(v=>{P(v)&&(a[v.key]=v.value,p[v.key]=v.errors)}),s.value=a,o.value=p,f.value={}}),g.listenToPageStateUpdate(t=>{m.value=!1,h.value={...h.value,...t};const a={},p={};h.value.widgets.forEach(v=>{P(v)&&(a[v.key]=v.value,p[v.key]=v.errors)}),s.value=a,o.value=p});const X=t=>{var a;if(!(A.value!=="running"||i.isPreview||!((a=window.should_ask_before_leave)==null||a)))return g.sendBrowserTryDisconnect(),t.preventDefault(),t.returnValue="Are you sure?",""};Pe(async()=>{window.addEventListener("beforeunload",X),K(),re.init(i.enableAutoFocus,t=>$(t)),i.form.autoStart&&O()}),We(()=>{i.broker.close(),window.removeEventListener("beforeunload",X)});const ue=()=>{n.forEach(t=>{!t||!("setErrors"in t)||typeof t.setErrors!="function"||t.setErrors()})},$=async t=>{if(A.value!=="running")return O();ue(),!(Object.values(f.value).some(p=>p.length>0)&&(t==null?void 0:t.name)!=="i18n_back_action")&&(g.handleAction(s.value,t,Q.value),m.value=!0)},O=async()=>{g.init(i.params),A.value="running",r("start")};function ce(t){var a;return P(t)&&(a=s.value[t.key])!=null?a:null}function Y(t){var C;if(!P(t))return[];const a=t.errors.map(d=>T.get(d,t)),v=((C=f.value[t.key])!=null?C:[]).map(d=>T.get(d,t));return[...a,...v]}function de(t,a){if(!P(t))return;const p={...s.value};p[t.key]=a,s.value=p,g.sendUserEvent(s.value)}function he(t,a){if(!P(t))return;const p={...f.value};p[t.key]=a,f.value=p}return e({run:O}),(t,a)=>(c(),w(be,{class:ne([{preview:t.isPreview},"runner"]),"main-color":t.form.mainColor,theme:t.form.theme,"font-family":t.form.fontFamily,runtime:"form"},{default:oe(()=>{var p,v,C;return[t.isPreview?(c(),w($e,{key:0,class:"auto-fill-btn",broker:t.broker,form:t.form,style:{"z-index":1}},null,8,["broker","form"])):I("",!0),V(ve,{ref_key:"runtimeCommonsRef",ref:D,runtime:t.form,"full-width":h.value.fullWidth,"steps-info":h.value.steps,"is-preview":t.isPreview,"user-email":(p=b.user)==null?void 0:p.claims.email,type:"forms",onLogout:ie,onNavigate:ae},null,8,["runtime","full-width","steps-info","is-preview","user-email"]),x("main",null,[b.authenticating?(c(),w(ge,{key:0,class:"form-auth",onDone:le})):(c(),y("div",{key:1,class:ne(["form",{"full-width":h.value.fullWidth}])},[h.value.widgets.length>0?(c(),y("div",Me,[h.value.widgets[0].type=="start"?(c(),w(Le,{key:0,form:t.form},null,8,["form"])):h.value.widgets[0].type=="end"?(c(),w(Ae,{key:1,"end-message":t.form.endMessage},null,8,["end-message"])):h.value.widgets[0].type=="error"?(c(),w(Ce,{key:2,"error-message":t.form.errorMessage},null,8,["error-message"])):(c(!0),y(q,{key:3},N(h.value.widgets,(d,F)=>{var Z;return c(),y("div",{id:d.type+F,key:(Z=d.key)!=null?Z:d.type+F,class:"widget"},[(c(),w(Ie(d.type),{ref_for:!0,ref:_=>k(_,F),value:ce(d),errors:Y(d),"user-props":d,runtime:"form","onUpdate:value":_=>de(d,_),"onUpdate:errors":_=>he(d,_)},null,40,["value","errors","user-props","onUpdate:value","onUpdate:errors"])),V(He,{hint:"hint"in d?d.hint:null},null,8,["hint"]),(c(!0),y(q,null,N(Y(d),_=>(c(),y("span",{key:_,class:"span-error"},M(_),1))),128))],8,ze)}),128))])):(c(),y("div",Je,[V(ye)])),(v=h.value.error)!=null&&v.message?(c(),y("span",Ge,M((C=h.value.error)==null?void 0:C.message),1)):I("",!0),x("div",Ke,[(c(!0),y(q,null,N(h.value.actions,d=>(c(),w(Fe,{key:d.name,loading:m.value,"display-name":z(T).get(d.name),action:d,onClick:F=>$(d)},null,8,["loading","display-name","action","onClick"]))),128))])],2))])]}),_:1},8,["class","main-color","theme","font-family"]))}});const at=R(Qe,[["__scopeId","data-v-2662bc94"]]),Xe=[WebSocket.CLOSING,WebSocket.CLOSED];function se(u,e){const r=u[e.type];if(!r){console.warn("no callback for",e.type);return}r.forEach(i=>i(e))}const S=class{constructor(e){l(this,"formPath",null);l(this,"ws",null);l(this,"callbacks",{"form-response":[],"execute-js:request":[],"execute-js:response":[],"form-update":[],start:[],"auth:info":[],"auth:saved-jwt":[],"auth:restart":[],"auth:validate-token":[],"auth:resend-token":[],heartbeat:[],"action-response":[],"user-event":[],"program:end":[],"program:disconnect":[],"program:connection-error":[],"files:changed":[],redirect:[],stderr:[],stdout:[],form:[],"auth:require-info":[],"auth:expecting-token":[],"auth:token-expired":[],"auth:invalid-token":[],"auth:invalid-jwt":[],"auth:valid-token":[],"auth:valid-jwt":[],"browser:disconnect":[],"browser:try-disconnect":[]});l(this,"onCloseCallbacks",[]);l(this,"heartbeatCounter",0);l(this,"heartbeatInterval");l(this,"params",{});var r;"formPath"in e&&(this.formPath=(r=e.formPath)!=null?r:null)}static create(e){return S._instance&&S._instance.close(),S._instance=new S(e),S._instance}get url(){return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/_socket?formPath=${encodeURIComponent(this.formPath)}`}resetState(){this.close()}resetHeartbeatCounter(){this.heartbeatCounter=0}on(e,r){this.callbacks[e].push(r)}clearWSEvents(){!this.ws||(clearInterval(this.heartbeatInterval),this.ws.onclose=()=>{},this.ws.onerror=()=>{},this.ws.onmessage=()=>{})}async connect(e,r=1){if(!(r>3))return this.params=e!=null?e:this.params,new Promise(i=>{this.clearWSEvents(),this.ws=new WebSocket(this.url),this.ws.onopen=()=>{i(),this.resetHeartbeatCounter(),this.send({type:"start",params:this.params})};let n=!1;const s=()=>{n||(n=!0)};this.ws.onclose=o=>{if(o.code===1006||!o.wasClean)return s();clearInterval(this.heartbeatInterval),this.onCloseCallbacks.forEach(f=>f())},this.ws.onerror=()=>s(),this.ws.onmessage=o=>{const f=JSON.parse(o.data);se(this.callbacks,f)},this.heartbeatInterval=setInterval(()=>{if(!(!this.ws||this.ws.readyState!==this.ws.OPEN)){if(this.heartbeatCounter++,this.heartbeatCounter>3)return this.ws.onclose=()=>{},clearInterval(this.heartbeatInterval),s();this.send({type:"heartbeat"})}},2e3)}).catch(()=>{this.connect(this.params,r+1)})}onClose(e){this.onCloseCallbacks.push(e)}close(){if(!this.ws){console.warn("no websocket to close");return}this.clearWSEvents(),this.ws.close()}async send(e){if(!this.ws){console.warn("no websocket to send");return}Xe.includes(this.ws.readyState)&&await this.connect(),this.ws.send(JSON.stringify(e)),se(this.callbacks,e)}};let H=S;l(H,"_instance");export{at as F,H as R};
//# sourceMappingURL=broker.4f667fb7.js.map
