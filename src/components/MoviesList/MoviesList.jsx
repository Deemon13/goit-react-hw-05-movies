import PropTypes from 'prop-types';

import { MoviesListItem } from './MoviesListItem';

import { List } from './MoviesList.styled';

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

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
