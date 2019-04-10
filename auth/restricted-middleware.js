const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secrete = require('../config/secrets')

const Users = require('../users/users-model');

module.exports = (req, res, next) => {
  const token= req.headers.authorization;

  if(token){
    jwt.verify(token, secrete.jwtSecret, (error, decodedToken
    ) => {
    if(error){
      res.status(400).json({ you: 'cant touh this'})
    } else {
      req.decodedJWT = decodedToken;
      console.log('decoded ting ', req.decodedJWT);
      next();
    }
    })
  } else {
    res.status(400).json({message: 'No buzz light year details'})
  }
 
};
