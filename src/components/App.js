import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="container">
      <header>

        <h1>ورود / عضویت</h1>

      </header>

      <section className="main">
        {/* <Login /> */}
        <Register />
      </section>

    </div>
  );
}

export default App;
