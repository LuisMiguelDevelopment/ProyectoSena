const User = require('../models/Usuarios');
const bcrypt = require('bcryptjs');
const { createToeknAccess } = require('../libs/jwt.js');

exports.register = async (req , res)=>{
  const {Email,Contrasena, Nombre}= req.body;

  try {
      const userFound = await User.findOne({Email})
      if(userFound) return res.status(400).json(["The email is already in use"])

      const passwordHash = await bcrypt.hash(Contrasena, 10)
      const newUser = new User({
         Nombre,
         Email,
         Contrasena:passwordHash 
      });
      const userSaved = await newUser.save();
      const token = await createToeknAccess({id:userSaved._id});
      res.cookie('token',token)
      res.status(201).json({
          id:userSaved._id,
          Nombre:userSaved.Nombre,
          Email :userSaved.Email
      });
  } catch (error) {
      res.status(500).json({message:error.message})
  }

};


exports.login = async (req , res)=>{
  const {Email,Contrasena}= req.body;
  try {
      const userFound = await User.findOne({Email})
       if(!userFound) return res.status(400).json({message : "User not found"});

      const isMatch = await bcrypt.compare(Contrasena , userFound.Contrasena);
      if(!isMatch) return res.status(400).json({message: "Error in Credentials"});

      
      const token = await createToeknAccess({id:userFound._id});
      res.cookie('token',token)
      res.status(201).json({
          id:userFound._id,
          Nombre:userFound.Nombre,
          email :userFound.Email
      });
  } catch (error) {
      res.status(500).json({message:error.message})
  }

};



exports.logout = (req, res)=>{
  res.cookie('token','',{
      expires : new Date(0),
  });
  return res.sendStatus(200);
}


exports.profile = async (req, res)=>{
  const userFound = await User.findById(req.user.id);
  if(!userFound) return res.status(400).json({message:"User not Found"})

  res.status(201).json({
      id:userFound._id,
      username:userFound.Nombre,
      email :userFound.Email
  });
}