import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
{
email: { type: String, required: true, unique: true, lowercase: true, index: true },
password: { type: String, required: true, select: false }
},
{ timestamps: true }
);


export default mongoose.model('User', userSchema);