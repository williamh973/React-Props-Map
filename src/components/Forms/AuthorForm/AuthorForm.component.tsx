import { useState } from "react";
import "./AuthorForm.component.css";
import { Button } from "../../ui/button/Button";

export function AuthorForm() {
  const [author, setAuthor] = useState({
    firstname: "",
    lastname: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setAuthor({ ...author, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Auteur : ", author);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="Entrer le Nom"
          onChange={handleChange}
        />
        <input
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
