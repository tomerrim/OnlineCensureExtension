import { InferSchemaType, Schema, model } from 'mongoose';

const categorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

type category = InferSchemaType<typeof categorySchema>;
const categoryModel = model("category", categorySchema);

export { category, categorySchema, categoryModel }

// export default model("category", categorySchema);

// export type category = {
//     id: ObjectId;
//     name: string;
//     description: string;
// };