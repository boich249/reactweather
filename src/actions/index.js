import axios from 'axios'
const API_KEY = 'eed34fdc2c3f1d48e21b6e40f5d9faa7'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},ca`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    } 
}