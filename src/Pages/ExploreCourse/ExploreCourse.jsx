import React from "react";
import Card from "../../Components/Card/Card";
import "./ExploreCourse.css";

const courses = [
  {
    id: 1,
    name: "Khóa học ReactJS cơ bản",
    image: "", // Không có ảnh
    price: "500,000 VND",
    lessons: 20,
    students: 1000
  },
  {
    id: 2,
    name: "Khóa học JavaScript nâng cao",
    image: "https://via.placeholder.com/150",
    price: "700,000 VND",
    lessons: 15,
    students: 1500
  },
  {
    id: 3,
    name: "Khóa học HTML & CSS cho người mới bắt đầu",
    image: "", // Không có ảnh
    price: "400,000 VND",
    lessons: 12,
    students: 800
  },
  {
    id: 4,
    name: "Khóa học Node.js cho lập trình viên",
    image: "https://via.placeholder.com/150",
    price: "600,000 VND",
    lessons: 18,
    students: 1200
  },
  {
    id: 5,
    name: "Khóa học Python cơ bản",
    image: "", // Không có ảnh
    price: "550,000 VND",
    lessons: 22,
    students: 950
  }
];

const ExploreCourse = () => {
  return (
    <div className="courses-page">
      <h1 className="page-title">Danh sách các khóa học</h1>
      <div className="courses-container">
        {courses.map(course => (
          <Card key={course.id} course={course} type="KHÁM PHÁ NGAY"/>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourse;
