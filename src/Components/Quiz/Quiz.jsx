import React, { useContext, useState } from "react";
import "./Quiz.css";
import ReadingQuestion from "../Question/ReadingQuestion/ReadingQuestion";
import ListeningQuestion from "../Question/ListeningQuestion/ListeningQuestion";
import WritingQuestion from "../Question/WritingQuestion/WritingQuestion";
import SpeakingQuestion from "../Question/SpeakingQuestion/SpeakingQuestion";
import { StudentContext } from "../../Context/Context";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { id_lesson } = useParams();
  const { quizzes, questions } = useContext(StudentContext);

  // Tìm quiz hiện tại và các câu hỏi liên quan
  const quiz = quizzes.find((quiz) => quiz.id_lesson === Number(id_lesson));
  const questionForQuiz = questions.filter(
    (question) => question.id_quiz === quiz?.id_quiz
  );

  // Phân loại câu hỏi dựa trên type_question
  const readingQuestions = questionForQuiz.filter(
    (q) => q.type_question === "reading"
  );
  const listeningQuestions = questionForQuiz.filter(
    (q) => q.type_question === "listening"
  );
  const writingQuestions = questionForQuiz.filter(
    (q) => q.type_question === "writing"
  );
  const speakingQuestions = questionForQuiz.filter(
    (q) => q.type_question === "speaking"
  );

  // Hook để quản lý câu trả lời cho từng loại câu hỏi
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(listeningQuestions.length).fill(null)
  );
  const [answers, setAnswers] = useState(
    Array(writingQuestions.length).fill("")
  );
  const [uploadedFiles, setUploadedFiles] = useState(
    Array(speakingQuestions.length).fill(null)
  );

  // Xử lý chọn đáp án cho Reading và Listening
  const handleOptionChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  // Xử lý câu trả lời cho Writing
  const handleAnswerChange = (index, newAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = newAnswer;
    setAnswers(updatedAnswers);
  };

  // Xử lý upload file cho Speaking
  const handleFileUpload = (index, file) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles[index] = file;
    setUploadedFiles(updatedFiles);
  };

  const handleSubmit = () => {
    console.log("Selected Answers: ", selectedAnswers);
    console.log("Written Answers: ", answers);
    console.log("Uploaded Files: ", uploadedFiles);
    alert("Quiz submitted! Check console for answers.");
  };

  return (
    <div className="quiz-page-container">
      <div className="quiz-header">
        <h1 className="quiz-title">{quiz.name_quiz}</h1>
      </div>

      {/* Hiển thị Reading Questions */}
      {readingQuestions.map((question, index) => (
        <div key={index} className="quiz-question-block">
          <ReadingQuestion
            questionId={question.id_question}
            question={question.question}
            options={question.options}
            selectedOption={selectedAnswers[index]}
            onOptionChange={(option) => handleOptionChange(index, option)}
          />
        </div>
      ))}

      {/* Hiển thị Listening Questions */}
      {listeningQuestions.map((question, index) => (
        <div key={index} className="quiz-question-block">
          <ListeningQuestion
            questionId={question.id_question}
            question={question.question}
            audioSrc={question.link_mp3}
            options={question.options}
            selectedOption={selectedAnswers[index]}
            onOptionChange={(option) => handleOptionChange(index, option)}
          />
        </div>
      ))}

      {/* Hiển thị Writing Questions */}
      {writingQuestions.map((question, index) => (
        <div key={index} className="quiz-question-block">
          <WritingQuestion
            questionId={question.id_question}
            question={question.question}
            imageSrc={question.link_image}
            answer={answers[index]}
            onAnswerChange={(newAnswer) => handleAnswerChange(index, newAnswer)}
          />
        </div>
      ))}

      {/* Hiển thị Speaking Questions */}
      {speakingQuestions.map((question, index) => (
        <div key={index} className="quiz-question-block">
          <SpeakingQuestion
            questionId={question.id_question}
            question={question.question}
            onFileUpload={(file) => handleFileUpload(index, file)}
          />
        </div>
      ))}

      <button className="quiz-submit-button" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
};

export default Quiz;
