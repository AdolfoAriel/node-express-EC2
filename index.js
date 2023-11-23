import express from 'express';


const app = express()

app.listen(5001, () => console.log("Api turning in the PORT 5001"))

app.get('/', (req,res) => res.json("Mira!! ya logre subir algo a la nube, te amo Sofia <3"))