const Joi = require('joi');

exports.register=(req,res,next)=>{
    const schema = Joi.object().keys({
        first_name : Joi.string().min(3).required(),
        last_name : Joi.string().min(3).required(), 
        password: Joi.string().required(),
        email: Joi.string().email({ minDomainAtoms: 2 })
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
exports.login = (req,res,next)=>{
    const schema = Joi.object().keys({
        password: Joi.string().required(),
        email: Joi.string().email({ minDomainAtoms: 2 })
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

// exports.Profile=(req,res,next)=>{
//     const schema = Joi.object().keys({
//         token: Joi.string().required(),
//         emp_name: Joi.string(),
//         age: Joi.number().integer(),
//         emp_salery:Joi.number().integer(),
//         email: Joi.string().email({ minDomainAtoms: 2 })

//     })

//     Joi.validate(req.body,schema,function(err,value){
//         if(err){
//             return res.status(200).json({
//                 "status_code":200,
//                 "error":true,
//                 "error_msg": err.details[0].message
//             })
//         }
//         else{
//             next();
//         }

//     })

// }

