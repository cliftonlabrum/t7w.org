//Svelte
import { browser } from '$app/environment'
import { goto } from '$app/navigation'
import { page } from '$app/state'
import { replaceState } from '$app/navigation'
import { onMount, type Snippet } from 'svelte'

//Components
import Loader from '$lib/components/Loader.svelte'
import ButtonLink from '$lib/components/ButtonLink.svelte'

//Data
import DataApp from '$lib/data/DataApp.svelte'

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

  //Components
  Loader,
  ButtonLink,

  //Data Controllers
  DataApp,
  
}
