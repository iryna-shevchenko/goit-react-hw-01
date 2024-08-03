import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section className={css.friendList}>
      <ul className={css.list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        ))}
      </ul>
    </section>
  );
}