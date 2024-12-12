// File: LandingPage.jsx
import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import Card from "../../Components/Card/Card"

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
    }
  ];

const Home = () => {
    return (
        <div className="landing-container">
            <Hero />
            <Features />

            {/* Popular Courses Section */}
            <section id="courses" className="courses">
                <h2>Khóa học phổ biến</h2>
                <div className="courses-grid">
                    {courses.map((course) => (
                        <Card key={course.id} course={course} type="KHÁM PHÁ NGAY" />
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 LearnEnglish. Tất cả các quyền được bảo lưu.</p>
                <a href="#contact">Liên hệ</a>
            </footer>
        </div>
    );
};

export default Home;
