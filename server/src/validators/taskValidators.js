import Joi from 'joi';


export const createTaskSchema = Joi.object({
title: Joi.string().min(1).max(120).required(),
description: Joi.string().allow(''),
priority: Joi.string().valid('low', 'medium', 'high').default('medium'),
dueDate: Joi.date().optional(),
completed: Joi.boolean().default(false),
category: Joi.string().max(32).default('general')
});


export const updateTaskSchema = createTaskSchema.min(1);