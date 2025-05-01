import express, { json, } from "express"
import router from "./routes/routes";

export function createApp(){
    const app = express()
    app.use(json())
    
   app.use('/api', router)

    return app;
}

