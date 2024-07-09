export interface QuizOptions {
  number: number;
  category: String;
  difficulty: String;
  type: String;
}

export interface QuizItem {
  category?: String;
  type?: "multiple" | "boolean";
  difficulty?: "easy" | "medium" | "hard";
  question: String;
  correct_answer: String;
  incorrect_answers: String[];
}

export interface ApiResponse {
  response_code: Number;
  results: QuizItem[];
}