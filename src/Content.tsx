import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router'

import About from './About';
import Home from './Home';
import Legal from './Legal';
import Mit from './license/Mit';
import NotFound from './NotFound';

export function Content() {
  return (
    <div className='router'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/legal' element={<Legal/>}/>
          <Route path='/license'>
            <Route path='mit' element={<Mit/>}/>
          </Route>

          {/* Default route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}