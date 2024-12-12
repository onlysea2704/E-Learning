import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import LoginForm from "./Pages/LoginForm/LoginForm";
import RegisterForm from "./Pages/RegisterForm/RegisterForm";
import ExploreCourse from "./Pages/ExploreCourse/ExploreCourse";
import MyCourse from "./Pages/MyCourse/MyCourse";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import Home from "./Pages/Home/Home";
import Lesson from "./Pages/Lesson/Lesson";

// Placeholder pages
const PlacementTest = () => <h2>Kiểm tra đầu vào</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/my-course" element={<MyCourse/>} />
        <Route path="/explore-course" element={<ExploreCourse />} />
        <Route path="/placement-test" element={<PlacementTest />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/coursedetail" element={<CourseDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
