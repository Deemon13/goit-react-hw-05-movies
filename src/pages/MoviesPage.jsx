import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/get-movies';

export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);
  // const [searchDone, setsearchDone] = useState(false);
  const query = searchParams.get('query');
  // console.log('query', query);

  useEffect(() => {
    if (query) {
      async function getSearchedMovie() {
        setLoading(true);
        try {
          const movies = await getMovieByName(query);
          if (movies.results.length === 0) {
            alert(`There is no movie with query ${query}`);
            return;
          }
          setMovies(movies.results);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getSearchedMovie();
    }
  }, [query]);

  // useEffect(() => {
  //   async function getMovies() {
  //     setLoading(true);
  //     try {
  //       const movies = await getPopularMovies(page);
  //       // prevState => [...prevState, ...images]
  //       setMovies(prevState => [...prevState, ...movies.results]);
  //     } catch (error) {
  //       console.error();
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getMovies();
  // }, [page]);

  function handleSubmit(event) {
    event.preventDefault();
    const queryInput = event.currentTarget.elements.search.value;
    if (queryInput === '') {
      alert('Empty input!');
      return;
    }
    // console.log('queryInput', queryInput);
    setSearchParams({ query: queryInput.trim() });
    // console.log('searchParams', searchParams);
  }

  return (
    <main>
      <SearchBar onSubmitForm={handleSubmit} />
      MoviesPage
      {loading && <Loader />}
      {query && !loading && <MoviesList items={movies} />}
    </main>
  );
}
