import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


const port = 3000;
const app = express();
const weather_api_key = process.env.WEATHER_API_KEY;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

function weatherTypeFunc(code){
    const weatherGroups = {
        Sunny: [1000],
        Cloudy: [1003, 1006, 1009],
        Foggy: [1030, 1135, 1147, 1012, 1021],
        Raining: [1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246],
        Snowing: [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258],
        Thunder: [1087, 1273, 1276, 1279, 1282]
    };
    return Object.keys(weatherGroups).find(type => weatherGroups[type].includes(code)) || "other";
}

app.get("/weather", async (req,res) =>{
    try {
        const location = req.query.location;
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${weather_api_key}&q=${location}&days=3`);
        
        
        
        const code = response.data.current.condition.code;
        const weatherType = weatherTypeFunc(code);
        const forecastWeatherTMRW = weatherTypeFunc(response.data.forecast.forecastday[1].day.condition.code);
        const forecastWeatherDayAfterTmrw = weatherTypeFunc(response.data.forecast.forecastday[2].day.condition.code);
        
        
        const data={city:req.query.location, weather:response.data, weatherType,forecastWeatherDayAfterTmrw,forecastWeatherTMRW};

        res.render("index.ejs",data);

    } catch (error) {
        res.render("index", {
            city:req.query.location,
            error: "No! City Named ",
            weather: null,
        weatherType: null,
        forecastWeatherTMRW: null,
        forecastWeatherDayAfterTmrw: null,
        });
    }
});

app.listen(port , ()=>{
    console.log (`app running on port : ${port}`);
});