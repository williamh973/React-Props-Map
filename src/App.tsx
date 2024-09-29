import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import MessagePage from "./pages/Message/MessagePage";
import { useState } from "react";
import NotFoundPage from "./services/utils/NotFoundPage.utils";

import { AuthorPage } from "./pages/Author/AuthorPage";
import { PropAuthor } from "./services/interfaces/Author.interface";
import { PropMessage } from "./services/interfaces/Message.interface";

function App() {
  const [messages, setMessages] = useState<PropMessage[]>([]);
  const [authors, setAuthors] = useState<PropAuthor[]>([]);

  function getDataFromContactFormComponent(message: PropMessage): void {
    setMessages([...messages, message]);
  }

  function getDataFromAuthorFormComponent(author: PropAuthor): void {
    setAuthors([...authors, author]);
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
                handleSubmitMessage={getDataFromContactFormComponent}
                authorList={authors}
              />
            }
          />
          <Route
            path="/author"
            element={
              <AuthorPage handleSubmitAuthor={getDataFromAuthorFormComponent} />
            }
          />
          <Route
            path="/message"
            element={<MessagePage messages={messages} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
