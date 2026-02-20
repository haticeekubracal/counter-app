const countText = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");

let count = 0;

increaseBtn.onclick = function() {
    count = count + 1;
    countText.innerText = count;
    console.log("Değer arttırıldı!");
    updateColor()
};

decreaseBtn.onclick = function() {
    count = count - 1;
    countText.innerText = count;
    console.log("Değer azaltıldı!");
    updateColor()
    
};

function updateColor() {
    if(count < 0) {
        countText.style.color = "red";
    }
    else if (count === 0) {
        countText.style.color = "white";
    }
    else {
        countText.style.color = "green";
    }
}
