import React from "react";
import "./CourseDetail.css";
import Comments from "../../Components/Comments/Comments";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  // Mảng chứa danh sách bài học
  const lessons = [
    { id: 1, title: "Lesson 1: Giới thiệu" },
    { id: 2, title: "Lesson 2: Cơ bản" },
    { id: 3, title: "Lesson 3: Nâng cao" },
  ];
  const move = () => {

  }
  return (


    <div className="course-detail-container">
      <div className="course-content">
        {/* Phần bên trái */}
        <div className="course-info">
          <div className="course-header">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Course Thumbnail"
              className="course-thumbnail"
            />
            <div className="course-metadata">
              <h2 className="course-title">Tên khóa học</h2>
              <div className="course-details">
                <p className="course-detail-item">
                  <i className="fa-solid fa-chalkboard-teacher course-icon"></i>
                  Giảng viên: Nguyễn Văn A
                </p>
                <p className="course-detail-item">
                  <i className="fa-solid fa-book course-icon"></i>
                  Số lượng bài học: {lessons.length}
                </p>
                <p className="course-detail-item">
                  <i className="fa-solid fa-users course-icon"></i>
                  Số lượng sinh viên: 200
                </p>
              </div>
            </div>
          </div>

          <p className="course-description">
            <h2>Mô tả khóa học</h2>
            Đây là khóa học cơ bản giúp bạn nắm vững các kiến thức nền tảng về lập trình và phát triển kỹ năng giải quyết vấn đề.
            Khóa học phù hợp cho cả người mới bắt đầu và những người muốn củng cố kiến thức.
          </p>

          <button className="buy-button">Mua khóa học</button>
        </div>

        {/* Phần bên phải */}
        <div className="lesson-list">
          <h3 className="lesson-header">Danh sách bài học</h3>
          <ul className="lessons">
            {lessons.map((lesson) => (
              <li key={lesson.id} className="lesson-item">
                <Link to={`/lesson`} className="lesson-link">
                  {lesson.title}
                  <i className="fa fa-angle-right lesson-icon"></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>


      </div>

      <Comments />
    </div>
  );
};

export default CourseDetail;