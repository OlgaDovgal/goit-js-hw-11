import{S as f,a as d,i as n}from"./assets/vendor-5bY836Yj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),p=document.querySelector(".loader");let l=null;function g(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:u,downloads:m})=>`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${e}"/>
        <ul class="gallery-image-props-list">
        <li class="image-prop-item"><p class="item-prop-txt">Likes</p><p>${r}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Views</p><p>${a}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Comments</p><p>${u}</p></li>
        <li class="image-prop-item"><p class="item-prop-txt">Downloads</p><p>${m}</p></li>
        </ul>
        
    </a>
  </li>`);c.insertAdjacentHTML("afterbegin",t.join("")),l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function y(){c.innerHTML=""}function h(){p.classList.add("shown")}function L(){p.classList.remove("shown")}const S="51673072-147ff944173cdc3a3c30b0c98",w="https://pixabay.com/api";function x(s){return d.get(w,{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("Помилка запиту:",t),t})}const b=document.querySelector(".form");b.addEventListener("submit",s=>{s.preventDefault();const t=document.querySelector('input[name="search-text"]').value.trim();t&&(y(),h(),x(t).then(o=>{const i=o.hits;i.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(g(i),document.querySelector('input[name="search-text"]').focus())}).catch(o=>{n.error({message:"Oops! Something went wrong. Plese try again.",position:"topRight"}),console.error(o)}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
