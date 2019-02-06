const connection = require('./../config/dbConnection');


exports.register = (userDetail)=>{
    return new Promise((resolve,reject)=>{
        let {first_name,last_name,email,password} = userDetail;
        const query = "insert into users (first_name,last_name,email,password) values(?,?,?,?)";
        connection.query(query, [first_name,last_name,email,password],function (err, result) {
            if (err) {
               reject(err);
            } else {
               resolve(result);
            }
        })
    })
} 

exports.getUserByEmail = (email)=>{
    return new Promise((resolve,reject)=>{
        const query = "select * from users where email = ? ";
        connection.query(query, [email],function (err, result) {
            if (err) {
               reject(err);
            } else {
               resolve(result);
            }
        })
    })
}

exports.getUserByEmailPassword = (email,password)=>{
    return new Promise((resolve,reject)=>{
        const query = "select * from users where email= ? && password = ?";
        connection.query(query,[email,password], function (err, result) {
            if (err) {
                 reject(err);
            } else {
                resolve(result);
            }
        })
    })
   
}