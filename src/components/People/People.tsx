import React, { useEffect, useState } from 'react';

import { Loader } from '../Loader';
import { Person } from '../../types';
import { getPeople } from '../../api';
import { PeopleTable } from '../PeopleTable';

export const People: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loader, setLoader] = useState<boolean>();
  const [errorMassege, setErrorMassege] = useState('');

  useEffect(() => {
    setLoader(true);

    getPeople()
      .then(setPeople)
      .catch(() => setErrorMassege('Something went wrong'))
      .finally(() => setLoader(false));
  }, []);

  return (
    <div className="block">
      <div className="box table-container">
        {loader && <Loader />}

        {errorMassege && (
          <p data-cy="peopleLoadingError" className="has-text-danger">
            {errorMassege}
          </p>
        )}

        {!errorMassege && people.length === 0 && !loader && (
          <p data-cy="noPeopleMessage">There are no people on the server</p>
        )}

        {people.map(person => {
          return <PeopleTable person={person} key={person.slug} />;
        })}
      </div>
    </div>
  );
};
