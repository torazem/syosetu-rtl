# Syosetu Right to Left
Styles and scripts for reading [Syosetu](https://syosetu.com/) online novels vertically right-to-left like a real Japanese novel.

## How to use
This assumes you're using FireFox. Each script and stylesheet works independantly, so feel free to mix and match.

### UserCSS stylesheets
1. Install [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us)
2. Once installed, open each of the following links:
   - [Right-to-left](https://raw.githubusercontent.com/torazem/syosetu-rtl/main/styles/syosetu-rtl.user.css)
   - [Light/dark paper modes](https://raw.githubusercontent.com/torazem/syosetu-rtl/main/styles/syosetu-rtl.paper.user.css)
3. Click "Install style" on the left, then close the tab
4. You can switch between light and dark mode by clicking the Stylus extension icon, then clicking the settings cog next to "Syosetu - Light/dark paper modes"

### Tampermonkey scripts
1. Install [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey)
2. Once installed, open each of the following links:
   - [Half to fullwidth numbers and letters](https://raw.githubusercontent.com/torazem/syosetu-rtl/main/scripts/syosetu-rtl.fullwidth.user.js)
   - [Horizontal scrolling](https://raw.githubusercontent.com/torazem/syosetu-rtl/main/scripts/syosetu-rtl.scroll.user.js)
3. Click "Install" then close the tab

## Tested with
- Firefox 84.0.2
- [Stylus](https://add0n.com/stylus.html) 1.5.13
- [Tampermonkey](https://www.tampermonkey.net) 4.11.6120

## License and credits
The paper backgrounds used in `syosetu-rtl.paper.user.css` are from [Toptal Subtle Patterns](https://www.toptal.com/designers/subtlepatterns) and fall under creative commons licence [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/). All other scripts and stylesheets are [unlicensed](https://unlicense.org/).

## Disclaimers
- I am not affiliated with Syosetu in any way; I just enjoy the novels on their site.
- I'm not actively maintaining this repo; please do feel free to fork and reuse all you like!
