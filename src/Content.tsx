import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes, useParams} from 'react-router'

import About from './About';
import Home from './Home';
import Legal from './Legal';
import Mit from './license/Mit';
import NotFound from './NotFound';
import Status from './project/Status';
import Products from './product/Products';
import AcornProduct from './product/acorn/Product';
import CartaProduct from './product/carta/Product';
import SeencProduct from "./product/seenc/Product.tsx";
import Screenshot from './Screenshot';
import XenonProduct from "./product/xenon/Product.tsx";
import XenonModules from "./product/xenon/Modules.tsx";
import XenonScreenshots from "./product/xenon/Screenshots.tsx";
import XenonDocs from "./product/xenon/XenonDocs.tsx";
import DocViewer from "./DocViewer.tsx";

export function Content() {

  return (
    <div className='router'>
      <Router>
        <Routes>
          {/* Supported routes */}
          <Route path='product'>
            <Route path='acorn' element={<AcornProduct/>}/>
            <Route path='carta' element={<CartaProduct/>}/>
            <Route path='cartesia' element={<CartaProduct/>}/>
            <Route path='seenc' element={<SeencProduct/>}/>
            {/*<Route path='weave' element={<WeaveProduct/>}/>*/}
            <Route path='xenon' element={<XenonProduct/>}/>

            {/*<Route path='carta/docs/user-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/carta/main/source/main/docs/manual/content.html' outline={3}/>}/>*/}
            {/*<Route path='cartesia/docs/user-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/carta/main/source/main/docs/manual/content.html' outline={3}/>}/>*/}

            <Route path='xenon/docs/user-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/manual/content.html' outline={3}/>}/>
            {/*<Route path='xenon/docs/module-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/modules/content.html' outline={3}/>}/>*/}
            {/*<Route path='xenon/docs/tool-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/tools/content.html' outline={3}/>}/>*/}
            {/*<Route path='xenon/contribute' render={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/contribute/content.html' outline={3}/>}/>*/}
            <Route path='xenon/docs/screenshots' element={<XenonScreenshots/>}/>
            <Route path='xenon/docs' element={<XenonDocs/>}/>
            <Route path='xenon/mods' element={<XenonModules/>}/>
            <Route path='xenon/modules' element={<XenonModules/>}/>
            <Route path='screenshot' element={<Screenshot/>}/>

            {/* API documentation routes */}
            <Route path='*/docs/api/*' element={<Navigate to={window.location.pathname}/>}/>
          </Route>

          <Route path='/products' element={<Products/>}/>

          <Route path='/project'>
            <Route path='status' element={<Status/>}/>
          </Route>

          <Route path='/about' element={<About/>}/>
          <Route path='/legal' element={<Legal/>}/>
          <Route path='/license'>
            <Route path='mit' element={<Mit/>}/>
          </Route>

          <Route path='projects' element={<Status/>}/>

          {/* Home route */}
          <Route path='/' element={<Home/>}/>

          {/* Default route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}