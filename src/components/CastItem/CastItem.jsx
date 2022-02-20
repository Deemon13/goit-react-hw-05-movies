import PropTypes from 'prop-types';

import { Item, Text, ProfileAvatar } from './CastItem.styled';
import NoImage from '../../images/NoImageAvailable.png';

export function CastItem({ avatar, name, character }) {
  return (
    <Item>
      <ProfileAvatar
        src={avatar ? `http://image.tmdb.org/t/p/w500${avatar}` : `${NoImage}`}
        alt={name ? `Avatar of ${name}` : `Avatar`}
      />
      <Text>{name}</Text>
      <Text>Character: {character}</Text>
    </Item>
  );
}

CastItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
