import{U as t,d as x,aV as I,ar as U,r as N,f as _,Q as c,O as B,aH as u,aG as A}from"./outputWidgets.89c081d6.js";import{c as H,e as R,f as G,r as V,d as M}from"./index.b97b091d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[p]="91ce4916-c585-47ee-84eb-e01e54edb9c6",a._sentryDebugIdIdentifier="sentry-dbid-91ce4916-c585-47ee-84eb-e01e54edb9c6")}catch{}})();const T=()=>({format:String,showNow:u(),showHour:u(),showMinute:u(),showSecond:u(),use12Hours:u(),hourStep:Number,minuteStep:Number,secondStep:Number,hideDisabledOptions:u(),popupClassName:String,status:A()});function Q(a){const p=H(a,t(t({},T()),{order:{type:Boolean,default:!0}})),{TimePicker:O,RangePicker:S}=p,D=x({name:"ATimePicker",inheritAttrs:!1,props:t(t(t(t({},R()),G()),T()),{addon:{type:Function}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=I();U(!(i.addon||r.addon),"TimePicker","`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");const d=N();C({focus:()=>{var n;(n=d.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=d.value)===null||n===void 0||n.blur()}});const k=(n,F)=>{o("update:value",n),o("change",n,F),s.onFieldChange()},b=n=>{o("update:open",n),o("openChange",n)},P=n=>{o("focus",n)},v=n=>{o("blur",n),s.onFieldBlur()},y=n=>{o("ok",n)};return()=>{const{id:n=s.id.value}=r;return _(O,c(c(c({},h),B(r,["onUpdate:value","onUpdate:open"])),{},{id:n,dropdownClassName:r.popupClassName,mode:void 0,ref:d,renderExtraFooter:r.addon||i.addon||r.renderExtraFooter||i.renderExtraFooter,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onOk:y}),i)}}}),j=x({name:"ATimeRangePicker",inheritAttrs:!1,props:t(t(t(t({},R()),V()),T()),{order:{type:Boolean,default:!0}}),slots:Object,setup(g,f){let{slots:i,expose:C,emit:o,attrs:h}=f;const r=g,s=N(),d=I();C({focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}});const k=(e,l)=>{o("update:value",e),o("change",e,l),d.onFieldChange()},b=e=>{o("update:open",e),o("openChange",e)},P=e=>{o("focus",e)},v=e=>{o("blur",e),d.onFieldBlur()},y=(e,l)=>{o("panelChange",e,l)},n=e=>{o("ok",e)},F=(e,l,E)=>{o("calendarChange",e,l,E)};return()=>{const{id:e=d.id.value}=r;return _(S,c(c(c({},h),B(r,["onUpdate:open","onUpdate:value"])),{},{id:e,dropdownClassName:r.popupClassName,picker:"time",mode:void 0,ref:s,onChange:k,onOpenChange:b,onFocus:P,onBlur:v,onPanelChange:y,onOk:n,onCalendarChange:F}),i)}}});return{TimePicker:D,TimeRangePicker:j}}const{TimePicker:m,TimeRangePicker:w}=Q(M),q=t(m,{TimePicker:m,TimeRangePicker:w,install:a=>(a.component(m.name,m),a.component(w.name,w),a)});export{q as T,w as a};
//# sourceMappingURL=dayjs.9b20bea2.js.map
