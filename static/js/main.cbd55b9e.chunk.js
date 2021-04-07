(this["webpackJsonpnrl-fantasy"]=this["webpackJsonpnrl-fantasy"]||[]).push([[0],{23:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(10),s=a.n(n),r=a(16),i=a.n(r),c=(a(23),a(8)),o=a.n(c),l=a(11),d=(a(25),a(17)),p=a(18),b=a(9),h=(a(35),a(26),a(28),{apiKey:"AIzaSyAHN7qi76sqh-ZHSlAGryJEbTvxcsvFJaY",authDomain:"user-database-test-9ee1d.firebaseapp.com",databaseURL:"https://user-database-test-9ee1d.firebaseio.com",projectId:"user-database-test-9ee1d",storageBucket:"user-database-test-9ee1d.appspot.com",messagingSenderId:"425239506606",appId:"1:425239506606:web:decf3cc0780d2d8e9d073f"}),u=new(function(){function e(){Object(d.a)(this,e),b.a.initializeApp(h),this.auth=b.a.auth(),this.db=b.a.firestore,this.u_id=0,this.currentUserID=0,this.currentUsername=""}return Object(p.a)(e,[{key:"getPlayers",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting fantasy player stats lists..."),"fantasyPlayerStats",e.next=4,b.a.database().ref("fantasyPlayerStats").once("value");case 4:for(s in t=e.sent,a=[],t.val())n=t.val()[s],a=n;return console.log("done"),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSeason",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting fantasy player stats lists..."),"fantasyPlayerSeasonStats",e.next=4,b.a.database().ref("fantasyPlayerSeasonStats").once("value");case 4:for(s in t=e.sent,a=[],t.val())n=t.val()[s],a=n;return console.log("done"),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),g=a(14),y=a.n(g),v=a(3),m=function(){var e,t,a="";function s(){return(s=Object(l.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("starting..."),document.getElementById("web-content").style.display="none",a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Computer",n.next=5,u.getPlayers();case 5:return e=n.sent,n.next=8,u.getSeason();case 8:t=n.sent,document.getElementsByClassName("loadingData")[0].style.display="none",c(),i(),document.getElementById("web-content").style.display="block";case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function r(e){if("Mobile"===a)for(var n=0;n<document.getElementsByClassName("canvasChart").length;n+=1)document.getElementsByClassName("canvasChart")[n].style.width="100%",document.getElementsByClassName("canvasChart")[n].style.display="block",document.getElementsByClassName("canvasChart")[n].style.marginLeft="0";for(var s=[],r=0;r<t.length;r++)t[r].player===e&&s.push(t[r]);for(var i=[],c=[],o=[],l=[],d=[],p=[],b=0;b<s.length;b++)i.push(parseInt(s[b].rnd)),c.push(parseInt(s[b].fantasy_points)),o.push("rgba(255, 0, 0, 0.5)"),l.push("rgba(255, 0, 0, 1)"),d.push("rgba(0, 130, 0, 1)"),p.push(parseInt(s[b].price_changes.split("k")[0].replace("$","")));var h=document.getElementById("FantasyScoresID").getContext("2d");new y.a(h,{type:"bar",data:{labels:i,datasets:[{data:c,backgroundColor:o,borderColor:l,borderWidth:1}]},options:{responsive:!0,legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}),h=document.getElementById("PriceChangesID").getContext("2d"),new y.a(h,{type:"line",data:{labels:i,datasets:[{data:p,fill:!1,lineTension:0,borderColor:d,borderWidth:1}]},options:{responsive:!0,legend:{display:!1},scales:{yAxes:[{ticks:{suggestedMin:Math.min.apply(null,p)-20,suggestedMax:Math.min.apply(null,p)+20}}]}}})}function i(){for(var t="",n=0;n<e.length;n++){var s=e[n].player;if(s.split(" ")[1]+", "+s.split(" ")[0]===document.getElementById("playerSelectID").value){var i=e[n].team.split(" ");i=i[i.length-1]+"Class";var c=e[n].photo_link;c.includes("rugbyimages")||(c="https://favim.com/assets/img/avatar-default.jpg"),t+="<div class='playerProfile"+a+"'>",t+="<div class='playerProfileDetails"+a+"'>",t+="<h3>"+e[n].player+"</h3>",t+="<p>"+e[n].team+"</p>",t+="<img src='"+c+"' />",t+="</div>",t+="<div class='playerProfileTable"+a+"'>","nan"!==e[n].opponent_avg?t+="<p><b>Next Opponent:</b> "+e[n].next_opponent+" (averages "+e[n].opponent_avg+")</p>":t+="<p><b>Next Opponent:</b> "+e[n].next_opponent+"</p>","Computer"===a?(t+="<table class='"+i+"'><tbody><tr><th>Price</th><th>Position</th><th>Season Avg</th><th>Break Even</th><th>Ownerage</th><th>PPM</th></tr>",t+="<tr><td>$"+e[n].price+"k</td><td>"+e[n].position+"</td><td>"+e[n].season_avg+"</td><td>"+e[n].break_even+"</td><td>"+e[n].ownerage+"</td><td>"+e[n].ppm+"</td></tr>",t+="</tbody></table></div>",t+="</div>",t+="<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />"):(t+="<table class='"+i+"'><tbody>",t+="<tr><th>Price</th><td>$"+e[n].price+"k</td></tr>",t+="<tr><th>Position</th><td>"+e[n].position+"</td></tr>",t+="<tr><th>Season Avg</th><td>"+e[n].season_avg+"</td></tr>",t+="<tr><th>Break Even</th><td>"+e[n].break_even+"</td></tr>",t+="<tr><th>Ownerage</th><td>"+e[n].ownerage+"</td></tr>",t+="<tr><th>PPM</th><td>"+e[n].ppm+"</td></tr>",t+="</tbody></table></div>",t+="</div>",t+="<br />"),r(e[n].player)}}document.getElementById("myHtml").innerHTML=t}function c(){for(var t="<select id='playerSelectID'>",a=0;a<e.length;a++){var n=e[a].player,s=n.split(" ")[1]+", "+n.split(" ")[0];t+="<option value='"+s+"'>"+s+"</option>"}t+="</select>",document.getElementById("playerSearchID").innerHTML=t}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()})),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("div",{className:"loadingData",children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Getting data from database...",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"spinner loading"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{id:"web-content",children:[Object(v.jsx)("div",{id:"playerSearchID"}),Object(v.jsx)("button",{onClick:i,children:"Search Player"}),Object(v.jsx)("div",{id:"myHtml"}),Object(v.jsxs)("div",{className:"canvases",children:[Object(v.jsxs)("div",{className:"canvasChart",children:[Object(v.jsx)("h4",{children:"Scores this season:"}),Object(v.jsx)("div",{className:"canvasClass",children:Object(v.jsx)("canvas",{id:"FantasyScoresID",width:"100",height:"100"})})]}),Object(v.jsxs)("div",{className:"canvasChart",style:{marginLeft:"20px"},children:[Object(v.jsx)("h4",{children:"Price changes ($):"}),Object(v.jsx)("div",{className:"canvasClass",children:Object(v.jsx)("canvas",{id:"PriceChangesID",width:"100",height:"100"})})]})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.cbd55b9e.chunk.js.map