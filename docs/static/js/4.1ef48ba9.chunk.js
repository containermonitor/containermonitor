(this["webpackJsonpcra-template-rb"]=this["webpackJsonpcra-template-rb"]||[]).push([[4],{542:function(e,t,a){"use strict";a.r(t),a.d(t,"IndexPage",(function(){return c}));var n=a(87),l=a(0),r=a(125),o=a(22);function c(){var e=l.useState(0),t=Object(n.a)(e,2),a=t[0],c=(t[1],Object(o.f)());return Object(l.useEffect)((function(){var e=localStorage.getItem("api_token");localStorage.getItem("refresh_token"),localStorage.getItem("token_expiry");null===e||void 0===e||""===e?c.push("/auth/login"):c.push("/system/dashboard")}),[a]),l.createElement(l.Fragment,null,l.createElement(r.a,null,l.createElement("title",null,"Index Page"),l.createElement("meta",{name:"description",content:"A Boilerplate application homepage"})),l.createElement("span",null,"Index Controller"))}}}]);