import{S as n,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="https://pixabay.com/api/",u=o=>{const l=new URLSearchParams({key:"23365926-b4db738b99f20e424398823c4",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?${l}`).then(e=>{if(!e.ok)throw new Error(`HTTP error: ${e.status}`);return e.json()})},a={galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".js-loader")},h=new n(".gallery a",{captionSelector:"img",captionPosition:"bottom",captionsData:"alt",captionDelay:250}),m=o=>{const l=o.map(e=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
              >
            </a>
             <table class="gallery-table">
              <thead>
                  <tr>
                    <th class="gallery-table-header">Likes</th>
                    <th class="gallery-table-header">Views</th>
                    <th class="gallery-table-header">Comments</th>
                    <th class="gallery-table-header">Downloads</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                    <td class="gallery-table-cell">${e.likes}</td>
                    <td class="gallery-table-cell">${e.views}</td>
                    <td class="gallery-table-cell">${e.comments}</td>
                    <td class="gallery-table-cell">${e.downloads}</td>
                  </tr>
                </tbody>
              </table>
          </li>
        `).join("");a.galleryEl.insertAdjacentHTML("beforeend",l),h.refresh()},y=()=>{a.galleryEl.innerHTML=""},f=()=>{a.loaderEl.classList.add("is-visible")},g=()=>{a.loaderEl.classList.remove("is-visible")},p={formEl:document.querySelector("form"),submitBtn:document.querySelector('button[type="submit"]')},b=o=>{o.preventDefault();const{currentTarget:l}=o,e=l.elements["search-text"].value.trim();if(!e){c.error({message:"Empty input!",position:"topRight"});return}y(),f(),u(e).then(s=>{if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(s.hits)}).catch(s=>{console.log(s),c.error({message:s.message,position:"topRight"})}).finally(()=>g())};p.formEl.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
