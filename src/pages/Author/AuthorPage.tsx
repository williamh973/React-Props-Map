import "./AuthorPage.css";
import { AuthorForm } from "../../components/Forms/AuthorForm/AuthorForm.component";
import { PropGetAuthor } from "../../services/interfaces/Author.interface";

export function AuthorPage(props: PropGetAuthor) {
  const { handleSubmitAuthor } = props;

  return (
    <>
      <h1>Author page</h1>
      <AuthorForm handleSubmitAuthor={handleSubmitAuthor} />
    </>
  );
}
