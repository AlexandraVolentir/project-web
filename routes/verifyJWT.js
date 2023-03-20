const jwt = require('jsonwebtoken');
function verifyJWT (req, res){
    console.log(req.headers.cookie);
    const start = req.headers.cookie.indexOf("token");
    const end = req.headers.cookie.length+1;
    const token = req.headers.cookie.substring(start,end).split("=")[1];
    const end2 = token.length;
    const token2 =token.substring(0,end2).split(",")[0];
    console.log("Acces Token: " + token2)
    return new Promise((resolve, reject) =>{
        jwt.verify(token2, process.env.TOKEN_SECRET, (err,user) =>{
            if(err){
                reject();
            }
            else{
                resolve(user);
            }
        })
    })
} 

function authorize (req,res){
    let user = null;

    return new Promise((resolve, reject)=>{
        try{
            verifyJWT(req,res).then((user)=>resolve(user))
        }
        catch{
            reject();
        }
    })
}

module.exports = {
    authorize: authorize
}