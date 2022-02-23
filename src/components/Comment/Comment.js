import React, { useState } from "react";
import deleteIcon from "../../../public/images/icon-delete.svg";
import editIcon from "../../../public/images/icon-edit.svg";
import replyIcon from "../../../public/images/icon-reply.svg";
import AddComment from "../AddComment/AddComment";
import Counter from "./Counter";
import UserInfo from "./UserInfo";

const Comment = ({ comment, currentUser, handleDelete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const handleEdit = () => {
    setEditActive(!editActive);
  };
  const handleReply = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="">
      <div className="mb-5 rounded-lg bg-white p-4">
        <UserInfo comment={comment} currentUser={currentUser} />
        {editActive ? (
          <textarea
            name=""
            id=""
            value={comment.content}
            className="h-44 w-full rounded-lg border-2 border-gray-200 p-3 text-sm text-gray-400"
          />
        ) : (
          <p className="mb-4 text-left text-sm text-gray-400">
            {comment.content}
          </p>
        )}
        <div className="flex flex-row items-center justify-between">
          <Counter comment={comment} className="" />
          {currentUser.username !== comment.user.username && (
            <button type="button" onClick={handleReply}>
              <div className="flex cursor-pointer flex-row items-center gap-1 hover:opacity-50">
                <img
                  src={replyIcon.src}
                  width={10}
                  height={10}
                  alt=""
                  className="cursor-pointer "
                />
                <p className="text-Moderate-blue">Reply</p>
              </div>
            </button>
          )}
          {comment.user.username === currentUser.username && (
            <div className="flex flex-row items-center gap-3">
              <button type="button" onClick={() => handleDelete()}>
                <div className="flex cursor-pointer flex-row items-center gap-1 hover:opacity-50">
                  <img
                    src={deleteIcon.src}
                    width={10}
                    height={10}
                    alt=""
                    className="cursor-pointer "
                  />
                  <p className="text-red-500">Delete</p>
                </div>
              </button>
              <button type="button" onClick={handleEdit}>
                <div className="flex cursor-pointer flex-row items-center gap-1 hover:opacity-50">
                  <img
                    src={editIcon.src}
                    width={10}
                    height={10}
                    alt=""
                    className="cursor-pointer "
                  />
                  <p className="text-Moderate-blue">Edit</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      <AddComment user={currentUser} isVisible={isVisible} />
      <div className="border-l-2 pl-4 md:ml-8">
        {comment.replies &&
          comment.replies.map((reply) => (
            <div className="md:pl-5">
              <Comment
                key={reply.id}
                comment={reply}
                currentUser={currentUser}
                handleDelete={handleDelete}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comment;
