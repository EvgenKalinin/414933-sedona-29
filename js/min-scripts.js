var hotelSearchButton=document.querySelector(".hotel-search-button"),popup=document.querySelector(".popup");hotelSearchButton.addEventListener("click",function(e){popup.classList.contains("popup-hidden")?(e.preventDefault(),popup.classList.remove("popup-hidden")):(e.preventDefault(),popup.classList.add("popup-hidden"))});