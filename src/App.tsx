import './App.css';

const logo = new URL('./image/acromere.png', import.meta.url);

export function App() {
    return (
    <>
      <h1>
          <img src={logo} alt="ACM" width="64" height="64"/>&nbsp;
          Acromere
      </h1>
      <p>We're under construction. Please check back for an update soon.</p>
    </>
  );
}
