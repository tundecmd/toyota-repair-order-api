const User = require("../models/user.js");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


exports.signup = (req, res) => {
  // console.log('1111');
  User.findOne({ email: req.body.email })
      .exec( async (error, user) => {
        if (user) {
          return res.status(400).json({
            message: "user already registered"
          })
        }
//console.log('2222')
        const {
          firstName,
          lastName,
          email,
          password,
          username
        } = req.body;
// console.log('3333')
        const hash_password = await bcrypt.hash(password, 10);
        const _user = new User({
          firstName,
          lastName,
          email,
          hash_password,
          username
        });
// console.log('4444')
        _user.save((error, data) => {
          console.log(error);
          if (error) {
            return res.status(400).json({
              message: "something went wrong"
            })
          }
  // console.log('6666')
          if (data) {
    //        console.log(data)
            return res.status(201).json({
              message: "user created successfully!!!"
            })
          }
        })

      })
};

exports.signin = (req, res) => {

  User.findOne({ email: req.body.email })
      .exec((error, user) => {
        if (error) {
          return res.status(400).json({ error })
        }
        if (user) {
          if (user.authenticate(req.body.password)) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
            const { _id, firstName, lastName, email, fullName } = user;
      //      console.log('user', user)
            res.status(200).json({
              token,
              user: {
                _id: firstName, lastName, email, fullName
              }
            })
          } else {
            return res.status(400).json({
              message: "Invalid username and/or password"
            })
          }
        } else {
          return res.status(400).json({
            message: "Something went wrong"
          })
        }
      })
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({
    signout: "Signout successfully"
  })
};