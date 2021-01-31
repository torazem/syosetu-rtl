// ==UserScript==
// @name         Syosetu - Half to fullwidth numbers and letters
// @namespace    https://github.com/torazem
// @version      0.1.1
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

    const paragraphs = document.querySelectorAll("#novel_honbun>p");

    // For each paragraph
    for (let i = 0; i < paragraphs.length; i++) {
        let inTag = false;  // flag masking html tags e.g. <br/>
        let sb = [];  // string builder

        // For each character in paragraph HTML
        for (let j = 0; j < paragraphs[i].innerHTML.length; j++) {
            let c1 = paragraphs[i].innerHTML[j];
            sb.push(c1);

            if (c1 == "<") {
                inTag = true;
                continue;
            }

            if (c1 == ">") {
                inTag = false;
                continue;
            }

            if (inTag) {
                // Don't convert text belonging to tag.
                // This doesn't apply to text between pairs of tags,
                // e.g. <em>some text</em>
                continue;
            }

            // Do mapping
            let c2 = halfToFullMapping[c1];
            if (c2) {
                sb.pop();
                sb.push(c2);
            }
        }
        // Build string
        paragraphs[i].innerHTML = sb.join("");
    }
})();
