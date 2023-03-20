import { Author } from "../../models/Author.js";
// import createError(404, ) 

const controller = {
  update: async (req, res, next) => {
    try {
      let author = await Author.findOneAndUpdate({ user_id: req.user }, req.body, { new: true })
      if (author) {
        return res.status(200).json({
          success: true,
          author,
        });
      }
      return next ( { //aca tengo que colocar el middle de errores
        success: false,
        message: "No authors found",
      });
    } catch (error) { //aca tambien
      return res.status(400).json({
        success: false,
        message: "Unexpected error",
      });
    }
  },
};

export default controller;
