"use strict";document.addEventListener("DOMContentLoaded",function(){document.body.classList.remove("preload");var e=document.querySelector(".page-header-nav__btn"),a=document.querySelector(".page-header-nav__list");e.addEventListener("click",function(e){e.preventDefault(),a.classList.add("active"),document.body.classList.add("overlay")}),window.addEventListener("click",function(e){var t=e.target.classList;!a.classList.contains("active")||t.contains("page-header-nav__btn")||t.contains("btn__line")||!t.contains("page-header-nav__link")&&t.contains("page-header-nav__list")||(a.classList.remove("active"),document.body.classList.remove("overlay"))})},!1);