import { Link } from 'react-router-dom';

export function MoviesList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map(item => {
        let posterPath = `http://image.tmdb.org/t/p/w500${item.poster_path}`;
        return (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <img
                src={posterPath}
                alt={item.title}
                width="150px"
                height="200px"
              />
              <p>{item.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
