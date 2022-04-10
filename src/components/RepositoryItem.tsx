interface IRepositoryItemProps {
  repository: {
    name: string;
    full_name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem({
  repository: { name, full_name, description, html_url },
}: IRepositoryItemProps) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description ?? full_name}</p>
      <a href={html_url} target="_blank">
        Acessar repositório &rarr;
      </a>
    </li>
  );
}
