import { LinkStyled } from './Navigation.styled';

export function Navigation() {
  return (
    <>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/movies">Movies</LinkStyled>
    </>
  );
}
