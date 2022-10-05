"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={sidebar_position:1},a="Introduction",i={unversionedId:"specs/backend-specs/introduction",id:"specs/backend-specs/introduction",title:"Introduction",description:"All backend implementations need to adhere to our API spec.",source:"@site/docs/specs/backend-specs/introduction.md",sourceDirName:"specs/backend-specs",slug:"/specs/backend-specs/introduction",permalink:"/docs/specs/backend-specs/introduction",draft:!1,editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/specs/backend-specs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/implementation-creation/features"},next:{title:"Endpoints",permalink:"/docs/specs/backend-specs/endpoints"}},s={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"All backend implementations need to adhere to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/realworld/tree/main/api"},"API spec"),"."),(0,o.kt)("p",null,"For your convenience, we have a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/realworld/blob/main/api/Conduit.postman_collection.json"},"Postman collection")," that you can use to test your API endpoints as you build your app."),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/realworld-starter-kit"},"starter kit")," to create a new implementation, please read ",(0,o.kt)("a",{parentName:"p",href:"https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction"},"references to the API specs & testing")," required for creating a new backend."))}u.isMDXComponent=!0}}]);