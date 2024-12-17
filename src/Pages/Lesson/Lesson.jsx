import React, { useContext } from "react";
import "./Lesson.css";
import Sidebar from "../../Components/SideBar/SideBar";
import VideoLesson from "../../Components/VideoLesson/VideoLesson";
import Quiz from "../../Components/Quiz/Quiz";
import { useParams } from "react-router-dom";
import { StudentContext } from "../../Context/Context";

const Lesson = () => {
  const { id_lesson } = useParams();
  
  const { lessons } = useContext(StudentContext);

  // Tìm lesson tương ứng với id_lesson
  const lesson = lessons.find(
    (lesson) => lesson.id_lesson === Number(id_lesson)
  );
  console.log(lesson)

  // Xử lý render component dựa trên type_lesson
  return (
    <div className="lesson-container">
      <Sidebar className="sidebar" />
      <div className="lesson">
        {lesson.type_lesson === "quiz" ? (
          <Quiz
            title={lesson.name_lesson}
            description={lesson.description}
            questions={lesson.questions} // Giả định rằng dữ liệu `lesson` có danh sách câu hỏi
          />
        ) : (
          <VideoLesson
            title={lesson.name_lesson}
            description={lesson.description}
            videoUrl={lesson.link_material}
            onMarkAsDone={false} // Thay đổi nếu có logic cho "Mark as Done"
          />
        )}
      </div>
    </div>
  );
};

export default Lesson;
