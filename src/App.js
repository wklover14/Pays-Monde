import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact='true' element={<Home/>}/>
          <Route path = 'a-propos' exact='true' element = {<About/>}/>
          <Route path = '*' element = {<NotFound/>}/>
        </Routes>
      </div>
      
         {/* <Route path='/' exact component={Home}></Route>
         <Route path = '/a-propos' exact component = {About}/>
         <Route component = {NotFound}/> */}
    </Router>
  );
};

export default App;
