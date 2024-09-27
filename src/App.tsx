import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import MessagePage from "./pages/Message/MessagePage";
import { Message } from "./services/interfaces/Message.interface";
import { useState } from "react";
import MessageDetailPage from "./pages/Message/MessageDetailPage";
import NotFoundPage from "./services/utils/NotFoundPage.utils";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSubmitMessage(message: Message): void {
    setMessages([...messages, message]);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route>
          <Route
            path="/contact"
            element={
              <ContactPage
                handleSubmitMessage={handleSubmitMessage}
                firstname="Leon"
                city="Paris"
              />
            }
          />
          <Route
            path="/message"
            element={<MessagePage messages={messages} />}
          />
          <Route
            path="/message/:idMessage/:idPage"
            element={<MessageDetailPage />}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
