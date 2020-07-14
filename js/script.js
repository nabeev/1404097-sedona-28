var appointmentButton = document.querySelector(".appointment-button");
var appointmentFormBox = document.querySelector(".appointment-form-box");
var arrivalDate = appointmentFormBox.querySelector(".arrival-input");
var leavingDate = appointmentFormBox.querySelector(".leaving-input");
var adultMinus = document.querySelector(".adult .add-button.minus");
var adultPlus = document.querySelector(".adult .add-button.plus");
var childrenMinus = document.querySelector(".children .add-button.minus");
var childrenPlus = document.querySelector(".children .add-button.plus");
var quantityAdultInput = appointmentFormBox.querySelector(".adult-qty-input");
var quantityChildrentInput = appointmentFormBox.querySelector(".children-qty-input");
var fullBody = document.querySelector("body");

appointmentFormBox.classList.remove("appointment-form-show");

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
    if (appointmentFormBox.classList.contains("appointment-form-show")) {
        arrivalDate.focus();
    } else {
        appointmentFormBox.classList.remove("appointment-form-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (appointmentFormBox.classList.contains("appointment-form-show")) {
            evt.preventDefault();
            appointmentFormBox.classList.remove("appointment-form-show");
            appointmentFormBox.classList.remove("appointment-form-error");
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

quantityAdultInput.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 38) {
        plusFunction(quantityAdultInput);
   }
});

quantityAdultInput.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 40) {
        minusFunction(quantityAdultInput, 1);
   }
});

quantityChildrentInput.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 38) {
        plusFunction(quantityChildrentInput);
   }
});

quantityChildrentInput.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 40) {
        minusFunction(quantityChildrentInput, 0);
   }
});

appointmentFormBox.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !leavingDate.value) {
        evt.preventDefault();
        appointmentFormBox.classList.remove("appointment-form-error");
        appointmentFormBox.offsetWidth = appointmentFormBox.offsetWidth;
        appointmentFormBox.classList.add("appointment-form-error");
    } 
});

