//Svelte
import { browser, dev } from '$app/environment'
import { goto } from '$app/navigation'
import { page } from '$app/state'
import { replaceState } from '$app/navigation'
import { onMount, type Snippet } from 'svelte'
import axios from 'axios'
import { io } from "socket.io-client"

//Components
import Loader from '$lib/components/Loader.svelte'
import ButtonLink from '$lib/components/ButtonLink.svelte'
import Icon from '$lib/components/Icon.svelte'

//Data
import DataApp from '$lib/data/DataApp.svelte'

//URLs
let url = ''

if (dev) {
  //Dev
  url = 'http://localhost:5555'
}else{
  //Prod
  url = 'https://api.labrum.co'
}
const socket = io(url, { path: '/t7w/' });
const apiURL = `${url}/t7w/`

//==============================
//#region Auth Calls
//==============================
const API = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
})

//Exports
export {
  //Svelte
  browser,
  goto,
  page,
  replaceState,
  onMount,
  type Snippet,

  //Misc
  API,
  socket,

  //Components
  Loader,
  ButtonLink,
  Icon,

  //Data Controllers
  DataApp,
  
}
