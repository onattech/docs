"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[9792],{3298:(s,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(3010),e=o(2803);const i={sidebar_position:3},r="Custom Fonts",a={unversionedId:"tutorial-docusaurus/custom-fonts",id:"tutorial-docusaurus/custom-fonts",title:"Custom Fonts",description:"To add custom fonts to your Docusaurus site, you can choose between using Google Fonts or serving the fonts locally.",source:"@site/docs/tutorial-docusaurus/custom-fonts.md",sourceDirName:"tutorial-docusaurus",slug:"/tutorial-docusaurus/custom-fonts",permalink:"/docs/tutorial-docusaurus/custom-fonts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tailwind CSS Setup",permalink:"/docs/tutorial-docusaurus/tailwindcss"},next:{title:"EmailJS",permalink:"/docs/tutorial-docusaurus/emailjs"}},c={},l=[{value:"1. Get font links from Google Fonts",id:"1-get-font-links-from-google-fonts",level:3},{value:"2. Add the links as HeadTags in docusaurus.config.js file",id:"2-add-the-links-as-headtags-in-docusaurusconfigjs-file",level:3},{value:"3. Add to custom.css file",id:"3-add-to-customcss-file",level:3}];function u(s){const n=Object.assign({h1:"h1",admonition:"admonition",p:"p",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,e.ah)(),s.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"custom-fonts",children:"Custom Fonts"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To add custom fonts to your Docusaurus site, you can choose between using ",(0,t.jsx)(n.strong,{children:"Google Fonts"})," or serving the fonts locally."]})}),"\n",(0,t.jsx)(n.h3,{id:"1-get-font-links-from-google-fonts",children:"1. Get font links from Google Fonts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap" rel="stylesheet" />\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-add-the-links-as-headtags-in-docusaurusconfigjs-file",children:"2. Add the links as HeadTags in docusaurus.config.js file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'const config = {\n    //...\n\n    headTags: [\n        {\n            tagName: "link",\n            attributes: {\n                rel: "preconnect",\n                href: "https://fonts.googleapis.com",\n            },\n        },\n        {\n            tagName: "link",\n            attributes: {\n                rel: "preconnect",\n                href: "https://fonts.gstatic.com",\n                crossorigin: "anonymous",\n            },\n        },\n        {\n            tagName: "link",\n            attributes: {\n                rel: "stylesheet",\n                href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap",\n            },\n        },\n    ],\n\n    //...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-add-to-customcss-file",children:"3. Add to custom.css file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'{11,12} title="src/css/custom.css"',children:':root {\n    --ifm-color-primary: #4361ee;\n    --ifm-color-primary-dark: #2749eb;\n    --ifm-color-primary-darker: #193eea;\n    --ifm-color-primary-darkest: #1231c4;\n    --ifm-color-primary-light: #5f79f1;\n    --ifm-color-primary-lighter: #6d84f2;\n    --ifm-color-primary-lightest: #97a8f6;\n    --ifm-code-font-size: 95%;\n    --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);\n    --ifm-heading-font-family: "Noto Sans Arabic", sans-serif;\n    --ifm-font-family-base: "Noto Sans Arabic", sans-serif;\n}\n'})})]})}const d=function(s={}){const{wrapper:n}=Object.assign({},(0,e.ah)(),s.components);return n?(0,t.jsx)(n,Object.assign({},s,{children:(0,t.jsx)(u,s)})):u(s)}},2803:(s,n,o)=>{o.d(n,{Zo:()=>a,ah:()=>i});var t=o(5170);const e=t.createContext({});function i(s){const n=t.useContext(e);return t.useMemo((()=>"function"==typeof s?s(n):{...n,...s}),[n,s])}const r={};function a({components:s,children:n,disableParentContext:o}){let a;return a=o?"function"==typeof s?s({}):s||r:i(s),t.createElement(e.Provider,{value:a},n)}}}]);