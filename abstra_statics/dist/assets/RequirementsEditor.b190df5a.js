var I=Object.defineProperty;var D=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var k=(s,e,t)=>(D(s,typeof e!="symbol"?e+"":e,t),t);import{a as N}from"./asyncComputed.2eb53e5b.js";import{i as V}from"./icons.adcacb0a.js";import{C as A}from"./CrudView.ab9c9027.js";import{d as P,o as F,L as S,H as B,b as d,ev as u,f as h,w as m,u as o,c as w,ex as f,aD as $,eC as O,bG as v,ar as p,eD as q}from"./outputWidgets.415d7ed9.js";import{W as R}from"./workspaces.02396257.js";import{E as L}from"./record.241377fb.js";import"./envVars.323842c5.js";import{A as J}from"./Title.d12082f2.js";import{A as U}from"./Paragraph.01b06a11.js";import"./Form.a84cb2b9.js";import"./hasIn.af9e963d.js";import"./Modal.9dce3cbe.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.95edd1a7.js";import"./router.62758fe7.js";import"./popupNotifcation.eaaa79e4.js";import"./url.b56f5759.js";import"./index.0ddbb3d1.js";import"./Text.0097eaf4.js";import"./Base.a4b3ce11.js";import"./Typography.b95e4aa0.js";import"./index.cc1cfc71.js";import"./runnerData.a3f8e698.js";import"./pubsub.e0cdf962.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="2bb3ce8b-a4cc-47fc-84b0-73a4e7de3dbe",s._sentryDebugIdIdentifier="sentry-dbid-2bb3ce8b-a4cc-47fc-84b0-73a4e7de3dbe")}catch{}})();class W{async list(){return(await fetch("/_editor/api/requirements")).json()}async recommendations(){return(await fetch("/_editor/api/requirements/recommendations")).json()}async update(e,t){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to update requirements")}async create(e){const t=await fetch("/_editor/api/requirements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to create requirements");return t.json()}async delete(e){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete requirements")}}const b=new W;class l{constructor(e){k(this,"record");this.record=L.from(e)}static async list(){return(await b.list()).map(t=>new l(t))}static async create(e,t){const n=await b.create({name:e,version:t!=null?t:null});return new l(n)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get version(){var e;return(e=this.record.get("version"))!=null?e:"latest"}set version(e){this.record.set("version",e)}async delete(){await b.delete(this.name)}static async recommendations(){return b.recommendations()}}const G=s=>["__future__","__main__","_thread","abc","aifc","argparse","array","ast","asynchat","asyncio","asyncore","atexit","audioop","base64","bdb","binascii","binhex","bisect","builtins","bz2","calendar","cgi","cgitb","chunk","cmath","cmd","code","codecs","codeop","collections","collections.abc","colorsys","compileall","concurrent","concurrent.futures","configparser","contextlib","contextvars","copy","copyreg","cProfile","crypt","csv","ctypes","curses","curses.ascii","curses.panel","curses.textpad","dataclasses","datetime","dbm","dbm.dumb","dbm.gnu","dbm.ndbm","decimal","difflib","dis","distutils","distutils.archive_util","distutils.bcppcompiler","distutils.ccompiler","distutils.cmd","distutils.command","distutils.command.bdist","distutils.command.bdist_dumb","distutils.command.bdist_msi","distutils.command.bdist_packager","distutils.command.bdist_rpm","distutils.command.build","distutils.command.build_clib","distutils.command.build_ext","distutils.command.build_py","distutils.command.build_scripts","distutils.command.check","distutils.command.clean","distutils.command.config","distutils.command.install","distutils.command.install_data","distutils.command.install_headers","distutils.command.install_lib","distutils.command.install_scripts","distutils.command.register","distutils.command.sdist","distutils.core","distutils.cygwinccompiler","distutils.debug","distutils.dep_util","distutils.dir_util","distutils.dist","distutils.errors","distutils.extension","distutils.fancy_getopt","distutils.file_util","distutils.filelist","distutils.log","distutils.msvccompiler","distutils.spawn","distutils.sysconfig","distutils.text_file","distutils.unixccompiler","distutils.util","distutils.version","doctest","email","email.charset","email.contentmanager","email.encoders","email.errors","email.generator","email.header","email.headerregistry","email.iterators","email.message","email.mime","email.parser","email.policy","email.utils","encodings","encodings.idna","encodings.mbcs","encodings.utf_8_sig","ensurepip","enum","errno","faulthandler","fcntl","filecmp","fileinput","fnmatch","fractions","ftplib","functools","gc","getopt","getpass","gettext","glob","graphlib","grp","gzip","hashlib","heapq","hmac","html","html.entities","html.parser","http","http.client","http.cookiejar","http.cookies","http.server","idlelib","imaplib","imghdr","imp","importlib","importlib.abc","importlib.machinery","importlib.metadata","importlib.resources","importlib.util","inspect","io","ipaddress","itertools","json","json.tool","keyword","lib2to3","linecache","locale","logging","logging.config","logging.handlers","lzma","mailbox","mailcap","marshal","math","mimetypes","mmap","modulefinder","msilib","msvcrt","multiprocessing","multiprocessing.connection","multiprocessing.dummy","multiprocessing.managers","multiprocessing.pool","multiprocessing.shared_memory","multiprocessing.sharedctypes","netrc","nis","nntplib","numbers","operator","optparse","os","os.path","ossaudiodev","pathlib","pdb","pickle","pickletools","pipes","pkgutil","platform","plistlib","poplib","posix","pprint","profile","pstats","pty","pwd","py_compile","pyclbr","pydoc","queue","quopri","random","re","readline","reprlib","resource","rlcompleter","runpy","sched","secrets","select","selectors","shelve","shlex","shutil","signal","site","smtpd","smtplib","sndhdr","socket","socketserver","spwd","sqlite3","ssl","stat","statistics","string","stringprep","struct","subprocess","sunau","symtable","sys","sysconfig","syslog","tabnanny","tarfile","telnetlib","tempfile","termios","test","test.support","test.support.bytecode_helper","test.support.import_helper","test.support.os_helper","test.support.script_helper","test.support.socket_helper","test.support.threading_helper","test.support.warnings_helper","textwrap","threading","time","timeit","tkinter","tkinter.colorchooser","tkinter.commondialog","tkinter.dnd","tkinter.filedialog","tkinter.font","tkinter.messagebox","tkinter.scrolledtext","tkinter.simpledialog","tkinter.tix","tkinter.ttk","token","tokenize","trace","traceback","tracemalloc","tty","turtle","turtledemo","types","typing","unicodedata","unittest","unittest.mock","urllib","urllib.error","urllib.parse","urllib.request","urllib.response","urllib.robotparser","uu","uuid","venv","warnings","wave","weakref","webbrowser","winreg","winsound","wsgiref","wsgiref.handlers","wsgiref.headers","wsgiref.simple_server","wsgiref.util","wsgiref.validate","xdrlib","xml","xml.dom","xml.dom.minidom","xml.dom.pulldom","xml.etree.ElementTree","xml.parsers.expat","xml.parsers.expat.errors","xml.parsers.expat.model","xml.sax","xml.sax.handler","xml.sax.saxutils","xml.sax.xmlreader","xmlrpc","xmlrpc.client","xmlrpc.server","zipapp","zipfile","zipimport","zlib","zoneinfo"].includes(s),H=s=>/^(\d+!)?(\d+)(\.\d+)+([\\.\-\\_])?((a(lpha)?|b(eta)?|c|r(c|ev)?|pre(view)?)\d*)?(\.?(post|dev)\d*)?$/.test(s),M={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},K={key:2},ke=P({__name:"RequirementsEditor",setup(s){const{loading:e,result:t,refetch:n}=N(()=>Promise.all([l.list(),l.recommendations()]).then(([i,r])=>({requirements:i,recommendations:r})));let g=null;F(()=>{g=setInterval(n,2e3)}),S(()=>{g&&clearInterval(g)});function C(){var i;(i=R.computed.result.value)==null||i.openFile("requirements.txt")}async function T(i,r){await l.create(i,r).then(n),n()}const E=[{label:"Name",key:"name",hint:i=>G(i)?"This package is built-in should not be installed":void 0},{label:"Version",key:"version",placeholder:"1.0.0",hint:i=>!i||H(i)?void 0:"Invalid version"}];async function j({name:i,version:r}){await l.create(i,r),n()}const z=B(()=>{var i,r;return{columns:[{name:"Name"},{name:"Version"},{name:"",align:"right"}],rows:(r=(i=t.value)==null?void 0:i.requirements.map(a=>({key:a.name,cells:[{type:"text",text:a.name},{type:"text",text:a.version},{type:"actions",actions:[{icon:V,label:"Delete",async onClick(){await a.delete(),n()},dangerous:!0}]}]})))!=null?r:[]}});return(i,r)=>{var a,y,_;return d(),u("div",M,[h(A,{"entity-name":"Packages",loading:o(e),title:"Requirements",description:"Set pip dependencies for your project. This will create and update your requirements.txt file.","empty-title":"No python packages set",table:z.value,"create-button-text":"Add a package",fields:E,live:"",onCreate:j},{secondary:m(()=>[h(o(v),{onClick:r[0]||(r[0]=c=>C())},{default:m(()=>[p("Open requirements.txt")]),_:1})]),_:1},8,["loading","table"]),(a=o(t))!=null&&a.recommendations.length?(d(),w(o(J),{key:0},{default:m(()=>[p(" Suggested packages ")]),_:1})):f("",!0),(y=o(t))!=null&&y.recommendations.length?(d(),w(o(U),{key:1},{default:m(()=>[p(" The following packages are being utilized by your code but are not listed in your requirements.txt. ")]),_:1})):f("",!0),(_=o(t))!=null&&_.recommendations.length?(d(),u("ul",K,[(d(!0),u($,null,O(o(t).recommendations,c=>(d(),u("li",{key:c.name},[p(q(c.name)+" ("+q(c.version)+") ",1),h(o(v),{onClick:Q=>{var x;return T(c.name,(x=c.version)!=null?x:void 0)}},{default:m(()=>[p(" Add to requirements ")]),_:2},1032,["onClick"])]))),128))])):f("",!0)])}}});export{ke as default};
//# sourceMappingURL=RequirementsEditor.b190df5a.js.map
