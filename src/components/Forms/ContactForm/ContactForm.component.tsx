import { useState } from "react";
import { Button } from "../../ui/button/Button";
import "./ContactForm.component.css";
import { PropMessage } from "../../../services/interfaces/Message.interface";
import { Input } from "../../ui/form/Input";
import { GetAuthorListDatas } from "../../getAuthorListDatas/getAuthorListDatas";
import { PropAuthor } from "../../../services/interfaces/Author.interface";
import { PropContact } from "../../../services/interfaces/Contact.interface";

export function ContactForm(props: PropContact) {
  const { handleSubmitMessage, authorList } = props;

  const [form, setForm] = useState<PropMessage>({
    title: "",
    category: "",
    message: "",
  });

  const [isAuthorListOpened, setIsAuthorListOpened] = useState<boolean>(false);

  function openAuthorList() {
    setIsAuthorListOpened(!isAuthorListOpened);
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    handleSubmitMessage(form);
    console.log("authorList", authorList.length);
  }

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Créer Message</h3>
        <Input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          placeholder="Entrer le titre"
        />

        <select name="category" id="category" onChange={handleChange}>
          <option value="">Selectionne une categorie</option>
          <option value="front">front</option>
          <option value="back">back</option>
          <option value="fullstack">fullstack</option>
          <option value="other">Autres</option>
        </select>

        <Button
          label={
            isAuthorListOpened ? "Fermer la liste" : "Sélectionner l'auteur"
          }
          type="button"
          onClick={openAuthorList}
        />

        {isAuthorListOpened &&
          authorList.map((author: PropAuthor, index: number) => (
            <div key={index}>
              <GetAuthorListDatas
                key={index}
                firstname={author.firstname}
                lastname={author.lastname}
              />
            </div>
          ))}

        <textarea
          name="message"
          id="message"
          onChange={handleChange}
          placeholder="Entrer le message"
        ></textarea>

        <Button label="Envoyer votre message" type="submit" />
      </form>
    </main>
  );
}
