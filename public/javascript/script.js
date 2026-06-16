document.querySelector(".search-bar").addEventListener("focus", () => {
    document.querySelector(".suggestions").classList.remove("hidden");
});

document.querySelector(".search-bar").addEventListener("blur", () =>{
    document.querySelector(".suggestions").classList.add("hidden");
});



document.querySelectorAll(".choice").forEach(city => {
    city.addEventListener("click", () =>{
        document.querySelector(".search-bar").value = city.textContent.trim();

        document.querySelector(".input-form").submit();
    });
});