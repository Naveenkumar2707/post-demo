
const Cryptr = require('cryptr');
const config = require('config');
const cryptr = new Cryptr(config.get('dbConfig.secretkey'));
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');


/**
 * @Dev:- Naveen
 * @param :- req object with following param
 *         -first_name,last_name,email,password
 * @returns
 *    either json object of Success code and message
 *    or json object of Error code and message
 */

exports.register = async (req, res, next) => {

 let encryptPassword = cryptr.encrypt(req.body.password);
 try {
   let users = await userModel.getUserByEmail(req.body.email); //check user with given email is Already exist or not
    if(users.length > 0){ 
        res.status(409).json({
            status_code:409,
            error: true,
            error_msg: "User already exist with this email!",
            message: "",
          })
    } else { 
        let userDetail = {...{}, 'first_name': req.body.first_name,'last_name': req.body.last_name,'email': req.body.email,'password': encryptPassword};
        let registeredUser =  await userModel.register(userDetail); //insert new user record into databsae
        if(registeredUser.insertId){ 
         res.status(200).json({
             status_code:200,
             error: false,
             error_msg: "",
             message: "Registered Successful!",
           }) 
        } else {
         res.status(500).json({
            "status_err" :  500,
            "error_msg": 'Internal Server Error'
         })
        } 
    } 
 } catch (error) {
    res.status(500).json({
        "status_err" :  500,
            "error_msg": 'Internal Server Error'
    })
  } 
}


/**
 * @Dev:- Naveen
 * @param :- req object with following param
 *         -email,password
 * @returns
 *    either json object of Success code and message
 *    or json object of Error code and message
 */


exports.login = async (req, res, next) => {
console.log(req.body)
     try {
         let userDetail = await userModel.getUserByEmail(req.body.email);
         if(userDetail.length <= 0){
            res.status(401).json({
                error: true,
                error_msg: "Wrong email or password!",
                message: ""
            }) 
        } else{
            const decryptedPassword = cryptr.decrypt(userDetail[0].password);
            if( decryptedPassword === req.body.password){
               const token = jwt.sign({ "id": userDetail[0].user_id,"email" : userDetail[0].email  }, config.get('dbConfig.jwtSecretKey'), { expiresIn: 60 * 60 })
               return res.status(200).json({
                   error: false,
                   error_msg: "",
                   message: "Authentication Successful",
                   data: {
                       "authToken": token,
                       "email": userDetail[0].email,
                       "user_id" : userDetail[0].user_id
                   }
   
               })
             } else {
               res.status(401).json({
                   error: true,
                   error_msg: "Wrong email or password!",
                   message: ""
               })  
             } 
        }
         
     } catch (error) {
        res.status(500).json({
            "status_err" :  500,
            "error_msg": 'Internal Server Error'
        })
     }
}


// exports.updateProfile = (req, res, next) => {
//     const query = "update employee set emp_name='" + req.body.emp_name + "',email='" + req.body.email + "',age=" + req.body.age + ",emp_salery=" + req.body.emp_salery + " where emp_id='" + req.empData + "'";
//     connection.query(query, function (err, result) {
//         if (err) {
//             return res.status(500).json(err)
//         }
//         else {
//             return res.status(200).json(result)
//         }
//     })

// }
// exports.viewProfile = (req, res, next) => {
//     const query = "select * from employee where emp_id='" + req.empData + "'";
//     connection.query(query, function (err, result) {
//         if (err) {
//             return res.status(500).json({
//                 error: err
//             })
//         }
//         else {
//             return res.status(200).json(result[0])
//         }
//     }
//     )
// }
// exports.first=(req,res,next)=>{
//     console.log("hello")
//     next();
// }
// exports.second=(req,res,next)=>{
//     return res.status(200).json({
//         "message":"hi"
//     })
// }



