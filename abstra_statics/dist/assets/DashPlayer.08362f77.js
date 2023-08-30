var V=Object.defineProperty;var F=(s,t,e)=>t in s?V(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var h=(s,t,e)=>(F(s,typeof t!="symbol"?t+"":t,e),e);import{e as B,R as z}from"./executeJs.8b2da104.js";import{S as J,t as k,b as g,c as f,Q as q,R as Q,y as S,d as I,L as y,r as W,a as K,F as X,N as Y,B as R,e as C,A as $,E as L,u as b,al as Z,am as tt,$ as et,H as A,z as st,x as P,D as U,an as it,ao as ot}from"./registerWidgets.327633ce.js";import{w as H,l as w}from"./index.33a86cb1.js";import{p as at}from"./passwordlessManager.a612c774.js";import{P as rt}from"./pubsub.fe192255.js";import{P as nt}from"./Passwordless.e82feeda.js";import{W as lt}from"./WidgetsFrame.83f06e65.js";import{b as ht}from"./icons.3ffe7194.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="09e29ed1-1dd1-4feb-9417-b30c8c709d4b",s._sentryDebugIdIdentifier="sentry-dbid-09e29ed1-1dd1-4feb-9417-b30c8c709d4b")}catch{}})();function te(s,t){return{dx:t.x-s.x,dy:t.y-s.y,referential:s.referential}}function dt(s,t){return s.rowEnd<t.rowStart||s.colEnd<t.colStart&&s.rowStart<t.rowEnd?-1:1}function ee(s,t){const e=t.margin+s.colStart*(t.gap+t.cellWidth),i=t.margin+t.navbarLength+s.rowStart*(t.gap+t.cellHeight),o=t.margin-t.gap+(t.gap+t.cellWidth)*(s.colEnd+1),a=t.margin+t.navbarLength-t.gap+(t.gap+t.cellHeight)*(s.rowEnd+1);return{x:e,y:i,width:o-e,height:a-i,referential:"world"}}function ct(s,t){return{...s,position:{colStart:s.position.colStart+t.deltaI,colEnd:s.position.colEnd+t.deltaI,rowStart:s.position.rowStart+t.deltaJ,rowEnd:s.position.rowEnd+t.deltaJ}}}function se(s,t,e=!1){return e?t.x<=s.x&&t.x+t.width>=s.x&&t.y<=s.y&&t.y+t.height>=s.y:t.x<s.x&&t.x+t.width>s.x&&t.y<s.y&&t.y+t.height>s.y}function ie(s,t){return!(s.x>t.x+t.width||t.x>s.x+s.width||s.y>t.y+t.height||t.y>s.y+s.height)}function oe(s,t){return!(s.colStart>t.colEnd||t.colStart>s.colEnd||s.rowStart>t.rowEnd||t.rowStart>s.rowEnd)}function ae(s,t,e){const i=s.y===t.y,o=s.x===t.x,a=s.x+s.width===t.x+t.width,r=s.y+s.height===t.y+t.height;switch(e){case"left":return o;case"right":return a;case"top":return i;case"bottom":return r;case"top-left":return i&&o;case"top-right":return i&&a;case"bottom-left":return r&&o;case"bottom-right":return r&&a}}const re=s=>s.reduce((t,e)=>{const i=t?Math.min(t.x,e.x):e.x,o=t?Math.min(t.y,e.y):e.y,a=t?Math.max(t.x+t.width,e.x+e.width):e.x+e.width,r=t?Math.max(t.y+t.height,e.y+e.height):e.y+e.height;return{x:i,y:o,width:a-i,height:r-o,referential:e.referential}},null);function ne(s,t){return Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2)}function ut(s){const t=[];let e=0;for(const i in s){const[o,a]=s[i];e+=s.filter(([d,c,m],l)=>!(a.position.colStart>c.position.colEnd||c.position.colStart>a.position.colEnd)&&c.position.rowEnd+m>a.position.rowStart&&l<+i).reduce((d,c)=>d+Math.max(c[2],0),0);const r=ct(a,{deltaJ:e,deltaI:0});t.push([o,r])}return t}function pt(s,t){const e=Object.entries(s).sort((a,r)=>dt(a[1].position,r[1].position)),i=a=>document.querySelector(`[widget-id='${a}']`);return ut(e.map(([a,r])=>[a,r,i(a)?t.height2rows(i(a).offsetHeight)-(r.position.rowEnd-r.position.rowStart):0])).reduce((a,[r,d])=>({...a,[r]:{...d,position:{...d.position,rowEnd:H[d.type].autoHeight&&i(r)?d.position.rowStart+t.height2rows(i(r).offsetHeight):d.position.rowEnd}}}),{})}const gt=(s,t,e)=>t&&!t.condition?{computedElement:{...s,position:{...s.position,row:s.position.row+e,height:0}},updateOffset:0,addOffset:0,slot:{}}:{computedElement:{...s,position:{...s.position,row:s.position.row+e}},updateOffset:s.position.height,addOffset:s.position.row,slot:s.slot},wt={"if-block":gt},yt=(s,t,e)=>mt(O(Object.values(s),{widgets:[],slottables:[]},0,t),e),mt=(s,t)=>({widgets:pt(s.widgets.reduce((e,i)=>({...e,[i.id]:i}),{}),t),slottables:s.slottables.reduce((e,i)=>({...e,[i.id]:i}),{})}),vt=(s,t)=>{if(w(s)&&w(t))return t.position.rowStart-s.position.rowStart;if(w(s)&&!w(t))return t.position.row-s.position.rowStart===0?-1:t.position.row-s.position.rowStart;if(!w(s)&&w(t))return t.position.rowStart-s.position.row===0?1:t.position.rowStart-s.position.row;if(!w(s)&&!w(t)){if(t.position.row-s.position.row===0){if(t.position.order===s.position.order)throw new Error("Two slottables with the same order in the same row");return t.position.order-s.position.order}return t.position.row-s.position.row}return 0},O=(s,t,e,i)=>s.sort(vt).reduce((o,a)=>ft(a,e,o,i),t),ft=(s,t,e,i)=>w(s)?bt(s,t,e):St(s,t,e,i),bt=(s,t,e)=>(e.widgets.push({...s,position:T(s.position,t)}),e),St=(s,t,e,i)=>{const{computedElement:o,slot:a,updateOffset:r,addOffset:d}=wt[s.type](s,i[s.id],t),c=Ct(e,r);return c.slottables.push(o),O(Object.values(a),c,t+d,i)},Ct=(s,t)=>({widgets:Pt(s.widgets,t),slottables:Et(s.slottables,t)}),Pt=(s,t)=>s.map(e=>({...e,position:T(e.position,t)})),Et=(s,t)=>s.map(e=>({...e,position:{...e.position,row:e.position.row+t}})),T=(s,t)=>({...s,rowStart:s.rowStart+t,rowEnd:s.rowEnd+t}),kt=960,G=12,_t=0,Nt=24,Wt=32,Rt=8;class x{constructor(t,e){h(this,"width");h(this,"columns");h(this,"gap");h(this,"margin");h(this,"padding");h(this,"calculatePositions");h(this,"_cellHeight");h(this,"dashPlayerService");this.dashPlayerService=t,this.width=kt,this.columns=G,this.gap=_t,this.margin=Nt,this.padding=Rt,this._cellHeight=Wt,this.calculatePositions=e}static create(t,e){return new x(t,e)}static get columns(){return G}get cellHeight(){return this._cellHeight}get navbarLength(){return this.dashPlayerService.navbarVisible?48:0}get cellWidth(){const t=this.columns-1;return(this.width-2*this.margin-t*this.gap)/this.columns}get rows(){const{widgets:t,slottables:e}=this.calculatePositions();return Math.max(Object.values(t!=null?t:{}).map(i=>i.position.rowEnd).reduce((i,o)=>Math.max(i,o),0)+4,Object.values(e!=null?e:{}).map(i=>i.position.row+i.position.height).reduce((i,o)=>Math.max(i,o),0)+4,20)}get sidebarWidth(){return this.dashPlayerService.hasSidebar?240:0}getCell(t,e){return{x:this.margin+t*(this.cellWidth+(t>0?this.gap:0)),y:this.margin+this.navbarLength+e*(this._cellHeight+(e>0?this.gap:0)),width:this.cellWidth,height:this._cellHeight,referential:"world"}}getCellFrom(t,e){const i=this.getCell(t.i,t.j);return this.cellAt(i.x+e.dx,i.y+e.dy)}areaFromRect(t){const e=this.cellAt(t.x,t.y),i={dx:t.width-1,dy:t.height-1,referential:"world"},o=this.getCellFrom(e,i);return{colStart:e.i,rowStart:e.j,colEnd:o.i,rowEnd:o.j}}rectFromArea(t){const e=this.getCell(t.colStart,t.rowStart),i=this.getCell(t.colEnd,t.rowEnd);return{x:e.x,y:e.y,width:i.x+i.width-e.x,height:i.y+i.height-e.y,referential:"world"}}get height(){return this.rows*(this._cellHeight+this.gap)-this.gap+2*this.margin}cellAt(t,e){return{i:Math.floor((t-this.margin)/(this.cellWidth+this.gap)),j:Math.floor((e-this.margin-this.navbarLength)/(this._cellHeight+this.gap))}}snap(t,e){const i=e==="bottom-right"||e==="top-right"?1:0,o=e==="bottom-left"||e==="bottom-right"?1:0,a=this.cellWidth+this.gap,r=this._cellHeight+this.gap,d=this.margin+this.cellWidth*i,c=this.margin+this.navbarLength+this.cellHeight*o,m=t.x-d,l=t.y-c;return{x:d+a*Math.round(m/a),y:c+r*Math.round(l/r),referential:"world"}}snapDelta(t){const e=this.cellWidth+this.gap,i=this._cellHeight+this.gap;return{dx:e*Math.round(t.dx/e),dy:i*Math.round(t.dy/i),referential:"world"}}height2rows(t){return Math.ceil((t+this.gap)/(this.cellHeight+this.gap))}}class D{constructor(t,e,i){h(this,"_stateTimestamp",Date.now());h(this,"_state");h(this,"runnerData");h(this,"passwordlessManager");h(this,"websocketClient");h(this,"_autocompleteState");h(this,"layoutGrid");h(this,"stateChangeCallbacks",[]);h(this,"updateUserCallbacks",[]);h(this,"onCloseCallbacks",[]);h(this,"onNoCreditsMessageCallbacks",[]);h(this,"onRedirectCallback",null);this._state=J({type:"IDLE"}),this._autocompleteState={suggestionsFor:null,suggestions:[]},this.runnerData=t,this.passwordlessManager=e,this.websocketClient=i,this.layoutGrid=x.create(this,()=>this.calculatePositions()),window.__playerService=()=>this,this.passwordlessManager.pubsub.subscribe("authenticated",o=>{o?this.endAuth():this.badAuth()})}notifyStateChange(t){this.stateChangeCallbacks.forEach(e=>e(t))}onStateChange(t){this.stateChangeCallbacks.push(t)}setState(t){this._state.value=t,this.notifyStateChange(t)}get state(){return this._state.value}static create(t,e,i){return new D(t,e,i)}updateRunnerData(t){this.runnerData=t}get brokerIsClosed(){var t;return(t=this.websocketClient.isClosed)!=null?t:!0}calculatePositions(t,e){const i=t||(this.state.type==="RUNNING"?this.state.props:{}),o=e!=null?e:this.runnerData.layout.slot;return yt(o,i,this.layoutGrid)}updateDashData(t){if(!t)throw new Error("dash is null");if(!t.layout)throw new Error("dash.layout is null");switch(this.state.type){case"RUNNING":{this.runnerData=t;const{widgets:e}=this.calculatePositions();this.setState({...this.state,widgets:e});break}default:throw new Error(`Invalid state ${this.state.type} for updateDashData`)}}async start(t={}){this.clearSuggestions(),this.websocketClient.isClosed||this.websocketClient.reset(),this.websocketClient.onClose(e=>{this.closeCallback(e)}),this.websocketClient.on("program-start-failed",e=>{this.setState({...e,type:"ERROR",cause:"PROGRAM_START_FAILED"})}),this.websocketClient.on("execution-id",()=>{this.websocketClient.send({type:"client-start",state:this.apiPageState,params:t})}),this.websocketClient.on("widgets-computed",e=>{const{widgets:i,slottables:o}=this.calculatePositions(e.props),a=this.state.type==="RUNNING"?{...this.state.inputValues}:{};if(e.variables)for(const r in e.variables){if(!(r in e.variables)){console.warn(`widget ${r} not found in layout`);continue}a[r]=e.variables[r]}this.setState({...e,type:"RUNNING",eventProcessing:!1,alerts:this.state.type==="RUNNING"?this.state.alerts:[],widgets:i,inputValues:a,slottables:o,authenticatedUser:this.passwordlessManager.getUser()})}),this.websocketClient.on("not-enough-credits",()=>{this.noCreditsMessage()}),this.websocketClient.on("redirect",e=>{this.redirect(e)}),this.websocketClient.on("auth:require-info",()=>{this.passwordlessManager.getUser()?this.endAuth():this.startAuth()}),this.websocketClient.on("autocomplete:suggestions",({suggestionsFor:e,suggestions:i})=>{this._autocompleteState={suggestionsFor:e,suggestions:i}}),this.websocketClient.on("alert",e=>{this.state.type==="RUNNING"&&this.setState({...this.state,alerts:[...this.state.alerts,{message:e.message,severity:e.severity,id:this.state.alerts.length}]})}),this.websocketClient.on("execute-js:request",async e=>{this.websocketClient.send({type:"execute-js:response",value:await B(e)})}),this.websocketClient.connect()}sendWidgetsChanged(t){this.websocketClient.send({type:"widgets-changed",state:this.apiPageState,dashDefinition:{slot:t}})}sendEvalRequest(t){this.websocketClient.send({type:"eval",expression:t,state:this.apiPageState})}sendVariableCreated(t){this.websocketClient.send({name:t,value:null,type:"variable-created",state:this.apiPageState})}makeWidgetsError(t){return{widgets:Object.keys(this.runnerData.layout.slot).reduce((i,o)=>(i[o]={repr:t},i),{}),props:{},variables:{}}}onUpdateUser(t){this.updateUserCallbacks.push(t)}onClose(t){this.onCloseCallbacks.push(t)}closeCallback(t){this.onCloseCallbacks.forEach(e=>e(t))}onNoCreditsMessage(t){this.onNoCreditsMessageCallbacks.push(t)}noCreditsMessage(){this.onNoCreditsMessageCallbacks.forEach(t=>t())}onRedirect(t){this.onRedirectCallback=t}redirect(t){!this.onRedirectCallback||this.onRedirectCallback(t)}wait(t){return this.websocketClient.wait(t)}on(t,e){this.websocketClient.on(t,e)}onMany(t,e){t.forEach(i=>this.on(i,e))}get apiPageState(){const t=this.state.type==="RUNNING"?this.state.inputValues:{},e=Object.keys(this.runnerData.layout.slot).reduce((i,o)=>{var a;return{...i,[o]:{value:(a=t[o])!=null?a:null}}},{});return{timestamp:this._stateTimestamp,widgets:e}}getUserEmail(){var t,e;switch(this.state.type){case"RUNNING":return(e=(t=this.state.authenticatedUser)==null?void 0:t.claims.email)!=null?e:null;default:return null}}startAuth(){switch(this.state.type){case"RUNNING":case"IDLE":this.setState({type:"AUTHENTICATING",previousState:this.state});break;default:throw new Error(`Invalid state ${this.state.type} for startAuth`)}}async endAuth(){this.websocketClient.send({type:"auth:saved-jwt",jwt:this.passwordlessManager.getUser().jwt}),await new Promise((t,e)=>{this.websocketClient.on("auth:valid-jwt",t),this.websocketClient.on("auth:invalid-jwt",e)})}badAuth(){if(this.state.type!=="AUTHENTICATING")throw new Error(`Invalid state ${this.state.type} for badAuth`);this.state.previousState.type==="RUNNING"?this.setState({...this.state.previousState,authenticatedUser:null}):this.state.previousState.type==="IDLE"&&this.setState({...this.state.previousState})}logout(){this.passwordlessManager.removeUser(),this.start()}isAuthenticating(){return this.state.type==="AUTHENTICATING"}get suggestionsFor(){return this._autocompleteState.suggestionsFor}get suggestions(){return this._autocompleteState.suggestions}clearSuggestions(){this._autocompleteState={suggestionsFor:null,suggestions:[]}}getAutocompleteSuggestions(t,e){t!==this.suggestionsFor&&this.clearSuggestions(),this.websocketClient.send({type:"autocomplete:load",suggestionsFor:t,code:e})}get navbarVisible(){const{logoUrl:t,brandName:e}=this.runnerData,i=this.getUserEmail();return!!(this.hasSidebar||t||e||i)}get hasSidebar(){const t=this.runnerData.sidebar;return!t||t.length==0?!1:t.some(e=>e.visible)}getWidgetsListeners(){switch(this.state.type){case"RUNNING":return Object.entries(this.state.widgets).reduce((t,[e,i])=>({...t,[e]:this.listenersFromWidget(e,i.type)}),{});default:return{}}}listenersFromWidget(t,e){return H[e].events.reduce((i,o)=>({...i,[o.key]:o.key==="update:value"?a=>this.sendWidgetInputMessage(t,a):a=>this.sendWidgetEventMessage(t,o.key,a)}),{})}sendWidgetInputMessage(t,e){!this.websocketClient||this.websocketClient.send({type:"widget-input",widgetId:t,newValue:e})}getWidgetRunData(t,e=this.runnerData.layout.slot){const i=e[t];if(i)return i;for(const o in e){const a=e[o];if(!w(a))return this.getWidgetRunData(t,a.slot)}return null}sendWidgetEventMessage(t,e,i){var r;if(!this.websocketClient||this.state.type!=="RUNNING")return;const o=this.getWidgetRunData(t);if(!((r=o==null?void 0:o.events)!=null?r:[]).includes(e))return;const a=this.apiPageState;this.websocketClient.send({type:"widget-event",event:{type:e,payload:i},widgetId:t,state:a}),this.setState({...this.state,eventProcessing:!0})}}class M{constructor(t){h(this,"ws");h(this,"pubsub");h(this,"dash");this.pubsub=new rt,this.ws=null,this.dash=t,this.pubsub.wait("close")}static create(t){return new M(t)}get url(){return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/_socket?dashPath=${encodeURIComponent(this.dash.path)}`}get isClosed(){return this.ws?this.ws.readyState!==WebSocket.OPEN:!0}on(t,e){this.pubsub.subscribe(t,e)}wait(t){return this.pubsub.wait(t)}reset(){if(!this.ws)throw new Error("no websocket to clear");this.pubsub.reset(),this.ws.close()}async connect(t=1){t>3||await new Promise((e,i)=>{this.ws=new WebSocket(this.url),this.ws.onopen=()=>{e()},this.ws.onerror=o=>{i(o)},this.ws.onclose=()=>{this.pubsub.publish("close")},this.ws.onmessage=o=>{const a=JSON.parse(o.data);this.pubsub.publish(a.type,a)}}).catch(e=>{console.error(e),this.connect(t+1)})}onClose(t){this.pubsub.subscribe("close",t)}close(){if(!this.ws)throw new Error("no websocket to close");this.ws.close()}async send(t){if(!this.ws)throw new Error("no websocket to send");if(this.isClosed)throw new Error("websocket is closed");this.ws.send(JSON.stringify(t))}}function le(s){const t=M.create(s);return D.create(s,at,t)}const It={},xt=s=>(q("data-v-5d7ea65b"),s=s(),Q(),s),Dt={class:"dash-loading"},Mt=xt(()=>S("div",{class:"dash-loading-container"},[S("div",{class:"loading-bar-background"}),S("div",{class:"loading-bar"})],-1)),Ut=[Mt];function Gt(s,t){return g(),f("div",Dt,Ut)}const $t=k(It,[["render",Gt],["__scopeId","data-v-5d7ea65b"]]);function E(){return window.matchMedia("(min-width: 1200px)").matches}const Lt={key:0,class:"error-widget"},At={key:0},Ht={key:2,class:"loading"},Ot=I({__name:"WidgetsGrid",props:{camera:{},isPreview:{type:Boolean},widgetsWithErrors:{},grid:{},widgetsListeners:{},widgetsProps:{},inputValues:{},widgets:{},forceResponsivity:{}},setup(s){const t=s,e=y(()=>({...i.value,padding:`${t.grid.margin}px`,gap:`${t.grid.gap}px`,maxWidth:`${t.grid.width}px`,height:`${t.grid.height}px`,gridTemplateColumns:`repeat(${t.grid.columns}, ${t.grid.cellWidth}px)`,gridTemplateRows:`repeat(auto-fill, ${t.grid.cellHeight}px)`})),i=y(()=>{const l=E()?t.grid.sidebarWidth+(o.value-t.grid.sidebarWidth-960)/2:(o.value-960)/2;return{"--dash-right-margin":`${E()?(o.value-t.grid.sidebarWidth-960)/2:(o.value-960)/2}px`,"--dash-left-margin":`${l}px`}}),o=W(window.innerWidth);window.addEventListener("resize",()=>{o.value=window.innerWidth});const a=l=>{const u=l.target;u.scrollHeight>u.clientHeight&&l.stopPropagation()};function r(l){return{gridColumnStart:`${l.position.colStart+1}`,gridColumnEnd:`${l.position.colEnd+2}`,gridRowStart:`${l.position.rowStart+1}`,gridRowEnd:`${l.position.rowEnd+2}`,padding:`${t.grid.padding}px`}}const d=l=>{const u=l.position.rowEnd-l.position.rowStart+1;return u*t.grid.cellHeight+(u-1)*t.grid.gap-2*t.grid.padding},c=l=>{const u=l.position.colEnd-l.position.colStart+1;return u*t.grid.cellWidth+(u-1)*t.grid.gap-2*t.grid.padding},m=l=>{var u;return l in((u=t.widgetsProps)!=null?u:{})};return(l,u)=>{const _=K("icon");return g(),f("div",{class:A(["dash",l.forceResponsivity]),style:R(e.value)},[(g(!0),f(X,null,Y(l.widgets,(n,p)=>{var v,N;return g(),f("div",{key:p,class:"widget",style:R(r(n)),onWheel:a},[((v=l.widgetsWithErrors)==null?void 0:v.find(j=>j==p))&&l.isPreview?(g(),f("div",Lt,[C(_,{width:"20",height:"20",path:$(ht),fill:"#D35249"},null,8,["path"]),c(n)>=160&&d(n)>=120?(g(),f("p",At," Ops! There is an error in this widget's properties ")):L("",!0)])):m(p)?(g(),b(et(n.type),Z({key:1,"user-props":l.widgetsProps[p],value:l.inputValues[p],errors:[],runtime:"dash","container-width":c(n),"container-height":d(n),zoom:(N=l.camera)==null?void 0:N.zoom,"widget-id":p},tt(l.widgetsListeners[p])),null,16,["user-props","value","container-width","container-height","zoom","widget-id"])):(g(),f("div",Ht))],36)}),128))],6)}}});const Tt=k(Ot,[["__scopeId","data-v-014f7759"]]),jt=I({__name:"LayoutPresenter",props:{widgets:{},props:{},inputValues:{},widgetsListeners:{},camera:{},forceResponsivity:{},grid:{},widgetsWithErrors:{},runnerData:{},isPreview:{type:Boolean}},setup(s){const t=st();return(e,i)=>(g(),b(lt,{class:"dash-player","main-color":e.runnerData.mainColor,"font-family":e.runnerData.fontFamily,theme:e.runnerData.theme,runtime:"dash"},{default:P(()=>[U(e.$slots,"header",{},void 0,!0),$(t).overrideMain?U(e.$slots,"overrideMain",{key:1},void 0,!0):(g(),b(Tt,{key:0,camera:e.camera,"is-preview":e.isPreview,"input-values":e.inputValues,"widgets-with-errors":e.widgetsWithErrors,grid:e.grid,"widgets-listeners":e.widgetsListeners,"widgets-props":e.props,widgets:e.widgets,"force-responsivity":e.forceResponsivity},null,8,["camera","is-preview","input-values","widgets-with-errors","grid","widgets-listeners","widgets-props","widgets","force-responsivity"]))]),_:3},8,["main-color","font-family","theme"]))}});const Vt=k(jt,[["__scopeId","data-v-16890a8a"]]),Ft=I({__name:"DashPlayer",props:{isPreview:{type:Boolean},dashPlayerService:{},forceResponsivity:{},camera:{},widgetsWithErrors:{},editingMode:{type:Boolean},params:{}},emits:["navigate","logout"],setup(s,{emit:t}){const e=s,i=W(null),o=W(window.innerWidth);window.addEventListener("resize",()=>{o.value=window.innerWidth});const a=n=>t("navigate",n),r=y(()=>{var n;return(n=e.dashPlayerService.getUserEmail())!=null?n:void 0}),d=y(()=>e.dashPlayerService.state.type==="RUNNING"?e.dashPlayerService.state.widgets:Object.entries(e.dashPlayerService.runnerData.layout.slot).reduce((n,[p,v])=>Object.assign(n,{[p]:v}),{})),c=y(()=>e.dashPlayerService.state.type==="RUNNING"?e.dashPlayerService.state.inputValues:{}),m=y(()=>e.dashPlayerService.state.type==="RUNNING"?e.dashPlayerService.state.alerts:[]),l=y(()=>e.dashPlayerService.state.type==="RUNNING"?e.dashPlayerService.state.props:{}),u=y(()=>{const n=E()?e.dashPlayerService.layoutGrid.sidebarWidth+(o.value-e.dashPlayerService.layoutGrid.sidebarWidth-960)/2:(o.value-960)/2;return{"--dash-right-margin":`${E()?(o.value-e.dashPlayerService.layoutGrid.sidebarWidth-960)/2:(o.value-960)/2}px`,"--dash-left-margin":`${n}px`}}),_=y(()=>({...u.value,padding:`${e.dashPlayerService.layoutGrid.margin}px`,width:`${e.dashPlayerService.layoutGrid.width}px`,gap:`${e.dashPlayerService.layoutGrid.gap}px`,height:"100%",boxSizing:"border-box"}));return e.dashPlayerService.start(e.params),e.dashPlayerService.onNoCreditsMessage(()=>{var n;(n=i.value)==null||n.open()}),(n,p)=>{var v;return g(),b(Vt,{widgets:d.value,props:l.value,"input-values":c.value,"widgets-listeners":n.dashPlayerService.getWidgetsListeners(),camera:n.camera,"force-responsivity":n.forceResponsivity,grid:n.dashPlayerService.layoutGrid,"widgets-with-errors":(v=n.widgetsWithErrors)!=null?v:[],"runner-data":n.dashPlayerService.runnerData,"is-preview":n.isPreview},it({header:P(()=>[C(z,{ref_key:"runtimeCommonsRef",ref:i,type:"dashes",runtime:n.dashPlayerService.runnerData,"full-width":!0,"is-preview":n.isPreview,"user-email":r.value,"force-responsivity":n.forceResponsivity,alerts:m.value,onNavigate:a,onLogout:p[0]||(p[0]=N=>n.dashPlayerService.logout())},null,8,["runtime","is-preview","user-email","force-responsivity","alerts"]),C(ot,null,{default:P(()=>[n.dashPlayerService.state.type==="RUNNING"&&n.dashPlayerService.state.eventProcessing?(g(),b($t,{key:0})):L("",!0)]),_:1})]),_:2},[n.dashPlayerService.isAuthenticating()?{name:"overrideMain",fn:P(()=>[S("div",{class:A(["auth-form",n.forceResponsivity]),style:R(_.value)},[C(nt,{class:"form-auth"})],6)]),key:"0"}:void 0]),1032,["widgets","props","input-values","widgets-listeners","camera","force-responsivity","grid","widgets-with-errors","runner-data","is-preview"])}}});const he=k(Ft,[["__scopeId","data-v-3b8b2152"]]);export{he as D,ae as a,oe as b,ie as c,te as d,se as i,le as m,ne as p,re as r,dt as v,ee as w};
//# sourceMappingURL=DashPlayer.08362f77.js.map
