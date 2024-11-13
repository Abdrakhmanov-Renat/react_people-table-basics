import classNames from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Person } from '../../types';
import { PersonLink } from '../PersonLink';

interface Props {
  person: Person;
}

export const PeopleTable: React.FC<Props> = ({ person }) => {
  const { slug } = useParams();
  const currentPersonSlug = slug ? slug : '';

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        <tr
          data-cy="person"
          className={classNames({
            'has-background-warning': person.slug === currentPersonSlug,
          })}
        >
          <td>
            <PersonLink person={person} />
          </td>

          <td>{person.sex}</td>
          <td>{person.born}</td>
          <td>{person.died}</td>
          <td>{person.motherName ? person.motherName : '-'}</td>
          <td>{person.fatherName ? person.fatherName : '-'}</td>
        </tr>
      </tbody>
    </table>
  );
};
