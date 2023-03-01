import Joi from "joi"

const schema = Joi.object({
    name: Joi
        .string()
        .required(),
    mail: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  }),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(50),
    photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
})

export default schema