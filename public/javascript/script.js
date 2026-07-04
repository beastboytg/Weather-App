document.querySelector(".search-bar").addEventListener("focus", () => {
    document.querySelector(".suggestions").classList.remove("hidden");
});

document.querySelector(".search-bar").addEventListener("blur", () => {
    document.querySelector(".suggestions").classList.add("hidden");
});


let thunderTimer;


document.querySelectorAll(".choice").forEach(city => {
    city.addEventListener("click", () => {
        document.querySelector(".search-bar").value = city.textContent.trim();
        
        document.querySelector(".input-form").submit();
    });
});



const uv_index = document.querySelector(".uv");
const uv_emoji = document.querySelector(".uv-icon");
const uv_text = document.querySelector(".uv-text");
const uv_status = document.querySelector(".uv-status");
const uv_value = document.querySelector(".uv-value");
if (window.uv >= 11) {
    uv_index.classList.add("purple");
    uv_emoji.classList.add("purple");
    uv_value.classList.add("purple");
    uv_value.style.border="none";
    uv_text.textContent = "Extreme";
    uv_status.textContent = "Extreme";
} else if (window.uv <= 10.99 && window.uv >= 8) {
    uv_index.classList.add("red");
    uv_emoji.classList.add("red");
    uv_value.classList.add("red");
    uv_value.style.border="none";
    uv_text.textContent = "Very High";
    uv_status.textContent = "Very High";
} else if (window.uv <= 7.99 && window.uv >= 6) {
    uv_index.classList.add("orange");
    uv_emoji.classList.add("orange");
    uv_value.classList.add("orange");
    uv_value.style.border="none";
    uv_text.textContent ="High";
    uv_status.textContent ="High";
} else if (window.uv <= 5.99 && window.uv >= 3) {
    uv_index.classList.add("yellow");
    uv_emoji.classList.add("yellow");
    uv_value.classList.add("yellow");
    uv_value.style.border="none";
    uv_text.textContent="Moderate";
    uv_status.textContent="Moderate";
} else {
    uv_index.classList.add("green");
    uv_emoji.classList.add("green");
    uv_value.classList.add("green");
    uv_value.style.border="none";
    uv_text.textContent="Low";
    uv_status.textContent="Low";
}




if ( weatherType===`Thunder`) { 
    document.querySelector(".weather-type").textContent="Thunder Storm";
    document.querySelector(".sky-value").textContent="Thunder Storm";
} else if( weatherType===`Sunny`){ 
if( weather.current.is_day===1){
    document.querySelector(".weather-type").textContent="Sunny";
    document.querySelector(".sky-value").textContent="Sunny";
} else { 
    document.querySelector(".weather-type").textContent="Clear Sky";
    document.querySelector(".sky-value").textContent="Clear Sky";
}
} else { 
    document.querySelector(".weather-type").textContent=weatherType;
    document.querySelector(".sky-value").textContent=weatherType;
    weatherEffects(weatherType);
}



function dayAfterTmrw() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayAfterTomorrow = new Date();

    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    const name = days[dayAfterTomorrow.getDay()];
    document.querySelector(".day-after-tmrw").textContent = name;
}
dayAfterTmrw();



const weatherGroups = {
    Sunny: [1000],
    Cloudy: [1003, 1006, 1009],
    Foggy: [1030, 1135, 1147, 1012, 1021],
    Raining: [1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246],
    Snowing: [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258],
    Thunder: [1087, 1273, 1276, 1279, 1282]
};

const codeToGroup = {};

for (const [group, codes] of Object.entries(weatherGroups)) {
    codes.forEach(code => {
        codeToGroup[code] = group;
    });
}

const iconFiles = {
    Sunny: `<svg width="32" height="32" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <radialGradient id="sunGradient">
                                            <stop offset="0%" stop-color="#FFF9A8" />
                                            <stop offset="100%" stop-color="#FDB813" />
                                        </radialGradient>

                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    <!-- Floating Sun -->
                                    <g filter="url(#glow)">
                                        <animateTransform attributeName="transform" type="translate"
                                            values="0 0;0 -6;0 0" dur="4s" repeatCount="indefinite" />

                                        <!-- Rotating Rays -->
                                        <g>

                                            <g stroke="#FDB813" stroke-width="6" stroke-linecap="round">
                                                <line x1="110" y1="20" x2="110" y2="45" />
                                                <line x1="110" y1="175" x2="110" y2="200" />

                                                <line x1="20" y1="110" x2="45" y2="110" />
                                                <line x1="175" y1="110" x2="200" y2="110" />

                                                <line x1="45" y1="45" x2="62" y2="62" />
                                                <line x1="158" y1="158" x2="175" y2="175" />

                                                <line x1="175" y1="45" x2="158" y2="62" />
                                                <line x1="45" y1="175" x2="62" y2="158" />
                                            </g>
                                        </g>

                                        <!-- Sun Glow -->
                                        <circle cx="110" cy="110" r="55" fill="#FFD54A" opacity="0.25">

                                            <animate attributeName="r" values="55;62;55" dur="3s"
                                                repeatCount="indefinite" />
                                        </circle>

                                        <!-- Sun Body -->
                                        <circle cx="110" cy="110" r="45" fill="url(#sunGradient)">

                                            <animate attributeName="r" values="45;48;45" dur="3s"
                                                repeatCount="indefinite" />
                                        </circle>

                                    </g>
                                </svg>`,
    Cloudy: `<svg width="32" height="32" viewBox="0 0 220 220"
                                                    xmlns="http://www.w3.org/2000/svg">

                                                    <defs>

                                                        <!-- Back Cloud -->
                                                        <linearGradient id="backCloud" x1="0%" y1="0%" x2="0%"
                                                            y2="100%">
                                                            <stop offset="0%" stop-color="#E6EBF5" />
                                                            <stop offset="100%" stop-color="#AEB9CD" />
                                                        </linearGradient>

                                                        <!-- Front Cloud -->
                                                        <linearGradient id="frontCloud" x1="0%" y1="0%" x2="0%"
                                                            y2="100%">
                                                            <stop offset="0%" stop-color="#F8FAFD" />
                                                            <stop offset="100%" stop-color="#C6D0E0" />
                                                        </linearGradient>

                                                        <!-- Shadow -->
                                                        <filter id="shadow">
                                                            <feDropShadow dx="0" dy="4" stdDeviation="4"
                                                                flood-color="#001A44" flood-opacity="0.12" />
                                                        </filter>

                                                    </defs>

                                                    <!-- Floating Animation -->
                                                    <g>

                                                        <animateTransform attributeName="transform" type="translate"
                                                            values="0 0;0 -5;0 0" dur="4s" repeatCount="indefinite" />

                                                        <!-- Back Cloud -->
                                                        <path d="
                                                    M50 125
                                                    C50 95, 75 85, 95 95
                                                    C105 65, 145 65, 160 90
                                                    C185 90, 198 105, 198 125
                                                    C210 130, 208 150, 190 155
                                                    H70
                                                    C48 155, 38 138, 50 125
                                                    Z" fill="url(#backCloud)" filter="url(#shadow)" />

                                                        <!-- Front Cloud -->
                                                        <path d="
                                                    M85 145
                                                    C85 122, 102 112, 120 118
                                                    C128 92, 162 92, 175 115
                                                    C192 115, 202 128, 202 145
                                                    C210 150, 208 165, 190 168
                                                    H105
                                                    C88 168, 78 155, 85 145
                                                    Z" fill="url(#frontCloud)" filter="url(#shadow)" />

                                                    </g>

                                                </svg>`,
    Foggy: `<svg width="32" height="32" viewBox="0 0 220 220"
                                                            xmlns="http://www.w3.org/2000/svg">

                                                            <defs>

                                                                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%"
                                                                    y2="100%">
                                                                    <stop offset="0%" stop-color="#F7F9FC" />
                                                                    <stop offset="100%" stop-color="#C7D1E0" />
                                                                </linearGradient>

                                                                <filter id="shadow">
                                                                    <feDropShadow dx="0" dy="4" stdDeviation="4"
                                                                        flood-color="#001A44" flood-opacity="0.12" />
                                                                </filter>

                                                            </defs>

                                                            <!-- Floating Cloud -->
                                                            <g>

                                                                <animateTransform attributeName="transform"
                                                                    type="translate" values="0 0;0 -4;0 0" dur="4s"
                                                                    repeatCount="indefinite" />

                                                                <!-- Cloud -->
                                                                <path d="
                                                    M65 115
                                                    C65 95, 85 88, 98 95
                                                    C102 75, 128 72, 140 88
                                                    C160 88, 172 100, 172 115
                                                    C185 118, 188 135, 172 142
                                                    H78
                                                    C58 142, 50 122, 65 115Z
                                                    " fill="url(#cloudGrad)" filter="url(#shadow)" />

                                                                <!-- Fog Layer 1 -->
                                                                <rect x="55" y="155" width="110" height="6" rx="3"
                                                                    fill="#D5DEE8">

                                                                    <animate attributeName="opacity"
                                                                        values="0.3;0.9;0.3" dur="4s"
                                                                        repeatCount="indefinite" />
                                                                </rect>

                                                                <!-- Fog Layer 2 -->
                                                                <rect x="45" y="170" width="130" height="6" rx="3"
                                                                    fill="#D5DEE8">

                                                                    <animate attributeName="opacity"
                                                                        values="0.9;0.3;0.9" dur="5s"
                                                                        repeatCount="indefinite" />
                                                                </rect>

                                                                <!-- Fog Layer 3 -->
                                                                <rect x="60" y="185" width="32" height="6" rx="3"
                                                                    fill="#D5DEE8">

                                                                    <animate attributeName="opacity"
                                                                        values="0.3;0.9;0.3" dur="4.5s"
                                                                        repeatCount="indefinite" />
                                                                </rect>

                                                            </g>

                                                        </svg>`,
    Raining: `<svg width="100" height="32" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">

                            <defs>
                                <!-- Darker Rain Cloud -->
                                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#EEF4FB" />
                                    <stop offset="100%" stop-color="#B8C7DB" />
                                </linearGradient>

                                <!-- Shadow -->
                                <filter id="shadow">
                                    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#001A44"
                                        flood-opacity="0.15" />
                                </filter>

                            </defs>

                            <!-- Floating Group -->
                            <g>

                                <!-- Gentle Float -->
                                <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0"
                                    dur="4s" repeatCount="indefinite" />

                                <!-- Cloud -->
                                <path d="
                                                    M65 115
                                                    C65 95, 85 88, 98 95
                                                    C102 75, 128 72, 140 88
                                                    C160 88, 172 100, 172 115
                                                    C185 118, 188 135, 172 142
                                                    H78
                                                    C58 142, 50 122, 65 115Z
                                                    " fill="url(#cloudGrad)" filter="url(#shadow)" />

                                <!-- Rain -->
                                <g stroke="#4EA3FF" stroke-width="3" stroke-linecap="round">

                                    <!-- Drop 1 -->
                                    <line x1="82" y1="157" x2="78" y2="174">

                                        <animateTransform attributeName="transform" type="translate" values="0 -10;0 10"
                                            dur="0.9s" repeatCount="indefinite" />

                                        <animate attributeName="opacity" values="0.15;1;0.15" dur="0.9s"
                                            repeatCount="indefinite" />
                                    </line>

                                    <!-- Drop 2 -->
                                    <line x1="105" y1="157" x2="101" y2="174">

                                        <animateTransform attributeName="transform" type="translate" values="0 -8;0 12"
                                            dur="0.8s" begin="0.2s" repeatCount="indefinite" />

                                        <animate attributeName="opacity" values="0.15;1;0.15" dur="0.8s" begin="0.2s"
                                            repeatCount="indefinite" />
                                    </line>

                                    <!-- Drop 3 -->
                                    <line x1="128" y1="157" x2="124" y2="174">

                                        <animateTransform attributeName="transform" type="translate" values="0 -10;0 10"
                                            dur="1s" begin="0.4s" repeatCount="indefinite" />

                                        <animate attributeName="opacity" values="0.15;1;0.15" dur="1s" begin="0.4s"
                                            repeatCount="indefinite" />
                                    </line>

                                    <!-- Drop 4 -->
                                    <line x1="150" y1="157" x2="146" y2="174">

                                        <animateTransform attributeName="transform" type="translate" values="0 -8;0 12"
                                            dur="0.85s" begin="0.1s" repeatCount="indefinite" />

                                        <animate attributeName="opacity" values="0.15;1;0.15" dur="0.85s" begin="0.1s"
                                            repeatCount="indefinite" />
                                    </line>

                                </g>

                            </g>

                        </svg>`,
    Snowing: `<svg width="32" height="32" viewBox="0 0 220 220"
                                                    xmlns="http://www.w3.org/2000/svg">

                                                    <defs>

                                                        <!-- Back Cloud -->
                                                        <linearGradient id="backCloud" x1="0%" y1="0%" x2="0%"
                                                            y2="100%">
                                                            <stop offset="0%" stop-color="#E6EBF5" />
                                                            <stop offset="100%" stop-color="#AEB9CD" />
                                                        </linearGradient>

                                                        <!-- Front Cloud -->
                                                        <linearGradient id="frontCloud" x1="0%" y1="0%" x2="0%"
                                                            y2="100%">
                                                            <stop offset="0%" stop-color="#F8FAFD" />
                                                            <stop offset="100%" stop-color="#C6D0E0" />
                                                        </linearGradient>

                                                        <!-- Shadow -->
                                                        <filter id="shadow">
                                                            <feDropShadow dx="0" dy="4" stdDeviation="4"
                                                                flood-color="#001A44" flood-opacity="0.12" />
                                                        </filter>

                                                    </defs>

                                                    <!-- Floating Animation -->
                                                    <g>

                                                        <animateTransform attributeName="transform" type="translate"
                                                            values="0 0;0 -5;0 0" dur="4s" repeatCount="indefinite" />

                                                        <!-- Back Cloud -->
                                                        <path d="
                                                    M50 125
                                                    C50 95, 75 85, 95 95
                                                    C105 65, 145 65, 160 90
                                                    C185 90, 198 105, 198 125
                                                    C210 130, 208 150, 190 155
                                                    H70
                                                    C48 155, 38 138, 50 125
                                                    Z" fill="url(#backCloud)" filter="url(#shadow)" />

                                                        <!-- Front Cloud -->
                                                        <path d="
                                                    M85 145
                                                    C85 122, 102 112, 120 118
                                                    C128 92, 162 92, 175 115
                                                    C192 115, 202 128, 202 145
                                                    C210 150, 208 165, 190 168
                                                    H105
                                                    C88 168, 78 155, 85 145
                                                    Z" fill="url(#frontCloud)" filter="url(#shadow)" />

                                                    </g>

                                                </svg>`,
    Thunder: `<svg width="32" height="32" viewBox="0 0 220 220"
                                                xmlns="http://www.w3.org/2000/svg">

                                                <defs>

                                                    <!-- Storm Cloud -->
                                                    <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stop-color="#7C879C" />
                                                        <stop offset="100%" stop-color="#2F3B52" />
                                                    </linearGradient>

                                                    <!-- Lightning -->
                                                    <linearGradient id="boltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stop-color="#FFE45E" />
                                                        <stop offset="100%" stop-color="#FFC400" />
                                                    </linearGradient>

                                                    <!-- Shadow -->
                                                    <filter id="shadow">
                                                        <feDropShadow dx="0" dy="4" stdDeviation="4"
                                                            flood-color="#000000" flood-opacity="0.18" />
                                                    </filter>

                                                    <!-- Lightning Glow -->
                                                    <filter id="boltGlow">
                                                        <feDropShadow dx="0" dy="0" stdDeviation="5"
                                                            flood-color="#FFD93D" flood-opacity="0.8" />
                                                    </filter>

                                                </defs>

                                                <!-- Floating Group -->
                                                <g>

                                                    <animateTransform attributeName="transform" type="translate"
                                                        values="0 0;0 -4;0 0" dur="4s" repeatCount="indefinite" />

                                                    <!-- Cloud -->
                                                    <path d="
                                                    M65 115
                                                    C65 95, 85 88, 98 95
                                                    C102 75, 128 72, 140 88
                                                    C160 88, 172 100, 172 115
                                                    C185 118, 188 135, 172 142
                                                    H78
                                                    C58 142, 50 122, 65 115Z
                                                    " fill="url(#cloudGrad)" filter="url(#shadow)" />

                                                    <!-- Lightning -->
                                                    <path d="
                                                    M112 138
                                                    L98 170
                                                    H112
                                                    L100 198
                                                    L135 155
                                                    H120
                                                    L132 138
                                                    Z
                                                    " fill="url(#boltGrad)" filter="url(#boltGlow)">
                                                        <animate attributeName="opacity" values="1;0.65;1;0.4;1"
                                                            dur="2s" repeatCount="indefinite" />
                                                    </path>

                                                    <!-- Rain -->
                                                    <g stroke="#4EA3FF" stroke-width="3" stroke-linecap="round">

                                                        <!-- Left Outer -->
                                                        <line x1="82" y1="157" x2="78" y2="174">

                                                            <animateTransform attributeName="transform" type="translate"
                                                                values="0 -10;0 10" dur="0.9s"
                                                                repeatCount="indefinite" />

                                                            <animate attributeName="opacity" values="0.15;1;0.15"
                                                                dur="0.9s" repeatCount="indefinite" />
                                                        </line>

                                                        <!-- Left Inner -->
                                                        <line x1="95" y1="157" x2="91" y2="174">

                                                            <animateTransform attributeName="transform" type="translate"
                                                                values="0 -8;0 12" dur="0.8s" begin="0.2s"
                                                                repeatCount="indefinite" />

                                                            <animate attributeName="opacity" values="0.15;1;0.15"
                                                                dur="0.8s" begin="0.2s" repeatCount="indefinite" />
                                                        </line>

                                                        <!-- Right Inner -->
                                                        <line x1="145" y1="157" x2="141" y2="174">

                                                            <animateTransform attributeName="transform" type="translate"
                                                                values="0 -8;0 12" dur="0.85s" begin="0.1s"
                                                                repeatCount="indefinite" />

                                                            <animate attributeName="opacity" values="0.15;1;0.15"
                                                                dur="0.85s" begin="0.1s" repeatCount="indefinite" />
                                                        </line>

                                                        <!-- Right Outer -->
                                                        <line x1="158" y1="157" x2="154" y2="174">

                                                            <animateTransform attributeName="transform" type="translate"
                                                                values="0 -10;0 10" dur="1s" begin="0.3s"
                                                                repeatCount="indefinite" />

                                                            <animate attributeName="opacity" values="0.15;1;0.15"
                                                                dur="1s" begin="0.3s" repeatCount="indefinite" />
                                                        </line>

                                                    </g>

                                                </g>

                                            </svg>`
};
function getWeatherIcon(code, is_day) {
    const group = codeToGroup[code];

    if (group === "Sunny" && !is_day) {
        return `<img src="/img/night_weather_icon_premium.svg" height="32" width="32" alt="Clear Night">` 
    }

    return iconFiles[group] || "default.svg";
}
for (let i = 0; i < 24; i++) {
    document.querySelector(".hourly-weather-" + i).innerHTML = getWeatherIcon(weather.forecast.forecastday[0].hour[i].condition.code,weather.forecast.forecastday[0].hour[i].is_day);
}


document.querySelectorAll(".precipitation").forEach((precipitation, i) => {

    const hour = weather.forecast.forecastday[0].hour[i];

    precipitation.querySelector("p").textContent =`${hour.precip_mm}mm`;

    if (hour.will_it_rain) {
        precipitation.classList.remove("display-none");
    } else {
        precipitation.classList.add("display-none");
        console.log("display none applied");
    }
    console.log("Loop is running");
});


const selectedBox = document.querySelector(".selected-box");
const cards = document.querySelectorAll(".forecast > div:not(.selected-box)");

cards.forEach((card, index) => {
    card.addEventListener("click", () => {

        selectedBox.style.transform = `translateX(${card.offsetLeft}px)`;

        updateWeather(index);
    });
});


function updateWeather(dayIndex) {

    if (dayIndex === 0) {
        console.log("Today selected");
        document.querySelector(".estimated-temperature").innerHTML=`<span class="temp-number">`+
                                                                    Math.floor(weather.current.temp_c)+
                                                                    `</span><span class="degree-symbol">°C</span>`;

        if ( weatherType===`Thunder`) { 
            document.querySelector(".weather-type").textContent="Thunder Storm";
            document.querySelector(".sky-value").textContent="Thunder Storm";
        } else if( weatherType===`Sunny`){ 
            if( weather.current.is_day===1){
                document.querySelector(".weather-type").textContent="Sunny";
                document.querySelector(".sky-value").textContent="Sunny";
            } else { 
                document.querySelector(".weather-type").textContent="Clear Sky";
                document.querySelector(".sky-value").textContent="Clear Sky";
            }
        } else { 
            document.querySelector(".weather-type").textContent=weatherType;
            document.querySelector(".sky-value").textContent=weatherType;
            weatherEffects(weatherType);
        }

        document.querySelector(".feels-like").classList.remove("display-none");
        document.querySelector(".feels-like").innerHTML=`Feels like `+ weather.current.feelslike_c + `°C`;

        const uv_index = document.querySelector(".uv");
        const uv_emoji = document.querySelector(".uv-icon");
        const uv_text = document.querySelector(".uv-text");
        const uv_status = document.querySelector(".uv-status");
        const uv_value = document.querySelector(".uv-value");

        uv_index.classList.remove("purple", "red", "orange", "yellow", "green");
        uv_emoji.classList.remove("purple", "red", "orange", "yellow", "green");
        uv_value.classList.remove("purple", "red", "orange", "yellow", "green");

        if (weather.current.uv >= 11) {
            uv_index.classList.add("purple");
            uv_emoji.classList.add("purple");
            uv_value.classList.add("purple");
            uv_value.style.border="none";
            uv_text.textContent = "Extreme";
            uv_status.textContent = "Extreme";
        } else if (weather.current.uv <= 10.99 && weather.current.uv >= 8) {
            uv_index.classList.add("red");
            uv_emoji.classList.add("red");
            uv_value.classList.add("red");
            uv_value.style.border="none";
            uv_text.textContent = "Very High";
            uv_status.textContent = "Very High";
        } else if (weather.current.uv <= 7.99 && weather.current.uv >= 6) {
            uv_index.classList.add("orange");
            uv_emoji.classList.add("orange");
            uv_value.classList.add("orange");
            uv_value.style.border="none";
            uv_text.textContent ="High";
            uv_status.textContent ="High";
        } else if (weather.current.uv <= 5.99 && weather.current.uv >= 3) {
            uv_index.classList.add("yellow");
            uv_emoji.classList.add("yellow");
            uv_value.classList.add("yellow");
            uv_value.style.border="none";
            uv_text.textContent="Moderate";
            uv_status.textContent="Moderate";
        } else {
            uv_index.classList.add("green");
            uv_emoji.classList.add("green");
            uv_value.classList.add("green");
            uv_value.style.border="none";
            uv_text.textContent="Low";
            uv_status.textContent="Low";
        }

        document.querySelector(".uv-weather-section-text").textContent=` UV `+Math.floor(weather.current.uv)+` ·`;

        for(let i =0;i<24;i++){
            document.querySelector(".hour-"+i+" .hourly-temperature").innerHTML= Math.floor(weather.forecast.forecastday[0].hour[i].temp_c)+`°C`;
        }


        document.querySelector(".sunrise-text").innerHTML=weather.forecast.forecastday[0].astro.sunrise;
        document.querySelector(".sunset-text").innerHTML=weather.forecast.forecastday[0].astro.sunset;
        document.querySelector(".high-low-text").innerHTML=weather.forecast.forecastday[0].day.maxtemp_c+`°/`+weather.forecast.forecastday[0].day.mintemp_c+`°`;
        document.querySelector(".wind-text").innerHTML=weather.current.wind_kph+` km/h`;
        document.querySelector(".humidity-text").innerHTML=weather.current.humidity+`%`;
        document.querySelector(".visibility-text").innerHTML=weather.current.vis_km+` km`;

        for (let i = 0; i < 24; i++) {
            document.querySelector(".hourly-weather-" + i).innerHTML = getWeatherIcon(weather.forecast.forecastday[0].hour[i].condition.code,weather.forecast.forecastday[0].hour[i].is_day);
        }

        document.querySelector(".weather-sticker").innerHTML=getWeatherIcon(weather.current.condition.code,weather.current.is_day);
        document.querySelector(".weather-sticker svg").classList.add("expand-weather");

        document.querySelectorAll(".precipitation").forEach((precipitation, i) => {

            const hour = weather.forecast.forecastday[0].hour[i];

            precipitation.querySelector("p").textContent =`${hour.precip_mm}mm`;

            if (hour.will_it_rain) {
                precipitation.classList.remove("display-none");
            } else {
                precipitation.classList.add("display-none");
                console.log("display none applied");
            }
            console.log("Loop is running");
        });

    }

    else if (dayIndex === 1) {
        console.log("Tomorrow selected");
        document.querySelector(".estimated-temperature").innerHTML=`<span class="temp-number">`+
                                                                    Math.floor(weather.forecast.forecastday[1].day.avgtemp_c)+
                                                                    `</span><span class="degree-symbol">°C</span>`;

        if ( forecastWeatherTMRW===`Thunder`) { 
            document.querySelector(".weather-type").textContent="Thunder Storm";
            document.querySelector(".sky-value").textContent="Thunder Storm";
        } else if( forecastWeatherTMRW===`Sunny`){ 
            if( weather.current.is_day===1){
                document.querySelector(".weather-type").textContent="Sunny";
                document.querySelector(".sky-value").textContent="Sunny";
            } else { 
                document.querySelector(".weather-type").textContent="Clear Sky";
                document.querySelector(".sky-value").textContent="Clear Sky";
            }
        } else { 
            document.querySelector(".weather-type").textContent=forecastWeatherTMRW;
            document.querySelector(".sky-value").textContent=forecastWeatherTMRW;
            weatherEffects(forecastWeatherTMRW);
        }

        document.querySelector(".feels-like").classList.add("display-none");

        const uv_index = document.querySelector(".uv");
        const uv_emoji = document.querySelector(".uv-icon");
        const uv_text = document.querySelector(".uv-text");
        const uv_status = document.querySelector(".uv-status");
        const uv_value = document.querySelector(".uv-value");

        uv_index.classList.remove("purple", "red", "orange", "yellow", "green");
        uv_emoji.classList.remove("purple", "red", "orange", "yellow", "green");
        uv_value.classList.remove("purple", "red", "orange", "yellow", "green");

        if (weather.forecast.forecastday[1].day.uv >= 11) {
            uv_index.classList.add("purple");
            uv_emoji.classList.add("purple");
            uv_value.classList.add("purple");
            uv_text.textContent = "Extreme";
           uv_value.innerHTML=weather.forecast.forecastday[1].day.uv+` <br> <span class="uv-status">Extreme</span>`;
        } else if (weather.forecast.forecastday[1].day.uv <= 10.99 && weather.forecast.forecastday[1].day.uv >= 8) {
            uv_index.classList.add("red");
            uv_emoji.classList.add("red");
            uv_value.classList.add("red");
            uv_text.textContent = "Very High";
            uv_value.innerHTML=weather.forecast.forecastday[1].day.uv+` <br> <span class="uv-status">Very High</span>`;
        } else if (weather.forecast.forecastday[1].day.uv <= 7.99 && weather.forecast.forecastday[1].day.uv >= 6) {
            uv_index.classList.add("orange");
            uv_emoji.classList.add("orange");
            uv_value.classList.add("orange");
            uv_text.textContent ="High";
            uv_value.innerHTML=weather.forecast.forecastday[1].day.uv+` <br> <span class="uv-status">High</span>`;
        } else if (weather.forecast.forecastday[1].day.uv <= 5.99 && weather.forecast.forecastday[1].day.uv >= 3) {
            uv_index.classList.add("yellow");
            uv_emoji.classList.add("yellow");
            uv_value.classList.add("yellow");
            uv_text.textContent="Moderate";
            uv_value.innerHTML=weather.forecast.forecastday[1].day.uv+` <br> <span class="uv-status">Moderate</span>`;
        } else {
            uv_index.classList.add("green");
            uv_emoji.classList.add("green");
            uv_value.classList.add("green");
            uv_text.textContent="Low";
            uv_value.innerHTML=weather.forecast.forecastday[1].day.uv+` <br> <span class="uv-status">Low</span>`;
        }

        uv_value.style.border="none";

        document.querySelector(".uv-weather-section-text").textContent=` UV `+Math.floor(weather.forecast.forecastday[1].day.uv)+` ·`;

        for(let i =0;i<24;i++){
            document.querySelector(".hour-"+i+" .hourly-temperature").innerHTML= Math.floor(weather.forecast.forecastday[1].hour[i].temp_c)+`°C`;
        }


        document.querySelector(".sunrise-text").innerHTML=weather.forecast.forecastday[1].astro.sunrise;
        document.querySelector(".sunset-text").innerHTML=weather.forecast.forecastday[1].astro.sunset;
        document.querySelector(".high-low-text").innerHTML=weather.forecast.forecastday[1].day.maxtemp_c+`°/`+weather.forecast.forecastday[1].day.mintemp_c+`°`;
        document.querySelector(".wind-text").innerHTML=weather.forecast.forecastday[1].day.maxwind_kph+` km/h`;
        document.querySelector(".humidity-text").innerHTML=weather.forecast.forecastday[1].day.avghumidity+`%`;
        document.querySelector(".visibility-text").innerHTML=weather.forecast.forecastday[1].day.avgvis_km+` km`;

        for (let i = 0; i < 24; i++) {
            document.querySelector(".hourly-weather-" + i).innerHTML = getWeatherIcon(weather.forecast.forecastday[1].hour[i].condition.code,weather.forecast.forecastday[1].hour[i].is_day);
        }

        document.querySelector(".weather-sticker").innerHTML=getWeatherIcon(weather.forecast.forecastday[1].day.condition.code,1);
        document.querySelector(".weather-sticker svg").classList.add("expand-weather");

        document.querySelectorAll(".precipitation").forEach((precipitation, i) => {

            const hour = weather.forecast.forecastday[1].hour[i];

            precipitation.querySelector("p").textContent =`${hour.precip_mm}mm`;

            if (hour.will_it_rain) {
                precipitation.classList.remove("display-none");
            } else {
                precipitation.classList.add("display-none");
                console.log("display none applied");
            }
            console.log("Loop is running");
        });
    }

    else if (dayIndex === 2) {
        console.log("Tomorrow selected");
        document.querySelector(".estimated-temperature").innerHTML=`<span class="temp-number">`+
                                                                    Math.floor(weather.forecast.forecastday[2].day.avgtemp_c)+
                                                                    `</span><span class="degree-symbol">°C</span>`;

        if ( forecastWeatherDayAfterTmrw===`Thunder`) { 
            document.querySelector(".weather-type").textContent="Thunder Storm";
            document.querySelector(".sky-value").textContent="Thunder Storm";
        } else if( forecastWeatherDayAfterTmrw===`Sunny`){ 
            if( weather.current.is_day===1){
                document.querySelector(".weather-type").textContent="Sunny";
                document.querySelector(".sky-value").textContent="Sunny";
            } else { 
                document.querySelector(".weather-type").textContent="Clear Sky";
                document.querySelector(".sky-value").textContent="Clear Sky";
            }
        } else { 
            document.querySelector(".weather-type").textContent=forecastWeatherDayAfterTmrw;
            document.querySelector(".sky-value").textContent=forecastWeatherDayAfterTmrw;
            weatherEffects(forecastWeatherDayAfterTmrw);
        }

        document.querySelector(".feels-like").classList.add("display-none");

        const uv_index = document.querySelector(".uv");
        const uv_emoji = document.querySelector(".uv-icon");
        const uv_text = document.querySelector(".uv-text");
        const uv_status = document.querySelector(".uv-status");
        const uv_value = document.querySelector(".uv-value");

        uv_index.classList.remove("purple", "red", "orange", "yellow", "green");
        uv_emoji.classList.remove("purple", "red", "orange", "yellow", "green");
        uv_value.classList.remove("purple", "red", "orange", "yellow", "green");

        if (weather.forecast.forecastday[2].day.uv >= 11) {
            uv_index.classList.add("purple");
            uv_emoji.classList.add("purple");
            uv_value.classList.add("purple");
            uv_text.textContent = "Extreme";
           uv_value.innerHTML=weather.forecast.forecastday[2].day.uv+` <br> <span class="uv-status">Extreme</span>`;
        } else if (weather.forecast.forecastday[2].day.uv <= 10.99 && weather.forecast.forecastday[2].day.uv >= 8) {
            uv_index.classList.add("red");
            uv_emoji.classList.add("red");
            uv_value.classList.add("red");
            uv_text.textContent = "Very High";
            uv_value.innerHTML=weather.forecast.forecastday[2].day.uv+` <br> <span class="uv-status">Very High</span>`;
        } else if (weather.forecast.forecastday[2].day.uv <= 7.99 && weather.forecast.forecastday[2].day.uv >= 6) {
            uv_index.classList.add("orange");
            uv_emoji.classList.add("orange");
            uv_value.classList.add("orange");
            uv_text.textContent ="High";
            uv_value.innerHTML=weather.forecast.forecastday[2].day.uv+` <br> <span class="uv-status">High</span>`;
        } else if (weather.forecast.forecastday[2].day.uv <= 5.99 && weather.forecast.forecastday[2].day.uv >= 3) {
            uv_index.classList.add("yellow");
            uv_emoji.classList.add("yellow");
            uv_value.classList.add("yellow");
            uv_text.textContent="Moderate";
            uv_value.innerHTML=weather.forecast.forecastday[2].day.uv+` <br> <span class="uv-status">Moderate</span>`;
        } else {
            uv_index.classList.add("green");
            uv_emoji.classList.add("green");
            uv_value.classList.add("green");
            uv_text.textContent="Low";
            uv_value.innerHTML=weather.forecast.forecastday[2].day.uv+` <br> <span class="uv-status">Low</span>`;
        }

        uv_value.style.border="none";

        document.querySelector(".uv-weather-section-text").textContent=` UV `+Math.floor(weather.forecast.forecastday[2].day.uv)+` ·`;

        for(let i =0;i<24;i++){
            document.querySelector(".hour-"+i+" .hourly-temperature").innerHTML= Math.floor(weather.forecast.forecastday[2].hour[i].temp_c)+`°C`;
        }


        document.querySelector(".sunrise-text").innerHTML=weather.forecast.forecastday[2].astro.sunrise;
        document.querySelector(".sunset-text").innerHTML=weather.forecast.forecastday[2].astro.sunset;
        document.querySelector(".high-low-text").innerHTML=weather.forecast.forecastday[2].day.maxtemp_c+`°/`+weather.forecast.forecastday[2].day.mintemp_c+`°`;
        document.querySelector(".wind-text").innerHTML=weather.forecast.forecastday[2].day.maxwind_kph+` km/h`;
        document.querySelector(".humidity-text").innerHTML=weather.forecast.forecastday[2].day.avghumidity+`%`;
        document.querySelector(".visibility-text").innerHTML=weather.forecast.forecastday[2].day.avgvis_km+` km`;

        for (let i = 0; i < 24; i++) {
            document.querySelector(".hourly-weather-" + i).innerHTML = getWeatherIcon(weather.forecast.forecastday[2].hour[i].condition.code,weather.forecast.forecastday[2].hour[i].is_day);
        }

        document.querySelector(".weather-sticker").innerHTML=getWeatherIcon(weather.forecast.forecastday[2].day.condition.code,1);
        document.querySelector(".weather-sticker svg").classList.add("expand-weather");

        document.querySelectorAll(".precipitation").forEach((precipitation, i) => {

            const hour = weather.forecast.forecastday[2].hour[i];

            precipitation.querySelector("p").textContent =`${hour.precip_mm}mm`;

            if (hour.will_it_rain) {
                precipitation.classList.remove("display-none");
            } else {
                precipitation.classList.add("display-none");
                console.log("display none applied");
            }
            console.log("Loop is running");
        });
    }
}


function createRain() {
    const rain = document.querySelector(".rain");

    const pageHeight = document.documentElement.scrollHeight;

    rain.style.height = pageHeight + "px";

    document.documentElement.style.setProperty(
        "--rain-distance",
        pageHeight + "px"
    );

    rain.innerHTML = "";

    for (let i = 0; i < 140; i++) {

        const drop = document.createElement("div");

        drop.className = "raindrop";

        drop.style.left = Math.random() * 100 + "%";

        drop.style.animationDelay = Math.random() * 2 + "s";

        drop.style.animationDuration =
            (0.6 + Math.random() * 0.5) + "s";

        rain.appendChild(drop);
    }
}


function createSnow() {

    const snow = document.querySelector(".snow");

    const pageHeight = document.documentElement.scrollHeight;

    snow.style.height = pageHeight + "px";

    document.documentElement.style.setProperty(
        "--snow-distance",
        pageHeight + "px"
    );

    snow.innerHTML = "";

    for(let i=0;i<90;i++){

        const flake=document.createElement("div");

        flake.className="snowflake";

        flake.style.left=Math.random()*100+"%";

        flake.style.animationDelay=Math.random()*6+"s";

        flake.style.animationDuration=
            (5+Math.random()*5)+"s";

        flake.style.opacity=Math.random();

        snow.appendChild(flake);

    }

}



function createFog(){

    const fog=document.querySelector(".fog");

    fog.innerHTML="";

    for(let i=0;i<6;i++){

        const layer=document.createElement("div");

        layer.className="fog-layer";

        layer.style.top=(i*22)+"%";

        layer.style.animationDelay=(i*2)+"s";

        fog.appendChild(layer);

    }

}



function createThunder() {

    const flash = document.querySelector(".thunder-flash");
    const bolt = document.querySelector(".lightning");

    function strike() {

        // ⭐ RANDOM SKY POSITION (TOP AREA ONLY)
        const x = Math.random() * 90;
        const y = Math.random() * 15;

        bolt.style.left = x + "%";
        bolt.style.top = y + "%";

        // ⭐ RESET STATE (IMPORTANT)
        bolt.style.opacity = 0;
        flash.style.opacity = 0;

        // ⭐ force render update (prevents invisible frames)
        bolt.getBoundingClientRect();

        // ⚡ SHOW BOLT FIRST (make it actually visible)
        bolt.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 300,
            fill: "forwards"
        });

        // 💥 MAIN FLASH + bolt sync
        setTimeout(() => {

            flash.animate([
                { opacity: 0 },
                { opacity: 0.5, offset: 0.2 },
                { opacity: 0 }
            ], {
                duration: 160,
                easing: "ease-out"
            });

            bolt.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 160,
                fill: "forwards"
            });

        }, 180);

        // ⚡ DOUBLE LIGHTNING
        if (Math.random() < 0.35) {

            setTimeout(() => {

                flash.animate([
                    { opacity: 0 },
                    { opacity: 0.5, offset: 0.2 },
                    { opacity: 0 }
                ], {
                    duration: 120
                });

                bolt.animate([
                    { opacity: 0 },
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 120
                });

            }, 200);
        }

        // 🔁 LOOP STORM
        thunderTimer = setTimeout(() => {
            strike();
        }, 5000 + Math.random() * 8000);
    }

    strike();
}


function clearEffects() {

    const rain = document.querySelector(".rain");
    const snow = document.querySelector(".snow");
    const fog = document.querySelector(".fog");

    const flash = document.querySelector(".thunder-flash");
    const bolt = document.querySelector(".lightning");

    clearTimeout(thunderTimer);

    const hasEffects =
        rain.children.length ||
        snow.children.length ||
        fog.children.length;

    if (!hasEffects) {
        return Promise.resolve();
    }

    rain.classList.add("fade-out");
    snow.classList.add("fade-out");
    fog.classList.add("fade-out");

    if (flash) flash.style.opacity = "0";
    if (bolt) bolt.style.opacity = "0";

    return new Promise(resolve => {

        setTimeout(() => {

            rain.innerHTML = "";
            snow.innerHTML = "";
            fog.innerHTML = "";

            rain.classList.remove("fade-out");
            snow.classList.remove("fade-out");
            fog.classList.remove("fade-out");

            resolve();

        }, 600);

    });

}

async function weatherEffects(group){

    await clearEffects();

    switch(group){

        case "Raining":
            createRain();
            break;

        case "Snowing":
            createSnow();
            break;

        case "Foggy":
            createFog();
            break;
        
        case "Thunder":

            createRain();   

            createThunder();

            break;
    }
}