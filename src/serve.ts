import { createApp } from "./app"
import router from "./routes/routes"
import { getPlayer } from "./controller/players-controllers"

const app = createApp()

app.use('/api', router)

router.get("/players", getPlayer)

app.listen(3000, ()=> {
  console.log( 'servidor hospedado na porta 3000')
} )

