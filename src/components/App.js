import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="container">
      <header>

        <h1>ورود / عضویت</h1>

        <div className="support-note">
          <span className="note-ie">Sorry, only modern browsers.</span>
        </div>

      </header>

      <section className="main">
        <Login />
      </section>

    </div>
  );
}

export default App;
