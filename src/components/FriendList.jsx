import React from 'react';

import css from './FriendList.module.css';

import clsx from 'clsx';

import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  const classes = [css.friendList];
  return (
    <ul className={classes}>
      {friends.map(({ isOnline, id, avatar, name }) => (
        <li className={clsx(css.friendListCard)} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
