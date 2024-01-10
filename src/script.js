const nao = document.getElementById("nao")
var position = 0;
var isAnimating = false;



nao.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        nao.style.transform = `translate(0px, ${position}px)`;
        nao.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }

});

nao.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        nao.style.transform = `translate(0px, ${position}px)`;
        nao.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }

});

const sim = document.getElementById("sim")

sim.addEventListener("click", function(){
    window.location.href='https://www.youtube.com/shorts/aueTWlsmAKE'
})