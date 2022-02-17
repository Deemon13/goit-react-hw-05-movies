import styled from '@emotion/styled';

export const List = styled.ul`
  min-width: 32rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  @media screen and (min-width: 48em) {
    justify-content: space-evenly;
  }
`;

export const Item = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 3rem;
  @media screen and (min-width: 48em) {
    flex-basis: 40%;
    margin-right: 10px;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 64em) {
    flex-basis: 21%;
    margin-right: 0;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 90em) {
    flex-basis: 18%;
  }
  @media screen and (min-width: 105em) {
    flex-basis: 17%;
  }
`;

export const MoviePoster = styled.img`
  object-fit: cover;
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.75);
  }
`;
