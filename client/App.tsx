import './css/app.css';
import {Header} from './Header.tsx';
import {Content} from './Content.tsx';
import {Footer} from './Footer.tsx';

export default function App() {
  return (
      <div className='app'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}
