import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema(
{
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true, required: true },
title: { type: String, required: true },
description: { type: String, default: '' },
priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium', index: true },
dueDate: { type: Date, index: true },
completed: { type: Boolean, default: false, index: true },
category: { type: String, default: 'general', index: true }
},
{ timestamps: true }
);


// Compound index for efficient user views
taskSchema.index({ user: 1, completed: 1, dueDate: 1 });


export default mongoose.model('Task', taskSchema);