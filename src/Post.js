import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

//wrapping in forward ref so that the animations can use the reference to the created object and then the anoimation work
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
        <InputOptions title='Like' color='gray' Icon={ThumbUpAltOutlinedIcon} />
        <InputOptions title='Comment' color='gray' Icon={ChatIcon} />
        <InputOptions title='Share' color='gray' Icon={ShareIcon} />
        <InputOptions title='Send' color='gray' Icon={SendIcon} />
      </div>
    </div>
  );
});

export default Post;
