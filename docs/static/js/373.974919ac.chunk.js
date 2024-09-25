"use strict";(self.webpackChunktv_shows_tracker=self.webpackChunktv_shows_tracker||[]).push([[373],{5006:function(e,n,t){t(2791);var a=t(184);n.Z=function(e){var n=e.variant,t=e.children;return(0,a.jsx)("h3",{className:"alert-".concat(n),children:t})}},6373:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});t(2791);var a=t(6871),r=t(1933),s=t(8152),o=t(5006),i=t(3504),c=t(673),l=t(184),u=function(e){var n=e.show;return(0,l.jsxs)("div",{className:"show",children:[(0,l.jsx)(i.rU,{to:"/shows/".concat(n.id),"aria-label":"See show details",children:(0,l.jsx)("img",{src:n.image?n.image.medium:c.F,alt:n.name,className:"show__image",loading:"lazy"})}),(0,l.jsx)("h4",{className:"show__title",children:n.name}),(0,l.jsx)("p",{className:"show__genres",children:n.genres.join(", ")})]})},d=t(2982);var h=function(e){var n=e.page,t=e.pages,a=n<=2?0:n-3,r=n<=2?5:n+2;return(0,l.jsx)("div",{className:"paginate",children:(0,l.jsx)("ul",{className:"paginate__list",children:(0,d.Z)(Array(t).keys()).slice(a,r).map((function(e){return(0,l.jsx)("li",{className:"paginate__list-item",children:(0,l.jsx)(i.rU,{to:"/shows/page/".concat(e+1),className:"paginate__list-link".concat(e+1===n?" active":""),children:e+1})},e+1)}))})})},m=t(2438),g=t(7351),f=function(){var e,n,t=(0,a.UO)(),i=t.name,c=t.pageNumber,d=(0,r.useQuery)({queryKey:["shows"],queryFn:g.Z.getShows}),f=(0,r.useQuery)({queryKey:["searchedShows",i],queryFn:function(){return g.Z.getShowsByName(i)},retry:5,enabled:!!i}),p=(null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.data)||[],v=(null===f||void 0===f||null===(n=f.data)||void 0===n?void 0:n.data)||[],w=Number(c)||1,y=p.length>0&&Math.ceil(p.length/m.He);return(0,l.jsx)("section",{className:"shows",children:(0,l.jsxs)("div",{className:"content-wrapper",children:[(0,l.jsx)("h1",{className:"shows__title",children:"Shows"}),d.isLoading?(0,l.jsx)(s.Z,{}):d.isError?(0,l.jsx)(o.Z,{variant:"red",children:d.error.message}):(0,l.jsxs)("div",{className:"shows__list",children:[!i&&(null===p||void 0===p?void 0:p.slice(m.He*(w-1),m.He*w).map((function(e){return(0,l.jsx)(u,{show:e},e.id)}))),i&&(null===v||void 0===v?void 0:v.map((function(e){return e.show})).map((function(e){return(0,l.jsx)(u,{show:e},e.id)})))]}),!i&&(0,l.jsx)(h,{page:w,pages:y})]})})}},7351:function(e,n,t){var a=t(4569),r=t.n(a)().create({baseUrl:"https://api.tvmaze.com",headers:{"Content-Type":"application/json"}}),s="https://api.tvmaze.com",o={getShows:function(){return r.get("".concat(s,"/shows"))},getShowsByName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.get("".concat(s,"/search/shows?q=").concat(e))},getShowDetails:function(e){return r.get("".concat(s,"/shows/").concat(e,"?embed[]=episodes&embed[]=cast"))},getEpisodeDetails:function(e){return r.get("".concat(s,"/episodes/").concat(e,"?embed=show"))},getCharacterDetails:function(e){return r.get("".concat(s,"/characters/").concat(e,"?embed=castcredits"))},getPersonDetails:function(e){return r.get("".concat(s,"/people/").concat(e))},getCastCredits:function(e){return r.get("".concat(s,"/people/").concat(e,"/castcredits?embed=show"))}};n.Z=o},673:function(e,n,t){t.d(n,{F:function(){return a}});var a="../images/no-image.jpg"},2438:function(e,n,t){t.d(n,{He:function(){return a},J3:function(){return s},J7:function(){return r}});var a=8,r=5,s=5},2982:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(907);var r=t(181);function s(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=373.974919ac.chunk.js.map