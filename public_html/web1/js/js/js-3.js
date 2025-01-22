console.log("hiiii")

const myCircles = document.querySelectorAll(".circle")

myCircles.forEach(function(item,index) {
    item.addEventListener("click", function () {
        alert("circle circled : " + (parseInt(index) + 1));

        // item.classList.toggle("move-me")

        if(item.classList.contains("square")) {
            item.classList.toggle ("make-round")
        } else {
            item.classList.toggle("move-me")
        }
})})

