import"./outputWidgets.d6897520.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="b5f0fad2-9ab8-4f55-b490-c7cfa08a5402",n._sentryDebugIdIdentifier="sentry-dbid-b5f0fad2-9ab8-4f55-b490-c7cfa08a5402")}catch{}})();function g(n,t){return n.dx*t.dx+n.dy*t.dy}function S(n,t){return n.dx*t.dy-n.dy*t.dx}function E(n){return f(n.p1,n.p2)}function m(n,t){const e=E(t),o=g(d(t.p1,n),d(t.p1,t.p2))/e;return o<0?f(n,t.p1):o>e?f(n,t.p2):Math.abs(S(d(t.p1,n),d(t.p1,t.p2)))/e}function M(n,t){return m(n,t.segment)<=t.radius}function d(n,t){return{dx:t.x-n.x,dy:t.y-n.y,referential:n.referential}}function D(n,t){return n.rowEnd<t.rowStart||n.colEnd<t.colStart&&n.rowStart<t.rowEnd?-1:1}function v(n,t){return{referential:n.referential,x:n.x+t.dx,y:n.y+t.dy,width:n.width,height:n.height}}function P(n,t){return{referential:n.referential,x:n.x+t.dx,y:n.y+t.dy}}function L(n,t){return{referential:n.referential,dx:n.dx*t,dy:n.dy*t}}function R(n,t,e){const{x:o,y:a,width:i,height:r}=e,{dx:h,dy:s}=t,{x:l,y}=n,x=(o-l)/h,c=(o+i-l)/h,w=(a-y)/s,p=(a+r-y)/s,u=Math.max(Math.min(x,c),Math.min(w,p));return{x:l+u*h,y:y+u*s,referential:n.referential}}function _(n,t){const e=t.margin+n.colStart*(t.gap+t.cellWidth),o=t.margin+t.navbarLength+n.rowStart*(t.gap+t.cellHeight),a=t.margin-t.gap+(t.gap+t.cellWidth)*(n.colEnd+1),i=t.margin+t.navbarLength-t.gap+(t.gap+t.cellHeight)*(n.rowEnd+1);return{x:e,y:o,width:a-e,height:i-o,referential:"world"}}function b(n,t){return{...n,position:{colStart:n.position.colStart+t.deltaI,colEnd:n.position.colEnd+t.deltaI,rowStart:n.position.rowStart+t.deltaJ,rowEnd:n.position.rowEnd+t.deltaJ}}}function C(n,t,e=!1){return e?t.x<=n.x&&t.x+t.width>=n.x&&t.y<=n.y&&t.y+t.height>=n.y:t.x<n.x&&t.x+t.width>n.x&&t.y<n.y&&t.y+t.height>n.y}function H(n,t){return f(n,t)<=t.radius}function J(n){return{x:n.x+n.width/2,y:n.y+n.height/2,referential:n.referential}}function W(n,t){return!(n.x>t.x+t.width||t.x>n.x+n.width||n.y>t.y+t.height||t.y>n.y+n.height)}function k(n,t){return!(n.colStart>t.colEnd||t.colStart>n.colEnd||n.rowStart>t.rowEnd||t.rowStart>n.rowEnd)}function j(n,t,e){const o=n.y===t.y,a=n.x===t.x,i=n.x+n.width===t.x+t.width,r=n.y+n.height===t.y+t.height;switch(e){case"left":return a;case"right":return i;case"top":return o;case"bottom":return r;case"top-left":return o&&a;case"top-right":return o&&i;case"bottom-left":return r&&a;case"bottom-right":return r&&i}}const q=n=>n.reduce((t,e)=>{const o=t?Math.min(t.x,e.x):e.x,a=t?Math.min(t.y,e.y):e.y,i=t?Math.max(t.x+t.width,e.x+e.width):e.x+e.width,r=t?Math.max(t.y+t.height,e.y+e.height):e.y+e.height;return{x:o,y:a,width:i-o,height:r-a,referential:e.referential}},null);function f(n,t){return Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2)}function A(n){const t=[];let e=0;for(const o in n){const[a,i]=n[o];e+=n.filter(([h,s,l],y)=>!(i.position.colStart>s.position.colEnd||s.position.colStart>i.position.colEnd)&&s.position.rowEnd+l>i.position.rowStart&&y<+o).reduce((h,s)=>h+Math.max(s[2],0),0);const r=b(i,{deltaJ:e,deltaI:0});t.push([a,r])}return t}export{j as a,k as b,W as c,d,L as e,H as f,M as g,J as h,C as i,R as j,v as k,A as m,f as p,q as r,P as t,D as v,_ as w};
//# sourceMappingURL=geometryUtils.bf113e76.js.map