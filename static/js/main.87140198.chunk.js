(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(5),r=n.n(o),i=(n(15),n(16),n(9)),s=n(3),u=n(10),l=n.n(u),j=(n(37),n(1));function b(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1];return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault();var n=o.trim();n&&t(n),r("")},children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){r(e.target.value)}})]})})}var m=function(e){var t=e.item,n=e.onClick;return Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:n,children:Object(j.jsx)("img",{src:t.webformatURL,alt:t.tags,className:"ImageGalleryItem-image"})})},d=n(8),h=n.n(d),f=document.querySelector("#modal-root");function O(e){var t=e.onClose,n=e.children;Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(o.createPortal)(Object(j.jsx)("div",{className:h.a.backdrop,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(j.jsx)("div",{className:h.a.content,children:n})}),f)}function p(e){var t=e.items,n=Object(c.useState)(null),a=Object(s.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(!1),u=Object(s.a)(i,2),l=u[0],b=u[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){return Object(j.jsx)(m,{item:e,onClick:function(){!function(e){r(e),b(!0)}(t)}},t)}))}),l&&Object(j.jsx)(O,{onClose:function(){b((function(e){return!e}))},children:Object(j.jsx)("img",{src:t[o].largeImageURL,alt:t[o].tags})})]})}var g="22249367-47a1cf5ba4f0f2c3f03999b11";var v=function(e){return Object(j.jsx)("button",{type:"button",onClick:e.onClick,className:"Button",children:e.children})},x="pending",S="resolved",k="rejected",w="needLoading";function y(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),r=Object(s.a)(o,2),u=r[0],m=r[1],d=Object(c.useState)(1),h=Object(s.a)(d,2),f=h[0],O=h[1],y=Object(c.useState)(!1),N=Object(s.a)(y,2),C=N[0],F=N[1],E=Object(c.useState)(null),I=Object(s.a)(E,2),_=I[0],L=I[1],A=Object(c.useState)(null),B=Object(s.a)(A,2),G=B[0],M=B[1];Object(c.useEffect)((function(){G===w&&(M(x),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(g,"&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Can't get images for ".concat(e)))}))}(n,f).then((function(e){var t=e.hits.length;if(0===t)return L(new Error("No search results for ".concat(n))),void M(k);m((function(t){return[].concat(Object(i.a)(u),Object(i.a)(e.hits))})),F(P(t)),M(S)})).then((function(){1!==f&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){L(e),M(k)})))}),[u,f,n,G]);var P=function(e){return!(e<12)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{onSubmit:function(e){m([]),a(e),O(1),M(w)}}),G===k&&Object(j.jsx)("div",{children:_.message}),Object(j.jsx)(p,{items:u}),G===x&&Object(j.jsx)(l.a,{type:"Audio",color:"#00BFFF",height:100,width:100}),G===S&&C&&Object(j.jsx)(v,{onClick:function(){O((function(e){return e+1})),M(w)},children:"Load more"})]})}r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3FAPo",content:"Modal_content__1VIbZ"}}},[[39,1,2]]]);
//# sourceMappingURL=main.87140198.chunk.js.map