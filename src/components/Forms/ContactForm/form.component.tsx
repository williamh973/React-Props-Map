import { useState } from "react";
import { PropContact } from "../../../services/interfaces/Contact.interface";
import { Button } from "../../ui/button/Button";
import "./form.component.css";
import { Message } from "../../Message/Message.component";

export function ContactForm({ handleSubmitMessage }: PropContact) {
  const [form, setForm] = useState<Message>({
    title: "",
    category: "",
    message: "",
  });

  function handleChange(evt: any) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(evt: any) {
    evt.preventDefault();
    handleSubmitMessage(form);
  }

  return (
    <div>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(evt) => handleChange(evt)}
          placeholder="Entrer le titre"
        />

        <select
          name="category"
          id="category"
          onChange={(evt) => handleChange(evt)}
        >
          <option value="">Selectionne une categorie</option>
          <option value="front">front</option>
          <option value="back">back</option>
          <option value="fullstack">fullstack</option>
          <option value="other">Autres</option>
        </select>

        <textarea
          name="message"
          id="message"
          onChange={(evt) => handleChange(evt)}
          placeholder="Entrer le message"
        ></textarea>

        <Button
          label="Envoyer votre message"
          type="submit"
          onClick={() => {}}
        />
      </form>
    </div>
  );
}
