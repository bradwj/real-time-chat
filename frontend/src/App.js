import './App.css';
import { connect, sendMsg } from './api';
import Header from "./components/Header/Header"

function App() {
  connect();
  
  function sendMessage() {
    console.log("Hello");
    sendMsg("Hello");
  }

  return (
    <div className="App">
      <Header />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
