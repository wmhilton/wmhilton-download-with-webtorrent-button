!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n){function t(){"use strict";function e(e){var n=e.currentTarget;if(n.classList.contains("ready"))return n.classList.remove("ready"),n.classList.add("seeding"),!0;if(n.classList.contains("downloading"))return e.preventDefault(),!1;try{var t=new WebTorrent;return t.on("error",function(e){console.error("ERROR: "+e.message)}),t.add(n.dataset.webtorrent,function(e){function t(){var t=e.numPeers+(1===e.numPeers?" peer":" peers"),s=Math.round(100*e.progress)+"%";e.done?e.done&&n.classList.contains("seeding")&&(o.innerText=r.name+" - Ready",i.innerText="Seeding to "+t):(n.style="background-size: 28px 28px, "+s+" 100%, 100%;",o.innerText.endsWith(" - Ready")||(o.innerText=a+" - "+s,i.innerText="Downloading from "+t))}console.log(e);var r;r=1===e.files.length||void 0===n.dataset.file?e.files[0]:e.files.find(function(e){return e.name===n.dataset.file});var o=n.querySelector("span"),i=n.querySelector("sub"),a=o.innerText;n.classList.add("downloading"),t(),setInterval(t,500),r.getBlobURL(function(e,t){if(e)return void window.alert("WebTorrent error: source getBlobURL");n.classList.remove("downloading"),n.classList.add("ready"),o.innerText=r.name+" - Ready",i.innerText="Click to save file",n.href=t,n.download=n.dataset.file})}),e.preventDefault(),!1}catch(e){return console.log(e),!0}}for(var n=document.querySelectorAll("a[data-webtorrent]"),t=0;t<n.length;t++){var r=n[t],o=document.createElement("span");o.innerText=r.innerText;var i=document.createElement("sub");if(WebTorrent.WEBRTC_SUPPORT)i.innerText="Download with WebTorrent",r.addEventListener("click",e);else{console.log("WebRTC is not supported"),r.classList.add("no-webrtc");var a=document.createElement("a");a.href=r.dataset.webtorrent,a.innerText="Download with Bittorrent",i.appendChild(a)}r.innerText="",r.appendChild(o),r.appendChild(i),r.classList.add("init")}}window&&(window.registerWebtorrentLinks=t,t())},function(e,n){},function(e,n,t){t(0),e.exports=t(1)}]);