import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          alt=''
        />
        <Avatar src={user.photoURL} className='sidebar__avatar'>
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>244</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('nodejs')}
        {recentItem('javascript')}
        {recentItem('design')}
        {recentItem('programming')}
      </div>
    </div>
  );
};

export default Sidebar;
