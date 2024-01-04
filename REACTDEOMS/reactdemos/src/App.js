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
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import HooksCounter from './hooks/HooksCounter';
import HooksCounter2 from './hooks/HooksCounter2';
import HooksCounter3 from './hooks/HooksCounter3';
import HooksCounter4 from './hooks/HooksCounter4';
import UseEffect1 from './hooks/UseEffect1';
import HookMouse from './hooks/HookMouse';
import HooksContainer from './hooks/HooksContainer';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import { UserProvider1 } from './components/UserContext';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
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
       {/* <Form/> */}
       {/* <ParentComp></ParentComp> */}
       {/* <RefsDemo></RefsDemo> */}
       {/* <FRParentInput></FRParentInput> */}
       {/* <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
       </ErrorBoundary>
       <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
       </ErrorBoundary>
       <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
       </ErrorBoundary> */}
{/* 
       <ClickCounter></ClickCounter>
       <HoverCounter></HoverCounter> */}
       {/* <HooksCounter/> */}
       {/* <HooksCounter2/> */}
       {/* <HooksCounter3/> */}
       {/* <HooksCounter4/> */}
      {/* </header> */}
      {/* <UseEffect1/> */}
      {/* <HookMouse/> */}
      {/* <HooksContainer/> */}
      {/* <UserProvider value="Context Object"> */}
          <ComponentC/>
      {/* </UserProvider> */}

      {/* <UserProvider1>
        <ComponentE/>
      </UserProvider1> */}
      
      
    </div>
  );
}

export default App;
