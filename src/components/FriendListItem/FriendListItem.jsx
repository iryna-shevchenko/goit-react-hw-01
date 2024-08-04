import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  const status = clsx({
    [css.isOnline]: isOnline,
    [css.isOffline]: !isOnline,
  });

  return (
    <>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
}