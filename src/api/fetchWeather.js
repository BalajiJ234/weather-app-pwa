import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'c4ce45067498ecbcd81fa025f52c9196';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data;
}