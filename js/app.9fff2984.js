(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],m=0,f=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0034":function(t,e,a){},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"0e59":function(t,e,a){},"305d":function(t,e,a){"use strict";var s=a("6199"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"body"},[a("Fixed"),a("Header"),a("Intro"),a("AboutMe"),a("MyWorks"),a("Contact")],1),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{ref:"header",staticClass:"header"},[a("div",{staticClass:"subHeader"},[a("a",{staticClass:"logo-link",attrs:{href:"/"}},[a("svg",{staticClass:"logo",attrs:{id:"logo",width:"101",height:"99",viewBox:"0 0 101 99",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"textM",attrs:{d:"M41.6362 36.4394L50.0034 57.3222L58.3706 36.4394H62.7476V62.0331H59.3726V52.0663L59.689 41.3085L51.2866 62.0331H48.7026L40.3179 41.3613L40.6519 52.0663V62.0331H37.2769V36.4394H41.6362Z",stroke:"#64FFDA","stroke-width":"1"}}),a("path",{staticClass:"circle",attrs:{d:"M98.7825 49.6381C98.7825 76.0248 77.0286 97.4576 50.1413 97.4576C23.254 97.4576 1.5 76.0248 1.5 49.6381C1.5 23.2513 23.254 1.81851 50.1413 1.81851C77.0286 1.81851 98.7825 23.2513 98.7825 49.6381Z",stroke:"#64FFDA","stroke-width":"3"}})])]),a("svg",{ref:"ham",staticClass:"ham ham6",attrs:{viewBox:"0 0 100 100",width:"80",onclick:"this.classList.toggle('active')"},on:{click:t.openNav}},[a("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"}}),a("path",{staticClass:"line middle",attrs:{d:"m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"}}),a("path",{staticClass:"line bottom",attrs:{d:"m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"}})]),a("nav",{ref:"nav",staticClass:"nav"},[a("ul",{staticClass:"nav-links"},[a("li",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#aboutme"},on:{click:t.openNav}},[a("span",{staticClass:"numbers"},[t._v("01.")]),t._v(" About me ")])]),a("li",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#myworks"},on:{click:t.openNav}},[a("span",{staticClass:"numbers"},[t._v("02.")]),t._v(" My works ")])]),a("li",[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#contact"},on:{click:t.openNav}},[a("span",{staticClass:"numbers"},[t._v("03.")]),t._v(" Contact Me ")])])])])])])},o=[],c={data:function(){return{navbarOpen:!1,prevScrollpos:0}},methods:{openNav:function(){if(window.screen.width<=768){var t=this.$refs.nav.classList,e=this.$refs.ham.classList;t.contains("open-nav")?t.remove("open-nav"):t.add("open-nav"),e.contains("ham-open")?e.remove("ham-open","active"):e.add("ham-open","active")}},handleScroll:function(){var t=window.pageYOffset,e=this.$refs.header;this.prevScrollpos>t?(e.style.top="0",e.classList.add("addingShadow"),0==window.pageYOffset&&e.classList.remove("addingShadow")):(e.style.top="-10em",e.classList.remove("addingShadow")),this.prevScrollpos=t}},created:function(){this.prevScrollpos=window.pageYOffset,window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},l=c,u=(a("8680"),a("2877")),m=Object(u["a"])(l,r,o,!1,null,"3e5837fa",null),f=m.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex"},[a("div",{staticClass:"intro"},[a("h2",{staticClass:"hi"},[t._v("Hi, my name is")]),a("h1",{staticClass:"name"},[t._v("M. Mücahit Tezcan.")]),a("h1",{staticClass:"build"},[t._v("I build things for the web.")]),a("a",{staticClass:"btn",attrs:{href:"mailto:mmucahit.tezcan@gmail.com"}},[t._v("Get In Touch")])])])}],p=(a("305d"),{}),v=Object(u["a"])(p,h,d,!1,null,"4dac07dd",null),b=v.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"flex",attrs:{id:"aboutme"}},[s("div",{staticClass:"flex-row"},[s("div",{staticClass:"aboutme"},[s("h1",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"aboutme_title"},[s("span",{staticClass:"numbers"},[t._v("01.")]),t._v(" About Me ")]),s("p",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"aboutme_body"},[t._v(" Hello! I'm Mücahit, a software developer based in Istanbul, I develop websites, bots and web apps. ")]),s("p",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"aboutme_body"},[t._v(" Shortly after graduating from "),s("span",{staticClass:"color-accent"},[t._v("Istanbul Arel University")]),t._v(" , I worked more on "),s("span",{staticClass:"color-accent"},[t._v("JavaScript")]),t._v(" and i watched a lot front end courses form Scrimba, Frontend Masters ... and more. I'm still learning ")]),s("ul",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"skills"},[s("li",[t._v("JavaScript (ES6+)")]),s("li",[t._v("Vue")]),s("li",[t._v("React")]),s("li",[t._v("Node.JS")]),s("li",[t._v("HTML & (S)CSS")]),s("li",[t._v("GraphQL")]),s("li",[t._v("Express")])])]),s("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"imageme"},[s("img",{attrs:{src:a("9f2c"),alt:"thats me!"}})])])])},g=[],_=(a("c6a6"),{}),C=Object(u["a"])(_,w,g,!1,null,"fb8c9caa",null),y=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex myworks",attrs:{id:"myworks"}},[a("h1",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"mywork_title"},[a("span",{staticClass:"numbers"},[t._v("02.")]),t._v(" Some Things I've Built ")]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"box-grid"},t._l(t.sliceRepo,(function(e){return a("div",{key:e.id,staticClass:"box"},[a("div",{staticClass:"links"},[a("svg",{staticClass:"folder",attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 60 60"}},[a("title",[t._v("Folder")]),a("path",{attrs:{d:"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"}})]),a("a",{staticClass:"link",attrs:{href:e.url}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),a("div",{staticClass:"boxFlex"},[a("div",{staticClass:"box_body"},[a("h2",{staticClass:"box_title"},[t._v(t._s(e.name))])]),a("div",{staticClass:"box_footer"},[a("p",{staticClass:"box_footer_text"},[t._v(t._s(e.description))])])])])})),0),a("a",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"btn",attrs:{href:"https://github.com/FocusThen"}},[t._v("See All")])])},M=[],k=(a("a4d3"),a("e01a"),a("d81d"),a("fb6a"),a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),S={data:function(){return{repo:""}},computed:{sliceRepo:function(){return this.repo.slice(0,10)}},created:function(){this.getRepos()},methods:{getRepos:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/FocusThen/repos?visibility=public&sort=created&per_page=100");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,s=a.map((function(t){return{name:t.name,description:t.description,url:t.html_url}})),this.repo=s;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},O=S,F=(a("5dfe"),Object(u["a"])(O,x,M,!1,null,"1827d2fe",null)),j=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex flex-center",attrs:{id:"contact"}},[a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"contact"},[a("h2",{staticClass:"whats"},[t._v("03. What's Next?")]),a("h1",{staticClass:"touch"},[t._v("Get In Touch")]),a("p",{staticClass:"text"},[t._v(" Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email! ")]),a("a",{staticClass:"btn",attrs:{href:"mailto:mmucahit.tezcan@gmail.com"}},[t._v("Say Hello")])])])},T=[],z=(a("ff25"),{}),H=Object(u["a"])(z,L,T,!1,null,"2b1d15c4",null),I=H.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hide"},[a("div",{staticClass:"left-fixed"},[a("ul",{staticClass:"social-links"},[a("li",[a("a",{attrs:{href:"https://github.com/FocusThen"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/m-m%C3%BCcahit-tezcan/"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)]),a("li",[a("a",{attrs:{href:"https://codepen.io/focusthen"}},[a("font-awesome-icon",{attrs:{icon:["fab","codepen"]}})],1)]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/wchttzcn/"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),a("li",[a("a",{attrs:{href:"https://twitter.com/FocusThen"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])]),t._m(0)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-fixed"},[a("a",{staticClass:"mail",attrs:{href:"mailto:mmucahit.tezcan@gmail.com"}},[t._v("mmucahit.tezcan@gmail.com")])])}],$=(a("e699"),{}),A=Object(u["a"])($,N,E,!1,null,"3fb28c9d",null),P=A.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("ul",{staticClass:"social-links"},[a("li",[a("a",{attrs:{href:"https://github.com/FocusThen"}},[a("i",{staticClass:"ri-github-fill"})])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/m-m%C3%BCcahit-tezcan/"}},[a("i",{staticClass:"ri-linkedin-fill"})])]),a("li",[a("a",{attrs:{href:"https://codepen.io/focusthen"}},[a("i",{staticClass:"ri-codepen-fill"})])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/wchttzcn/"}},[a("i",{staticClass:"ri-instagram-line"})])]),a("li",[a("a",{attrs:{href:"https://twitter.com/Wchttzcn"}},[a("i",{staticClass:"ri-twitter-fill"})])])]),a("a",{staticClass:"credit",attrs:{href:"https://github.com/FocusThen/MyPortfolio-Vue"}},[t._v("Redesigned & Built by M. Mücahit Tezcan")])])}],B=(a("6eb6"),{}),D=Object(u["a"])(B,R,V,!1,null,null,null),J=D.exports,W={name:"App",data:function(){return{logo:"https://user-images.githubusercontent.com/47830409/83949964-caf1e080-a82f-11ea-86ea-52026fcafbab.png"}},components:{Header:f,Intro:b,AboutMe:y,MyWorks:j,Contact:I,Footer:J,Fixed:P},metaInfo:function(){return{meta:[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:"https://focusthen.tech/"},{name:"twitter:title",content:"M. Mücahit Tezcan | Frontend Developer"},{name:"twitter:creator",content:"@Focusthen"},{name:"twitter:description",content:"Hi, my name is M. Mücahit Tezcan.I build things for the web."},{name:"twitter:image:alt",content:"M. Mücahit Tezcan | Frontend Developer"},{name:"twitter:image",content:this.logo},{property:"og:title",content:"M. Mücahit Tezcan | Frontend Developer"},{property:"og:site_name",content:"M. Mücahit Tezcan | Frontend Developer"},{property:"og:type",content:"website"},{property:"og:url",content:"https://focusthen.tech/"},{property:"og:image",content:this.logo},{property:"og:description",content:"Hi, my name is M. Mücahit Tezcan.I build things for the web."}]}}},G=W,Y=(a("034f"),Object(u["a"])(G,n,i,!1,null,null,null)),Z=Y.exports,Q=a("ecee"),U=a("f2d1"),q=a("ad3d"),K=a("45e3"),X=a("58ca"),tt=(a("4160"),a("159b"),new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("enter"),e.unobserve(t.target))}))}))),et={bind:function(t){t.classList.add("before-enter"),tt.observe(t)}};Q["c"].add(U["b"],U["e"],U["c"],U["a"],U["d"]),s["a"].component("font-awesome-icon",q["a"]),s["a"].use(K["a"]),s["a"].use(X["a"]),s["a"].directive("scrollanimation",et),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Z)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"591d":function(t,e,a){},"5dfe":function(t,e,a){"use strict";var s=a("591d"),n=a.n(s);n.a},6199:function(t,e,a){},"6eb6":function(t,e,a){"use strict";var s=a("0e59"),n=a.n(s);n.a},7171:function(t,e,a){},"85ec":function(t,e,a){},8680:function(t,e,a){"use strict";var s=a("0034"),n=a.n(s);n.a},"9f2c":function(t,e,a){t.exports=a.p+"img/me.5c954166.png"},a8e6:function(t,e,a){},b872:function(t,e,a){},c6a6:function(t,e,a){"use strict";var s=a("a8e6"),n=a.n(s);n.a},e699:function(t,e,a){"use strict";var s=a("b872"),n=a.n(s);n.a},ff25:function(t,e,a){"use strict";var s=a("7171"),n=a.n(s);n.a}});