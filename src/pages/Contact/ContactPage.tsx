import { ContactForm } from "../../components/form/form.component";
import { PropContact } from "../../services/interfaces/Contact.interface";
import "./Contact.css";

export default function ContactPage(props: PropContact) {
  /* type message = {
        title: string,
        category: string,
        message: string,
    } */
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
