// Datum des Match (24. Mai 2026 um 14:00 Uhr)
const matchDate = new Date("June 30, 2026 14:00:00").getTime();

const countdownTimer = setInterval(function () {

    //aktuelle Zeit abrufen
    const now = new Date().getTime();

    const distance = matchDate - now;

    //wenn Countdown fertig
    if (distance <= 0) {
        clearInterval(countdownTimer);
        document.getElementById("tage").innerHTML = "00";
        document.getElementById("stunden").innerHTML = "00";
        document.getElementById("minuten").innerHTML = "00";
        document.getElementById("sekunden").innerHTML = "00";
        return;
    }

    //zeitberechnungen
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //werte einfügen
    document.getElementById("tage").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("stunden").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minuten").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("sekunden").innerHTML = seconds.toString().padStart(2, '0');


}, 1000);

//carousel
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".player-card");
    const totalCards = cards.length;

    if (totalCards === 0) return;

    function updateCarousel() {
        let activeIndex = 0;
        
        cards.forEach((card, index) => {
            if (card.classList.contains("active")) {
                activeIndex = index;
            }
        });

        cards.forEach((card, index) => {
            card.classList.remove("active", "prev", "next");
            if (index === activeIndex) {
                card.classList.add("active");
            } else if (index === (activeIndex - 1 + totalCards) % totalCards) {
                card.classList.add("prev");
            } else if (index === (activeIndex + 1) % totalCards) {
                card.classList.add("next");
            }
        });
    }

    //auf Karten klicken
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            updateCarousel();
        });
    });

    updateCarousel();
}); 