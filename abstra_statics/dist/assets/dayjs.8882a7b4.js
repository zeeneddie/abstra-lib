import{U as a,d as O,aL as I,bo as U,r as N,f as _,Q as c,O as B,ax as u,aw as A}from"./outputWidgets.653c8a73.js";import{c as H,e as R,f as G,r as L,d as M}from"./index.a0eb1ad9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[p]="2a33a07d-82b6-447d-ae25-83d8987d73a1",t._sentryDebugIdIdentifier="sentry-dbid-2a33a07d-82b6-447d-ae25-83d8987d73a1")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:A()});function Q(t){const p=H(t,a(a({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,D=O({name:"ATimePicker",inheritAttrs:!1,props:a(a(a(a({},R()),G()),T()),{addon:{type:Function}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=I();U(!(i.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},P=n=>{o("update:open",n),o("openChange",n)},b=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,c(c(c({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||i.addon||r.renderExtraFooter||i.renderExtraFooter,onChange:k,onOpenChange:P,onFocus:b,onBlur:v,onOk:y}),i)}}}),j=O({name:"ATimeRangePicker",inheritAttrs:!1,props:a(a(a(a({},R()),L()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=N(),d=I();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},P=e=>{o("update:open",e),o("openChange",e)},b=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,c(c(c({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:P,onFocus:b,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=Q(M),$=a(m,{TimePicker:m,TimeRangePicker:w,install:t=>(t.component(m.name,m),t.component(w.name,w),t)});export{$ as T,w as a};
//# sourceMappingURL=dayjs.8882a7b4.js.map
