import{V as a,d as x,aW as O,as as A,r as N,f as _,R as c,Q as B,aI as u,aH as U}from"./outputWidgets.d6334d0e.js";import{c as H,e as R,f as V,r as W,d as G}from"./index.c9593da1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[p]="28044605-09e3-413c-9ba3-c37cea1b7b86",t._sentryDebugIdIdentifier="sentry-dbid-28044605-09e3-413c-9ba3-c37cea1b7b86")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:U()});function M(t){const p=H(t,a(a({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:I,RangePicker:S}=p,D=x({name:"ATimePicker",inheritAttrs:!1,props:a(a(a(a({},R()),V()),T()),{addon:{type:Function}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=O();A(!(i.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},b=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(I,c(c(c({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||i.addon||r.renderExtraFooter||i.renderExtraFooter,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onOk:y}),i)}}}),j=x({name:"ATimeRangePicker",inheritAttrs:!1,props:a(a(a(a({},R()),W()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=N(),d=O();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},b=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,c(c(c({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=M(G),q=a(m,{TimePicker:m,TimeRangePicker:w,install:t=>(t.component(m.name,m),t.component(w.name,w),t)});export{q as T,w as a};
//# sourceMappingURL=dayjs.a79e5d2c.js.map
