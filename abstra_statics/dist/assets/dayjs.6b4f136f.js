import{V as t,d as I,b2 as O,bn as A,r as N,f as _,R as c,Q as B,ay as u,ax as U}from"./outputWidgets.4bdeedf6.js";import{c as H,e as R,f as V,r as G,d as M}from"./index.03af77e2.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[p]="ebe9dfbe-2f88-4310-891e-d07531c09e22",r._sentryDebugIdIdentifier="sentry-dbid-ebe9dfbe-2f88-4310-891e-d07531c09e22")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:U()});function Q(r){const p=H(r,t(t({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:x,RangePicker:S}=p,D=I({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},R()),V()),T()),{addon:{type:Function}}),slots:Object,setup(f,g){let{slots:i,expose:C,emit:o,attrs:h}=g;const a=f,s=O();A(!(i.addon||a.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},b=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=a;return _(x,c(c(c({},h),B(a,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:a.popupClassName,mode:void 0,ref:d,renderExtraFooter:a.addon||i.addon||a.renderExtraFooter||i.renderExtraFooter,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onOk:y}),i)}}}),j=I({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},R()),G()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(f,g){let{slots:i,expose:C,emit:o,attrs:h}=g;const a=f,s=N(),d=O();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},b=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=a;return _(S,c(c(c({},h),B(a,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:a.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=Q(M),q=t(m,{TimePicker:m,TimeRangePicker:w,install:r=>(r.component(m.name,m),r.component(w.name,w),r)});export{q as T,w as a};
//# sourceMappingURL=dayjs.6b4f136f.js.map
