(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[985],{6992:(e,t,n)=>{"use strict";n.d(t,{UHA:()=>a,dz1:()=>o,r5M:()=>r});var r="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",o="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z",a="M19,13H5V11H19V13Z"},6882:(e,t,n)=>{e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=n(507)},function(e,t){e.exports=n(9496)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=0,i=r.forwardRef((function(e,t){var n=e.title,o=void 0===n?null:n,i=e.description,c=void 0===i?null:i,s=e.size,u=void 0===s?null:s,d=e.color,p=void 0===d?"currentColor":d,m=e.horizontal,f=void 0===m?null:m,h=e.vertical,y=void 0===h?null:h,g=e.rotate,b=void 0===g?null:g,v=e.spin,E=void 0===v?null:v,k=e.style,N=void 0===k?{}:k,w=e.children,O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);l++;var C,j=null!==E&&E,B=r.Children.map(w,(function(e){var t=e;!0!==j&&(j=!0===(null===E?t.props.spin:E));var n=t.props.size;"number"==typeof u&&"number"==typeof t.props.size&&(n=t.props.size/u);var o={size:n,color:null===p?t.props.color:p,horizontal:null===f?t.props.horizontal:f,vertical:null===y?t.props.vertical:y,rotate:null===b?t.props.rotate:b,spin:null===E?t.props.spin:E,inStack:!0};return r.cloneElement(t,o)}));null!==u&&(N.width="string"==typeof u?u:1.5*u+"rem");var T,L="stack_labelledby_"+l,x="stack_describedby_"+l;if(o)C=c?L+" "+x:L;else if(T="presentation",c)throw new Error("title attribute required when description is set");return r.createElement("svg",a({ref:t,viewBox:"0 0 24 24",style:N,role:T,"aria-labelledby":C},O),o&&r.createElement("title",{id:L},o),c&&r.createElement("desc",{id:x},c),j&&r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),B)}));i.displayName="Stack",i.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},i.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var c=i;n.d(t,"Icon",(function(){return d})),n.d(t,"Stack",(function(){return c}));var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=0,d=r.forwardRef((function(e,t){var n=e.path,o=e.id,a=void 0===o?++u:o,l=e.title,i=void 0===l?null:l,c=e.description,d=void 0===c?null:c,p=e.size,m=void 0===p?null:p,f=e.color,h=void 0===f?"currentColor":f,y=e.horizontal,g=void 0!==y&&y,b=e.vertical,v=void 0!==b&&b,E=e.rotate,k=void 0===E?0:E,N=e.spin,w=void 0!==N&&N,O=e.style,C=void 0===O?{}:O,j=e.inStack,B=void 0!==j&&j,T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),L={},x=[];null!==m&&(B?x.push("scale("+m+")"):(C.width="string"==typeof m?m:1.5*m+"rem",C.height=C.width)),g&&x.push("scaleX(-1)"),v&&x.push("scaleY(-1)"),0!==k&&x.push("rotate("+k+"deg)"),null!==h&&(L.fill=h);var Z=r.createElement("path",s({d:n,style:L},B?T:{})),S=Z;x.length>0&&(C.transform=x.join(" "),C.transformOrigin="center",B&&(S=r.createElement("g",{style:C},Z,r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var z,_=S,P=!0===w||"number"!=typeof w?2:w,M=!B&&(g||v);if(P<0&&(M=!M),w&&(_=r.createElement("g",{style:{animation:"spin"+(M?"-inverse":"")+" linear "+Math.abs(P)+"s infinite",transformOrigin:"center"}},S,!(g||v||0!==k)&&r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),B)return _;var I,A="icon_labelledby_"+a,H="icon_describedby_"+a;if(i)z=d?A+" "+H:A;else if(I="presentation",d)throw new Error("title attribute required when description is set");return r.createElement("svg",s({ref:t,viewBox:"0 0 24 24",style:C,role:I,"aria-labelledby":z},T),i&&r.createElement("title",{id:A},i),d&&r.createElement("desc",{id:H},d),!B&&w&&(M?r.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),_)}));d.displayName="Icon",d.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},d.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=d}])},9613:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7593:(e,t,n)=>{"use strict";n.d(t,{Z:()=>V});var r=n(1163),o=n(9496),a=n(3600),l=n(5924),i=n(2647),c=n(9617);function s(){const{prism:e}=(0,c.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var u=n(1627),d=n(7226),p=n.n(d);const m=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:r}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function g(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&f.test(a)){const e=a.match(f).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(h),t)}}(r,o),i=n.split("\n"),c=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<i.length;){const e=i[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?c[s[t]].range+=`${p},`:u[t]?c[u[t]].start=p:d[t]&&(c[d[t]].range+=`${c[d[t]].start}-${p-1},`),i.splice(p,1)}n=i.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const b={codeBlockContainer:"codeBlockContainer_k8nq"};function v(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(s());return o.createElement(t,(0,r.Z)({},n,{style:a,className:(0,l.Z)(n.className,b.codeBlockContainer,u.k.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_CxU7",codeBlockTitle:"codeBlockTitle_ibB9",codeBlock:"codeBlock_IJ3d",codeBlockStandalone:"codeBlockStandalone_WarE",codeBlockLines:"codeBlockLines_v8b4",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_DfH4",buttonGroup:"buttonGroup_YgLP"};function k(e){let{children:t,className:n}=e;return o.createElement(v,{as:"pre",tabIndex:0,className:(0,l.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:E.codeBlockLines},t))}var N=n(109);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function O(e,t){const[n,r]=(0,o.useState)(),a=(0,o.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=w);const r=(0,N.zX)(t),a=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,a),()=>t.disconnect()}),[e,r,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var j={Prism:n(999).Z,theme:C};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}var L=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function S(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var z=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=T({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=T({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=T({},S(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?T({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),B(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),B(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=T({},S(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?T({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),B(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,i=[],c=[i];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],d=n[l][a];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=Z(u,d.type),d.alias&&(u=Z(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(L),m=p.length;i.push({types:u,content:p[0]});for(var f=1;f<m;f++)x(i),c.push(i=[]),i.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return x(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const _=z,P={codeLine:"codeLine_PS30",codeLineNumber:"codeLineNumber_tMiV",codeLineContent:"codeLineContent_cLuW"};function M(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:i,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=i({line:t,className:(0,l.Z)(n,a&&P.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))));return o.createElement("span",s,a?o.createElement(o.Fragment,null,o.createElement("span",{className:P.codeLineNumber}),o.createElement("span",{className:P.codeLineContent},u)):u,o.createElement("br",null))}var I=n(3412);const A={copyButtonCopied:"copyButtonCopied_qpVC",copyButtonIcons:"copyButtonIcons_WI_R",copyButtonIcon:"copyButtonIcon_L2ie",copyButtonSuccessIcon:"copyButtonSuccessIcon__ZgN"};function H(e){let{code:t,className:n}=e;const[r,a]=(0,o.useState)(!1),i=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection(),l=a.rangeCount>0&&a.getRangeAt(0);n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}r.remove(),l&&(a.removeAllRanges(),a.addRange(l)),o&&o.focus()}(t),a(!0),i.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,I.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,I.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,I.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,A.copyButton,r&&A.copyButtonCopied),onClick:c},o.createElement("span",{className:A.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:A.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:A.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const D={wordWrapButtonIcon:"wordWrapButtonIcon_BOz0",wordWrapButtonEnabled:"wordWrapButtonEnabled_wWfb"};function R(e){let{className:t,onClick:n,isEnabled:r}=e;const a=(0,I.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,r&&D.wordWrapButtonEnabled),"aria-label":a,title:a},o.createElement("svg",{className:D.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function W(e){let{children:t,className:n="",metastring:a,title:i,showLineNumbers:u,language:d}=e;const{prism:{defaultLanguage:p,magicComments:f}}=(0,c.L)(),h=d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??p,y=s(),b=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),l=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return O(a,i),(0,o.useEffect)((()=>{i()}),[e,i]),(0,o.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),k=function(e){return e?.match(m)?.groups.title??""}(a)||i,{lineClassNames:N,code:w}=g(t,{metastring:a,language:h,magicComments:f}),C=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return o.createElement(v,{as:"div",className:(0,l.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},k&&o.createElement("div",{className:E.codeBlockTitle},k),o.createElement("div",{className:E.codeBlockContent},o.createElement(_,(0,r.Z)({},j,{theme:y,code:w,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:a}=e;return o.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,l.Z)(t,E.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,l.Z)(E.codeBlockLines,C&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(M,{key:t,line:e,getLineProps:r,getTokenProps:a,classNames:N[t],showLineNumbers:C})))))})),o.createElement("div",{className:E.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&o.createElement(R,{className:E.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),o.createElement(H,{className:E.codeButton,code:w}))))}function V(e){let{children:t,...n}=e;const l=(0,a.Z)(),i=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof i?W:k;return o.createElement(c,(0,r.Z)({key:String(l)},n),i)}},5394:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(1163),o=n(9496),a=n(5924),l=n(3412),i=n(9617),c=n(6353);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_BaAX",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_pMqm"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,i.L)();if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},u,{id:void 0}));const p=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return o.createElement(t,(0,r.Z)({},u,{className:(0,a.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,u.className),id:n}),u.children,o.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},4833:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(1163),o=n(9496),a=n(6955);var l=n(7593);var i=n(6353);var c=n(5924),s=n(3600),u=n(3650);const d={details:"details_FCOc",isBrowser:"isBrowser__BPq",collapsibleContent:"collapsibleContent_GGrq"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}function f(e){let{summary:t,children:n,...a}=e;const l=(0,s.Z)(),i=(0,o.useRef)(null),{collapsed:f,setCollapsed:h}=(0,u.u)({initialState:!a.open}),[y,g]=(0,o.useState)(a.open),b=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,r.Z)({},a,{ref:i,open:y,"data-collapsed":f,className:(0,c.Z)(d.details,l&&d.isBrowser,a.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&m(t,i.current)&&(e.preventDefault(),f?(h(!1),g(!0)):h(!0))}}),b,o.createElement(u.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{h(e),g(!e)}},o.createElement("div",{className:d.collapsibleContent},n)))}const h={details:"details_Dogz"},y="alert alert--info";function g(e){let{...t}=e;return o.createElement(f,(0,r.Z)({},t,{className:(0,c.Z)(y,h.details,t.className)}))}var b=n(5394);function v(e){return o.createElement(b.Z,e)}const E={containsTaskList:"containsTaskList_S8Ej"};const k={img:"img_Q9Em"};var N=n(1627),w=n(3412);const O="admonition_vfH6",C="admonitionHeading_R57R",j="admonitionIcon_NU7o",B="admonitionContent_aq7Q";const T={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(w.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(w.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(w.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(w.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(w.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},L={secondary:"note",important:"info",success:"tip",warning:"danger"};function x(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const Z={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e):e));return o.createElement(a.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props?.mdxType)))?o.createElement("code",e):o.createElement(l.Z,e)},a:function(e){return o.createElement(i.Z,e)},pre:function(e){return o.createElement(l.Z,(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(g,(0,r.Z)({},e,{summary:n}),a)},ul:function(e){return o.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,c.Z)(t,t?.includes("contains-task-list")&&E.containsTaskList))}));var t},img:function(e){return o.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,k.img))}));var t},h1:e=>o.createElement(v,(0,r.Z)({as:"h1"},e)),h2:e=>o.createElement(v,(0,r.Z)({as:"h2"},e)),h3:e=>o.createElement(v,(0,r.Z)({as:"h3"},e)),h4:e=>o.createElement(v,(0,r.Z)({as:"h4"},e)),h5:e=>o.createElement(v,(0,r.Z)({as:"h5"},e)),h6:e=>o.createElement(v,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:a}=x(e),l=function(e){const t=L[e]??e,n=T[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),T.info)}(n),i=r??l.label,{iconComponent:s}=l,u=a??o.createElement(s,null);return o.createElement("div",{className:(0,c.Z)(N.k.common.admonition,N.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,O)},o.createElement("div",{className:C},o.createElement("span",{className:j},u),i),o.createElement("div",{className:B},t))},mermaid:n(8072).Z}},8788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9496),o=n(9613),a=n(1626);function l(e){let{children:t}=e;return r.createElement(o.Zo,{components:a.Z},t)}},7226:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);