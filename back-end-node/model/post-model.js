const connection = require('./../config/dbConnection');


exports.insertPost = (postDeatil)=>{
 
    return  new Promise((resolve,reject)=>{
      let {user_id,post} = postDeatil;
      const query = "insert into post (user_id,post) values(?,?)";
      connection.query(query, [user_id,post],function (err, result) {
        if (err) {
           reject(err);
        } else {
           resolve(result);
        }
    }) 
   })

}

exports.getPostDeatil = (postId)=>{
 
    return  new Promise((resolve,reject)=>{
      const query = "select po.post_id,po.user_id,po.post,po.created_at,us.first_name,us.last_name from post as po join users as us on po.user_id = us.user_id  where post_id = ?";
      connection.query(query, [postId],function (err, result) {
        if (err) {
           reject(err);
        } else {
           resolve(result[0]);
        }
    }) 
   })

}
exports.getAllPost = ()=>{
    return  new Promise((resolve,reject)=>{
        const query = "select po.post_id,po.user_id,po.post,po.created_at,us.first_name,us.last_name from post as po join users as us on po.user_id = us.user_id  ";
        connection.query(query,function (err, result) {
          if (err) {
             reject(err);
          } else {
             resolve(result);
          }
      }) 
     })
}