var o=Object.defineProperty;var c=(i,s,t)=>s in i?o(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var r=(i,s,t)=>(c(i,typeof s!="symbol"?s+"":s,t),t);import"./outputWidgets.10485988.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="034aaba5-eb82-4383-a55d-eeecd04183ea",i._sentryDebugIdIdentifier="sentry-dbid-034aaba5-eb82-4383-a55d-eeecd04183ea")}catch{}})();class a{constructor(){r(this,"topics");r(this,"subUid");this.topics={},this.subUid=-1}subscribe(s,t){const e=(++this.subUid).toString();return this.topics[s]||(this.topics[s]=[]),this.topics[s].push({token:e,func:t}),e}async wait(s){return new Promise(t=>{const e=this.subscribe(s,n=>{this.unsubscribe(e),t(n)})})}async publish(s,...t){if(!this.topics[s])return!1;const e=this.topics[s];let n=e?e.length:0;for(;n--;)await e[n].func(t[0]);return!0}unsubscribe(s){for(const t in this.topics)if(this.topics[t]){for(let e=0,n=this.topics[t].length;e<n;e++)if(this.topics[t][e].token===s)return this.topics[t].splice(e,1),s}return!1}reset(){this.topics={},this.subUid=-1}}export{a as P};
//# sourceMappingURL=pubsub.bdb96fa3.js.map
