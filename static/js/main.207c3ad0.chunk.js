(this.webpackJsonpjokenorris=this.webpackJsonpjokenorris||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/jokenorris-site-logo.192ae25c.png"},32:function(e,a,t){e.exports=t.p+"static/media/jokenorris.3b874fd2.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/risada-do-bola.ea8a8e5b.mp3"},34:function(e,a,t){e.exports=t(63)},39:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(27),o=t.n(r),l=t(8),s=(t(39),t(12)),m=t.n(s),i=t(14),u=t(11),k=t(28),E=t.n(k).a.create({baseURL:"https://api.chucknorris.io/jokes"}),g=Object(c.createContext)(),p=function(e){var a=Object(c.useState)([]),t=Object(u.a)(a,2),r=t[0],o=t[1],l=Object(c.useState)(null),s=Object(u.a)(l,2),k=s[0],p=s[1],b=function(){Object(i.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/categories");case 2:a=e.sent,o(a.data);case 4:case"end":return e.stop()}}),e)})))()};return Object(c.useEffect)((function(){b()}),[]),n.a.createElement(g.Provider,{value:{jokesContext:{currentJoke:k,categories:r,getCategories:b,getRandomJoke:function(e){Object(i.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.get("/random?category=".concat(e));case 2:t=a.sent,p(t.data.value),document.getElementById("laugh").play();case 6:case"end":return a.stop()}}),a)})))()}}}},e.children)},b=t(6),h=t(29),d=t.n(h),f=t(2),j=function(e){var a=Object(c.useContext)(g).jokesContext,t=e.categories||a.categories;return n.a.createElement("div",{className:"categories"},n.a.createElement("h4",{className:"categories-title"},"Categories (Choose Wisely)"),n.a.createElement("div",{className:"categories-list"},n.a.createElement("div",{className:"row"},a&&t.length>0?t.map((function(e,a){var t=null;switch(e){case"animal":t=n.a.createElement(f.n,null);break;case"career":t=n.a.createElement(f.m,null);break;case"celebrity":t=n.a.createElement(f.f,null);break;case"dev":t=n.a.createElement(f.g,null);break;case"explicit":t=n.a.createElement(f.b,null);break;case"fashion":t=n.a.createElement(f.p,null);break;case"food":t=n.a.createElement(f.h,null);break;case"history":t=n.a.createElement(f.a,null);break;case"money":t=n.a.createElement(f.i,null);break;case"movie":t=n.a.createElement(f.c,null);break;case"music":t=n.a.createElement(f.j,null);break;case"political":t=n.a.createElement(f.d,null);break;case"religion":t=n.a.createElement(f.k,null);break;case"science":t=n.a.createElement(f.q,null);break;case"sport":t=n.a.createElement(f.e,null);break;case"travel":t=n.a.createElement(f.l,null)}return n.a.createElement(l.b,{className:"category col-lg-4 col-md-4 col-sm-6",key:a,"aria-label":"Link to ".concat(e," category joke"),to:"/joke/".concat(e)},n.a.createElement("span",{className:"category-icon","aria-label":"".concat(e," category icon")},t),n.a.createElement("span",{className:"category-name"},e))})):n.a.createElement("h3",{className:"empty"},"No Categories Available"))))},N=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"home"},n.a.createElement("div",{className:"home-logo"},n.a.createElement("img",{className:"home-logo--image",src:d.a,alt:"Jokenorris Logo"}),n.a.createElement("h1",{className:"home-logo--text"},"Jokenorris"),n.a.createElement("span",{className:"home-logo--small"},"Jokes with Chuck Norris facts"))),n.a.createElement(j,null))},v=function(e){return!!e.test&&e.children},y=t(32),x=t.n(y),C=t(33),J=t.n(C),O=function(e){var a=Object(c.useContext)(g).jokesContext,t=Object(c.useState)(!0),r=Object(u.a)(t,2),o=r[0],s=r[1],m=e.currentJoke||a.currentJoke,i=Object(b.f)().category;Object(c.useEffect)((function(){a&&(a.getRandomJoke(i),s(!1))}),[i]);return n.a.createElement("section",{className:"joke"},n.a.createElement(v,{test:!o},n.a.createElement("div",{className:"chuck-photo"},n.a.createElement("img",{className:"chuck-photo--img",src:x.a,alt:"Chucknorris Photography"})),!(!a||null===a.currentJoke)&&n.a.createElement("div",{className:"joke-data"},n.a.createElement("h3",{className:"joke-category"},i),n.a.createElement("blockquote",{className:"joke-text",cite:"https://api.chucknorris.io/"},'"'.concat(m,'"')),n.a.createElement("button",{className:"newJoke",onClick:function(){s(!0),a.getRandomJoke(i),s(!1)}},"See a New Joke"))),n.a.createElement(v,{test:o},n.a.createElement(f.o,{className:"loading"})),n.a.createElement(l.b,{className:"back",to:"/"},"\u2190 Back to Categories"),n.a.createElement("audio",{id:"laugh",autoPlay:!0},n.a.createElement("source",{src:J.a})))},w=function(e){return n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/",component:N}),n.a.createElement(b.a,{exact:!0,path:"/joke/:category",component:O}),n.a.createElement(b.a,{path:"/joke",component:N}))};var R=function(){return n.a.createElement(l.a,null,n.a.createElement(p,null,n.a.createElement("div",{className:"App"},n.a.createElement(w,null))))};o.a.render(n.a.createElement(R,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.207c3ad0.chunk.js.map