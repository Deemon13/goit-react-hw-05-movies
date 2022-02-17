import { List } from './MoviesList.styled';
import { MoviesListItem } from './MoviesListItem';

export function MoviesList({ items }) {
  return (
    <List>
      {items.map(({ id, title, poster_path }) => {
        return (
          <MoviesListItem key={id} id={id} title={title} poster={poster_path} />
        );
      })}
    </List>
  );
}
