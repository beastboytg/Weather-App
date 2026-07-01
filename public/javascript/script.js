document.querySelector(".search-bar").addEventListener("focus", () => {
    document.querySelector(".suggestions").classList.remove("hidden");
});

document.querySelector(".search-bar").addEventListener("blur", () => {
    document.querySelector(".suggestions").classList.add("hidden");
});



document.querySelectorAll(".choice").forEach(city => {
    city.addEventListener("click", () => {
        document.querySelector(".search-bar").value = city.textContent.trim();

        document.querySelector(".input-form").submit();
    });
});



const uv_index = document.querySelector(".uv");
const uv_emoji = document.querySelector(".uv-icon");
const uv_text = document.querySelector(".uv-text");
if (window.uv >= 11) {
    uv_index.classList.add("purple");
    uv_emoji.classList.add("purple");
    uv_text.textContent = "Extreme";
} else if (window.uv <= 10.99 && window.uv >= 8) {
    uv_index.classList.add("red");
    uv_emoji.classList.add("red");
    uv_text.textContent = "Very High";
} else if (window.uv <= 7.99 && window.uv >= 6) {
    uv_index.classList.add("orange");
    uv_emoji.classList.add("orange");
    uv_text.textContent ="High";
} else if (window.uv <= 5.99 && window.uv >= 3) {
    uv_index.classList.add("yellow");
    uv_emoji.classList.add("yellow");
    uv_text.textContent="Moderate";
} else {
    uv_index.classList.add("green");
    uv_emoji.classList.add("green");
    uv_text.textContent="Low";
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
    Foggy: [1030, 1135, 1147, 1012],
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
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="32" width="32">
  <defs>
    <radialGradient id="sky" cx="50%" cy="75%" r="80%">
      <stop offset="0%" stop-color="#234f91"/>
      <stop offset="100%" stop-color="#00154a"/>
    </radialGradient>

    <clipPath id="circleClip">
      <circle cx="256" cy="256" r="250"/>
    </clipPath>

    <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <g clip-path="url(#circleClip)">
    <!-- Sky -->
    <rect width="512" height="512" fill="url(#sky)"/>

    <!-- Moon -->
    <g filter="url(#moonGlow)">
      <circle cx="180" cy="185" r="92" fill="#F6E7C0"/>
      <circle cx="230" cy="170" r="92" fill="url(#sky)"/>
    </g>

    <!-- Moon Craters -->
    <g opacity="0.18">
      <circle cx="138" cy="140" r="10" fill="#c9b38d"/>
      <circle cx="130" cy="180" r="16" fill="#c9b38d"/>
      <circle cx="145" cy="225" r="13" fill="#c9b38d"/>
      <circle cx="170" cy="110" r="7" fill="#c9b38d"/>
      <circle cx="180" cy="250" r="10" fill="#c9b38d"/>
      <circle cx="205" cy="275" r="8" fill="#c9b38d"/>
      <circle cx="150" cy="205" r="6" fill="#c9b38d"/>
      <circle cx="165" cy="155" r="5" fill="#c9b38d"/>
      <circle cx="190" cy="215" r="7" fill="#c9b38d"/>
    </g>

    <!-- Large Stars -->
    <g fill="#fffdf0" filter="url(#starGlow)">
      <path d="M300 70 L305 90 L325 95 L305 100 L300 120 L295 100 L275 95 L295 90 Z"/>
      <path d="M420 250 L425 270 L445 275 L425 280 L420 300 L415 280 L395 275 L415 270 Z"/>
      <path d="M95 275 L100 295 L120 300 L100 305 L95 325 L90 305 L70 300 L90 295 Z"/>
      <path d="M395 145 L400 165 L420 170 L400 175 L395 195 L390 175 L370 170 L390 165 Z"/>
    </g>

    <!-- Medium Stars -->
    <g fill="#fffdf0">
      <path d="M240 165 L244 177 L256 181 L244 185 L240 197 L236 185 L224 181 L236 177 Z"/>
      <path d="M375 340 L379 352 L391 356 L379 360 L375 372 L371 360 L359 356 L371 352 Z"/>
      <path d="M170 385 L174 397 L186 401 L174 405 L170 417 L166 405 L154 401 L166 397 Z"/>
      <path d="M320 355 L324 367 L336 371 L324 375 L320 387 L316 375 L304 371 L316 367 Z"/>
    </g>

    <!-- Small Stars -->
    <g fill="#ffffff" opacity="0.9">
      <circle cx="120" cy="80" r="2"/>
      <circle cx="200" cy="60" r="2"/>
      <circle cx="350" cy="55" r="2"/>
      <circle cx="410" cy="95" r="2"/>
      <circle cx="90" cy="150" r="2"/>
      <circle cx="270" cy="120" r="2"/>
      <circle cx="330" cy="180" r="2"/>
      <circle cx="455" cy="200" r="2"/>
      <circle cx="135" cy="350" r="2"/>
      <circle cx="225" cy="430" r="2"/>
      <circle cx="350" cy="400" r="2"/>
      <circle cx="430" cy="350" r="2"/>
      <circle cx="280" cy="250" r="2"/>
      <circle cx="370" cy="260" r="2"/>
      <circle cx="210" cy="300" r="2"/>
      <circle cx="150" cy="250" r="2"/>
      <circle cx="380" cy="110" r="2"/>
      <circle cx="430" cy="180" r="2"/>
      <circle cx="300" cy="420" r="2"/>
      <circle cx="170" cy="420" r="2"/>
    </g>

    <!-- Back Clouds -->
    <path
      d="M0 390
         Q30 350 70 370
         Q90 335 130 360
         Q160 325 205 355
         Q240 315 290 350
         Q330 320 380 355
         Q420 320 470 360
         Q490 330 512 350
         L512 512
         L0 512 Z"
      fill="#001d63"/>

    <!-- Front Clouds -->
    <path
      d="M0 425
         Q25 390 65 410
         Q95 370 140 405
         Q170 370 220 400
         Q260 365 310 400
         Q350 370 395 405
         Q440 370 512 420
         L512 512
         L0 512 Z"
      fill="#00134a"/>
  </g>

  <!-- Circular Border -->
  <circle
    cx="256"
    cy="256"
    r="250"
    fill="none"
    stroke="#00103a"
    stroke-width="8"/>
</svg>`
        
    }

    return iconFiles[group] || "default.svg";
}
for (let i = 0; i < 24; i++) {
    document.querySelector(".hourly-weather-" + i).innerHTML = getWeatherIcon(weather.forecast.forecastday[0].hour[i].condition.code,weather.forecast.forecastday[0].hour[i].is_day);
}




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
        // Show today's weather
    }

    else if (dayIndex === 1) {
        console.log("Tomorrow selected");
        // Show tomorrow's weather
    }

    else if (dayIndex === 2) {
        console.log("Day after tomorrow selected");
        // Show day after tomorrow's weather
    }
}
