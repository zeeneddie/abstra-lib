import{r as menu,v as logout}from"./icons.ea1ef9e9.js";import{d as defineComponent,K as computed,b as openBlock,c as createElementBlock,x as createBaseVNode,F as Fragment,L as renderList,G as normalizeClass,N as toDisplayString,z as unref,q as _export_sfc,v as reactive,D as createCommentVNode,e as createVNode,I as Icon,t as createBlock,O as pushScopeId,Q as popScopeId,S as createTextVNode,a9 as createStaticVNode,r as ref,w as withCtx,a as resolveComponent,aa as TransitionGroup,ab as computed$1,o as onMounted,R as watch,B as renderSlot,A as normalizeStyle}from"./registerWidgets.ba12cd54.js";import{g as getCname}from"./index.a464e9f0.js";import{M as Modal}from"./Modal.9cffe8c6.js";const _hoisted_1$6={class:"sidebar-content"},_hoisted_2$5={class:"section"},_hoisted_3$3=["onClick"],_sfc_main$7=defineComponent({__name:"Sidebar",props:{currentRuntime:{type:Object,required:!0},displaySidebar:{type:Boolean,required:!0},forceResponsivity:{type:String,default:null}},emits:["selectRuntime","closeSidebar"],setup(e,{emit:t}){const a=e,n=computed(()=>a.currentRuntime.runtimeType==="dash"),s=o=>{r(o.id)||t("selectRuntime",o)},i=computed(()=>a.currentRuntime.sidebar.filter(o=>o.visible)),r=o=>o===a.currentRuntime.id;return(o,c)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["sidebar",e.forceResponsivity,{open:e.displaySidebar,dash:unref(n)}])},[createBaseVNode("div",_hoisted_1$6,[createBaseVNode("div",_hoisted_2$5,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(i),l=>(openBlock(),createElementBlock("div",{key:l.id,class:normalizeClass(["item",{active:r(l.id)}]),onClick:u=>s(l)},[createBaseVNode("div",{class:normalizeClass(["item-title",{open:e.displaySidebar}])},toDisplayString(l.name),3)],10,_hoisted_3$3))),128))])])],2))}}),Sidebar_vue_vue_type_style_index_0_scoped_10d37088_lang="",Sidebar=_export_sfc(_sfc_main$7,[["__scopeId","data-v-10d37088"]]),_withScopeId$1=e=>(pushScopeId("data-v-d9724816"),e=e(),popScopeId(),e),_hoisted_1$5={class:"left-side"},_hoisted_2$4=["d"],_hoisted_3$2={key:1,class:"brand"},_hoisted_4$2=["src"],_hoisted_5$1={key:1,class:"brand-name"},_hoisted_6=_withScopeId$1(()=>createBaseVNode("div",null,null,-1)),_hoisted_7={key:0,class:"signed-email"},_sfc_main$6=defineComponent({__name:"PlayerNavbar",props:{runtime:{type:Object,required:!0},brandName:{type:String},logoUrl:{type:String},userEmail:{type:String},forceResponsivity:{type:String,default:null}},emits:["logout","navigate"],setup(e,{emit:t}){const a=e,n=reactive({displaySidebar:!1}),s=computed(()=>{const r=a.runtime.sidebar;return!r||r.length==0?!1:r.some(o=>o.visible)}),i=r=>t("navigate",r);return(r,o)=>(openBlock(),createElementBlock(Fragment,null,[unref(s)||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(openBlock(),createElementBlock("div",{key:0,class:normalizeClass(["navbar",(e.runtime.runtimeType=="dash"||unref(s))&&"background"])},[createBaseVNode("div",_hoisted_1$5,[unref(s)?(openBlock(),createElementBlock("svg",{key:0,class:normalizeClass(["sidebar-menu-icon",e.forceResponsivity,{dash:e.runtime.runtimeType=="dash"}]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:o[0]||(o[0]=c=>n.displaySidebar=!n.displaySidebar)},[createBaseVNode("path",{d:unref(menu)},null,8,_hoisted_2$4)],2)):createCommentVNode("",!0),e.runtime.logoUrl||e.runtime.brandName?(openBlock(),createElementBlock("div",_hoisted_3$2,[e.runtime.logoUrl?(openBlock(),createElementBlock("img",{key:0,src:e.runtime.logoUrl,class:"logo-image"},null,8,_hoisted_4$2)):createCommentVNode("",!0),e.runtime.brandName?(openBlock(),createElementBlock("p",_hoisted_5$1,toDisplayString(e.runtime.brandName),1)):createCommentVNode("",!0)])):createCommentVNode("",!0)]),_hoisted_6,e.userEmail?(openBlock(),createElementBlock("div",_hoisted_7,[createBaseVNode("span",null,toDisplayString(e.userEmail),1),createVNode(Icon,{width:"20",height:"20",class:"logout",path:unref(logout),fill:"var(--color-main)",onClick:o[1]||(o[1]=c=>t("logout"))},null,8,["path"])])):createCommentVNode("",!0)],2)):createCommentVNode("",!0),unref(s)?(openBlock(),createBlock(Sidebar,{key:1,"current-runtime":e.runtime,"display-sidebar":n.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:i},null,8,["current-runtime","display-sidebar","force-responsivity"])):createCommentVNode("",!0)],64))}}),PlayerNavbar_vue_vue_type_style_index_0_scoped_d9724816_lang="",PlayerNavbar=_export_sfc(_sfc_main$6,[["__scopeId","data-v-d9724816"]]),_hoisted_1$4=["href"],_hoisted_2$3=createStaticVNode('<svg width="44" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-5e5aec4d><g clip-path="url(#clip0_405_116214)" data-v-5e5aec4d><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="#E36C7C" data-v-5e5aec4d></path><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="url(#paint0_linear_405_116214)" data-v-5e5aec4d></path><path d="M218.387 91.2249L176.195 127.557L173.851 129.51C151.192 149.849 149.853 152.309 141.642 152.584L141.584 152.586C139.612 152.652 135.357 152.795 131.875 149.849C126.797 145.552 120.155 140.083 117.03 137.348C115.34 135.869 112.465 133.039 109.998 131.097C107.902 129.448 106.482 127.581 104.919 127.581C103.357 127.581 100.622 129.925 96.3246 133.832C92.0272 137.739 82.6511 146.333 82.6511 146.333L65.0712 161.569C65.0712 161.569 42.5857 180.688 36.7256 185.376C30.8656 190.064 16.5797 175.69 21.4895 171.703C21.9628 171.23 26.2429 167.755 29.7179 164.915C32.2165 162.84 34.2084 161.179 34.2084 161.179C34.9897 160.397 66.2433 133.051 66.2433 133.051L87.723 114.573C87.723 114.573 95.9339 106.094 105.701 106.094C108.826 106.094 112.83 106.485 126.015 118.205C129.531 121.33 131.485 122.542 135.782 126.409C137.345 127.816 139.852 130.316 140.861 130.316C141.882 130.316 143.986 128.363 145.549 127.023C145.549 127.023 195.897 84.4149 202.37 77.9421C207.839 72.4726 223.075 86.9273 218.387 91.2249Z" fill="url(#paint1_linear_405_116214)" data-v-5e5aec4d></path><path d="M33.238 67.1372C31.2846 68.6564 23.9305 75.1737 22.2992 76.9039C19.3366 80.0417 21.3638 81.3905 25.6611 84.9065C29.9585 88.4225 57.8962 112.712 64.8542 118.963L79.9642 105.221L41.288 71.2331C36.5999 67.1372 35.1913 65.6179 33.238 67.1372Z" fill="url(#paint2_linear_405_116214)" data-v-5e5aec4d></path></g><defs data-v-5e5aec4d><linearGradient id="paint0_linear_405_116214" x1="172.68" y1="133.808" x2="183.059" y2="196.169" gradientUnits="userSpaceOnUse" data-v-5e5aec4d><stop offset="0.114583" stop-color="#FF98A6" data-v-5e5aec4d></stop><stop offset="1" stop-color="#E36C7C" data-v-5e5aec4d></stop></linearGradient><linearGradient id="paint1_linear_405_116214" x1="219.271" y1="186.305" x2="206.115" y2="57.7298" gradientUnits="userSpaceOnUse" data-v-5e5aec4d><stop stop-color="#E36C7C" data-v-5e5aec4d></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-5e5aec4d></stop></linearGradient><linearGradient id="paint2_linear_405_116214" x1="20.8984" y1="66.56" x2="30.8589" y2="127.049" gradientUnits="userSpaceOnUse" data-v-5e5aec4d><stop stop-color="#E36C7C" data-v-5e5aec4d></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-5e5aec4d></stop></linearGradient><clipPath id="clip0_405_116214" data-v-5e5aec4d><rect width="256" height="256" fill="white" data-v-5e5aec4d></rect></clipPath></defs></svg><b data-v-5e5aec4d>Abstra Cloud</b>',2),_sfc_main$5=defineComponent({__name:"Watermark",props:{runtime:null,type:null},setup(e){const t=window.location.hostname.split(".")[0],a=!getCname();return(n,s)=>a?(openBlock(),createElementBlock("a",{key:0,href:`https://www.abstracloud.com/${e.type}?utm_source=abstra_pages&utm_medium=badge&utm_campaign=${e.runtime.id}&origin_subdomain=${unref(t)}`,target:"_blank",class:"watermark"},[createTextVNode(" Coded in Python with "),_hoisted_2$3],8,_hoisted_1$4)):createCommentVNode("",!0)}}),Watermark_vue_vue_type_style_index_0_scoped_5e5aec4d_lang="",Watermark=_export_sfc(_sfc_main$5,[["__scopeId","data-v-5e5aec4d"]]),_hoisted_1$3={key:0,class:"p-steps p-component"},_hoisted_2$2={class:"p-steps-list"},_hoisted_3$1={class:"p-menuitem-link"},_hoisted_4$1={class:"p-steps-number"},_sfc_main$4=defineComponent({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,a=computed(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(n,s)=>e.stepsInfo?(openBlock(),createElementBlock("nav",_hoisted_1$3,[createBaseVNode("ol",_hoisted_2$2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a),(i,r)=>(openBlock(),createElementBlock("li",{key:r,class:normalizeClass(["p-steps-item",{"p-highlight":r+1===e.stepsInfo.current}])},[createBaseVNode("span",_hoisted_3$1,[createBaseVNode("span",_hoisted_4$1,toDisplayString(r+1),1)])],2))),128))])])):createCommentVNode("",!0)}}),Steps_vue_vue_type_style_index_0_scoped_c6d9488a_lang="",Steps=_export_sfc(_sfc_main$4,[["__scopeId","data-v-c6d9488a"]]),_withScopeId=e=>(pushScopeId("data-v-54969e59"),e=e(),popScopeId(),e),_hoisted_1$2={class:"no-credits-message"},_hoisted_2$1={class:"image-container"},_hoisted_3={key:0,class:"no-credit-image",src:"https://abstra-cloud-assets.s3.amazonaws.com/no-credit.svg"},_hoisted_4=_withScopeId(()=>createBaseVNode("div",{class:"title"},"Insufficient credits to start this page",-1)),_hoisted_5=_withScopeId(()=>createBaseVNode("div",{class:"message"}," Please contact the creator for more information. ",-1)),_sfc_main$3=defineComponent({__name:"NoCreditsMessage",props:{runner:null},setup(e,{expose:t}){const a=ref(null),n={width:"380px",height:"unset",padding:"30px"},s={borderBottom:"none",color:"#D35249",fontSize:"20px",justifyContent:"flex-start",marginBottom:"17px"},i={color:"#414A58",fontSize:"14px"};return t({open:()=>{var o;(o=a.value)==null||o.open()}}),(o,c)=>(openBlock(),createBlock(Modal,{ref_key:"modalRef",ref:a,"container-style":n,"header-style":s,"content-style":i},{content:withCtx(()=>[createBaseVNode("div",_hoisted_1$2,[createBaseVNode("div",_hoisted_2$1,[e.runner.logoUrl?(openBlock(),createElementBlock("img",_hoisted_3)):createCommentVNode("",!0)]),_hoisted_4,_hoisted_5])]),_:1},512))}}),NoCreditsMessage_vue_vue_type_style_index_0_scoped_54969e59_lang="",NoCreditsMessage=_export_sfc(_sfc_main$3,[["__scopeId","data-v-54969e59"]]),_hoisted_1$1={class:"alert"},_sfc_main$2=defineComponent({__name:"Alerts",props:{alerts:null},setup(e){return(t,a)=>{const n=resolveComponent("Message");return openBlock(),createElementBlock("div",_hoisted_1$1,[createVNode(TransitionGroup,{name:"p-message",tag:"div"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.alerts,s=>(openBlock(),createBlock(n,{key:s.id,severity:s.severity,closable:!1,sticky:!1},{default:withCtx(()=>[createTextVNode(toDisplayString(s.message),1)]),_:2},1032,["severity"]))),128))]),_:1})])}}}),Alerts_vue_vue_type_style_index_0_scoped_737e6861_lang="",AlertsComponent=_export_sfc(_sfc_main$2,[["__scopeId","data-v-737e6861"]]),_sfc_main$1=defineComponent({__name:"RuntimeCommons",props:{runtime:{type:Object,required:!0},fullWidth:{type:Boolean},isPreview:Boolean,type:{type:String,required:!0},forceResponsivity:{type:String,default:null},userEmail:{type:String},stepsInfo:{type:Object,default:null},alerts:{type:Array,default:()=>[]}},emits:["navigate","logout"],setup(e,{expose:t,emit:a}){const n=ref(null),s=r=>a("navigate",r);return t({open:()=>{var r;return(r=n.value)==null?void 0:r.open()}}),(r,o)=>(openBlock(),createElementBlock(Fragment,null,[createBaseVNode("header",null,[createVNode(PlayerNavbar,{runtime:e.runtime,"user-email":e.userEmail,"force-responsivity":e.forceResponsivity,onLogout:o[0]||(o[0]=c=>a("logout")),onNavigate:s},null,8,["runtime","user-email","force-responsivity"])]),e.type==="forms"?(openBlock(),createBlock(Steps,{key:0,class:"steps","steps-info":e.stepsInfo},null,8,["steps-info"])):createCommentVNode("",!0),createVNode(NoCreditsMessage,{ref_key:"noCreditsMessageModalRef",ref:n,class:normalizeClass({"full-width":e.fullWidth}),runner:e.runtime},null,8,["class","runner"]),e.isPreview?createCommentVNode("",!0):(openBlock(),createBlock(Watermark,{key:1,class:normalizeClass(["watermark",{"viewport-attached":!e.isPreview}]),runtime:e.runtime,type:e.type},null,8,["class","runtime","type"])),e.alerts.length?(openBlock(),createBlock(AlertsComponent,{key:2,class:"alerts",alerts:e.alerts},null,8,["alerts"])):createCommentVNode("",!0)],64))}}),RuntimeCommons_vue_vue_type_style_index_0_scoped_5ccd79d9_lang="",RuntimeCommons=_export_sfc(_sfc_main$1,[["__scopeId","data-v-5ccd79d9"]]),executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(e){throw console.error(`[Error: execute_js]: ${e.message}, context: ${$context}`),e}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(e){return executeCode(e.context,e.code)}const isSerializable=e=>{try{return JSON.stringify(e),!0}catch{return!1}},COLOR_NAMES={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},DEFAULT_FORM_FONT_COLOR="#000",DEFAULT_DASH_FONT_COLOR="#272D35",LIGHT_COLOR="#ffffff",DARK_COLOR="#1b1b23";function darken(e,t){const{r:a,g:n,b:s,usePound:i}=getRGB(e);return toHex(applyGradient(a,-t),applyGradient(n,-t),applyGradient(s,-t),i)}function applyGradient(e,t){const a=e*(100+t*100)/100;return a>255?255:a<0?0:Math.round(a)}const lighten=(e,t)=>revert(darken(revert(e),t)),isColorDark=e=>{if(isHex(e))return isDark(e);const t=COLOR_NAMES[e.toLowerCase()];if(!t)return!1;const[a,n,s]=t;return isDark(toHex(a,n,s))},buttonFontColor=e=>isDark(e)?LIGHT_COLOR:DARK_COLOR,alternate=e=>isDark(e)?lighten(e,.1):darken(e,.1);function isDark(e){const{r:t,g:a,b:n}=getRGB(e);return t*.299+a*.587+n*.114<186}function getRGB(e){let t=!1;e[0]=="#"&&(e=e.slice(1),t=!0);const a=parseInt(e,16);return{r:a>>16&255,g:a>>8&255,b:a&255,usePound:t}}function revert(e){const{r:t,g:a,b:n,usePound:s}=getRGB(e);return toHex(255-t,255-a,255-n,s)}const toHex=(e,t,a,n=!0)=>(n?"#":"")+(a|t<<8|e<<16).toString(16).padStart(6,"0");function isHex(e){if(e.length>9)return!1;const t=e.startsWith("#")?e.slice(1):e;return/[0-9A-Fa-f]{6}/g.test(t)}function isURL(e){return/https?:\/\/[^\s]+/g.test(e)}const imageIsDarkCache={};function isImageDark(e){return e in imageIsDarkCache||(imageIsDarkCache[e]=new Promise(t=>{const a=document.createElement("img");a.src=e,a.crossOrigin="Anonymous",a.style.display="none",document.body.appendChild(a);let n=0;a.onload=()=>{const{width:s,height:i}=a,r=document.createElement("canvas");r.width=s,r.height=i;const o=r.getContext("2d");if(!o)return t(!1);o.drawImage(a,0,0);const c=o.getImageData(0,0,r.width,r.height),{data:l}=c;let u,m,p,_;for(let d=0,h=l.length;d<h;d+=4)u=l[d],m=l[d+1],p=l[d+2],_=Math.floor((u+m+p)/3),n+=_;const g=Math.floor(n/(s*i));document.body.removeChild(a),t(g<=127)}})),imageIsDarkCache[e]}const fontFamilyToGoogleFontsUrl=e=>`https://fonts.googleapis.com/css2?family=${e.split(" ").join("+")}:wght@300;400;500;700;900&display=swap`,isUrl=e=>{try{return new URL(e),!0}catch{return!1}},themeStyle=e=>isUrl(e)?{backgroundImage:`url(${e})`,backgroundSize:"cover"}:{backgroundColor:e},_hoisted_1=["theme"],_hoisted_2=["href"],_sfc_main=defineComponent({__name:"WidgetsFrame",props:{theme:null,mainColor:null,fontFamily:null,runtime:null},setup(e){const t=e,a=computed$1(()=>fontFamilyToGoogleFontsUrl(t.fontFamily)),n=computed$1(()=>{try{return typeof document<"u"&&document.documentElement.style.setProperty("--ac-global-font-family",t.fontFamily),{"--color-main":t.mainColor,"--color-main-light":lighten(t.mainColor,.15),"--color-main-hover":alternate(t.mainColor),"--color-main-active":alternate(t.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":buttonFontColor(t.mainColor),"--font-family":t.fontFamily,...themeStyle(t.theme)}}catch(o){return console.error(o),{}}}),s=computed$1(()=>t.runtime==="dash"?DEFAULT_DASH_FONT_COLOR:DEFAULT_FORM_FONT_COLOR),i=reactive({"--font-color":s.value,"--background-color":"transparent"}),r=async()=>{const o=isURL(t.theme)?await isImageDark(t.theme):isColorDark(t.theme);i["--font-color"]=o?LIGHT_COLOR:DARK_COLOR,i["--background-color"]=o?DARK_COLOR:LIGHT_COLOR};return onMounted(r),watch(()=>t.theme,r),(o,c)=>(openBlock(),createElementBlock("div",{class:"frame background-theme",theme:e.theme,style:normalizeStyle({...unref(n),...unref(i)})},[createBaseVNode("link",{href:unref(a),rel:"stylesheet"},null,8,_hoisted_2),renderSlot(o.$slots,"default",{},void 0,!0)],12,_hoisted_1))}}),WidgetsFrame_vue_vue_type_style_index_0_lang="",WidgetsFrame_vue_vue_type_style_index_1_scoped_538cca74_lang="",WidgetsFrame=_export_sfc(_sfc_main,[["__scopeId","data-v-538cca74"]]);export{RuntimeCommons as R,WidgetsFrame as W,executeJs as e};
//# sourceMappingURL=WidgetsFrame.6a2a8a84.js.map
