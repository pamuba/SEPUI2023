import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import Conditionsls from './components/Conditionsls';
import NameList from './components/NameList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Greet name="Bruce" character="Batman">
          <img src={logo} className="App-logo" alt="logo" />
          <button>CLICK</button>
       </Greet> */}
       {/* <Greet name="Clark" character="Sueprman"/>
       <Greet name="Tony" character="Ironman"/> */}
       {/* <Welcome name="Jackel" character="Ironman"></Welcome> */}
       {/* <Message/> */}
       {/* <Counter/> */}
       {/* <ParentComponent/> */}
       {/* <Conditionsls/> */}
       {/* <NameList></NameList> */}
       <Form/>
      </header>
    </div>
  );
}

export default App;
