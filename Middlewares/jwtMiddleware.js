const jwtMiddlewares = (req,res,next)=>{
    console.log("Inside JWT Middleware");

    next()
    
}
module.exports=jwtMiddlewares