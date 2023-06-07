import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
export default function Spiner() {
  return (
    <LoaderContainer>
      <ThreeDots color="#fffc00" height={200} width={200} />
    </LoaderContainer>
  );
}
