import { LinkStyled } from './Navigation.styled';

export function Navigation() {
  return (
    <>
      <LinkStyled to="/homepage">Home</LinkStyled>
      <LinkStyled to="/movies">Movies</LinkStyled>
    </>
  );
}
