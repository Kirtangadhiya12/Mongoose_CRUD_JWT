const mongoose = require("mongoose");
const crypto = require('crypto');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required:true,
    max:1024,
    min:5
  }
  // hash:String,
  // salt : String
});
// UserSchema.methods.setPassword = function(password) {
// this.salt = crypto.randomBytes(16).toString('hex');
// this.hash = crypto.pbkdf2Sync(password, this.salt, 
//   1000, 20 ).toString(`hex`);
// }
//   UserSchema.methods.validPassword = function(password) {
//     const hash = crypto.pbkdf2Sync(password, 
//     this.salt, 1000, 20).toString(`hex`);
//     return this.hash === hash;
// };
module.exports = mongoose.model("User", UserSchema);
