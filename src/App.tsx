import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import MessagePage from "./pages/Message/MessagePage";
import { useState } from "react";
import NotFoundPage from "./services/utils/NotFoundPage.utils";
import { Message } from "./components/Message/Message.component";
import { AuthorPage } from "./pages/Author/AuthorPage";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function getDataFromFormComponent(message: Message): void {
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
                handleSubmitMessage={getDataFromFormComponent}
                firstname="Leon"
                city="Paris"
              />
            }
          />
          <Route
            path="/message"
            element={<MessagePage messages={messages} />}
          />
        </Route>
        <Route path="/author" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
