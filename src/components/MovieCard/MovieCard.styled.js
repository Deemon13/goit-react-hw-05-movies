import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 10rem;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ContainerMovie = styled.div`
  min-width: 30rem;
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 64em) {
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  width: 20rem;
`;

export const ContainerMovieDetails = styled.div`
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 64em) {
    margin-left: 2rem;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  margin: 0 0 2rem 0;
  font-size: 2rem;
  font-weight: 500;
  @media screen and (min-width: 30em) {
    font-size: 2.6rem;
  }
`;

export const TitleOverview = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem 0;
  @media screen and (min-width: 48em) {
    font-size: 2.4rem;
  }
`;

export const TitleGenres = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem 0;
  @media screen and (min-width: 48em) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  text-align: justify;
  @media screen and (min-width: 48em) {
    font-size: 2rem;
  }
`;
