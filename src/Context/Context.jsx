import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const StudentContext = createContext();

// Bảng User
const users = [
    { id_user: 1, user_name: "john_doe", pass: "12345", role: "student" },
    { id_user: 2, user_name: "jane_lecturer", pass: "abcde", role: "lecturer" },
    { id_user: 3, user_name: "mark_student", pass: "pass123", role: "student" },
    { id_user: 4, user_name: "emma_lecturer", pass: "lecturer456", role: "lecturer" },
    { id_user: 5, user_name: "sophia_student", pass: "student321", role: "student" },
    { id_user: 6, user_name: "oliver_lecturer", pass: "pass789", role: "lecturer" },
    { id_user: 7, user_name: "liam_student", pass: "student654", role: "student" },
    { id_user: 8, user_name: "ava_lecturer", pass: "lecturer987", role: "lecturer" },
    { id_user: 9, user_name: "noah_student", pass: "student789", role: "student" },
    { id_user: 10, user_name: "mia_lecturer", pass: "lecturer123", role: "lecturer" },
];

// Bảng Student
const students = [
    { id_student: 1, name: "John Doe", age: 20, gender: "male", phone: "1234567890", email: "john@example.com", link_image: "john.jpg", id_user: 1 },
    { id_student: 2, name: "Mark Brown", age: 22, gender: "male", phone: "9876543210", email: "mark@example.com", link_image: "mark.jpg", id_user: 3 },
    { id_student: 3, name: "Sophia White", age: 21, gender: "female", phone: "5556667777", email: "sophia@example.com", link_image: "sophia.jpg", id_user: 5 },
    { id_student: 4, name: "Liam Green", age: 23, gender: "male", phone: "4443332222", email: "liam@example.com", link_image: "liam.jpg", id_user: 7 },
    { id_student: 5, name: "Noah Black", age: 20, gender: "male", phone: "1112223333", email: "noah@example.com", link_image: "noah.jpg", id_user: 9 },
    { id_student: 6, name: "Emma Blue", age: 21, gender: "female", phone: "7778889999", email: "emma@example.com", link_image: "emma.jpg", id_user: 4 },
    { id_student: 7, name: "Olivia Brown", age: 24, gender: "female", phone: "6665554444", email: "olivia@example.com", link_image: "olivia.jpg", id_user: 8 },
    { id_student: 8, name: "Ethan White", age: 19, gender: "male", phone: "3332221111", email: "ethan@example.com", link_image: "ethan.jpg", id_user: 6 },
    { id_student: 9, name: "Isabella Green", age: 22, gender: "female", phone: "9990001111", email: "isabella@example.com", link_image: "isabella.jpg", id_user: 10 },
    { id_student: 10, name: "William Black", age: 20, gender: "male", phone: "8887776666", email: "william@example.com", link_image: "william.jpg", id_user: 2 },
];

// Bảng Lecturer
const lecturers = [
    { id_lecturer: 1, full_name: "Jane Smith", experience: 5, certification: "Master's Degree", id_user: 2 },
    { id_lecturer: 2, full_name: "Emma Davis", experience: 10, certification: "PhD", id_user: 4 },
    { id_lecturer: 3, full_name: "Oliver Wilson", experience: 8, certification: "Master's Degree", id_user: 6 },
    { id_lecturer: 4, full_name: "Ava Brown", experience: 7, certification: "Bachelor's Degree", id_user: 8 },
    { id_lecturer: 5, full_name: "Mia Taylor", experience: 12, certification: "PhD", id_user: 10 },
    { id_lecturer: 6, full_name: "Liam Carter", experience: 6, certification: "Master's Degree", id_user: 7 },
    { id_lecturer: 7, full_name: "Sophia Johnson", experience: 9, certification: "PhD", id_user: 5 },
    { id_lecturer: 8, full_name: "Ethan Brown", experience: 4, certification: "Bachelor's Degree", id_user: 3 },
    { id_lecturer: 9, full_name: "Isabella Stone", experience: 11, certification: "PhD", id_user: 9 },
    { id_lecturer: 10, full_name: "William Scott", experience: 15, certification: "Master's Degree", id_user: 1 },
];

// Bảng Course
const courses = [
    { id_course: 1, name_course: "English for Web Development", description: "Learn the language skills needed for web development", price: 200, number_session: 10, number_student: 5, id_lecturer: 1, type_course: "speaking" },
    { id_course: 2, name_course: "Advanced English Grammar", description: "Master English grammar for fluent communication", price: 150, number_session: 8, number_student: 3, id_lecturer: 2, type_course: "reading" },
    { id_course: 3, name_course: "English for JavaScript Programmers", description: "Improve your English while learning JavaScript", price: 180, number_session: 9, number_student: 4, id_lecturer: 1, type_course: "writing" },
    { id_course: 4, name_course: "English for UX/UI Designers", description: "Learn English for effective UI/UX design communication", price: 250, number_session: 12, number_student: 6, id_lecturer: 3, type_course: "all skill" },
    { id_course: 5, name_course: "Conversational English for Beginners", description: "Build basic English conversation skills", price: 220, number_session: 11, number_student: 5, id_lecturer: 4, type_course: "listening + reading" },
    { id_course: 6, name_course: "Data Science in English", description: "Learn data science terminology and concepts in English", price: 300, number_session: 14, number_student: 7, id_lecturer: 5, type_course: "speaking + writing" },
    { id_course: 7, name_course: "English for Machine Learning", description: "Understand machine learning concepts while improving English", price: 400, number_session: 16, number_student: 8, id_lecturer: 6, type_course: "listening" },
    { id_course: 8, name_course: "English for Database Management", description: "Master English terminology for database management", price: 180, number_session: 10, number_student: 5, id_lecturer: 7, type_course: "speaking" },
    { id_course: 9, name_course: "English for UI/UX Design", description: "Learn the key English phrases for UI/UX design projects", price: 220, number_session: 12, number_student: 6, id_lecturer: 8, type_course: "reading" },
    { id_course: 10, name_course: "English for Mobile App Development", description: "Develop your English skills while learning app development", price: 350000, number_session: 18, number_student: 10, id_lecturer: 9, type_course: "all skill" },


    { id_course: 0, name_course: "Entry Test", description: "Entry Test", price: 0, number_session: 0, number_student: 0, id_lecturer: 0, type_course: "entry test" },
];

// Bảng MyCourse
const myCourses = [
    { id_transaction: 1, id_student: 1, id_course: 1, time_transaction: "2024-01-15" },
    { id_transaction: 2, id_student: 1, id_course: 2, time_transaction: "2024-01-16" },
    { id_transaction: 3, id_student: 1, id_course: 3, time_transaction: "2024-01-17" },
    { id_transaction: 4, id_student: 1, id_course: 4, time_transaction: "2024-01-18" },
    { id_transaction: 5, id_student: 1, id_course: 5, time_transaction: "2024-01-19" },
    { id_transaction: 6, id_student: 1, id_course: 6, time_transaction: "2024-01-20" },
    { id_transaction: 7, id_student: 7, id_course: 7, time_transaction: "2024-01-21" },
    { id_transaction: 8, id_student: 8, id_course: 8, time_transaction: "2024-01-22" },
    { id_transaction: 9, id_student: 9, id_course: 9, time_transaction: "2024-01-23" },
    { id_transaction: 10, id_student: 10, id_course: 10, time_transaction: "2024-01-24" },
];

// Bảng Comment
const comments = [
    { id_comment: 1, id_student: 1, id_course: 1, comment: "Great course!", time: "2024-01-25" },
    { id_comment: 2, id_student: 2, id_course: 2, comment: "Very informative.", time: "2024-01-26" },
    { id_comment: 3, id_student: 3, id_course: 3, comment: "Loved it!", time: "2024-01-27" },
    { id_comment: 4, id_student: 4, id_course: 4, comment: "Good for beginners.", time: "2024-01-28" },
    { id_comment: 5, id_student: 5, id_course: 5, comment: "Highly recommend.", time: "2024-01-29" },
    { id_comment: 6, id_student: 6, id_course: 6, comment: "Well structured.", time: "2024-01-30" },
    { id_comment: 7, id_student: 7, id_course: 7, comment: "Excellent content.", time: "2024-01-31" },
    { id_comment: 8, id_student: 8, id_course: 8, comment: "A bit advanced.", time: "2024-02-01" },
    { id_comment: 9, id_student: 9, id_course: 9, comment: "Helpful examples.", time: "2024-02-02" },
    { id_comment: 10, id_student: 10, id_course: 10, comment: "Great experience.", time: "2024-02-03" },
];

// Bảng Progress
const progress = [
    { id_progress: 1, id_student: 1, id_lesson: 1, status: "completed" },
    { id_progress: 2, id_student: 2, id_lesson: 2, status: "in progress" },
    { id_progress: 3, id_student: 3, id_lesson: 3, status: "completed" },
    { id_progress: 4, id_student: 4, id_lesson: 4, status: "not started" },
    { id_progress: 5, id_student: 5, id_lesson: 5, status: "completed" },
    { id_progress: 6, id_student: 6, id_lesson: 6, status: "in progress" },
    { id_progress: 7, id_student: 7, id_lesson: 7, status: "completed" },
    { id_progress: 8, id_student: 8, id_lesson: 8, status: "not started" },
    { id_progress: 9, id_student: 9, id_lesson: 9, status: "completed" },
    { id_progress: 10, id_student: 10, id_lesson: 10, status: "completed" },


    { id_progress: 11, id_student: 1, id_lesson: 1, status: "completed" },
    { id_progress: 12, id_student: 1, id_lesson: 2, status: "in progress" },
    { id_progress: 13, id_student: 1, id_lesson: 3, status: "completed" },
    { id_progress: 14, id_student: 1, id_lesson: 4, status: "not started" },
    { id_progress: 15, id_student: 1, id_lesson: 5, status: "completed" },
    { id_progress: 16, id_student: 1, id_lesson: 6, status: "in progress" },
    { id_progress: 17, id_student: 1, id_lesson: 7, status: "completed" },
    { id_progress: 18, id_student: 1, id_lesson: 8, status: "not started" },
    { id_progress: 19, id_student: 1, id_lesson: 9, status: "completed" },
    { id_progress: 20, id_student: 1, id_lesson: 10, status: "completed" },
];

// Bảng Lesson
const lessons = [
    { id_lesson: 1, name_lesson: "HTML Basics", description: "Introduction to HTML", link_material: "https://www.youtube.com/embed/OerNDH6RtsM?list=RDOerNDH6RtsM", order_lesson: 1, id_course: 1, type_lesson: "video lesson" },
    { id_lesson: 2, name_lesson: "CSS Styling", description: "Learn CSS styles", link_material: "https://www.youtube.com/embed/YtLx_sfJquA", order_lesson: 2, id_course: 1, type_lesson: "video lesson" },
    { id_lesson: 3, name_lesson: "JavaScript Intro", description: "Basics of JavaScript", link_material: "https://www.youtube.com/embed/iFoLKvdqXk8?list=RDiFoLKvdqXk8", order_lesson: 3, id_course: 1, type_lesson: "quiz" },
    { id_lesson: 4, name_lesson: "React Components", description: "Understanding components", link_material: "https://www.youtube.com/embed/fArpx8TRWU8?list=RDiFoLKvdqXk8", order_lesson: 4, id_course: 1, type_lesson: "video lesson" },
    { id_lesson: 5, name_lesson: "Python Basics", description: "Introduction to Python", link_material: "https://www.youtube.com/embed/OerNDH6RtsM?list=RDOerNDH6RtsM", order_lesson: 5, id_course: 1, type_lesson: "quiz" },
    { id_lesson: 6, name_lesson: "Data Analysis", description: "Learn data analysis", link_material: "https://www.youtube.com/embed/YtLx_sfJquA", order_lesson: 6, id_course: 1, type_lesson: "video lesson" },
    { id_lesson: 7, name_lesson: "ML Foundations", description: "Introduction to ML", link_material: "https://www.youtube.com/embed/iFoLKvdqXk8?list=RDiFoLKvdqXk8", order_lesson: 7, id_course: 1, type_lesson: "video lesson" },
    { id_lesson: 8, name_lesson: "SQL Basics", description: "Basics of SQL", link_material: "https://www.youtube.com/embed/fArpx8TRWU8?list=RDiFoLKvdqXk8", order_lesson: 8, id_course: 1, type_lesson: "quiz" },
    { id_lesson: 9, name_lesson: "UI Design", description: "Learn UI design", link_material: "https://www.youtube.com/embed/OerNDH6RtsM?list=RDOerNDH6RtsM", order_lesson: 9, id_course: 1, type_lesson: "video lesson" },
    { id_lesson: 10, name_lesson: "App Development", description: "Intro to app dev", link_material: "https://www.youtube.com/embed/OerNDH6RtsM?list=RDOerNDH6RtsM", order_lesson: 10, id_course: 1, type_lesson: "quiz" },
    
    // Lesson for Entry Test
    { id_lesson: 11, name_lesson: "Reading Test", description: "Test Reading Skill", link_material: "", order_lesson: 1, id_course: 0, type_lesson: "quiz" },
    { id_lesson: 12, name_lesson: "Listening Test", description: "Test Listening Skill", link_material: "", order_lesson: 2, id_course: 0, type_lesson: "quiz" },
    { id_lesson: 13, name_lesson: "Writing Test", description: "Test Writing Skill", link_material: "", order_lesson: 3, id_course: 0, type_lesson: "quiz" },
    { id_lesson: 14, name_lesson: "Speaking Test", description: "Test Speaking Skill", link_material: "", order_lesson: 4, id_course: 0, type_lesson: "quiz" },
    { id_lesson: 15, name_lesson: "Tutorial Choose Coure", description: "Tutorial Choose Coure", link_material: "https://www.youtube.com/embed/iFoLKvdqXk8?list=RDiFoLKvdqXk8", order_lesson: 4, id_course: 0, type_lesson: "video lesson" },
];

// Bảng Quiz
const quizzes = [
    { id_quiz: 1, name_quiz: "HTML Quiz", id_lesson: 1, score: 10 },
    { id_quiz: 2, name_quiz: "CSS Quiz", id_lesson: 2, score: 10 },
    { id_quiz: 3, name_quiz: "JavaScript Quiz", id_lesson: 3, score: 15 },
    { id_quiz: 4, name_quiz: "React Quiz", id_lesson: 4, score: 20 },
    { id_quiz: 5, name_quiz: "Python Quiz", id_lesson: 5, score: 15 },
    { id_quiz: 6, name_quiz: "Data Analysis Quiz", id_lesson: 6, score: 20 },
    { id_quiz: 7, name_quiz: "ML Quiz", id_lesson: 7, score: 25 },
    { id_quiz: 8, name_quiz: "SQL Quiz", id_lesson: 8, score: 15 },
    { id_quiz: 9, name_quiz: "UI Quiz", id_lesson: 9, score: 10 },
    { id_quiz: 10, name_quiz: "App Quiz", id_lesson: 10, score: 20 },

    { id_quiz: 11, name_quiz: "Entry Test", id_lesson: 11, score: 10 },
    { id_quiz: 12, name_quiz: "Entry Test", id_lesson: 12, score: 10 },
    { id_quiz: 13, name_quiz: "Entry Test", id_lesson: 13, score: 10 },
    { id_quiz: 14, name_quiz: "Entry Test", id_lesson: 14, score: 10 },
];

// Dữ liệu cho bảng Question
const questions = [
    { id_question: 1, id_quiz: 3, question: "What is the capital of France?", link_mp3: null, link_image: null, options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", scale: 5, interpret: "Geography question", type_question: "reading" },
    { id_question: 2, id_quiz: 3, question: "Which planet is known as the Red Planet?", link_mp3: null, link_image: null, options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", scale: 4, interpret: "Astronomy question", type_question: "reading" },
    { id_question: 3, id_quiz: 8, question: "Who wrote 'Hamlet'?", link_mp3: null, link_image: null, options: ["Shakespeare", "Dickens", "Hemingway", "Austen"], answer: "Shakespeare", scale: 5, interpret: "Literature question", type_question: "writing" },
    { id_question: 4, id_quiz: 3, question: "What is the largest mammal on Earth?", link_mp3: null, link_image: null, options: ["Elephant", "Whale", "Shark", "Giraffe"], answer: "Whale", scale: 5, interpret: "Biology question", type_question: "reading" },
    { id_question: 5, id_quiz: 8, question: "What is 5 + 3?", link_mp3: null, link_image: null, options: ["5", "6", "7", "8"], answer: "8", scale: 5, interpret: "Math question", type_question: "writing" },
    { id_question: 6, id_quiz: 3, question: "Who painted the Mona Lisa?", link_mp3: null, link_image: null, options: ["Van Gogh", "Da Vinci", "Picasso", "Dali"], answer: "Da Vinci", scale: 5, interpret: "Art question", type_question: "reading" },
    { id_question: 7, id_quiz: 3, question: "What is the smallest continent?", link_mp3: null, link_image: null, options: ["Asia", "Australia", "Africa", "Europe"], answer: "Australia", scale: 4, interpret: "Geography question", type_question: "reading" },
    { id_question: 8, id_quiz: 8, question: "Which of the following is a primary color?", link_mp3: null, link_image: null, options: ["Green", "Purple", "Blue", "Pink"], answer: "Blue", scale: 3, interpret: "Art question", type_question: "writing" },
    { id_question: 9, id_quiz: 10, question: "Which country is known as the Land of the Rising Sun?", link_mp3: null, link_image: null, options: ["China", "Japan", "South Korea", "India"], answer: "Japan", scale: 4, interpret: "Geography question", type_question: "speaking" },
    { id_question: 10, id_quiz: 5, question: "What is the currency of the United Kingdom?", link_mp3: "https://example.com/audio/question19.mp3", link_image: "https://example.com/images/question19.jpg", options: ["Euro", "Pound Sterling", "Dollar", "Yen"], answer: "Pound Sterling", scale: 3, interpret: "Economics question", type_question: "listening" },


    // Question for Entry Test
    { id_question: 11, id_quiz: 11, question: "What is the capital of France?", link_mp3: null, link_image: null, options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", scale: 5, interpret: "Geography question", type_question: "reading" },
    { id_question: 12, id_quiz: 11, question: "Which planet is known as the Red Planet?", link_mp3: null, link_image: null, options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", scale: 4, interpret: "Astronomy question", type_question: "reading" },
    { id_question: 13, id_quiz: 13, question: "Who wrote 'Hamlet'?", link_mp3: null, link_image: null, options: ["Shakespeare", "Dickens", "Hemingway", "Austen"], answer: "Shakespeare", scale: 5, interpret: "Literature question", type_question: "writing" },
    { id_question: 14, id_quiz: 11, question: "What is the largest mammal on Earth?", link_mp3: null, link_image: null, options: ["Elephant", "Whale", "Shark", "Giraffe"], answer: "Whale", scale: 5, interpret: "Biology question", type_question: "reading" },
    { id_question: 15, id_quiz: 13, question: "What is 5 + 3?", link_mp3: null, link_image: null, options: ["5", "6", "7", "8"], answer: "8", scale: 5, interpret: "Math question", type_question: "writing" },
    { id_question: 16, id_quiz: 11, question: "Who painted the Mona Lisa?", link_mp3: null, link_image: null, options: ["Van Gogh", "Da Vinci", "Picasso", "Dali"], answer: "Da Vinci", scale: 5, interpret: "Art question", type_question: "reading" },
    { id_question: 17, id_quiz: 11, question: "What is the smallest continent?", link_mp3: null, link_image: null, options: ["Asia", "Australia", "Africa", "Europe"], answer: "Australia", scale: 4, interpret: "Geography question", type_question: "reading" },
    { id_question: 18, id_quiz: 13, question: "Which of the following is a primary color?", link_mp3: null, link_image: null, options: ["Green", "Purple", "Blue", "Pink"], answer: "Blue", scale: 3, interpret: "Art question", type_question: "writing" },
    { id_question: 19, id_quiz: 14, question: "Which country is known as the Land of the Rising Sun?", link_mp3: null, link_image: null, options: ["China", "Japan", "South Korea", "India"], answer: "Japan", scale: 4, interpret: "Geography question", type_question: "speaking" },
    { id_question: 20, id_quiz: 12, question: "What is the currency of the United Kingdom?", link_mp3: "https://example.com/audio/question19.mp3", link_image: "https://example.com/images/question19.jpg", options: ["Euro", "Pound Sterling", "Dollar", "Yen"], answer: "Pound Sterling", scale: 3, interpret: "Economics question", type_question: "listening" },
];

const responses = [
    { id_response: 1, id_student: 201, id_question: 1, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 2, id_student: 202, id_question: 1, link_mp3: null, link_image: null, type_response: "text", score: 0, comment: "Incorrect answer" },
    { id_response: 3, id_student: 201, id_question: 2, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 4, id_student: 203, id_question: 2, link_mp3: null, link_image: null, type_response: "text", score: 2, comment: "Partially correct" },
    { id_response: 5, id_student: 204, id_question: 3, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 6, id_student: 205, id_question: 3, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 7, id_student: 206, id_question: 4, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 8, id_student: 207, id_question: 4, link_mp3: null, link_image: null, type_response: "text", score: 0, comment: "Incorrect answer" },
    { id_response: 9, id_student: 208, id_question: 5, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 10, id_student: 209, id_question: 5, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 11, id_student: 210, id_question: 6, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 12, id_student: 211, id_question: 6, link_mp3: null, link_image: null, type_response: "text", score: 3, comment: "Partially correct" },
    { id_response: 13, id_student: 212, id_question: 7, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 14, id_student: 213, id_question: 7, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 15, id_student: 214, id_question: 8, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 16, id_student: 215, id_question: 8, link_mp3: null, link_image: null, type_response: "text", score: 4, comment: "Correct, but incomplete" },
    { id_response: 17, id_student: 216, id_question: 9, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 18, id_student: 217, id_question: 9, link_mp3: null, link_image: null, type_response: "text", score: 0, comment: "Incorrect answer" },
    { id_response: 19, id_student: 218, id_question: 10, link_mp3: null, link_image: null, type_response: "text", score: 5, comment: "Correct answer" },
    { id_response: 20, id_student: 219, id_question: 10, link_mp3: null, link_image: null, type_response: "text", score: 4, comment: "Almost correct" }
];


const StudentContextProvider = (props) => {

    const [selectedCourse, setSelectedCourse] = useState();
    const [selectedLesson, setSelectedLesson] = useState();
    const contextValue = { users, students, lecturers, courses, myCourses, 
        comments, progress, lessons, quizzes, questions, responses, selectedCourse, 
        setSelectedCourse,selectedLesson, setSelectedLesson };
    return (
        <StudentContext.Provider value={contextValue}>
            {props.children}
        </StudentContext.Provider>
    )
}
export { StudentContext };
export default StudentContextProvider;