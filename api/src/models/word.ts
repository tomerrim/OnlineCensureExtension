import mongoose, { InferSchemaType, Schema, model } from 'mongoose';

const wordSchema = new Schema({
    content: { type: String, required: true },
    categoryId: { type: mongoose.Types.ObjectId, required: true }
});

type word = InferSchemaType<typeof wordSchema>;

const wordModel = mongoose.model("word", wordSchema);

export { word, wordModel, wordSchema}



// export type word = {
//     id: ObjectId;
//     content: string;
//     categoryId: ObjectId;
// };
