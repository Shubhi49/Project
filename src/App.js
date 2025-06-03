// import './App.css';
// // import Form from './components/Form';
// import Nav from './components/Nav';

// function App() {
 

//   return (
//     <>
//     <Nav/>
//       <div className="container">
       
//         {/* <Form/> */}
//       </div>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Form from './components/Form';
import Contact from './components/Contact'; 
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav /> {/* Link yahin se kaam karega */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path='/contacts' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
