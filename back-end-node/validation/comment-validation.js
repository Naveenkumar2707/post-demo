const Joi = require('joi');

exports.checkCreateComment = (req,res,next)=>{
    const schema = Joi.object().keys({
        post_id : Joi.number().required(),
        comment : Joi.string().min(3).required()
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
exports.checkpostid = (req,res,next)=>{
    const schema = Joi.object().keys({
        post_id : Joi.number().required(),
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
