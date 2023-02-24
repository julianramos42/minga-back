import mongoose, { Schema } from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    mail: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

let User = mongoose.model("users", schema)

export default User