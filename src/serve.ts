import express, { json, Request, Response } from "express"

const app = express()
app.use(json())

app.get('/', (req:Request, res:Response )=> {
   res.send('hello express') 
   
} )

app.listen(3000, ()=> {
  console.log( 'servidor hospedado na porta 3000')
} )

