"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[943],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return o?r.createElement(h,s(s({ref:t},u),{},{components:o})):r.createElement(h,s({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8588:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],l={id:"install-store-docker-compose"},i="Install a Webhook Store",c={unversionedId:"self-hosting/install-store-docker-compose",id:"self-hosting/install-store-docker-compose",title:"Install a Webhook Store",description:"Getting Started",source:"@site/docs/self-hosting/install-webhook-store-docker-compose.md",sourceDirName:"self-hosting",slug:"/self-hosting/install-store-docker-compose",permalink:"/docs/self-hosting/install-store-docker-compose",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/self-hosting/install-webhook-store-docker-compose.md",tags:[],version:"current",frontMatter:{id:"install-store-docker-compose"},sidebar:"tutorialSidebar",previous:{title:"Install a Webhook Store",permalink:"/docs/self-hosting/install-store-heroku"},next:{title:"Install a Webhook Store",permalink:"/docs/self-hosting/install-store-kubernetes"}},u={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Create an Webhook Store",id:"create-an-webhook-store",level:2},{value:"Access your store",id:"access-your-store",level:2}],d={toc:p};function f(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-a-webhook-store"},"Install a Webhook Store"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"creating a new Webhook Store"),"."),(0,a.kt)("p",null,"Or ",(0,a.kt)("strong",{parentName:"p"},"try Open Webhook immediately")," with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://demo.openwebhook.io"},"openwebhook.io"))," with some github webhooks."),(0,a.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker desktop")),(0,a.kt)("h2",{id:"create-an-webhook-store"},"Create an Webhook Store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenWebhook/webhook-store.git && cd webhook-store\ndocker-compose up\n")),(0,a.kt)("h2",{id:"access-your-store"},"Access your store"),(0,a.kt)("p",null,"The store should be available at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000")))}f.isMDXComponent=!0}}]);