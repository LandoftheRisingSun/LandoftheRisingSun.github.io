import{a as m,q as d,f as o,o as f,j as x,m as S,u as c,p as z}from"./entry.70ac9479.js";import{u as I}from"./config.7251b6fc.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(p){var r;const s=p;d(n=>({"71ded496":c(l)}));const e=I();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const _=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),l=o(()=>`url('https://api.iconify.design/${_.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),x("span",{style:S({width:c(a),height:c(a)})},null,4))}});const h=z(y,[["__scopeId","data-v-11604bcf"]]);export{h as default};
