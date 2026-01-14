import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router'
import Home from './Home';
import NotFound from './NotFound';

export function Content() {
  return (
    <div className='content'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>

          {/* Default route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}