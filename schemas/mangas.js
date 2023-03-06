import Joi from 'joi-oid';

const schema = Joi.object({
    company_id: Joi
        .objectId(),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
      }),
    cover_photo: Joi
        .string()
        .required(),
    description: Joi
        .string()
        .required()
        .min(20)
        .max(200)
        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
      }),
    categoria: Joi
        .string()
        .required()
        .min(2)
        .max(30)
        .messages({
            "string.min": "The categoria must have at least 20 characters",
            "string.max": "The categoria must have a maximum of 200 characters",
      }),
    category_id: Joi
        .objectId()
        .required(),


})

export default schema