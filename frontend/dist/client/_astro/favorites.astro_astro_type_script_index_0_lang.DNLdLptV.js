import{g as s}from"./auth.service.B3ij1GkK.js";import{a as c}from"./api-client.D63I1rr4.js";async function d(){return c("/api/v1/favorites")}async function r(){const i=document.getElementById("loading-state"),o=document.getElementById("favorites-content"),e=document.getElementById("favorites-list"),a=document.getElementById("empty-state");try{await s()}catch{window.location.href="/signup";return}i.hidden=!0,o.hidden=!1;try{const{items:n}=await d();if(n.length===0){a.hidden=!1;return}e.innerHTML=n.map(t=>`
          <li>
            <a href="/trails/${t._id}">
              <h2>${t.name}</h2>
              <p>${t.location}</p>
              <p>${t.difficulty} · ${t.distanceKm} km · +${t.elevationGainM} m</p>
            </a>
          </li>`).join("")}catch{e.innerHTML='<p class="error">Failed to load favorites.</p>'}}r();
