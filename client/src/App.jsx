import React from 'react'
import { Routes , Route, useMatch} from 'react-router-dom'
import HomePage from './pages/student/HomePage'
import CoursesListPage from './pages/student/CoursesListPage'
import CourseDetailsPage from './pages/student/CourseDetailsPage'
import MyEnrollmentsPage from './pages/student/MyEnrollmentsPage'
import PlayerPage from './pages/student/PlayerPage'
import LoadingComp from './components/student/LoadingComp'
import EducatorPage from './pages/educator/EducatorPage'
import DashboardPage from './pages/educator/DashboardPage'
import AddCoursePage from './pages/educator/AddCoursePage'
import MyCoursesPage from './pages/educator/MyCoursesPage'
import StudentsEnrolledPage from './pages/educator/StudentsEnrolledPage'
import NavbarComp from './components/student/NavbarComp'


const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  
  return (
    <div className='text-default min-h-screen bg-white'>
     {!isEducatorRoute &&  <NavbarComp/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-list" element={<CoursesListPage />} />
        <Route path="/course-list/:input" element={<CoursesListPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/my-enrollments" element={<MyEnrollmentsPage />} />
        <Route path="/player/:courseId" element={<PlayerPage />} />
        <Route path="/loading/:path" element={<LoadingComp />} />

        {/* educator (nested route) */}
        <Route path="/educator" element={<EducatorPage />}>
          <Route path="educator" element={<DashboardPage />} />
          <Route path="add-course" element={<AddCoursePage />} />
          <Route path="my-courses" element={<MyCoursesPage />} />
          <Route path="student-enrolled" element={<StudentsEnrolledPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App