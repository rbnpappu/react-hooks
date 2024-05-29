import './App.css';
import Headers from './components/Headers';
import ComponentUseStateHook from './components/componentusestatehook';
import ComponentUseEffectHook from './components/componentuseeffecthook';
import UserContextProvider from './components/UserContextPeovider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Headers/>
      <ComponentUseStateHook/>
      <ComponentUseEffectHook/>
      <UserContextProvider>
      <h2>Login Profile</h2>
      <Login/>
      <Profile/>
      </UserContextProvider>
    </div>
    </UserContextProvider>
  );
}

export default App;
