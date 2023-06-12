import PropTypes from 'prop-types';
const { ListItem, Status, Name } = require('./FriendListItem.styled');

export const FriendListItem = ({ friend }) => {
  return (
    <ListItem>
      <Status status={friend.isOnline}></Status>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <Name>{friend.name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
