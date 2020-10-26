var hotelSearchButton = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".popup");

hotelSearchButton.addEventListener("click", function(evt) {
    if (popup.classList.contains("popup-hidden")) {
        evt.preventDefault();
        popup.classList.remove("popup-hidden");
    } else {
        evt.preventDefault();
        popup.classList.add("popup-hidden");
    }
});