import express from 'express';


const app = express()

app.listen(5001, () => console.log("Hola Sofia, te amo mucho!!"))

app.get('/', (req,res) => res.json("My API is running"))