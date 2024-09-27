import { Button } from "../../components/ui/button/Button";

export function AuthorPage() {
  return (
    <form>
      <input type="text" name="firstname" />
      <input type="text" name="lastname" />

      <Button label="Créer l'auteur" type="submit" onClick={() => {}} />
    </form>
  );
}
