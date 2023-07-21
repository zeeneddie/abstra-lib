var ae=Object.defineProperty;var le=(o,e,n)=>e in o?ae(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var l=(o,e,n)=>(le(o,typeof e!="symbol"?e+"":e,n),n);import{d as x,b as f,c as w,v as E,y as H,L as N,B as P,p as D,a as ue,q as y,A as ce,r as U,w as re,R as he,S as T,a1 as de,J as F,Q as fe,u as Y,a2 as Z,a3 as me,a4 as pe,o as ve,W as ge,E as ee,e as R,F as te,K as ne,a5 as we,a6 as ye}from"./registerWidgets.4cc86716.js";import{p as j}from"./passwordlessManager.d432fb48.js";import{k as be,n as ke}from"./icons.d4e872e2.js";import{_ as _e}from"./ActionButton.vue_vue_type_script_setup_true_lang.a22e4194.js";import{P as Ee}from"./Passwordless.42b443a5.js";import{e as Pe,R as Ie}from"./executeJs.725cb8c2.js";import{l as $}from"./log.30671484.js";import{W as Le}from"./WidgetsFrame.8a984b59.js";import{L as Se}from"./CircularLoading.249aa989.js";const xe={key:0,class:"hint"},De={class:"icon",viewBox:"0 0 24 24",style:{width:"20px",height:"20px"}},Ae=["d"],Ce={class:"hint-content"},We=x({__name:"WidgetHint",props:{hint:null},setup(o){return(e,n)=>o.hint?(f(),w("div",xe,[(f(),w("svg",De,[E("path",{d:H(be)},null,8,Ae)])),E("div",Ce,N(o.hint),1)])):P("",!0)}});const Be=D(We,[["__scopeId","data-v-419a518f"]]),Fe={class:"outline-button"},Re=x({__name:"OutlineButton",props:{iconPath:null,noShadow:{type:Boolean},status:null},setup(o){return(e,n)=>{const t=ue("icon");return f(),w("button",Fe,[o.iconPath?(f(),y(t,{key:0,path:o.iconPath,fill:"#fff",class:"icon"},null,8,["path"])):P("",!0),ce(e.$slots,"default",{},void 0,!0)])}}});const je=D(Re,[["__scopeId","data-v-d16448de"]]),$e=x({__name:"FormAutoFill",props:{broker:null,form:null},setup(o){const e=o,n=window.__runs||(window.__runs={previous:[],current:[]});e.broker.on("start",()=>{n.previous=n.current,n.current=[]});const t=U(null);function s(){for(const d in n.current){const c=n.previous[d],a=n.current[d];if(!c||c.type!==a.type||c.type=="form"&&!T.exports.isEqual(c.widgets,a.widgets)||c.type=="form-response"&&!T.exports.isEqual(c.payload,a.payload))return null}const i=n.previous[n.current.length];if((i==null?void 0:i.type)!=="form-response")return null;t.value=i}function h(){const i=t.value;i&&e.broker.send(i)}return e.broker.on("form",i=>{n.current.push(i),s()}),e.broker.on("form-response",i=>{n.current.push(i),t.value=null}),(i,d)=>t.value?(f(),y(je,{key:0,"icon-path":H(ke),class:"form-auto-fill-btn",onClick:h},{default:re(()=>[he(" Repeat last answer ")]),_:1},8,["icon-path"])):P("",!0)}});const Oe=D($e,[["__scopeId","data-v-9590d96b"]]);class k{constructor(e,n){l(this,"element",null);this.name=e,this.isDefault=n}static fromDto(e){return typeof e=="string"?new k(e,!1):new k(e.name,e.is_default)}setElement(e){e instanceof HTMLElement&&(this.element=e)}get isFocused(){return this.element===document.activeElement}focusOnButton(){var e;(e=this.element)==null||e.focus()}addKeydownListener(e){var n;(n=this.element)==null||n.addEventListener("keydown",e)}}class V{constructor(e){this.form=e}static from(e){return new V(e)}get startAction(){var e;return[k.fromDto((e=this.form.startButtonText)!=null?e:"Start")]}get restartAction(){var n;const e=(n=this.form.restartButtonText)!=null?n:"Restart";return this.form.allowRestart?[k.fromDto(e)]:[]}fromPageActionsDto(e){return e.filter(n=>!!n).map(n=>k.fromDto(n))}}async function Ne(o){window.should_ask_before_leave=!1,window.location.href=o.url}const Ue={redirect:Ne,"execute-js":Pe};class M{constructor(e,n){l(this,"loading",!1);l(this,"endedByPage",!1);l(this,"reactivePollInterval",null);l(this,"programEnded",!1);l(this,"widgetError",()=>{this.newPageDefinition({widgets:[{type:"error"}],actions:[],fullWidth:!1,hasError:!1,steps:null})});l(this,"widgetEnd",()=>{this.endedByPage||this.newPageDefinition({widgets:[{type:"end"}],actions:this.pageActionFactory.restartAction,fullWidth:!1,hasError:!1,steps:null})});l(this,"sendUser",e=>{this.broker.send({type:"auth:saved-jwt",jwt:e.jwt}),this.broker.send({type:"metadata",payload:{authenticated_user:e.claims.email}})});l(this,"sendBrowserTryDisconnect",()=>{this.broker.send({type:"browser:try-disconnect"})});l(this,"newPageDefinitionListener",()=>{});l(this,"updatePageDefinitionListener",()=>{});l(this,"onReactivePollListener",()=>{});l(this,"onErrorListener",()=>{});l(this,"onExitListener",()=>{});l(this,"onStartAuthListener");l(this,"onEndAuthListener");l(this,"onBadAuthListener");this.broker=e,this.pageActionFactory=n}static create(e,n){const t=new M(e,n);return t.broker.onClose(()=>{if(t.programEnded)return;const s="Connection with service closed before program ended";$.log({log:s,type:"stderr"}),t.widgetError(),t.error(s)}),t.broker.on("form",({widgets:s,actions:h,buttonText:i,endProgram:d,reactivePollingInterval:c,steps:a})=>{t.loading=!1,t.newPageDefinition({widgets:s,actions:t.pageActionFactory.fromPageActionsDto(i?[i]:h!=null?h:[]),fullWidth:s.some(v=>"fullWidth"in v&&v.fullWidth),hasError:!1,steps:a}),c&&(t.reactivePollInterval=setInterval(t.onReactivePollListener,c*1e3)),d&&(t.endedByPage=!0,t.broker.send({type:"form-response",payload:{},secrets:[]}))}),t.broker.on("action",async({action:s})=>{var d;let h=null,i;try{const{type:c}=s;h=(d=await Ue[c](s))!=null?d:null}catch(c){i=c.message}t.broker.send({type:"action-response",value:h,errorMessage:i})}),t.broker.on("auth:require-info",()=>{t.newPageDefinition({widgets:[],actions:[],fullWidth:!1,hasError:!1,steps:null}),t.onStartAuthListener&&t.onStartAuthListener()}),t.broker.on("auth:valid-jwt",()=>{t.onEndAuthListener&&t.onEndAuthListener()}),t.broker.on("auth:invalid-jwt",()=>{console.warn("invalid jwt"),t.onBadAuthListener&&t.onBadAuthListener()}),t.broker.on("stdout",s=>{$.log(s)}),t.broker.on("stderr",s=>{$.log(s)}),t.broker.on("program:connection-error",s=>{t.widgetError(),t.error(s)}),t.broker.on("program:end",s=>{t.programEnded=!0,s.exitCode||s.exception?(t.widgetError(),t.error(s)):(t.widgetEnd(),t.exit(s))}),t.broker.on("program:disconnect",s=>{t.exit(s)}),t.broker.on("not-enough-credits",()=>{t.error({error:"not-enough-credits"}),t.programEnded=!0}),t.broker.on("session-id",async s=>{t.broker.setSessionId(s.sessionId)}),t.broker.on("heartbeat",()=>{t.broker.resetHeartbeatCounter()}),t.broker.on("user-response-event",({widgets:s,validation:h})=>{t.updatePageDefinition({widgets:s,validation:{message:h.message,status:h.status},fullWidth:s.some(i=>"fullWidth"in i&&i.fullWidth)})}),t}next(e,n,t,s){if((de(Object.values(e))||!t)&&(n==null?void 0:n.name)!=="Back"){this.updatePageDefinition({hasError:!0});return}this.reactivePollInterval&&clearInterval(this.reactivePollInterval);const i={};Object.keys(e).forEach(d=>{i[d]=e[d].value}),this.loading=!0,this.broker.send({type:"form-response",payload:i,action:n==null?void 0:n.name,secrets:s}),this.newPageDefinition({widgets:[],fullWidth:!1,hasError:!1,actions:[],steps:null})}sendUserEvent(e,n){const t={};Object.keys(e).forEach(s=>{t[s]=e[s].value}),this.broker.send({type:"user-event",payload:t,secrets:n})}init(e){this.broker.resetState(),this.newPageDefinition({widgets:[],actions:[],fullWidth:!1,hasError:!1,steps:null}),this.broker.connect(e!=null?e:{})}newPageDefinition(e){this.newPageDefinitionListener(e)}updatePageDefinition(e){this.loading||this.updatePageDefinitionListener(e)}listenToNewPageDefinition(e){this.newPageDefinitionListener=e}listenToPageDefinitionUpdate(e){this.updatePageDefinitionListener=e}onReactivePoll(e){this.onReactivePollListener=e}error(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onErrorListener(e)}onError(e){this.onErrorListener=e}exit(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onExitListener(e)}onExit(e){this.onExitListener=e}onStartAuth(e){this.onStartAuthListener=e}onEndAuth(e){this.onEndAuthListener=e}onBadAuth(e){this.onBadAuthListener=e}}const Te={key:0,class:"form-wrapper"},He=["id"],Ve={key:0,class:"span-error"},Me={key:1,class:"loading-wrapper"},qe={class:"span-error"},Je={class:"buttons"},ze=x({__name:"FormRunner",props:{form:{type:Object,required:!0},params:Object,isPreview:Boolean,enableAutoFocus:{type:Boolean,required:!0},broker:{type:Object,required:!0}},emits:["log","error","exit","navigate","logout","start"],setup(o,{expose:e,emit:n}){const t=o,s=U(null),h=F(()=>V.from(t.form)),i=r=>n("navigate",r),d=()=>{a.value={widgets:[{type:"start"}],actions:h.value.startAction,fullWidth:!1,hasError:!1,steps:null}};fe(()=>t.form,()=>{var r;((r=a.value.widgets[0])==null?void 0:r.type)=="start"&&d()});const c=Y({user:null,authenticating:!1}),a=U({widgets:[],fullWidth:!1,hasError:!1,actions:[],steps:null}),v=Y({responses:{},formState:"idle"}),A=F(()=>a.value.widgets.reduce((r,u)=>("key"in u&&(r[u.key]=v.responses[u.key]),r),{})),C=F(()=>a.value.widgets.filter(r=>"secret"in r).reduce((r,u)=>"key"in u&&"secret"in u?[...r,{key:u.key,secret:u.secret}]:r,[]));q();function q(){c.user=j.getUser()}const oe=()=>{j.removeUser(),q(),n("logout")},m=M.create(t.broker,h.value);m.onError(r=>{var u;if(n("error",r),v.formState="error",r.error==="not-enough-credits"){(u=s.value)==null||u.open(),d();return}}),m.onExit(r=>{n("exit",r),v.formState="over"}),m.onStartAuth(()=>{c.user?m.sendUser(c.user):c.authenticating=!0}),m.onEndAuth(()=>{c.authenticating=!1}),m.onBadAuth(()=>{j.removeUser(),c.user=null,c.authenticating=!0}),m.onReactivePoll(()=>{m.sendUserEvent(A.value,C.value)});const ie=r=>{c.user=r,m.sendUser(r)};m.listenToNewPageDefinition(r=>{var u,g;a.value=r,Z.init(t.enableAutoFocus,()=>I()),v.responses=me((g=(u=a.value)==null?void 0:u.widgets)!=null?g:[])}),m.listenToPageDefinitionUpdate(r=>{var u,g;a.value={...a.value,...r},v.responses=pe((g=(u=a.value)==null?void 0:u.widgets)!=null?g:[],v.responses)});const J=r=>{var u;if(!(v.formState!=="running"||t.isPreview||!((u=window.should_ask_before_leave)==null||u)))return m.sendBrowserTryDisconnect(),r.preventDefault(),r.returnValue="Are you sure?",""};ve(async()=>{window.addEventListener("beforeunload",J),d(),Z.init(t.enableAutoFocus,r=>I(r)),t.form.autoStart&&W()}),ge(()=>{t.broker.close(),window.removeEventListener("beforeunload",J)});const I=r=>{var u,g;if(v.formState!=="running")return W();m.next(A.value,r,(g=(u=a.value.validation)==null?void 0:u.status)!=null?g:!0,C.value)},W=async()=>{m.init(t.params),v.formState="running",n("start")},L=r=>ye(r.type)?v.responses[r.key]:null;function z(r,u,g){if(m.sendUserEvent(A.value,g),u===a.value.widgets.length-1&&["multiple-choice-input","cards-input"].includes(a.value.widgets[u].type)&&a.value.actions.filter(S=>!!S).length===0&&r.value!==null&&(!T.exports.isArray(r.value)||r.value.length)){I();return}}return e({run:W}),(r,u)=>(f(),y(Le,{class:ee([{preview:o.isPreview},"runner"]),"main-color":o.form.mainColor,theme:o.form.theme,"font-family":o.form.fontFamily,runtime:"form"},{default:re(()=>{var g,S;return[o.isPreview?(f(),y(Oe,{key:0,class:"auto-fill-btn",broker:o.broker,form:o.form,style:{"z-index":1}},null,8,["broker","form"])):P("",!0),R(Ie,{ref_key:"runtimeCommonsRef",ref:s,runtime:o.form,"full-width":a.value.fullWidth,"steps-info":a.value.steps,"is-preview":o.isPreview,"user-email":(g=c.user)==null?void 0:g.claims.email,type:"forms",onLogout:oe,onNavigate:i},null,8,["runtime","full-width","steps-info","is-preview","user-email"]),E("main",null,[c.authenticating?(f(),y(Ee,{key:1,class:"form-auth",onDone:ie})):(f(),w("div",{key:0,class:ee(["form",{"full-width":a.value.fullWidth}])},[a.value.widgets.length>0?(f(),w("div",Te,[(f(!0),w(te,null,ne(a.value.widgets,(p,_)=>{var K,G,Q,X;return f(),w("div",{id:p.type+_,key:(K=p.key)!=null?K:p.type+_,class:"widget"},[(f(),y(we(p.type),{data:p,response:L(p),form:o.form,page:a.value,"has-error":((G=L(p))==null?void 0:G.isInvalid())&&a.value.hasError,runtime:"form","session-id":o.broker.getSessionId(),onChange:B=>z(B,_,H(C)),onSetInitialValue:B=>z(B,_)},null,40,["data","response","form","page","has-error","session-id","onChange","onSetInitialValue"])),R(Be,{hint:"hint"in p?p.hint:null},null,8,["hint"]),((Q=L(p))==null?void 0:Q.isInvalid())&&a.value.hasError?(f(),w("span",Ve,N((X=L(p))==null?void 0:X.errorMessages().join(`
`)),1)):P("",!0)],8,He)}),128))])):(f(),w("div",Me,[R(Se)])),E("span",qe,N((S=a.value.validation)==null?void 0:S.message),1),E("div",Je,[(f(!0),w(te,null,ne(a.value.actions,p=>(f(),y(_e,{key:p.name,action:p,onNext:_=>I(p)},null,8,["action","onNext"]))),128))])],2))])]}),_:1},8,["class","main-color","theme","font-family"]))}});const it=D(ze,[["__scopeId","data-v-c4b73db3"]]);function Ke(o){return o.type==="form"&&o.payload?{...o,type:"form-response"}:o.type==="user-event"&&o.widgets?{...o,type:"user-response-event"}:o}const Ge=[WebSocket.CLOSING,WebSocket.CLOSED];function se(o,e){const n=o[e.type];if(!n){console.warn("no callback for",e.type);return}n.forEach(t=>t(e))}const b=class{constructor(e){l(this,"formPath",null);l(this,"sessionId",null);l(this,"isLocal");l(this,"isPreview");l(this,"ws",null);l(this,"callbacks",{"form-response":[],"user-response-event":[],start:[],"auth:info":[],"auth:saved-jwt":[],"auth:restart":[],"auth:validate-token":[],"auth:resend-token":[],heartbeat:[],metadata:[],"executed-by":[],"action-response":[],"user-event":[],"program:end":[],"program:disconnect":[],"program:connection-error":[],stderr:[],stdout:[],form:[],action:[],"not-enough-credits":[],"auth:require-info":[],"auth:expecting-token":[],"auth:token-expired":[],"auth:invalid-token":[],"auth:invalid-jwt":[],"auth:valid-token":[],"auth:valid-jwt":[],"browser:disconnect":[],"session-id":[],"browser:try-disconnect":[]});l(this,"onCloseCallbacks",[]);l(this,"heartbeatCounter",0);l(this,"heartbeatInterval");l(this,"params",{});var n,t;"formPath"in e&&(this.formPath=(n=e.formPath)!=null?n:null),"sessionId"in e&&(this.sessionId=(t=e.sessionId)!=null?t:null),this.isLocal=e.isLocal,this.isPreview=e.isPreview}static create(e){return b._instance&&b._instance.close(),b._instance=new b(e),b._instance}get url(){const e=this.isLocal||this.sessionId?"sessionId":"formPath";return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/_socket?${e}=${this[e]}&isPreview=${this.isPreview}`}setSessionId(e){var n;(n=this.sessionId)!=null||(this.sessionId=e)}getSessionId(){return this.sessionId}resetState(){this.close(),this.isLocal||(this.sessionId=null)}resetHeartbeatCounter(){this.heartbeatCounter=0}on(e,n){this.callbacks[e].push(n)}clearWSEvents(){!this.ws||(clearInterval(this.heartbeatInterval),this.ws.onclose=()=>{},this.ws.onerror=()=>{},this.ws.onmessage=()=>{})}async connect(e,n=1){if(!(n>3))return this.params=e!=null?e:this.params,new Promise(t=>{this.clearWSEvents(),this.ws=new WebSocket(this.url),this.ws.onopen=()=>{t(),this.resetHeartbeatCounter(),this.send({type:"start",params:this.params})};let s=!1;const h=()=>{s||(s=!0,this.sessionId&&setTimeout(()=>this.connect(),1500))};this.ws.onclose=i=>{if(i.code===1006||!i.wasClean)return h();clearInterval(this.heartbeatInterval),this.onCloseCallbacks.forEach(d=>d())},this.ws.onerror=()=>h(),this.ws.onmessage=i=>{const d=JSON.parse(i.data);se(this.callbacks,Ke(d))},this.heartbeatInterval=setInterval(()=>{if(!(!this.ws||this.ws.readyState!==this.ws.OPEN)){if(this.heartbeatCounter++,this.heartbeatCounter>3)return this.ws.onclose=()=>{},clearInterval(this.heartbeatInterval),h();this.send({type:"heartbeat"})}},2e3)}).catch(()=>{this.connect(this.params,n+1)})}onClose(e){this.onCloseCallbacks.push(e)}close(){if(!this.ws){console.warn("no websocket to close");return}this.clearWSEvents(),this.ws.close()}async send(e){if(!this.ws){console.warn("no websocket to send");return}Ge.includes(this.ws.readyState)&&await this.connect(),this.ws.send(JSON.stringify(e)),se(this.callbacks,e)}};let O=b;l(O,"_instance");export{it as F,O as R};
//# sourceMappingURL=broker.03e14785.js.map
