import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CodeExecution from './Pages/CodeExecution'

import LoginForm from './Pages/Authentication/Login'
import SignUpForm from './Pages/Authentication/Signup'
import Interviewer from './Pages/Interviewer/Interviewer'
import Candidate from './Pages/Candidate/Candidate'
import Calendar from './Pages/Calendar/Calendar'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
 <>
  <BrowserRouter>
    <Routes>
      <Route path='/assesment' element={<CodeExecution/>} />
      <Route path="/" element={<Dashboard />}/>
      <Route path="/login" element= {<LoginForm/>}></Route>
      <Route path='/signup'element={<SignUpForm/>}></Route>
      <Route path='/:id/interviewer' element={<Interviewer/>}></Route>
      <Route path='/:id/candidate' element={<Candidate/>}></Route>
      <Route path='/calendar' element={ <Calendar/> }></Route>
      
    </Routes>

    </BrowserRouter>

 </>
  )

}

export default App
