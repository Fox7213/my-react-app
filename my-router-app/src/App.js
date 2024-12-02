import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import myImage from './aa.jpg';

function Home() {
  return (
    <div>
      <h1 style={{ fontSize: '3em' }}>Главная страница</h1>
      <Link to="/about" style={{ fontSize: '1.5em' }}>Перейти на страницу "О нас"</Link>
      <br />
      <Link to="/profile/123" style={{ fontSize: '1.5em' }}>Перейти на страницу профиля (ID: 123)</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1 style={{ fontSize: '3em' }}>О нас</h1>
      <Link to="/" style={{ fontSize: '1.5em', marginBottom: '3em'}}>На главную</Link>
      <br/>
      <img style={{marginTop: '3em'}} src={myImage} alt="прикольчик" />
    </div>
  );
}

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1 style={{ fontSize: '3em' }}>Профиль пользователя ID: {id}</h1>
      <p style={{ fontSize: '1.8em' }}>Текущий URL: {location.pathname}</p>
      <button onClick={goHome} style={{ fontSize: '1.5em', borderRadius: '0.5em', padding: '0.3em' }}>На главную</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;