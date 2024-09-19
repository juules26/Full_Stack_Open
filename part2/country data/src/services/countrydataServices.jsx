import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY // fetches value from .env file
const baseurl = "https://studies.cs.helsinki.fi/restcountries/api/all"
const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`
const getAll = () => {
    return axios.get(baseurl)
}

const getWeather = (location) => {
    return axios.get(`${weatherUrl}${location}`)
}

export default {getAll, getWeather}