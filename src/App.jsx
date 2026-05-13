import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores = [
  { 이름: "홍길동", 국어: 90, 수학: 80, 과학: 70, 영어: 60},
  { 이름: "전우치", 국어: 90, 수학: 80, 과학: 70, 영어: 60},
  { 이름: "이방원", 국어: 90, 수학: 80, 과학: 70, 영어: 60},
  { 이름: "허준", 국어: 90, 수학: 80, 과학: 70, 영어: 60},
]

function App() { 
  return (
    <table>
     <tr>
      <th>이름</th>
      <th>국어</th>
      <th>수학</th>
      <th>과학</th>
      <th>영어</th>
     </tr>
     {[0,1,2,3].map(idx=>
          (
            <tr>
              <td>{scores[idx].이름}</td>
              <td>{scores[idx].국어}</td>
              <td>{scores[idx].수학}</td>
              <td>{scores[idx].과학}</td>
              <td>{scores[idx].영어}</td>
            </tr>
          )
        )
      }
    </table>
  )
}

export default App
