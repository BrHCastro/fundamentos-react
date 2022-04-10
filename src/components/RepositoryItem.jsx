export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description ?? repository.full_name}</p>
      <a href={repository.html_url} target="_blank">
        Acessar repositório &rarr;
      </a>
    </li>
  );
}
