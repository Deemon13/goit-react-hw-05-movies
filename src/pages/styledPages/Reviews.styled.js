import styled from '@emotion/styled';

export const List = styled.ul`
  min-width: 32rem;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  text-align: justify;
  &:not(:last-of-type) {
    margin-bottom: 0.4rem;
  }
  @media screen and (min-width: 48em) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;
