import { useLocation } from 'react-router-dom';

import { ReturnButton } from './ButtonGoBack.styled';

export function ButtonGoBack() {
  const location = useLocation();
  return <ReturnButton to={location?.state?.from ?? '/'}>Go back</ReturnButton>;
}
