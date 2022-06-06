const validator=((req,res,next)=>{

    if(JSON.stringify(req.query.name).length<3){

        res.send("Name is required!")

        return
    }
    else if((!isNaN(parseInt( (req.query.name))))){

        res.send("Please insert your name correctly!")

        return
    }
    
    next()
})


module.exports=validator