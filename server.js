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
app.get('/api/data', async(req, res)=>{
    
    try{
        const getCars = await pool.query("SELECT id FROM cars");
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