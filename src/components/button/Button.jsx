import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export default function LoadMoreButton({ onClick }) {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      LOAD MORE
    </LoadMoreBtn>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};
