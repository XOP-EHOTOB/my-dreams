(this["webpackJsonpmy-reams"]=this["webpackJsonpmy-reams"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(36),s=a.n(r),l=a(31),i=a.n(l),u=a(45),m=a.n(u),o=a(50),d=a(25),f=a(24),E=a(33),p=a(11),b=(a(155),a(160)),g=a(161),v=a(162),h=(a(156),a(157),a.p+"static/media/fire.a3c9caab.mp3"),j=a.p+"static/media/fire_img.b9c8e6da.png",O=function(e){var t=e.id,a=e.setAudio,n=(e.setPlaer,e.goView);return c.a.createElement(p.d,{id:t},c.a.createElement(p.e,null,"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0430"),c.a.createElement("div",{className:"audio-fles"},c.a.createElement("img",{className:"audio-fle",src:j,alt:"fire",onClick:function(){a(h),n({currentTarget:{dataset:{story:"song"}}})}})))},y=a.p+"static/media/fire_fon_img.5282ea56.jpg",N=(a(158),function(e){var t=e.id,a=e.volume,r=e.setVolume,s=e.setPlaer;return Object(n.useEffect)((function(){return s(),function(){s()}}),[]),c.a.createElement(p.d,{id:t},c.a.createElement(p.e,null,"\u041f\u043b\u0435\u0435\u0440"),c.a.createElement("div",{className:"song-menu",style:{backgroundImage:"url(".concat(y,")")}},c.a.createElement("div",{className:"equalizer-div"},c.a.createElement("button",{className:"equalizer"},c.a.createElement("span",{className:"eq1"}),c.a.createElement("span",{className:"eq2"}),c.a.createElement("span",{className:"eq3"}),c.a.createElement("span",{className:"eq4"}),c.a.createElement("span",{className:"eq5"})))),c.a.createElement(p.g,{step:1,min:0,max:100,value:Number(100*a),onChange:function(e){return r(e/100)}}),c.a.createElement("div",{className:"active-button",onClick:function(){s()}}))}),w=function(e){var t=e.id;return c.a.createElement(p.d,{id:t},c.a.createElement(p.e,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))},k=function(){var e=Object(n.useState)("home-menu"),t=Object(d.a)(e,2),a=t[0],r=(t[1],Object(n.useState)("home")),s=Object(d.a)(r,2),l=s[0],u=s[1],h=Object(n.useState)(null),j=Object(d.a)(h,2),y=j[0],k=j[1],S=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),q=Object(d.a)(S,2),P=q[0],V=q[1],x=Object(n.useState)(1),C=Object(d.a)(x,2),A=C[0],I=C[1],z=Object(n.useState)(null),_=Object(d.a)(z,2),J=_[0],K=_[1],T=Object(n.useState)(!1),U=Object(d.a)(T,2),W=U[0],B=U[1],G=Object(n.useState)(new Audio),D=Object(d.a)(G,2),F=D[0],H=(D[1],function(){B(!W)});Object(n.useEffect)((function(){F.volume=A}),[A]),Object(n.useEffect)((function(){J&&(F.src=J,F.loop=!0,F.volume=A)}),[J]),Object(n.useEffect)((function(){J&&(W?F.play():F.pause())}),[W]),Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,k(t),V(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=function(e){u(e.currentTarget.dataset.story)};return c.a.createElement(p.a,null,c.a.createElement(p.b,null,c.a.createElement(p.f,{activeView:a},c.a.createElement(f.a,{id:"home-menu"},c.a.createElement(p.c,{activeStory:l,tabbar:c.a.createElement(p.h,null,c.a.createElement(p.i,{onClick:L,selected:"home"===l,"data-story":"home",text:"\u0417\u0432\u0443\u043a\u0438"},c.a.createElement(b.a,{width:28,height:28})),c.a.createElement(p.i,{onClick:L,selected:"song"===l,"data-story":"song",text:"\u0421\u043b\u0443\u0448\u0430\u0442\u044c"},c.a.createElement(g.a,{width:28,height:28})),c.a.createElement(p.i,{onClick:L,selected:"settings"===l,"data-story":"settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},c.a.createElement(v.a,null)))},c.a.createElement(f.a,{id:"home",activePanel:"home",popout:P},c.a.createElement(O,{id:"home",goView:L,setPlaer:H,setAudio:K})),c.a.createElement(f.a,{id:"song",activePanel:"song",popout:P},c.a.createElement(N,{id:"song",setVolume:I,volume:A,setPlaer:H})),c.a.createElement(f.a,{id:"settings",activePanel:"settings",popout:P},c.a.createElement(w,{id:"settings",fetchedUser:y})))))))};i.a.send("VKWebAppInit"),s.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.e0727bd4.chunk.js.map