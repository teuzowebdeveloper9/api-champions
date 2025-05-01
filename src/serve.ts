import { createApp } from "./app"

const app = createApp()

app.listen(3000, ()=> {
  console.log( 'servidor hospedado na porta 3000')
} )

