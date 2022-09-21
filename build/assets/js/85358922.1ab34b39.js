"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[8297],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,b=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return t?r.createElement(b,o(o({ref:n},m),{},{components:t})):r.createElement(b,o({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6698:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],u={sidebar_position:13},s="Maximum and Minimum Numbers",l={unversionedId:"solidity-101/language-building-blocks/Data-Types/max-and-min-numbers",id:"solidity-101/language-building-blocks/Data-Types/max-and-min-numbers",title:"Maximum and Minimum Numbers",description:"Maximum numbers and minimum numbers",source:"@site/docs/solidity-101/2-language-building-blocks/2-Data-Types/13-max-and-min-numbers.mdx",sourceDirName:"solidity-101/2-language-building-blocks/2-Data-Types",slug:"/solidity-101/language-building-blocks/Data-Types/max-and-min-numbers",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/max-and-min-numbers",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/solidity-101/2-language-building-blocks/2-Data-Types/13-max-and-min-numbers.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Unsigned Integers",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/unsigned-integers"},next:{title:"Bytes",permalink:"/docs/solidity-101/language-building-blocks/Data-Types/bytes"}},m={},c=[{value:"Uses of Max and Min",id:"uses-of-max-and-min",level:2}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},p=d("Tabs"),b=d("TabItem"),f={toc:c};function y(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"maximum-and-minimum-numbers"},"Maximum and Minimum Numbers"),(0,a.kt)("p",null,"Maximum numbers and minimum numbers"),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(b,{value:"sol",label:"Solidity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract MinMax {\n    // minimum and maximum of int\n    // max int = ENTER NUMBER\n    // min int = ENTER NUMBER\n    int public minInt = type(int).min;\n    int public maxInt = type(int).max;\n\n}\n")))),(0,a.kt)("h2",{id:"uses-of-max-and-min"},"Uses of Max and Min"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add more content")))}y.isMDXComponent=!0}}]);