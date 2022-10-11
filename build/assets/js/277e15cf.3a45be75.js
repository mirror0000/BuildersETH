"use strict";(self.webpackChunkbuilders_eth=self.webpackChunkbuilders_eth||[]).push([[8786],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:e},l),{},{components:n})):r.createElement(g,o({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5304:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={sidebar_position:1},s="Introduction",c={unversionedId:"solidity-101/language-building-blocks/Structs/introduction-structs",id:"solidity-101/language-building-blocks/Structs/introduction-structs",title:"Introduction",description:"Summary",source:"@site/docs/solidity-101/2-language-building-blocks/7-Structs/introduction-structs.mdx",sourceDirName:"solidity-101/2-language-building-blocks/7-Structs",slug:"/solidity-101/language-building-blocks/Structs/introduction-structs",permalink:"/docs/solidity-101/language-building-blocks/Structs/introduction-structs",draft:!1,editUrl:"https://github.com/tesla809/BuildersETH/issues/docs/solidity-101/2-language-building-blocks/7-Structs/introduction-structs.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/solidity-101/language-building-blocks/Mapping-and-Arrays/introduction-mappings-and-arrays"},next:{title:"Introduction",permalink:"/docs/solidity-101/language-building-blocks/Functions/introduction-functions"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2},{value:"Accessing the struct data",id:"accessing-the-struct-data",level:2}],p={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Solidity offers a variety of data types, such as addresses, uints, bytes, strings, etc."),(0,i.kt)("p",null,"Structs are a great way to store different data types together. You can think of a struct as an improved array, because regular arrays in Solidity only allow 1 data type."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"We use the sample contract from our Storage Box smart contract, but we add a ",(0,i.kt)("inlineCode",{parentName:"p"},"struct")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"DataStruct")," (mind the capital D):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-3.0\npragma solidity 0.8.13;\n\ncontract SimpleStorage {\n    \n    struct DataStruct {\n        uint storedData;\n        string message;\n    }\n\n    DataStruct data; //assign a name to the struct\n\n    function setStruct(uint _storedData, string memory _message) public { //our function now has 2 parameters\n       data = DataStruct(_storedData, _message); //push data to the DataStruct\n    }\n\n    function getDataStructMessage() public view returns (string memory) {\n        return data.message; //returns the string message from struct DataStruct\n    }\n\n    function getDataStructNumber() public view returns (uint) {\n        return data.storedData; //returns the uint storedData from struct DataStruct\n    }\n}\n")),(0,i.kt)("h2",{id:"accessing-the-struct-data"},"Accessing the struct data"),(0,i.kt)("p",null,"In order to access the data inside the struct, we need to use the access operator ",(0,i.kt)("inlineCode",{parentName:"p"},"."),", like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"structName.member"),".",(0,i.kt)("br",null)),(0,i.kt)("p",null,"In our contract code, we used the structName ",(0,i.kt)("inlineCode",{parentName:"p"},"DataStruct"),". The member name for the uint was ",(0,i.kt)("inlineCode",{parentName:"p"},"storedData"),". The function ",(0,i.kt)("inlineCode",{parentName:"p"},"getDataStructNumber")," was able to access and return the uint, because we used the . operator: ",(0,i.kt)("inlineCode",{parentName:"p"},"return data.storedData;"),"."))}m.isMDXComponent=!0}}]);