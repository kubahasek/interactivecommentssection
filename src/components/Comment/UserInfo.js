import React from "react";

const UserInfo = ({ comment, currentUser }) => (
  <div className="mb-4 flex flex-row items-center">
    <img
      src={comment.user.image.png}
      width={30}
      height={30}
      className="mr-5"
      alt="user profile"
    />

    <p className=" text-sm text-Dark-blue">{comment.user.username}</p>
    {comment.user.username === currentUser.username && (
      <p className="ml-2 bg-Moderate-blue p-1 text-xs text-white">you</p>
    )}
    <p className=" ml-4 text-sm opacity-60">{comment.createdAt}</p>
  </div>
);

export default UserInfo;
