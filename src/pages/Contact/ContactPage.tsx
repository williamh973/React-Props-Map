import { useState } from "react";
import { ContactForm } from "../../components/Forms/ContactForm/ContactForm.component";
import { Button } from "../../components/ui/button/Button";
import { PropContact } from "../../services/interfaces/Contact.interface";
import "./ContactPage.css";

export default function ContactPage(props: PropContact) {
  const { handleSubmitMessage, authorList } = props;
  const [isContactFormOpened, setIsContactFormOpened] =
    useState<boolean>(false);

  function openContactForm() {
    setIsContactFormOpened(!isContactFormOpened);
  }

  return (
    <main>
      <h1> Contact Page</h1>
      <Button
        id="contactForm-openButton"
        label={
          isContactFormOpened ? "Fermer le formulaire" : "Ouvrir le formulaire"
        }
        type="button"
        onClick={openContactForm}
      />
      <>
        {isContactFormOpened && (
          <ContactForm
            handleSubmitMessage={handleSubmitMessage}
            authorList={authorList}
          />
        )}
      </>
    </main>
  );
}
