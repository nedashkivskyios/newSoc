import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="myposts" id="myposts"/>
        <button>+</button>
      </div>
      <div>
        <Post title={'hey how are you ?'}/>
        <Post title={'im fine and U ?'}/>
        <Post title={'ta tozhe'}/>
      </div>
    </div>
  );
};
