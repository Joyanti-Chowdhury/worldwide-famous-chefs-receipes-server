const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const countries = require('./data/countries.json');
const chef = require('./data/chefs.json')
 
app.use(cors());


app.get('/',(req ,res) =>{
    res.send('Delicious food is getting ready')

});

app.get('/countries', (req,res) => {
        res.send(countries)
})


app.get('/chef',(req,res)=>{
    res.send(chef);
})

app.get('/chef/:id',(req, res)=>{
            const id = req.params.id;
            console.log(id);
            const selectedChef = chef.find(c => c._id === id);
            res.send(selectedChef);

})




app.listen(port,() =>{
    console.log(`Are you ready API is running:${port}`);
})

