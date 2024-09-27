import { useState } from "react";
import { Button } from "../../components/ui/button/Button";

export function AuthorPage() {
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" onChange={handleChange} />
      <input type="text" name="lastname" onChange={handleChange} />

      <Button label="Créer l'auteur" type="submit" onClick={() => {}} />
    </form>
  );
}
