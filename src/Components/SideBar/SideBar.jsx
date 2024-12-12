import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  const courses = [
    { name: "Khóa học ReactJS", type: "video" },
    { name: "Khóa học Java", type: "test" },
    { name: "Khóa học Python", type: "video" },
    { name: "Khóa học SQL", type: "test" },
    { name: "Khóa học UI/UX Design", type: "video" },
    { name: "Khóa học NodeJS", type: "video" },
    { name: "Khóa học Docker", type: "test" },
    { name: "Khóa học AWS Cloud", type: "video" },
    { name: "Khóa học Machine Learning", type: "video" },
    { name: "Khóa học Data Science", type: "test" },
    { name: "Khóa học C++", type: "video" },
    { name: "Khóa học Ruby on Rails", type: "test" },
    { name: "Khóa học HTML & CSS", type: "video" },
    { name: "Khóa học JavaScript", type: "test" },
    { name: "Khóa học TypeScript", type: "video" },
    { name: "Khóa học Next.js", type: "test" },
    { name: "Khóa học Flutter", type: "video" },
    { name: "Khóa học PHP", type: "test" },
    { name: "Khóa học MongoDB", type: "video" },
    { name: "Khóa học DevOps", type: "test" },
  ];

  return (
    <div className="sidebar">
      <h2>Danh Sách Khóa Học</h2>
      {courses.map((course, index) => (
        <div key={index} className="course-item">
          <span className="icon">
            {course.type === "video" ? (
              <i className="fas fa-video"></i> // Icon video
            ) : (
              <i className="fas fa-pen"></i> // Icon test
            )}
          </span>
          {course.name}
          <span className="arrow">
            <i className="fas fa-angle-right"></i> 
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
