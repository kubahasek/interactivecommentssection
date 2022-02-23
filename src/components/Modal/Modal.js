import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Cancel from "./Cancel";
import Delete from "./Delete";

const Modal = ({ show, setShow }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="fixed top-0 left-0 bottom-0 right-0 z-10 bg-black/50"
        key="modaldiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="fixed left-[50%] top-[50%] mx-auto w-[90%] translate-y-[-50%] translate-x-[-50%]">
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: -1000 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -1000 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 125 }}
            className="rounded-lg bg-white p-7 text-left"
          >
            <h1 className="mb-3 font-bold">Delete comment</h1>
            <p className="opacity-50">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <div className="mt-3 flex gap-2 text-sm">
              <Cancel setShow={setShow} />
              <Delete setShow={setShow} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Modal;
