import{S as u,i as g}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function d(t,r,s){const i=f(t,r,s);return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>(console.log("ERROR:",e),Promise.reject(e)))}function f(t,r,s){const i=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return`${t}?${i}`}function p(t,r){t.innerHTML=m(r),h.refresh()}function m(t){return t.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:a,comments:o,downloads:c})=>` <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <figure class="gallery-figure">
            <img class="gallery-image" src="${r}" alt="${i}" width="400" />
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
                  <p>${c}</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </a>
      </li>`).join(" ")}const h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),y="44022963-dc7d5638f3e5caf2e9b20745b",L="https://pixabay.com/api/",S=document.querySelector(".search-form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader-wrapper ");S.addEventListener("submit",P);function P(t){t.preventDefault(),l.innerHTML="",n.classList.remove("is-hidden");const r=t.currentTarget.search.value.trim();if(!r){displayErrorMessage("Sorry, there are no images matching your search query. Please try again!"),t.currentTarget.reset(),n.classList.add("is-hidden");return}d(L,y,r).then(s=>{const i=s.hits;if(i.length===0){displayErrorMessage("Sorry, there are no images matching your search query. Please try again!"),n.classList.add("is-hidden");return}p(l,i),n.classList.add("is-hidden")}).catch(s=>{E("Sorry, there are no images matching your search query. Please try again!"),console.error("Error fetching data:",s)}),t.currentTarget.reset()}const b={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function E(t,r){g.error({...b,title:r||"",message:`${t}`,backgroundColor:"#EF4040"})}
//# sourceMappingURL=commonHelpers.js.map
