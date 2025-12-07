import axios from 'axios'
import { dev } from '$app/environment'

const baseURL = 'https://api.labrum.co/'
if (dev) {
  //Local dev
  //baseURL = 'http://localhost:8888/'
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

