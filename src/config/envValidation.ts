import * as Joi from 'joi';

export const envValidation = Joi.object({
  NODE_ENV: Joi.string().required(),
  APP_PORT: Joi.number().required().default(5000),
  MONGODB_URI: Joi.string().required(),
});
