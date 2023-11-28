var z=Object.defineProperty;var j=(i,e,t)=>e in i?z(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _=(i,e,t)=>(j(i,typeof e!="symbol"?e+"":e,t),t);import{a as P}from"./asyncComputed.7ba647bd.js";import{g as A}from"./icons.6c1915db.js";import{C as D}from"./CrudView.a4f4d47c.js";import{d as I,G as N,b as c,eu as m,f as k,u as a,c as w,w as g,ew as b,a_ as x,eC as V,aq as p,eD as v,bU as S}from"./outputWidgets.e60ab380.js";import{E as B}from"./record.04c6d5a0.js";import{A as F}from"./Title.666a14b1.js";import{b as $}from"./Text.742cb8ec.js";import"./router.0cf2e70d.js";import"./Base.0638c3f7.js";import"./transButton.1b3f66c8.js";import"./index.1462457d.js";import"./url.7bd60adc.js";import"./index.ed25df4f.js";import"./index.aaa1fe24.js";import"./pubsub.e6733ea4.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="7a057ba3-77c0-4402-8a70-77f467b7c762",i._sentryDebugIdIdentifier="sentry-dbid-7a057ba3-77c0-4402-8a70-77f467b7c762")}catch{}})();class O{async list(){return(await fetch("/_editor/api/requirements")).json()}async recommendations(){return(await fetch("/_editor/api/requirements/recommendations")).json()}async update(e,t){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to update requirements")}async create(e){const t=await fetch("/_editor/api/requirements",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to create requirements");return t.json()}async delete(e){if(!(await fetch(`/_editor/api/requirements/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete requirements")}}const u=new O;class l{constructor(e){_(this,"record");this.record=B.from(e)}static async list(){return(await u.list()).map(t=>new l(t))}static async create(e,t){const o=await u.create({name:e,version:t!=null?t:null});return new l(o)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get version(){var e;return(e=this.record.get("version"))!=null?e:"latest"}set version(e){this.record.set("version",e)}async delete(){await u.delete(this.name)}static async recommendations(){return u.recommendations()}}const R=i=>["__future__","__main__","_thread","abc","aifc","argparse","array","ast","asynchat","asyncio","asyncore","atexit","audioop","base64","bdb","binascii","binhex","bisect","builtins","bz2","calendar","cgi","cgitb","chunk","cmath","cmd","code","codecs","codeop","collections","collections.abc","colorsys","compileall","concurrent","concurrent.futures","configparser","contextlib","contextvars","copy","copyreg","cProfile","crypt","csv","ctypes","curses","curses.ascii","curses.panel","curses.textpad","dataclasses","datetime","dbm","dbm.dumb","dbm.gnu","dbm.ndbm","decimal","difflib","dis","distutils","distutils.archive_util","distutils.bcppcompiler","distutils.ccompiler","distutils.cmd","distutils.command","distutils.command.bdist","distutils.command.bdist_dumb","distutils.command.bdist_msi","distutils.command.bdist_packager","distutils.command.bdist_rpm","distutils.command.build","distutils.command.build_clib","distutils.command.build_ext","distutils.command.build_py","distutils.command.build_scripts","distutils.command.check","distutils.command.clean","distutils.command.config","distutils.command.install","distutils.command.install_data","distutils.command.install_headers","distutils.command.install_lib","distutils.command.install_scripts","distutils.command.register","distutils.command.sdist","distutils.core","distutils.cygwinccompiler","distutils.debug","distutils.dep_util","distutils.dir_util","distutils.dist","distutils.errors","distutils.extension","distutils.fancy_getopt","distutils.file_util","distutils.filelist","distutils.log","distutils.msvccompiler","distutils.spawn","distutils.sysconfig","distutils.text_file","distutils.unixccompiler","distutils.util","distutils.version","doctest","email","email.charset","email.contentmanager","email.encoders","email.errors","email.generator","email.header","email.headerregistry","email.iterators","email.message","email.mime","email.parser","email.policy","email.utils","encodings","encodings.idna","encodings.mbcs","encodings.utf_8_sig","ensurepip","enum","errno","faulthandler","fcntl","filecmp","fileinput","fnmatch","fractions","ftplib","functools","gc","getopt","getpass","gettext","glob","graphlib","grp","gzip","hashlib","heapq","hmac","html","html.entities","html.parser","http","http.client","http.cookiejar","http.cookies","http.server","idlelib","imaplib","imghdr","imp","importlib","importlib.abc","importlib.machinery","importlib.metadata","importlib.resources","importlib.util","inspect","io","ipaddress","itertools","json","json.tool","keyword","lib2to3","linecache","locale","logging","logging.config","logging.handlers","lzma","mailbox","mailcap","marshal","math","mimetypes","mmap","modulefinder","msilib","msvcrt","multiprocessing","multiprocessing.connection","multiprocessing.dummy","multiprocessing.managers","multiprocessing.pool","multiprocessing.shared_memory","multiprocessing.sharedctypes","netrc","nis","nntplib","numbers","operator","optparse","os","os.path","ossaudiodev","pathlib","pdb","pickle","pickletools","pipes","pkgutil","platform","plistlib","poplib","posix","pprint","profile","pstats","pty","pwd","py_compile","pyclbr","pydoc","queue","quopri","random","re","readline","reprlib","resource","rlcompleter","runpy","sched","secrets","select","selectors","shelve","shlex","shutil","signal","site","smtpd","smtplib","sndhdr","socket","socketserver","spwd","sqlite3","ssl","stat","statistics","string","stringprep","struct","subprocess","sunau","symtable","sys","sysconfig","syslog","tabnanny","tarfile","telnetlib","tempfile","termios","test","test.support","test.support.bytecode_helper","test.support.import_helper","test.support.os_helper","test.support.script_helper","test.support.socket_helper","test.support.threading_helper","test.support.warnings_helper","textwrap","threading","time","timeit","tkinter","tkinter.colorchooser","tkinter.commondialog","tkinter.dnd","tkinter.filedialog","tkinter.font","tkinter.messagebox","tkinter.scrolledtext","tkinter.simpledialog","tkinter.tix","tkinter.ttk","token","tokenize","trace","traceback","tracemalloc","tty","turtle","turtledemo","types","typing","unicodedata","unittest","unittest.mock","urllib","urllib.error","urllib.parse","urllib.request","urllib.response","urllib.robotparser","uu","uuid","venv","warnings","wave","weakref","webbrowser","winreg","winsound","wsgiref","wsgiref.handlers","wsgiref.headers","wsgiref.simple_server","wsgiref.util","wsgiref.validate","xdrlib","xml","xml.dom","xml.dom.minidom","xml.dom.pulldom","xml.etree.ElementTree","xml.parsers.expat","xml.parsers.expat.errors","xml.parsers.expat.model","xml.sax","xml.sax.handler","xml.sax.saxutils","xml.sax.xmlreader","xmlrpc","xmlrpc.client","xmlrpc.server","zipapp","zipfile","zipimport","zlib","zoneinfo"].includes(i),J=i=>/^(\d+!)?(\d+)(\.\d+)+([\\.\-\\_])?((a(lpha)?|b(eta)?|c|r(c|ev)?|pre(view)?)\d*)?(\.?(post|dev)\d*)?$/.test(i),L={key:2},ne=I({__name:"RequirementsEditor",setup(i){const{loading:e,result:t,refetch:o}=P(()=>Promise.all([l.list(),l.recommendations()]).then(([s,r])=>({requirements:s,recommendations:r})));async function q(s,r){await l.create(s,r).then(o),o()}const C=[{label:"Name",key:"name",hint:s=>R(s)?"This package is built-in should not be installed":void 0},{label:"Version",key:"version",placeholder:"1.0.0",hint:s=>!s||J(s)?void 0:"Invalid version"}];async function T({name:s,version:r}){await l.create(s,r),o()}const E=N(()=>{var s,r;return{columns:[{name:"Name"},{name:"Version"},{name:"Actions",align:"right"}],rows:(r=(s=t.value)==null?void 0:s.requirements.map(n=>({key:n.name,cells:[{text:n.name},{text:n.version},{text:"Actions",actions:[{icon:A,label:"Delete",async onClick(){await n.delete(),o()},dangerous:!0}]}]})))!=null?r:[]}});return(s,r)=>{var n,h,f;return c(),m(x,null,[k(D,{"entity-name":"Packages",loading:a(e),title:"Python Packages",description:"Set pip dependencies for your project. This will create and update your requirements.txt file.","empty-title":"No python packages set",table:E.value,"create-button-text":"Add a package",fields:C,onCreate:T},null,8,["loading","table"]),(n=a(t))!=null&&n.recommendations.length?(c(),w(a(F),{key:0},{default:g(()=>[p(" Suggested packages ")]),_:1})):b("",!0),(h=a(t))!=null&&h.recommendations.length?(c(),w(a($),{key:1},{default:g(()=>[p(" The following packages are being utilized by your code but are not listed in your requirements.txt. ")]),_:1})):b("",!0),(f=a(t))!=null&&f.recommendations.length?(c(),m("ul",L,[(c(!0),m(x,null,V(a(t).recommendations,d=>(c(),m("li",{key:d.name},[p(v(d.name)+" ("+v(d.version)+") ",1),k(a(S),{onClick:U=>{var y;return q(d.name,(y=d.version)!=null?y:void 0)}},{default:g(()=>[p(" Add to requirements ")]),_:2},1032,["onClick"])]))),128))])):b("",!0)],64)}}});export{ne as default};
//# sourceMappingURL=RequirementsEditor.0e69c898.js.map
