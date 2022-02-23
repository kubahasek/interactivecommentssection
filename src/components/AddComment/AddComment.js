import { AnimatePresence } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import SendBTN from "./SendBTN";

const AddComment = ({ user, isVisible, value = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="mb-5 rounded-lg bg-white p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              name=""
              {...register("comment", { required: true })}
              id=""
              cols="20"
              rows="3"
              className="w-full rounded-lg border-2 border-gray-200 p-3"
              placeholder="Add a comment..."
              value={value}
            />
            {errors.comment && (
              <p className="text-red-600">This field is required</p>
            )}
          </form>
          <div className="mt-3 flex items-center justify-between">
            <img
              alt="user profile"
              src={user.image.png}
              width={30}
              height={30}
            />
            <button type="submit" onClick={handleSubmit(onSubmit)}>
              <SendBTN />
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddComment;
