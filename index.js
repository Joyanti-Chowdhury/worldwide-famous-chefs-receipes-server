// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 5000;

// const countries = require('./data/countries.json');
// const chef = require('./data/chefs.json')
 
// app.use(cors());


// app.get('/',(req ,res) =>{
//     res.send('Delicious food is getting ready')

// });

// app.get('/countries', (req,res) => {
//         res.send(countries)
// })

// app.get('/chef',(req,res)=>{
//     res.send(chef);
// })

// app.get('/chef/:id',(req, res)=>{
//             const id = req.params.id;
//             console.log(id);
//             const selectedChef = chef.find(c => c._id === id);
//             res.send(selectedChef);

// })


// app.get('/countries/:id',(req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     if(id == 0){
//         res.send(chef)
//     }
//     else{
//         console.log(chef[0].recipes[0].country_id);

//         const countryChefs = chef.filter(c => c.recipes[0].country_id == id);
//         res.send(countryChefs); 
//         console.log(countryChefs);
//     }
    
// })

// app.listen(port,() =>{
//     console.log(`Are you ready API is running:${port}`);
// })


const express = require("express")
const cors =require("cors");
const app = express();
app.use(cors());
const allChefsData = require("./data/chef.json")
const chef = require('./data/chef.json')


app.get('/',(req,res)=>{
    res.json({message:'hello'})
})



app.get("/alldata",(req,res) => {
   res.send(allChefsData)

})


app.get('/chef',(req,res) =>{
    res.send(chef);
})

app.get('/chef/:id',(req,res) =>{
        const id = req.params.id;
        console.log(id);
        const selectedChef = chef.find(c=>c._id === id);
        res.send(selectedChef)

})
app.listen(5000,() => {
    console.log("server is coming");
})





