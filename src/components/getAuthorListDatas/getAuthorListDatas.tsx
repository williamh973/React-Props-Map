import { PropAuthor } from "../../services/interfaces/Author.interface";

export function GetAuthorListDatas({ firstname, lastname }: PropAuthor) {
  return (
    <>
      <main>
        <ul>
          <li>
            <span>{firstname}</span>
            <span>{lastname}</span>
          </li>
        </ul>
      </main>
    </>
  );
}
