import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';

export default function FriendList({friends}) {
   

    return (
    <ul className={css.friendsList}>
        {friends.map(friend =>
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={friend.name}
            />    
        )}
    </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired
};