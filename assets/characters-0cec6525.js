import{f as s}from"./hero-gallery-1f3e9d08.js";document.querySelector("#search-form");const o=document.querySelector(".characters-gallery");function i(r){const e=r.target.elements.searchQuery.value.trim();if(e===""){console.log("The search string cannot be empty."),o.innerHTML="";return}s("","","",e).then(t=>{if(t.total===0)console.log(t.total),console.log("Sorry, there are no images matching your search query. Please try again."),o.innerHTML="";else{console.log(t);const n=c(t.results);o.innerHTML=n}})}const c=r=>r.map(e=>`
      <div class="wrapper-gallery-item">
      <img id="characters-gallery-item" src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="${e.description}" loading="lazy" />
  <div id="character-name">
    <h3>${e.name}</h3>
  </div>
  </div>`).join(`
`);function u(){const r=window.location.search,e=new URLSearchParams(r);if(e.has("searchQuery")){const t=document.querySelector("#search-form");console.log(t),t.elements.searchQuery.value=e.get("searchQuery");const n=new Object;n.target=t,i(n)}}u();const l=document.querySelector(".form-filter");console.log(l);l.addEventListener("submit",m);function m(r){console.log(r),r.preventDefault();const e=r.target.elements.searchQuery.value.trim(),t=r.target.elements["comics-enter-text"].value.trim();if(e===""){console.log("The search string cannot be empty."),o.innerHTML="";return}s(t,"","",e).then(n=>{if(n.total===0)console.log(n.total),console.log("Sorry, there are no images matching your search query. Please try again."),o.innerHTML="";else{console.log(n);const a=c(n.results);o.innerHTML=a}})}
