import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export function Loader() {
  return <TailSpin height="32" width="32" color="black" ariaLabel="loading" />;
}
