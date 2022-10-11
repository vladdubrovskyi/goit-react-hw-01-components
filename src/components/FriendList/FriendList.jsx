import PropTypes from 'prop-types';
import { FriendListMarcup } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListMarcup>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListMarcup>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};