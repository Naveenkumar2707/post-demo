

const config = require('config');
const postModel = require('../model/post-model');


/**
 * @Dev:- Naveen
 * @param :- req object with following param
 *         -first_name,last_name,email,password
 * @returns
 *    either json object of Success code and message
 *    or json object of Error code and message
 */

exports.createPost = async (req, res, next) => {
   try {
    let reqDeatil = {...{},"user_id" :  req.body.user_id,"post": req.body.post_comment }
    let postDetail = await postModel.insertPost(reqDeatil);
    if(postDetail.insertId){
       let postDeatilFromDb = await postModel.getPostDeatil(postDetail.insertId);
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

exports.getAllPost =async (req, res, next)=>{

  try {
    let allPost = await postModel.getAllPost();
    res.status(200).json({
      status_code:200,
      error: false,
      error_msg: "",
      message: "Success!",
      data : allPost
    }) 
  } catch (error) {
   res.status(500).json({
     "status_err" :  500,
         "error_msg": 'Internal Server Error'
       })
  }
}

