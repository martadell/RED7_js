!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var a,r=n(1).Game,l=4,s=l;(a=new r).newGame(l),R(a.players[a.currentPlayer].hand.cards,"hand"),function(){for(var e=0;e<l;e++){var t=a.players[e].palette.cards,n="p".concat(e+1);R(t,n)}}(),document.getElementById("rule").appendChild(B(a.rule));var o=0;document.getElementById("bttnRestart").onclick=function(){return 1==confirm("Do you want to restart the game with the players you selected?")&&(g(),!0)};var c=document.getElementById("bttnPalette");c.onclick=function(){o=1,c.classList.add("selected")};var u=document.getElementById("bttnRule");function h(){if(v(),b(),P(),null!=document.getElementsByClassName("selected"))for(var e=document.getElementsByClassName("selected"),t=0;t<e.length;t++)e[t].classList.remove("selected");if(a.players.length<s&&(document.getElementById(a.loser).classList.add("unavailable"),alert("Oh no! Player "+a.loser.substring(1)+" has lost"),s--),"h"!=o&&-1!=o&&(p(),o=0,document.getElementById("aRule").innerHTML=""),document.getElementById("aPlayer").innerHTML="Player ".concat(a.players[a.currentPlayer].name.substring(1),"'s turn"),a.players.length<2)return alert("Game finished! The winner is Player "+a.players[0].name.substring(1)),g(),!1}u.onclick=function(){o=2,u.classList.add("selected")},document.getElementById("bttnFinish").onclick=function(){return 1==confirm("Are you sure you are done? You may lose the if you don't follow the actual color rule ):")&&(o=4,a.makeAMove(o),h(),!0)};for(var d=document.getElementById("hand").getElementsByClassName("card"),y=function(e){d[e].onclick=function(){if(console.log("abans"),console.log(o),console.log(a.actionRule),1!=a.actionRule||7!=a.actionRule||3!=a.actionRule)return"h"==o||0==o?alert("Please select first your game option"):(document.getElementById("aRule").innerHTML="",-1==o&&(document.getElementById("bttnRule").style.display="block",document.getElementById("bttnFinish").style.display="block",prevAction=null,o=1),a.makeAMove(o,e),1==o&&(o="h",function(){switch(a.actionRule){case 1:a.checkLongestPalette()||(document.getElementById("aRule").innerHTML="Action rule: 1, choose a card from another player's palette",k());break;case 3:a.action3(),document.getElementById("bttnPalette").style.display="none";break;case 5:document.getElementById("aRule").innerHTML="Action rule: 5, select a second card to play to the palette",k();break;case 7:document.getElementById("aRule").innerHTML="Action rule: 7, choose a card from your palette",k();break;default:document.getElementById("aRule").innerHTML=""}}(),5==a.actionRule&&(o=-1),document.getElementById("bttnPalette").style.display="none"),2==o&&(document.getElementById("bttnRule").style.display="none"),h()),console.log("despres"),console.log(o),console.log(a.actionRule),!1}},f=0;f<d.length;f++)y(f);function m(e){for(var t,n=(t=e,document.getElementById(t).getElementsByClassName("card")),r=function(t){n[t].onclick=function(){if(1==a.actionRule||7==a.actionRule)if(a.checkLongestPalette()){if(7==a.actionRule&&a.players[a.currentPlayer].name==e){return 1==confirm("Play card as a new rule? (if not it will be discarded to the deck pile)")?(a.action7(t),h(),p(),document.getElementById("aRule").innerHTML="",!0):(a.action7discard(t),b(),document.getElementById("aRule").innerHTML="",document.getElementById("bttnRule").style.display="block",document.getElementById("bttnFinish").style.display="block",!0)}}else if(console.log("longest"),a.players[a.currentPlayer].name!=e){console.log("game.getPlayerIndexByName(pName): "+a.getPlayerIndexByName(e)),console.log("i: "+t);var n=a.action1(a.getPlayerIndexByName(e),t);console.log("check"+n),0==n&&alert("You selected a player with less cards than you, please choose another one"),1==n&&(document.getElementById("aRule").innerHTML="",document.getElementById("bttnRule").style.display="block",document.getElementById("bttnFinish").style.display="block",b())}}},l=0;l<n.length;l++)r(l)}function g(){var e=document.getElementById("playersNum");if(l=parseInt(e.options[e.selectedIndex].text),s=l,(a=new r).newGame(l),v(),b(),P(),o=0,null!=document.getElementsByClassName("unavailable"))for(var t=document.getElementsByClassName("palette"),n=0;n<4;n++)t[n].className="palette h";if(l<4)for(var c=4;c>l;c--)E("p".concat(c));document.getElementById("aPlayer").innerHTML="Player ".concat(a.players[a.currentPlayer].name.substring(1),"'s turn")}function p(){document.getElementById("bttnPalette").style.display="block",document.getElementById("bttnRule").style.display="block",document.getElementById("bttnFinish").style.display="block"}function k(){document.getElementById("bttnPalette").style.display="none",document.getElementById("bttnRule").style.display="none",document.getElementById("bttnFinish").style.display="none"}function v(){_(a.players[a.currentPlayer].hand.cards,"hand")}function b(){for(i=0;i<l;i++){if(null!=a.players[i])_(a.players[i].palette.cards,a.players[i].name)}}function P(){w(document.getElementById("rule").lastChild,a.rule)}function _(e,t){for(var n=document.getElementById(t).getElementsByClassName("card"),a=0;a<n.length;a++)null==e[a]?(n[a].innerHTML="",n[a].className="card empty"):w(n[a],e[a])}function E(e){for(var t=document.getElementById(e).getElementsByClassName("card"),n=0;n<t.length;n++)t[n].innerHTML="",t[n].className="card empty"}function w(e,t){switch(t.color){case"red":e.className="card red";break;case"orange":e.className="card orange";break;case"yellow":e.className="card yellow";break;case"green":e.className="card green";break;case"blue":e.className="card blue";break;case"indigo":e.className="card indigo";break;case"purple":e.className="card purple"}switch(t.number){case 1:e.innerHTML="1";break;case 2:e.innerHTML="2";break;case 3:e.innerHTML="3";break;case 4:e.innerHTML="4";break;case 5:e.innerHTML="5";break;case 6:e.innerHTML="6";break;case 7:e.innerHTML="7"}}function B(e){var t=document.createElement("div");switch(e.color){case"red":t.className="card red";break;case"orange":t.className="card orange";break;case"yellow":t.className="card yellow";break;case"green":t.className="card green";break;case"blue":t.className="card blue";break;case"indigo":t.className="card indigo";break;case"purple":t.className="card purple"}switch(e.number){case 1:t.append(1);break;case 2:t.append(2);break;case 3:t.append(3);break;case 4:t.append(4);break;case 5:t.append(5);break;case 6:t.append(6);break;case 7:t.append(7)}return t}function R(e,t){for(var n=0;n<e.length;n++)document.getElementById(t).appendChild(B(e[n]));if("p1"==t||"p2"==t||"p3"==t||"p4"==t)for(i=0;i<7;i++)document.getElementById(t).appendChild((a=void 0,(a=document.createElement("div")).className="card empty",a));var a}m("p1"),m("p2"),m("p3"),m("p4")},function(e,t,n){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=n(2).Deck,l=n(4).Palette,s=n(5).Hand,o=n(6).Player,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._deck,this._rule,this._players=[],this._currentPlayer,this._loser,this._actionRule}var t,n,c;return t=e,(n=[{key:"newGame",value:function(e){this._deck=new r,this._deck.createDeck();for(var t=0;t<e;t++){var n=new s;n.createHand(this._deck.takeSeven());var a=new l;a.createPalette(this._deck.takeOne()),this._players.push(new o("p".concat(t+1),n,a))}this._rule=this._deck.takeOne(),this._currentPlayer=0}},{key:"changeRule",value:function(e){this._rule=e}},{key:"makeMove",value:function(e,t,n){
//!! només es fa servir a la versió random
switch(e){case 1:console.log("Case 1: play a hand's card to the palette"),this._players[this.currentPlayer].fromHandToPalette(t),console.log("Palette changed to: "),console.log(this.players[this.currentPlayer].palette.cards),this.compareRulePalettes()?(console.log("OK, next turn!"),this.nextPlayer()):this.loseGame(this.currentPlayer);break;case 2:console.log("Case 2: play a hand's card as a rule"),this.changeRule(this._players[this.currentPlayer].takeCardFromHand(t)),console.log("Rule changed to: "+this.ruleInfo),this.compareRulePalettes()?(console.log("OK, next turn!"),this.nextPlayer()):this.loseGame(this.currentPlayer);break;case 3:console.log("Case 3: play first a hand's card to the palette and then another one as a rule (Case 2)"),this._players[this.currentPlayer].fromHandToPalette(t),console.log("Palette changed to: "+this.players[this.currentPlayer].palette),this.makeMove(2,n);break;case 4:console.log("Case 4: pass (and lose)"),this.loseGame(this.currentPlayer)}}},{key:"makeAMove",value:function(e,t){
//!! versió alternativa per l'html
switch(e){case 1:var n=this.players[this.currentPlayer].hand.cards[t].number;this.checkActionRule(n),this._players[this.currentPlayer].fromHandToPalette(t);break;case 2:this.changeRule(this._players[this.currentPlayer].takeCardFromHand(t)),this.compareRulePalettes()?this.nextPlayer():this.loseGame(this.currentPlayer);break;case 3:this.loseGame(this.currentPlayer);break;case 4:
//!! (next), es crida després del cas 1 si no es vol jugar regla també
this.compareRulePalettes()?this.nextPlayer():this.loseGame(this.currentPlayer)}}},{key:"checkActionRule",value:function(e){this._actionRule=1==e||3==e||5==e||7==e?e:0}},{key:"checkLongestPalette",value:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].palette.length<this.players[this.currentPlayer].palette.length)return!0;return!1}},{key:"action1",value:function(e,t){this._actionRule=0;for(var n=!1,a=0;a<this.players.length;a++)this.players[a].palette.length>this.players[this.currentPlayer].palette.length&&(n=!0);return n?this.players[this.currentPlayer].palette.length<this.players[e].palette.length?(this.deck.addOne(this._players[e].takeCardFromPalette(t)),1):void 0:(console.log("You selected a player with less cards than you, please choose another one"),0)}},{key:"action3",value:function(){this.deck.length>0?this.players[this.currentPlayer].addToHand(this.deck.takeOne()):console.log("Deck run out of cards, can't take another card"),this._actionRule=0}},{key:"action5",value:function(e){this.makeAMove(1,e),this._actionRule=0}},{key:"action7",value:function(e){this.changeRule(this._players[this.currentPlayer].takeCardFromPalette(e)),this.makeAMove(4),this._actionRule=0}},{key:"action7discard",value:function(e){this.deck.addOne(this._players[this.currentPlayer].takeCardFromPalette(e)),this._actionRule=0}},{key:"nextPlayer",value:function(){var e=this;this.players.forEach((function(t,n){n!=e.currentPlayer&&0==t.hand.length&&e.loseGame(n)})),this.currentPlayer+1>=this._players.length?this._currentPlayer=0:this._currentPlayer++}},{key:"loseGame",value:function(e){this._loser=this.players[e].name,console.log("Oh no, "+this.loser+" loses!"),this._players.splice(e,1),e+1>this._players.length&&(this._currentPlayer=0)}},{key:"compareRulePalettes",value:function(){var e=this,t=[];if(this._players.forEach((function(n){t.push(n.getRulePalette(e.rule))})),t.sort((function(e,t){if(0!==e.length){if(e.length>t.length)return-1;if(e.length<t.length)return 1;if(void 0!==e[0]&&void 0!==t[0]&&e.length==t.length)return e[0].isHigher(t[0])?-1:1;if(void 0!==e)return e.isHigher(t)?-1:1}return 0})),0!==t[0].length)if(void 0!==t[0][0]){if(this.players[this.currentPlayer].containsCard(t[0][0]))return!0}else if(void 0!==t[0]&&this.players[this.currentPlayer].containsCard(t[0]))return!0;return!1}},{key:"getPlayerIndexByName",value:function(e){for(var t=0;t<this.players.length;t++)if(this.players[t].name==e)return t}},{key:"deck",get:function(){return this._deck}},{key:"rule",get:function(){return this._rule}},{key:"ruleInfo",get:function(){return this.rule.rule}},{key:"players",get:function(){return this._players}},{key:"currentPlayer",get:function(){return this._currentPlayer}},{key:"actionRule",get:function(){return this._actionRule}},{key:"loser",get:function(){return this._loser}}])&&a(t.prototype,n),c&&a(t,c),e}();t.Game=c},function(e,t,n){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=n(3).Card,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cards=[]}var t,n,l;return t=e,(n=[{key:"createDeck",value:function(){for(var e=["red","orange","yellow","green","blue","indigo","purple"],t=[1,2,3,4,5,6,7],n=0;n<e.length;n++)for(var a=0;a<t.length;a++)this._cards.push(new r(e[n],t[a]));this.shuffleDeck()}},{key:"shuffleDeck",value:function(){for(var e,t,n=this._cards.length;n;)t=Math.floor(Math.random()*n--),e=this._cards[n],this._cards[n]=this._cards[t],this._cards[t]=e}},{key:"takeOne",value:function(){return this._cards.pop()}},{key:"takeSeven",value:function(){for(var e=[],t=0;t<7;t++)e.push(this._cards.pop());return e}},{key:"addOne",value:function(e){this._cards.push(e)}},{key:"getLength",value:function(){return this._cards.length}},{key:"length",get:function(){return this._cards.length}}])&&a(t.prototype,n),l&&a(t,l),e}();t.Deck=l},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._color=t,this._number=n}var t,a,r;return t=e,(a=[{key:"isHigher",value:function(e){return this.number>e.number||this.number==e.number&&this.isHigherColor(e)}},{key:"isHigherColor",value:function(e){var t=["purple","indigo","blue","green","yellow","orange","red"];return t.indexOf(this.color)>t.indexOf(e.color)}},{key:"isSameCard",value:function(e){return this.color==e.color&&this.number==e.number}},{key:"color",get:function(){return this._color}},{key:"rule",get:function(){var e,t=["red","orange","yellow","green","blue","indigo","purple"];switch(this.color){case t[0]:e="red: highest card wins";break;case t[1]:e="orange: highest quant. of same num cards wins";break;case t[2]:e="yellow: highest quant. of same color cards wins";break;case t[3]:e="green: highest quant. of even num cards wins";break;case t[4]:e="blue: highest quant. of dif. color cards wins";break;case t[5]:e="indigo: highest run wins";break;case t[6]:e="purple: highest quant. of num cards < 4 wins"}return e}},{key:"number",get:function(){return this._number}}])&&n(t.prototype,a),r&&n(t,r),e}();t.Card=a},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cards=[]}var t,a,r;return t=e,(a=[{key:"createPalette",value:function(e){this._cards.push(e)}},{key:"sortPalette",value:function(){this._cards.sort((function(e,t){return e.isHigher(t)?-1:t.isHigher(e)?1:0}))}},{key:"sortByColor",value:function(){this._cards.sort((function(e,t){return e.isHigherColor(t)?-1:t.isHigherColor(e)?1:0}))}},{key:"calcHighest",value:function(){return this._cards[0]}},{key:"calcSameNum",value:function(){var e=this._cards[0],t=[[]];return this._cards.forEach((function(n){n.number!=e.number&&t.push([]),t[t.length-1].push(n),e=n})),t.sort((function(e,t){return t.length-e.length})),t[0]}},{key:"calcSameColor",value:function(){this.sortByColor();var e=[[]],t=this._cards[0];return this._cards.forEach((function(n){n.color!==t.color&&e.push([]),e[e.length-1].push(n),t=n})),this.sortPalette(),e.sort((function(e,t){for(;null!=e&&null!=t;)return e.length>t.length?-1:e.length<t.length?1:e.length==t.length?e[0].isHigher(t[0])?-1:1:0})),e[0]}},{key:"calcEvens",value:function(){var e=[];return this._cards.forEach((function(t){t.number%2==0&&e.push(t)})),e}},{key:"calcDifColor",value:function(){this.sortByColor();var e=[this._cards[0]],t=this._cards[0];return this._cards.forEach((function(n){n.color!=t.color&&(e.push(n),t=n)})),this.sortPalette(),e}},{key:"calcRun",value:function(){var e=[],t=this._cards[0];return this._cards.forEach((function(n){n.number-t.number!=-1&&e.push([]),e[e.length-1].push(n),t=n})),e.sort((function(e,t){return t.length-e.length})),e[0]}},{key:"calcBellowFour",value:function(){var e=[];return this._cards.forEach((function(t){t.number<4&&e.push(t)})),e}},{key:"getCardById",value:function(e){return this._cards[e]}},{key:"addToPalette",value:function(e){this._cards.push(e),this.sortPalette()}},{key:"takeFromPalette",value:function(e){if(-1<e&&this.length>e)return this._cards.splice(e,1)[0]}},{key:"containsCard",value:function(e){var t=!1;return this._cards.forEach((function(n){n.isSameCard(e)&&(t=!0)})),t}},{key:"getRulePalette",value:function(e){var t=["red","orange","yellow","green","blue","indigo","purple"],n=[];switch(e.color){case t[0]:n=this.calcHighest();break;case t[1]:n=this.calcSameNum();break;case t[2]:n=this.calcSameColor();break;case t[3]:n=this.calcEvens();break;case t[4]:n=this.calcDifColor();break;case t[5]:n=this.calcRun();break;case t[6]:n=this.calcBellowFour()}return n}},{key:"cards",get:function(){return this._cards}},{key:"length",get:function(){return this._cards.length}}])&&n(t.prototype,a),r&&n(t,r),e}();t.Palette=a},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cards=[]}var t,a,r;return t=e,(a=[{key:"createHand",value:function(e){for(var t=0;t<7;t++)this._cards.push(e[t])}},{key:"addToHand",value:function(e){this._cards.push(e)}},{key:"takeFromHand",value:function(e){if(this._cards.length>0)return this._cards.splice(e,1)[0]}},{key:"length",get:function(){return this._cards.length}},{key:"cards",get:function(){return this._cards}}])&&n(t.prototype,a),r&&n(t,r),e}();t.Hand=a},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._hand=n,this._palette=a}var t,a,r;return t=e,(a=[{key:"fromHandToPalette",value:function(e){this._palette.addToPalette(this.takeCardFromHand(e))}},{key:"takeCardFromHand",value:function(e){return this.hand.takeFromHand(e)}},{key:"takeCardFromPalette",value:function(e){return this.palette.takeFromPalette(e)}},{key:"addToHand",value:function(e){this._hand.addToHand(e)}},{key:"containsCard",value:function(e){return this._palette.containsCard(e)}},{key:"getRulePalette",value:function(e){return this._palette.getRulePalette(e)}},{key:"name",get:function(){return this._name}},{key:"hand",get:function(){return this._hand}},{key:"palette",get:function(){return this._palette}}])&&n(t.prototype,a),r&&n(t,r),e}();t.Player=a}]);