var qe=Object.defineProperty;var Qe=(c,e,t)=>e in c?qe(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var f=(c,e,t)=>(Qe(c,typeof e!="symbol"?e+"":e,t),t);import{F as je}from"./forms.03cec43c.js";import{r as j,E as C,eH as et,cE as tt,eG as H,d as V,b as y,c as x,w as h,f as p,u,bU as st,e as k,aA as g,eD as L,cS as ot,t as He,G as $,eA as it,o as nt,eu as Me,b8 as rt,eC as at,ew as v,I as De,cK as ct,cG as lt}from"./outputWidgets.c855fc19.js";import{W as dt}from"./workspaces.2386e169.js";import{C as Ke,f as Ve,j as $e,h as We,D as ut,E as ht,a as pt,k as mt,e as ft}from"./icons.db98240b.js";import{a as yt,_ as wt}from"./FormTester.vue_vue_type_script_setup_true_lang.72afe314.js";import{d as I,r as O,t as F,e as xt,i as Be,f as St,g as bt,h as J,j as Te,p as vt,k as Nt}from"./geometryUtils.e136aecc.js";import{a as Le,s as Ce,c as Oe,m as Re}from"./keyboard.37d5a3e0.js";import{P as Ue}from"./pubsub.8b090702.js";import{a as _t,t as kt}from"./ant-design.9b735306.js";import{H as gt}from"./hooks.169083c9.js";import{J as Je}from"./jobs.a5ebbb05.js";import{L as It,a as Et,R as Pt,S as Mt}from"./SmartConsole.c95dd37f.js";import{z as N}from"./index.cf4c23b9.js";import{u as Dt,r as W}from"./uuid.858d0d73.js";import{M as Tt}from"./transButton.fb3a2378.js";import{a as Ye}from"./asyncComputed.c6ddf838.js";import{_ as Lt}from"./LaunchButton.vue_vue_type_script_setup_true_lang.3c0e953c.js";import{_ as Ct}from"./DocsButton.vue_vue_type_script_setup_true_lang.aca9c2cf.js";import{_ as Ot}from"./SaveButton.vue_vue_type_script_setup_true_lang.96421841.js";import{a as Rt,_ as At}from"./HookSettings.vue_vue_type_script_setup_true_lang.42ab6120.js";import{a as Gt,_ as Ft}from"./JobSettings.vue_vue_type_script_setup_true_lang.706ebee3.js";import{A as zt}from"./FormItem.5f048147.js";import{F as jt}from"./Base.ed4dd497.js";import{A as Ht}from"./index.d2a30c55.js";import{S as Kt}from"./StageRunSelector.vue_vue_type_script_setup_true_lang.da1b18db.js";import{b as P,A as Vt}from"./Text.e5cdb9e1.js";import{a as Ae,A as $t}from"./index.98b3954c.js";import{L as Wt}from"./LoginBlock.a5b8b565.js";import{_ as Bt}from"./Debugger.vue_vue_type_script_setup_true_lang.e02c6cee.js";import{A as Ut,c as Ge}from"./index.ca301f71.js";import{A as Jt}from"./index.ee9e56c0.js";import{A as B,T as Yt}from"./TabPane.43dcd4c4.js";import"./activeRecord.15e51427.js";import"./url.f2daa6d3.js";import"./Title.297c299a.js";import"./FormRunner.ddd3cea8.js";import"./index.2f6f7ff3.js";import"./executeJs.a6d23654.js";import"./runnerData.b3093804.js";import"./CircularLoading.0a185a3c.js";import"./PlayerNavbar.909db3fa.js";import"./Steps.55d5e558.js";import"./WidgetsFrame.5a12feff.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.a230d389.js";import"./index.c4abd790.js";import"./CollapsePanel.3cb2fd75.js";import"./index.76ead672.js";import"./dashes.5e0a2bec.js";import"./index.0fddcc92.js";import"./RunButton.vue_vue_type_script_setup_true_lang.147262b8.js";import"./index.ad987072.js";import"./index.2b4aec81.js";import"./dayjs.36d8ca30.js";import"./popupNotifcation.592f1c2d.js";import"./index.bf007316.js";import"./isNumeric.75337b1e.js";(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[e]="2cadd19b-5082-43e7-9920-f35eaba95b7e",c._sentryDebugIdIdentifier="sentry-dbid-2cadd19b-5082-43e7-9920-f35eaba95b7e")}catch{}})();const K={left:100,right:100,top:100,bottom:100},Fe={width:600,height:600};class Y{constructor(e){f(this,"_state");f(this,"projectedElement");this._state=j({x:0,y:0,zoom:1}),this.projectedElement=e}get x(){return this._state.value.x}set x(e){if(Number.isNaN(e))throw new Error("x is NaN");this._state.value.x=e}get y(){return this._state.value.y}set y(e){if(Number.isNaN(e))throw new Error("y is NaN");this._state.value.y=e}static create(e){return new Y(e)}get zoom(){return this._state.value.zoom}set zoom(e){if(e<=0)throw new Error("Zoom must be positive");this._state.value.zoom=e}fit(e){const t={x:e.x+e.width/2,y:e.y+e.height/2,referential:"world"},s=this.screenRect2world(this.canvasRect);this.x=t.x-s.width/2,this.y=t.y-s.height/2,this.zoomIn(Math.min((this.canvasRect.width-K.left-K.right)/Math.max(Fe.width,e.width),(this.canvasRect.height-K.top-K.bottom)/Math.max(Fe.height,e.height))/this.zoom,this.worldPoint2screen(t))}screenPoint2world(e){return{x:e.x/this.zoom+this.x,y:e.y/this.zoom+this.y,referential:"world"}}worldPoint2screen(e){return{x:(e.x-this.x)*this.zoom,y:(e.y-this.y)*this.zoom,referential:"screen"}}screenDelta2world(e){return{dx:e.dx/this.zoom,dy:e.dy/this.zoom,referential:"world"}}worldDelta2screen(e){return{dx:e.dx*this.zoom,dy:e.dy*this.zoom,referential:"screen"}}screenRect2world(e){const t=this.screenPoint2world({x:e.x,y:e.y,referential:e.referential}),s=this.screenPoint2world({x:e.x+e.width,y:e.y+e.height,referential:e.referential});return{x:t.x,y:t.y,width:s.x-t.x,height:s.y-t.y,referential:t.referential}}worldRect2screen(e){const t=this.worldPoint2screen({x:e.x,y:e.y,referential:e.referential}),s=this.worldPoint2screen({x:e.x+e.width,y:e.y+e.height,referential:e.referential});return{x:t.x,y:t.y,width:s.x-t.x,height:s.y-t.y,referential:t.referential}}zoomIn(e,t){const s=this.screenPoint2world(t);this.zoom*=e;const o=this.worldPoint2screen(s),i=I(t,o),n=this.screenDelta2world({dx:i.dx,dy:i.dy,referential:"screen"});this.x+=n.dx,this.y+=n.dy}translate(e){this.x+=e.dx,this.y+=e.dy}get canvasRect(){if(!this.projectedElement)throw new Error("No canvas element");const e=this.projectedElement.getBoundingClientRect();return{x:e.x,y:e.y,width:e.width,height:e.height,referential:"screen"}}}const Xt="#e55b70";class X{constructor(){}static create(){return new X}render(e){const t=O(e.selectedNodes.map(s=>s.projectedRect(e)));!t||(e.ctx.strokeStyle=Xt,e.ctx.lineWidth=2,e.ctx.strokeRect(t.x,t.y,t.width,t.height))}}class Z{constructor(e){f(this,"_nodes");f(this,"_links");f(this,"_selectedNodes");f(this,"_selectedLinks");f(this,"_mouseState");f(this,"floatingMenu");f(this,"selectionHull");f(this,"pubsub");f(this,"canvas");f(this,"ctx");f(this,"camera");this.canvas=e,this.camera=Y.create(e),this._mouseState=C({state:"IDLE",mousePos:{x:0,y:0,referential:"screen"}}),this.pubsub=new Ue,this.floatingMenu=null;const t=e.getContext("2d");if(!t)throw new Error("Unable to get canvas context");this.ctx=t,this._nodes=C([]),this._links=C([]),this._selectedNodes=C([]),this._selectedLinks=C([]),this.selectionHull=X.create()}static create(e){return new Z(e)}addTransition(){this.mouseState={state:"LINKING",mousePos:this.mouseState.mousePos,initialMousePos:this.mouseState.mousePos,snappedTarget:null}}duplicateSelection(){const e=this.selectedNodes,t=this.selectedNodes.map(n=>n.clone()),s=this.links.filter(n=>{const d=this.nodes.find(l=>l.id===n.sourceNodeId),a=this.nodes.find(l=>l.id===n.targetNodeId);if(!d||!a)throw new Error("Invalid state");return this.selectedNodes.includes(d)&&this.selectedNodes.includes(a)}).map(n=>{const d=this.nodes.find(S=>S.id===n.sourceNodeId),a=this.nodes.find(S=>S.id===n.targetNodeId);if(!d||!a)throw new Error("Invalid state");const l=this.selectedNodes.indexOf(d),r=t[l],E=this.selectedNodes.indexOf(a),w=t[E];return n.clone(r.id,w.id)});this.nodes.push(...t),this.links.push(...s),this.selectedNodes=t;const o=O(t.map(n=>n.projectedRect(this)));if(!o)throw new Error("Invalid state");const i={x:o.x+o.width/2,y:o.y+o.height/2,referential:"screen"};this.pubsub.publish("nodes:duplicated",et.exports.zip(e,t).map(([n,d])=>({original:n,duplicate:d}))),this.mouseState={state:"MOVING",duplicating:!1,initialMousePos:i,mousePos:this.mouseState.mousePos}}async deleteSelection(){if(await _t("Are you sure? This operation can't be undone")){const e={nodes:this.selectedNodes,links:this.selectedLinks};this.selectedNodes.forEach(t=>this.deleteNode(t)),this.selectedLinks.forEach(t=>this.deleteLink(t)),this.pubsub.publish("deleted",e)}}setupFixSize(){const e=()=>{const{width:t,height:s}=this.canvas.getBoundingClientRect();this.canvas.width=t*devicePixelRatio,this.canvas.height=s*devicePixelRatio,this.ctx.scale(devicePixelRatio,devicePixelRatio)};addEventListener("resize",e),e()}computeCursor(){switch(this.mouseState.state){case"HOVERING_NODE":case"HOVERING_MENU_ITEM":case"HOVERING_LINK":this.canvas.style.cursor="pointer";break;case"JUST_CLICKED_NODE":this.canvas.style.cursor="default";break;case"MOVING":this.canvas.style.cursor="move";break;case"PANNING":this.canvas.style.cursor="grabbing";break;case"LINKING":this.canvas.style.cursor="crosshair";break;case"IDLE":default:this.canvas.style.cursor="grab"}}computePan(e){if(this.mouseState.state!=="PANNING")throw new Error("Invalid state");const t=I(e,this.mouseState.mousePos),s=this.camera.screenDelta2world(t);this.camera.translate(s),this.mouseState={state:"PANNING",initialMousePos:this.mouseState.initialMousePos,mousePos:e}}computeStartMoving(e,t){if(this.mouseState.state!=="JUST_CLICKED_NODE")throw new Error("Invalid state");this.mouseState={state:"MOVING",duplicating:t,initialMousePos:this.mouseState.mousePos,mousePos:e}}get mouseState(){return this._mouseState.value}set mouseState(e){this._mouseState.value=e}get nodes(){return this._nodes.value}set nodes(e){this._nodes.value=e}get links(){return this._links.value}set links(e){this._links.value=e}get selectedNodes(){return this._selectedNodes.value}set selectedNodes(e){this._selectedNodes.value=e}get selectedLinks(){return this._selectedLinks.value}set selectedLinks(e){this._selectedLinks.value=e}computeKeepMoving(e,t){if(this.mouseState.state!=="MOVING")throw new Error("Invalid state");this.mouseState={state:"MOVING",duplicating:t,initialMousePos:this.mouseState.initialMousePos,mousePos:e}}computeKeepLinking(e){if(this.mouseState.state!=="LINKING")throw new Error("Invalid state");const t=this.nodes.find(s=>s.isHovering(this,e));t?this.mouseState={state:"LINKING",initialMousePos:this.mouseState.initialMousePos,mousePos:e,snappedTarget:t}:this.mouseState={state:"LINKING",initialMousePos:this.mouseState.initialMousePos,mousePos:e,snappedTarget:null}}computeHover(e){var i;const t=(i=this.floatingMenu)==null?void 0:i.hoverItem(this,e);if(t){this.mouseState={state:"HOVERING_MENU_ITEM",mousePos:e,menuItem:t};return}const s=this.links.find(n=>n.isHovering(this,e));if(s){this.mouseState={state:"HOVERING_LINK",link:s,mousePos:e};return}const o=this.nodes.find(n=>n.isHovering(this,e));if(o){this.mouseState={state:"HOVERING_NODE",node:o,mousePos:e};return}this.mouseState={state:"IDLE",mousePos:e}}fitCameraToContent(){const e=O(this.nodes.map(t=>t.projectedRect(this)));!e||this.camera.fit(this.camera.screenRect2world(e))}computeFinishMoving(){if(this.mouseState.state!=="MOVING")throw new Error("Invalid state");const e=this.camera.screenPoint2world(this.mouseState.initialMousePos),t=this.camera.screenPoint2world(this.mouseState.mousePos),s=I(e,t);this.pubsub.publish("nodes:moved",this.selectedNodes.map(o=>{const i=o.position;o.translate(s);const n=o.position;return{node:o,from:i,to:n}}))}computeFinishDuplicating(){if(this.mouseState.state!=="MOVING"||!this.mouseState.duplicating)throw new Error("Invalid state");const e=this.camera.screenPoint2world(this.mouseState.initialMousePos),t=this.camera.screenPoint2world(this.mouseState.mousePos),s=I(e,t);this.pubsub.publish("nodes:duplicated",this.selectedNodes.map(o=>{const i=o.clone();return i.translate(s),this.nodes.push(i),{original:o,duplicate:i}})),this.selectedNodes=this.selectedNodes.map(o=>{const i=o.clone();return i.translate(s),i})}computeFinishLinking(e){if(this.mouseState.state!=="LINKING"||!this.mouseState.snappedTarget)throw new Error("Invalid state");const t=this.mouseState.snappedTarget,s=this.selectedNodes.map(o=>o.addLinkTo(this,t));this.pubsub.publish("transition:added",{links:s}),this.selectedNodes=[this.mouseState.snappedTarget],this.mouseState={state:"IDLE",mousePos:e}}computeMouseRelease(e){this.mouseState.state==="MOVING"&&!this.mouseState.duplicating?this.computeFinishMoving():this.mouseState.state==="MOVING"&&this.mouseState.duplicating?this.computeFinishDuplicating():this.mouseState.state==="LINKING"&&this.mouseState.snappedTarget&&this.computeFinishLinking(e),this.mouseState={state:"IDLE",mousePos:e}}setupMousemove(){const e=t=>{const s=this.getScreenPointerFromEvent(t);this.mouseState.state==="PANNING"?this.computePan(s):this.mouseState.state==="JUST_CLICKED_NODE"?this.computeStartMoving(s,Le(t)):this.mouseState.state==="MOVING"?this.computeKeepMoving(s,Le(t)):this.mouseState.state==="LINKING"?this.computeKeepLinking(s):this.mouseState.state==="ADDING_NEW_NODES"?this.computeKeepAdding(s):this.computeHover(s),this.computeCursor()};addEventListener("mousemove",e)}computeKeepAdding(e){if(this.mouseState.state!=="ADDING_NEW_NODES")throw new Error("Invalid state");this.mouseState.nodes.forEach(t=>t.position=this.camera.screenPoint2world(t.projectedCenter(this))),this.mouseState={state:"ADDING_NEW_NODES",mousePos:e,nodes:this.mouseState.nodes}}setupDragover(){const e=t=>{if(t.preventDefault(),this.mouseState.state!=="ADDING_NEW_NODES")return;const s=this.getScreenPointerFromEvent(t);this.computeKeepAdding(s)};this.canvas.addEventListener("dragover",e)}computeFinishAdding(e){if(this.mouseState.state!=="ADDING_NEW_NODES")return;this.computeKeepAdding(e),this.nodes.push(...this.mouseState.nodes),this.selectedNodes=this.mouseState.nodes;const t=O(this.mouseState.nodes.map(d=>d.projectedRect(this)));if(!t)throw new Error("Invalid state");const s={x:t.x+t.width/2,y:t.y+t.height/2,referential:"screen"},o=this.camera.screenPoint2world(s),i=this.camera.screenPoint2world(e),n=I(o,i);this.mouseState.nodes.forEach(d=>d.translate(n)),this.mouseState={state:"IDLE",mousePos:e},this.pubsub.publish("nodes:added",{nodes:this.selectedNodes})}setupDrop(){const e=t=>{t.stopPropagation();const s=this.getScreenPointerFromEvent(t);this.computeFinishAdding(s)};this.canvas.addEventListener("drop",e)}getScreenPointerFromEvent(e){return{x:e.offsetX,y:e.offsetY,referential:"screen"}}computeStartClicking(e,t){if(this.mouseState.state==="ADDING_NEW_NODES")this.computeFinishAdding(e);else if(this.mouseState.state==="HOVERING_LINK"){const s=this.mouseState.link;t?this.selectedLinks=[...this.selectedLinks,s]:this.selectedLinks.includes(s)||(this.selectedLinks=[s],this.selectedNodes=[]),this.mouseState={state:"JUST_CLICKED_NODE",mousePos:e,node:this.nodes.find(o=>o.id===s.sourceNodeId)}}else if(this.mouseState.state==="HOVERING_NODE"){const s=this.mouseState.node;t?this.selectedNodes=[...this.selectedNodes,s]:this.selectedNodes.includes(s)||(this.selectedNodes=[s],this.selectedLinks=[]),this.mouseState={state:"JUST_CLICKED_NODE",mousePos:e,node:s}}else this.mouseState.state==="HOVERING_MENU_ITEM"?this.mouseState.menuItem.click():this.mouseState.state==="LINKING"?this.computeFinishLinking(e):(this.clearSelection(),this.mouseState={state:"PANNING",initialMousePos:e,mousePos:e})}setupDoubleClick(){const e=()=>{if(this.mouseState.state!=="HOVERING_NODE")return;const t=this.mouseState.node;this.pubsub.publish("node:dblclick",{node:t})};this.canvas.addEventListener("dblclick",e)}setupMousedown(){const e=t=>{const s=this.getScreenPointerFromEvent(t);this.computeStartClicking(s,Ce(t))};this.canvas.addEventListener("mousedown",e)}setupMouseup(){const e=t=>{const s=this.getScreenPointerFromEvent(t);this.computeMouseRelease(s),this.computeHover(s),this.computeCursor()};this.canvas.addEventListener("mouseup",e)}computeZoomIn(e,t){this.camera.zoomIn(t,e)}setupWheel(){const e=t=>{if(!this.camera)return;const s={x:t.pageX,y:t.pageY,referential:"screen"};if(Oe(t)||Re(t))this.computeZoomIn(s,t.deltaY>0?.9:1.1),t.preventDefault();else{const o=Ce(t)?{dx:t.deltaY,dy:0}:{dx:t.deltaX,dy:t.deltaY},i=this.camera.screenDelta2world({dx:o.dx,dy:o.dy,referential:"screen"});this.camera.translate(i)}t.stopPropagation()};this.canvas.addEventListener("wheel",e)}deleteNode(e){this.nodes=this.nodes.filter(t=>t!==e),this.links=this.links.filter(t=>t.sourceNodeId!==e.id&&t.targetNodeId!==e.id),this.selectedNodes=this.selectedNodes.filter(t=>t!==e)}deleteLink(e){this.links=this.links.filter(t=>t!==e),this.selectedLinks=[]}setupKeydown(){const e=t=>{t.key==="Delete"||t.key==="Backspace"?this.deleteSelection():t.key==="a"&&(Oe(t)||Re(t))?(this.selectedNodes=this.nodes,t.preventDefault()):t.key==="Escape"?(this.clearSelection(),this.mouseState={state:"IDLE",mousePos:this.mouseState.mousePos}):t.key==="t"?this.addTransition():t.key==="Enter"&&this.pubsub.publish("node:dblclick",{node:this.selectedNodes[0]})};this.canvas.parentElement.addEventListener("keydown",e)}renderMouseState(){switch(this.mouseState.state){case"ADDING_NEW_NODES":this.mouseState.nodes.forEach(e=>e.render(this));break}}setFloatingMenu(e){this.floatingMenu=e}render(){var e;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.links.forEach(t=>{t.render(this)}),this.nodes.forEach(t=>{t.render(this)}),(e=this.floatingMenu)==null||e.render(this),this.selectionHull.render(this),this.renderMouseState(),requestAnimationFrame(()=>this.render())}init(){this.setupFixSize(),this.setupMousemove(),this.setupDragover(),this.setupDoubleClick(),this.setupMousedown(),this.setupDrop(),this.setupMouseup(),this.setupWheel(),this.setupKeydown(),this.fitCameraToContent(),this.render()}clear(){this.nodes=[],this.links=[]}addNode(e){this.nodes.push(e)}addLink(e){this.links.push(e)}clearSelection(){this.selectedNodes=[],this.selectedLinks=[]}dragstart(e,t){const s=this.getScreenPointerFromEvent(t);this.clearSelection(),this.mouseState={state:"ADDING_NEW_NODES",mousePos:s,nodes:[e]}}}const Zt="rgba(0, 0, 0, 1)",qt="rgba(0, 0, 0, 0.5)";class q{constructor(e){f(this,"rawItems");this.rawItems=e}static create(e){return new q(e)}getMenuItems(e){const t=e.selectedNodes,s=O(t.map(E=>E.projectedRect(e)));if(!s)return[];const o={x:s.x+s.width,y:s.y,referential:"screen"},i=10,n=16,d=10,a={dx:n+i,dy:n,referential:"screen"},l={dx:0,dy:2*n+d,referential:"screen"},r=F(o,a);return this.rawItems.map((E,w)=>{const S=F(r,xt(l,w));return{label:E.label,icon:E.icon,circle:{...S,radius:n},click:E.click}})}isVisible(e){return e.selectedNodes.length>0&&e.mouseState.state!=="LINKING"&&e.mouseState.state!=="MOVING"}itemHover(e,t){return e.mouseState.state==="HOVERING_MENU_ITEM"&&e.mouseState.menuItem.label===t.label}renderItem(e,t){const s=this.itemHover(e,t),o=s?Zt:qt;if(e.ctx.strokeStyle=o,e.ctx.lineWidth=2,s){e.ctx.font="12px sans-serif";const d=e.ctx.measureText(t.label).width;e.ctx.beginPath(),e.ctx.arc(t.circle.x,t.circle.y,t.circle.radius,Math.PI/2,-Math.PI/2),e.ctx.lineTo(t.circle.x+d+t.circle.radius,t.circle.y-t.circle.radius),e.ctx.arc(t.circle.x+d+t.circle.radius,t.circle.y,t.circle.radius,-Math.PI/2,Math.PI/2),e.ctx.lineTo(t.circle.x,t.circle.y+t.circle.radius),e.ctx.fillStyle="white",e.ctx.fill(),e.ctx.stroke(),e.ctx.textBaseline="middle",e.ctx.textAlign="left",e.ctx.font="12px sans-serif",e.ctx.fillStyle=o,e.ctx.fillText(t.label,t.circle.x+t.circle.radius,t.circle.y)}else e.ctx.beginPath(),e.ctx.arc(t.circle.x,t.circle.y,t.circle.radius,0,2*Math.PI),e.ctx.fillStyle="white",e.ctx.fill(),e.ctx.stroke();const i=new Path2D(t.icon);e.ctx.save();const n=12;e.ctx.translate(t.circle.x-n,t.circle.y-n),e.ctx.fillStyle=o,e.ctx.fill(i),e.ctx.restore()}render(e){!this.isVisible(e)||this.getMenuItems(e).forEach(t=>{this.renderItem(e,t)})}hoverItem(e,t){if(!!this.isVisible(e))return this.getMenuItems(e).find(s=>{if(this.itemHover(e,s)){const o=e.ctx.measureText(s.label).width,i={x:s.circle.x-s.circle.radius,y:s.circle.y-s.circle.radius,width:o+3*s.circle.radius,height:2*s.circle.radius,referential:"screen"};return Be(t,i)}else return St(t,s.circle)})}}const Qt=N.object({id:N.string(),label:N.string().nullable(),targetPath:N.string(),targetType:N.enum(["forms","hooks","jobs","scripts"])}),es=N.object({type:N.enum(["forms","hooks","jobs","scripts"]),position:N.tuple([N.number(),N.number()]),label:N.string(),id:N.string(),transitions:N.array(Qt)}),ts=N.array(es),G={"Content-Type":"application/json"};class ss{constructor(){f(this,"pubsub");this.pubsub=new Ue}async getInitialData(){const e=await fetch("/_editor/api/workflows/initial-data");if(e.ok){const t=await e.json();return ts.parse(t)}else throw this.pubsub.publish("error",{message:await e.text(),action:"getInitialData"}),new Error("Failed to fetch initial data")}async move(e){const t=await fetch("/_editor/api/workflows/move",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"move"}),new Error("Failed to move nodes")}async delete(e){const t=await fetch("/_editor/api/workflows/delete",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"delete"}),new Error("Failed to delete nodes")}async addNodes(e){const t=await fetch("/_editor/api/workflows/add-nodes",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"addNodes"}),new Error("Failed to add nodes")}async duplicateNodes(e){const t=await fetch("/_editor/api/workflows/duplicate-nodes",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"duplicateNodes"}),new Error("Failed to duplicate nodes")}async addTransition(e){const t=await fetch("/_editor/api/workflows/add-transition",{method:"POST",headers:G,body:JSON.stringify(e)});if(!t.ok)throw this.pubsub.publish("error",{message:await t.text(),action:"duplicateNodes"}),new Error("Failed to duplicate nodes")}}const T=new ss,os="#ababab",is="#e55b70";function Xe(c,e,t){const s=e.projectedCenter(c);let o;if(t instanceof _){const n=t.projectedRect(c),d=J(n);o=Te(s,I(s,d),t.projectedRect(c))}else o=c.mouseState.mousePos;return{p1:Te(o,I(o,s),e.projectedRect(c)),p2:o}}function Ze(c,e,t,s=!1){const{p1:o,p2:i}=Xe(c,e,t),n=20,d=10;if(vt(o,i)<2*n)return;const a=Math.atan2(i.y-o.y,i.x-o.x);c.ctx.strokeStyle=s?is:os,c.ctx.lineWidth=4,c.ctx.lineJoin="round",c.ctx.lineCap="round",c.ctx.beginPath(),c.ctx.moveTo(o.x+n*Math.cos(a),o.y+n*Math.sin(a)),c.ctx.lineTo(i.x-n*Math.cos(a),i.y-n*Math.sin(a)),c.ctx.moveTo(i.x-n*Math.cos(a)-d*Math.cos(a-Math.PI/6),i.y-n*Math.sin(a)-d*Math.sin(a-Math.PI/6)),c.ctx.lineTo(i.x-n*Math.cos(a),i.y-n*Math.sin(a)),c.ctx.lineTo(i.x-n*Math.cos(a)-d*Math.cos(a+Math.PI/6),i.y-n*Math.sin(a)-d*Math.sin(a+Math.PI/6)),c.ctx.stroke()}class R{constructor(e,t,s){f(this,"sourceType");f(this,"sourceId");f(this,"dto");if(!s.targetPath)throw new Error(`Link ${s.id} has no target`);this.sourceType=e,this.sourceId=t,this.dto=s}get sourceNodeId(){return this.sourceId}get sourceNodeType(){return this.sourceType}get targetNodeId(){return this.dto.targetPath}get targetNodeType(){return this.dto.targetType}get id(){return this.dto.id}clone(e,t){return new R(this.sourceType,e,{...this.dto,id:Dt(),targetPath:t})}isHovering(e,t){const s=e.nodes.find(n=>n.id===this.sourceNodeId),o=e.nodes.find(n=>n.id===this.targetNodeId);if(!s)throw new Error(`Source node ${this.sourceId} not found`);if(!o)throw new Error(`Target node ${this.targetNodeId} not found`);const i={radius:10,segment:Xe(e,s,o)};return bt(t,i)}static from(e,t,s){return new R(e,t,s)}render(e){const t=e.nodes.find(i=>i.id===this.sourceNodeId),s=e.nodes.find(i=>i.id===this.targetNodeId);if(!t)throw new Error(`Source node ${this.sourceId} not found`);if(!s)throw new Error(`Target node ${this.targetNodeId} not found`);const o=e.selectedLinks.includes(this);Ze(e,t,s,o)}}const ns="#5b5b5b",U=18;class _{constructor(e){f(this,"dto");this.dto=e}addLinkTo(e,t){const s=R.from(this.type,this.id,{id:W(),label:"",targetPath:t.id,targetType:t.type});return e.addLink(s),s}get id(){return this.dto.id}get type(){return this.dto.type}get title(){return this.dto.label}static from(e){return new _(e)}static new(e){return new _({type:e,id:W(),position:[0,0],label:`New ${e.slice(0,-1)}`,transitions:[]})}static async getSavedState(){const e=await T.getInitialData(),t=e.map(o=>_.from(o)),s=e.flatMap(o=>o.transitions.map(i=>R.from(o.type,o.id,i)));return{nodes:t,links:s}}get position(){return{x:this.dto.position[0],y:this.dto.position[1],referential:"world"}}set position(e){this.dto.position=[e.x,e.y]}projectedCenter(e){const t=e.camera.worldPoint2screen(this.position);if(e.mouseState.state==="MOVING"&&e.selectedNodes.includes(this))return F(t,I(e.mouseState.initialMousePos,e.mouseState.mousePos));if(e.mouseState.state==="ADDING_NEW_NODES"&&e.mouseState.nodes.includes(this)){const s=O(e.mouseState.nodes.map(i=>i.screenRect(e)));if(!s)throw new Error("No hull found");const o=J(s);return F(t,I(o,e.mouseState.mousePos))}else return t}get icon(){return{scripts:Ke,forms:Ve,jobs:$e,hooks:We}[this.dto.type]}screenRect(e){const t=e.camera.worldPoint2screen(this.position),o=this.getTextSize(e).width+50*e.camera.zoom,i=e.camera.zoom*(U+22);return{x:t.x-o/2,y:t.y-i/2,width:o,height:i,referential:"screen"}}projectedRect(e){const t=this.projectedCenter(e),o=this.getTextSize(e).width+50*e.camera.zoom,i=e.camera.zoom*(U+22);return{x:t.x-o/2,y:t.y-i/2,width:o,height:i,referential:"screen"}}renderIcon(e,t){e.ctx.fillStyle=ns,e.ctx.save(),e.ctx.translate(t.x+8*e.camera.zoom,t.y+8*e.camera.zoom),e.ctx.scale(e.camera.zoom,e.camera.zoom),e.ctx.fill(new Path2D(this.icon)),e.ctx.restore()}setTextRenderingCtx(e){e.ctx.textAlign="left",e.ctx.textBaseline="middle",e.ctx.fillStyle="black";const t=(U*e.camera.zoom).toFixed(0);e.ctx.font=`${t}px sans-serif`}getTextSize(e){return this.setTextRenderingCtx(e),e.ctx.measureText(this.dto.label)}renderLabel(e,t){const s=J(t),o=t.x;this.setTextRenderingCtx(e),!(e.ctx.measureText(this.dto.label).width>t.width)&&e.ctx.fillText(this.dto.label,o+40*e.camera.zoom,s.y)}renderCard(e,t){e.ctx.save(),e.ctx.fillStyle="white",e.ctx.shadowBlur=15,e.ctx.shadowColor="rgba(0,0,0,0.1)",e.ctx.fillRect(t.x,t.y,t.width,t.height),e.ctx.restore(),e.ctx.strokeStyle="gray",this.renderIcon(e,t),this.renderLabel(e,t)}renderSelf(e){const t=this.projectedRect(e);this.renderCard(e,t)}renderDuplicating(e){if(e.mouseState.state==="MOVING"&&e.mouseState.duplicating&&e.selectedNodes.includes(this)){const t=this.projectedRect(e),s=I(e.mouseState.mousePos,e.mouseState.initialMousePos),o=Nt(t,s);this.renderCard(e,o)}}renderLinking(e){var t;e.mouseState.state!=="LINKING"||!e.selectedNodes.includes(this)||Ze(e,this,(t=e.mouseState.snappedTarget)!=null?t:e.mouseState.mousePos)}render(e){this.renderLinking(e),this.renderSelf(e),this.renderDuplicating(e)}isHovering(e,t){return Be(t,this.projectedRect(e))}translate(e){const t=F(this.position,e);this.dto.position=[t.x,t.y]}clone(){return _.from({...this.dto,label:`${this.dto.label} (copy)`,id:W()})}}async function ze(c,e,t){const s=e.selectedNodes[0];if(s.type==="forms")c.inspector={runtimeType:"forms",model:H(await je.get(s.id)),inspectorMode:t};else if(s.type==="jobs")c.inspector={runtimeType:"jobs",model:H(await Je.get(s.id)),inspectorMode:t};else if(s.type==="hooks")c.inspector={runtimeType:"hooks",model:H(await gt.get(s.id)),inspectorMode:t};else if(s.type==="scripts")c.inspector={runtimeType:"scripts",model:H(await Et.get(s.id)),inspectorMode:t};else throw new Error(`Unknown type ${s.type}`)}class z{constructor(e){f(this,"canvasGui");f(this,"_inspector");f(this,"logService");this.canvasGui=e,window.__canvasGui=e,this._inspector=j(null),this.logService=It.create()}static async init(e){const t=Z.create(e),s=new z(t),i=navigator.userAgent.indexOf("Mac OS X")?"Option":"Alt";t.pubsub.subscribe("node:dblclick",()=>{ze(s,t,"edit")});const n=q.create([{icon:ut,label:"Options (Double click/Enter)",click:async()=>{ze(s,t,"edit")}},{icon:ht,label:"Add transition (T)",click:()=>{t.addTransition()}},{icon:pt,label:`Duplicate (${i} + Drag)`,click:()=>{t.duplicateSelection()}},{icon:mt,label:"Delete (Delete/Backspace)",click:()=>{t.deleteSelection()}}]);t.setFloatingMenu(n);let d=null;return addEventListener("mousemove",a=>d=a),e.parentElement.addEventListener("keydown",a=>{!d||(a.key==="f"?t.dragstart(_.new("forms"),d):a.key==="h"?t.dragstart(_.new("hooks"),d):a.key==="j"?t.dragstart(_.new("jobs"),d):a.key==="s"&&t.dragstart(_.new("scripts"),d))}),await this.reload(t),t.init(),T.pubsub.subscribe("error",({message:a})=>{tt.error({message:a}),this.reload(t)}),t.pubsub.subscribe("nodes:moved",a=>T.move(a.map(l=>({type:l.node.type,id:l.node.id,position:[l.to.x,l.to.y]})))),t.pubsub.subscribe("deleted",a=>T.delete([...a.nodes.map(l=>({id:l.id,type:l.type})),...a.links.map(l=>({id:l.id,type:"transitions"}))])),t.pubsub.subscribe("nodes:added",a=>T.addNodes(a.nodes.map(l=>({position:[l.position.x,l.position.y],type:l.type,id:l.id,title:l.title})))),t.pubsub.subscribe("nodes:duplicated",a=>T.duplicateNodes(a.map(({duplicate:l,original:r})=>({original_id:r.id,new_id:l.id,type:r.type,position:[l.position.x,l.position.y],title:l.title})))),t.pubsub.subscribe("transition:added",a=>T.addTransition(a.links.map(l=>({source:{type:l.sourceNodeType,id:l.sourceNodeId},target:{id:l.targetNodeId,type:l.targetNodeType},id:l.id})))),s}static async reload(e){const t=await T.getInitialData();e.clear(),t.forEach(s=>{e.addNode(_.from(s)),s.transitions.forEach(o=>{e.addLink(R.from(s.type,s.id,o))})})}get inspector(){return this._inspector.value}set inspector(e){this._inspector.value=e}async closeInspector(){var t;const e=async()=>new Promise(s=>Tt.confirm({title:"You have unsaved changes. Do you ",okText:"Save",cancelText:"Continue without saving",okButtonProps:{type:"primary"},cancelButtonProps:{danger:!0},onOk:async()=>{var o;await((o=this._inspector.value)==null?void 0:o.model.save()),await z.reload(this.canvasGui),s()},onCancel:()=>s()}));(t=this._inspector.value)!=null&&t.model.hasChanges()&&await e(),this._inspector.value=null,z.reload(this.canvasGui)}async dragstart(e,t){this.canvasGui.dragstart(_.new(e),t)}}const rs=V({__name:"ScriptSettings",props:{script:{}},setup(c){return(e,t)=>(y(),x(u(jt),{layout:"vertical"},{default:h(()=>[p(u(zt),{label:"Name",required:""},{default:h(()=>[p(u(st),{value:e.script.title,"onUpdate:value":t[0]||(t[0]=s=>e.script.title=s)},null,8,["value"])]),_:1}),p(Pt,{runtime:e.script},null,8,["runtime"])]),_:1}))}}),as=V({__name:"ScriptTester",props:{script:{},logService:{}},setup(c,{expose:e}){const t=c,s=j(!1);async function o(){s.value=!0;try{const{stdout:i,stderr:n}=await t.script.test();t.logService.log({type:"stdout",log:i}),t.logService.log({type:"stderr",log:n})}finally{s.value=!1}}return e({test:o}),(i,n)=>(y(),x(u(Ht),{"show-icon":"",message:"Scripts should be intermediate tasks in the workflow and can't be run directly."}))}}),cs={class:"row-itens-container"},ls={class:"row-itens-container"},ds=V({__name:"StageInspector",props:{runtime:{}},setup(c){const e=c;function t(i){switch(i.status){case"waiting":return{color:"blue",text:"Waiting"};case"running":return{color:"processing",text:"Running"};case"finished":return{color:"success",text:"Success"};case"failed":return{color:"error",text:"Failed"};case"abandoned":return{color:"warning",text:"Abandoned"}}}const{result:s,loading:o}=Ye(()=>Kt.list(e.runtime instanceof Je?e.runtime.identifier:e.runtime.path));return(i,n)=>{var d;return y(),x(u($t),{loading:u(o),"item-layout":"vertical","data-source":(d=u(s))!=null?d:[]},{header:h(()=>[p(u(Ae),null,{default:h(()=>[k("span",cs,[p(u(P),null,{default:h(()=>[g("ID")]),_:1}),p(u(P),null,{default:h(()=>[g("Status")]),_:1}),p(u(P),null,{default:h(()=>[g("Assignee")]),_:1}),p(u(P),null,{default:h(()=>[g("Data")]),_:1})])]),_:1})]),renderItem:h(({item:a})=>[p(u(Ae),null,{default:h(()=>[k("span",ls,[p(u(P),null,{default:h(()=>[g(L(a.id.slice(0,8)),1)]),_:2},1024),k("span",null,[p(u(Vt),{color:t(a).color},{default:h(()=>[g(L(t(a).text),1)]),_:2},1032,["color"])]),p(u(P),null,{default:h(()=>{var l;return[g(L((l=a.assignee)!=null?l:"Anyone"),1)]}),_:2},1024),k("span",null,[p(u(ot),{"tree-data":u(kt)(a.data)},null,8,["tree-data"])])])]),_:2},1024)]),_:1},8,["loading","data-source"])}}});const us=He(ds,[["__scopeId","data-v-e41c0f24"]]),hs={class:"workflow-editor"},ps={class:"title"},ms={href:"/_editor/style"},fs={class:"workflow-editor-content"},ys={class:"workflow-toolbar"},ws=["onDragstart"],xs={class:"canvas-container",tabindex:"0"},Ss=V({__name:"WorkflowEditor",setup(c){const e=j(null),t=$(()=>{var S,M,m;const w=(m=(M=(S=r.value)==null?void 0:S.inspector)==null?void 0:M.model.title)!=null?m:"";return w.length>30?w.slice(0,30)+"...":w}),{result:s}=Ye(()=>dt.get()),o=$(()=>{var w;return(w=s.value)==null?void 0:w.makeRunnerData().logoUrl}),i=$(()=>{var w;return(w=s.value)==null?void 0:w.makeRunnerData().brandName}),n=it();function d(){n.push({name:"workspace"})}const a=[{icon:Ve,title:"Forms",type:"forms",description:"Wait for a user input",key:"F"},{icon:We,title:"Hooks",type:"hooks",description:"Wait for an external API call",key:"H"},{icon:$e,title:"Jobs",type:"jobs",description:"Scheduled tasks",key:"J"},{icon:Ke,title:"Scripts",type:"scripts",description:"Run a script",key:"S"}],l=j(null),r=C(null),E=(w,S)=>{var M,m;(M=S.dataTransfer)==null||M.setData("type",w),(m=r.value)==null||m.dragstart(w,S)};return nt(async()=>{if(!l.value)throw new Error("Canvas not found");r.value=await z.init(l.value)}),(w,S)=>{var M;return y(),Me("div",hs,[p(u(Ge),{style:{padding:"5px 10px"},onBack:d},{extra:h(()=>[p(Bt),p(Ct),p(Wt)]),avatar:h(()=>[o.value?(y(),x(u(Ut),{key:0,src:o.value},null,8,["src"])):v("",!0),k("span",ps,[p(u(P),null,{default:h(()=>[g(L(i.value||"New Workflow"),1)]),_:1}),k("a",ms,[p(De,{path:u(ft),class:"edit-icon"},null,8,["path"])])])]),_:1}),k("div",fs,[k("div",ys,[(y(),Me(rt,null,at(a,m=>p(u(lt),{key:m.type,placement:"right"},{title:h(()=>[p(u(ct),null,{default:h(()=>[p(u(P),null,{default:h(()=>[g(L(m.title),1)]),_:2},1024),p(u(P),{keyboard:""},{default:h(()=>[g(L(m.key),1)]),_:2},1024)]),_:2},1024)]),content:h(()=>[g(L(m.description),1)]),default:h(()=>[k("span",{draggable:"true",onDragstart:b=>E(m.type,b)},[p(De,{class:"toolbar-item",path:m.icon},null,8,["path"])],40,ws)]),_:2},1024)),64))]),k("div",xs,[k("canvas",{ref_key:"canvas",ref:l,class:"workflow-canvas"},null,512)])]),p(u(Jt),{class:"workflow-inspector",open:!!((M=r.value)!=null&&M.inspector),width:640,"footer-style":{padding:0},onClose:S[1]||(S[1]=m=>{var b;return(b=r.value)==null?void 0:b.closeInspector()})},{title:h(()=>[p(u(Ge),{title:t.value,style:{padding:"5px 10px"}},{footer:h(()=>{var m;return[(m=r.value)!=null&&m.inspector?(y(),x(u(Yt),{key:0,"active-key":r.value.inspector.inspectorMode,"onUpdate:activeKey":S[0]||(S[0]=b=>r.value.inspector.inspectorMode=b)},{rightExtra:h(()=>[]),default:h(()=>[p(u(B),{key:"edit",tab:"Settings"}),p(u(B),{key:"list-stage-runs",tab:"Threads"}),p(u(B),{key:"start-abuble",tab:"Test"})]),_:1},8,["active-key"])):v("",!0)]}),extra:h(()=>{var m,b,D,A;return[((b=(m=r.value)==null?void 0:m.inspector)==null?void 0:b.model)instanceof u(je)?(y(),x(Lt,{key:0,path:r.value.inspector.model.path},null,8,["path"])):v("",!0),((A=(D=r.value)==null?void 0:D.inspector)==null?void 0:A.inspectorMode)==="edit"?(y(),x(Ot,{key:1,model:r.value.inspector.model},null,8,["model"])):v("",!0)]}),_:1},8,["title"])]),default:h(()=>{var m,b,D,A,Q,ee,te,se,oe,ie,ne,re,ae,ce,le,de,ue,he,pe,me,fe,ye,we,xe,Se,be,ve,Ne,_e,ke,ge,Ie,Ee,Pe;return[((b=(m=r.value)==null?void 0:m.inspector)==null?void 0:b.inspectorMode)==="list-stage-runs"?(y(),x(us,{key:0,runtime:r.value.inspector.model},null,8,["runtime"])):v("",!0),((A=(D=r.value)==null?void 0:D.inspector)==null?void 0:A.runtimeType)==="forms"&&((ee=(Q=r.value)==null?void 0:Q.inspector)==null?void 0:ee.inspectorMode)==="edit"?(y(),x(yt,{key:1,form:r.value.inspector.model},null,8,["form"])):v("",!0),((se=(te=r.value)==null?void 0:te.inspector)==null?void 0:se.runtimeType)==="jobs"&&((ie=(oe=r.value)==null?void 0:oe.inspector)==null?void 0:ie.inspectorMode)==="edit"?(y(),x(Gt,{key:2,job:r.value.inspector.model},null,8,["job"])):v("",!0),((re=(ne=r.value)==null?void 0:ne.inspector)==null?void 0:re.runtimeType)==="hooks"&&((ce=(ae=r.value)==null?void 0:ae.inspector)==null?void 0:ce.inspectorMode)==="edit"?(y(),x(Rt,{key:3,hook:r.value.inspector.model},null,8,["hook"])):v("",!0),((de=(le=r.value)==null?void 0:le.inspector)==null?void 0:de.runtimeType)==="scripts"&&((he=(ue=r.value)==null?void 0:ue.inspector)==null?void 0:he.inspectorMode)==="edit"?(y(),x(rs,{key:4,script:r.value.inspector.model},null,8,["script"])):v("",!0),((me=(pe=r.value)==null?void 0:pe.inspector)==null?void 0:me.runtimeType)==="hooks"&&((ye=(fe=r.value)==null?void 0:fe.inspector)==null?void 0:ye.inspectorMode)==="start-abuble"?(y(),x(At,{key:5,hook:r.value.inspector.model,"log-service":r.value.logService},null,8,["hook","log-service"])):v("",!0),((xe=(we=r.value)==null?void 0:we.inspector)==null?void 0:xe.runtimeType)==="forms"&&((be=(Se=r.value)==null?void 0:Se.inspector)==null?void 0:be.inspectorMode)==="start-abuble"?(y(),x(wt,{key:6,ref_key:"formTester",ref:e,form:r.value.inspector.model,"log-service":r.value.logService},null,8,["form","log-service"])):v("",!0),((Ne=(ve=r.value)==null?void 0:ve.inspector)==null?void 0:Ne.runtimeType)==="jobs"&&((ke=(_e=r.value)==null?void 0:_e.inspector)==null?void 0:ke.inspectorMode)==="start-abuble"?(y(),x(Ft,{key:7,job:r.value.inspector.model,"log-service":r.value.logService},null,8,["job","log-service"])):v("",!0),((Ie=(ge=r.value)==null?void 0:ge.inspector)==null?void 0:Ie.runtimeType)==="scripts"&&((Pe=(Ee=r.value)==null?void 0:Ee.inspector)==null?void 0:Pe.inspectorMode)==="start-abuble"?(y(),x(as,{key:8,script:r.value.inspector.model,"log-service":r.value.logService},null,8,["script","log-service"])):v("",!0)]}),footer:h(()=>{var m,b,D;return[((b=(m=r.value)==null?void 0:m.inspector)==null?void 0:b.inspectorMode)==="start-abuble"?(y(),x(Mt,{key:0,runtime:r.value.inspector.runtimeType,"log-service":r.value.logService,onRestart:(D=e.value)==null?void 0:D.restart},null,8,["runtime","log-service","onRestart"])):v("",!0)]}),_:1},8,["open"])])}}});const ko=He(Ss,[["__scopeId","data-v-dafc74be"]]);export{ko as default};
//# sourceMappingURL=WorkflowEditor.478ef1bc.js.map
