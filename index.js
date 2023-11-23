import express from 'express';


const app = express()

app.listen(5001, () => console.log("Api tunning in the PORT 5001"))

app.get('/', (req,res) => res.json("My API is running"))