import{U as t,d as O,aL as I,bB as U,r as N,f as _,Q as i,O as B,ax as u,aw as A}from"./outputWidgets.8ed5c9f3.js";import{c as H,e as R,f as G,r as L,d as M}from"./index.7039006c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[p]="2c8bf2b1-be96-437c-8aed-6d599e2c8ec6",a._sentryDebugIdIdentifier="sentry-dbid-2c8bf2b1-be96-437c-8aed-6d599e2c8ec6")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:A()});function Q(a){const p=H(a,t(t({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,D=O({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},R()),G()),T()),{addon:{type:Function}}),slots:Object,setup(f,g){let{slots:c,expose:C,emit:o,attrs:h}=g;const r=f,s=I();U(!(c.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const b=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},k=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(x,i(i(i({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||c.addon||r.renderExtraFooter||c.renderExtraFooter,onChange:b,onOpenChange:k,onFocus:P,onBlur:v,onOk:y}),c)}}}),j=O({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},R()),L()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(f,g){let{slots:c,expose:C,emit:o,attrs:h}=g;const r=f,s=N(),d=I();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const b=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},k=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,i(i(i({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:b,onOpenChange:k,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),c)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=Q(M),$=t(m,{TimePicker:m,TimeRangePicker:w,install:a=>(a.component(m.name,m),a.component(w.name,w),a)});export{$ as T,w as a};
//# sourceMappingURL=dayjs.b67958b8.js.map
