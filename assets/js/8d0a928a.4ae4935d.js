"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[264],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:3},i="EmailJS",s={unversionedId:"tutorial-docusaurus/emailjs",id:"tutorial-docusaurus/emailjs",title:"EmailJS",description:"EmailJS is great for reporting a broken link. Follow the step below to be notified via email every time a request is made to a broken or non existing link on your website.",source:"@site/docs/tutorial-docusaurus/emailjs.md",sourceDirName:"tutorial-docusaurus",slug:"/tutorial-docusaurus/emailjs",permalink:"/docs/tutorial-docusaurus/emailjs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Algolia setup",permalink:"/docs/tutorial-docusaurus/algolia-setup"},next:{title:"Environment variables",permalink:"/docs/tutorial-docusaurus/environment-variables"}},l={},u=[{value:"1. EmailJS dashboard",id:"1-emailjs-dashboard",level:3},{value:"2. Add credentials to .env file",id:"2-add-credentials-to-env-file",level:3},{value:"3. Install emailjs",id:"3-install-emailjs",level:3},{value:"4. Expose credentials from .env to docusaurus.config.js",id:"4-expose-credentials-from-env-to-docusaurusconfigjs",level:3},{value:"5. Add EmailJS to NotFound.tsx",id:"5-add-emailjs-to-notfoundtsx",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"emailjs"},"EmailJS"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"EmailJS")," is great for reporting a broken link. Follow the step below to be notified via email every time a request is made to a broken or non existing link on your website.")),(0,o.kt)("h3",{id:"1-emailjs-dashboard"},"1. EmailJS dashboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Register a service at ",(0,o.kt)("a",{parentName:"li",href:"https://www.emailjs.com/"},"https://www.emailjs.com/"),"."),(0,o.kt)("li",{parentName:"ol"},"Setup a service."),(0,o.kt)("li",{parentName:"ol"},"Setup a template."),(0,o.kt)("li",{parentName:"ol"},"Take note of service_id, template_id, public_key.")),(0,o.kt)("h3",{id:"2-add-credentials-to-env-file"},"2. Add credentials to .env file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{22,23,25,26}",metastring:"title=.env",title:".env"},"EMAILJS_SERVICE_ID=service_7pw8741\nEMAILJS_TEMPLATE_ID=template_b1rqq5s\nEMAILJS_PUBLIC_KEY=GIVRFmTLb16ynkEEy\n")),(0,o.kt)("h3",{id:"3-install-emailjs"},"3. Install emailjs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm install @emailjs/browser\n")),(0,o.kt)("h3",{id:"4-expose-credentials-from-env-to-docusaurusconfigjs"},"4. Expose credentials from .env to docusaurus.config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5,14-19}","{5,14-19}":!0},'//...\nconst lightCodeTheme = require("prism-react-renderer/themes/github")\nconst darkCodeTheme = require("prism-react-renderer/themes/dracula")\n\nrequire("dotenv").config()\n\n/** @type {import(\'@docusaurus/types\').Config} */\nconst config = {\n    title: "Developer",\n@ -24,6 +26,14 @@ const config = {\n    onBrokenLinks: "throw",\n    onBrokenMarkdownLinks: "warn",\n\n    // customFields are used to pass env variables to Docusaurus\' useDocusaurusContext\n    // hook which is used for importing env variables in the components\n    customFields: {\n        EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,\n        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,\n        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,\n    },\n\n    i18n: {\n        defaultLocale: "en",\n        locales: ["en"],\n    },\n//...\n')),(0,o.kt)("h3",{id:"5-add-emailjs-to-notfoundtsx"},"5. Add EmailJS to NotFound.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=./src/theme/NotFound.tsx",title:"./src/theme/NotFound.tsx"},'import React from "react"\nimport NotFound from "@theme-original/NotFound"\nimport emailjs from "@emailjs/browser"\nimport useDocusaurusContext from "@docusaurus/useDocusaurusContext"\n\nexport default function NotFoundWrapper(props) {\n    const { siteConfig } = useDocusaurusContext()\n\n    const serverId = siteConfig.customFields.EMAILJS_SERVER_ID as string\n    const templateId = siteConfig.customFields.EMAILJS_TEMPLATE_ID as string\n    const publicKey = siteConfig.customFields.EMAILJS_PUBLIC_KEY as string\n\n    React.useEffect(() => {\n        if (!serverId || !templateId || !publicKey) return\n\n        async function emailJS() {\n            emailjs\n                .send(\n                    serverId,\n                    templateId,\n                    {\n                        url: window.location.href,\n                    },\n                    publicKey\n                )\n                .then(\n                    function (response) {\n                        console.log("SUCCESS!", response.status, response.text)\n                    },\n                    function (error) {\n                        console.log("FAILED...", error)\n                    }\n                )\n        }\n\n        emailJS()\n    }, [])\n\n    return (\n        <>\n            <NotFound {...props} />\n        </>\n    )\n}\n')))}p.isMDXComponent=!0}}]);