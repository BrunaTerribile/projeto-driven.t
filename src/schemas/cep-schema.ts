import Joi from "joi";

export const CepSchema = Joi.object({
    cep: Joi.number().required().min(8)
})