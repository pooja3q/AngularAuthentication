
const express = require('express');
const User= require('../models/user');
const jwt = require('jsonwebtoken');
//var mongodb = require('mongodb');
  const mongoose = require('mongoose');

const router = express.Router()
const db ='mongodb://localhost:27017/EventHub'

mongoose.connect(db , err => {
if(err)
   {
       console.log(err);
   }
   else{
       console.log("connected to databASE----")
   }
})



router.get('/',(req,res)=>{
        res.send('Hello from api routes')
 })


 router.post('/register', (req,res) => {
   let userData = req.body
   let user = new User(userData)
 console.log('req data = '+userData)
   user.save((error , registerUser)=> {
       if(error){
           console.log("save err == "+err)
       }
       else{

           console.log('data saved')
           let playload = {subject:registerUser._id}
           let token = jwt.sign(playload,"SecretKey")
            res.status(200).send({token})
       }
   })
 })
    
 router.post('/login', (req,res) => {
    let userData = req.body
   // let user = new User(userData)
 
   User.findOne({email:userData.email},(err, user)=> {
     if(err){
          console.log(err)
     }else {
           if(!user)
           {
               res.status(401).send('Invalid Email')
           }
           else if(user.password!= userData.password){

            res.status(401).send('Invalid Password')

           }
           else{
            let playload = {subject:user._id}
            let token = jwt.sign(playload,"SecretKey")
               res.status(200).send({token})
           }
     }  

     }) 

  })

  router.get('/events',(req, res)=>{
   
  let events =[
      {
      "_id":'1',
      "name":"Pooja",
      "description":"Female",
      "date":"30-08-2019"
      },
      {
        "_id":'2',
        "name":"Amit",
        "description":"Male",
        "date":"30-08-2019"
        },
        {
            "_id":'3',
            "name":"Kajal",
            "description":"Female",
            "date":"30-08-2019"
        },
        {
                "_id":'4',
                "name":"Arushi",
                "description":"Female",
                "date":"30-08-2019"
                },
                {
                    "_id":'5',
                    "name":"Vidhi",
                    "description":"Female",
                    "date":"30-08-2019"
                    }
]

res.status(200).send(events)
  })


  router.get('/specialevents',(req, res)=>{
   
    let specialEvents =[
        {
        "_id":'1',
        "name":"Pooja",
        "description":"Female",
        "date":"30-08-2019"
        },
        {
          "_id":'2',
          "name":"Amit",
          "description":"Male",
          "date":"30-08-2019"
          },
          {
              "_id":'3',
              "name":"Kajal",
              "description":"Female",
              "date":"30-08-2019"
          }
          
  ]
  
  res.status(200).send(specialEvents)
    })
  


module.exports =router;

