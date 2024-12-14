import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionalComponents from './FunctionalComponent/FunctionalComponent';
import ClassComponents from './ClassComponent/ClassComponent';
import UIMaterial from './MaterialUI/UIMaterial';
import Materials from './MaterialUI/Materials';
import Navigate from './Router/Navigate';
import Reg from './Router/Reg';
import Dropdowns from './Dropdown/Dropdowns';
import Log from './Dropdown/Log';
import Tutor from './Thiran/Tutor';
import AttendancePage from './Thiran/AttendancePage';
import MarksRecord from './Thiran/MarksRecord';
import AttendanceTutor from './Thiran/AttendanceTutor';
import TutorMarks from './Thiran/TutorMarks';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <FunctionalComponents/>
    <ClassComponents/> */}
    {/* <UIMaterial/> */}
    {/* <Materials></Materials> */}
    {/* <Error/> */}
    {/* <Navigate/> */}
   
    {/* <Register/>  */}
<TutorMarks/>
  </React.StrictMode>

  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
