(this["webpackJsonpcovid-stat"]=this["webpackJsonpcovid-stat"]||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),o=c(24),i=c.n(o),a=(c(64),c(12)),s=c(113),l=c(109),j=c(112),d=(c(65),c(108)),b=c(106),x=c(110),u=c(111),h=c(2);function O(e){var t=e.country,c=t.Country,r=t.NewConfirmed,n=t.TotalConfirmed,o=t.TotalDeaths,i=t.TotalRecovered;return Object(h.jsx)(l.a,{elevation:3,sx:{width:275,height:200,color:"#fff",borderRadius:"15px",padding:"15px",backgroundColor:"#202124"},children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(u.a,{sx:{fontSize:26},textAlign:"center",gutterBottom:!0,children:c}),Object(h.jsxs)(u.a,{children:["New Confirmed: ",r]}),Object(h.jsxs)(u.a,{children:["Total Confirmed: ",n]}),Object(h.jsxs)(u.a,{children:["Total Deaths: ",o]}),Object(h.jsxs)(u.a,{children:["Total Recovered: ",i]})]})})}function f(e){var t=e.countries,c=Object(r.useState)(""),n=Object(a.a)(c,2),o=n[0],i=n[1],s=Object(r.useState)(t),l=Object(a.a)(s,2),x=l[0],u=l[1];Object(r.useEffect)((function(){u(t.filter((function(e){return e.Country.toLowerCase().includes(o.toLowerCase())})))}),[o,t]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{p:2,children:Object(h.jsx)(d.a,{container:!0,justifyContent:"center",children:Object(h.jsx)(b.a,{sx:{bgcolor:"silver",width:300,borderTopLeftRadius:"15px",borderTopRightRadius:"15px"},label:"Filter",type:"text",value:o,onChange:function(e){i(e.target.value)},variant:"filled"})})}),Object(h.jsx)(d.a,{container:!0,wrap:"wrap",justifyContent:"center",rowSpacing:3,columnSpacing:3,children:x.map((function(e){return Object(h.jsx)(d.a,{item:!0,children:Object(h.jsx)(O,{country:e})},e.ID)}))})]})}function g(e){var t=e.global;return Object(h.jsx)(l.a,{elevation:3,sx:{color:"#fff",borderRadius:"15px",padding:"15px",backgroundColor:"#202124"},children:Object(h.jsxs)(d.a,{container:!0,justifyContent:"center",children:[Object(h.jsx)(d.a,{item:!0,xs:2,children:Object(h.jsx)(u.a,{children:"Global Numbers: "})}),Object(h.jsx)(d.a,{item:!0,xs:8,children:Object(h.jsxs)(d.a,{container:!0,wrap:"wrap",justifyContent:"center",rowSpacing:1,columnSpacing:3,children:[Object(h.jsx)(d.a,{item:!0,xs:6,children:Object(h.jsx)(l.a,{sx:{color:"#000",borderRadius:"15px",backgroundColor:"silver"},children:Object(h.jsxs)(u.a,{textAlign:"center",children:["New Confirmed Cases: ",t.NewConfirmed]})})}),Object(h.jsx)(d.a,{item:!0,xs:6,children:Object(h.jsx)(l.a,{sx:{color:"#000",borderRadius:"15px",backgroundColor:"silver"},children:Object(h.jsxs)(u.a,{textAlign:"center",children:["Total Confirmed Cases: ",t.TotalConfirmed]})})}),Object(h.jsx)(d.a,{item:!0,xs:6,children:Object(h.jsx)(l.a,{sx:{color:"#000",borderRadius:"15px",backgroundColor:"silver"},children:Object(h.jsxs)(u.a,{textAlign:"center",children:["New Deaths: ",t.NewDeaths]})})}),Object(h.jsx)(d.a,{item:!0,xs:6,children:Object(h.jsx)(l.a,{sx:{color:"#000",borderRadius:"15px",backgroundColor:"silver"},children:Object(h.jsxs)(u.a,{textAlign:"center",children:["Total Deaths: ",t.TotalDeaths]})})}),Object(h.jsx)(d.a,{item:!0,xs:6,children:Object(h.jsx)(l.a,{sx:{color:"#000",borderRadius:"15px",backgroundColor:"silver"},children:Object(h.jsxs)(u.a,{textAlign:"center",children:["New Recovered: ",t.NewRecovered]})})}),Object(h.jsx)(d.a,{item:!0,xs:6,children:Object(h.jsx)(l.a,{sx:{color:"#000",borderRadius:"15px",backgroundColor:"silver"},children:Object(h.jsxs)(u.a,{textAlign:"center",children:["Total Recovered: ",t.TotalRecovered]})})})]})})]})})}function p(e){var t=e.date;return Object(h.jsx)(l.a,{elevation:3,children:Object(h.jsx)(j.a,{pb:2,pt:2,width:"100%",bgcolor:"silver",children:Object(h.jsx)(d.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(h.jsxs)(u.a,{variant:"h4",children:["COVID-19 Daily Report: ",t.toDateString()]})})})})}function v(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),c=t[0],n=t[1],o=Object(r.useState)([]),i=Object(a.a)(o,2),d=i[0],b=i[1];Object(r.useEffect)((function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){n(e.Global),b(e.Countries)}))}),[]),console.log("global....",c),console.log("countries....",d);var x=new Date(c.Date);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{date:x}),Object(h.jsx)(s.a,{children:Object(h.jsx)(l.a,{elevation:5,children:Object(h.jsxs)(j.a,{width:"100%",minHeight:"calc(100vh - 80px)",bgcolor:"#35363a",p:3,sx:{color:"#fff"},children:[Object(h.jsx)(g,{global:c}),Object(h.jsx)(f,{countries:d})]})})})]})}i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.9caaf3f6.chunk.js.map