(this["webpackJsonpmy-reams"]=this["webpackJsonpmy-reams"]||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),i=a.n(r),s=a(30),l=a.n(s),u=a(47),m=a.n(u),o=a(50),d=a(17),f=a(25),p=a(35),E=a(11),b=(a(147),a(152)),g=a(153),j=a(154),O=(a(148),a(149),a.p+"static/media/fire.a3c9caab.mp3"),v=a.p+"static/media/tropical_rain.bee8d08b.mp3",h=a.p+"static/media/fire_img.b9c8e6da.png",N=a.p+"static/media/tropical_rain_img.24528f49.png",y=function(e){var t=e.id,a=e.setAudio,n=(e.setPlaer,e.goView),r=e.setImage;return c.a.createElement(E.e,{id:t},c.a.createElement(E.f,null,"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0430"),c.a.createElement("div",{className:"audio-fles"},c.a.createElement("div",{className:"audio-flex"},c.a.createElement("img",{className:"audio-fle",src:h,alt:"fire",onClick:function(){a(O),r(1),n({currentTarget:{dataset:{story:"song"}}})}}),c.a.createElement("p",null,"\u041a\u043e\u0441\u0442\u0435\u0440 \u0432 \u043f\u043e\u043b\u0435")),c.a.createElement("div",{className:"audio-flex"},c.a.createElement("img",{className:"audio-fle",src:N,alt:"fire",onClick:function(){a(v),r(2),n({currentTarget:{dataset:{story:"song"}}})}}),c.a.createElement("p",null,"\u0422\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u043e\u0436\u0434\u044c"))))},x=a.p+"static/media/fire_fon_img.5282ea56.jpg",S=a.p+"static/media/tropical_rain_fon_img.6e9c5d57.jpg",k=(a(150),function(e){var t=e.id,a=e.setPlaer,r=e.image,i=e.setPopout,s=e.timer,l=e.restartx,u=Object(n.useState)(x),m=Object(d.a)(u,2),o=m[0],f=m[1],p=Object(n.useState)(s.current),b=Object(d.a)(p,2),g=b[0],j=b[1],O=Object(n.useState)(null),v=Object(d.a)(O,2),h=v[0],N=v[1],y=Object(n.useRef)(null),k=Object(n.useState)(!1),I=Object(d.a)(k,2),w=I[0],C=I[1],P=function(){var e=document.getElementById("timer-input").value.split(":");s.current=60*+e[1],s.current+=3600*+e[0],j(s.current),l(),C(!w)};return Object(n.useEffect)((function(){if(!(s.current<0))return j(s.current),y.current=setInterval((function(){j(g-1),N(c.a.createElement("div",{className:"timer-exit"},c.a.createElement("div",{className:"timer-exit-header"},"\u041e\u0422\u041a\u041b\u042e\u0427\u0415\u041d\u0418\u0415 \u0427\u0415\u0420\u0415\u0417: ","".concat(g/3600<10?"0"+(g/3600).toFixed(0):(g/3600).toFixed(0),":").concat(g%3600/60<10?"0"+(g%3600/60).toFixed(0):(g%3600/60).toFixed(0))),c.a.createElement(E.c,{className:"timer-input-button",style:{height:14},onClick:function(){s.current=-1,clearInterval(y.current),C(!w)}},"\u041e\u0442\u043c\u0435\u043d\u0430")))}),1e3),function(){clearInterval(y.current)};j(0),N(c.a.createElement("div",{className:"timer-input-body"},c.a.createElement("div",{className:"timer-input-header"},"\u0410\u0412\u0422\u041e\u041c\u0410\u0422\u0418\u0427\u0415\u0421\u041a\u041e\u0415 \u041e\u0422\u041a\u041b\u042e\u0427\u0415\u041d\u0418\u0415:"),c.a.createElement("div",{className:"timer-input-timer"},c.a.createElement("input",{id:"timer-input",className:"timer-input",type:"time"}),c.a.createElement(E.c,{className:"timer-input-button",onClick:P},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"))))}),[s.current,w]),Object(n.useEffect)((function(){switch(r){case 1:f(x);break;case 2:f(S)}i(c.a.createElement(E.h,{size:"large"})),setTimeout((function(){i(null)}),1e3)}),[]),c.a.createElement(E.e,{id:t},c.a.createElement(E.f,null,"\u041f\u043b\u0435\u0435\u0440"),c.a.createElement("div",{className:"song-menu",style:{backgroundImage:"url(".concat(o,")")}},c.a.createElement("div",{className:"equalizer-div"},c.a.createElement("button",{className:"equalizer"},c.a.createElement("span",{className:"eq1"}),c.a.createElement("span",{className:"eq2"}),c.a.createElement("span",{className:"eq3"}),c.a.createElement("span",{className:"eq4"}),c.a.createElement("span",{className:"eq5"})))),h,c.a.createElement("div",{className:"active-button",onClick:function(){a()}}))}),I=function(e){var t=e.id;return c.a.createElement(E.e,{id:t},c.a.createElement(E.f,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))},w=function(){var e=Object(n.useState)("home-menu"),t=Object(d.a)(e,2),a=t[0],r=(t[1],Object(n.useState)("home")),i=Object(d.a)(r,2),s=i[0],u=i[1],O=Object(n.useState)(null),v=Object(d.a)(O,2),h=v[0],N=v[1],x=Object(n.useState)(c.a.createElement(p.a,{size:"large"})),S=Object(d.a)(x,2),w=S[0],C=S[1],P=Object(n.useRef)(1e3),_=Object(n.useState)(null),q=Object(d.a)(_,2),A=q[0],V=q[1],T=Object(n.useRef)(null),z=Object(n.useState)(null),F=Object(d.a)(z,2),K=F[0],R=F[1],W=Object(n.useState)(!1),B=Object(d.a)(W,2),J=B[0],U=B[1],G=Object(n.useState)(new Audio),D=Object(d.a)(G,2),H=D[0],L=(D[1],Object(n.useState)(!1)),M=Object(d.a)(L,2),Q=M[0],X=M[1],Y=Object(n.useState)(1),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1],te=function(){U(!J)};Object(n.useEffect)((function(){if(console.log(A),!A&&P.current>0){var e=setInterval((function(){0===P.current&&l.a.send("VKWebAppClose",{status:"success",payload:{name:"test"}}),P.current=P.current-1,console.log(P.current),P.current<-1&&(clearInterval(T.current),V(null))}),1e3);T.current=e,V(e)}}),[Q]),Object(n.useEffect)((function(){K&&(J&&U(!J),H.src=K,H.loop=!0)}),[K]),Object(n.useEffect)((function(){K&&(J?H.play():H.pause())}),[J]),Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,N(t),C(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var ae=function(e){u(e.currentTarget.dataset.story)};return c.a.createElement(E.a,null,c.a.createElement(E.b,null,c.a.createElement(E.g,{activeView:a},c.a.createElement(f.a,{id:"home-menu"},c.a.createElement(E.d,{activeStory:s,tabbar:c.a.createElement(E.i,null,c.a.createElement(E.j,{onClick:ae,selected:"home"===s,"data-story":"home",text:"\u0417\u0432\u0443\u043a\u0438"},c.a.createElement(b.a,{width:28,height:28})),c.a.createElement(E.j,{onClick:ae,selected:"song"===s,"data-story":"song",text:"\u0421\u043b\u0443\u0448\u0430\u0442\u044c"},c.a.createElement(g.a,{width:28,height:28})),c.a.createElement(E.j,{onClick:ae,selected:"settings"===s,"data-story":"settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},c.a.createElement(j.a,null)))},c.a.createElement(f.a,{id:"home",activePanel:"home",popout:w},c.a.createElement(y,{id:"home",goView:ae,setPlaer:te,setAudio:R,setImage:ee})),c.a.createElement(f.a,{id:"song",activePanel:"song",popout:w},c.a.createElement(k,{id:"song",setPlaer:te,image:$,setPopout:C,timer:P,setTimer:function(e){P.current=e},restartx:function(){X(!Q)}})),c.a.createElement(f.a,{id:"settings",activePanel:"settings",popout:w},c.a.createElement(I,{id:"settings",fetchedUser:h})))))))};l.a.send("VKWebAppInit"),i.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.46a440a8.chunk.js.map