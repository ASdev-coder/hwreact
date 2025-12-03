import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';
import MainMenu from './components/templates/MainMenu';

function App() {
  return (
    <>
      <header>
        <MainMenu />
      </header>
      <Outlet />
    </>
  );
}

export default App;
