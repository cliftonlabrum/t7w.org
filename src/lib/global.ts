//Svelte
import { browser } from '$app/environment'
import { goto } from '$app/navigation'
import { page } from '$app/state'
import { replaceState } from '$app/navigation'
import { onMount, type Snippet } from 'svelte'

//Components
import Loader from '$lib/components/Loader.svelte'
import ButtonLink from '$lib/components/ButtonLink.svelte'
import Icon from '$lib/components/Icon.svelte'

//Data
import DataApp from '$lib/data/DataApp.svelte'

//Socket
import { io } from "socket.io-client"
const socket = io("http://localhost:5555", { path: '/t7w/' });
// socket.on('connect', () => {
//   console.log('connected, id:', socket.id)
// })

// socket.on('connect_error', (err) => {
//   console.error('socket connect error', err)
// })

import API from '$lib/api'

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
