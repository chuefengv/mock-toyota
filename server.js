const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db.js')
const path = require('path')

app.use(cors()); 
app.use(express.json());

// if deployed in production mode, serve the front end
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

//api route to GET city query from states database
app.get('/api/cars', async(req, res)=>{
    try{
        const getCars = await pool.query("SELECT cars.id, cars.name, cars.price, cars.mpg, images.link FROM cars INNER JOIN images ON cars.id=images.carid WHERE cars.id in (18, 17, 8, 10, 9, 6, 7, 3, 4, 16, 2, 12, 23) ORDER BY name");
        res.json(getCars.rows)
    }catch(err){
        console.log(err.message)
    }
})

app.get('/api/trucks', async(req, res)=>{
    try{
        const getCars = await pool.query("SELECT cars.id, cars.name, cars.price, cars.mpg, images.link FROM cars INNER JOIN images ON cars.id=images.carid WHERE cars.id in (24, 25)");
        res.json(getCars.rows)
    }catch(err){
        console.log(err.message)
    }
})

app.get('/api/suvs', async(req, res)=>{
    try{
        const getCars = await pool.query("SELECT cars.id, cars.name, cars.price, cars.mpg, images.link FROM cars INNER JOIN images ON cars.id=images.carid WHERE cars.id in (5, 19, 20, 21, 26, 13, 14, 1, 22, 15)");
        res.json(getCars.rows)
    }catch(err){
        console.log(err.message)
    }
})

app.get('/api/hybrids', async(req, res)=>{
    try{
        const getCars = await pool.query("SELECT cars.id, cars.name, cars.price, cars.mpg, images.link FROM cars INNER JOIN images ON cars.id=images.carid WHERE hybrid IS NOT NULL");
        res.json(getCars.rows)
    }catch(err){
        console.log(err.message)
    }
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Process is running on port ${process.env.PORT || 5000} LETS GO!`)
})