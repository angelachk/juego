(this.webpackJsonpconnect4=this.webpackJsonpconnect4||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"header":{"letsplay":"Juguemos Connect4!"},"button":{"restartGame":"Reiniciar Juego"},"turno2":{"display2":"Ahora es el turno del jugador 2"},"turno1":{"display1":"Ahora es el turno del jugador 1"},"ganador1":{"gano1":"Ganador es el jugador 1"},"ganador2":{"gano2":"Ganador es el jugador 2"}}')},17:function(e){e.exports=JSON.parse('{"header":{"letsplay":"Lets Play Connect4!"},"button":{"restartGame":"Restart Game"},"turno2":{"display2":"Turn for player 2"},"turno1":{"display1":"Turn for player 1"},"ganador1":{"gano1":"Player 1 wins"},"ganador2":{"gano2":"Player 2 wins"}}')},21:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=(t(26),t(8),t(18)),i=t(10);var s=function(){var e=Object(i.a)("global"),a=Object(c.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",null,r.a.createElement("h1",{className:"App-title"},t("header.letsplay")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"botonIdioma",onClick:function(){return n.changeLanguage("es")}},"ES "),r.a.createElement("button",{className:"botonIdioma",onClick:function(){return n.changeLanguage("en")}},"EN"))},u=t(13),d=t(14),f=t(20),p=t(19),m=function(e){var a=e.cell,t="#fff";1===a?t="red":2===a&&(t="yellow");var n={backgroundColor:t};return r.a.createElement("div",{className:"fichas",style:n})},h=function(e){var a=e.row,t=e.col,n=e.cell,l=e.onClickHandler;return r.a.createElement("div",{className:"fondoTablero",onClick:function(){return l(a,t)}},r.a.createElement(m,{cell:n}))},v=function(e){for(var a=[],t=0;t<7;t++)a.push(r.a.createElement(h,{key:t,cell:e.cells[t],row:e.row,col:t,onClickHandler:e.onClickHandler}));return r.a.createElement("div",{style:{display:"flex"}}," ",a," ")},g=function(e){console.log(e);for(var a=[],t=5;t>=0;t--)a.push(r.a.createElement(v,{key:t,row:t,cells:e.cells[t],onClickHandler:e.onClickHandler}));return r.a.createElement("div",null,a)},E=t(34),y=function(e){Object(f.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(u.a)(this,t),(n=a.call(this,e)).onClickHandler=function(e,a){for(var t=n.state.cells,r=[],l=0;l<6;l++)r.push(t[l].slice());if(n.empate(t)&&(console.log("tie"),n.setState({tie:!0})),!n.state.winner){console.log("temp is"+r);var o=n.rowWhereCoinBeAdded(a);console.log(o),r[o][a]=n.state.player?1:2,n.setState({cells:r,player:!n.state.player},(function(){n.verGanador(o,a)>0&&(console.log("winner"),n.setState({winner:n.state.player?2:1}))}))}},n.rowWhereCoinBeAdded=function(e){for(var a=0;a<6;a++)if(0===n.state.cells[a][e])return a;return-1},n.empate=function(e){for(var a=0;a<e.length;a++)for(var t=0;t<e[a].length;t++)if(0===e[a][t])return!1;return!0},n.restartGame=function(){for(var e=[],a=0;a<6;a++)e.push(new Array(7).fill(0));n.setState({cells:e,tie:!1,player:!1,winner:0})},n.verificaFichasEjeX=function(e,a){for(var t=n.state.cells,r=6,l=n.state.player?2:1;r>=3;){if(t[e][r]===l&&t[e][r-1]===l&&t[e][r-2]===l&&t[e][r-3]===l)return 1;r--}return 0},n.verificaFichasEjeY=function(e,a){var t=n.state.cells,r=n.state.player?2:1;return e>=3&&t[e][a]===r&&t[e-1][a]===r&&t[e-2][a]===r&&t[e-3][a]===r?1:0},n.verGanador=function(e,a){return n.verificaFichasDiagonal(e,a)||n.verificaFichasEjeX(e,a)||n.verificaFichasEjeY(e,a)};for(var r=[],l=0;l<6;l++)r.push(new Array(7).fill(0));return n.state={cells:r,player:!1,winner:0,tie:!1},n}return Object(d.a)(t,[{key:"verificaFichasDiagonal",value:function(e,a){for(var t=this.state.cells,n=this.state.player?2:1,r=e,l=a;r<5&&l<6;)r++,l++;for(;r>=3&&l>=3;){if(t[r][l]===n&&t[r-1][l-1]===n&&t[r-2][l-2]===n&&t[r-3][l-3]===n)return 1;r--,l--}for(var o=e,c=a;o<5&&c>0;)o++,c--;for(;o>=3&&c<=3;){if(t[o][c]===n&&t[o-1][c+1]===n&&t[o-2][c+2]===n&&t[o-3][c+3]===n)return 1;o--,c++}return 0}},{key:"render",value:function(){var e=this,a="";return a=this.state.winner>0?1===this.state.winner?r.a.createElement("p",null,this.props.t("ganador2.gano2")):r.a.createElement("p",null,this.props.t("ganador1.gano1")):this.state.player?r.a.createElement("p",null,this.props.t("turno2.display2")):!this.state.winner&&this.state.tie?r.a.createElement("p",null,"Its a Tie"):r.a.createElement("p",null," ",this.props.t("turno1.display1")),r.a.createElement("div",null,r.a.createElement("p",{className:"status"},a),r.a.createElement(g,{cells:this.state.cells,onClickHandler:this.onClickHandler}),r.a.createElement("button",{className:"reiniciaJuego",onClick:function(){return e.restartGame()}},this.props.t("button.restartGame")))}}]),t}(n.Component),w=Object(E.a)("global")(y);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(s,null)),r.a.createElement("div",{className:"main-board"},r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=t(35),C=t(5),j=t(16),N=t(17);C.a.init({interpolation:{escapeValue:!1},lng:"es",resources:{es:{global:j},en:{global:N}}}),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{i18n:C.a},r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){}},[[21,1,2]]]);
//# sourceMappingURL=main.323b6123.chunk.js.map