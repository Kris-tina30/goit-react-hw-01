import React from 'react';

import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? <p className={css.online}>Online</p> : <p className={css.ofline}>Offline</p>}
    </div>
  );
};

export default FriendListItem;
