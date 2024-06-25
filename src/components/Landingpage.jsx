// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [test, setTest] = useState(0);

//   useEffect(() => {

//     if(test === 7) {
//         navigate('/login')
//     }
//   }, [test]);

//   useEffect(() => {
//     return () => {
//         console.log('Component has been unmounted');
//     }
//   }, [])

//   return (
//     <div onClick={() => setTest(test+1)}>LandingPage has been clicked: {test} times</div>
//   )
// }

// export default LandingPage

import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../css/Landingpage.css';
const Landingpage = () => {
  const navigate=useNavigate();
  return (
    <div className='my-app-container'>
      <div className='my-app-header'>welcome to my-app</div>
      <button className='my-app-button' onClick={()=>navigate('/login')}>Login</button>
      
    </div>
  )
}

export default Landingpage
