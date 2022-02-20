import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/get-movies';
import { CastItem } from 'components/CastItem';

import { List, NotificationText } from './styledPages/Cast.styled';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCasts() {
      try {
        const actors = await getMovieCast(movieId);
        setCast(actors.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCasts();
  }, [movieId]);

  return (
    <>
      {cast ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <CastItem
              key={id}
              avatar={profile_path}
              name={name}
              character={character}
            />
          ))}
        </List>
      ) : (
        <NotificationText>There are no cast for this movie</NotificationText>
      )}
    </>
  );
}
