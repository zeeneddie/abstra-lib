import{U as t,d as O,aL as I,bo as U,r as N,f as _,Q as c,O as B,ax as u,aw as A}from"./outputWidgets.6b670cb4.js";import{c as H,e as R,f as G,r as L,d as M}from"./index.55f8ebd0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[p]="654ab21d-f94f-4534-b104-2bbbf58ff0b0",a._sentryDebugIdIdentifier="sentry-dbid-654ab21d-f94f-4534-b104-2bbbf58ff0b0")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:A()});function Q(a){const p=H(a,t(t({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,D=O({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},R()),G()),T()),{addon:{type:Function}}),slots:Object,setup(m,g){let{slots:i,expose:b,emit:o,attrs:C}=g;const r=m,s=I();U(!(i.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();b({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const h=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},k=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,c(c(c({},C),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||i.addon||r.renderExtraFooter||i.renderExtraFooter,onChange:h,onOpenChange:k,onFocus:P,onBlur:v,onOk:y}),i)}}}),j=O({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},R()),L()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(m,g){let{slots:i,expose:b,emit:o,attrs:C}=g;const r=m,s=N(),d=I();b({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const h=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},k=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,c(c(c({},C),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:h,onOpenChange:k,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:f,TimeRangePicker:w}=Q(M),$=t(f,{TimePicker:f,TimeRangePicker:w,install:a=>(a.component(f.name,f),a.component(w.name,w),a)});export{$ as T,w as a};
//# sourceMappingURL=dayjs.6514e0cb.js.map
