"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[7264],{3153:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(3010),o=s(2803);const i={sidebar_position:3},r="EmailJS",a={unversionedId:"tutorial-docusaurus/emailjs",id:"tutorial-docusaurus/emailjs",title:"EmailJS",description:"EmailJS is great for reporting a broken link. Follow the step below to be notified via email every time a request is made to a broken or non existing link on your website.",source:"@site/docs/tutorial-docusaurus/emailjs.md",sourceDirName:"tutorial-docusaurus",slug:"/tutorial-docusaurus/emailjs",permalink:"/docs/tutorial-docusaurus/emailjs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Fonts",permalink:"/docs/tutorial-docusaurus/custom-fonts"},next:{title:"Environment variables",permalink:"/docs/tutorial-docusaurus/environment-variables"}},l={},d=[{value:"1. EmailJS dashboard",id:"1-emailjs-dashboard",level:3},{value:"2. Add credentials to .env file",id:"2-add-credentials-to-env-file",level:3},{value:"3. Install emailjs",id:"3-install-emailjs",level:3},{value:"4. Expose credentials from .env to docusaurus.config.js",id:"4-expose-credentials-from-env-to-docusaurusconfigjs",level:3},{value:"5. Add EmailJS to NotFound.tsx",id:"5-add-emailjs-to-notfoundtsx",level:3}];function c(e){const n=Object.assign({h1:"h1",admonition:"admonition",p:"p",strong:"strong",h3:"h3",ol:"ol",li:"li",a:"a",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"emailjs",children:"EmailJS"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"EmailJS"})," is great for reporting a broken link. Follow the step below to be notified via email every time a request is made to a broken or non existing link on your website."]})}),"\n",(0,t.jsx)(n.h3,{id:"1-emailjs-dashboard",children:"1. EmailJS dashboard"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Register a service at ",(0,t.jsx)(n.a,{href:"https://www.emailjs.com/",children:"https://www.emailjs.com/"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Setup a service."}),"\n",(0,t.jsx)(n.li,{children:"Setup a template."}),"\n",(0,t.jsx)(n.li,{children:"Take note of service_id, template_id, public_key."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-add-credentials-to-env-file",children:"2. Add credentials to .env file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title=".env"',children:"EMAILJS_SERVICE_ID=service_7pw8741\nEMAILJS_TEMPLATE_ID=template_b1rqq5s\nEMAILJS_PUBLIC_KEY=GIVRFmTLb16ynkEEy\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-install-emailjs",children:"3. Install emailjs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pnpm install @emailjs/browser\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-expose-credentials-from-env-to-docusaurusconfigjs",children:"4. Expose credentials from .env to docusaurus.config.js"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{5,14-19}",children:'//...\nconst lightCodeTheme = require("prism-react-renderer/themes/github")\nconst darkCodeTheme = require("prism-react-renderer/themes/dracula")\n\nrequire("dotenv").config()\n\n/** @type {import(\'@docusaurus/types\').Config} */\nconst config = {\n    title: "Developer",\n@ -24,6 +26,14 @@ const config = {\n    onBrokenLinks: "throw",\n    onBrokenMarkdownLinks: "warn",\n\n    // customFields are used to pass env variables to Docusaurus\' useDocusaurusContext\n    // hook which is used for importing env variables in the components\n    customFields: {\n        EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,\n        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,\n        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,\n    },\n\n    i18n: {\n        defaultLocale: "en",\n        locales: ["en"],\n    },\n//...\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5-add-emailjs-to-notfoundtsx",children:"5. Add EmailJS to NotFound.tsx"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="./src/theme/NotFound.tsx"',children:'import React from "react"\nimport NotFound from "@theme-original/NotFound"\nimport emailjs from "@emailjs/browser"\nimport useDocusaurusContext from "@docusaurus/useDocusaurusContext"\n\nexport default function NotFoundWrapper(props) {\n    const { siteConfig } = useDocusaurusContext()\n\n    const serverId = siteConfig.customFields.EMAILJS_SERVER_ID as string\n    const templateId = siteConfig.customFields.EMAILJS_TEMPLATE_ID as string\n    const publicKey = siteConfig.customFields.EMAILJS_PUBLIC_KEY as string\n\n    React.useEffect(() => {\n        if (!serverId || !templateId || !publicKey) return\n\n        async function emailJS() {\n            emailjs\n                .send(\n                    serverId,\n                    templateId,\n                    {\n                        url: window.location.href,\n                    },\n                    publicKey\n                )\n                .then(\n                    function (response) {\n                        console.log("SUCCESS!", response.status, response.text)\n                    },\n                    function (error) {\n                        console.log("FAILED...", error)\n                    }\n                )\n        }\n\n        emailJS()\n    }, [])\n\n    return (\n        <>\n            <NotFound {...props} />\n        </>\n    )\n}\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},2803:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(5170);const o=t.createContext({});function i(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(o.Provider,{value:a},n)}}}]);