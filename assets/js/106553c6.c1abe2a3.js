"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[970],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return y}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=i(o),y=n,b=h["".concat(u,".").concat(y)]||h[y]||p[y]||a;return o?r.createElement(b,l(l({ref:t},c),{},{components:o})):r.createElement(b,l({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<a;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6865:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),l=["components"],s={id:"trouble-shoot",slug:"troubleshoot-replay-webhook"},u="Troubleshoot Replay Webhook",i={unversionedId:"trouble-shoot",id:"trouble-shoot",title:"Troubleshoot Replay Webhook",description:"Now that you can store webhooks, we want to see them and most importantly work with them.",source:"@site/docs/troubleshoot-replay-webhook.md",sourceDirName:".",slug:"/troubleshoot-replay-webhook",permalink:"/docs/troubleshoot-replay-webhook",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshoot-replay-webhook.md",tags:[],version:"current",frontMatter:{id:"trouble-shoot",slug:"troubleshoot-replay-webhook"},sidebar:"tutorialSidebar",previous:{title:"Install a Webhook Store",permalink:"/docs/self-hosting/install-store-kubernetes"}},c={},p=[{value:"Create a CORS proxy",id:"create-a-cors-proxy",level:3}],h={toc:p};function y(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshoot-replay-webhook"},"Troubleshoot Replay Webhook"),(0,a.kt)("p",null,"Now that you can store webhooks, we want to see them and most importantly work with them."),(0,a.kt)("p",null,"Since the browsers sends the webhooks, it might generate CORS errors since your server may not handle CORS. (Basically your server should respond on all POST or OPTION request with some headers.) But we won't do that, we'll use a proxy instead."),(0,a.kt)("h3",{id:"create-a-cors-proxy"},"Create a CORS proxy"),(0,a.kt)("p",null,"In order to avoid any errors, we'll use a cors proxy that will receive the request on your localhost and send them wherever you want."),(0,a.kt)("p",null,"Say you want to forward the webhooks on your Node application that listen on 9000."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx local-cors-proxy --proxyUrl=http://localhost:9000\n")),(0,a.kt)("p",null,"Now you can send webhooks to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8010/proxy")," without any CORS error, and it will forward the webhook to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9000")," \ud83c\udf89."))}y.isMDXComponent=!0}}]);