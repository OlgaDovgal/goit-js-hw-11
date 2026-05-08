import{S as m,a as f,i as n}from"./assets/vendor-5bY836Yj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery");let l=null;function d(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:p,downloads:u})=>`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${e}"/>
        <ul class="gallery-image-props-list">
        <li class="image-prop-item"><p class="item-prop-txt">Likes</p><p>${r}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Views</p><p>${a}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Comments</p><p>${p}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Downloads</p><p>${u}</p></li>
        </ul>
        
    </a>
  </li>`);c.insertAdjacentHTML("afterbegin",t.join("")),l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){c.innerHTML=""}function y(){document.querySelector(".loader").classList.add("shown")}function h(){document.querySelector(".loader").classList.remove("shown")}const L="51673072-147ff944173cdc3a3c30b0c98",S="https://pixabay.com/api";function q(s){return f.get(S,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("Помилка запиту:",t),t})}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const t=document.querySelector('input[name="search-text"]').value.trim();t&&(g(),y(),q(t).then(o=>{const i=o.hits;i.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(d(i),document.querySelector('input[name="search-text"]').focus())}).catch(o=>{n.error({message:"Oops! Something went wrong. Plese try again.",position:"topRight"}),console.error(o)}).finally(()=>{h()}))});
//# sourceMappingURL=index.js.map
