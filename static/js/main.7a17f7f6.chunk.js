(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var c=o(0),s=o.n(c),n=o(2),a=o.n(n),r=(o(12),o(3)),i=o(4),l=o(5),u=o(6),h=function(e){var t=e.results,o=t.yourChoice,c=t.computerChoice;return 1===o&&3===c||2===o&&1===c||3===o&&2===c?s.a.createElement("h1",{className:"won"},"You Won!"):1===o&&2===c||2===o&&3===c||3===o&&1===c?s.a.createElement("h1",{className:"lost"},"You Lost!"):o===c?s.a.createElement("h1",{className:"draw"},"Draw!"):s.a.createElement("h1",null)},m=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"title"},"Rock - Paper - Scissors"),s.a.createElement("div",null,"Choose your choice:"),s.a.createElement("img",{alt:"Rock",onClick:e.choiceRock,style:{cursor:"pointer"},width:"9%",src:"https://static.thenounproject.com/png/477918-200.png"}),s.a.createElement("img",{alt:"Paper",onClick:e.choicePaper,style:{cursor:"pointer"},width:"9%",src:"https://static.thenounproject.com/png/477922-200.png"}),s.a.createElement("img",{alt:"Scissors",onClick:e.choiceScissors,style:{cursor:"pointer"},width:"9%",src:"https://static.thenounproject.com/png/477919-200.png"}),s.a.createElement("div",null,s.a.createElement("span",{style:{cursor:"pointer"},onClick:e.clearState},"Reset")),s.a.createElement("div",null,"Games: ",e.games))},p=function(e){var t=e.allstates,o=t.rock,c=t.paper,n=t.scissors,a=t.computerChoice;return 1===a?s.a.createElement("div",{className:"result"},s.a.createElement("div",null,"Computer")," ",s.a.createElement("img",{alt:"Rock",width:"70%",src:o})):2===a?s.a.createElement("div",{className:"result"},s.a.createElement("div",null,"Computer")," ",s.a.createElement("img",{alt:"Paper",width:"70%",src:c})):3===a?s.a.createElement("div",{className:"result"},s.a.createElement("div",null,"Computer")," ",s.a.createElement("img",{alt:"Scissors",width:"70%",src:n})):null},d=function(e){var t=e.allstates,o=t.rock,c=t.paper,n=t.scissors,a=t.yourChoice;return 1===a?s.a.createElement("div",{className:"result"},s.a.createElement("div",null,"You")," ",s.a.createElement("img",{alt:"Rock",width:"70%",src:o})):2===a?s.a.createElement("div",{className:"result"},s.a.createElement("div",null,"You")," ",s.a.createElement("img",{alt:"Paper",width:"70%",src:c})):3===a?s.a.createElement("div",{className:"result"},s.a.createElement("div",null,"You")," ",s.a.createElement("img",{alt:"Scissors",width:"70%",src:n})):null},g=function(e){return 1===e.yourChoice&&3===e.computerChoice||2===e.yourChoice&&1===e.computerChoice||3===e.yourChoice&&2===e.computerChoice?(e.wins.push(1),s.a.createElement("h2",null,"Wins: ",e.wins.length," - Draws: ",e.draws.length," - Losses: ",e.losses.length)):1===e.yourChoice&&2===e.computerChoice||2===e.yourChoice&&3===e.computerChoice||3===e.yourChoice&&1===e.computerChoice?(e.losses.push(1),s.a.createElement("h2",null,"Wins: ",e.wins.length," - Draws: ",e.draws.length," - Losses: ",e.losses.length)):e.computerChoice===e.yourChoice?(e.draws.push(1),s.a.createElement("h2",null,"Wins: ",e.wins.length," - Draws: ",e.draws.length," - Losses: ",e.losses.length)):null===e.computerChoice&&""===e.yourChoice?s.a.createElement("h2",null,"Wins: ",e.wins.length," - Draws: ",e.draws.length," - Losses: ",e.losses.length):null},w=(o(13),function(e){Object(u.a)(o,e);var t=Object(l.a)(o);function o(){var e;Object(r.a)(this,o);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).draws=[],e.losses=[],e.wins=[],e.state={games:0,yourChoice:"",computerChoice:null,rock:"https://static.thenounproject.com/png/477918-200.png",paper:"https://static.thenounproject.com/png/477922-200.png",scissors:"https://static.thenounproject.com/png/477919-200.png"},e.computerChoice=function(){e.setState({computerChoice:Math.floor(3*Math.random())+1})},e.choiceRock=function(){e.setState({yourChoice:1,games:e.state.games+1}),e.computerChoice()},e.choicePaper=function(){e.setState({yourChoice:2,games:e.state.games+1}),e.computerChoice()},e.choiceScissors=function(){e.setState({yourChoice:3,games:e.state.games+1}),e.computerChoice()},e.clearState=function(){e.losses=[],e.wins=[],e.draws=[],e.setState({yourChoice:"",computerChoice:null,games:0})},e}return Object(i.a)(o,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{games:this.state.games,clearState:this.clearState,choiceRock:this.choiceRock,choicePaper:this.choicePaper,choiceScissors:this.choiceScissors,yourChoice:this.state.yourChoice,computerChoice:this.state.computerChoice}),s.a.createElement("div",{className:"effects"},s.a.createElement(d,{allstates:this.state}),s.a.createElement(p,{allstates:this.state})),s.a.createElement(h,{results:this.state}),s.a.createElement(g,{wins:this.wins,losses:this.losses,draws:this.draws,yourChoice:this.state.yourChoice,computerChoice:this.state.computerChoice}))}}]),o}(s.a.Component)),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Rock-Paper-Scissors",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Rock-Paper-Scissors","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var c=o.headers.get("content-type");404===o.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},7:function(e,t,o){e.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7a17f7f6.chunk.js.map