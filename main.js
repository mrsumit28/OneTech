  let scrollContainer = document.querySelector(".cards");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (e) => {
        e.defaultPrevented();
        scrollContainer.scrollLeft += e.deltaY;
        scrollContainer.style.scrollBehavior ="auto";
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior ="smooth"
        scrollContainer.scrollLeft += 900;
    });

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior ="smooth"
        scrollContainer.scrollLeft -= 900;
    });
    

