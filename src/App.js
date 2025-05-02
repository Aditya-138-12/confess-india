import './App.css';
import MainConfession from './confession/main/main';
import MainHeader from './header/mainHeader';

function App() {
  return (
    <>
      <div className='main'>
        <MainHeader/>
        <MainConfession/>
      </div>
    </>
  );
}

export default App;
