import { Schema, model, models } from "mongoose";

export interface IResponse {
  userId: Schema.Types.ObjectId;
  answers: Array<{
    questionId: string;
    answer: string;
  }>;
}

const ResponseSchema = new Schema<IResponse>(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    answers: [
      {
        questionId: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },

  { timestamps: true },
);

const Response =
  models.Response || model<IResponse>("Response", ResponseSchema);

export default Response;
