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



const uv_index = document.querySelector(".uv");
const uv_emoji = document.querySelector(".uv-icon");
if(window.uv >=11){
    uv_index.classList.add("purple");
    uv_emoji.classList.add("purple");
} else  if (window.uv <=10.99 && window.uv >= 8){
    uv_index.classList.add("red");
    uv_emoji.classList.add("red");
}else if (window.uv <=7.99 && window.uv >= 6 ){
    uv_index.classList.add("orange");
    uv_emoji.classList.add("orange");
}else if (window.uv <=5.99 && window.uv >= 3){
    uv_index.classList.add("yellow");
    uv_emoji.classList.add("yellow");
}else{
    uv_index.classList.add("green");
    uv_emoji.classList.add("green");
}