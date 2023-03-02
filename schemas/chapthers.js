import Joi from "joi"

const schema = Joi.object({
    title: Joi
        .string()
        .required(),
        // .message({
        //     'string.min': 'the title must be at least 4 characteres',
        //     'string.empty': 'the title cannot be empty',
        //     'any.required': 'the title is required',
        // }),
    order: Joi
        .number()
        .min(1),
    pages: Joi
        .array().items(Joi.string())
        .required()
        .min(1),
        // .message({
        //     'any.required': 'the pages have to be url',
        //     'string.empty': 'the pages cannot be empty'
        // })
    manga_id: Joi
    .string()
    .required(),
    
    cover_photo: Joi
    .string(),
    
    timestamps: Joi
    .string(),
})

export default schema