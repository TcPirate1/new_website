(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`cmdinput`),t=document.getElementById(`output`),n=document.getElementById(`outputBox`);e.addEventListener(`keydown`,t=>{if(t.key===`Enter`){let t=e.value.trim();if(!t)return;a(t)}});function r(e,t){Object.keys(t).forEach(n=>{e.setAttribute(n,t[n])})}function i(e){return e==`ua`?navigator.userAgent:`Could not retrieve ${e}`}function a(e){let[r]=e.split(` `);switch(r.toLowerCase()){case`help`:u(` Commands:
  help        Show avaliable commands
  ip          Ip-address for current user
  ua          Shows user-agent info (browser, OS etc.)
  cd          Show links for nerd fonts and dracula theme
  ex          Show experience text
  about       Show about information
  contact     Show contact form
  cls         Clear screen
`);break;case`ip`:n?.replaceChildren(t),t.textContent=i(r);break;case`ua`:n?.replaceChildren(t),t.textContent=i(r);break;case`cd`:l();break;case`ex`:n?.replaceChildren(t),c();break;case`about`:n?.replaceChildren(t),o();break;case`contact`:n?.replaceChildren(t),s();break;case`cls`:n?.replaceChildren(t),t?.replaceChildren();break;default:u(`Command not found: ${r}`),t.style.textAlign=`center`}}function o(){t.textContent=`
Hello my name is Terence and I'm a developer that
graduated at the end of 2024 (yeah not a great time)
and here are a couple of things about me:

1. I like GNU/Linux and have almost gone through the whole range.
From Mint to testing all the Arch-based distros to settling on base Arch.
I made this website because I got inspired by other websites and wanted to
make a more interactive version of them.

2. I love purple. Still in the process of converting everything I own and
look at but it'll happen eventually.

3. I have been enjoying writing at the moment so if this is starting to
drag that's why.

4. The font and symbols you see on this site is proudly brought to you by Nerd Fonts
and the Dracula theme.

I am currently trying to enjoy my time instead of exhausting myself
and never enjoying anything along the way.

This website is the beginning of that!
`}function s(){t.style.textAlign=`center`,t.textContent=`terence89chen@gmail.com`}function c(){t.textContent=`Front-end: 󰌝 | 󰌜 | 󰌞 | 󰛦 |

    Back-end: 󰌠 |  | 󰙲 |

    Frameworks: 󰜈 |  |  |  |
    
    Misc:  | 󰣭 | 󰕈 | 󱘊 | 󰣇 |`}function l(){let e=document.createElement(`a`);r(e,{href:`https://www.nerdfonts.com/font-downloads`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),e.textContent=`Nerd fonts`;let i=document.createElement(`a`);r(i,{href:`https://draculatheme.com/dracula-css`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),i.textContent=`Dracula CSS`;let a=document.createElement(`a`);r(a,{href:`https://github.com/catppuccin/palette`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),a.textContent=`Catppuccin CSS`,t.replaceWith(e),n?.appendChild(i),n?.appendChild(a),n.style.flexDirection=`column`}function u(e){n?.replaceChildren(t),t.replaceChildren(),t.style.padding=`15px`,t.style.textAlign=`left`,t.textContent+=e}