import React from "react";
import plusIcon from "../../../public/images/icon-plus.svg";
import minusIcon from "../../../public/images/icon-minus.svg";

const Counter = ({ comment }) => (
  <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-gray-100 p-2">
    <img
      src={plusIcon.src}
      width={10}
      height={10}
      alt=""
      className="cursor-pointer"
    />
    <p className="text-Dark-blue">{comment.score}</p>
    <img
      src={minusIcon.src}
      width={10}
      height={10}
      alt=""
      className="cursor-pointer "
    />
  </div>
);

export default Counter;
