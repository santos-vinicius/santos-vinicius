import './App.scss';
import Buttons from './components/buttons/Buttons';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="container">
      <main className="main">
        <Profile />
        <Buttons />
      </main>
    </div>
  );
}

export default App;
