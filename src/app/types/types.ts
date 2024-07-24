export interface IFormData {
  firstName: string;
  email: string;
  phoneNumber?: string;
  choices: IRoomChoice[];
}

export interface IQuestionItem {
  id: number;
  text: string;
  options: string[];
  dependsOn?: {
    questionId: number;
    value: string;
  };
}

export interface IRoomChoice {
  room: string;
  floor?: string;
  size?: string;
  windowDecoration?: string;
  windowDecorationType?: string;
  amountWindows?: string;
}
