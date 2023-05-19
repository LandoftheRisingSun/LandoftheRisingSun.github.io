import{_ as M}from"./nuxt-link.3b09de95.js";import{b as U,r as C,x as F,y as H,z as A,w as R,u as k,A as j,B as L,f as E,v as W,p as $,i as K,j as V,C as O,D as P,E as v,t as J,o as Y,F as z,G as q,H as G}from"./entry.2a3c2e37.js";const X=()=>null;function Q(...r){var l;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??X,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=U(),o=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],c=()=>o()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:C(o()??((l=t.default)==null?void 0:l.call(t))??null),pending:C(!c()),error:F(a.payload._errors,s)});const i={...a._asyncData[s]};i.refresh=i.execute=(d={})=>{if(a._asyncDataPromises[s]){if(d.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(d._initial&&c())return o();i.pending.value=!0;const _=new Promise((u,p)=>{try{u(e(a))}catch(x){p(x)}}).then(u=>{if(_.cancelled)return a._asyncDataPromises[s];let p=u;t.transform&&(p=t.transform(u)),t.pick&&(p=Z(p,t.pick)),i.data.value=p,i.error.value=null}).catch(u=>{var p;if(_.cancelled)return a._asyncDataPromises[s];i.error.value=u,i.data.value=k(((p=t.default)==null?void 0:p.call(t))??null)}).finally(()=>{_.cancelled||(i.pending.value=!1,a.payload.data[s]=i.data.value,i.error.value&&(a.payload._errors[s]=j(i.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=_,a._asyncDataPromises[s]};const h=()=>i.refresh({_initial:!0}),f=t.server!==!1&&a.payload.serverRendered;{const d=L();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const u=d._nuxtOnBeforeMountCbs;d&&(H(()=>{u.forEach(p=>{p()}),u.splice(0,u.length)}),A(()=>u.splice(0,u.length)))}f&&a.isHydrating&&c()?i.pending.value=!1:d&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?d._nuxtOnBeforeMountCbs.push(h):t.immediate&&h(),t.watch&&R(t.watch,()=>i.refresh());const _=a.hook("app:data:refresh",u=>{if(!u||u.includes(s))return i.refresh()});d&&A(_)}const y=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(y,i),y}function Z(r,n){const s={};for(const e of n)s[e]=r[e];return s}const tt={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function et(r,n={}){n={...tt,...n};const s=N(n);return s.dispatch(r),s.toString()}function N(r){const n=[];let s=[];const e=t=>{n.push(t)};return{toString(){return n.join("")},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){if(t&&typeof t.toJSON=="function")return this._object(t.toJSON());const a=/\[object (.*)]/i,o=Object.prototype.toString.call(t),c=a.exec(o),i=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let h=null;if((h=s.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+h+"]");if(s.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this["_"+i]?this["_"+i](t):r.ignoreUnknown||this._unkown(t,i);else{let f=Object.keys(t);r.unorderedObjects&&(f=f.sort()),r.respectType!==!1&&!I(t)&&f.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(f=f.filter(function(y){return!r.excludeKeys(y)})),e("object:"+f.length+":");for(const y of f)this.dispatch(y),e(":"),r.excludeValues||this.dispatch(t[y]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:r.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=[],c=t.map(i=>{const h=N(r);return h.dispatch(i),o.push(h.getContext()),h.toString()});return s=[...s,...o],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this._array(Array.from(t.entries()),!0)},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),I(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,r.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,r.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function I(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}class S{constructor(n,s){n=this.words=n||[],this.sigBytes=s!==void 0?s:n.length*4}toString(n){return(n||st).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new S([...this.words])}}const st={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},rt={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<r.sigBytes*8;i++)s.push(n.charAt(c>>>6*(3-i)&63))}return s.join("")}},nt={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new S(s,n)}},at={parse(r){return nt.parse(unescape(encodeURIComponent(r)))}};class it{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new S,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=at.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new S(s,a)}}class ot extends it{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const ct=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ut=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class lt extends ot{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new S([...ct])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],c=e[3],i=e[4],h=e[5],f=e[6],y=e[7];for(let l=0;l<64;l++){if(l<16)b[l]=n[s+l]|0;else{const B=b[l-15],w=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,m=b[l-2],T=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;b[l]=w+b[l-7]+T+b[l-16]}const d=i&h^~i&f,_=t&a^t&o^a&o,u=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),p=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),x=y+p+d+ut[l]+b[l],g=u+_;y=f,f=h,h=i,i=c+x|0,c=o,o=a,a=t,t=x+g|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+c|0,e[4]=e[4]+i|0,e[5]=e[5]+h|0,e[6]=e[6]+f|0,e[7]=e[7]+y|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ht(r){return new lt().finalize(r).toString(rt)}function ft(r,n={}){const s=typeof r=="string"?r:et(r,n);return ht(s).slice(0,10)}function dt(r,n,s){const[e={},t]=typeof n=="string"?[{},n]:[n,s],a=e.key||ft([t,k(e.baseURL),typeof r=="string"?r:"",k(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===t?"$f"+a:a,c=E(()=>{let w=r;return typeof w=="function"&&(w=w()),k(w)});if(!e.baseURL&&typeof c.value=="string"&&c.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:h,default:f,transform:y,pick:l,watch:d,immediate:_,...u}=e,p=W({...u,cache:typeof e.cache=="boolean"?void 0:e.cache}),x={server:i,lazy:h,default:f,transform:y,pick:l,immediate:_,watch:d===!1?[]:[p,c,...d||[]]};let g;return Q(o,()=>{var m;return(m=g==null?void 0:g.abort)==null||m.call(g),g=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(c.value,{signal:g.signal,...p})},x)}const D=r=>(q("data-v-2357f118"),r=r(),G(),r),pt=D(()=>v("h2",{class:"mb-20 text-4xl"},"Home",-1)),yt=D(()=>v("p",{class:"m-20"}," This aint about whose angry and who isnt. You can call it whatever you want lmfao, I could say the same thing in the sense that your taking a photo of the chat and posting it in thedump because your so buthurt and angry to the point where you want attention to comfort your tilt. See? Its not hard, we can all make up feelings, your malding, your depressed, your retarded etc... As I said, that is not the point. ",-1)),_t=D(()=>v("p",{class:"m-20"},' My point is that just because I play LOTRS and trash talk mfs online, does not mean im more or less successful than you irl. That the MAIN thing I want to pin into your head because your ego is too big to understand. This is like the tenth time youve said to me "this is roblox, stop being angry" as if saying "this is roblox" changes anything. I am who I am because I choose to, the fucking platform has nothing got to do with it whether if it was steam, epicgames, instagram or snapchat. ',-1)),gt=D(()=>v("p",{class:"m-20"}," Cheers to whoever sees this ",-1)),mt={__name:"index",async setup(r){let n,s;const{data:e}=([n,s]=K(()=>dt("https://games.roblox.com/v1/games/6937208251/servers/Public?limit=100&sortOrder=Asc","$PslAyef5YX")),n=await n,s(),n);return(t,a)=>{const o=M;return Y(),V("div",null,[O(o,{to:"/"},{default:P(()=>[z("MAIN")]),_:1}),O(o,{to:"/about"},{default:P(()=>[z("ABOUT")]),_:1}),pt,v("p",null,J(k(e).data[0].playing),1),yt,_t,gt])}}},xt=$(mt,[["__scopeId","data-v-2357f118"]]);export{xt as default};