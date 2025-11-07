import { Link } from 'react-router-dom';
import { Person } from '../../types';

type Props = {
  name: string;
  people: Person[];
  sex?: string;
};

export const PersonLink: React.FC<Props> = ({ name, people }) => {
  const foundPerson = people.find(person => person.name === name);

  if (foundPerson) {
    return (
      <Link
        to={`/people/${foundPerson.slug}`}
        className={foundPerson.sex === 'f' ? 'has-text-danger' : ''}
      >
        {foundPerson.name}
      </Link>
    );
  }

  return <span>{name}</span>;
};
