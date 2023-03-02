import mongoose, { Schema } from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    mail: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    is_online: { type: Boolean, required: true},
    is_admin: { type: Boolean, required: true },
    is_author: { type: Boolean, required: true },
    is_company: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true }
}, {
    timestamps: true, required: true
})

let User = mongoose.model("users", schema)

export default User