"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[89],{5813:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(9496),r=a(5924),l=a(8579),i=a(1352),o=a(1627),s=a(6525),c=a(3757),m=a(313),p=a(3);function E(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:r,blogTitle:o,permalink:s}=t,c="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:c,description:r}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(s.Z,{sidebar:r},n.createElement(p.Z,{items:a}),n.createElement(c.Z,{metadata:t}))}function u(e){return n.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(E,e),n.createElement(d,e))}},3757:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),r=a(3412),l=a(8683);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},3:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),r=a(365),l=a(4289);function i(e){let{items:t,component:a=l.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},1626:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(4833),r=a(9496),l=a(6882),i=a.n(l),o=a(6992);const s="browserWindow_In4X",c="browserWindowHeader_iOoG",m="browserWindowBody_ODSx";const p="main_p4lN",E="method_bXYh",d="url_eViw";var u=a(7593);function g(e){switch(e){case"GET":return"#61AFFE";case"POST":return"#49CC90";case"PUT":return"#FCA130";case"PATCH":return"#50E3C2";case"DELETE":return"#F93E3E"}}function b(e){switch(e){case"GET":case"PUT":return"70px";case"POST":return"80px";case"PATCH":return"90px";case"DELETE":return"98px"}}const h={...n.Z,endpoint:function(e){let{href:t,method:a}=e;return r.createElement("div",{className:p},r.createElement("div",{className:E,style:{color:g(a)}},a),r.createElement("a",{className:d,style:{left:b(a)},href:t,target:"_blank",rel:"noopener noreferrer"},t),r.createElement(u.Z,null,t))},cliWindow:function(e){let{children:t}=e;return r.createElement("div",{className:s,style:{maxWidth:"700px"}},r.createElement("div",{className:c},r.createElement(i(),{path:o.r5M,color:"#e2e8f080",size:1,rotate:45}),r.createElement(i(),{path:o.UHA,color:"#82858980",size:1,style:{marginLeft:"auto"}}),r.createElement(i(),{path:o.dz1,color:"#82858980",size:1,style:{marginLeft:"5px"}}),r.createElement(i(),{path:o.r5M,color:"#82858980",size:1,style:{marginLeft:"5px"}})),r.createElement("div",{className:m},t))}}}}]);