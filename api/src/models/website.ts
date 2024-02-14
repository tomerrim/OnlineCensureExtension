import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const websiteSchema = new Schema({
    Link: { type: String, required: true },
    blockPercentage: { type: Number, required: true },
    categoryId: { type: mongoose.Types.ObjectId, required: true }
});

type website = InferSchemaType<typeof websiteSchema>;

const websiteModel = model("website", websiteSchema);

export { website, websiteModel, websiteSchema}


//  type website = {
//     id: ObjectId;
//     Link: string;
//     blockPercentage: number;
//     categoryId: ObjectId;
// };