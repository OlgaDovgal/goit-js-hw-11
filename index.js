import{S as u,a as m,i as n}from"./assets/vendor-5bY836Yj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery");function d(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:c,downloads:p})=>`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${e}"/>
        <ul class="gallery-image-props-list">
        <li class="image-prop-item"><p class="item-prop-txt">Likes</p><p>${r}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Views</p><p>${a}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Comments</p><p>${c}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Downloads</p><p>${p}</p></li>
        </ul>
        
    </a>
  </li>`);l.insertAdjacentHTML("afterbegin",t.join("")),new u(".gallery a",{captionsData:"alt",captionDelay:250})}function f(){l.innerHTML=""}function g(){document.querySelector(".loader").classList.add("shown")}function y(){document.querySelector(".loader").classList.remove("shown")}const h="51673072-147ff944173cdc3a3c30b0c98",L="https://pixabay.com/api";function S(s){return m.get(L,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("Помилка запиту:",t),t})}const q=document.querySelector(".form");q.addEventListener("submit",s=>{s.preventDefault();const t=document.querySelector('input[name="search-text"]').value.trim();t&&(f(),g(),S(t).then(o=>{const i=o.hits;i.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(d(i),document.querySelector('input[name="search-text"]').focus())}).catch(o=>{n.error({message:"Oops! Something went wrong. Plese try again.",position:"topRight"}),console.error(o)}).finally(()=>{y()}))});
//# sourceMappingURL=index.js.map
