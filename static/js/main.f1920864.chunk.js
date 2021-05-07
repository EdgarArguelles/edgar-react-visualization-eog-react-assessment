(this["webpackJsonpeog-react-visualization-base"]=this["webpackJsonpeog-react-visualization-base"]||[]).push([[0],{234:function(e,t,r){e.exports=r(388)},388:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(21),i=r.n(c),u=r(37),o=r(121),l=r(222),s=r(36),m=r.n(s),p=r(57),f=r(78),d=r(198),b=r(95);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var v=Object(b.a)({name:"weather",initialState:{metrics:[],realtimeMeasurements:[],historyMeasurements:[]},reducers:{changeSelection:function(e,t){e.metrics.forEach((function(e){return e.isSelected=t.payload.includes(e.name)})),e.realtimeMeasurements=t.payload.map((function(t){return e.realtimeMeasurements.find((function(e){return e.metric===t}))||{metric:t,value:0,at:0,unit:""}})),e.historyMeasurements=t.payload.map((function(t){return e.historyMeasurements.find((function(e){return e.metric===t}))||{metric:t,unit:"",measurements:[]}}))},setMeasurementHistory:function(e,t){e.historyMeasurements=t.payload.map((function(e){var t=e.measurements[0];return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{unit:t?t.unit:""})}))},setRealtimeMeasurements:function(e,t){e.realtimeMeasurements=e.realtimeMeasurements.map((function(e){return e.metric===t.payload.metric?t.payload:e}));var r=e.historyMeasurements.find((function(e){return e.metric===t.payload.metric}));r&&r.measurements.length&&r.measurements.push(t.payload)},metricsDataReceived:function(e,t){e.metrics=t.payload.map((function(e){return{name:e,isSelected:!1}}))},apiErrorReceived:function(e,t){return e}}}),E=v.reducer,O=v.actions,g=m.a.mark(j),y=m.a.mark(w);function j(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.a)(f.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),g)}function w(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(O.apiErrorReceived.type,j);case 2:case"end":return e.stop()}}),y)}var M=Object(b.a)({name:"weather",initialState:{temperatureinCelsius:0,temperatureinFahrenheit:0,description:"",locationName:""},reducers:{weatherDataRecevied:function(e,t){var r=t.payload,a=r.description,n=r.locationName,c=r.temperatureinCelsius;e.temperatureinCelsius=c,e.temperatureinFahrenheit=9*c/5+32,e.description=a,e.locationName=n},weatherApiErrorReceived:function(e,t){return e}}}),x=M.reducer,k=M.actions,S=m.a.mark(N),R=m.a.mark(D);function N(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.a)(f.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),S)}function D(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(k.weatherApiErrorReceived.type,N);case 2:case"end":return e.stop()}}),R)}var q=m.a.mark(A);function A(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)(w);case 2:return e.next=4,Object(p.b)(D);case 4:case"end":return e.stop()}}),q)}var L={dashboard:E,weather:x},C=Object(u.combineReducers)(L),F=r(31),P=r(219),W=r(446),z=r(447),$=(r(245),r(136)),I=r(433),T=r(434),G=r(201),H=r(26),J=r(221),K=r(33),Q=r(199),V=Object(K.b)({url:"https://react.eogresources.com/graphql"}),B=function(){var e="wss://react.eogresources.com/graphql",t=new Q.SubscriptionClient(e,{reconnect:!0});return Object(K.b)({url:e,exchanges:[].concat(Object(J.a)(K.c),[Object(K.d)({forwardSubscription:function(e){return t.request(e)}})])})},U=r(453),X=r(432),Y=r(452),Z=r(7),_=Object(Z.a)((function(e){return{root:{background:e.palette.secondary.main},label:{color:e.palette.primary.main}}}))(Y.a),ee=function(e){var t=e.weather;return{temperatureinFahrenheit:t.temperatureinFahrenheit,description:t.description,locationName:t.locationName}},te=function(){return n.a.createElement(K.a,{value:V},n.a.createElement(re,null))},re=function(){var e=Object(U.a)(),t={latitude:e.latitude||29.7604,longitude:e.longitude||-95.3698},r=Object(F.b)(),c=Object(F.c)(ee),i=c.temperatureinFahrenheit,u=c.description,o=c.locationName,l=Object(K.e)({query:"\nquery($latLong: WeatherQuery!) {\n  getWeatherForLocation(latLong: $latLong) {\n    description\n    locationName\n    temperatureinCelsius\n  }\n}\n",variables:{latLong:t}}),s=Object(H.a)(l,1)[0],m=s.fetching,p=s.data,f=s.error;return Object(a.useEffect)((function(){if(f)r(k.weatherApiErrorReceived({error:f.message}));else if(p){var e=p.getWeatherForLocation;r(k.weatherDataRecevied(e))}}),[r,p,f]),m?n.a.createElement(X.a,null):n.a.createElement(_,{label:"Weather in ".concat(o,": ").concat(u," and ").concat(i,"\xb0")})},ae=Object(G.a)({grow:{flexGrow:1}}),ne=function(){var e=ae();return n.a.createElement(I.a,{position:"static"},n.a.createElement(T.a,null,n.a.createElement($.a,{variant:"h6",color:"inherit",className:e.grow},"edgar-react-visualization's"," EOG React Visualization Assessment"),n.a.createElement(te,null)))},ce=Object(G.a)({wrapper:{height:"100vh"}}),ie=function(e){var t=e.children,r=ce();return a.createElement("div",{className:r.wrapper},t)},ue=r(438),oe=r(435),le=r(454),se=r(448),me=r(436),pe=r(455),fe=r(451),de=r(437),be=Object(G.a)({select:{margin:20,minWidth:"80%"},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2}}),he=function(){return n.a.createElement(K.a,{value:V},n.a.createElement(ve,null))},ve=function(){var e=Object(F.b)(),t=be(),r=Object(F.c)((function(e){return e.dashboard.metrics})),c=Object(K.e)({query:"\nquery {\n  getMetrics\n}\n"}),i=Object(H.a)(c,1)[0],u=i.fetching,o=i.data,l=i.error;return Object(a.useEffect)((function(){if(l)e(O.apiErrorReceived({error:l.message}));else if(o){var t=o.getMetrics;e(O.metricsDataReceived(t))}}),[e,o,l]),u?n.a.createElement(X.a,null):n.a.createElement(oe.a,{className:t.select},n.a.createElement(le.a,null,"Metrics"),n.a.createElement(se.a,{multiple:!0,value:r.filter((function(e){return e.isSelected})).map((function(e){return e.name})),onChange:function(t){return e(O.changeSelection(t.target.value))},input:n.a.createElement(me.a,null),renderValue:function(e){return n.a.createElement("div",{className:t.chips},e.map((function(e){return n.a.createElement(Y.a,{key:e,label:e,className:t.chip})})))}},r.map((function(e){var t=e.name;return n.a.createElement(pe.a,{key:t,value:t},n.a.createElement(fe.a,{checked:!!r.find((function(e){return e.name===t&&e.isSelected}))}),n.a.createElement(de.a,{primary:t}))}))))},Ee=r(439),Oe=r(440),ge=Object(G.a)({card:{padding:10}}),ye=function(){return n.a.createElement(K.a,{value:B()},n.a.createElement(je,null))},je=function(){var e=Object(F.b)(),t=ge(),r=Object(F.c)((function(e){return e.dashboard.metrics})),c=Object(F.c)((function(e){return e.dashboard.realtimeMeasurements})),i=Object(K.f)({query:"\nsubscription {\n    newMeasurement {\n      metric\n      value\n      at\n      unit\n    }\n  }\n"}),u=Object(H.a)(i,1)[0],o=u.data,l=u.error;return Object(a.useEffect)((function(){if(l)e(O.apiErrorReceived({error:l.message}));else if(o){var t=o.newMeasurement;r.find((function(e){return e.name===t.metric&&e.isSelected}))&&e(O.setRealtimeMeasurements(t))}}),[e,o,l,r]),n.a.createElement(ue.a,{container:!0,spacing:2},c.map((function(e){return n.a.createElement(ue.a,{item:!0,sm:12,md:6,lg:4,key:e.metric},n.a.createElement(Ee.a,{elevation:3,className:t.card},n.a.createElement(Oe.a,null,n.a.createElement($.a,{variant:"h6"},e.metric),n.a.createElement($.a,{variant:"h3"},e.value))))})))},we=r(202),Me=r(441),xe=r(442),ke=r(218),Se=r(107),Re=r(103),Ne=r(223),De=function(){var e=Object(F.c)((function(e){return e.dashboard.historyMeasurements})).filter((function(e){return e.measurements.length})),t=["purple","red","orange","brown","blue","green"];return n.a.createElement(Me.a,null,n.a.createElement(xe.a,null,n.a.createElement(ke.a,{dataKey:"at",tick:function(e){var t=e.x,r=e.y,a=e.payload;return n.a.createElement("text",{x:t-20,y:r+15},new Date(a.value).toLocaleString("en-US",{hour:"numeric",minute:"numeric"}))},tickCount:13,type:"number",domain:["left","right"]}),Array.from(new Set(e.filter((function(e){return e.unit})).map((function(e){return e.unit})))).map((function(e){var t="%"===e?5:10,r="%"===e?[0,10,20,30,40,50,60,70,80,90,100]:[];return n.a.createElement(we.a,{key:e,yAxisId:e,domain:["auto","auto"],tickCount:t,ticks:r,label:{value:e,angle:-90,position:"insideTopLeft",dy:10}})})),n.a.createElement(Se.a,{labelFormatter:function(e){return new Date(e).toLocaleString()}}),n.a.createElement(Re.a,null),e.map((function(e,r){return n.a.createElement(Ne.a,{type:"monotone",dataKey:"value",dot:!1,isAnimationActive:!1,stroke:t[r],name:e.metric,key:e.metric,data:e.measurements,yAxisId:e.unit})}))))},qe=Object(G.a)({chart:{width:"100%",height:500}}),Ae=function(){return n.a.createElement(K.a,{value:V},n.a.createElement(Le,null))},Le=function(){var e=qe(),t=Object(F.b)(),r=Object(F.c)((function(e){return e.dashboard.metrics})),c=Object(a.useState)((new Date).getTime()-18e5),i=Object(H.a)(c,1)[0],u=r.filter((function(e){return e.isSelected})).map((function(e){return{metricName:e.name,after:i}})),o=Object(K.e)({query:"\nquery($input: [MeasurementQuery]) {\n  getMultipleMeasurements(input: $input)  {\n    metric\n    measurements {\n      metric\n      value\n      at\n      unit\n    }\n  }\n}\n",variables:{input:u}}),l=Object(H.a)(o,1)[0],s=l.data,m=l.error;return Object(a.useEffect)((function(){if(m)t(O.apiErrorReceived({error:m.message}));else if(s){var e=s.getMultipleMeasurements;t(O.setMeasurementHistory(e))}}),[t,s,m]),n.a.createElement("div",{className:e.chart},n.a.createElement(De,null))},Ce=Object(G.a)({grid:{width:"100%"},select:{textAlign:"right"}}),Fe=function(){var e=Ce(),t=!!Object(F.c)((function(e){return e.dashboard.metrics})).filter((function(e){return e.isSelected})).length;return n.a.createElement(ue.a,{container:!0,spacing:5,className:e.grid},n.a.createElement(ue.a,{item:!0,xs:6},t&&n.a.createElement(ye,null)),n.a.createElement(ue.a,{item:!0,xs:6,className:e.select},n.a.createElement(he,null)),n.a.createElement(ue.a,{item:!0,xs:12},t&&n.a.createElement(Ae,null)))},Pe=function(){var e=Object(o.composeWithDevTools)({}),t=Object(l.a)(),r=Object(u.applyMiddleware)(t),a=Object(u.createStore)(C,e(r));return t.run(A),a}(),We=Object(P.a)({palette:{primary:{main:"rgb(39,49,66)"},secondary:{main:"rgb(197,208,222)"},background:{default:"rgb(226,231,238)"}}}),ze=function(){return n.a.createElement(W.a,{theme:We},n.a.createElement(z.a,null),n.a.createElement(F.a,{store:Pe},n.a.createElement(ie,null,n.a.createElement(ne,null),n.a.createElement(Fe,null),n.a.createElement(f.a,null))))};i.a.render(n.a.createElement(ze,null),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.f1920864.chunk.js.map