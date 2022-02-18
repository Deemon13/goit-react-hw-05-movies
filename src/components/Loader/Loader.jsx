import { CradleLoader } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export function Loader() {
  return (
    <CradleLoader
      height="60"
      width="60"
      color="#somecolor"
      ariaLabel="loading"
    />
  );
}
