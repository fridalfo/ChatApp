import './App.css';
import ChatBox from './component/chatBox/ChatBox';
import ChatWidget from './component/chatWidget/ChatWidget';

function App() {
  return (
    <div className="chatty">
      <ChatBox></ChatBox>
      <ChatWidget></ChatWidget>
      
    </div>
  );
}

export default App;
