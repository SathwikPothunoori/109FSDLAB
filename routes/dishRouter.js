// express router comes together with express so don't need to install again
const express = require('express')

const bodyParser = require('body-parser')

const dishRoute =express.Router()

dishRoute.use(bodyParser.json())
dishRoute.route('/')
.all((req , res ,next)=>{
    res.statusCode =200
    res.setHeader('Content-Type','text/html')
    // when we modify the req/res here and call next() 
    //the modified obj are carried on to next calls
    next()
})
.get((req , res ,next)=>{
    res.end('The dishes are being made will send you soon!')
} )
.post((req , res ,next)=>{
    res.end(`<html><body>will add the ${req.body.name} dish </body></html>`)
} )
.put((req , res ,next)=>{
    res.statusCode =403
    res.end('PUT operatoin not supported on /dishes')

} )

.delete((req , res ,next)=>{
    res.end('Deleting all the dishes!')
} )


dishRoute.route('/:dishId')
.all((req , res ,next)=>{
    res.statusCode =200
    res.setHeader('Content-Type','text/html')
    // when we modify the req/res here and call next() 
    //the modified obj are carried on to next calls
    next()
})
.get((req , res ,next)=>{
    res.end('The dishes are being made will send you soon!')
} )
.post((req , res ,next)=>{
    res.statusCode =403
    res.end('POST operatoin not supported on /dishes/:'+req.params.dishId)

} )
.put((req , res ,next)=>{

    res.end('Will update the dish '+req.params.dishId+' as ' +req.body.name +' with deatials ' +req.body.description)

} )

.delete((req , res ,next)=>{
    res.end('Deleting all the dishes!')
} )

module.exports =dishRoute