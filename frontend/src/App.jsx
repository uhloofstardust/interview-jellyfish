import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CodeExecution from './Pages/CodeExecution'
import LoginForm from './Pages/Authentication/Login'
import SignUpForm from './Pages/Authentication/Signup'
import Interviewer from './Pages/Interviewer/Interviewer'
import Candidate from './Pages/Candidate/Candidate'
import Calendar from './Pages/Calendar/Calendar'
import Dashboard from './Pages/Dashboard'
import DateProvider from './Pages/context/DataContext' // Import DateProvider instead of DateContext

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/assessment' element={<CodeExecution />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/:id/interviewer' element={<Interviewer />} />
          <Route path='/:id/candidate' element={<Candidate />} />
          {/* Wrap the Calendar component with DateProvider */}
          <Route path='/calendar' element={
            <DateProvider>
              <Calendar />
            </DateProvider>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
