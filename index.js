import{S as m,a as f,i as n}from"./assets/vendor-5bY836Yj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery");function d(i){const t=i.map(({webformatURL:o,largeImageURL:e,tags:r,likes:a,views:c,comments:p,downloads:u})=>`<li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${r}"/>
        <ul class="gallery-image-props-list">
        <li class="image-prop-item"><p class="item-prop-txt">Likes</p><p>${a}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Views</p><p>${c}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Comments</p><p>${p}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Downloads</p><p>${u}</p></li>
        </ul>
        
    </a>
  </li>`);l.insertAdjacentHTML("afterbegin",t.join("")),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){l.innerHTML=""}function y(){document.querySelector(".loader").classList.add("shown")}function h(){document.querySelector(".loader").classList.remove("shown")}const L="51673072-147ff944173cdc3a3c30b0c98",S="https://pixabay.com/api";function x(i){return f.get(S,{params:{key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("Помилка запиту:",t),t})}const b=document.querySelector(".form");b.addEventListener("submit",i=>{i.preventDefault();const t=document.querySelector('input[name="search-text"]').value.trim();t&&(g(),y(),x(t).then(s=>{const o=s.hits;o.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(d(o),document.querySelector('input[name="search-text"]').focus())}).catch(s=>{n.error({message:"Oops! Something went wrong. Plese try again.",position:"topRight"}),console.error(s)}).finally(()=>{h()}))});
//# sourceMappingURL=index.js.map
