import React from "react";
import Question from "../Question/Question";
import "./QuestionsList.css";

const QuestionsList = () => {
  return (
    <div>
      <h1>Questions</h1>

      <Question />
      <Question />
      <Question />
    </div>
  );
};

export default QuestionsList;
