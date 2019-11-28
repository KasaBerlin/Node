const User= require("../models/User")

    const auth=async(req,res,next)=>{
    const token=req.header("x-auth");
    try{
      const user=await User.findByIdToken(token)
      if(!user) throw new createError.notFound();
      req.user=user;
      req.token=token;
      next();
    } catch(e){
      next(e)
    }
  };

  module.exports=auth;