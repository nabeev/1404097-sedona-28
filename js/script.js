var appointmentButton = document.querySelector(".appointment-button");
var appointmentFormBox = document.querySelector(".appointment-form-box");
var adultMinus = document.querySelector(".adult .add-button.minus");
var adultPlus = document.querySelector(".adult .add-button.plus");
var childrenMinus = document.querySelector(".children .add-button.minus");
var childrenPlus = document.querySelector(".children .add-button.plus");
var quantityAdultInput = document.querySelector(".quantity.adult input");
var quantityChildrentInput = document.querySelector(".quantity.children input");
var fullBody = document.querySelector("body");

var minusFunction = function (someInput, minQty) {
    if ( someInput.value > minQty ) {
        someInput.value -= 1;
    }
};

var plusFunction = function (someInput) {
    someInput.value = +someInput.value + 1;
}

appointmentButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    appointmentFormBox.classList.toggle("appointment-form-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (appointmentFormBox.classList.contains("appointment-form-show")) {
            evt.preventDefault();
            appointmentFormBox.classList.remove("appointment-form-show");
        }
    }
});

adultMinus.addEventListener("click", function () {
    minusFunction(quantityAdultInput, 1);
});

adultPlus.addEventListener("click", function () {
    plusFunction(quantityAdultInput);
});

childrenMinus.addEventListener("click", function() {
    minusFunction(quantityChildrentInput, 0);
});

childrenPlus.addEventListener("click", function() {
    plusFunction(quantityChildrentInput);
});
