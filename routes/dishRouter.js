// express router comes together with express so don't need to install again
const express = require('express')

const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const Dishes =require('../models/dishes')

const dishRoute =express.Router()

dishRoute.use(bodyParser.json())
dishRoute.route('/')
.get((req , res ,next)=>{
    Dishes.find({})
    .then((dishes)=>{
        res.statusCode=200
        res.setHeader('Content-Type' , 'application/json')
        res.json(dishes)
    } , (err)=>next(err))
    .catch((err)=> next(err))
})
.post((req , res ,next)=>{
    Dishes.create(req.body)
    .then((dish)=>{
        console.log('Dish created succesfully' , dish)
        res.statusCode=200
        res.setHeader('Content-Type' , 'application/json')
        res.json(dish)

    }, (err)=>next(err))
    .catch((err)=> next(err))
} )
.put((req , res ,next)=>{
    res.statusCode =403
    res.end('PUT operatoin not supported on /dishes')

} )

.delete((req , res ,next)=>{
    Dishes.remove({})
    .then((resp)=>{
        res.statusCode=200
        res.setHeader('Content-Type' , 'application/json')
        res.json(resp)

    } , (err)=>next(err))
    .catch((err)=> next(err))
} )


dishRoute.route('/:dishId')
// .all((req , res ,next)=>{
//     res.statusCode =200
//     res.setHeader('Content-Type','text/html')
//     // when we modify the req/res here and call next() 
//     //the modified obj are carried on to next calls
//     next()
// })
.get((req , res ,next)=>{
    Dishes.findById(req.params.dishId)
    .then((dish)=>{
        res.statusCode=200
        res.setHeader('Content-Type' , 'application/json')
        res.json(dish)

    } , (err)=>next(err))
    .catch((err)=> next(err))
} )
.post((req , res ,next)=>{
    res.statusCode =403
    res.end('POST operatoin not supported on /dishes/:'+req.params.dishId)

} )
.put((req , res ,next)=>{
    
    Dishes.findByIdAndUpdate(req.params.dishId , {$set:req.body} , {new:true})
    .then((dish)=>{
        res.statusCode=200
        res.setHeader('Content-Type' , 'application/json')
        res.json(dish)

    } , (err)=>next(err))
    .catch((err)=> next(err))

} )

.delete((req , res ,next)=>{
    Dishes.findByIdAndRemove(req.params.dishId)
    .then((resp)=>{
        res.statusCode=200
        res.setHeader('Content-Type' , 'application/json')
        res.json(resp)

    } , (err)=>next(err))
    .catch((err)=> next(err))
} )

module.exports =dishRoute