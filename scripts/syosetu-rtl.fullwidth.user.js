// ==UserScript==
// @name         Syosetu - Half to fullwidth numbers and letters
// @namespace    https://github.com/torazem
// @version      0.1
// @description  Converts halfwidth numbers and letters to fullwidth in Syosetu.com
// @author       Torazem
// @homepageURL  https://github.com/torazem/syosetu-rtl
// @match        https://ncode.syosetu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const halfToFullMapping = {
        "0": "０",
        "1": "１",
        "2": "２",
        "3": "３",
        "4": "４",
        "5": "５",
        "6": "６",
        "7": "７",
        "8": "８",
        "9": "９",
        "A": "Ａ",
        "B": "Ｂ",
        "C": "Ｃ",
        "D": "Ｄ",
        "E": "Ｅ",
        "F": "Ｆ",
        "G": "Ｇ",
        "H": "Ｈ",
        "I": "Ｉ",
        "J": "Ｊ",
        "K": "Ｋ",
        "L": "Ｌ",
        "M": "Ｍ",
        "N": "Ｎ",
        "O": "Ｏ",
        "P": "Ｐ",
        "Q": "Ｑ",
        "R": "Ｒ",
        "S": "Ｓ",
        "T": "Ｔ",
        "U": "Ｕ",
        "V": "Ｖ",
        "W": "Ｗ",
        "X": "Ｘ",
        "Y": "Ｙ",
        "Z": "Ｚ",
        "a": "ａ",
        "b": "ｂ",
        "c": "ｃ",
        "d": "ｄ",
        "e": "ｅ",
        "f": "ｆ",
        "g": "ｇ",
        "h": "ｈ",
        "i": "ｉ",
        "j": "ｊ",
        "k": "ｋ",
        "l": "ｌ",
        "m": "ｍ",
        "n": "ｎ",
        "o": "ｏ",
        "p": "ｐ",
        "q": "ｑ",
        "r": "ｒ",
        "s": "ｓ",
        "t": "ｔ",
        "u": "ｕ",
        "v": "ｖ",
        "w": "ｗ",
        "x": "ｘ",
        "y": "ｙ",
        "z": "ｚ"
    };

    function convert(c) {
        console.log("Replaced " + c + " with fullwidth equivalent");
        return halfToFullMapping[c];
    }

    var paragraphs = document.querySelectorAll("#novel_honbun>p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = paragraphs[i].innerText.replace(/\w/g, convert);
    }
})();