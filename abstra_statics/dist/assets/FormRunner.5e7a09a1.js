var m=Object.defineProperty;var g=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(g(r,typeof e!="symbol"?e+"":e,t),t);import{i as isUrl}from"./url.f2a2de62.js";import{eN as i18nProvider,d as defineComponent,b as openBlock,ev as createElementBlock,a as resolveComponent,c as createBlock,ex as createCommentVNode,dp as renderSlot,v as _export_sfc,w as withCtx,ar as createTextVNode,u as unref,eD as toDisplayString,eO as createStaticVNode,e as createBaseVNode,r as ref,J as watch,ez as normalizeClass,f as createVNode,eP as StartWidget,eQ as EndWidget,eR as ErrorWidget,a$ as Fragment,eC as renderList,eS as resolveDynamicComponent,bV as Button,eT as withKeys,eU as StyleProvider}from"./outputWidgets.12d07fe6.js";import{P as Passwordless}from"./Passwordless.a7ea3d22.js";import{P as PlayerNavbar}from"./PlayerNavbar.3ccff19a.js";import{L as LoadingIndicator}from"./CircularLoading.470373d7.js";import{W as WidgetsFrame}from"./WidgetsFrame.79acf750.js";import{m as magicWand,i as info}from"./icons.f2b4f37f.js";import{S as Steps}from"./Steps.7dd9244e.js";import{S as SetttingsProvider}from"./index.8cc30cca.js";import{C as Card}from"./Card.ab1ea8a0.js";import{T as Typography}from"./Typography.45a7b8d7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="d27fa72e-96d9-4e08-84c8-598522dcdd8b",r._sentryDebugIdIdentifier="sentry-dbid-d27fa72e-96d9-4e08-84c8-598522dcdd8b")}catch{}})();function normalizePath(r){return r.startsWith("/")?r.slice(1):r}async function redirect(r,e,t,a={}){if(isUrl(t)){const o=new URLSearchParams(a),l=new URL(t);l.search=o.toString(),window.location.href=l.toString()}else{const o=t.replace(/\/$/,"");if(r==="player")e.push({path:"/"+normalizePath(o),query:a});else if(r==="editor")e.push({name:"formEditor",params:{formPath:normalizePath(o)},query:a});else if(r==="preview")e.push({name:"formPreview",params:{formPath:normalizePath(o)},query:a});else throw new Error("Invalid routing")}}const WS_CLOSING_STATES=[WebSocket.CLOSING,WebSocket.CLOSED],WS_CLOSING_REASONS={FORM_EDITOR_RESTART:4e3};class FormConnectionManager{constructor(e,t){n(this,"ws",null);n(this,"heartbeatInterval");n(this,"onOpen",null);n(this,"onMessage",null);this.formId=e,this.detached=t}get url(){const e=location.protocol==="https:"?"wss:":"ws:",t=this.detached?"_socket/detached":"_socket";return`${e}//${location.host}/${t}?id=${encodeURIComponent(this.formId)}`}handleOpen(e){if(!this.onOpen)throw new Error("onOpen is not set");this.onOpen(),e()}handleClose(e){(e.code===1006||!e.wasClean)&&clearInterval(this.heartbeatInterval)}handleMessage(e){if(!this.onMessage)throw new Error("onMessage is not set");const t=JSON.parse(e.data);this.onMessage(t)}sendHeartbeat(){!this.ws||this.ws.readyState!==this.ws.OPEN||this.send({type:"execution:heartbeat"})}async send(e){if(!this.ws)throw new Error(`[FormRunnerController] failed sending msg ${e.type} : websocket is not connected`);WS_CLOSING_STATES.includes(this.ws.readyState)&&await this.connect(),this.ws.send(JSON.stringify(e))}async close(e){this.ws&&this.ws.close(WS_CLOSING_REASONS[e],e)}async reset(){await this.close("FORM_EDITOR_RESTART"),await this.connect()}async connect(e=3){if(e!=0)return new Promise(t=>{this.ws=new WebSocket(this.url),this.ws.onopen=()=>this.handleOpen(t),this.ws.onclose=a=>this.handleClose(a),this.ws.onmessage=a=>this.handleMessage(a),this.heartbeatInterval=setInterval(()=>this.sendHeartbeat(),2e3)}).catch(()=>{this.connect(e-1)})}}function isInputWidget(r){return"key"in r&&"value"in r&&"errors"in r}const executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(r){throw console.error(`[Error: execute_js]: ${r.message}, context: ${$context}`),r}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(r){return{type:"execute-js:response",value:await executeCode(r.context,r.code)}}const isSerializable=r=>{try{return JSON.stringify(r),!0}catch{return!1}},FORM_END_STATES=["end","error","lock-failed"],FORM_RUNNING_STATES=["authenticating","page"];class FormRunnerController{constructor({formRunnerData:e,queryParams:t,userManager:a,logService:o,connectionManager:l,onFormStart:s,onFormEnd:d,onRedirect:p,onAuthUpdate:f,onStateUpdate:i,onStackTraceUpdate:h}){n(this,"connectionManager");n(this,"logService");n(this,"userManager");n(this,"formRunnerData");n(this,"queryParams");n(this,"formState");n(this,"messageSeq",0);n(this,"executionId",null);n(this,"onFormStart");n(this,"onFormEnd");n(this,"onRedirect");n(this,"onStackTraceUpdate");n(this,"onStateUpdate");n(this,"onAuthUpdate");n(this,"responseHistory",[]);n(this,"lastResponseHistory",[]);n(this,"handlers",{"form:render-page":[e=>this.handleRenderPageMessage(e)],"form:update-page":[e=>this.handleUpdatePageMessage(e)],"execution:stdout":[e=>this.handleStdoutMessage(e)],"execution:stderr":[e=>this.handleStderrMessage(e)],"execution:started":[e=>this.handleExecutionStartedMessage(e)],"execution:ended":[e=>this.handleExecutionEndedMessage(e)],"execution:heartbeat":[],"execution:lock-failed":[e=>this.handleExecutionLockFailedMessage(e)],"auth:invalid-jwt":[e=>this.handleAuthInvalidJWTMessage(e)],"auth:valid-jwt":[e=>this.handleAuthValidTokenMessage(e)],"redirect:request":[e=>this.handleRedirectRequestMessage(e)],"execute-js:request":[e=>this.handleExecuteJSRequestMessage(e)],"env:files-changed":[()=>this.handleFilesChangedMessage()],"auth:require-info":[e=>this.handleAuthRequireInfoMessage(e)]});n(this,"start",async()=>{await this.connectionManager.connect()});n(this,"reset",async()=>{var e;(e=this.logService)==null||e.log({type:"stdout",log:"[Form reloaded]"}),await this.connectionManager.close("FORM_EDITOR_RESTART"),this.messageSeq=0,this.setFormState({type:"waiting",actions:[this.getStartAction()]})});n(this,"getStartAction",()=>{var e;return this.actionFromMessage((e=this.formRunnerData.startButtonText)!=null?e:"Start")});n(this,"getRestartAction",()=>{var e;return this.actionFromMessage((e=this.formRunnerData.restartButtonText)!=null?e:"Restart")});n(this,"getState",()=>({formState:this.formState,passwordlessUser:this.userManager.getUser()}));n(this,"handleConnectionOpen",()=>{this.connectionManager.send({type:"execution:start",params:this.queryParams})});n(this,"actionFromMessage",e=>({name:e,label:i18nProvider.translateIfFound(e,this.formRunnerData),disabled:!1,loading:!1}));n(this,"getAutofillVisibilty",e=>this.lastResponseHistory.length===0?!1:this.lastResponseHistory[0].some(t=>e.find(a=>a.key===t.key&&a.type===t.type&&"value"in a)));n(this,"handleAutofillClick",()=>{!this.lastResponseHistory[0]||this.formState.type==="page"&&(this.lastResponseHistory[0].forEach(t=>{!("widgets"in this.formState&&this.formState.widgets.find(o=>o.key===t.key&&o.type===t.type))||"value"in t&&this.updateWidgetValue(t.key,t.value)}),this.setFormState({...this.formState,showAutofill:!1}))});n(this,"handleMessageReceived",e=>{const t=this.handlers[e.type];if(!t)throw new Error(`No handler for message type ${e.type}`);if(t.forEach(a=>a(e)),e.debug&&this.onStackTraceUpdate){const a=e.type==="execution:ended";this.onStackTraceUpdate(e.debug.stack,a)}});n(this,"handleFilesChangedMessage",()=>{var e;(e=this.logService)==null||e.log({type:"files-changed",log:"Files changed"})});n(this,"logout",()=>{this.userManager.removeUser(),this.reset()});n(this,"handleActionClick",e=>{if(this.formState.type==="waiting")return this.setFormState({...this.formState,actions:this.formState.actions.map(t=>t.label===e.label?{...t,loading:!0}:t)}),this.start();if(this.formState.type==="page"){const t=e.name==="i18n_back_action";return this.hasErrors()&&!t?void 0:(this.setFormState({...this.formState,actions:this.formState.actions.map(a=>a.label===e.label?{...a,loading:!0}:a)}),this.lastResponseHistory.shift(),this.responseHistory.push(this.formState.widgets),this.sendFormPageResponse(this.getWidgetValues(),e))}if(this.formState.type==="end")return this.start()});n(this,"updateWidgetValue",(e,t)=>{if(this.formState.type!=="page")return;const a=this.formState.widgets.find(l=>"key"in l&&l.key===e);if(!a||!isInputWidget(a))return;const o=this.formState.widgets.map(l=>l.key===e?{...l,value:t}:l);this.setFormState({...this.formState,widgets:o}),this.sendFormUserEvent(this.getWidgetValues(),this.getSecrets())});n(this,"updateWidgetFrontendErrors",(e,t)=>{if(this.formState.type!=="page"||!this.formState.widgets.find(l=>l.key===e))return;const o=this.formState.widgets.map(l=>l.key===e?{...l,errors:l._pythonErrors.concat(t.map(s=>i18nProvider.translateIfFound(s,l)))}:l);this.setFormState({...this.formState,widgets:o})});this.formRunnerData=e,this.queryParams=t,this.userManager=a,this.logService=o,this.connectionManager=l,this.onFormStart=s,this.onFormEnd=d,this.onRedirect=p,this.onAuthUpdate=f,this.onStateUpdate=i,this.onStackTraceUpdate=h,a.pubsub.subscribe("authenticated",c=>{c&&(this.connectionManager.send({type:"auth:saved-jwt",jwt:c==null?void 0:c.jwt}),this.onAuthUpdate(c))}),this.connectionManager.onOpen=()=>this.handleConnectionOpen(),this.connectionManager.onMessage=c=>this.handleMessageReceived(c),this.formState={type:"waiting",actions:[this.getStartAction()]},this.formRunnerData.autoStart&&this.start()}fullWidthFromMessage(e){return e.some(t=>"fullWidth"in t&&t.fullWidth)}widgetFromMessage(e,t){if(isInputWidget(e)){const a=e.errors.map(o=>i18nProvider.translateIfFound(o,e));return{...e,input:!0,_pythonErrors:a,errors:a}}return{...e,input:!1,_pythonErrors:[],errors:[],key:e.type+t}}async handleExecutionStartedMessage(e){this.executionId=e.executionId,this.onFormStart()}handleRenderPageMessage(e){var a,o;const t=e.widgets.map(this.widgetFromMessage);this.setFormState({type:"page",widgets:t,actions:(o=(a=e.actions)==null?void 0:a.map(this.actionFromMessage))!=null?o:[],fullWidth:this.fullWidthFromMessage(e.widgets),steps:e.steps,refreshKey:Date.now().toString(),showAutofill:this.getAutofillVisibilty(t)}),e.endProgram&&(this.setFormState({type:"end",showEndWidget:!1,actions:[]}),this.connectionManager.send({type:"form:page-response",payload:{},secrets:[],seq:++this.messageSeq}))}async handleExecuteJSRequestMessage(e){const t=await executeJs(e);this.connectionManager.send(t)}async handleAuthRequireInfoMessage(e){const t=this.userManager.getUser();if(t&&!e.refresh){this.sendAuthSavedJWT(t);return}this.userManager.removeUser(),this.setFormState({type:"authenticating"})}async handleAuthInvalidJWTMessage(e){this.userManager.removeUser(),this.setFormState({type:"authenticating"})}async handleStderrMessage(e){var t;(t=this.logService)==null||t.log({type:"stderr",log:e.log})}async handleStdoutMessage(e){var t;(t=this.logService)==null||t.log({type:"stdout",log:e.log})}async handleAuthValidTokenMessage(e){}async handleExecutionLockFailedMessage(e){this.setFormState({type:"lock-failed",status:e.status})}async handleRedirectRequestMessage(e){this.onRedirect(e.url,e.queryParams)}async handleUpdatePageMessage(e){if(e.seq===this.messageSeq){if(this.formState.type!=="page")throw new Error("Received form:update-page message while not in render-page state");this.setFormState({...this.formState,error:{message:e.validation.message,status:e.validation.status},widgets:e.widgets.map(this.widgetFromMessage),actions:this.formState.actions.map(t=>({...t,loading:!1}))})}}async handleExecutionEndedMessage(e){var a,o;this.lastResponseHistory=[...this.responseHistory],this.responseHistory=[];const t=this.formRunnerData.allowRestart?[this.getRestartAction()]:[];e.exitStatus==="SUCCESS"&&(this.setFormState({type:"end",showEndWidget:!0,actions:t}),(a=this.logService)==null||a.log({type:"stdout",log:"[Form run finished]"})),e.exitStatus==="EXCEPTION"&&(this.setFormState({type:"error",message:e.exception}),(o=this.logService)==null||o.log({type:"stderr",log:e.exception})),this.onFormEnd()}sendFormPageResponse(e,t,a){this.connectionManager.send({type:"form:page-response",payload:e,secrets:a,action:t==null?void 0:t.label,seq:++this.messageSeq})}sendFormUserEvent(e,t){this.connectionManager.send({type:"form:user-event",payload:e,secrets:t,seq:++this.messageSeq})}sendAuthSavedJWT(e){this.connectionManager.send({type:"auth:saved-jwt",jwt:e.jwt})}handleCloseAttempt(){return FORM_END_STATES.includes(this.formState.type)?!1:(this.connectionManager.send({type:"debug:close-attempt"}),!0)}setFormState(e){this.formState=Object.freeze(e),this.onStateUpdate(e)}getSecrets(){return this.formState.type!=="page"?[]:this.formState.widgets.filter(e=>"secret"in e).reduce((e,t)=>"key"in t&&"secret"in t?[...e,{key:t.key,secret:t.secret}]:e,[])}setWidgetValidationFunction(e,t){if(this.formState.type!=="page")return;const a=this.formState.widgets.find(o=>"key"in o&&o.key===e);!a||!isInputWidget(a)||(a.validationFunction=t)}hasErrors(){var e;return this.formState.type!=="page"?!1:((e=this.formState.error)==null?void 0:e.status)===!1||this.formState.widgets.some(t=>t.errors.length>0)}shouldDisableAction(e){return this.formState.type!=="page"||this.hasErrors()?!0:e!=="i18n_back_action"}getWidgetValue(e){if(this.formState.type!=="page")return null;const t=this.formState.widgets.find(a=>"key"in a&&a.key===e);if(!t||!isInputWidget(t))return null}getWidgetValues(){return this.formState.type!=="page"?{}:this.formState.widgets.reduce((e,t)=>("value"in t&&(e[t.key]=t.value),e),{})}}const _hoisted_1$4={key:0,class:"text"},_hoisted_2$3={key:1,class:"text"},_sfc_main$5=defineComponent({__name:"component",props:{status:{}},setup(r){return(e,t)=>e.status==="running"?(openBlock(),createElementBlock("div",_hoisted_1$4," This form is already being filled ")):(openBlock(),createElementBlock("div",_hoisted_2$3,"This form was already filled"))}}),_hoisted_1$3={class:"outline-button"},_sfc_main$4=defineComponent({__name:"OutlineButton",props:{iconPath:{},noShadow:{type:Boolean},status:{}},setup(r){return(e,t)=>{const a=resolveComponent("icon");return openBlock(),createElementBlock("button",_hoisted_1$3,[e.iconPath?(openBlock(),createBlock(a,{key:0,path:e.iconPath,fill:"#fff",class:"icon"},null,8,["path"])):createCommentVNode("",!0),renderSlot(e.$slots,"default",{},void 0,!0)])}}}),OutlineButton_vue_vue_type_style_index_0_scoped_096d3a1f_lang="",OutlineButton=_export_sfc(_sfc_main$4,[["__scopeId","data-v-096d3a1f"]]),_sfc_main$3=defineComponent({__name:"FormAutoFill",emits:["click"],setup(r,{emit:e}){return(t,a)=>(openBlock(),createBlock(OutlineButton,{"icon-path":unref(magicWand),class:"form-auto-fill-btn",onClick:a[0]||(a[0]=o=>e("click"))},{default:withCtx(()=>[createTextVNode(" Repeat last answer ")]),_:1},8,["icon-path"]))}}),FormAutoFill_vue_vue_type_style_index_0_scoped_28bc26ad_lang="",FormAutoFill=_export_sfc(_sfc_main$3,[["__scopeId","data-v-28bc26ad"]]),_hoisted_1$2=["href"],_hoisted_2$2=createStaticVNode('<svg width="44" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-91fa59aa><g clip-path="url(#clip0_405_116214)" data-v-91fa59aa><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="#E36C7C" data-v-91fa59aa></path><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="url(#paint0_linear_405_116214)" data-v-91fa59aa></path><path d="M218.387 91.2249L176.195 127.557L173.851 129.51C151.192 149.849 149.853 152.309 141.642 152.584L141.584 152.586C139.612 152.652 135.357 152.795 131.875 149.849C126.797 145.552 120.155 140.083 117.03 137.348C115.34 135.869 112.465 133.039 109.998 131.097C107.902 129.448 106.482 127.581 104.919 127.581C103.357 127.581 100.622 129.925 96.3246 133.832C92.0272 137.739 82.6511 146.333 82.6511 146.333L65.0712 161.569C65.0712 161.569 42.5857 180.688 36.7256 185.376C30.8656 190.064 16.5797 175.69 21.4895 171.703C21.9628 171.23 26.2429 167.755 29.7179 164.915C32.2165 162.84 34.2084 161.179 34.2084 161.179C34.9897 160.397 66.2433 133.051 66.2433 133.051L87.723 114.573C87.723 114.573 95.9339 106.094 105.701 106.094C108.826 106.094 112.83 106.485 126.015 118.205C129.531 121.33 131.485 122.542 135.782 126.409C137.345 127.816 139.852 130.316 140.861 130.316C141.882 130.316 143.986 128.363 145.549 127.023C145.549 127.023 195.897 84.4149 202.37 77.9421C207.839 72.4726 223.075 86.9273 218.387 91.2249Z" fill="url(#paint1_linear_405_116214)" data-v-91fa59aa></path><path d="M33.238 67.1372C31.2846 68.6564 23.9305 75.1737 22.2992 76.9039C19.3366 80.0417 21.3638 81.3905 25.6611 84.9065C29.9585 88.4225 57.8962 112.712 64.8542 118.963L79.9642 105.221L41.288 71.2331C36.5999 67.1372 35.1913 65.6179 33.238 67.1372Z" fill="url(#paint2_linear_405_116214)" data-v-91fa59aa></path></g><defs data-v-91fa59aa><linearGradient id="paint0_linear_405_116214" x1="172.68" y1="133.808" x2="183.059" y2="196.169" gradientUnits="userSpaceOnUse" data-v-91fa59aa><stop offset="0.114583" stop-color="#FF98A6" data-v-91fa59aa></stop><stop offset="1" stop-color="#E36C7C" data-v-91fa59aa></stop></linearGradient><linearGradient id="paint1_linear_405_116214" x1="219.271" y1="186.305" x2="206.115" y2="57.7298" gradientUnits="userSpaceOnUse" data-v-91fa59aa><stop stop-color="#E36C7C" data-v-91fa59aa></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-91fa59aa></stop></linearGradient><linearGradient id="paint2_linear_405_116214" x1="20.8984" y1="66.56" x2="30.8589" y2="127.049" gradientUnits="userSpaceOnUse" data-v-91fa59aa><stop stop-color="#E36C7C" data-v-91fa59aa></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-91fa59aa></stop></linearGradient><clipPath id="clip0_405_116214" data-v-91fa59aa><rect width="256" height="256" fill="white" data-v-91fa59aa></rect></clipPath></defs></svg><b data-v-91fa59aa>Abstra Cloud</b>',2),_sfc_main$2=defineComponent({__name:"Watermark",props:{runtime:{}},setup(r){var a;const e=window.location.hostname.split(".")[0],t=(a=SetttingsProvider.instance)==null?void 0:a.showWatermark;return(o,l)=>unref(t)?(openBlock(),createElementBlock("a",{key:0,href:`https://www.abstra.io/forms?utm_source=abstra_pages&utm_medium=badge&utm_campaign=${o.runtime.id}&origin_subdomain=${unref(e)}`,target:"_blank",class:"watermark"},[createTextVNode(toDisplayString(unref(i18nProvider).translate("i18n_watermark_text"))+" ",1),_hoisted_2$2],8,_hoisted_1$2)):createCommentVNode("",!0)}}),Watermark_vue_vue_type_style_index_0_scoped_91fa59aa_lang="",Watermark=_export_sfc(_sfc_main$2,[["__scopeId","data-v-91fa59aa"]]),_hoisted_1$1={key:0,class:"hint"},_hoisted_2$1={class:"icon",viewBox:"0 0 24 24",style:{width:"20px",height:"20px"}},_hoisted_3$1=["d"],_hoisted_4$1={class:"hint-content"},_sfc_main$1=defineComponent({__name:"WidgetHint",props:{hint:{}},setup(r){return(e,t)=>e.hint?(openBlock(),createElementBlock("div",_hoisted_1$1,[(openBlock(),createElementBlock("svg",_hoisted_2$1,[createBaseVNode("path",{d:unref(info)},null,8,_hoisted_3$1)])),createBaseVNode("div",_hoisted_4$1,toDisplayString(e.hint),1)])):createCommentVNode("",!0)}}),WidgetHint_vue_vue_type_style_index_0_scoped_9a7a836d_lang="",WidgetHint=_export_sfc(_sfc_main$1,[["__scopeId","data-v-9a7a836d"]]),_hoisted_1={key:0,class:"loading-wrapper"},_hoisted_2={class:"form-wrapper"},_hoisted_3=["id"],_hoisted_4={key:5,class:"span-error"},_hoisted_5={key:0,class:"buttons"},_sfc_main=defineComponent({__name:"FormRunner",props:{formRunnerData:{},formState:{},userEmail:{},isPreview:{type:Boolean},disabled:{type:Boolean}},emits:["navigate","action-clicked","autofill-clicked","update-widget-value","update-widget-errors","login","logout"],setup(r,{emit:e}){const t=r,a=ref(null),o=ref({}),l=()=>{!a.value||(a.value.scrollTop=0)};return watch(()=>t.formState,(s,d)=>{s.type==="page"&&(d==null?void 0:d.type)==="page"&&s.refreshKey!==d.refreshKey&&l()}),(s,d)=>(openBlock(),createBlock(WidgetsFrame,{class:normalizeClass([{preview:s.isPreview},"runner"]),"main-color":s.formRunnerData.mainColor,theme:s.formRunnerData.theme,"font-family":s.formRunnerData.fontFamily,runtime:"form"},{default:withCtx(()=>{var p,f;return[s.disabled?(openBlock(),createBlock(unref(Card),{key:0,class:"unsaved-changes"},{default:withCtx(()=>[createVNode(unref(Typography),{style:{"font-size":"18px","font-weight":"500"}},{default:withCtx(()=>[createTextVNode("You have unsaved changes")]),_:1}),createVNode(unref(Typography),{style:{"margin-bottom":"18px"}},{default:withCtx(()=>[createTextVNode("Please save to run the preview")]),_:1})]),_:1})):createCommentVNode("",!0),s.isPreview&&((p=s.formState)==null?void 0:p.type)==="page"&&s.formState.showAutofill?(openBlock(),createBlock(FormAutoFill,{key:1,class:"auto-fill-btn",form:s.formRunnerData,style:{"z-index":1},onClick:d[0]||(d[0]=i=>e("autofill-clicked"))},null,8,["form"])):createCommentVNode("",!0),createBaseVNode("header",null,[createVNode(PlayerNavbar,{"runner-data":s.formRunnerData,"user-email":s.userEmail,onLogout:d[1]||(d[1]=i=>e("logout")),onNavigate:d[2]||(d[2]=i=>e("navigate",i))},null,8,["runner-data","user-email"])]),((f=s.formState)==null?void 0:f.type)==="page"?(openBlock(),createBlock(Steps,{key:2,class:"steps","steps-info":s.formState.steps},null,8,["steps-info"])):createCommentVNode("",!0),createBaseVNode("main",{ref_key:"scrollableContainer",ref:a,class:normalizeClass([{disabled:s.disabled}])},[s.formState?s.formState.type==="authenticating"?(openBlock(),createBlock(Passwordless,{key:1,class:"form-auth"})):(openBlock(),createElementBlock("div",{key:2,class:normalizeClass(["form",{"full-width":s.formState.type==="page"&&s.formState.fullWidth}])},[createBaseVNode("div",_hoisted_2,[s.formState.type==="waiting"?(openBlock(),createBlock(StartWidget,{key:0,form:s.formRunnerData},null,8,["form"])):s.formState.type==="end"?(openBlock(),createBlock(EndWidget,{key:1,"end-message":s.formRunnerData.endMessage},null,8,["end-message"])):s.formState.type==="error"?(openBlock(),createBlock(ErrorWidget,{key:2,"error-message":s.formRunnerData.errorMessage},null,8,["error-message"])):s.formState.type==="lock-failed"?(openBlock(),createBlock(_sfc_main$5,{key:3,status:s.formState.status},null,8,["status"])):(openBlock(!0),createElementBlock(Fragment,{key:4},renderList(s.formState.widgets,(i,h)=>{var c;return openBlock(),createElementBlock("div",{id:i.type+h,key:(c=i.key)!=null?c:i.type+h,class:"widget"},[(openBlock(),createBlock(resolveDynamicComponent(i.type),{ref_for:!0,ref:u=>"key"in i?o.value[i.key]=u:null,value:unref(isInputWidget)(i)&&i.value,errors:i.errors,"user-props":i,"refresh-key":s.formState.refreshKey,runtime:"form","onUpdate:value":u=>e("update-widget-value",i.key,u),"onUpdate:errors":u=>e("update-widget-errors",i.key,u)},null,40,["value","errors","user-props","refresh-key","onUpdate:value","onUpdate:errors"])),createVNode(WidgetHint,{hint:"hint"in i?i.hint:null},null,8,["hint"]),(openBlock(!0),createElementBlock(Fragment,null,renderList(i.errors,u=>(openBlock(),createElementBlock("span",{key:u,class:"span-error"},toDisplayString(u),1))),128))],8,_hoisted_3)}),128)),s.formState.type==="page"&&s.formState.error&&s.formState.error.status===!1?(openBlock(),createElementBlock("span",_hoisted_4,toDisplayString(s.formState.error.message||unref(i18nProvider).translateIfFound("i18n_generic_validation_error")),1)):createCommentVNode("",!0)]),"actions"in s.formState?(openBlock(),createElementBlock("div",_hoisted_5,[createVNode(unref(StyleProvider),null,{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.formState.actions,i=>(openBlock(),createBlock(unref(Button),{key:i.name,class:normalizeClass(["next-button",i.disabled?"disabled":""]),loading:i.loading,disabled:i.disabled,onClick:h=>e("action-clicked",i),onKeydown:withKeys(h=>e("action-clicked",i),["enter"])},{default:withCtx(()=>[createTextVNode(toDisplayString(i.label),1)]),_:2},1032,["loading","disabled","class","onClick","onKeydown"]))),128))]),_:1})])):createCommentVNode("",!0)],2)):(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(LoadingIndicator)]))],2),createVNode(Watermark,{class:"watermark",runtime:s.formRunnerData},null,8,["runtime"])]}),_:1},8,["class","main-color","theme","font-family"]))}}),FormRunner_vue_vue_type_style_index_0_scoped_478dd418_lang="",FormRunner=_export_sfc(_sfc_main,[["__scopeId","data-v-478dd418"]]);export{FORM_END_STATES as F,FORM_RUNNING_STATES as a,FormRunner as b,FormRunnerController as c,FormConnectionManager as d,redirect as r};
//# sourceMappingURL=FormRunner.5e7a09a1.js.map
