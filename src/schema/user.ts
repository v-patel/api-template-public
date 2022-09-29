import Joi from "joi";
import express from "express";

export interface ICreateUserSchema extends express.Request {
  body: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  };
}
export const CreateUserSchema = Joi.object({
  body: Joi.object({
    email: Joi.string().required().lowercase().trim().email(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required().min(8)
  })
});
