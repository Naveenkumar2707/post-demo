const connection = require('./../config/dbConnection');


exports.insertComment = (commentDeatil)=>{
 
    return  new Promise((resolve,reject)=>{
      let {user_id,post_id,comment} = commentDeatil;
      const query = "insert into comment (user_id,post_id, comment) values(?,?,?)";
      connection.query(query, [user_id,post_id,comment],function (err, result) {
        if (err) {
           console.log(err);
           reject(err);
        } else {
           resolve(result);
        }
    }) 
   })

}

exports.getCommentById = (commentId )=>{
   return  new Promise((resolve,reject)=>{
      const query = "select com.comment_id,com.post_id,com.user_id,com.comment,com.created_at,us.first_name,us.last_name from comment as com  JOIN users as us on us.user_id = com.user_id where comment_id = ?";
      connection.query(query, [commentId],function (err, result) {
        if (err) {
           reject(err);
        } else {
           resolve(result[0]);
        }
    }) 
   })
}
exports.getCommentsByPostId = (postId )=>{
   return  new Promise((resolve,reject)=>{
      const query = "select  com.comment_id,com.post_id,com.user_id,com.comment,com.created_at,us.first_name,us.last_name from comment as com  JOIN users as us on us.user_id = com.user_id  where post_id = ?";
      connection.query(query, [postId],function (err, result) {
        if (err) {
           reject(err);
        } else {
           resolve(result);
        }
    }) 
   })
}

