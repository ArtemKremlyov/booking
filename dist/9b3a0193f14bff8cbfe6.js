(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{356:function(t,i,e){},363:function(t,i,e){"use strict";var n=e(356);e.n(n).a},367:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"description"},[e("div",{staticClass:"description__info"},[e("div",{staticClass:"description__control"},[e("button",{staticClass:"description__control-button",on:{click:t.returnBack}})]),e("div",{staticClass:"description__head"},[e("img",{staticClass:"description__img",attrs:{src:"http://books.google.com/books/content?id="+t.nextInfo.id+"&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}}),e("div",{staticClass:"description__infor"},[e("div",{staticClass:"description__info-title"},[t._v(t._s(t.nextInfo.volumeInfo.title))]),t.nextInfo.volumeInfo.authors?e("div",{staticClass:"desctiption__info-author"},[t._v("Автор: "),e("span",[t._v(t._s(t.bookAuthors(t.nextInfo)))])]):t._e(),t.nextInfo.volumeInfo.publishedDate?e("div",{staticClass:"description__info-year"},[t._v("Год: "),e("span",[t._v(t._s(t.nextInfo.volumeInfo.publishedDate))])]):t._e(),t.nextInfo.volumeInfo.ratingsCounte?e("div",{staticClass:"description__info-rating"},[t._m(0),e("div",{staticClass:"description__info-number"},[t._v("Рейтинг: "),e("span",[t._v(t._s(t.nextInfo.volumeInfo.ratingsCount))])])]):t._e(),e("div",{staticClass:"description__info-tools"},[e("button",{staticClass:"description__info-favorites",on:{click:t.addFavorite}},[t._v("В избранное")]),e("button",{staticClass:"description__info-share"},[t._v("Поделиться")])])])])]),e("div",{staticClass:"description__content"},[e("div",{staticClass:"description__content-title"},[t._v("Отрывок книги")]),e("div",{staticClass:"description__content-text"},[t._v(t._s(t.nextInfo.volumeInfo.description)+" ")])])])};n._withStripped=!0;var o=e(126);e(359);function s(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function r(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?s(e,!0).forEach((function(i){c(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(e).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function c(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var a={data:function(){return{favoriteMode:!1,isSelected:!0,isInFavorite:!1}},props:{searchResults:{type:Object,default:function(){return{}},required:!0},nextInfo:{type:Object,default:function(){return{}},required:!0}},computed:r({},Object(o.c)({newFavorites:function(t){return t.favorites}})),methods:r({},Object(o.b)("favorites",["ADD_FAVORITES"]),{addFavorite:function(){console.log("click"),this.ADD_FAVORITES(r({},this.nextInfo)),this.favoriteMode=!0,this.isInFavorite=!0},bookAuthors:function(t){var i=t.volumeInfo.authors;if(i.length<3)i=i.join(" , ");else if(i.length>2){var e=" and "+i.slice(-1);i.pop(),i=i.join(", "),i+=e}else t.volumeInfo.authors||console.log("blank");return i},returnBack:function(){this.favoriteMode=!1,this.$emit("return")},toFavorite:function(){this.$emit("toFavorites")}})},l=(e(363),e(323)),f=Object(l.a)(a,n,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"description__info-stars"},[i("ul",{staticClass:"description__info-list"},[i("li",{staticClass:"description__info-item"}),i("li",{staticClass:"description__info-item"}),i("li",{staticClass:"description__info-item"}),i("li",{staticClass:"description__info-item"}),i("li",{staticClass:"description__info-item"})])])}],!1,null,"ebb28ca2",null);f.options.__file="src/admin/components/full-desc.vue";i.default=f.exports}}]);