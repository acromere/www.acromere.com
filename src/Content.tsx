import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router'

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
import ForwardTo from "./ForwardTo.tsx";
import Config from "./Config.tsx";

const reload = () => window.location.reload();

export function Content() {
  return (
    <div className='router'>
      <Router>
        <Routes>
          {/* Supported routes */}
          <Route path='/product'>
            {/*<Route exact path='/product/acorn' element={<AcornProduct/>}/>*/}
            {/*<Route exact path='/product/seenc' element={<SeencProduct/>}/>*/}
            {/*<Route exact path='/product/weave' element={<WeaveProduct/>}/>*/}

            <Route path='acorn' element={<AcornProduct/>}>
              <Route path='docs'>
                <Route path='api' element={<ForwardTo path={Config.ROOT_URL + '/product/acorn/docs/api'}/>}/>
              </Route>
            </Route>
            <Route path='carta' element={<CartaProduct/>}/>
            <Route path='cartesia' element={<CartaProduct/>}/>
            <Route path='seenc' element={<SeencProduct/>}/>
            {/*<Route exact path='/product/cartesia/docs/user-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/carta/main/source/main/docs/manual/content.html' outline={3}/>}/>*/}

            {/*<Route exact path='/product/xenon/docs/user-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/manual/content.html' outline={3}/>}/>*/}
            {/*<Route exact path='/product/xenon/docs/module-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/modules/content.html' outline={3}/>}/>*/}
            {/*<Route exact path='/product/xenon/docs/tool-guide' element={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/tools/content.html' outline={3}/>}/>*/}
            {/*<Route exact path='/product/xenon/contribute' render={<DocViewer {...useParams()} doc='https://raw.githubusercontent.com/avereon/xenon/master/source/main/docs/contribute/content.html' outline={3}/>}/>*/}
            {/*<Route exact path='/product/xenon/docs/screenshots' element={<XenonScreenshots/>}/>*/}
            {/*<Route exact path='/product/xenon/docs' element={<XenonDocs/>}/>*/}
            {/*<Route exact path='/product/xenon/mods' element={<XenonMods/>}/>*/}
            {/*<Route exact path='/product/xenon/modules' element={<XenonMods/>}/>*/}
            {/*<Route exact path='/product/xenon' element={<XenonProduct/>}/>*/}
            <Route path='screenshot' element={<Screenshot/>}/>

            {/* API documentation routes */}
            {/*<Route path='/product/acorn/docs/api' onEnter={reload}/>*/}
            {/*<Route path='/product/seenc/docs/api' onEnter={reload}/>*/}
            {/*<Route path='/product/xenon/docs/api' onEnter={reload}/>*/}
            {/*<Route path='/product/zenna/docs/api' onEnter={reload}/>*/}
            {/*<Route path='/product/zevra/docs/api' onEnter={reload}/>*/}
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