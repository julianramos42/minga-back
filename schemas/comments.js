import Joi from 'joi-oid';

const schema = Joi.object({
    chapter_id: Joi
        .objectId()
        .required(),
    text: Joi
        .string()
        .required()
        .min(3)
        .max(200)
        .messages({
            "string.min": "The comment must have at least 3 characters",
            "string.max": "The comment must have a maximum of 200 characters",
            'string.empty': 'The comment cannot be empty',
      })
})

export default schema