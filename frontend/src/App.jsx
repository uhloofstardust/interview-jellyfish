import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CodeExecution from './Pages/CodeExecution'

import LoginForm from './Pages/Authenctication/Login'
import SignUpForm from './Pages/Authenctication/Signup'
import Interviewer from './Pages/Interviewer/Interviewer'
import Candidate from './Pages/Candidate/Candidate'

function App() {

  return (
 <>
  <BrowserRouter>
    <Routes>
      <Route path='/assesment' element={<CodeExecution/>} />
      {/* <Route path="/" element={<Auth/>}/> */}
      <Route path="/" element= {<LoginForm/>}></Route>
      <Route path='/signup'element={<SignUpForm/>}></Route>
      <Route path='/:id/interviewer' element={<Interviewer/>}></Route>
      <Route path='/:id/candidate' element={<Candidate/>}></Route>
      
    </Routes>

    </BrowserRouter>

 </>
  )

}

export default App
