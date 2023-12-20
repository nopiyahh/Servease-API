const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}

const isAdmin = (req,res,next)=>{
  if(req.user.id_role === 3){
    next()
  }else{
    res.sendStatus(403).json({message:'forbidden'});
  }
}


module.exports = {authenticateToken,isAdmin};