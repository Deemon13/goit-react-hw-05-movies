import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  border-radius: 1rem;
  margin-bottom: 10rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  &:not(:last-of-type) {
    margin-bottom: 0.4rem;
  }
  @media screen and (min-width: 48em) {
    font-size: 2rem;
  }
`;

export const ProfileAvatar = styled.img`
  margin: 0 auto;
  margin-bottom: 0.6rem;
`;
