import mongoose from "mongoose";

let schema = new mongoose.Schema({
    manga_id: {type: mongoose.Schema.Types.ObjectId, ref:"mangas", required: true},
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: [{ type: String, required: true }],
    order: { type: Number , required: false},
    

}, {
    timestamps: true,required:true
})


let Chapther = mongoose.model('chapthers',schema)

export default Chapther