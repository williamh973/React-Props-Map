import { useState } from "react";
import "./AuthorForm.component.css";
import { Button } from "../../ui/button/Button";
import {
  PropAuthor,
  PropGetAuthor,
} from "../../../services/interfaces/Author.interface";
import { Input } from "../../ui/form/Input";

export function AuthorForm({ handleSubmitAuthor }: PropGetAuthor) {
  const [author, setAuthor] = useState<PropAuthor>({
    firstname: "",
    lastname: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setAuthor({ ...author, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    handleSubmitAuthor(author);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          id="authorForm-firstnameInput"
          type="text"
          name="firstname"
          placeholder="Entrer le Nom"
          onChange={handleChange}
        />
        <Input
          id="authorForm-lastnameInput"
          type="text"
          name="lastname"
          placeholder="Entrer le Prénom"
          onChange={handleChange}
        />

        <Button label="Créer l'auteur" type="submit" onClick={() => {}} />
      </form>
    </>
  );
}
