var _e=Object.defineProperty;var Oe=(n,e,t)=>e in n?_e(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var K=(n,e,t)=>(Oe(n,typeof e!="symbol"?e+"":e,t),t);import{_ as Ce}from"./SaveButton.vue_vue_type_script_setup_true_lang.6eb298ff.js";import{f as i,eG as O,eH as we,d as P,b as u,c as s,w as l,u as o,ar as c,bG as g,r as j,o as ge,L as me,cE as D,eD as I,cA as E,ex as C,eI as Se,H as S,ev as ee,eC as te,e as je,aD as ne,ez as Pe,v as ye,eB as ke,eA as $e,dm as Ae,aH as Be,eJ as Le,cj as De}from"./outputWidgets.74b0761d.js";import{W as xe}from"./workspaces.f4f2d84c.js";import{a as Ie}from"./asyncComputed.fbb4ba44.js";import{L as B}from"./envVars.a9111784.js";import{S as ze}from"./index.3d4fca98.js";import{A as Ne}from"./Paragraph.5d2768c0.js";import{A as z}from"./Text.b007494b.js";import{p as Me}from"./popupNotifcation.2bb5bdcc.js";import{e as Te}from"./icons.fd5c09b0.js";import{A as M}from"./index.0327679a.js";import{A as Ee}from"./Link.f1c82f1d.js";import{C as Fe}from"./CloseCircleOutlined.6d61ac95.js";import{A as Ve}from"./index.5e119e42.js";import{_ as He}from"./DocsButton.vue_vue_type_script_setup_true_lang.9e6cb829.js";import{M as re}from"./Modal.80395829.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="7e9375d1-7364-4d57-9df5-f4e6b4bce636",n._sentryDebugIdIdentifier="sentry-dbid-7e9375d1-7364-4d57-9df5-f4e6b4bce636")}catch{}})();var Ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z"}}]},name:"bug",theme:"outlined"};const Ue=Ge;var Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"}}]},name:"cloud",theme:"outlined"};const We=Re;var Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-upload",theme:"outlined"};const qe=Ye;var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"};const Qe=Je;var Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"}}]},name:"login",theme:"outlined"};const Ze=Xe;var Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"};const et=Ke;var tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M865.3 244.7c-.3-.3-61.1 59.8-182.1 180.6l-84.9-84.9 180.9-180.9c-95.2-57.3-217.5-42.6-296.8 36.7A244.42 244.42 0 00419 432l1.8 6.7-283.5 283.4c-6.2 6.2-6.2 16.4 0 22.6l141.4 141.4c6.2 6.2 16.4 6.2 22.6 0l283.3-283.3 6.7 1.8c83.7 22.3 173.6-.9 236-63.3 79.4-79.3 94.1-201.6 38-296.6z"}}]},name:"tool",theme:"filled"};const nt=tt;var rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"};const at=rt;function ae(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){ot(n,a,t[a])})}return n}function ot(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var F=function(e,t){var r=ae({},e,t.attrs);return i(O,ae({},r,{icon:Ue}),null)};F.displayName="BugOutlined";F.inheritAttrs=!1;const oe=F;function le(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){lt(n,a,t[a])})}return n}function lt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var V=function(e,t){var r=le({},e,t.attrs);return i(O,le({},r,{icon:We}),null)};V.displayName="CloudOutlined";V.inheritAttrs=!1;const it=V;function ie(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){ut(n,a,t[a])})}return n}function ut(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var H=function(e,t){var r=ie({},e,t.attrs);return i(O,ie({},r,{icon:qe}),null)};H.displayName="CloudUploadOutlined";H.inheritAttrs=!1;const T=H;function ue(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){st(n,a,t[a])})}return n}function st(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var G=function(e,t){var r=ue({},e,t.attrs);return i(O,ue({},r,{icon:Qe}),null)};G.displayName="GithubFilled";G.inheritAttrs=!1;const ct=G;function se(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){dt(n,a,t[a])})}return n}function dt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var U=function(e,t){var r=se({},e,t.attrs);return i(O,se({},r,{icon:we}),null)};U.displayName="InfoCircleOutlined";U.inheritAttrs=!1;const ft=U;function ce(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){pt(n,a,t[a])})}return n}function pt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var R=function(e,t){var r=ce({},e,t.attrs);return i(O,ce({},r,{icon:Ze}),null)};R.displayName="LoginOutlined";R.inheritAttrs=!1;const gt=R;function de(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){mt(n,a,t[a])})}return n}function mt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var W=function(e,t){var r=de({},e,t.attrs);return i(O,de({},r,{icon:et}),null)};W.displayName="LogoutOutlined";W.inheritAttrs=!1;const yt=W;function fe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){vt(n,a,t[a])})}return n}function vt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Y=function(e,t){var r=fe({},e,t.attrs);return i(O,fe({},r,{icon:nt}),null)};Y.displayName="ToolFilled";Y.inheritAttrs=!1;const ht=Y;function pe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){bt(n,a,t[a])})}return n}function bt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var q=function(e,t){var r=pe({},e,t.attrs);return i(O,pe({},r,{icon:at}),null)};q.displayName="WarningOutlined";q.inheritAttrs=!1;const _t=q,L=class{async refreshIfChanged(e){var t,r;e.logged!==((r=(t=this.asyncComputed.result.value)==null?void 0:t.logged)!=null?r:!1)&&await this.asyncComputed.refetch()}async get(){return await(await fetch("/_editor/api/login")).json()}async create(e){const r=await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json();return await this.refreshIfChanged(r),r}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return L._asyncComputed===null&&(L._asyncComputed=Ie(()=>p.get())),L._asyncComputed}};let x=L;K(x,"_asyncComputed",null);const p=new x,Ot=P({__name:"ConsoleButton",props:{projectId:{}},setup(n){return(e,t)=>(u(),s(o(g),{href:`https://cloud.abstra.io/projects/${e.projectId}`,target:"_blank",type:"link",size:"small",style:{color:"#d14056"}},{icon:l(()=>[i(o(it))]),default:l(()=>[c(" Project Console ")]),_:1},8,["href"]))}}),Ct=P({__name:"VSCodeButton",setup(n){async function e(){const m=await fetch("/_editor/api/debugger",{method:"GET"});if(!m.ok)throw new Error("Failed to check debugger connection");return await m.json()}async function t(){await fetch("/_editor/api/debugger/vscode-launch",{method:"POST"}),a()}const r=j({connected:!1,port:0,is_launch_json_configured:!1});async function a(){r.value=await e()}let b=null;return ge(()=>{b=setInterval(a,1e3)}),me(()=>{b&&clearInterval(b)}),(m,d)=>r.value.connected?(u(),s(o(g),{key:0,disabled:"",type:"text",size:"small",style:{color:"#d14056"}},{icon:l(()=>[i(o(oe))]),default:l(()=>[c(" VSCode Connected")]),_:1})):(u(),s(o(E),{key:1},{content:l(()=>[i(o(D),{direction:"vertical"},{default:l(()=>[i(o(Ne),null,{default:l(()=>[c(" Abstra allows you to connect to your VSCode debugger ")]),_:1}),i(o(z),null,{default:l(()=>[c(" You're not connected ")]),_:1}),r.value.is_launch_json_configured?(u(),s(o(D),{key:0,direction:"vertical"},{default:l(()=>[i(o(z),{style:{"font-size":"24px"},copyable:"",code:""},{default:l(()=>[c(I(r.value.port),1)]),_:1})]),_:1})):(u(),s(o(g),{key:1,onClick:t},{default:l(()=>[c("Configure launch.json")]),_:1})),i(o(g),{href:"https://docs.abstra.io/debug/vscode",target:"_blank",type:"link",size:"small"},{default:l(()=>[c(" Learn how to connect to vscode ")]),_:1})]),_:1})]),default:l(()=>[i(o(g),{type:"text",size:"small",style:{color:"#d14056"}},{icon:l(()=>[i(o(oe))]),default:l(()=>[c(" Connect to VSCode ")]),_:1})]),_:1}))}}),wt=P({__name:"DeployButton",props:{isReadyToDeploy:{type:Boolean,required:!0},projectId:{type:String,required:!1}},setup(n){const e=n,t=j(!1),r=j(!1),a=j(!1);function b(){r.value=!1}async function m(){if(!!e.projectId){t.value=!0;try{await xe.deploy(),window.open(d(),"_blank"),a.value=!0,setTimeout(()=>{a.value=!1},6e4)}catch(h){Me("Deploy failed",String(h))}t.value=!1}}function d(){if(!!e.projectId)return`https://cloud.abstra.io/projects/${e.projectId}/builds`}return(h,y)=>n.isReadyToDeploy?(u(),s(o(E),{key:0,open:r.value,"onUpdate:open":y[0]||(y[0]=k=>r.value=k),trigger:"click",title:"Deploy to Abstra Cloud"},{content:l(()=>[t.value?(u(),s(o(M),{key:0,class:"deploy-state-message",align:"middle"},{default:l(()=>[i(o(z),null,{default:l(()=>[c(" Deploying to Abstra Cloud... ")]),_:1})]),_:1})):a.value?(u(),s(o(M),{key:1,class:"deploy-state-message",align:"middle"},{default:l(()=>[i(o(z),null,{default:l(()=>[c(" Deploy started at "),i(o(Ee),{href:d(),target:"_blank"},{default:l(()=>[c("Abstra Cloud")]),_:1},8,["href"]),c(". ")]),_:1})]),_:1})):C("",!0),i(o(M),{class:"action-buttons",gap:"small"},{default:l(()=>[i(o(g),{onClick:b},{default:l(()=>[c("Close")]),_:1}),a.value?(u(),s(o(g),{key:0,class:"deploy-button",type:"primary",href:d(),target:"_blank"},{icon:l(()=>[i(Se,{path:o(Te),fill:"white",width:"20"},null,8,["path"])]),default:l(()=>[c(" Open Console ")]),_:1},8,["href"])):(u(),s(o(g),{key:1,type:"primary",loading:t.value,onClick:m},{icon:l(()=>[i(o(T))]),default:l(()=>[c(" Deploy ")]),_:1},8,["loading"]))]),_:1})]),default:l(()=>[t.value?(u(),s(o(g),{key:0,disabled:""},{default:l(()=>[c("Deploying")]),_:1})):(u(),s(o(g),{key:1},{icon:l(()=>[i(o(T))]),default:l(()=>[c(" Deploy ")]),_:1}))]),_:1},8,["open"])):(u(),s(o(g),{key:1,disabled:""},{icon:l(()=>[i(o(T))]),default:l(()=>[c(" Deploy ")]),_:1}))}});const St=P({__name:"Linter",emits:["issueFixed"],setup(n,{emit:e}){const t=S(()=>{var d,h;return(h=(d=B.asyncComputed.result.value)==null?void 0:d.flatMap(y=>y.issues))!=null?h:[]}),r=S(()=>{const d=t.value.map(h=>m(B.fromName(h.ruleName)));return d.includes("error")?"error":d.includes("warning")?"warning":"info"}),a=j(!1);async function b(d){a.value=!0;try{await d.fix(),e("issueFixed",d)}finally{a.value=!1}}function m(d){return d.type==="bug"?"warning":d.type==="security"?"error":"info"}return(d,h)=>t.value.length>0?(u(),s(o(E),{key:0,placement:"bottomRight"},{content:l(()=>[i(o(D),{direction:"vertical",style:{"max-height":"300px",overflow:"auto"}},{default:l(()=>[(u(!0),ee(ne,null,te(t.value,(y,k)=>(u(),s(o(Ve),{key:k+y.ruleName,type:m(o(B).fromName(y.ruleName)),style:{width:"400px"},message:o(B).fromName(y.ruleName).label},{description:l(()=>[i(o(D),{direction:"vertical"},{default:l(()=>[je("div",null,I(y.label),1),(u(!0),ee(ne,null,te(y.fixes,_=>(u(),s(o(g),{key:_.name,loading:a.value,disabled:a.value,onClick:J=>b(_)},{icon:l(()=>[i(o(ht))]),default:l(()=>[c(" "+I(_.label),1)]),_:2},1032,["loading","disabled","onClick"]))),128))]),_:2},1024)]),_:2},1032,["type","message"]))),128))]),_:1})]),default:l(()=>[i(o(g),{class:Pe(["linter-btn",r.value])},{default:l(()=>[r.value==="info"?(u(),s(o(ft),{key:0})):r.value==="error"?(u(),s(o(Fe),{key:1})):(u(),s(o(_t),{key:2}))]),_:1},8,["class"])]),_:1})):C("",!0)}});const jt=ye(St,[["__scopeId","data-v-64ffaa47"]]),Pt=P({__name:"GithubStars",setup(n){return(e,t)=>(u(),s(o(g),{href:"https://github.com/abstra-app/abstra-lib",target:"_blank",type:"link",size:"small",style:{color:"#d14056"}},{default:l(()=>[i(o(ct)),c(" GitHub ")]),_:1}))}}),kt=P({__name:"NavbarControls",props:{showGithubStars:{type:Boolean},showVSCodeButton:{type:Boolean},showWorkflowEditor:{type:Boolean},showSaveButton:{type:Boolean},docsPath:{},editingModel:{}},setup(n){var X;const e=n,t="https://cloud.abstra.io/api-key?"+new URLSearchParams({redirect:location.href}),r=(X=ze.instance)==null?void 0:X.isStagingRelease,{result:a,refetch:b}=B.asyncComputed,m=j(!1);function d(){setTimeout(async()=>{await b(),m.value&&d()},1e3)}ge(()=>{m.value=!0,d()}),me(()=>{m.value=!1});const h=ke(),y=$e(),k=S(()=>{var v,$;return(($=(v=a.value)==null?void 0:v.flatMap(A=>["error","security","bug"].includes(A.type)?A.issues:[]))!=null?$:[]).length>0}),_=S(()=>{var f,v;return(f=p.asyncComputed.result.value)!=null&&f.logged?k.value?"issues-found":(v=e.editingModel)!=null&&v.hasChanges()?"unsaved":r?"is-staging":"ready":"missing-login"});function J(){const f=new URL(location.href);f.searchParams.delete("api-key"),y.replace(f.pathname+f.search)}function ve(){var f;(f=p.asyncComputed.result.value)!=null&&f.logged?re.success({title:"You're logged in!",content:"You can now deploy your project to Abstra Cloud."}):re.error({title:"Login failed",content:"Please try again. If the problem persists, contact help@abstra.io."})}const Q=h.query["api-key"];typeof Q=="string"&&p.create(Q).then(J).then(ve);async function he(){!p.asyncComputed.result.value||await p.delete()}const N=S(()=>{if(!(!p.asyncComputed.result.value||!p.asyncComputed.result.value.logged))return p.asyncComputed.result.value.project_id}),be=S(()=>{var f,v;return(v=(f=p.asyncComputed.result.value)==null?void 0:f.logged)!=null?v:!1});return(f,v)=>(u(),s(o(D),null,{default:l(()=>{var $,A;return[e.showGithubStars?(u(),s(Pt,{key:0})):C("",!0),i(He,{path:e.docsPath},null,8,["path"]),be.value&&N.value?(u(),s(Ot,{key:1,"project-id":N.value},null,8,["project-id"])):C("",!0),f.showVSCodeButton?(u(),s(Ct,{key:2})):C("",!0),Ae(f.$slots,"default",{},void 0,!0),i(o(De),null,{default:l(()=>[e.editingModel&&e.showSaveButton?(u(),s(Ce,{key:0,model:e.editingModel},null,8,["model"])):C("",!0),i(o(Be),null,Le({default:l(()=>[i(wt,{"is-ready-to-deploy":_.value==="ready","project-id":N.value},null,8,["is-ready-to-deploy","project-id"])]),_:2},[_.value==="unsaved"?{name:"title",fn:l(()=>[c(" Save your project before deploying ")]),key:"0"}:_.value==="missing-login"?{name:"title",fn:l(()=>[c(" Login to Abstra Cloud to deploy ")]),key:"1"}:_.value==="issues-found"?{name:"title",fn:l(()=>[c(" There are errors on your project. Please fix them before deploying. ")]),key:"2"}:_.value==="is-staging"?{name:"title",fn:l(()=>[c(" This is a staging release. You can't deploy it to Abstra Cloud. ")]),key:"3"}:void 0]),1024)]),_:1}),($=f.editingModel)!=null&&$.hasChanges()?C("",!0):(u(),s(jt,{key:3})),i(o(g),{href:(A=o(p).asyncComputed.result.value)!=null&&A.logged?void 0:t,loading:o(p).asyncComputed.loading.value,disabled:o(p).asyncComputed.loading.value,onClick:v[0]||(v[0]=w=>{var Z;return(Z=o(p).asyncComputed.result.value)!=null&&Z.logged?he():void 0})},{icon:l(()=>{var w;return[(w=o(p).asyncComputed.result.value)!=null&&w.logged?(u(),s(o(yt),{key:0})):(u(),s(o(gt),{key:1}))]}),default:l(()=>{var w;return[c(I((w=o(p).asyncComputed.result.value)!=null&&w.logged?"Logout":"Login")+" ",1)]}),_:1},8,["href","loading","disabled"])]}),_:3}))}});const Rt=ye(kt,[["__scopeId","data-v-2a8e46fc"]]);export{Rt as N,p as l};
//# sourceMappingURL=NavbarControls.51b48f8b.js.map
