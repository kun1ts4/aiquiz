import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    topic: "nothing",
    numberOfQuestions: 8,
    currentComponent: "MENU",
    currentQuestionNumber: 0,
    questions: [],
  },
  reducers: {
    setQuizTopic: (state, action) => {
      state.topic = action.payload;
    },
    setNumberOfQuestions: (state, action) => {
      state.numberOfQuestions = action.payload;
    },
    setCurrentComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
    nextQuestion: (state) => {
      state.currentQuestionNumber++;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const {
  setQuizTopic,
  setNumberOfQuestions,
  setCurrentComponent,
  nextQuestion,
  setQuestions,
} = quizSlice.actions;

export default quizSlice.reducer;
