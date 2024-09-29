export interface PropAuthor {
  firstname: string;
  lastname: string;
}

export interface PropGetAuthor {
  handleSubmitAuthor: (author: PropAuthor) => void;
}
