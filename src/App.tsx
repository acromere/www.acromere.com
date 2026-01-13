import './App.css';
import {Header} from './Header.tsx';
import {Content} from './Content.tsx';
import {Footer} from './Footer.tsx';

export function App() {
  return (
    <>
      <div className='app'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </>
  );
}
