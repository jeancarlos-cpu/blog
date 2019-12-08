(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{65:function(e,n,t){"use strict";n.a=function(e){return e.toLowerCase().split(" ").reduce((function(e,n){return"".concat(e," ").concat(n.charAt(0).toUpperCase()+n.slice(1))}),"")}},68:function(e,n,t){"use strict";var r=t(9),a=t(69),c=t(0),o=t.n(c),i=t(20);function l(){var e=Object(r.a)(["\n  border-radius: 10px;\n  border: 0px;\n  margin: 0px auto;\n  padding: 8px 2em;\n  background: ",";\n  border: ",";\n  color: ",";\n  transition: transform 0.2s;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);return l=function(){return e},e}n.a=function(e){var n=e.children,t=Object(a.a)(e,["children"]);return o.a.createElement(u,t,n)};var u=i.a.button(l(),(function(e){return e.inverted?"white":"#3da9fc"}),(function(e){return e.inverted?"solid 2px #3da9fc":null}),(function(e){return e.inverted?"#3da9fc":"white"}))},71:function(e,n,t){"use strict";var r=t(9),a=t(0),c=t.n(a),o=t(16),i=t(34),l=t(68),u=t(66),s=t.n(u),d=t(65),f=t(20);t(72);function m(){var e=Object(r.a)(["\n  font-size: 15px;\n  color: var(--paragraphy);\n"]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  font-size: 40px;\n  color: var(--stroke);\n  font-weight: 600;\n  background: var(--background);\n  font-size: 22px;\n  display: flex;\n  justify-content: space-between;\n  .title {\n    &:hover {\n      cursor: pointer;\n      text-decoration: underline;\n    }\n  }\n  .date {\n    font-size: 15px;\n    color: var(--paragraphy);\n  }\n"]);return p=function(){return e},e}function v(){var e=Object(r.a)(["\n  background: var(--background1);\n  border-radius: 5px;\n  margin: 0 15px 15px 15px;\n  padding: 10px;\n  vertical-align: center;\n"]);return v=function(){return e},e}function b(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: var(--background2);\n  border-radius: 10px;\n  padding: 10px 0;\n  overflow-y: scroll;\n  max-height: 80vh;\n"]);return b=function(){return e},e}n.a=function(e){var n=e.data,t=e.loading,r=e.error,a=e.handleLoadMore,u=e.hasMorePosts;if(t)return c.a.createElement(i.a,null);if(r)return"Error :(";var f=Object(o.f)();return c.a.createElement("div",{className:"posts-container"},n.posts.map((function(e){return c.a.createElement("div",{className:"post-container",key:e.id},c.a.createElement("div",{className:"post-title"},c.a.createElement("div",{className:"title",onClick:function(){return f.push("/post/".concat(e.id))}},e.title),c.a.createElement("div",{className:"date"},c.a.createElement(s.a,{fromNow:!0},e.createdAt))),c.a.createElement("div",{className:"post-body"},e.body.slice(0,350)+"..."),c.a.createElement("div",{className:"post-footer"},"Author:"," ",c.a.createElement("span",{onClick:function(){return f.push("/profile/".concat(e.author.id))}},Object(d.a)(e.author.name))))})),c.a.createElement(l.a,{onClick:a,style:u?null:{display:"none"}},"Load more"))};f.a.div(b()),f.a.div(v()),f.a.div(p()),Object(f.a)(s.a)(m())},72:function(e,n,t){},73:function(e,n,t){"use strict";var r=t(9),a=t(0),c=t.n(a),o=t(34),i=t(66),l=t.n(i),u=t(16),s=t(65),d=t(20);function f(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n"]);return f=function(){return e},e}function m(){var e=Object(r.a)(["\n  border-radius: 10px;\n  margin: 5px 10px;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  font-size: 18px;\n  border-radius: 5px;\n  background-color: var(--background1);\n  padding: 4px;\n  overflow-wrap: break-word;\n"]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  margin: 5px;\n  font-size: 1.3em;\n  text-align: center;\n  color: var(--stroke);\n"]);return p=function(){return e},e}function v(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px 15px 10px;\n  border-radius: 10px;\n  background: var(--background2);\n  cursor: pointer;\n"]);return v=function(){return e},e}n.a=function(e){var n=e.loading,t=e.error,r=e.data;if(t)return"Error :(";var a=Object(u.f)();return c.a.createElement(b,null,c.a.createElement(g,null,"Last Comments"),n?c.a.createElement(o.a,null):r.comments.map((function(e,n){return c.a.createElement(E,{onClick:function(){return a.push("/profile/".concat(e.author.id))},className:"comment-container",key:n},c.a.createElement("div",null,e.text),c.a.createElement(x,null,c.a.createElement("div",null,Object(s.a)(e.author.name)),c.a.createElement("div",null,c.a.createElement(l.a,{fromNow:!0},e.createdAt))))})))};var b=d.a.div(v()),g=d.a.h1(p()),E=d.a.div(m()),x=d.a.div(f())},78:function(e,n,t){},79:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var r=t(84),a=t(67),c=t(0),o=t.n(c),i=t(34),l=t(19),u=t(16),s=t(66),d=t.n(s),f=(t(75),t(65)),m=(t(78),t(25)),p=function(){var e=Object(u.f)(),n=Object(l.c)(m.d,{variables:{orderBy:"createdAt_DESC",first:3}}),t=n.data,r=n.error,a=n.loading;return r?"Error :(":o.a.createElement("div",{className:"users-container"},o.a.createElement("h1",null,"New Users"),a?o.a.createElement(i.a,null):t.users.map((function(n){return o.a.createElement("div",{className:"user-container",key:n.id,onClick:function(){return e.push("profile/".concat(n.id))}},o.a.createElement("div",{className:"userimg"},o.a.createElement("img",{src:n.profilePicture,alt:""})),o.a.createElement("div",{className:"profile"},o.a.createElement("h1",{className:"name"},Object(f.a)(n.name)),o.a.createElement("span",null,o.a.createElement(d.a,{fromNow:!0},n.createdAt))))})))},v=t(71),b=t(73);t(79),n.default=function(){var e=Object(l.c)(m.a,{variables:{orderBy:"createdAt_DESC",first:5}}),n=Object(l.c)(m.b,{variables:{orderBy:"createdAt_DESC",first:6}}),t=Object(c.useState)(!0),i=Object(a.a)(t,2),u=i[0],s=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"homepage-grid"},o.a.createElement("div",{className:"users-grid"},o.a.createElement(p,null)),o.a.createElement("div",{className:"comments-grid"},o.a.createElement(b.a,{data:e.data,loading:e.loading,error:e.error})),o.a.createElement("div",{className:"posts-grid"},o.a.createElement(v.a,{data:n.data,loading:n.loading,error:n.error,hasMorePosts:u,handleLoadMore:function(){console.log("foi"),n.fetchMore({variables:{skip:n.data.posts.length,first:3},updateQuery:function(e,n){var t=n.fetchMoreResult;return t.posts.length?{posts:[].concat(Object(r.a)(e.posts),Object(r.a)(t.posts))}:(s(!1),console.log("foi"),e)}})}}))))}}}]);
//# sourceMappingURL=4.5d143935.chunk.js.map