import{C as a}from"./gateway.ca29089a.js";import"./outputWidgets.8bdd00aa.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="2c0e8b7a-5db0-4470-9475-e0f50539017d",n._sentryDebugIdIdentifier="sentry-dbid-2c0e8b7a-5db0-4470-9475-e0f50539017d")}catch{}})();class i{async create(t){return a.post(`organizations/${t.organizationId}/members`,{email:t.email})}async delete(t){return a.delete(`organizations/${t.organizationId}/members/${t.authorId}`)}async list(t){return a.get(`organizations/${t}/members`)}async get(t,e){return a.get(`organizations/${t}/members/${e}`)}async login(){return a.post("authors",{})}}const s=new i;class o{constructor(t){this.dto=t}static async login(){return s.login()}static async list(t){return(await s.list(t)).map(r=>new o(r))}static async create(t,e){const r=await s.create({organizationId:t,email:e});return new o(r)}static async get(t,e){const r=await s.get(t,e);return new o(r)}static async delete(t,e){return s.delete({organizationId:t,authorId:e})}get email(){return this.dto.email}get name(){return this.dto.name}get role(){return this.dto.role}get id(){return this.dto.authorId}get authorId(){return this.dto.authorId}}export{o as M};
//# sourceMappingURL=member.15d3f04a.js.map
