import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the components for each page
import LandingPage from "./components/landing.jsx";
import AboutUs from "./components/aboutUs.jsx";
import EducatorSignUp from "./components/signUp.jsx";
import {EducatorProvider} from "./context/educator.jsx";
import LoginPage from "./components/login.jsx";
import EducatorDashboard from "./components/eduDashboard.jsx";
// import StudentDashboard from './pages/StudentDashboard';
// import CoursePage from './pages/CoursePage';
// import LessonPage from './pages/LessonPage';
// import ProgressTrackingPage from './pages/ProgressTrackingPage';
// import SettingsPage from './pages/SettingsPage';
// import AdminDashboard from './pages/AdminDashboard';

function App() {
    return (
        <EducatorProvider>
        <Router>
            <Routes>
                {/* Homepage Route */}
                <Route path="/" element={<LandingPage/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/signup" element={<EducatorSignUp/>} />
                <Route path="/signup/login" element={<LoginPage/>} />
                <Route path="/educatorDashboard" element={<EducatorDashboard/>} />


                {/*/!* Student Dashboard Route *!/*/}
                {/*<Route path="/dashboard" element={<StudentDashboard />} />*/}

                {/*/!* Course Page Route *!/*/}
                {/*<Route path="/courses/:courseId" element={<CoursePage />} />*/}

                {/*/!* Lesson Page Route *!/*/}
                {/*<Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />*/}

                {/*/!* Progress Tracking Route *!/*/}
                {/*<Route path="/progress" element={<ProgressTrackingPage />} />*/}

                {/*/!* Settings Page Route *!/*/}
                {/*<Route path="/settings" element={<SettingsPage />} />*/}

                {/*/!* Admin Dashboard Route *!/*/}
                {/*<Route path="/admin" element={<AdminDashboard />} />*/}

                {/*/!* 404 Not Found Route *!/*/}
                {/*<Route path="*" element={<div>Page not found</div>} />*/}
            </Routes>
        </Router>
            </EducatorProvider>
    );
}

export default App;