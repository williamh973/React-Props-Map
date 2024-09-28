import { ContactForm } from "../../components/Forms/ContactForm/form.component";
import { PropContact } from "../../services/interfaces/Contact.interface";
import "./ContactPage.css";

export default function ContactPage(props: PropContact) {
  const { handleSubmitMessage, firstname, city } = props;

  return (
    <>
      <h1> Contact Page</h1>
      <ContactForm
        handleSubmitMessage={handleSubmitMessage}
        firstname={firstname}
        city={city}
      />
    </>
  );
}
