import axios from "./axios";
let {get,post}=axios;
export const getWeatherAll=(data:any)=>get(`/getWeather/?location=${data}`,null);