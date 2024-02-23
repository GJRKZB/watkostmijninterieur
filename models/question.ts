import mongoose, { Schema } from "mongoose";

interface Question {
  title: string;
  description: string;
  options: {
    label: string;
    checked: boolean;
  }[];
}

const QuestionSchema = new Schema<Question>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  options: [
    {
      label: { type: String, required: true },
      checked: { type: Boolean, required: true },
    },
  ],
});

export default mongoose.model<Question>("Question", QuestionSchema);
