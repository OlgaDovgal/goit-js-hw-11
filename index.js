import{S as m,a as d,i as n}from"./assets/vendor-5bY836Yj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery");let f=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:p,downloads:u})=>`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${e}"/>
        <ul class="gallery-image-props-list">
        <li class="image-prop-item"><p>Likes</p><p>${t}</p></li>
        <li class="image-prop-item"><p>Views</p><p>${a}</p></li>
        <li class="image-prop-item"><p>Comments</p><p>${p}</p></li>
        <li class="image-prop-item"><p>Downloads</p><p>${u}</p></li>
        </ul>
        
    </a>
  </li>`);c.insertAdjacentHTML("afterbegin",r.join("")),f.refresh()}function y(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.add("shown")}function l(){document.querySelector(".loader").classList.remove("shown")}const L="51673072-147ff944173cdc3a3c30b0c98",S="https://pixabay.com/api";function q(s){return d.get(S,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const b=document.querySelector(".form");b.addEventListener("submit",s=>{s.preventDefault();const r=document.querySelector('input[name="search-text"]').value.trim();r&&(y(),h(),q(r).then(o=>{l();const i=o.data.hits;i.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(g(i),document.querySelector('input[name="search-text"]').focus())}).catch(o=>{l(),n.error({message:"Oops! Something went wrong. Plese try again.",position:"topRight"}),console.error(o)}))});
//# sourceMappingURL=index.js.map
