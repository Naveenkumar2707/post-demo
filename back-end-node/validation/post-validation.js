const Joi = require('joi');

exports.checkCreatePost = (req,res,next)=>{
    const schema = Joi.object().keys({
        post_comment : Joi.string().min(3).required()
    })
    Joi.validate(req.body,schema,function(err,value){
        if(err){
            return res.status(400).json({
                "status_code":400,
                "error":true,
                "error_msg": err.details[0].message
            })
        }
        else{
            next();
        }
    })
}

exports.checkPostId = (req,res,next)=>{
    const schema = Joi.object().keys({
        post_id : Joi.number().required()
    })
    Joi.validate(req.body,schema,function(err,value){
        if(err){
            return res.status(400).json({
                "status_code":400,
                "error":true,
                "error_msg": err.details[0].message
            })
        }
        else{
            next();
        }
    })
}