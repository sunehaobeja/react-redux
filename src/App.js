import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <>
      <div className="App">
        <HomeContainer/>
        <h1>App component</h1>
        <User data={{ name: 'Suneha', age: 25 }} />
      </div>
    </>
  );
}
export default App;
