import{g as m}from"./auth.service.Ci3Tolzm.js";import{g as f,r as v}from"./favorites.service.BjHpKIRT.js";async function u(){const s=document.getElementById("loading-state"),l=document.getElementById("favorites-content"),t=document.getElementById("favorites-list"),d=document.getElementById("empty-state"),i=document.getElementById("status-msg");function c(o){if(o.length===0){t.innerHTML="",d.hidden=!1;return}d.hidden=!0,t.innerHTML=o.map(e=>`
          <li data-trail-id="${e._id}">
            <a href="/trails/${e._id}" class="trail-link">
              <h2>${e.name}</h2>
              <p>${e.location}</p>
              <p>${e.difficulty} · ${e.distanceKm} km · +${e.elevationGainM} m</p>
            </a>
            <div class="favorite-actions">
              <button class="remove-btn" type="button" data-remove-id="${e._id}">Remove</button>
              <a class="review-btn" href="/trails/${e._id}">View or Post Review</a>
            </div>
          </li>`).join("")}try{await m()}catch{window.location.href="/login";return}s.hidden=!0,l.hidden=!1;try{const{items:o}=await f();c(o),t.addEventListener("click",async e=>{const n=e.target.closest("[data-remove-id]");if(!n)return;const r=n.getAttribute("data-remove-id");if(r){n.disabled=!0,n.textContent="Removing...",i.hidden=!0;try{await v(r);const a=t.querySelector(`li[data-trail-id="${r}"]`);a&&a.remove(),i.textContent="Removed from favorites.",i.hidden=!1,t.children.length||(d.hidden=!1)}catch(a){n.disabled=!1,n.textContent="Remove",i.textContent=a?.message??"Could not remove favorite.",i.hidden=!1}}})}catch{t.innerHTML='<p class="error">Failed to load favorites.</p>'}}u();
