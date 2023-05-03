const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const countries = require('./data/countries.json');
 
app.use(cors());


app.get('/',(req ,res) =>{
    res.send('Delicious food is getting ready')

});

app.get('/countries', (req,res) => {
        res.send(countries)
})

app.listen(port,() =>{
    console.log(`Are you ready API is running:${port}`);
})

