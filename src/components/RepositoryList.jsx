import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
