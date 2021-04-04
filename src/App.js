import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar'
import Profile from './Profile'
import Title from './Title'
import Data from './Data'

function App() {
  return (
    <div className="App">
      <AppBar />
      <Title />
      < Profile/>
      <Data/>
    </div>
  );
}

export default App;
