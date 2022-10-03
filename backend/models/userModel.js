const mongoose =require ("mongoose");
const validator = require ("validator");
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto")

const userSchema = new mongoose.Schema({

    name :{
        type : String,
        required : [true,"please enter your name"],
        maxLength: [30,"name cannot exceed four letters"],
        minLength : [4,"name should e grater than 4 characters"]
    },
    email :{
        type : String,
        required : [true,"please enter your email"],
        unique: true,
        validate : [validator.isEmail,"enter a valid email"]
    },
    password : {
        type : String,
        required : [true,"please enter your password"],
        minLength : [8,"password should be grater than 8 characters"],
        select :false
    },
    avatar : {
        public_id :{
            type : String,
            required: true
        },
        url : {
            type : String,
            required: true
        }
    },
    role :{
             type: String,
             default : "user",
    },

    createdAt :{
          type : Date,
          default : Date.now,
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date,
})


userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
     
         next();
    }
this.password = await bcrypt.hash(this.password,10);

})

// jwt token 
userSchema.methods.getJWTToken = function(){
     return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRE ,
     })
}

// compare password 
userSchema.methods.comparePassword = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password); 
}

// generating password reset token 
userSchema.methods.getResetPasswordToken = function(){

    // generating token 
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and adding to userSchema 
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}


module.exports = mongoose.model("User",userSchema);