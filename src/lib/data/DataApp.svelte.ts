import { API, goto } from '$lib/global';

class DataApp{
  name = $state('')
  loading = $state(false)

  async submitService(){
    if(this.name.length < 2){
      alert("Please enter your full name.")
      return
    }
    this.loading = true

    const response = await API.post('/service', { name: this.name })
    console.log(response)
this.loading = false
goto('/service/list')
  }
}

export default new DataApp()
