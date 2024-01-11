import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import LaptopContainer from './components/LaptopContainer';

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <LaptopContainer />
        </header>
      </div>
    // </Provider>
  );
}

export default App;
