import mongoose, { Schema, InferSchemaType, model } from 'mongoose';
import {emailSchema} from './email';


const userSchema = new Schema({
    email: { type: emailSchema, required: true },
    password: { type: String, required: true },
    categoryList: { type: [mongoose.Schema.Types.ObjectId], required: true },
    websiteList: { type: [mongoose.Schema.Types.ObjectId], required: true },
    wordList: { type: [mongoose.Schema.Types.ObjectId], required: true },
    personalBlockPercentage: {type: Number, default: 0}, // ! TODO - think about the default value
});

// const user = mongoose.model("user", userSchema);
type user = InferSchemaType<typeof userSchema>;

const userModel = model("user", userSchema);

export { user, userModel, userSchema}

