import "./App.css";
import LandingPage from "./components/LandingPage";
import ChatComponent from "./components/Chat";
import Confirm from "./components/Confirm";
import { useSelector } from "react-redux";

function App() {
  const showChatBot = useSelector((state) => state.chat.showChatBot);
  const name = useSelector((state) => state.chat.name);
  const age = useSelector((state) => state.chat.age);
  return (
    <>
      {showChatBot ? (
        <ChatComponent />
      ) : (
        <>
          {name && age && <Confirm />}
          {!name && !age && <LandingPage />}
        </>
      )}
    </>
  );
}

export default App;
