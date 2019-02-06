const jwt = require('jsonwebtoken');
const config = require('config')

exports.checkAuth = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers["x-access-token"];
     if(token){
      
        jwt.verify( token , config.get('dbConfig.jwtSecretKey'), function (err, decoded) {
        if (err) {
            return res.status(202).json({
                "error": true,
                "error_message": "Invalid Token!"
            })
        }
        else {
            
            req.body.user_id = decoded.id;
            next();
        }
        })
     }else {
        return res.status(202).json({
            "error": true,
            "error_message": "Invalid Token!"
        })
    
    }
  
}