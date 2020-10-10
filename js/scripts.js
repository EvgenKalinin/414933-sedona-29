var hotelSearchButton = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".popup");

hotelSearchButton.addEventListener("click", function(evt) {
    if (popup.classList.contains("popup-show")) {
        evt.preventDefault();
        popup.classList.remove("popup-show");
    } else {
        evt.preventDefault();
        popup.classList.add("popup-show");
    }
});