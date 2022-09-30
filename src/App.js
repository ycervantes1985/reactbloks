import './App.css';
import Advertisement from './Components/Advertisement';
import Header from './Components/Header';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import SubContents from './Components/SubContents';


const App = () =>{  
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );

}

export default App;
