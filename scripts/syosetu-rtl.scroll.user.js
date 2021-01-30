// ==UserScript==
// @name         Syosetu - Horizontal scrolling
// @namespace    https://github.com/torazem
// @version      0.1
// @description  Scroll horizontally using the mouse without holding shift
// @author       Torazem
// @homepageURL  https://github.com/torazem/syosetu-rtl
// @match        https://ncode.syosetu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let honbun = document.getElementById("novel_honbun");
    console.log(honbun);
    if(honbun) {
        honbun.addEventListener('wheel', function(e) {
            e.preventDefault();
            this.scrollLeft -= (e.deltaY * 10);
        });
    }
})();