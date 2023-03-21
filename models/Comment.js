import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        chapter_id: { type: mongoose.Types.ObjectId, ref: 'chapters', required: true },
        user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
        text: { type: String, required: true },
        commentable_id: { type: mongoose.Types.ObjectId, ref: 'comments'}
    },{
        timestamps: true
    }
)

export const Comment = mongoose.model('comments', schema)
