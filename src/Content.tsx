import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router'
import NotFound from "./NotFound";

export function Content() {
  return (
    <div className='content'>
      <p className='page'>We're under construction. Please check back for an update soon.</p>
      <Router>
        <Routes>

          {/* Default route */}
          <Route element={<NotFound/>}/>
        </Routes>
      </Router>

    </div>
  )
}