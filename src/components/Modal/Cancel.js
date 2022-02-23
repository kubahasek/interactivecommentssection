import React from "react";

const Cancel = ({ setShow }) => (
  <button type="button" onClick={() => setShow(false)}>
    <div className="rounded-lg bg-gray-500 p-2 uppercase text-white">
      No, cancel
    </div>
  </button>
);

export default Cancel;
