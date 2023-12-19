const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      role: {
        type: String,
        required: [true, "role is required"],
        enum: ["admin", "collage", "student"],
      },
      email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "password is requied"],
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("users", userSchema);