const config = require('config');
const commentModel = require('../model/comment-model');


/**
 * @Dev:- Naveen
 * @param :- req object with following param
 *         -first_name,last_name,email,password
 * @returns
 *    either json object of Success code and message
 *    or json object of Error code and message
 */

exports.createComment = async (req, res, next) => {
   
   try {
    let reqDeatil = {...{},"user_id" :  req.body.user_id,"post_id": req.body.post_id, "comment"  : req.body.comment };
    let commentDetail = await commentModel.insertComment(reqDeatil);
    console.log(commentDetail);
    if(commentDetail.insertId){
        let postDeatilFromDb = await commentModel.getCommentById(commentDetail.insertId);
        res.status(200).json({
         status_code:200,
         error: false,
         error_msg: "",
         message: "Status Updated Successfully!",
         data : postDeatilFromDb
       }) 
     } else {
         res.status(500).json({
             "status_err" :  500,
             "error_msg": 'Internal Server Error'
          })
     } 

   } catch (error) {
    res.status(500).json({
        "status_err" :  500,
            "error_msg": 'Internal Server Error'
          })
   }
    
    
   
}


exports.getAllCommentsOfPost = async ( req , res , next)=>{
   try {
    let postDeatilFromDb = await commentModel.getCommentsByPostId(req.body.post_id);
    res.status(200).json({
     status_code:200,
     error: false,
     error_msg: "",
     message: "Success!",
     data : postDeatilFromDb
    })     
   } catch (error) {
    res.status(500).json({
        "status_err" :  500,
            "error_msg": 'Internal Server Error'
          })
   }
}