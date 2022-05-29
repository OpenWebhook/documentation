"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[943],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(h,s(s({ref:t},u),{},{components:r})):o.createElement(h,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8588:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=r(3117),n=r(102),a=(r(7294),r(3905)),s=["components"],l={id:"install-store-docker-compose"},i="Install a Webhook Store",c={unversionedId:"self-hosting/install-store-docker-compose",id:"self-hosting/install-store-docker-compose",title:"Install a Webhook Store",description:"Getting Started",source:"@site/docs/self-hosting/install-webhook-store-docker-compose.md",sourceDirName:"self-hosting",slug:"/self-hosting/install-store-docker-compose",permalink:"/docs/self-hosting/install-store-docker-compose",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/self-hosting/install-webhook-store-docker-compose.md",tags:[],version:"current",frontMatter:{id:"install-store-docker-compose"},sidebar:"tutorialSidebar",previous:{title:"Install a Webhook Store",permalink:"/docs/self-hosting/install-store-heroku"},next:{title:"Install a Webhook Store",permalink:"/docs/self-hosting/install-store-kubernetes"}},u={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Create an Webhook Store",id:"create-an-webhook-store",level:2},{value:"Access your store",id:"access-your-store",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-a-webhook-store"},"Install a Webhook Store"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"creating a new Webhook Store"),"."),(0,a.kt)("p",null,"Or ",(0,a.kt)("strong",{parentName:"p"},"try Open Webhook immediately")," with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://demo.openwebhook.io"},"openwebhook.io"))," with some github webhooks."),(0,a.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker desktop")),(0,a.kt)("h2",{id:"create-an-webhook-store"},"Create an Webhook Store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenWebhook/webhook-store.git && cd webhook-store\ndocker-compose up\n")),(0,a.kt)("h2",{id:"access-your-store"},"Access your store"),(0,a.kt)("p",null,"The store should be available at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000")))}f.isMDXComponent=!0}}]);