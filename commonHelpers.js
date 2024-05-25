import{S as g,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();function d(t,r,i){const s=p(t,r,i);return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>(console.log("ERROR:",e),Promise.reject(e)))}function p(t,r,i){const s=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return`${t}?${s}`}function m(t,r){t.innerHTML=h(r),y.refresh()}function h(t){return t.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:a,comments:o,downloads:u})=>` <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <figure class="gallery-figure">
            <img class="gallery-image" src="${r}" alt="${s}" width="400" />
            <figcaption class="gallery-figcaption">
              <ul class="gallery-text">
                <li>
                  <span>Likes</span>
                  <p>${e}</p>
                </li>
                <li>
                  <span>Views</span>
                  <p>${a}</p>
                </li>
                <li>
                  <span>Comments</span>
                  <p>${o}</p>
                </li>
                <li>
                  <span>Downloads</span>
                  <p>${u}</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </a>
      </li>`).join(" ")}const y=new g(".gallery a",{captionsData:"alt",captionDelay:250}),L="44022963-dc7d5638f3e5caf2e9b20745b",S="https://pixabay.com/api/",P=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader-wrapper ");P.addEventListener("submit",b);function b(t){t.preventDefault(),c.innerHTML="",n.classList.remove("is-hidden");const r=t.currentTarget.search.value.trim();if(!r){l("Sorry, there are no images matching your search query. Please try again!"),t.currentTarget.reset(),n.classList.add("is-hidden");return}d(S,L,r).then(i=>{const s=i.hits;if(s.length===0){l("Sorry, there are no images matching your search query. Please try again!"),n.classList.add("is-hidden");return}m(c,s),n.classList.add("is-hidden")}).catch(i=>{l("Sorry, there are no images matching your search query. Please try again!"),console.error("Error fetching data:",i)}),t.currentTarget.reset()}const F={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function l(t,r){f.error({...F,title:r||"",message:`${t}`,backgroundColor:"#EF4040"})}
//# sourceMappingURL=commonHelpers.js.map
