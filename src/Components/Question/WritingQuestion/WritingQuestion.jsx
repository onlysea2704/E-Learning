import React from "react";
import "./WritingQuestion.css";

const WritingQuestion = ({ question, imageSrc, answer, onAnswerChange }) => {
  return (
    <div className="writing-question-container">
      <p className="writing-question">{question}</p>
      {imageSrc && (
        <div className="writing-question-image">
          <img src={imageSrc} alt="Question Illustration" />
        </div>
      )}
      <textarea
        className="writing-textarea"
        placeholder="Write your answer here..."
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default WritingQuestion;
