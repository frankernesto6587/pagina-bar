import axios from "axios";
import config from '../config'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
const api = axios.create({baseURL:config.api_url})
export default api

