const express = require('express')
const mongoose =  require('mongoose');
const cors =  require('cors');
const usermodel = require('./model/user')

const app =  express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/user_login");

app.post('/' , (req, res)=>{
    const {email, password} =  req.body;
     usermodel.findOne({email : email})
     .then(user => {
        if(user)
            {
                if(user.password === password)
                    {
                        res.json("Success")   
                    }
                    else
                    {
                        res.json("Incoorect Password")
                    }
            }
            else
            {
                res.json("No User Found");
            }
     })
})

app.post('/signup', (req, res)=>{
    usermodel.create(req.body)
    .then(emp => res.json(emp))
    .catch(err => res.json(err));
})

app.listen(5000, (req, res)=> {

    console.log("server running ");
})