import axios from 'axios'
import { dev } from '$app/environment'

let baseURL = 'https://api.labrum.co/t7w/'
if (dev) {
  //Local dev
  baseURL = 'http://localhost:5555/t7w/'
}

//==============================
//#region Auth Calls
//==============================
const API = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
})

export default API

