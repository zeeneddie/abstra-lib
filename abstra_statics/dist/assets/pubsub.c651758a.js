var b=Object.defineProperty;var o=(e,s,t)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var r=(e,s,t)=>(o(e,typeof s!="symbol"?s+"":s,t),t);import"./outputWidgets.0607c5f7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="ad0b4225-b9b6-42f8-a11f-e65c65eb69db",e._sentryDebugIdIdentifier="sentry-dbid-ad0b4225-b9b6-42f8-a11f-e65c65eb69db")}catch{}})();class d{constructor(){r(this,"topics");r(this,"subUid");this.topics={},this.subUid=-1}subscribe(s,t){const i=(++this.subUid).toString();return this.topics[s]||(this.topics[s]=[]),this.topics[s].push({token:i,func:t}),i}async wait(s){return new Promise(t=>{const i=this.subscribe(s,n=>{this.unsubscribe(i),t(n)})})}async publish(s,...t){if(!this.topics[s])return!1;const i=this.topics[s];let n=i?i.length:0;for(;n--;)await i[n].func(t[0]);return!0}unsubscribe(s){for(const t in this.topics)if(this.topics[t]){for(let i=0,n=this.topics[t].length;i<n;i++)if(this.topics[t][i].token===s)return this.topics[t].splice(i,1),s}return!1}reset(){this.topics={},this.subUid=-1}}export{d as P};
//# sourceMappingURL=pubsub.c651758a.js.map
