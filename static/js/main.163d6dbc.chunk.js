(this.webpackJsonpreactall=this.webpackJsonpreactall||[]).push([[0],{54:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(9),s=c.n(n),r=(c(54),c(20)),i=c.n(r),j=c(29),d=c(25),l=c(2),h=function(){var e=Object(a.useState)("mumbai"),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(d.a)(s,2),h=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=802787c761980a14602ea028deae94b1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),o(a.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"weather",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsxs)("div",{className:"inputdata",children:[Object(l.jsx)("h2",{className:"heading",children:"Weather Report"}),Object(l.jsx)("input",{className:"inputfield",type:"search",placeholder:"enter city name",value:c,onChange:function(e){n(e.target.value)}})]}),h?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("h2",{className:"location",children:[Object(l.jsx)("i",{className:"fa fa-street-view","aria-hidden":"true"})," ",c]}),Object(l.jsxs)("h2",{className:"temp",children:[h.temp," Cel"]}),Object(l.jsxs)("h3",{className:"tempmin_max",children:["min=",h.temp_min," Cel | max=",h.temp_max," Cel"]})]})}):Object(l.jsx)("p",{className:"errormsg",children:"No Data Found"})]})})})},o=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];function s(){return(s=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c.statewise),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"top-div",children:Object(l.jsxs)("h1",{children:[Object(l.jsx)("span",{children:"India"})," Covid-19 Dashboard"]})}),Object(l.jsx)("div",{style:{overflow:"auto"},children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"State"}),Object(l.jsx)("th",{children:"Confirmed"}),Object(l.jsx)("th",{children:"Recovered"}),Object(l.jsx)("th",{children:"Deaths"}),Object(l.jsx)("th",{children:"Active"}),Object(l.jsx)("th",{children:"Updated"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:e.state}),Object(l.jsx)("td",{children:e.confirmed}),Object(l.jsx)("td",{children:e.recovered}),Object(l.jsx)("td",{children:e.deaths}),Object(l.jsx)("td",{children:e.active}),Object(l.jsx)("td",{children:e.lastupdatedtime})]})}))})]})})]})},b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"\u270d\ufe0f Stay Updated India \u270d\ufe0f"}),Object(l.jsx)("p",{children:"Here you can get \u27a1\ufe0f Covid-19 update in india and \u27a1\ufe0f Weather report of different cities."}),Object(l.jsx)("p",{children:"Always wear a mask with proper social distance."}),Object(l.jsx)("h1",{children:'"Jaan Hai To Jahan Hai"'})]})},x=c(17),O=c(45),u=c.n(O),p=c(46),m=c.n(p),f=c(47),v=c.n(f),N=c(81),g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main-div",children:[Object(l.jsx)(N.a,{title:"Home",children:Object(l.jsx)(x.b,{exact:!0,activeClassName:"active_class",to:"/",children:Object(l.jsx)(u.a,{style:{fontSize:50}})})}),Object(l.jsx)(N.a,{title:"Weather",children:Object(l.jsx)(x.b,{exact:!0,activeClassName:"active_class",to:"/Weather",children:Object(l.jsx)(m.a,{style:{fontSize:50}})})}),Object(l.jsx)(N.a,{title:"Covid-19",children:Object(l.jsxs)(x.b,{exact:!0,activeClassName:"active_class",to:"/Covid",children:[" ",Object(l.jsx)(v.a,{style:{fontSize:50}})," "]})})]})})},w=c(4),y=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{}),Object(l.jsx)("h1",{children:"Welcome"}),Object(l.jsx)("h2",{children:"\u25b6\ufe0f Get latest update"}),Object(l.jsxs)(w.c,{children:[Object(l.jsx)(w.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(w.a,{exact:!0,path:"/Weather",component:h}),Object(l.jsx)(w.a,{exact:!0,path:"/Covid",component:o})]})]})};s.a.render(Object(l.jsx)(x.a,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.163d6dbc.chunk.js.map