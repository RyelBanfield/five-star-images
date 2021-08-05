(this["webpackJsonpfive-star-images"]=this["webpackJsonpfive-star-images"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(17),r=c.n(o),a=c(6),i=c(3),l=c(4),u=c(13),j=c(10),h=Object(u.b)({name:"home",initialState:{searchResults:null,randomPhotos:null},reducers:{updateHomeSearchResults:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{searchResults:t.payload})},updateRandomPhotos:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{randomPhotos:t.payload})}}}),p=h.actions,d=p.updateHomeSearchResults,b=p.updateRandomPhotos,m=h.reducer,O=Object(u.b)({name:"home",initialState:{topics:null,selectedTopicPhotos:null},reducers:{updateTopics:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{topics:t.payload})},updateSelectedTopicPhotos:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{selectedTopicPhotos:t.payload})}}}),f=O.actions,x=f.updateTopics,v=f.updateSelectedTopicPhotos,g=O.reducer,N=Object(u.a)({reducer:{home:m,topics:g}}),k=c(18),P=c(15),y=c(1),w=[{name:"Home",path:"/"},{name:"Topics",path:"/topics"}],S=function(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),c=t[0],s=t[1],o=function(){s(!1)};return Object(y.jsxs)("nav",{children:[Object(y.jsx)("div",{className:"menu-icon",children:Object(y.jsx)("button",{type:"button",onClick:function(){s(!c)},children:Object(y.jsx)("i",{children:c?Object(y.jsx)(P.c,{}):Object(y.jsx)(P.a,{})})})}),Object(y.jsx)("ul",{className:c?"mobile-links-active slide-in":"nav-links",children:w.map((function(e){return Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(a.b,{className:"nav-link",to:e.path,onClick:o,children:e.name})},e.name)}))})]})},T=c(11),_=c.n(T),R=c(16),C="https://api.unsplash.com",F="client_id=".concat("f8YPvyT0gF4BW1R9Wjv435a_pYPE5MCPk8ZuuFCKbOo"),B=function(){var e=Object(R.a)(_.a.mark((function e(t){var c,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/search/photos/?").concat(F,"&query=").concat(t,"&per_page=30"));case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,console.log("fetchPhotosBySearch"),console.log(n.results),e.abrupt("return",n.results);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(R.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/photos/random/?").concat(F,"&count=30"));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,console.log("fetchRandomPhotos"),console.log(c),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(R.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/topics/?").concat(F,"&per_page=30"));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,console.log("fetchListOfTopics"),console.log(c),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(R.a)(_.a.mark((function e(t){var c,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/topics/").concat(t,"/photos/?").concat(F,"&per_page=30"));case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,console.log("fetchPhotosByTopic"),console.log(n),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),c=t[0],s=t[1],o=Object(l.c)((function(e){return e.home.searchResults})),r=Object(l.c)((function(e){return e.home.randomPhotos})),i=Object(l.b)();Object(n.useEffect)((function(){E().then((function(e){i(b(e))}))}),[]);return Object(y.jsxs)("main",{className:"home",children:[Object(y.jsxs)("h1",{className:"header",children:["Five"," ",Object(y.jsx)(P.b,{})," ","Images"]}),Object(y.jsxs)("div",{className:"search",children:[Object(y.jsx)("div",{className:"search-bar",children:Object(y.jsx)("input",{type:"text",value:c,placeholder:"Search new photos",onChange:function(e){return s(e.target.value)}})}),Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)("button",{type:"button",className:"search-button btn",onClick:function(){B(c).then((function(e){i(d(e))}))},children:"Search"}),Object(y.jsx)("button",{type:"button",className:"clear-button btn",onClick:function(){return s(""),void i(d(null))},children:"Clear Search"})]})]}),o&&Object(y.jsx)("div",{className:"search-results",children:o.map((function(e){return Object(y.jsx)("div",{className:"search-result",children:Object(y.jsx)(a.b,{to:"/photo/".concat(e.id),children:Object(y.jsx)("img",{src:e.urls.small,alt:e.alt_description})})},e.id)}))}),!o&&Object(y.jsx)("div",{className:"random-photos",children:r&&r.map((function(e){return Object(y.jsx)("div",{className:"random-photo",children:Object(y.jsx)(a.b,{to:"/photo/".concat(e.id),children:Object(y.jsx)("img",{src:e.urls.small,alt:e.alt_description})})},e.id)}))})]})},L=function(){var e=Object(i.f)().id,t=Object(l.c)((function(e){return e.home.randomPhotos})),c=Object(l.c)((function(e){return e.home.searchResults})),n=t.find((function(t){return t.id===e}))||c.find((function(t){return t.id===e}));return Object(y.jsx)("main",{className:"h-photo",children:n&&Object(y.jsxs)("div",{className:"photo",children:[n.description&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{className:"photo-description-h",children:"Description:"}),Object(y.jsx)("p",{className:"photo-description",children:n.description})]}),Object(y.jsxs)("p",{className:"photographer",children:["Photographer:"," ",n.user.name]}),Object(y.jsx)("img",{src:n.urls.small,alt:n.alt_description}),Object(y.jsxs)("p",{className:"photo-info",children:[n.likes&&Object(y.jsxs)(y.Fragment,{children:["Likes:"," ",n.likes," "]}),n.downloads&&Object(y.jsxs)(y.Fragment,{children:["Downloads:"," ",n.downloads," "]}),n.views&&Object(y.jsxs)(y.Fragment,{children:["Views:"," ",n.views]})]})]})})};var J=function(){var e=Object(l.c)((function(e){return e.topics.topics})),t=Object(l.b)();return Object(n.useEffect)((function(){D().then((function(e){t(x(e))}))}),[]),Object(y.jsxs)("main",{className:"topics",children:[Object(y.jsx)("h1",{children:"Topics"}),e&&Object(y.jsx)("div",{className:"topic-divs",children:e.map((function(c){return Object(y.jsxs)("div",{className:"topic-div",children:[Object(y.jsx)("h2",{children:c.title}),Object(y.jsx)(a.b,{to:"/topic/".concat(c.slug,"/photos"),onClick:function(){return function(e){H(e.id).then((function(e){t(v(e))}))}(c)},children:Object(y.jsx)("img",{src:c.cover_photo.urls.small,alt:e.alt_description})})]},c.id)}))})]})},M=function(){var e=Object(i.f)().id,t=Object(l.c)((function(e){return e.topics.topics})),c=Object(l.c)((function(e){return e.topics.selectedTopicPhotos})),n=t.find((function(t){return t.slug===e}));return Object(y.jsxs)("main",{className:"topic",children:[Object(y.jsx)("h1",{children:n.title}),Object(y.jsx)("div",{className:"topic-photos",children:c&&c.map((function(t){return Object(y.jsx)("div",{className:"topic-photo",children:Object(y.jsx)(a.b,{to:"/topic/".concat(e,"/photo/").concat(t.id),children:Object(y.jsx)("img",{src:t.urls.small,alt:t.alt_description})})},t.id)}))})]})},W=function(){var e=Object(i.f)().id,t=Object(l.c)((function(e){return e.topics.selectedTopicPhotos})).find((function(t){return t.id===e}));return Object(y.jsx)("main",{className:"t-photo",children:t&&Object(y.jsxs)("div",{className:"photo",children:[t.description&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{className:"photo-description-h",children:"Description:"}),Object(y.jsx)("p",{className:"photo-description",children:t.description})]}),Object(y.jsxs)("p",{className:"photographer",children:["Photographer:"," ",t.user.name]}),Object(y.jsx)("img",{src:t.urls.small,alt:t.alt_description}),Object(y.jsxs)("p",{className:"photo-info",children:["Likes:"," ",t.likes]})]})})},Y=function(){return Object(y.jsx)("footer",{children:Object(y.jsx)("p",{className:"copyright",children:"Five Star Images \xa9 2021"})})};c(39);r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(l.a,{store:N,children:Object(y.jsxs)(a.a,{children:[Object(y.jsx)(S,{}),Object(y.jsxs)(i.c,{children:[Object(y.jsx)(i.a,{exact:!0,path:"/photo/:id",component:L}),Object(y.jsx)(i.a,{exact:!0,path:"/topics",component:J}),Object(y.jsx)(i.a,{exact:!0,path:"/topic/:id/photos",component:M}),Object(y.jsx)(i.a,{exact:!0,path:"/topic/:id/photo/:id",component:W}),Object(y.jsx)(i.a,{path:"/",component:I})]}),Object(y.jsx)(Y,{})]})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f0f67586.chunk.js.map