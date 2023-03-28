import { Reaction } from "../../models/Reaction.js"

async function oppositeReaction(req, res, next) {
    try {
        switch (req.body.name) {
            case "like":
                const reaction1 = await Reaction.findOne({manga_id: req.body.manga_id, name:"dislike", user_id: req.user._id})
                if(reaction1){
                    await Reaction.findOneAndDelete({_id: reaction1._id})
                }
                break;
            case "dislike":
                const reaction2 = await Reaction.findOne({manga_id: req.body.manga_id, name:"like", user_id: req.user._id})
                if(reaction2){
                    await Reaction.findOneAndDelete({_id: reaction2._id})
                }
                break;
            case "surprise":
                const reaction3 = await Reaction.findOne({manga_id: req.body.manga_id, name:"love", user_id: req.user._id})
                if(reaction3){
                    await Reaction.findOneAndDelete({_id: reaction3._id})
                }
                break;
            case "love":
                const reaction4 = await Reaction.findOne({manga_id: req.body.manga_id, name:"surprise", user_id: req.user._id})
                if(reaction4){
                    await Reaction.findOneAndDelete({_id: reaction4._id})
                }
                break;
        }
        
        next()
    } catch (err) {
        next(err)
    }
}
export default oppositeReaction