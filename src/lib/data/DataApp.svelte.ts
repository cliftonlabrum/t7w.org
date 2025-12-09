import { goto, socket } from '$lib/global';

class DataApp{
  name = $state('')
  loading = $state(false)

  //MARK: Heartbeat
  async start(){
    socket.on('t7w:start', (arg) => {
			console.log(`✅ ${arg}`)
		})
  }

  //MARK: Service
  async submitService(){
    if(this.name.length < 2){
      alert("Please enter your full name.")
      return
    }
    this.loading = true

    //await API.post('/service', { name: this.name })
    socket.emit('t7w:service:create', this.name)
    this.loading = false

    //>>>
    goto('/service/list?success=true')
  }
}

export default new DataApp()
