const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secret')

module.exports = (req, res, next) => {
  const token = req.headers.authorization; 


  if(token){
     jwt.verify(token, jwtSecret, (err, decoded) => {
       if(err){
          // the token is not valid 
          res.status(401).json({ you: 'cant touch this'})
       } else {
          next()
       }
     })
  } else {
    res.status(401).json({message: "you shall not pass"})
  }
};
